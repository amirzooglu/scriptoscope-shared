"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlaybookDocumentValidationSchema = void 0;
const zod_1 = require("zod");
const documentFormatTypes_1 = require("../constants/documentFormatTypes");
// Define the validation schema using Zod
// Define the validation schema for documents
//z.string().uuid().optional()  dont use uuid() gives error
exports.addPlaybookDocumentValidationSchema = zod_1.z.object({
    documentTitle: zod_1.z.string().min(1, "Title is required"), // Title must be a non-empty string
    playbookId: zod_1.z.string().optional(), // Optional UUID for contract
    documentSourceTypeId: zod_1.z.string().optional(), // Optional UUID for document type
    documentTypeId: zod_1.z.string().optional(), // Optional UUID for document type
    documentType: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(), // Optional nested object for document type
    documentUploadTypeId: zod_1.z.string().optional(), // Optional UUID for document upload type
    documentUploadType: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(), // Optional nested object for document upload type
    documentTags: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .optional(), // Array of document tag objects
    fileUrl: zod_1.z.string().url().optional(), // Optional URL for the file
    storagePath: zod_1.z.string().optional(), // Optional string for storage path
    storageObjectId: zod_1.z.string().optional(),
    embeddingStatus: zod_1.z.enum(["PENDING", "PROCESSING", "FAILED", "SUCCESS"]).optional().default("PENDING"),
    documentKey: zod_1.z.string().optional(),
    documentFormat: zod_1.z.nativeEnum(documentFormatTypes_1.DocumentFormatTypeEnum).optional(),
    documentFormatTypeId: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(), // Optional notes field
}).superRefine((data, ctx) => {
    console.log("Validating document data:", data);
});
