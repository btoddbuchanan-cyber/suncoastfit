"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { AnimatedHeading } from "@/components/AnimatedSection";

const services = [
  {
    title: "Walker to Runner",
    description:
      "An 8-week program that transforms walkers into confident runners. Gradual, safe, and incredibly rewarding.",
    href: "/services/walker-to-runner",
    image: "/images/services/walker-to-runner.png",
    accent: "var(--color-primary-dark)",
    bgTint: "var(--color-primary-lighter)",
  },
  {
    title: "YouTube Workouts",
    description:
      "Low-impact workouts you can do at home. Standing routines, dumbbell sessions, stretching, and more — all designed for adults 50+.",
    href: "/videos",
    image: "/images/services/pilates-plus.png",
    accent: "var(--color-primary)",
    bgTint: "var(--color-primary-lighter)",
  },
  {
    title: "My Book",
    description:
      "Walker to 30 Minute Runner — a powerful yet simple fitness program that transforms you into a runner in about 8 weeks.",
    href: "/book",
    image: "/images/book/book-trio.jpg",
    accent: "var(--color-accent)",
    bgTint: "var(--color-accent-lighter)",
  },
  {
    title: "Strength Training Starter Kit",
    description:
      "A step-by-step strength training program designed for adults over 50 who want to build strength safely and confidently at home.",
    href: "/resources/guides",
    image: "/images/guides/strength-training-starter-kit.jpg",
    accent: "var(--color-primary)",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="group block h-full bg-white rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] border border-[var(--color-border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Service image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  />
                </div>

                <div className="p-8">
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
