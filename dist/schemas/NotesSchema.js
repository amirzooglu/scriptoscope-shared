"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesSchema = void 0;
const zod_1 = require("zod");
exports.NotesSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    content: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().nullable(),
    updatedAt: zod_1.z.coerce.date().nullable(),
    organizationId: zod_1.z.string().uuid().nullable(),
    createdBy: zod_1.z.string().uuid().nullable(),
    updatedBy: zod_1.z.string().uuid().nullable(),
});
