import jwt from "jsonwebtoken";

import { config } from "../config/config.js";
import createError from "../helpers/createError.js";
import User from "../models/userModel.js";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) next(createError(401, "You are not authenticated"));

    jwt.verify(token, config.jwtSecret, async (err, user) => {
      if (err) next(createError(403, "Token is not valid"));

      req.user = await User.findById(user.userId).select("-password");
      next();
    });
  } catch (error) {
    next(error);
  }
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.params.id === req.user.userId || req.user.isAdmin) {
      next();
    } else next(createError(403, "You are not authorized"));
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else next(createError(403, "You are not authorized"));
  });
};

export { verifyToken, verifyUser, verifyAdmin };
