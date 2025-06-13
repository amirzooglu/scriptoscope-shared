import { z } from "zod";

export const requestTemplateQuestionaireAnswerValidationSchema = z.object({
  id: z.string().optional(), // Optional for new records
  requestTemplateId: z.string(), // Nullable field
  requestId: z.string(), // Nullable field
  questionId: z.string().nullable(), // Nullable field
  fromDate: z.date().nullable().optional(),  // Nullable field
  toDate: z.date().nullable().optional(), // Nullable field
  minValue: z.number().nullable().optional(), // Nullable field
  maxValue: z.number().nullable().optional(), // Nullable field
  minChar: z.number().nullable().optional(), // Nullable integer
  maxChar: z.number().nullable().optional(), // Nullable integer
});

export type RequestTemplateQuestionaireAnswerFormValues = z.infer<typeof requestTemplateQuestionaireAnswerValidationSchema>;
