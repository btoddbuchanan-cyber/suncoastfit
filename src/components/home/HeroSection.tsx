"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background — gradient mesh with coastal warmth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-primary-lighter)] to-[var(--color-bg-secondary)]" />

      {/* Decorative organic shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--color-accent)]/[0.07] blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[var(--color-primary)]/[0.08] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[var(--color-accent)]/[0.05] blur-2xl" />
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-[var(--radius-full)] text-xs font-bold tracking-widest uppercase bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Sunshine Coast, BC
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Feel Amazing Doing{" "}
              <span className="text-[var(--color-primary)]">What You Love</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Personalized fitness training that comes to you. Build strength,
              confidence, and joy through movement — at your pace, in your space.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="primary" size="lg">
                Start Your Journey
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </motion.div>

            {/* Trust signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-nunito)" }}>
                <span className="font-semibold text-[var(--color-text-secondary)]">ACE Certified</span> Personal Trainer · Occupational Therapy Background
              </p>
            </motion.div>
          </div>

          {/* Hero Visual — Abstract coastal composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-xl)]">
              <Image
                src="/images/hero/hero-home.jpg"
                alt="Sandra Buchanan stretching outdoors on the Sunshine Coast"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-lg)] border border-[var(--color-border-light)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <span className="text-2xl" role="img" aria-label="runner">🏃‍♀️</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-nunito)" }}>
                    Walker to Runner
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-nunito)" }}>
                    8-week transformation
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[var(--color-primary)]/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--color-primary)]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
