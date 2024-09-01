import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    actualPrice: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    discountedPrice: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    image: {
      secure_url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "draft"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
