// src > schema > signUpSchema.ls
// Importing the required modules in the workspace 
import { z } from "zod";

// Username validation 
export const usernameValidation = z
    .string()
    .min(3, { message : "Username must be atleast 3 characters long" })
    .max(10, { message : "Username must be no more than 10 characters long" })
    .regex(/^[a-zA-Z@_]+$/, { message : "Username can only contain lowercase, uppercase, @ and _" })

// Email validation 
export const emailValidation = z 
    .string()
    .email({ message : "Invalid user email provided "})

// Password validation 
export const passwordValidation = z 
    .string()
    .min(6, { message : "Password must be atleast 6 characters long" })

// Schema validation for signUp page 
export const signUpSchema = z.object({
    username : usernameValidation,
    email : emailValidation,
    password : passwordValidation
})