import express from "express";

import {
  addNewCategory,
  getAllCategories,
} from "../controllers/categoryController.js";
import { verifyAdmin } from "../middlewares/verifyToken.js";
import validateSchema from "../middlewares/validateSchema.js";
import categorySchema from "../validations/categoryValidation.js";

const router = express.Router();

router.post("/", verifyAdmin, validateSchema(categorySchema), addNewCategory);
router.get("/", getAllCategories);

export default router;
