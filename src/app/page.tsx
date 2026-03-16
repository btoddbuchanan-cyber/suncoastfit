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
    "Feel amazing doing what you love. ACE-certified trainer Sandra Buchanan brings fitness to adults 50+ on the Sunshine Coast, BC. Walker to Runner program and free YouTube workouts.",
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
