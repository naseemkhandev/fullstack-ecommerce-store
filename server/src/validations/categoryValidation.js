import { z } from "zod";

const categorySchema = z.object({
  name: z
    .string({ required_error: "Category Name is required" })
    .nonempty({ message: "Category Name is required" })
    .min(3, { message: "Category Name must be at least 3 characters long" })
    .max(20, { message: "Category Name must be at most 20 characters long" })
    .trim()
    .transform((data) => data.toLowerCase())
    .refine((data) => /^[a-zA-Z ]+$/.test(data), {
      message: "Category Name must contain only letters",
    }),
  slug: z
    .string({ required_error: "Category Slug is required" })
    .nonempty({ message: "Category Slug is required" })
    .min(3, { message: "Category Slug must be at least 3 characters long" })
    .max(20, { message: "Category Slug must be at most 20 characters long" })
    .trim()
    .transform((data) => data.toLowerCase())
    .refine((data) => /^[a-zA-Z-]+$/.test(data), {
      message: "Category Slug must contain only letters and hyphens",
    }),
});

export default categorySchema;
