import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addUserOrganizationValidationSchema: z.ZodObject<{
    id: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    organizationName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    firstName: string;
    lastName: string;
    organizationName: string;
}, {
    id: string;
    firstName: string;
    lastName: string;
    organizationName: string;
}>;
export type AddUserOrganizationFormValues = ZodReturnType<typeof addUserOrganizationValidationSchema>;
//# sourceMappingURL=addUserOrganizationValidator.d.ts.map