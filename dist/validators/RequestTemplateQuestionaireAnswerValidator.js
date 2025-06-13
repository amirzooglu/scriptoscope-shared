"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestTemplateQuestionaireAnswerValidationSchema = void 0;
const zod_1 = require("zod");
exports.requestTemplateQuestionaireAnswerValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), // Optional for new records
    requestTemplateId: zod_1.z.string(), // Nullable field
    requestId: zod_1.z.string(), // Nullable field
    questionId: zod_1.z.string().nullable(), // Nullable field
    fromDate: zod_1.z.date().nullable().optional(), // Nullable field
    toDate: zod_1.z.date().nullable().optional(), // Nullable field
    minValue: zod_1.z.number().nullable().optional(), // Nullable field
    maxValue: zod_1.z.number().nullable().optional(), // Nullable field
    minChar: zod_1.z.number().nullable().optional(), // Nullable integer
    maxChar: zod_1.z.number().nullable().optional(), // Nullable integer
});
