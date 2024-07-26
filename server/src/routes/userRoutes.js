import express from "express";
import {
  getAllUsers,
  deleteUser,
  addNewUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin } from "../middlewares/verifyToken.js";
import validateSchema from "../middlewares/validateSchema.js";
import userSchema from "../validations/userValidation.js";
const router = express.Router();

router.get("/", verifyAdmin, getAllUsers);
router.delete("/:id", verifyAdmin, deleteUser);
router.post("/", verifyAdmin, validateSchema(userSchema), addNewUser);
router.put("/", verifyAdmin, validateSchema(userSchema), updateUser);
router.get("/:id", verifyAdmin, getUserById);

export default router;
