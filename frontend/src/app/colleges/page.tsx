import { Metadata } from "next";
import { getColleges } from "@/lib/api";
import { CollegeCard } from "@/components/college/college-card";
import { FilterBar } from "@/components/college/filter-bar";
import Link from "next/link";
import { BackendStatusBanner } from "@/components/common/backend-status-banner";

export const metadata: Metadata = {
  title: "College Listings | CollegeCompass",
  description: "Search and filter colleges by city, fees, rating, and courses."
};

type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function CollegeListPage({ searchParams }: Props) {
  const page = Number(searchParams.page ?? 1);
  const response = await getColleges({
    page,
    limit: 12,
    search: typeof searchParams.search === "string" ? searchParams.search : undefined,
    city: typeof searchParams.city === "string" ? searchParams.city : undefined,
    sortBy: typeof searchParams.sortBy === "string" ? (searchParams.sortBy as never) : "ranking",
    sortOrder: typeof searchParams.sortOrder === "string" ? (searchParams.sortOrder as never) : "asc"
  });

  const totalPages = response.meta?.pagination?.totalPages ?? 1;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">College Listings</h1>
      <BackendStatusBanner show={!response.success} />
      <FilterBar />

      {response.data.length === 0 ? (
        <div className="rounded-xl border bg-white p-10 text-center text-slate-500">No colleges found.</div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {response.data.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      )}

      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const target = index + 1;
          return (
            <Link
              key={target}
              href={`/colleges?page=${target}`}
              className={`rounded-md px-3 py-1 text-sm ${target === page ? "bg-brand-600 text-white" : "bg-white border"}`}
            >
              {target}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
