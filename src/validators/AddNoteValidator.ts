import { z } from "zod";
import { ZodReturnType } from "../utils/types";



// Define the validation schema using Zod
// Define the validation schema for notes

//z.string().uuid().optional()  dont use uuid() gives error
export const addNoteValidationSchema = z.object({
  id: z.string().optional(),
  noteId: z.string().optional(),
  requestId: z.string().optional(),
  content: z.string().min(1, "Content is required"),
  lastUpdate: z.coerce.date().optional(),
  noteDate: z.coerce.date().optional(),
});



export type AddNoteFormValues = ZodReturnType<typeof addNoteValidationSchema>;



