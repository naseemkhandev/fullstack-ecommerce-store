import express from "express";

import {
  login,
  register,
  logout,
  changePassword,
} from "../controllers/authController.js";
import {
  changePasswordSchema,
  loginSchema,
  registerSchema,
} from "../validations/authValidation.js";
import validateSchema from "../middlewares/validateSchema.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.put(
  "/change-password",
  verifyToken,
  validateSchema(changePasswordSchema),
  changePassword
);

export default router;
