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
  title: {
    default: "Suncoastfit — Mobile Personal & Group Fitness Training | Sunshine Coast, BC",
    template: "%s | Suncoastfit",
  },
  description:
    "Personalized mobile fitness training for mature adults on the Sunshine Coast, BC. ACE-certified personal trainer Sandra Buchanan offers Pilates, personal training, and the Walker to Runner program.",
  keywords: [
    "personal trainer sunshine coast",
    "mobile fitness training",
    "pilates classes sunshine coast bc",
    "walker to runner program",
    "fitness for mature adults",
    "Sandra Buchanan trainer",
  ],
  authors: [{ name: "Sandra Buchanan" }],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${nunito.variable}`}>
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
