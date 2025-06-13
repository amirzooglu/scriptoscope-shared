"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestTemplateQuestionaireAnswerValuesValidationSchema = void 0;
const zod_1 = require("zod");
exports.requestTemplateQuestionaireAnswerValuesValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), // Optional for new records
    answerId: zod_1.z.string(), // Nullable field
    value: zod_1.z.string(), // Nullable field
});
