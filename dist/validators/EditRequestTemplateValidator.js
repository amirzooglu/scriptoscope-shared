"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editRequestTemplateValidationSchema = void 0;
const zod_1 = require("zod");
const documentFormatTypes_1 = require("../constants/documentFormatTypes");
// Define the validation schema using Zod
// Define the validation schema for requestTemplates
//z.string().uuid().optional()  dont use uuid() gives error
exports.editRequestTemplateValidationSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(), // UUID for template ID
    organizationId: zod_1.z.string().optional(), // Optional UUID for contract
    applicationId: zod_1.z.string().optional(), // Optional UUID for contract
    requestTypeId: zod_1.z.string().optional(), // Optional UUID for request type
    requestType: zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }).optional(),
    //documentId: z.string().uuid(),  // UUID for document ID
    name: zod_1.z.string().min(1, "Name is required").max(255), // Name with a max length of 255
    description: zod_1.z.string().optional(), // Optional description
    fileUrl: zod_1.z.string().url().optional(), // Optional URL for the file
    storagePath: zod_1.z.string().optional(), // Optional string for storage path
    storageObjectId: zod_1.z.string().optional(),
    documentKey: zod_1.z.string().optional(),
    documentFormat: zod_1.z.nativeEnum(documentFormatTypes_1.DocumentFormatTypeEnum).optional(),
    documentFormatTypeId: zod_1.z.string().optional(),
});
