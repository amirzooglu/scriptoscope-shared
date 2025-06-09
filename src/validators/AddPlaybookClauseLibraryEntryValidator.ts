import { z } from "zod";
import { ZodReturnType } from "../utils/types";

export const addPlaybookClauseLibraryEntryValidationSchema = z.object({
  id: z.string().optional(),
  playbookClauseId: z.string(),
  clauseLibraryEntryId: z.string().optional(),
  clauseLibraryEntries: z
    .object({
      compliantText: z.string().optional(),
      rationale: z.string().optional(),
      clauseLibraryKeyPoints: z
        .array(
          z.object({
            id: z.string().optional(),
            text: z.string(),
          })
        )
        .optional(),
      clauseLibraryFallbacks: z
        .array(
          z.object({
            id: z.string().optional(),
            text: z.string(),
          })
        )
        .optional(),
    })
    .optional(),
});

export type AddPlaybookClauseLibraryEntryFormValues = ZodReturnType<typeof addPlaybookClauseLibraryEntryValidationSchema>;