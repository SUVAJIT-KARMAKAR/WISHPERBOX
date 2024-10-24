// src > schema > messageSchema.ts 
// Importing all the rquired modules in the work space 
import { z } from "zod";

// Message validation 
export const messageValidation = z
    .string()
    .min(15, { message : "Message must be 15 characters long" })
    .max(200, { message : "Message must be no more than 200 characters long" })

// Schema validation for message 
export const messageSchema = z.object({
    content : messageValidation
});