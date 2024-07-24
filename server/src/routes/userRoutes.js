import express from "express";
import { getAllUsers, deleteUser } from "../controllers/userController.js";
import { verifyAdmin } from "../middlewares/verifyToken.js";
const router = express.Router();

router.get("/", verifyAdmin, getAllUsers);
router.delete("/:id", verifyAdmin, deleteUser);

export default router;
