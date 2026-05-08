"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state change:", event, session?.user?.id);

      if (event === 'SIGNED_IN' && session) {
        router.push("/dashboard");
      } else if (event === 'SIGNED_OUT') {
        router.push("/login");
      }
    });

    // Check current session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error("Session error:", error);
        router.push("/login");
      } else if (session) {
        router.push("/dashboard");
      } else {
        // If no session, wait for auth state change
        setTimeout(() => {
          supabase.auth.getSession().then(({ data: { session: retrySession } }) => {
            if (!retrySession) {
              router.push("/login");
            }
          });
        }, 2000);
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-brand-600 border-t-transparent mx-auto"></div>
        <p className="text-slate-600">Completing sign in...</p>
        <p className="text-sm text-slate-500 mt-2">This may take a few seconds...</p>
      </div>
    </div>
  );
}