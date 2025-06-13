import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addGroupValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    groupName: z.ZodString;
    groupDescription: z.ZodOptional<z.ZodString>;
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
    workflows: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    groupName: string;
    workflows: {
        id: string;
        name: string;
    }[];
    id?: string | undefined;
    groupDescription?: string | undefined;
    permissions?: {
        id: string;
        name: string;
    }[] | undefined;
}, {
    groupName: string;
    workflows: {
        id: string;
        name: string;
    }[];
    id?: string | undefined;
    groupDescription?: string | undefined;
    permissions?: {
        id: string;
        name: string;
    }[] | undefined;
}>;
export type AddGroupFormValues = ZodReturnType<typeof addGroupValidationSchema>;
//# sourceMappingURL=AddGroupValidator.d.ts.map