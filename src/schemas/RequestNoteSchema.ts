import { z } from 'zod';
import { NotesSchema } from './NotesSchema';
import { RequestsSchema } from './RequestsSchema';

export const RequestNoteSchema = z.object({
  id: z.string().uuid(),
  requestId: z.string().uuid().nullable(),
  noteId: z.string().uuid().nullable(),
  createdAt: z.coerce.date().nullable(),
  createdBy: z.string().uuid().nullable(),
  notes: NotesSchema.nullable(),
  requests: RequestsSchema.nullable(),
});

export const RequestNotesResponseSchema = z.array(RequestNoteSchema);

export type RequestNote = z.infer<typeof RequestNoteSchema>;
export type RequestNotesResponse = z.infer<typeof RequestNotesResponseSchema>;