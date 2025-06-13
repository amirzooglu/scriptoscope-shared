import { z } from "zod";
import { ZodReturnType } from "../utils/types";


// Define the validation schema using Zod
export const addUserRoleValidationSchema = z.object({
  id: z.string().optional(),
  userRoleName: z.string().min(1, "UserRole name is required"),
  userRoleDescription: z.string().optional(),
  permissions:  z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .optional(), // Adjusted to an array of objects
});

export type AddUserRoleFormValues = ZodReturnType<typeof addUserRoleValidationSchema>;


