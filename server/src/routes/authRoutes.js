import express from "express";

import { register } from "../controllers/authController.js";
import validateSchema from "../middlewares/validateSchema.js";
import { registerSchema } from "../validations/authValidation.js";

const router = express.Router();

router.post("/register", validateSchema(registerSchema), register);

export default router;
