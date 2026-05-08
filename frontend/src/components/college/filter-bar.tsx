"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const FilterBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="grid gap-3 rounded-xl border bg-white p-4 md:grid-cols-4">
      <input
        defaultValue={searchParams.get("search") ?? ""}
        placeholder="Search college"
        className="rounded-md border px-3 py-2"
        onBlur={(e) => updateParam("search", e.target.value)}
      />
      <input
        defaultValue={searchParams.get("city") ?? ""}
        placeholder="City"
        className="rounded-md border px-3 py-2"
        onBlur={(e) => updateParam("city", e.target.value)}
      />
      <select
        defaultValue={searchParams.get("sortBy") ?? "ranking"}
        className="rounded-md border px-3 py-2"
        onChange={(e) => updateParam("sortBy", e.target.value)}
      >
        <option value="ranking">Sort by Ranking</option>
        <option value="rating">Sort by Rating</option>
        <option value="fees_min">Sort by Min Fees</option>
        <option value="placements_avg">Sort by Placements</option>
      </select>
      <select
        defaultValue={searchParams.get("sortOrder") ?? "asc"}
        className="rounded-md border px-3 py-2"
        onChange={(e) => updateParam("sortOrder", e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </section>
  );
};
