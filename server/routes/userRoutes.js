import express from "express";
import {
  getAllUsers,
  deleteUser,
  addNewUser,
  getUserById,
  updateUser,
  getAuthUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken } from "../middlewares/verifyToken.js";
import validateSchema from "../middlewares/validateSchema.js";
import userSchema from "../validations/userValidation.js";
const router = express.Router();

router.get("/", verifyAdmin, getAllUsers);
router.delete("/:id", verifyAdmin, deleteUser);
router.post("/", verifyAdmin, validateSchema(userSchema), addNewUser);
router.put("/:id", verifyAdmin, validateSchema(userSchema), updateUser);
router.get("/:id", verifyAdmin, getUserById);
router.get("/get-auth-user", verifyToken, getAuthUser);

export default router;
