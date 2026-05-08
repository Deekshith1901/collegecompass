"use client";

export default function CollegesError({ reset }: { reset: () => void }) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="text-xl font-semibold">Unable to load colleges</h2>
      <button onClick={reset} className="mt-4 rounded-md bg-brand-600 px-4 py-2 text-white">
        Retry
      </button>
    </div>
  );
}
