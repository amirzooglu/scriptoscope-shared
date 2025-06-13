import { z } from "zod";
import { ZodReturnType } from "../utils/types";

// Define the validation schema using Zod
export const addUserOrganizationValidationSchema = z.object({
  id: z.string().min(1, "User ID is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  organizationName: z.string().min(1, "Organization name is required"),
});

export type AddUserOrganizationFormValues = ZodReturnType<typeof addUserOrganizationValidationSchema>;


