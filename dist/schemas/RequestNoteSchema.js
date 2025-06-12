"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestNotesResponseSchema = exports.RequestNoteSchema = void 0;
const zod_1 = require("zod");
const NotesSchema_1 = require("./NotesSchema");
const RequestsSchema_1 = require("./RequestsSchema");
exports.RequestNoteSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    requestId: zod_1.z.string().uuid().nullable(),
    noteId: zod_1.z.string().uuid().nullable(),
    createdAt: zod_1.z.coerce.date().nullable(),
    createdBy: zod_1.z.string().uuid().nullable(),
    notes: NotesSchema_1.NotesSchema.nullable(),
    requests: RequestsSchema_1.RequestsSchema.nullable(),
});
exports.RequestNotesResponseSchema = zod_1.z.array(exports.RequestNoteSchema);
