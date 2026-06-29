import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must have at least 3 characters.")
      .max(20, "Username cannot have more than 20 characters."),
    email: z
      .string()
      .min(1, "Email is required.")
      .email("Enter a valid email."),
    password: z
      .string()
      .min(8, "Password must have at least 8 characters."),
    confirmPassword: z.string().min(1, "Confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
