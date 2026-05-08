"use client";

import { useEffect, useMemo, useState } from "react";
import { College } from "@/types";
import { saveComparison } from "@/lib/auth-api";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api";

export default function ComparePage() {
  const [allColleges, setAllColleges] = useState<College[]>([]);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const [fourthName, setFourthName] = useState("");
  const [data, setData] = useState<College[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/colleges?limit=50&sortBy=name&sortOrder=asc`)
      .then((response) => response.json())
      .then((payload) => setAllColleges(payload.data ?? []))
      .catch(() => setAllColleges([]));
  }, []);

  const selectedNames = useMemo(
    () => [firstName, secondName, thirdName, fourthName].map((name) => name.trim()).filter(Boolean),
    [firstName, secondName, thirdName, fourthName]
  );

  const selectedColleges = useMemo(() => {
    const selected = selectedNames
      .map((name) => allColleges.find((college) => college.name.toLowerCase() === name.toLowerCase()))
      .filter(Boolean) as College[];
    return Array.from(new Map(selected.map((college) => [college.id, college])).values());
  }, [allColleges, selectedNames]);

  const load = async () => {
    if (selectedColleges.length < 2) {
      setMessage("Pick at least two valid college names.");
      return;
    }

    setLoading(true);
    try {
      setData(selectedColleges);
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  const saveCurrentComparison = async () => {
    if (data.length < 2) return;
    try {
      const payload = await saveComparison(
        data.map((college) => college.id),
        `Comparison of ${data.map((college) => college.name).join(" vs ")}`
      );
      setMessage(payload.success ? "Comparison saved." : payload.message ?? "Failed to save.");
    } catch (err) {
      const typed = err as Error;
      setMessage(typed.message || "Failed to save.");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Compare Colleges</h1>
      <div className="grid gap-3 md:grid-cols-4">
        <input
          list="colleges-list"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Select first college name"
          className="rounded-md border px-3 py-2"
        />
        <input
          list="colleges-list"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
          placeholder="Select second college name"
          className="rounded-md border px-3 py-2"
        />
        <input
          list="colleges-list"
          value={thirdName}
          onChange={(e) => setThirdName(e.target.value)}
          placeholder="Optional third college"
          className="rounded-md border px-3 py-2"
        />
        <input
          list="colleges-list"
          value={fourthName}
          onChange={(e) => setFourthName(e.target.value)}
          placeholder="Optional fourth college"
          className="rounded-md border px-3 py-2"
        />
        <datalist id="colleges-list">
          {allColleges.map((college) => (
            <option key={college.id} value={college.name} />
          ))}
        </datalist>
      </div>
      <div className="flex flex-wrap gap-3">
        <button onClick={load} className="rounded-md bg-brand-600 px-4 py-2 text-white">
          {loading ? "Loading..." : "Compare"}
        </button>
        <button onClick={saveCurrentComparison} className="rounded-md border px-4 py-2">
          Save Comparison
        </button>
      </div>
      {message ? <p className="text-sm text-slate-700">{message}</p> : null}

      {data.length > 0 && (
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="min-w-full text-sm">
            <tbody>
              <tr className="border-b">
                <th className="px-4 py-3 text-left">Metric</th>
                {data.map((c) => (
                  <td key={c.id} className="px-4 py-3 font-medium">
                    {c.name}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-3 text-left">Fees</th>
                {data.map((c) => (
                  <td key={c.id} className="px-4 py-3">
                    {c.fees_min} - {c.fees_max}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-3 text-left">Rating</th>
                {data.map((c) => (
                  <td key={c.id} className="px-4 py-3">
                    {c.rating}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-3 text-left">Placements</th>
                {data.map((c) => (
                  <td key={c.id} className="px-4 py-3">
                    {c.placements_avg}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="px-4 py-3 text-left">Location</th>
                {data.map((c) => (
                  <td key={c.id} className="px-4 py-3">
                    {c.city}, {c.state}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
