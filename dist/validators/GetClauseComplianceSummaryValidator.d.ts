import { z } from "zod";
export declare const GetClauseComplianceSummaryInputValidator: z.ZodObject<{
    requestDocumentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestDocumentId: string;
}, {
    requestDocumentId: string;
}>;
export type GetClauseComplianceSummaryInput = z.infer<typeof GetClauseComplianceSummaryInputValidator>;
export declare const GetClauseComplianceSummaryValidator: z.ZodObject<{
    keyObligation: z.ZodString;
    compliant: z.ZodEnum<["Yes", "No"]>;
    content: z.ZodObject<{
        matchedText: z.ZodString;
        compliantText: z.ZodString;
        keyPoints: z.ZodArray<z.ZodString, "many">;
        fallbacks: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        compliantText: string;
        matchedText: string;
        keyPoints: string[];
        fallbacks: string[];
    }, {
        compliantText: string;
        matchedText: string;
        keyPoints: string[];
        fallbacks: string[];
    }>;
}, "strip", z.ZodTypeAny, {
    content: {
        compliantText: string;
        matchedText: string;
        keyPoints: string[];
        fallbacks: string[];
    };
    keyObligation: string;
    compliant: "Yes" | "No";
}, {
    content: {
        compliantText: string;
        matchedText: string;
        keyPoints: string[];
        fallbacks: string[];
    };
    keyObligation: string;
    compliant: "Yes" | "No";
}>;
export type GetClauseComplianceSummaryOutput = z.infer<typeof GetClauseComplianceSummaryValidator>;
//# sourceMappingURL=GetClauseComplianceSummaryValidator.d.ts.map