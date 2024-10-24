// src > signInSchema.ts
// Importing the required modules in the work space 
import { z } from "zod";

// Schema validation for signIn
export const signInSchema = z.object({
    identifier : z.string(),
    password : z.string()
});