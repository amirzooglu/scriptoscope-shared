import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addPlaybookClauseLibraryEntryValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    playbookClauseId: z.ZodString;
    clauseLibraryEntryId: z.ZodOptional<z.ZodString>;
    clauseLibraryEntries: z.ZodOptional<z.ZodObject<{
        compliantText: z.ZodOptional<z.ZodString>;
        rationale: z.ZodOptional<z.ZodString>;
        clauseLibraryKeyPoints: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            id?: string | undefined;
        }, {
            text: string;
            id?: string | undefined;
        }>, "many">>;
        clauseLibraryFallbacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            id?: string | undefined;
        }, {
            text: string;
            id?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        compliantText?: string | undefined;
        rationale?: string | undefined;
        clauseLibraryKeyPoints?: {
            text: string;
            id?: string | undefined;
        }[] | undefined;
        clauseLibraryFallbacks?: {
            text: string;
            id?: string | undefined;
        }[] | undefined;
    }, {
        compliantText?: string | undefined;
        rationale?: string | undefined;
        clauseLibraryKeyPoints?: {
            text: string;
            id?: string | undefined;
        }[] | undefined;
        clauseLibraryFallbacks?: {
            text: string;
            id?: string | undefined;
        }[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    playbookClauseId: string;
    id?: string | undefined;
    clauseLibraryEntryId?: string | undefined;
    clauseLibraryEntries?: {
        compliantText?: string | undefined;
        rationale?: string | undefined;
        clauseLibraryKeyPoints?: {
            text: string;
            id?: string | undefined;
        }[] | undefined;
        clauseLibraryFallbacks?: {
            text: string;
            id?: string | undefined;
        }[] | undefined;
    } | undefined;
}, {
    playbookClauseId: string;
    id?: string | undefined;
    clauseLibraryEntryId?: string | undefined;
    clauseLibraryEntries?: {
        compliantText?: string | undefined;
        rationale?: string | undefined;
        clauseLibraryKeyPoints?: {
            text: string;
            id?: string | undefined;
        }[] | undefined;
        clauseLibraryFallbacks?: {
            text: string;
            id?: string | undefined;
        }[] | undefined;
    } | undefined;
}>;
export type AddPlaybookClauseLibraryEntryFormValues = ZodReturnType<typeof addPlaybookClauseLibraryEntryValidationSchema>;
//# sourceMappingURL=AddPlaybookClauseLibraryEntryValidator.d.ts.map