"use client";

import Image from "next/image";
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
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-xl)]">
              <Image
                src="/images/about/sandra-portrait.jpg"
                alt="Sandra Buchanan — Personal Trainer on the Sunshine Coast, BC"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-sm font-semibold text-white drop-shadow-md" style={{ fontFamily: "var(--font-nunito)" }}>
                  Sandra Buchanan
                </p>
                <p className="text-xs text-white/80 drop-shadow-md" style={{ fontFamily: "var(--font-nunito)" }}>
                  Sunshine Coast, BC
                </p>
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
