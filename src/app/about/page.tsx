import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutCredentials } from "@/components/about/AboutCredentials";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Sandra Buchanan",
  description:
    "Meet Sandra Buchanan — ACE-certified Personal Trainer and Occupational Therapist on the Sunshine Coast, BC. Learn about her journey from rehabilitation to fitness.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutCredentials />
      <AboutCTA />
    </>
  );
}
