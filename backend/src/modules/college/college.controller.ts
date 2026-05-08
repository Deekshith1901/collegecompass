import { Request, Response } from "express";
import { getCollegeById, getColleges } from "./college.service";
import { sendSuccess } from "../../utils/response";

export const getCollegesController = async (req: Request, res: Response): Promise<void> => {
  const result = await getColleges({
    page: Number(req.query.page ?? 1),
    limit: Number(req.query.limit ?? 12),
    search: req.query.search as string | undefined,
    city: req.query.city as string | undefined,
    state: req.query.state as string | undefined,
    minFees: req.query.minFees ? Number(req.query.minFees) : undefined,
    maxFees: req.query.maxFees ? Number(req.query.maxFees) : undefined,
    minRating: req.query.minRating ? Number(req.query.minRating) : undefined,
    course: req.query.course as string | undefined,
    sortBy: (req.query.sortBy as
      | "ranking"
      | "rating"
      | "fees_min"
      | "fees_max"
      | "placements_avg"
      | "name") ?? "ranking",
    sortOrder: (req.query.sortOrder as "asc" | "desc") ?? "asc"
  });

  sendSuccess(res, result.items, "Colleges fetched successfully", {
    pagination: result.pagination
  });
};

export const getCollegeByIdController = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const college = await getCollegeById(id);
  sendSuccess(res, college, "College fetched successfully");
};
