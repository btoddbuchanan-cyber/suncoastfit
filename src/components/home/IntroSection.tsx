"use client";

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
              {/* Organic shape background */}
              <div className="absolute inset-0 bg-[var(--color-primary-lighter)] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" />
              <div className="absolute inset-4 bg-[var(--color-bg-primary)] rounded-[60%_40%_30%_70%/50%_60%_40%_50%] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-6xl text-[var(--color-primary)]" style={{ fontFamily: "var(--font-dm-serif)" }}>20+</p>
                  <p className="text-sm font-semibold text-[var(--color-text-muted)] mt-2 tracking-wide uppercase" style={{ fontFamily: "var(--font-nunito)" }}>
                    Years in Health<br />& Rehabilitation
                  </p>
                </div>
              </div>
              {/* Small floating accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center">
                <span className="text-xl text-[var(--color-accent)]" style={{ fontFamily: "var(--font-dm-serif)" }}>ACE</span>
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
                {["Mat Pilates", "Personal Training", "Osteofit", "Aquatic Fitness", "Walker to Runner"].map((cert) => (
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
