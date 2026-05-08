import { Response } from "express";

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = "Request completed successfully",
  meta?: Record<string, unknown>
): void => {
  res.status(200).json({
    success: true,
    message,
    data,
    ...(meta ? { meta } : {})
  });
};
