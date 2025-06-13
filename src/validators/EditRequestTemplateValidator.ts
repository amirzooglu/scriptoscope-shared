import { z } from "zod";
import { ZodReturnType } from "../utils/types";
import { DocumentFormatTypeEnum } from "../constants/documentFormatTypes";

// Define the validation schema using Zod
// Define the validation schema for requestTemplates

//z.string().uuid().optional()  dont use uuid() gives error
export const editRequestTemplateValidationSchema = z.object({

  id: z.string().uuid(),  // UUID for template ID
  organizationId: z.string().optional(),  // Optional UUID for contract
  applicationId: z.string().optional(),  // Optional UUID for contract
  requestTypeId: z.string().optional(), // Optional UUID for request type
  requestType:  z.object({
    id: z.string(),
    name: z.string(),
  }).optional(),
  //documentId: z.string().uuid(),  // UUID for document ID
  name: z.string().min(1, "Name is required").max(255),  // Name with a max length of 255
  description: z.string().optional(),  // Optional description
  fileUrl: z.string().url().optional(),  // Optional URL for the file
  storagePath: z.string().optional(),  // Optional string for storage path
  storageObjectId: z.string().optional(),
  documentKey: z.string().optional(),
  documentFormat: z.nativeEnum(DocumentFormatTypeEnum).optional(),
  documentFormatTypeId: z.string().optional(),
});


export type EditRequestTemplateFormValues = ZodReturnType<typeof editRequestTemplateValidationSchema>;


