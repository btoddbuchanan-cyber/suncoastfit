import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BookSection } from "@/components/home/BookSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Suncoastfit — Mobile Personal & Group Fitness Training | Sunshine Coast, BC",
  description:
    "Feel amazing doing what you love. ACE-certified trainer Sandra Buchanan brings personalized fitness to you on the Sunshine Coast, BC. Pilates, personal training, and the Walker to Runner program.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookSection />
      <CTASection />
    </>
  );
}
