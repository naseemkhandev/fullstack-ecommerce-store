import { z } from "zod";

const userSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" })
    .trim(),
  email: z
    .string({ required_error: "Email is required" })
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is invalid" })
    .trim(),
  password: z
    .string({ required_error: "Password is required" })
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .trim(),
});

export default userSchema;
