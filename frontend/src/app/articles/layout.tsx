import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Selection Articles & Guides | CollegeCompass",
  description: "Read expert articles on engineering college selection, career guidance, and admission tips. Make informed decisions about your future.",
  keywords: ["college selection guide", "career guidance", "engineering colleges", "admission tips", "college articles"],
  openGraph: {
    title: "College Selection Articles & Guides",
    description: "Expert articles to help you choose the right engineering college",
    url: "/articles",
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
