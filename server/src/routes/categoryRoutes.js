import express from "express";
import { addNewCategory } from "../controllers/categoryController.js";
import { verifyAdmin } from "../middlewares/verifyToken.js";
const router = express.Router();

router.post("/", verifyAdmin, addNewCategory);

export default router;
