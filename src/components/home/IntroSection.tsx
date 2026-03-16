"use client";

import Image from "next/image";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";

export function IntroSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-primary-lighter)]/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left — decorative element */}
          <AnimatedSection className="lg:col-span-2 relative">
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-[var(--color-primary-lighter)] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden">
                <Image
                  src="/images/about/sandra-portrait.jpg"
                  alt="Sandra Buchanan by the water on the Sunshine Coast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 30vw"
                />
              </div>
              {/* Small floating accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white shadow-[var(--shadow-md)] rounded-full flex items-center justify-center border border-[var(--color-border-light)]">
                <div className="text-center">
                  <p className="text-lg font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-dm-serif)" }}>20+</p>
                  <p className="text-[9px] font-semibold text-[var(--color-text-muted)] uppercase leading-tight" style={{ fontFamily: "var(--font-nunito)" }}>Years</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — content */}
          <div className="lg:col-span-3">
            <AnimatedHeading>
              <span
                className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Meet Sandra
              </span>
              <h2
                className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] mb-6"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Your Partner in{" "}
                <span className="text-[var(--color-primary)]">Health & Movement</span>
              </h2>
            </AnimatedHeading>

            <AnimatedSection delay={0.1}>
              <p
                className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                I&apos;m Sandra Buchanan, an ACE-certified Personal Trainer with a background
                in Occupational Therapy. After years helping people recover in rehabilitation,
                I now help them thrive through personalized fitness.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                I bring the training to you — your home, your gym, your favourite outdoor
                space on the beautiful Sunshine Coast. Whether you train alone or with friends,
                every program is built for your body, your goals, and your life.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                {["ACE Certified", "Osteofit", "Aquatic Fitness", "Weight Training", "Walker to Runner"].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 rounded-[var(--radius-full)] text-sm font-medium bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
