import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

import Product from "../models/productModel.js";
import createError from "../helpers/createError.js";
import uploadImageToCloudinary from "../helpers/cloudinary.js";

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to create a temporary directory if it doesn't exist
const ensureTempDirExists = (tempDir) => {
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
};

// Helper function to save buffer to a temporary file
const saveBufferToTempFile = (buffer, tempDir) => {
  const tempFilePath = path.join(tempDir, `${uuidv4()}.jpg`);
  fs.writeFileSync(tempFilePath, buffer);
  return tempFilePath;
};

export const addNewProduct = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { image, ...productData } = req.body;

    let imageUrl = null;
    let imagePublicId = null;

    if (image) {
      // Decode base64 string
      const matches = image.match(/^data:image\/([A-Za-z-+/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return next(createError(400, "Invalid base64 string"));
      }

      const buffer = Buffer.from(matches[2], "base64");
      const tempDir = path.join(__dirname, "../../public/uploads");

      // Ensure the temp directory exists
      ensureTempDirExists(tempDir);

      // Save buffer to a temporary file
      const tempFilePath = saveBufferToTempFile(buffer, tempDir);

      // Upload the temporary file to Cloudinary
      const { secure_url, public_id } = await uploadImageToCloudinary(
        tempFilePath,
        "products"
      );
      77;

      if (!secure_url || !public_id)
        return next(createError(500, "Failed to upload image"));

      imageUrl = secure_url;
      imagePublicId = public_id;
    }

    const product = await Product.create({
      ...productData,
      user: _id,
      image: {
        secure_url: imageUrl,
        public_id: imagePublicId,
      },
    });

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find()
      .populate("user", "name")
      .populate("category", "name slug");

    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found", products: [] });
    }

    res.status(200).json({
      message: "All products fetched successfully",
      products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductDetails = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("user", "name")
      .populate("category", "name slug");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product fetched successfully", product });
  } catch (error) {
    next(error);
  }
};

export const getActiveProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ status: "active" })
      .populate("user", "name")
      .populate("category", "name slug");

    if (!products || products.length === 0)
      return next(createError(404, "No products found"));

    res.status(200).json({
      message: "Active products fetched successfully",
      products,
    });
  } catch (error) {
    next(error);
  }
};
