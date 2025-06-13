"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema using Zod
// Define the validation schema for tasks
//z.string().uuid().optional()  dont use uuid() gives error
exports.addTaskValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    requestId: zod_1.z.string().nullable().optional(), // Optional UUID for request
    description: zod_1.z.string().min(1, "Description is required"), // Title must be a non-empty string
    requestedBy: zod_1.z.string().nullable().optional(), // Optional UUID for requested by
    documentRequest: zod_1.z.boolean().optional().default(false), // Optional boolean field
    workFlowId: zod_1.z.string().nullable().optional(), // Optional UUID for task type
    workflow: zod_1.z
        .object({
        id: zod_1.z.string().uuid(),
        name: zod_1.z.string(),
    })
        .nullable()
        .optional(), // Optional nested object for task type
    completionTypeId: zod_1.z.string().nullable().optional(), // Optional UUID for task type
    completionType: zod_1.z
        .object({
        id: zod_1.z.string().uuid(),
        name: zod_1.z.string(),
    })
        .nullable()
        .optional(), // Optional nested object for task type
    documentTypeId: zod_1.z.string().nullable().optional(), // Optional UUID for document type
    documentType: zod_1.z
        .object({
        id: zod_1.z.string().uuid(),
        name: zod_1.z.string(),
    })
        .nullable()
        .optional(), // Optional nested object for document type
    documentTitle: zod_1.z.string().optional(),
    dueDate: zod_1.z.date().nullable().optional(), // Optional date field
    notes: zod_1.z.string().nullable().optional(), // Optional notes field
    statusId: zod_1.z.string().nullable().optional(), // Optional UUID for task status
    status: zod_1.z
        .object({
        id: zod_1.z.string().uuid(),
        name: zod_1.z.string(),
    })
        .nullable()
        .optional(), // Optional nested object for task status
    taskAssignees: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .optional(), // Adjusted to an array of objects
    includeDocument: zod_1.z.boolean().optional().default(false),
    documentKey: zod_1.z.string().optional(),
    documentUploadTypeId: zod_1.z.string().optional(), // Optional UUID for document upload type
    documentUploadType: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(), // Optional nested object for document upload type
    fileUrl: zod_1.z.string().optional(), // Optional URL for the file
    storagePath: zod_1.z.string().optional(), // Optional string for storage path
}).superRefine((data, ctx) => {
    if (data.includeDocument) {
        if (!data.documentUploadType?.id) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "Please select a document upload type",
            });
        }
    }
});
