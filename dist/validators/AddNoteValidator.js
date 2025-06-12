"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNoteValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema using Zod
// Define the validation schema for notes
//z.string().uuid().optional()  dont use uuid() gives error
exports.addNoteValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    noteId: zod_1.z.string().optional(),
    requestId: zod_1.z.string().optional(),
    content: zod_1.z.string().min(1, "Content is required"),
    lastUpdate: zod_1.z.coerce.date().optional(),
    noteDate: zod_1.z.coerce.date().optional(),
});
