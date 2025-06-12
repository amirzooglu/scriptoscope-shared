import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addPlaybookValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    roleId: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    description: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    recommendationType: z.ZodOptional<z.ZodString>;
    selectedTopics: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    description: string;
    name: string;
    selectedTopics: {
        id: string;
        name: string;
    }[];
    id?: string | undefined;
    roleId?: string | undefined;
    role?: {
        id: string;
        name: string;
    } | undefined;
    recommendationType?: string | undefined;
}, {
    name: string;
    id?: string | undefined;
    description?: string | undefined;
    roleId?: string | undefined;
    role?: {
        id: string;
        name: string;
    } | undefined;
    recommendationType?: string | undefined;
    selectedTopics?: {
        id: string;
        name: string;
    }[] | undefined;
}>;
export type AddPlaybookFormValues = ZodReturnType<typeof addPlaybookValidationSchema>;
//# sourceMappingURL=AddPlaybookValidator.d.ts.map