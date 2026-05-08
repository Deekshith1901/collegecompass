import { z } from "zod";

export const createSavedCollegeSchema = z.object({
  body: z.object({
    collegeId: z.coerce.number().int().positive()
  })
});
