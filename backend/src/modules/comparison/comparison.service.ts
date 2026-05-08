import { StatusCodes } from "http-status-codes";
import { supabaseAdmin } from "../../config/supabase";
import { AppError } from "../../utils/AppError";

export const createComparison = async (userId: string, title: string | undefined, collegeIds: number[]) => {
  const uniqueCollegeIds = Array.from(new Set(collegeIds));
  if (uniqueCollegeIds.length < 2 || uniqueCollegeIds.length > 4) {
    throw new AppError("Comparisons must include 2 to 4 unique colleges", StatusCodes.BAD_REQUEST);
  }

  const { data, error } = await supabaseAdmin
    .from("saved_comparisons")
    .insert({
      user_id: userId,
      title: title ?? null,
      college_ids: uniqueCollegeIds
    })
    .select()
    .single();

  if (error) {
    throw new AppError("Failed to save comparison", StatusCodes.BAD_GATEWAY, error.message);
  }

  return data;
};

export const getComparisons = async (userId: string) => {
  const { data, error } = await supabaseAdmin
    .from("saved_comparisons")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new AppError("Failed to fetch comparisons", StatusCodes.BAD_GATEWAY, error.message);
  }

  const comparisons = data ?? [];
  const collegeIds = Array.from(new Set(comparisons.flatMap((item) => item.college_ids as number[])));

  if (collegeIds.length === 0) {
    return comparisons.map((item) => ({ ...item, colleges: [] }));
  }

  const { data: colleges, error: collegesError } = await supabaseAdmin
    .from("colleges")
    .select("id,name,slug,city,state,rating,ranking,fees_min,fees_max,placements_avg")
    .in("id", collegeIds);

  if (collegesError) {
    throw new AppError("Failed to fetch comparison colleges", StatusCodes.BAD_GATEWAY, collegesError.message);
  }

  const byId = new Map((colleges ?? []).map((college) => [college.id, college]));

  return comparisons.map((item) => ({
    ...item,
    colleges: (item.college_ids as number[]).map((id) => byId.get(id)).filter(Boolean)
  }));
};
