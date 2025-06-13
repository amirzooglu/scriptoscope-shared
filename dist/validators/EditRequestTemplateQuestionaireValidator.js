"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editRequestTemplateQuestionaireValidationSchema = void 0;
const zod_1 = require("zod");
exports.editRequestTemplateQuestionaireValidationSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(), // UUID for template ID
    requestTemplateId: zod_1.z.string().optional(), // Optional UUID for contract
    question: zod_1.z.string().min(1, "Question is required"),
    fieldDataTypeId: zod_1.z.string().optional(), // Optional UUID for request type
    fieldDataType: zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }).optional(),
    fieldKey: zod_1.z.string().min(1, "Field key is required"),
    isRequired: zod_1.z.boolean(),
});
