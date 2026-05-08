import { Router } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { validateRequest } from "../../middleware/validate";
import { requireAuth } from "../../middleware/requireAuth";
import { createSavedCollegeController, getSavedCollegesController } from "./savedCollege.controller";
import { createSavedCollegeSchema } from "./savedCollege.validation";

const savedCollegeRouter = Router();

savedCollegeRouter.use(asyncHandler(requireAuth));
savedCollegeRouter.post("/", validateRequest(createSavedCollegeSchema), asyncHandler(createSavedCollegeController));
savedCollegeRouter.get("/", asyncHandler(getSavedCollegesController));

export default savedCollegeRouter;
