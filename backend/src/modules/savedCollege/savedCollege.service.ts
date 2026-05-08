import { StatusCodes } from "http-status-codes";
import { supabaseAdmin } from "../../config/supabase";
import { AppError } from "../../utils/AppError";

export const createSavedCollege = async (userId: string, collegeId: number) => {
  const { data, error } = await supabaseAdmin
    .from("saved_colleges")
    .upsert({ user_id: userId, college_id: collegeId }, { onConflict: "user_id,college_id" })
    .select()
    .single();

  if (error) {
    throw new AppError("Failed to save college", StatusCodes.BAD_GATEWAY, error.message);
  }

  return data;
};

export const getSavedColleges = async (userId: string) => {
  const { data, error } = await supabaseAdmin
    .from("saved_colleges")
    .select("id,created_at,colleges(*)")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new AppError("Failed to fetch saved colleges", StatusCodes.BAD_GATEWAY, error.message);
  }

  return data ?? [];
};
