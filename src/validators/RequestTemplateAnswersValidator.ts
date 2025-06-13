import { z } from "zod";

export const requestTemplateAnswersValidationSchema = z.object({
  id: z.string().optional(),
  requestTemplateId: z.string(),  // Optional UUID for requestTemplate
  requestId: z.string(),  // Optional UUID for request
  questionId: z.string(),  // Optional UUID for question
  answer: z.string(), // Optional UUID for request type
});

export type requestTemplateAnswersFormValues = z.infer<typeof requestTemplateAnswersValidationSchema>;
