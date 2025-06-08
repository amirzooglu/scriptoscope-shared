import { type z, type ZodType } from "zod";
export type ZodAnySchema = ZodType<any, any, any>;
export type ZodReturnType<T extends ZodAnySchema | ((t: unknown) => ZodAnySchema)> = T extends ZodAnySchema ? z.infer<T> : T extends (t: unknown) => ZodAnySchema ? z.infer<ReturnType<T>> : never;
export type WithRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
