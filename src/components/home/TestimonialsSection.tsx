"use client";

import { AnimatedHeading } from "@/components/AnimatedSection";
import { TestimonialCard } from "@/components/TestimonialCard";

const testimonials = [
  {
    quote:
      "I have struggled to find a fitness program that not only works for me, but also one that I would stick with for the long term. Sandra was amazing. Because of her background and knowledge, she was able to work with me to develop a personalized program that combined strength training and Pilates to meet my goals, and I love it!",
    author: "Joni F.",
  },
  {
    quote:
      "Sandra has been my pilates trainer for several years. Her classes are challenging but you can start at any level. She explains and demonstrates every pose and watches that we are getting it. She is a helpful, fun and kind person. I definitely recommend her pilates training.",
    author: "Janice M.",
  },
  {
    quote:
      "I highly recommend the Walker to 30 minute runner program led by Sandra Buchanan. I really enjoyed experiencing the weekly progressions as well as the thrill of running 30 minutes on the last day! I have continued to run 2 to 3 times a week.",
    author: "Jacquie L.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-accent-lighter)] to-[var(--color-bg-primary)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedHeading className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Kind Words
          </span>
          <h2
            className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.15]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Real Results,{" "}
            <span className="text-[var(--color-primary)]">Real People</span>
          </h2>
        </AnimatedHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
