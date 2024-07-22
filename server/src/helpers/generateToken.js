import jwt from "jsonwebtoken";

import { config } from "../config/config.js";

const generateToken = (user, res) => {
  const token = jwt.sign(
    { userId: user._id, isAdmin: user.isAdmin },
    config.jwtSecret,
    {
      expiresIn: "15d",
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    secure: config.env !== "development",
    sameSite: config.env !== "development" && "Strict",
  });

  return token;
};

export default generateToken;
