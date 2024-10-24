// src > schema > accpetingMessageSchema.ts
// Importing the required modules in the work space 
import { z } from "zod";

// Schema validation for accpetingMessage 
export const accpetingMessageSchema = z.object({
    acceptMessages : z.boolean()
});