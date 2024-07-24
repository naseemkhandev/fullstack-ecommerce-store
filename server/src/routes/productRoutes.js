import express from "express";

import { verifyAdmin } from "../middlewares/verifyToken.js";
import { addNewProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/", verifyAdmin, addNewProduct);

export default router;
