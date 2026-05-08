import Link from "next/link";
import { getColleges } from "@/lib/api";
import { CollegeCard } from "@/components/college/college-card";
import { BackendStatusBanner } from "@/components/common/backend-status-banner";

export const revalidate = 120;

export default async function HomePage() {
  const [popular, topRanked] = await Promise.all([
    getColleges({ limit: 6, sortBy: "rating", sortOrder: "desc" }),
    getColleges({ limit: 6, sortBy: "ranking", sortOrder: "asc" })
  ]);
  const backendDown = !popular.success || !topRanked.success;

  return (
    <div className="space-y-10">
      <BackendStatusBanner show={backendDown} />
      <section className="rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-white">
        <h1 className="text-3xl font-bold md:text-4xl">Discover the Right College Faster</h1>
        <p className="mt-3 max-w-2xl text-brand-100">
          Search, compare, and shortlist colleges with structured fees, placement, and ranking data.
        </p>
        <div className="mt-6">
          <Link href="/colleges" className="rounded-md bg-white px-4 py-2 font-medium text-brand-700">
            Explore Colleges
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Popular Colleges</h2>
          <Link href="/colleges" className="text-brand-700">
            View all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {popular.data.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Top Rankings</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topRanked.data.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>
    </div>
  );
}
