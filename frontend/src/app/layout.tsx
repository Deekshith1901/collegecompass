import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://collegecompass.com"),
  title: {
    default: "CollegeCompass - Discover Your Perfect Engineering College",
    template: "%s | CollegeCompass"
  },
  description: "Find, compare, and choose your ideal engineering college in India. Access college rankings, reviews, placements, and personalized recommendations with our comprehensive platform.",
  keywords: [
    "college discovery",
    "college compare",
    "engineering colleges india",
    "college rankings",
    "JEE main colleges",
    "college predictor",
    "college reviews",
    "placement data",
    "NITs",
    "IITs",
    "BITS"
  ],
  authors: [{ name: "CollegeCompass" }],
  creator: "CollegeCompass",
  publisher: "CollegeCompass",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://collegecompass.com",
    title: "CollegeCompass - Your Guide to Engineering College Selection",
    description: "Find and compare engineering colleges, view rankings, placement data, and get personalized college recommendations based on your JEE rank.",
    siteName: "CollegeCompass",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CollegeCompass - Engineering College Finder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CollegeCompass",
    description: "Discover your perfect engineering college",
    creator: "@collegecompass",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://collegecompass.com",
    languages: {
      "en-US": "https://collegecompass.com",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://collegecompass.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CollegeCompass",
              description: "Engineering college discovery and comparison platform",
              url: "https://collegecompass.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://collegecompass.com/colleges?search={search_term_string}",
                },
                query_input: "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="container-app py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
