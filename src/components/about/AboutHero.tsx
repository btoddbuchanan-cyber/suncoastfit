"use client";

import { motion } from "motion/react";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[var(--radius-xl)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-accent)]/10" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" aria-hidden="true">
                      <circle cx="40" cy="25" r="12" stroke="var(--color-primary)" strokeWidth="2" />
                      <path d="M20 72 C20 52, 28 42, 40 42 C52 42, 60 52, 60 72" stroke="var(--color-primary)" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-primary-dark)]" style={{ fontFamily: "var(--font-nunito)" }}>
                    Sandra Buchanan
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-nunito)" }}>
                    Sunshine Coast, BC
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--color-accent)]/10 rounded-full blur-xl" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-xl" aria-hidden="true" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              About
            </span>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              It&apos;s a Pleasure to{" "}
              <span className="text-[var(--color-primary)]">Meet You</span>
            </h1>
            <p
              className="text-xl text-[var(--color-text-secondary)] leading-relaxed"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              A lifelong runner, certified personal trainer, and occupational therapist
              who found her calling helping people thrive through movement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
