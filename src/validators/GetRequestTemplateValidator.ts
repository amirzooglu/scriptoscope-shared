import { z } from "zod";

export const GetRequestTemplateValidator = z.object({
  id: z.string(),
  applicationId: z.string().optional(),
  organizationId: z.string().optional(),
  requestTypeId: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  fileUrl: z.string().optional(),
  documentTitle: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type GetRequestTemplateFormValues = z.infer<typeof GetRequestTemplateValidator>;
