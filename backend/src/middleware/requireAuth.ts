import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { supabaseAdmin, supabasePublic } from "../config/supabase";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      accessToken?: string;
    }
  }
}

export const requireAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.header("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "Missing or invalid Authorization header"
    });
    return;
  }

  const token = authHeader.replace("Bearer ", "").trim();
  const { data, error } = await supabasePublic.auth.getUser(token);

  if (error || !data.user?.id) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "Invalid or expired access token"
    });
    return;
  }

  await supabaseAdmin.from("users").upsert({
    id: data.user.id,
    full_name: data.user.user_metadata?.full_name ?? null,
    avatar_url: data.user.user_metadata?.avatar_url ?? null
  });

  req.userId = data.user.id;
  req.accessToken = token;
  next();
};
