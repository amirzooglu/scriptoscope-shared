import { z } from "zod";
import { ZodReturnType } from "../utils/types";


// Define the validation schema using Zod
// Define the validation schema for tasks

//z.string().uuid().optional()  dont use uuid() gives error
export const addTaskValidationSchema = z.object({
  id: z.string().optional(),
  requestId: z.string().nullable().optional(),  // Optional UUID for request
  description: z.string().min(1, "Description is required"),  // Title must be a non-empty string
  requestedBy: z.string().nullable().optional(),  // Optional UUID for requested by
  documentRequest: z.boolean().optional().default(false),  // Optional boolean field
  workFlowId: z.string().nullable().optional(),  // Optional UUID for task type
  workflow: z
    .object({
      id: z.string().uuid(),
      name: z.string(),
    })
    .nullable()
    .optional(),  // Optional nested object for task type

  completionTypeId: z.string().nullable().optional(),  // Optional UUID for task type
  completionType: z
    .object({
      id: z.string().uuid(),
      name: z.string(),
    })
    .nullable()
    .optional(),  // Optional nested object for task type
  
  documentTypeId: z.string().nullable().optional(),  // Optional UUID for document type
  documentType: z
    .object({
      id: z.string().uuid(),
      name: z.string(),
    })
    .nullable()
    .optional(),  // Optional nested object for document type
  documentTitle: z.string().optional(),
  dueDate: z.date().nullable().optional(),  // Optional date field
  notes: z.string().nullable().optional(),  // Optional notes field
  statusId: z.string().nullable().optional(),  // Optional UUID for task status
  status: z
    .object({
      id: z.string().uuid(),
      name: z.string(),
    })
    .nullable()
    .optional(),  // Optional nested object for task status
   taskAssignees: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .optional(), // Adjusted to an array of objects
    includeDocument: z.boolean().optional().default(false),
    documentKey: z.string().optional(),
    documentUploadTypeId: z.string().optional(),  // Optional UUID for document upload type
    documentUploadType: z
      .object({
        id: z.string(),
        name: z.string(),
      })
      .optional(),  // Optional nested object for document upload type
     
    fileUrl: z.string().optional(),  // Optional URL for the file
    storagePath: z.string().optional(),  // Optional string for storage path
}).superRefine((data, ctx) => {

  if (data.includeDocument) {

    if (!data.documentUploadType?.id) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select a document upload type",
      });
    }
  }

});




export type AddTaskFormValues = ZodReturnType<typeof addTaskValidationSchema>;



