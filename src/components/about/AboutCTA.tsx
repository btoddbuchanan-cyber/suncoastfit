"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export function AboutCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Let&apos;s Work{" "}
            <span className="text-[var(--color-primary)]">Together</span>
          </h2>
          <p
            className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Whether you&apos;re returning to fitness after a break, looking to try
            something new, or ready to take your health to the next level — I&apos;d
            love to hear from you.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
