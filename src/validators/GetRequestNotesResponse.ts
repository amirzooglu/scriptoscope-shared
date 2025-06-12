import { z } from 'zod';
import { RequestsSchema } from '../schemas/RequestsSchema';
import { NotesSchema } from '../schemas/NotesSchema';

export const GetRequestNotesResponseSchema = z.array(
  z.object({
    id: z.string().uuid(),
    requestId: z.string().uuid().nullable(),
    noteId: z.string().uuid().nullable(),
    createdAt: z.coerce.date().nullable(),
    createdBy: z.string().uuid().nullable(),
    users: z.any().optional(), // you can define a proper user schema if needed
    notes: NotesSchema.nullable(),
    requests: RequestsSchema.nullable(),
  })
);

export type GetRequestNotesResponse = z.infer<typeof GetRequestNotesResponseSchema>;