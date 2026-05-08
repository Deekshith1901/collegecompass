import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q&A - College Selection Questions & Answers | CollegeCompass",
  description: "Get answers to frequently asked questions about college selection, admissions, placements, and career guidance.",
  keywords: ["college Q&A", "college FAQs", "college questions", "admission help", "career advice"],
  openGraph: {
    title: "Q&A - College Selection Questions",
    description: "Find answers to your college selection questions from community discussions",
    url: "/qa",
  },
};

export default function QALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
