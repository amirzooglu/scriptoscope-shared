"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlaybookClauseLibraryEntryValidationSchema = void 0;
const zod_1 = require("zod");
exports.addPlaybookClauseLibraryEntryValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    playbookClauseId: zod_1.z.string(),
    clauseLibraryEntryId: zod_1.z.string().optional(),
    clauseLibraryEntries: zod_1.z
        .object({
        compliantText: zod_1.z.string().optional(),
        rationale: zod_1.z.string().optional(),
        clauseLibraryKeyPoints: zod_1.z
            .array(zod_1.z.object({
            id: zod_1.z.string().optional(),
            text: zod_1.z.string(),
        }))
            .optional(),
        clauseLibraryFallbacks: zod_1.z
            .array(zod_1.z.object({
            id: zod_1.z.string().optional(),
            text: zod_1.z.string(),
        }))
            .optional(),
    })
        .optional(),
});
