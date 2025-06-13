
import { z } from "zod";

export const editRequestTemplateQuestionaireValidationSchema = z.object({
  id: z.string().uuid(),  // UUID for template ID
  requestTemplateId: z.string().optional(),  // Optional UUID for contract
  question: z.string().min(1, "Question is required"),
  fieldDataTypeId: z.string().optional(), // Optional UUID for request type
  fieldDataType:  z.object({
    id: z.string(),
    name: z.string(),
  }).optional(),
  fieldKey: z.string().min(1, "Field key is required"),
  isRequired: z.boolean(),
});

export type EditRequestTemplateQuestionaireFormValues = z.infer<typeof editRequestTemplateQuestionaireValidationSchema>;
