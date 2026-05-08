import { ApiItemResponse, ApiListResponse, College } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api";

export type CollegeQuery = {
  page?: number;
  limit?: number;
  search?: string;
  city?: string;
  state?: string;
  minFees?: number;
  maxFees?: number;
  minRating?: number;
  course?: string;
  sortBy?: "ranking" | "rating" | "fees_min" | "fees_max" | "placements_avg" | "name";
  sortOrder?: "asc" | "desc";
};

const emptyCollegeList: ApiListResponse<College> = {
  success: false,
  message: "Backend unavailable",
  data: [],
  meta: {
    pagination: {
      page: 1,
      limit: 12,
      total: 0,
      totalPages: 0
    }
  }
};

const fallbackCollegeItem = (id: number): ApiItemResponse<College> => ({
  success: false,
  message: "Backend unavailable",
  data: {
    id,
    name: "Unavailable",
    slug: "unavailable",
    city: "N/A",
    state: "N/A",
    fees_min: 0,
    fees_max: 0,
    rating: 0,
    ranking: 0,
    placements_avg: 0,
    exams: [],
    top_course: "N/A",
    established: 1900,
    ownership: "N/A",
    image_url: null
  }
});

export const getColleges = async (query: CollegeQuery = {}): Promise<ApiListResponse<College>> => {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== "") params.set(key, String(value));
  });

  try {
    const response = await fetch(`${API_BASE_URL}/colleges?${params.toString()}`, { next: { revalidate: 120 } });
    if (!response.ok) return emptyCollegeList;
    return response.json();
  } catch {
    return emptyCollegeList;
  }
};

export const getCollegeById = async (id: number): Promise<ApiItemResponse<College>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/colleges/${id}`, { next: { revalidate: 120 } });
    if (!response.ok) return fallbackCollegeItem(id);
    return response.json();
  } catch {
    return fallbackCollegeItem(id);
  }
};
