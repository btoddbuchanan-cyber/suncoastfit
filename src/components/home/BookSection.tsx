"use client";

import { motion } from "motion/react";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export function BookSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-bg-dark)] text-[var(--color-text-on-dark)] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book Visual */}
          <AnimatedSection>
            <div className="relative max-w-sm mx-auto">
              {/* Book mockup */}
              <motion.div
                whileHover={{ rotateY: -5, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-[var(--radius-lg)] shadow-[var(--shadow-xl)] p-8 flex flex-col justify-between"
                style={{ perspective: "1000px" }}
              >
                <div>
                  <p className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-accent-light)] mb-2" style={{ fontFamily: "var(--font-nunito)" }}>
                    Sandra Buchanan
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl text-white leading-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>
                    Walker to<br />30 Minute<br />Runner
                  </h3>
                  <div className="mt-4 w-16 h-0.5 bg-[var(--color-accent)]" />
                  <p className="mt-4 text-sm text-white/70" style={{ fontFamily: "var(--font-nunito)" }}>
                    A Fitness Guide That Transforms<br />You Into a Runner in 8 Weeks
                  </p>
                </div>
                {/* Decorative shoe icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <svg viewBox="0 0 60 60" className="w-16 h-16" fill="white" aria-hidden="true">
                    <path d="M10 40 C10 32, 18 24, 30 24 C36 24, 42 27, 46 30 L54 33 C57 33.5, 60 36, 60 38 L60 40 C60 43, 57 46, 54 46 L16 46 C12.7 46, 10 43.3, 10 40Z" />
                  </svg>
                </div>
              </motion.div>

              {/* Shadow/reflection */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-xl rounded-full" aria-hidden="true" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedHeading>
              <span
                className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent-light)] mb-4"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                The Book
              </span>
              <h2
                className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-[var(--color-text-on-dark)] mb-6"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                From Walking to Running in{" "}
                <span className="text-[var(--color-accent-light)]">8 Weeks</span>
              </h2>
            </AnimatedHeading>

            <AnimatedSection delay={0.1}>
              <p
                className="text-lg text-[var(--color-text-on-dark)]/80 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Running is one of those activities which is intrinsically enjoyable
                and super healthy — and almost anyone can learn to do it safely and well.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p
                className="text-lg text-[var(--color-text-on-dark)]/80 leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                This book is for people who want stronger bones and muscles, better
                cardiovascular health, improved feelings of well-being, and the enjoyment
                of running. This book is for YOU.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ul className="space-y-3 mb-8">
                {[
                  "Start with 30-second run intervals",
                  "Gradually build to a full 30-minute run",
                  "Warm-up exercises and cool-down stretches",
                  "Running form, shoes, and nutrition advice",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-text-on-dark)]/70" style={{ fontFamily: "var(--font-nunito)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <Button href="/book" variant="primary" size="lg">
                Learn More About the Book
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
