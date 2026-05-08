"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LogoutPage() {
  const router = useRouter();

  const doLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    }
    router.push("/login");
  };

  return (
    <div className="mx-auto max-w-md rounded-xl border bg-white p-6">
      <h1 className="text-2xl font-bold">Logout</h1>
      <p className="mt-2 text-slate-600">Sign out from your account.</p>
      <button onClick={doLogout} className="mt-4 rounded-md bg-slate-900 px-3 py-2 text-white">
        Confirm logout
      </button>
    </div>
  );
}

