import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BookSection } from "@/components/home/BookSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Suncoastfit — Fitness Over 50 with Sandra",
  description:
    "Feel amazing doing what you love. ACE-certified trainer Sandra Buchanan brings fitness to adults 50+. Walker to Runner program and YouTube workouts.",
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
