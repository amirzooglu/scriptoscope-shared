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
    requestId: zod_1.z.string().optional(), // Optional UUID for contract
    taskId: zod_1.z.string().optional(), // Optional UUID for task
    content: zod_1.z.string().min(1, "Content is required"), // Title must be a non-empty string
    lastUpdate: zod_1.z.date().optional(), // Optional last update date
    noteDate: zod_1.z.date().optional(), // Optional date field
});
