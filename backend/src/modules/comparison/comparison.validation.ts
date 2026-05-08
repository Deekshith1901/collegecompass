import { z } from "zod";

export const createComparisonSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1).max(120).optional(),
    collegeIds: z
      .array(z.coerce.number().int().positive())
      .min(2, "At least 2 colleges are required")
      .max(4, "You can compare up to 4 colleges")
  })
});
