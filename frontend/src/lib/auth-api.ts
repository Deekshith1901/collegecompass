"use client";

import { supabase } from "./supabase";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api";

const getAccessToken = async (): Promise<string> => {
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session?.access_token) {
    throw new Error("You need to login first.");
  }
  return data.session.access_token;
};

export const fetchSavedColleges = async () => {
  const token = await getAccessToken();
  const response = await fetch(`${API_BASE}/saved-colleges`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store"
  });
  return response.json();
};

export const saveCollege = async (collegeId: number) => {
  const token = await getAccessToken();
  const response = await fetch(`${API_BASE}/saved-colleges`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ collegeId })
  });
  return response.json();
};

export const fetchComparisons = async () => {
  const token = await getAccessToken();
  const response = await fetch(`${API_BASE}/comparisons`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store"
  });
  return response.json();
};

export const saveComparison = async (collegeIds: number[], title?: string) => {
  const token = await getAccessToken();
  const response = await fetch(`${API_BASE}/comparisons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ collegeIds, title })
  });
  return response.json();
};
