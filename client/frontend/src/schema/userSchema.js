import { z } from 'zod';

export const userSignupSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  contact: z.string().min(10, "Contact number must be 10 digits").max(10, "Contact number must be 10 digits"),
});
export const userLoginSchema = z.object({
   
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
   
  });

// Since you're using JavaScript, remove TypeScript-related code
// export type SignupInputState = z.infer<typeof userSignupSchema>; // ❌ Remove this in JS
