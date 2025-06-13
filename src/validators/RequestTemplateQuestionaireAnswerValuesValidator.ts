import { z } from "zod";

export const requestTemplateQuestionaireAnswerValuesValidationSchema = z.object({
  id: z.string().optional(), // Optional for new records
  answerId: z.string(), // Nullable field
  value: z.string(), // Nullable field
});

export type RequestTemplateQuestionaireAnswerValuesFormValues = z.infer<typeof requestTemplateQuestionaireAnswerValuesValidationSchema>;
