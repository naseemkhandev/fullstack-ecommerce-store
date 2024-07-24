import { z } from "zod";

const categorySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" })
    .trim()
    .transform((data) => data.toLowerCase())
    .refine((data) => /^[a-zA-Z]+$/.test(data), {
      message: "Name must contain only letters",
    }),
});

export default categorySchema;
