"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommentValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema using Zod
// Define the validation schema for comments
//z.string().uuid().optional()  dont use uuid() gives error
exports.addCommentValidationSchema = zod_1.z.object({
    id: zod_1.z.string().nullable().optional(),
    commentId: zod_1.z.string().nullable().optional(),
    contractId: zod_1.z.string().nullable().optional(), // Optional UUID for contract
    taskId: zod_1.z.string().nullable().optional(), // Optional UUID for task
    content: zod_1.z.string().min(1, "Content is required"), // Title must be a non-empty string
    lastUpdate: zod_1.z.date().nullable().optional(), // Optional last update date
    commentDate: zod_1.z.date().nullable().optional(), // Optional date field
});
