import { z } from 'zod';

export const NotesSchema = z.object({
  id: z.string().uuid(),
  content: z.string(),
  createdAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date().nullable(),
  organizationId: z.string().uuid().nullable(),
  createdBy: z.string().uuid().nullable(),
  updatedBy: z.string().uuid().nullable(),
});

export type Notes = z.infer<typeof NotesSchema>;