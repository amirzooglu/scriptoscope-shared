import { z } from "zod";
import { ZodReturnType } from "../utils/types";


// Define the validation schema using Zod
// Define the validation schema for comments

//z.string().uuid().optional()  dont use uuid() gives error
export const addCommentValidationSchema = z.object({

  id: z.string().nullable().optional(),
  commentId: z.string().nullable().optional(),
  contractId: z.string().nullable().optional(),  // Optional UUID for contract
  taskId: z.string().nullable().optional(),  // Optional UUID for task
  content: z.string().min(1, "Content is required"),  // Title must be a non-empty string
  lastUpdate: z.date().nullable().optional(),  // Optional last update date
  commentDate: z.date().nullable().optional(),  // Optional date field

});



export type AddCommentFormValues = ZodReturnType<typeof addCommentValidationSchema>;



