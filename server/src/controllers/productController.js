import Product from "../models/productModel.js";

export const addNewProduct = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const product = await Product.create({ ...req.body, user: _id });

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
