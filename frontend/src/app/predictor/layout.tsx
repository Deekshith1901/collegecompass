import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Predictor - Find Your Match | CollegeCompass",
  description: "Get personalized college recommendations based on your JEE rank and preferences. Rule-based predictor using historical cutoff data.",
  keywords: ["college predictor", "JEE rank to college", "college recommendation", "cutoff predictor", "engineering college matches"],
  openGraph: {
    title: "College Predictor",
    description: "Find colleges that match your JEE rank with our intelligent predictor tool",
    url: "/predictor",
  },
};

export default function PredictorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
