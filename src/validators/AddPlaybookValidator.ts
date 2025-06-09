import { z } from "zod";
import { ZodReturnType } from "../utils/types";

// Define the validation schema using Zod
export const addPlaybookValidationSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Playbook name is required"),
  roleId: z.string().optional(), // Optional UUID for request type
  role: z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .optional(),
  description: z.string().optional().default(""),
  recommendationType: z.string().optional(),
  selectedTopics: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .optional()
    .default([]),
});

export type AddPlaybookFormValues = ZodReturnType<typeof addPlaybookValidationSchema>;


