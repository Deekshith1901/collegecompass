import { Router } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { requireAuth } from "../../middleware/requireAuth";
import { validateRequest } from "../../middleware/validate";
import { createComparisonSchema } from "./comparison.validation";
import { createComparisonController, getComparisonsController } from "./comparison.controller";

const comparisonRouter = Router();

comparisonRouter.use(asyncHandler(requireAuth));
comparisonRouter.post("/", validateRequest(createComparisonSchema), asyncHandler(createComparisonController));
comparisonRouter.get("/", asyncHandler(getComparisonsController));

export default comparisonRouter;
