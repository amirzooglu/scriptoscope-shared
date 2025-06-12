"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRequestNotesResponseSchema = void 0;
const zod_1 = require("zod");
const RequestsSchema_1 = require("../schemas/RequestsSchema");
const NotesSchema_1 = require("../schemas/NotesSchema");
exports.GetRequestNotesResponseSchema = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.string().uuid(),
    requestId: zod_1.z.string().uuid().nullable(),
    noteId: zod_1.z.string().uuid().nullable(),
    createdAt: zod_1.z.coerce.date().nullable(),
    createdBy: zod_1.z.string().uuid().nullable(),
    users: zod_1.z.any().optional(), // you can define a proper user schema if needed
    notes: NotesSchema_1.NotesSchema.nullable(),
    requests: RequestsSchema_1.RequestsSchema.nullable(),
}));
