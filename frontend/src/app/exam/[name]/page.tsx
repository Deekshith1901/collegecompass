import { Metadata } from "next";
import { getColleges } from "@/lib/api";
import { CollegeCard } from "@/components/college/college-card";

type Props = { params: { name: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const examName = params.name.replaceAll("-", " ").toUpperCase();
  return {
    title: `${examName} Accepting Colleges | CollegeCompass`,
    description: `Explore colleges that accept ${examName}.`
  };
}

export default async function ExamPage({ params }: Props) {
  const examName = params.name.replaceAll("-", " ").toLowerCase();
  const colleges = await getColleges({ limit: 50 });
  const filtered = colleges.data.filter((c) => c.exams.some((exam) => exam.toLowerCase().includes(examName)));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Exam Accepting Colleges</h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
}
