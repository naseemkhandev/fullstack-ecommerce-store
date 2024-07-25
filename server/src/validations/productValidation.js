import { z } from "zod";

const productSchema = z.object({
  name: z
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
  price: z
    .number({ required_error: "Product Price is required" })
    .min(1, { message: "Product Price must be at least 1" })
    .max(100000, { message: "Product Price must be at most 100000" })
    .positive({ message: "Product Price must be greater than 0" }),
  category: z
    .string({ required_error: "Product Category is required" })
    .nonempty({ message: "Product Category is required" })
    .min(3, { message: "Product Category must be at least 3 characters long" })
    .max(20, { message: "Product Category must be at most 20 characters long" })
    .trim(),
  stock: z
    .number({ required_error: "Product Stock is required" })
    .min(1, { message: "Product Stock must be at least 1" })
    .max(1000, { message: "Product Stock must be at most 1000" })
    .positive({ message: "Product Stock must be greater than 0" }),
  sold: z
    .number({ required_error: "Product Sold is required" })
    .min(0, { message: "Product Sold must be at least 0" })
    .max(1000, { message: "Product Sold must be at most 1000" })
    .positive({ message: "Product Sold must be greater than 0" }),
  // images: z
  //   .array(z.string({ required_error: "Product Images are required" }))
  //   .nonempty({ message: "Product Images are required" })
  //   .min(1, { message: "Product Images must be at least 1" }),
});

export default productSchema;
