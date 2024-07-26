import express from "express";

import { login, register, logout } from "../controllers/authController.js";
import validateSchema from "../middlewares/validateSchema.js";
import { loginSchema, registerSchema } from "../validations/authValidation.js";

const router = express.Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);

export default router;
