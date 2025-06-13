"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClauseComplianceSummaryValidator = exports.GetClauseComplianceSummaryInputValidator = void 0;
const zod_1 = require("zod");
// Input validator for getClauseComplianceSummary
exports.GetClauseComplianceSummaryInputValidator = zod_1.z.object({
    requestDocumentId: zod_1.z.string(),
});
exports.GetClauseComplianceSummaryValidator = zod_1.z.object({
    keyObligation: zod_1.z.string(),
    compliant: zod_1.z.enum(["Yes", "No"]),
    content: zod_1.z.object({
        matchedText: zod_1.z.string(),
        compliantText: zod_1.z.string(),
        keyPoints: zod_1.z.string().array(),
        fallbacks: zod_1.z.string().array(),
    }),
});
