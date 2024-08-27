import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import createError from "../helpers/createError.js";
import User from "../models/userModel.js";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return next(createError(401, "You are not authenticated"));

    jwt.verify(token, config.jwtSecret, async (err, decoded) => {
      if (err) return next(createError(403, "Token is not valid"));

      const user = await User.findById(decoded.userId);
      if (!user) return next(createError(404, "User not found"));

      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, async () => {
    if (
      req.user &&
      (req.params.id === req.user._id.toString() || req.user.isAdmin)
    ) {
      next();
    } else {
      next(createError(403, "You are not authorized"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, async () => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "You are not authorized"));
    }
  });
};

export { verifyToken, verifyUser, verifyAdmin };
