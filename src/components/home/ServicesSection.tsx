"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { AnimatedHeading } from "@/components/AnimatedSection";

const services = [
  {
    title: "Pilates Plus",
    description:
      "Strengthen your core, improve posture, and find your mind-body connection through inspired mat Pilates classes. All levels welcome.",
    href: "/services/pilates",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="20" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M12 36 L20 20 L28 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 26 L32 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "var(--color-primary)",
    bgTint: "var(--color-primary-lighter)",
  },
  {
    title: "Personal Training",
    description:
      "One-on-one or small group sessions tailored to your goals. Mobile training at your home, gym, pool, or favourite outdoor space.",
    href: "/services/personal-training",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M6 20 L14 20 M26 20 L34 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <rect x="14" y="14" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="6" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="34" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    accent: "var(--color-accent)",
    bgTint: "var(--color-accent-lighter)",
  },
  {
    title: "Walker to Runner",
    description:
      "An 8-week program that transforms walkers into confident runners. Gradual, safe, and incredibly rewarding.",
    href: "/services/walker-to-runner",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="6" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 36 L20 24 L28 18 L32 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 24 L12 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: "var(--color-primary-dark)",
    bgTint: "var(--color-primary-lighter)",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedHeading className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            What I Offer
          </span>
          <h2
            className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Training That Fits{" "}
            <span className="text-[var(--color-primary)]">Your Life</span>
          </h2>
          <p
            className="text-lg text-[var(--color-text-secondary)]"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Every program is personalized, proven, and designed to help you feel
            your best at every stage of life.
          </p>
        </AnimatedHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full bg-white rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-sm)] border border-[var(--color-border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-[var(--radius-lg)] flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ backgroundColor: service.bgTint, color: service.accent }}
                >
                  {service.icon}
                </div>

                <h3
                  className="text-xl mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {service.description}
                </p>

                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase group-hover:gap-3 transition-all duration-300"
                  style={{ color: service.accent, fontFamily: "var(--font-nunito)" }}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
