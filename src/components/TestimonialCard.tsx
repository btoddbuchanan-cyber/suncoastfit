"use client";

import { motion } from "motion/react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  index?: number;
}

export function TestimonialCard({ quote, author, index = 0 }: TestimonialCardProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-md)] border border-[var(--color-border-light)]"
    >
      {/* Decorative quote mark */}
      <svg
        className="absolute -top-3 left-6 w-8 h-8 text-[var(--color-accent)]"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4 20.5c0-4.4 3.2-8.8 8-11.5l1.5 2.5C9.8 13.8 8.5 16 8.2 18H12c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-5.5zm16 0c0-4.4 3.2-8.8 8-11.5l1.5 2.5C25.8 13.8 24.5 16 24.2 18H28c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2v-5.5z" />
      </svg>
      <p
        className="text-[var(--color-text-secondary)] italic leading-relaxed mb-4 text-base"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        {quote}
      </p>
      <footer>
        <cite
          className="not-italic text-sm font-semibold text-[var(--color-primary-dark)]"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          — {author}
        </cite>
      </footer>
    </motion.blockquote>
  );
}
