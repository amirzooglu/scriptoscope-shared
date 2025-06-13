import { z } from "zod";

// Input validator for getClauseComplianceSummary
export const GetClauseComplianceSummaryInputValidator = z.object({
  requestDocumentId: z.string(),
});

export type GetClauseComplianceSummaryInput = z.infer<
  typeof GetClauseComplianceSummaryInputValidator
>;

export const GetClauseComplianceSummaryValidator = z.object({
  keyObligation: z.string(),
  compliant: z.enum(["Yes", "No"]),
  content: z.object({
    matchedText: z.string(),
    compliantText: z.string(),
    keyPoints: z.string().array(),
    fallbacks: z.string().array(),
  }),
});

export type GetClauseComplianceSummaryOutput = z.infer<
  typeof GetClauseComplianceSummaryValidator
>;
