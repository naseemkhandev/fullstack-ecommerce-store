import express from "express";

import { verifyAdmin } from "../middlewares/verifyToken.js";
import { addNewProduct } from "../controllers/productController.js";
import validateSchema from "../middlewares/validateSchema.js";

const router = express.Router();

router.post("/", verifyAdmin, validateSchema(productSchemas), addNewProduct);

export default router;
