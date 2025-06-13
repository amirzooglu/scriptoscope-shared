import { z } from "zod";
import { ZodReturnType } from "../utils/types";

// Define the validation schema using Zod
export const addTemplateValidationSchema = z.object({
  id: z.string().uuid().optional(),  // UUID for template ID
  organizationId: z.string().uuid().nullable().optional(),  // Optional UUID for organization ID
  applicationId: z.string().uuid().nullable().optional(),  // Optional UUID for application ID
  requestTypeId: z.string().uuid().nullable().optional(),  // Optional UUID for request type ID
  documentId: z.string().uuid(),  // UUID for document ID
  name: z.string().min(1, "Name is required").max(255),  // Name with a max length of 255
  description: z.string().nullable().optional(),  // Optional description
  createdAt: z.date().nullable().optional(),  // Optional created at date
  createdBy: z.string().uuid().nullable().optional(),  // Optional UUID for created by
  updatedAt: z.date().nullable().optional(),  // Optional updated at date
  updatedBy: z.string().uuid().nullable().optional(),  // Optional UUID for updated by
  requestTemplateDocuments: z.array(z.any()).optional(),  // Optional array of request template documents
  requestTemplateQuestionaire: z.array(z.any()).optional(),  // Optional array of request template questionnaire
  requestTemplateQuestionaireAnswers: z.array(z.any()).optional(),  // Optional array of request template questionnaire answers
  applications: z.any().optional(),  // Optional applications relation
  usersRequestTemplatesCreatedByTousers: z.any().optional(),  // Optional users relation for created by
  documents: z.any().optional(),  // Optional documents relation
  organizations: z.any().optional(),  // Optional organizations relation
  requestTypes: z.any().optional(),  // Optional request types relation
  usersRequestTemplatesUpdatedByTousers: z.any().optional(),  // Optional users relation for updated by
});

export type AddTemplateFormValues = ZodReturnType<typeof addTemplateValidationSchema>;
