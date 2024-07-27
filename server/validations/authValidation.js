import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" })
    .trim(),

  email: z
    .string({ required_error: "Email is required" })
    .nonempty({ message: "Email is required" })
    .email("Invalid email address")
    .trim(),

  password: z
    .string({ required_error: "Password is required" })
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .trim(),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .nonempty({ message: "Email is required" })
    .email("Invalid email address")
    .trim(),

  password: z
    .string({ required_error: "Password is required" })
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .trim(),
});

const changePasswordSchema = z.object({
  currentPassword: z
    .string({ required_error: "Current password is required" })
    .nonempty({ message: "Current password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .trim(),

  newPassword: z
    .string({ required_error: "New password is required" })
    .nonempty({ message: "New password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .trim(),

  confirmPassword: z
    .string({ required_error: "Confirm password is required" })
    .nonempty({ message: "Confirm password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .trim(),
});

export { registerSchema, loginSchema, changePasswordSchema };
