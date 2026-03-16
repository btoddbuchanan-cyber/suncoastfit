"use client";

import { motion } from "motion/react";
import { AnimatedHeading } from "@/components/AnimatedSection";

const credentials = [
  { title: "ACE Certified", subtitle: "Personal Trainer", icon: "🏅" },
  { title: "Occupational", subtitle: "Therapy Degree", icon: "🎓" },
  { title: "Fitness Over 50", subtitle: "Specialist", icon: "🧘" },
  { title: "Osteofit", subtitle: "Certified Instructor", icon: "🦴" },
  { title: "Aquatic Fitness", subtitle: "Specialist", icon: "🏊" },
  { title: "Weight Training", subtitle: "Certification", icon: "💪" },
];

export function AboutCredentials() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedHeading className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Qualifications
          </span>
          <h2
            className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.15]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Trained, Certified,{" "}
            <span className="text-[var(--color-primary)]">Trusted</span>
          </h2>
        </AnimatedHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-[var(--radius-xl)] p-6 text-center shadow-[var(--shadow-sm)] border border-[var(--color-border-light)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300"
            >
              <span className="text-3xl mb-3 block" role="img" aria-label={cred.title}>
                {cred.icon}
              </span>
              <h3
                className="text-base font-bold text-[var(--color-text-primary)] mb-1"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {cred.title}
              </h3>
              <p
                className="text-sm text-[var(--color-text-muted)]"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {cred.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
