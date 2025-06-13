"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestTemplateAnswersValidationSchema = void 0;
const zod_1 = require("zod");
exports.requestTemplateAnswersValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    requestTemplateId: zod_1.z.string(), // Optional UUID for requestTemplate
    requestId: zod_1.z.string(), // Optional UUID for request
    questionId: zod_1.z.string(), // Optional UUID for question
    answer: zod_1.z.string(), // Optional UUID for request type
});
