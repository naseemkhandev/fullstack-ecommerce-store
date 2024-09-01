import express from "express";

import { verifyAdmin } from "../middlewares/verifyToken.js";
import {
  addNewProduct,
  getAllProducts,
  getProductDetails,
} from "../controllers/productController.js";
import validateSchema from "../middlewares/validateSchema.js";
import productSchema from "../validations/productValidation.js";
import uploadImage from "../middlewares/uploadImage.js";

const router = express.Router();

router.post(
  "/",
  verifyAdmin,
  // validateSchema(productSchema),
  uploadImage.single("image"),
  addNewProduct
);
router.get("/", getAllProducts);
router.get("/:id", getProductDetails);

export default router;
