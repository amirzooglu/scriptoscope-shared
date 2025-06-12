import { z } from "zod";
import { ZodReturnType } from "../utils/types";



// Define the validation schema using Zod
// Define the validation schema for notes

//z.string().uuid().optional()  dont use uuid() gives error
export const addNoteValidationSchema = z.object({

  id: z.string().optional(),
  noteId: z.string().optional(),
  requestId: z.string().optional(),  // Optional UUID for contract
  taskId: z.string().optional(),  // Optional UUID for task
  content: z.string().min(1, "Content is required"),  // Title must be a non-empty string
  lastUpdate: z.date().optional(),  // Optional last update date
  noteDate: z.date().optional(),  // Optional date field

});



export type AddNoteFormValues = ZodReturnType<typeof addNoteValidationSchema>;



