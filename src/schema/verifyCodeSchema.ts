// src > schema > verifyCodeSchema.ts
// Importing the required modules in the workspace 
import { z } from "zod";

// verification code validation
export const codeValidation = z 
    .string()
    .length(6, { message : "Verification code must be 6 digits long" })

// Schema validation for verificationCode
export const verifyCodeSchema = z.object({
    code : codeValidation
});
