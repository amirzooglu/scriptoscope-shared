import { z } from "zod";
import { ZodReturnType } from "../utils/types";


// Define the validation schema using Zod
export const addGroupValidationSchema = z.object({
  id: z.string().optional(),
  groupName: z.string().min(1, "Group name is required"),
  groupDescription: z.string().optional(),
  permissions:  z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .optional(), // Adjusted to an array of objects
  workflows: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
});

export type AddGroupFormValues = ZodReturnType<typeof addGroupValidationSchema>;


