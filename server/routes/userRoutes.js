import express from "express";

import {
  addNewUser,
  deleteUser,
  getAllUsers,
  getUserById,
  getUsersByRole,
  updateUser,
} from "../controllers/userController.js";
import validateSchema from "../middlewares/validateSchema.js";
import { verifyAdmin } from "../middlewares/verifyToken.js";
import userSchema from "../validations/userValidation.js";

const router = express.Router();

router.get("/", verifyAdmin, getAllUsers);
router.delete("/:id", verifyAdmin, deleteUser);
router.post("/", verifyAdmin, validateSchema(userSchema), addNewUser);
router.put("/:id", verifyAdmin, validateSchema(userSchema), updateUser);
router.get("/:id", verifyAdmin, getUserById);
router.get("/users-by-role", verifyAdmin, getUsersByRole);

export default router;
