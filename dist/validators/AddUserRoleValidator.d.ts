import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addUserRoleValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userRoleName: z.ZodString;
    userRoleDescription: z.ZodOptional<z.ZodString>;
    permissions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    userRoleName: string;
    id?: string | undefined;
    permissions?: {
        id: string;
        name: string;
    }[] | undefined;
    userRoleDescription?: string | undefined;
}, {
    userRoleName: string;
    id?: string | undefined;
    permissions?: {
        id: string;
        name: string;
    }[] | undefined;
    userRoleDescription?: string | undefined;
}>;
export type AddUserRoleFormValues = ZodReturnType<typeof addUserRoleValidationSchema>;
//# sourceMappingURL=AddUserRoleValidator.d.ts.map