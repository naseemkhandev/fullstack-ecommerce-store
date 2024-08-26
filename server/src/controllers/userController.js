import { v2 as cloudinary } from "cloudinary";

import User from "../models/userModel.js";
import createError from "../helpers/createError.js";
import uploadImageToCloudinary from "../helpers/cloudinary.js";

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
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return next(createError(400, "Email already registered"));

    const user = new User({
      name,
      email,
      password,
      isAdmin: false,
      isVerified: false,
    });

    await user.save();

    res.status(201).json({ message: "User added successfully", user });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, email, bio } = req.body;
    const imagePath = req?.file?.path;

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

    if (req.file && imagePath) {
      const { secure_url, public_id } = await uploadImageToCloudinary(
        imagePath,
        "users"
      );

      if (user.profilePic && user.profilePic.public_id) {
        const publicId = user.profilePic.public_id;
        await cloudinary.uploader.destroy(publicId);
      }

      if (!secure_url) return next(createError(500, "Failed to upload image"));

      user.profilePic = { secure_url, public_id };
    }

    user.name = name;
    user.email = email;
    user.bio = bio;
    await user.save();

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    next(error);
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
