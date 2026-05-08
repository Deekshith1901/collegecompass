import { Request, Response } from "express";
import { createComparison, getComparisons } from "./comparison.service";
import { sendSuccess } from "../../utils/response";

export const createComparisonController = async (req: Request, res: Response): Promise<void> => {
  const userId = req.userId as string;
  const title = req.body.title as string | undefined;
  const collegeIds = req.body.collegeIds as number[];
  const comparison = await createComparison(userId, title, collegeIds);

  res.status(201).json({
    success: true,
    message: "Comparison saved successfully",
    data: comparison
  });
};

export const getComparisonsController = async (req: Request, res: Response): Promise<void> => {
  const userId = req.userId as string;
  const comparisons = await getComparisons(userId);
  sendSuccess(res, comparisons, "Comparisons fetched successfully");
};
