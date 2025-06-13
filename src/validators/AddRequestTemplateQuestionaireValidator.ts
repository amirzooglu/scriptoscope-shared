import { z } from "zod";

export const addRequestTemplateQuestionaireValidationSchema = z.object({
  id: z.string().optional(),
  requestTemplateId: z.string(),  // Optional UUID for contract
  question: z.string().min(1, "Question is required"),
  fieldDataTypeId: z.string().optional(), // Optional UUID for request type
  fieldDataType:  z.object({
    id: z.string(),
    name: z.string(),
  }),
  fieldKey: z.string().min(1, "Field key is required"),
  isRequired: z.boolean(),
});

export type AddRequestTemplateQuestionaireFormValues = z.infer<typeof addRequestTemplateQuestionaireValidationSchema>;
