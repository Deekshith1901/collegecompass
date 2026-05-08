import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollegeById } from "@/lib/api";
import { formatMoney } from "@/lib/utils";
import { BookmarkButton } from "@/components/college/bookmark-button";
import Image from "next/image";

type Props = {
  params: { slug: string };
  searchParams: { id?: string };
};

const collegeDescriptions: Record<number, string> = {
  1: "Indian Institute of Technology (IIT) Delhi is one of India's premier engineering institutions, established in 1961. Known for excellence in research and academics, IIT Delhi offers world-class infrastructure and faculty expertise across multiple engineering disciplines. The institute has strong industry connections and consistently produces graduates who excel in various sectors.",
  2: "Indian Institute of Technology (IIT) Bombay, established in 1958, is one of the world's leading engineering institutions. Located in Mumbai, IIT Bombay is known for its rigorous academic curriculum, cutting-edge research facilities, and vibrant campus culture. The institute has strong alumni networks across the globe.",
  3: "Indian Institute of Technology (IIT) Madras, founded in 1959, is one of India's leading technical institutions. IIT Madras is recognized for its scientific research, academic excellence, and industry partnerships. The institute offers comprehensive programs in engineering, sciences, and other disciplines.",
};

const hasRenderableImage = (imageUrl: string | null) =>
  Boolean(
    imageUrl &&
      imageUrl.trim().length > 0 &&
      !imageUrl.includes("example.com") &&
      !imageUrl.includes("share.google") &&
      !imageUrl.includes("drive.google.com")
  );

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug.replaceAll("-", " ")} | CollegeCompass`,
    description: "Detailed college overview including fees, ratings, placements, and exams."
  };
}

export default async function CollegeDetailPage({ searchParams }: Props) {
  if (!searchParams.id) return notFound();
  const result = await getCollegeById(Number(searchParams.id));
  const college = result.data;
  const collegeId = Number(searchParams.id);
  const description = collegeDescriptions[collegeId] || "A premier engineering college in India with excellence in academics, research, and placements. The institution provides comprehensive technical education with emphasis on innovation and industry collaboration.";

  return (
    <article className="space-y-6">
      {/* Backdrop with College Name */}
      <div className="group relative rounded-xl border bg-white overflow-hidden">
        {hasRenderableImage(college.image_url) ? (
          <div className="relative h-64 w-full">
            <Image
              src={college.image_url as string}
              alt={college.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h1 className="text-4xl font-bold">{college.name}</h1>
              <p className="text-lg text-gray-200">
                {college.city}, {college.state}
              </p>
            </div>
          </div>
        ) : (
          <div className="relative h-64 w-full bg-brand-50 flex items-end justify-start p-6">
            <div className="text-slate-900">
              <h1 className="text-4xl font-bold">{college.name}</h1>
              <p className="text-lg text-slate-600">
                {college.city}, {college.state}
              </p>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute right-6 top-6 z-20 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-translate-y-0 -translate-y-2">
          <BookmarkButton collegeId={college.id} />
        </div>
      </div>

      {/* Quick Stats */}
      <section className="grid gap-4 rounded-xl border bg-white p-6 md:grid-cols-3">
        <div className="text-center border-r md:border-r md:border-slate-200">
          <p className="text-3xl font-bold text-brand-600">#{college.ranking}</p>
          <p className="text-sm text-slate-600">Ranking</p>
        </div>
        <div className="text-center border-r md:border-r md:border-slate-200">
          <p className="text-3xl font-bold text-brand-600">{college.rating}</p>
          <p className="text-sm text-slate-600">Rating</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-brand-600">{formatMoney(college.placements_avg)}</p>
          <p className="text-sm text-slate-600">Avg Placement</p>
        </div>
      </section>

      {/* Key Information */}
      <section className="rounded-xl border bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">College Information</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <p>
            <strong className="text-slate-900">Top Course:</strong>
            <span className="text-slate-600 ml-2">{college.top_course}</span>
          </p>
          <p>
            <strong className="text-slate-900">Exams:</strong>
            <span className="text-slate-600 ml-2">{college.exams.join(", ")}</span>
          </p>
          <p>
            <strong className="text-slate-900">Fees Range:</strong>
            <span className="text-slate-600 ml-2">{formatMoney(college.fees_min)} - {formatMoney(college.fees_max)}</span>
          </p>
          <p>
            <strong className="text-slate-900">Average Placement:</strong>
            <span className="text-slate-600 ml-2">{formatMoney(college.placements_avg)}</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="rounded-xl border bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">About {college.name}</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{description}</p>
          <p>
            The college offers a comprehensive curriculum designed to meet industry standards and prepare students for successful careers in their chosen fields. With state-of-the-art facilities, experienced faculty, and strong industry partnerships, students gain practical experience alongside theoretical knowledge.
          </p>
          <p>
            Placement statistics show strong performance with leading companies recruiting from the institution. Alumni have gone on to excel in various sectors including technology, finance, and consulting, reinforcing the college's reputation for producing highly sought-after graduates.
          </p>
        </div>
      </section>

    </article>
  );
}
