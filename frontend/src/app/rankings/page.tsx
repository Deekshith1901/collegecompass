import { Metadata } from "next";
import { getColleges } from "@/lib/api";

export const metadata: Metadata = {
  title: "College Rankings | CollegeCompass",
  description: "NIRF-style ranking table with key metrics."
};

export default async function RankingsPage() {
  const colleges = await getColleges({ limit: 50, sortBy: "ranking", sortOrder: "asc" });

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Top Rankings</h1>
      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left">Rank</th>
              <th className="px-4 py-3 text-left">College</th>
              <th className="px-4 py-3 text-left">City</th>
              <th className="px-4 py-3 text-left">Rating</th>
            </tr>
          </thead>
          <tbody>
            {colleges.data.map((college, index) => (
              <tr key={college.id} className="border-t">
                <td className="px-4 py-3">#{index + 1}</td>
                <td className="px-4 py-3">{college.name}</td>
                <td className="px-4 py-3">{college.city}</td>
                <td className="px-4 py-3">{college.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
