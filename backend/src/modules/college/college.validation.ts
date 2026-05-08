import { z } from "zod";

const sortByEnum = z.enum(["ranking", "rating", "fees_min", "fees_max", "placements_avg", "name"]);
const sortOrderEnum = z.enum(["asc", "desc"]);

export const getCollegesSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(50).default(12),
    search: z.string().trim().min(1).optional(),
    city: z.string().trim().min(1).optional(),
    state: z.string().trim().min(1).optional(),
    minFees: z.coerce.number().int().nonnegative().optional(),
    maxFees: z.coerce.number().int().nonnegative().optional(),
    minRating: z.coerce.number().min(0).max(5).optional(),
    course: z.string().trim().min(1).optional(),
    sortBy: sortByEnum.default("ranking"),
    sortOrder: sortOrderEnum.default("asc")
  })
});

export const getCollegeByIdSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive()
  })
});
