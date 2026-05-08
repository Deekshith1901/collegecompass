import { Request, Response } from "express";
import { createSavedCollege, getSavedColleges } from "./savedCollege.service";
import { sendSuccess } from "../../utils/response";

export const createSavedCollegeController = async (req: Request, res: Response): Promise<void> => {
  const userId = req.userId as string;
  const collegeId = Number(req.body.collegeId);
  const saved = await createSavedCollege(userId, collegeId);

  res.status(201).json({
    success: true,
    message: "College saved successfully",
    data: saved
  });
};

export const getSavedCollegesController = async (req: Request, res: Response): Promise<void> => {
  const userId = req.userId as string;
  const saved = await getSavedColleges(userId);
  sendSuccess(res, saved, "Saved colleges fetched successfully");
};
