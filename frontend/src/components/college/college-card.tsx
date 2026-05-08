import Image from "next/image";
import Link from "next/link";
import { College } from "@/types";
import { formatMoney } from "@/lib/utils";

type Props = { college: College };

const hasRenderableImage = (imageUrl: string | null) =>
  Boolean(imageUrl && imageUrl.trim().length > 0 && !imageUrl.includes("example.com"));

export const CollegeCard = ({ college }: Props) => (
  <article className="overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
    {/* Image with Placeholder */}
    <div className="relative h-48 w-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
      {hasRenderableImage(college.image_url) ? (
        <Image src={college.image_url as string} alt={college.name} fill className="object-cover" />
      ) : (
        <div className="text-center">
          <div className="text-4xl text-slate-400 mb-2">🏫</div>
          <p className="text-sm text-slate-500">College Image</p>
        </div>
      )}
    </div>

    <div className="space-y-3 p-4">
      <div>
        <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">{college.name}</h3>
        <p className="text-sm text-slate-500">
          {college.city}, {college.state}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        <div className="bg-blue-50 rounded p-2">
          <p className="text-xs text-slate-600">Rating</p>
          <p className="font-semibold text-slate-900">{college.rating}⭐</p>
        </div>
        <div className="bg-green-50 rounded p-2">
          <p className="text-xs text-slate-600">Rank</p>
          <p className="font-semibold text-slate-900">#{college.ranking}</p>
        </div>
        <div className="bg-purple-50 rounded p-2">
          <p className="text-xs text-slate-600">Fees</p>
          <p className="font-semibold text-slate-900 text-xs">{formatMoney(college.fees_min)}</p>
        </div>
        <div className="bg-orange-50 rounded p-2">
          <p className="text-xs text-slate-600">Placement</p>
          <p className="font-semibold text-slate-900 text-xs">{formatMoney(college.placements_avg)}</p>
        </div>
      </div>
      <Link
        href={`/college/${college.slug}?id=${college.id}`}
        className="block w-full rounded-md bg-brand-600 px-3 py-2 text-sm font-medium text-white text-center hover:bg-brand-700 transition"
      >
        View Details
      </Link>
    </div>
  </article>
);
