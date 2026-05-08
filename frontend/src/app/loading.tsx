export default function GlobalLoading() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-56 animate-pulse rounded bg-slate-200" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="h-48 animate-pulse rounded-xl bg-slate-200" />
        ))}
      </div>
    </div>
  );
}
