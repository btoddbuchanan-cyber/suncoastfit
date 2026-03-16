import type { Metadata } from "next";
import { DM_Serif_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suncoastfit.com"),
  title: {
    default: "Suncoastfit — Mobile Personal & Group Fitness Training | Sunshine Coast, BC",
    template: "%s | Suncoastfit",
  },
  description:
    "Personalized mobile fitness training for mature adults on the Sunshine Coast, BC. ACE-certified personal trainer Sandra Buchanan offers the Walker to Runner program and free YouTube workouts.",
  keywords: [
    "personal trainer sunshine coast",
    "mobile fitness training",
    "fitness over 50",
    "walker to runner program",
    "fitness for mature adults",
    "Sandra Buchanan trainer",
  ],
  authors: [{ name: "Sandra Buchanan" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Suncoastfit",
    title: "Suncoastfit — Mobile Personal & Group Fitness Training",
    description:
      "Personalized mobile fitness training for mature adults on the Sunshine Coast, BC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suncoastfit — Mobile Fitness Training",
    description:
      "Personalized mobile fitness training for mature adults on the Sunshine Coast, BC.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Suncoastfit",
  description:
    "Personalized mobile fitness training for mature adults on the Sunshine Coast, BC. ACE-certified personal trainer Sandra Buchanan.",
  url: "https://suncoastfit.com",
  telephone: "+1-604-220-5342",
  email: "suncoastfit@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sunshine Coast",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  founder: {
    "@type": "Person",
    name: "Sandra Buchanan",
    jobTitle: "ACE Certified Personal Trainer",
  },
  sameAs: [
    "https://facebook.com/suncoastfit",
    "https://youtube.com/@suncoastfit",
    "https://instagram.com/suncoastfit",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Walker to Runner Program",
        description: "An 8-week program that transforms walkers into confident runners.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "YouTube Fitness Workouts",
        description: "Free low-impact workouts for adults 50+ including standing routines, dumbbell sessions, and stretching.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
