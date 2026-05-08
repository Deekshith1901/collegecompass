"use client";

import { useState } from "react";
import { saveCollege } from "@/lib/auth-api";

type Props = {
  collegeId: number;
};

export const BookmarkButton = ({ collegeId }: Props) => {
  const [message, setMessage] = useState("");

  const onSave = async () => {
    try {
      const payload = await saveCollege(collegeId);
      setMessage(payload.success ? "Saved to dashboard." : payload.message ?? "Could not save.");
    } catch (err) {
      const typed = err as Error;
      setMessage(typed.message || "Could not save.");
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        onClick={onSave}
        className="rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.04em] text-slate-900 shadow-sm transition hover:bg-white"
      >
        Save
      </button>
      {message ? <p className="text-xs text-slate-500">{message}</p> : null}
    </div>
  );
};
