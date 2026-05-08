import { Router } from "express";
import collegeRouter from "../modules/college/college.route";
import savedCollegeRouter from "../modules/savedCollege/savedCollege.route";
import comparisonRouter from "../modules/comparison/comparison.route";

const apiRouter = Router();

apiRouter.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is healthy"
  });
});

apiRouter.use("/colleges", collegeRouter);
apiRouter.use("/saved-colleges", savedCollegeRouter);
apiRouter.use("/comparisons", comparisonRouter);

export default apiRouter;
