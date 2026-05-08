"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="mt-2 text-slate-600">Please retry. If it persists, check backend availability.</p>
      <button onClick={reset} className="mt-4 rounded-md bg-brand-600 px-4 py-2 text-white">
        Try again
      </button>
    </div>
  );
}
