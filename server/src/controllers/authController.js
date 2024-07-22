import bcrypt from "bcrypt";

import createError from "../helpers/createError.js";
import User from "../models/userModel.js";
import generateToken from "../helpers/generateToken.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return next(createError(400, "User already registered!"));

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const { password: userPassword, ...user } = newUser._doc;
    generateToken(newUser, res);

    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    next(error);
  }
};
