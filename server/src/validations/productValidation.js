import { z } from "zod";

const productSchema = z.object({
  title: z
    .string({ required_error: "Product Name is required" })
    .nonempty({ message: "Product Name is required" })
    .min(3, { message: "Product Name must be at least 3 characters long" })
    .max(20, { message: "Product Name must be at most 20 characters long" })
    .trim(),
  description: z
    .string({ required_error: "Product Description is required" })
    .nonempty({ message: "Product Description is required" })
    .min(10, {
      message: "Product Description must be at least 10 characters long",
    })
    .max(200, {
      message: "Product Description must be at most 200 characters long",
    })
    .trim(),
  actualPrice: z
    .number({ required_error: "Product Price is required" })
    .min(1, { message: "Product Price must be at least 1" })
    .max(100000, { message: "Product Price must be at most 100000" })
    .positive({ message: "Product Price must be greater than 0" }),
  discountedPrice: z
    .number({ required_error: "Product Discounted Price is required" })
    .min(1, { message: "Product Discounted Price must be at least 1" })
    .max(100000, { message: "Product Discounted Price must be at most 100000" })
    .positive({ message: "Product Discounted Price must be greater than 0" }),
  category: z
    .string({ required_error: "Product Category is required" })
    .nonempty({ message: "Product Category is required" })
    .min(3, { message: "Product Category must be at least 3 characters long" })
    .trim(),
  stock: z
    .number({ required_error: "Product Stock is required" })
    .min(1, { message: "Product Stock must be at least 1" })
    .max(1000, { message: "Product Stock must be at most 1000" })
    .positive({ message: "Product Stock must be greater than 0" }),
  image: z.object({
    secure_url: z
      .string({ required_error: "Product Image URL is required" })
      .nonempty({ message: "Product Image URL is required" })
      .url({ message: "Product Image URL must be a valid URL" })
      .trim(),
    public_id: z
      .string({ required_error: "Product Image ID is required" })
      .nonempty({ message: "Product Image ID is required" })
      .trim(),
  }),
  slug: z
    .string({ required_error: "Product Slug is required" })
    .nonempty({ message: "Product Slug is required" })
    .min(3, { message: "Product Slug must be at least 3 characters long" })
    .trim(),
});

export default productSchema;
