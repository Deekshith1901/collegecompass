import { Metadata } from "next";
import { getColleges } from "@/lib/api";
import { CollegeCard } from "@/components/college/college-card";

type Props = { params: { name: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const readableName = params.name.replaceAll("-", " ");
  return {
    title: `${readableName} Colleges | CollegeCompass`,
    description: `Find colleges offering ${readableName} with fees and placement insights.`
  };
}

export default async function CoursePage({ params }: Props) {
  const readableName = params.name.replaceAll("-", " ");
  const colleges = await getColleges({ course: readableName, limit: 18 });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{readableName.toUpperCase()} Overview</h1>
      <p className="rounded-xl border bg-white p-4 text-slate-600">
        This page shows colleges offering {readableName}, with key decision metrics.
      </p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {colleges.data.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
}
