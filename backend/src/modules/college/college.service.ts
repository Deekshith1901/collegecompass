import { supabaseAdmin } from "../../config/supabase";
import { AppError } from "../../utils/AppError";
import { StatusCodes } from "http-status-codes";

type CollegeFilters = {
  page: number;
  limit: number;
  search?: string;
  city?: string;
  state?: string;
  minFees?: number;
  maxFees?: number;
  minRating?: number;
  course?: string;
  sortBy: "ranking" | "rating" | "fees_min" | "fees_max" | "placements_avg" | "name";
  sortOrder: "asc" | "desc";
};

export const getColleges = async (filters: CollegeFilters) => {
  const {
    page,
    limit,
    search,
    city,
    state,
    minFees,
    maxFees,
    minRating,
    course,
    sortBy,
    sortOrder
  } = filters;

  let query = supabaseAdmin.from("colleges").select("*", { count: "exact" });

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }
  if (city) {
    query = query.eq("city", city);
  }
  if (state) {
    query = query.eq("state", state);
  }
  if (typeof minFees === "number") {
    query = query.gte("fees_min", minFees);
  }
  if (typeof maxFees === "number") {
    query = query.lte("fees_max", maxFees);
  }
  if (typeof minRating === "number") {
    query = query.gte("rating", minRating);
  }
  if (course) {
    query = query.ilike("top_course", `%${course}%`);
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await query.order(sortBy, { ascending: sortOrder === "asc" }).range(from, to);

  if (error) {
    throw new AppError("Failed to fetch colleges", StatusCodes.BAD_GATEWAY, error.message);
  }

  return {
    items: data ?? [],
    pagination: {
      page,
      limit,
      total: count ?? 0,
      totalPages: Math.ceil((count ?? 0) / limit)
    }
  };
};

export const getCollegeById = async (id: number) => {
  const { data, error } = await supabaseAdmin.from("colleges").select("*").eq("id", id).single();

  if (error?.code === "PGRST116") {
    throw new AppError("College not found", StatusCodes.NOT_FOUND);
  }

  if (error) {
    throw new AppError("Failed to fetch college", StatusCodes.BAD_GATEWAY, error.message);
  }

  return data;
};
