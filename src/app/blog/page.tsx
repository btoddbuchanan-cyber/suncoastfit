import { Metadata } from "next";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Blog — Fitness & Healthy Living",
  description:
    "Fitness tips, healthy living articles, and training advice from Sandra Buchanan at Suncoastfit on the Sunshine Coast, BC.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] to-[var(--color-bg-primary)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedHeading>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
              Blog
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Fitness &{" "}
              <span className="text-[var(--color-primary)]">Healthy Living</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-nunito)" }}>
              Tips, stories, and advice to help you move better, feel stronger, and live healthier.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-primary-lighter)] flex items-center justify-center">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h2 className="text-2xl mb-4" style={{ fontFamily: "var(--font-dm-serif)" }}>
                New Articles Coming Soon
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto" style={{ fontFamily: "var(--font-nunito)" }}>
                Sandra is working on new fitness articles and healthy living content. Stay tuned for updates!
              </p>
              <Button href="/contact" variant="secondary">
                Subscribe for Updates
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
