import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

import User from "../models/userModel.js";
import createError from "../helpers/createError.js";
import uploadImageToCloudinary from "../helpers/cloudinary.js";

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    if (!users)
      return res.status(404).json({ message: "No users found", users: [] });

    res.status(200).json({
      message: "All users fetched successfully",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return next(createError(404, "User not found"));

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const addNewUser = async (req, res, next) => {
  try {
    const { name, email, password, bio, profilePic } = req.body;

    if (!name || !email || !password)
      return next(createError(400, "Name, email, and password are required"));

    const existingUser = await User.findOne({ email });
    if (existingUser) return next(createError(400, "Email already exists"));

    if (profilePic) {
      // Decode base64 string
      const matches = profilePic.match(
        /^data:image\/([A-Za-z-+/]+);base64,(.+)$/
      );
      if (!matches || matches.length !== 3) {
        return next(createError(400, "Invalid base64 string"));
      }

      const buffer = Buffer.from(matches[2], "base64");
      const tempDir = path.join(__dirname, "../temp");

      // Ensure the temp directory exists
      ensureTempDirExists(tempDir);

      // Save buffer to a temporary file
      const tempFilePath = saveBufferToTempFile(buffer, tempDir);

      // Upload the temporary file to Cloudinary
      const { secure_url, public_id } = await uploadImageToCloudinary(
        tempFilePath,
        "users"
      );

      if (!secure_url) return next(createError(500, "Failed to upload image"));

      profilePic = { secure_url, public_id };
    }

    const newUser = new User({
      name,
      email,
      password,
      bio,
      profilePic,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    next(createError(500, `Internal Server Error: ${error.message}`));
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, email, bio, profilePic } = req.body;

    const user = await User.findById(req.params.id).select("-password");
    if (!user) return next(createError(404, "User not found"));

    if (!name || !email)
      return next(createError(400, "Name and email are required"));

    const userWithSameEmail = await User.find({
      email,
      _id: { $ne: req.params.id },
    }).select("email");
    if (userWithSameEmail.length > 0)
      return next(createError(400, "Email already exists"));

    if (profilePic) {
      // Decode base64 string
      const matches = profilePic.match(
        /^data:image\/([A-Za-z-+/]+);base64,(.+)$/
      );
      if (!matches || matches.length !== 3) {
        return next(createError(400, "Invalid base64 string"));
      }

      const buffer = Buffer.from(matches[2], "base64");
      const tempDir = path.join(__dirname, "../temp");
      const tempFilePath = path.join(tempDir, `${uuidv4()}.jpg`);

      // Ensure the temp directory exists
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      // Save buffer to a temporary file
      fs.writeFileSync(tempFilePath, buffer);

      // Upload the temporary file to Cloudinary
      const { secure_url, public_id } = await uploadImageToCloudinary(
        tempFilePath,
        "users"
      );

      if (!secure_url) return next(createError(500, "Failed to upload image"));

      // Delete the old image from Cloudinary if it exists
      if (user.profilePic && user.profilePic.public_id) {
        await cloudinary.uploader.destroy(user.profilePic.public_id);
      }

      user.profilePic = { secure_url, public_id };
    }

    user.name = name;
    user.email = email;
    user.bio = bio;
    await user.save();

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    next(createError(500, `Internal Server Error: ${error.message}`));
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) return next(createError(404, "User not found"));

    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    next(error);
  }
};

export const getAuthUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) return next(createError(404, "User not found"));

    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    next(error);
  }
};

export const getUsersByRole = async (req, res, next) => {
  try {
    const users = await User.find().select("isAdmin");

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found", users: [] });
    }

    res.status(200).json({
      message: "Users fetched successfully",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};
