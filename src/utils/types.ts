import { type z, type ZodType } from "zod";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ZodAnySchema = ZodType<any, any, any>;

export type ZodReturnType<
  T extends ZodAnySchema | ((t: unknown) => ZodAnySchema), // `TFunction` removed
> = T extends ZodAnySchema
  ? z.infer<T>
  : T extends (t: unknown) => ZodAnySchema
  ? z.infer<ReturnType<T>>
  : never;

export type WithRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;