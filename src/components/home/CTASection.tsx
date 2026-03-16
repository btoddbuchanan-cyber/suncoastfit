"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-[var(--color-bg-primary)] to-[var(--color-accent-lighter)]" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--color-primary)]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[var(--color-primary)]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[var(--color-primary)]/15" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Ready to Feel{" "}
            <span className="text-[var(--color-primary)]">Amazing</span>?
          </h2>
          <p
            className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Whether you&apos;re looking to build strength through Pilates, get
            personalized training, or discover the joy of running — let&apos;s
            start your journey together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get Started Today
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Learn About Sandra
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
