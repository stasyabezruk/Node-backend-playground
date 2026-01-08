import { z } from "zod";

export const helloQuerySchema = z.object({
  name: z.string().min(1).optional(),
});
