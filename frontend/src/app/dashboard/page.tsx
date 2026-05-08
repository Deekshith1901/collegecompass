"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchComparisons, fetchSavedColleges } from "@/lib/auth-api";
import { supabase } from "@/lib/supabase";
import { Card } from "@/components/ui/card";

type SavedCollegeItem = {
  id: number;
  created_at: string;
  colleges?: {
    id: number;
    name: string;
    city: string;
    state: string;
  };
};

type SavedComparisonItem = {
  id: number;
  title?: string | null;
  colleges?: Array<{
    id: number;
    name: string;
  }>;
};

export default function DashboardPage() {
  const router = useRouter();
  const [savedColleges, setSavedColleges] = useState<SavedCollegeItem[]>([]);
  const [comparisons, setComparisons] = useState<SavedComparisonItem[]>([]);
  const [error, setError] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;

      if (!data.session) {
        router.replace("/login");
        return;
      }

      try {
        const [saved, comps] = await Promise.all([fetchSavedColleges(), fetchComparisons()]);
        if (!mounted) return;
        setSavedColleges(saved.data ?? []);
        setComparisons(comps.data ?? []);
      } catch (err: any) {
        if (!mounted) return;
        setError(err.message || "Failed to load dashboard");
      } finally {
        if (mounted) setCheckingAuth(false);
      }
    };

    // Initial session check
    checkAuth();

    // Listen for auth state changes (important for OAuth redirects)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;

      if (event === 'SIGNED_IN' && session) {
        // User just signed in, load their data
        Promise.all([fetchSavedColleges(), fetchComparisons()])
          .then(([saved, comps]) => {
            if (!mounted) return;
            setSavedColleges(saved.data ?? []);
            setComparisons(comps.data ?? []);
            setCheckingAuth(false);
          })
          .catch((err: any) => {
            if (!mounted) return;
            setError(err.message || "Failed to load dashboard");
            setCheckingAuth(false);
          });
      } else if (event === 'SIGNED_OUT' || !session) {
        router.replace("/login");
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [router]);

  if (checkingAuth) {
    return <div className="text-slate-600">Checking session...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      {error && <p className="rounded-md bg-amber-100 p-3 text-amber-800">{error}</p>}
      <Card>
        <h2 className="text-xl font-semibold">Saved Colleges</h2>
        <p className="mt-2 text-slate-600">Total saved: {savedColleges.length}</p>
        <div className="mt-4 space-y-2">
          {savedColleges.length === 0 ? (
            <p className="text-sm text-slate-500">No saved colleges yet.</p>
          ) : (
            savedColleges.map((item) => (
              <div key={item.id} className="rounded-md border p-3 text-sm">
                <p className="font-medium">{item.colleges?.name ?? "Unknown college"}</p>
                <p className="text-slate-500">
                  {item.colleges?.city ?? "N/A"}, {item.colleges?.state ?? "N/A"}
                </p>
              </div>
            ))
          )}
        </div>
      </Card>
      <Card>
        <h2 className="text-xl font-semibold">Saved Comparisons</h2>
        <p className="mt-2 text-slate-600">Total comparisons: {comparisons.length}</p>
        <div className="mt-4 space-y-2">
          {comparisons.length === 0 ? (
            <p className="text-sm text-slate-500">No saved comparisons yet.</p>
          ) : (
            comparisons.map((item) => (
              <div key={item.id} className="rounded-md border p-3 text-sm">
                <p className="font-medium">{item.title?.trim() || "Saved comparison"}</p>
                <p className="text-slate-600">
                  {(item.colleges ?? []).map((college) => college.name).join(" vs ") || "No colleges available"}
                </p>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
