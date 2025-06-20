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
import { verifyAdmin, verifyUser } from "../middlewares/verifyToken.js";
import userSchema from "../validations/userValidation.js";
import uploadImage from "../middlewares/uploadImage.js";

const router = express.Router();

router.get("/", verifyAdmin, getAllUsers);
router.get("/users-by-role", verifyAdmin, getUsersByRole);
router.get("/:id", verifyAdmin, getUserById);
router.delete("/:id", verifyAdmin, deleteUser);
router.post(
  "/",
  verifyAdmin,
  validateSchema(userSchema),
  uploadImage.single("profilePic"),
  addNewUser
);
router.put("/:id", verifyUser, uploadImage.single("profilePic"), updateUser);

export default router;
