import User from "../models/userModel.js";
import createError from "../helpers/createError.js";

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
    if (existingUser)
      return next(createError(400, "User with this email already registered"));

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
