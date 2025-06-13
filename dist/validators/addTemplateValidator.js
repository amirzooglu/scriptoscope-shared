"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTemplateValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema using Zod
exports.addTemplateValidationSchema = zod_1.z.object({
    id: zod_1.z.string().uuid().optional(), // UUID for template ID
    organizationId: zod_1.z.string().uuid().nullable().optional(), // Optional UUID for organization ID
    applicationId: zod_1.z.string().uuid().nullable().optional(), // Optional UUID for application ID
    requestTypeId: zod_1.z.string().uuid().nullable().optional(), // Optional UUID for request type ID
    documentId: zod_1.z.string().uuid(), // UUID for document ID
    name: zod_1.z.string().min(1, "Name is required").max(255), // Name with a max length of 255
    description: zod_1.z.string().nullable().optional(), // Optional description
    createdAt: zod_1.z.date().nullable().optional(), // Optional created at date
    createdBy: zod_1.z.string().uuid().nullable().optional(), // Optional UUID for created by
    updatedAt: zod_1.z.date().nullable().optional(), // Optional updated at date
    updatedBy: zod_1.z.string().uuid().nullable().optional(), // Optional UUID for updated by
    requestTemplateDocuments: zod_1.z.array(zod_1.z.any()).optional(), // Optional array of request template documents
    requestTemplateQuestionaire: zod_1.z.array(zod_1.z.any()).optional(), // Optional array of request template questionnaire
    requestTemplateQuestionaireAnswers: zod_1.z.array(zod_1.z.any()).optional(), // Optional array of request template questionnaire answers
    applications: zod_1.z.any().optional(), // Optional applications relation
    usersRequestTemplatesCreatedByTousers: zod_1.z.any().optional(), // Optional users relation for created by
    documents: zod_1.z.any().optional(), // Optional documents relation
    organizations: zod_1.z.any().optional(), // Optional organizations relation
    requestTypes: zod_1.z.any().optional(), // Optional request types relation
    usersRequestTemplatesUpdatedByTousers: zod_1.z.any().optional(), // Optional users relation for updated by
});
