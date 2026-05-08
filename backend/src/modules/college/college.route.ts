import { Router } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { validateRequest } from "../../middleware/validate";
import { getCollegeByIdController, getCollegesController } from "./college.controller";
import { getCollegeByIdSchema, getCollegesSchema } from "./college.validation";

const collegeRouter = Router();

collegeRouter.get("/", validateRequest(getCollegesSchema), asyncHandler(getCollegesController));
collegeRouter.get("/:id", validateRequest(getCollegeByIdSchema), asyncHandler(getCollegeByIdController));

export default collegeRouter;
