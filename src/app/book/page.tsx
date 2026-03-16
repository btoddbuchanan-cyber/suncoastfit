import { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Walker to 30 Minute Runner — The Book",
  description:
    "Walker to 30 Minute Runner by Sandra Buchanan. A fitness guide that transforms you into a runner in about 8 weeks. Available now.",
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[var(--color-bg-dark)] text-[var(--color-text-on-dark)] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Book Visual */}
            <AnimatedSection>
              <div className="relative max-w-sm mx-auto">
                <div className="relative aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-xl)]">
                  <Image
                    src="/images/book/book-trio.jpg"
                    alt="Walker to 30 Minute Runner book by Sandra Buchanan"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <div>
              <AnimatedHeading>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent-light)] mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                  The Book
                </span>
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[var(--color-text-on-dark)] mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  Walker to 30 Minute{" "}
                  <span className="text-[var(--color-accent-light)]">Runner</span>
                </h1>
              </AnimatedHeading>

              <AnimatedSection delay={0.1}>
                <p className="text-lg text-[var(--color-text-on-dark)]/80 leading-relaxed mb-6" style={{ fontFamily: "var(--font-nunito)" }}>
                  We&apos;ve always been told that you have to walk before you can run. And it&apos;s
                  true. But do you know that if you are a walker you can become a runner?
                </p>
                <p className="text-lg text-[var(--color-text-on-dark)]/80 leading-relaxed mb-8" style={{ fontFamily: "var(--font-nunito)" }}>
                  With the right preparation you too can have that exhilarating feeling of
                  throwing on a pair of running shoes and heading out into freedom.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Ask About the Book
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: "var(--font-dm-serif)" }}>
              This Book is for <span className="text-[var(--color-primary)]">You</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]" style={{ fontFamily: "var(--font-nunito)" }}>
              If you want any of the following, this book will get you there.
            </p>
          </AnimatedHeading>

          <AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Stronger bones and muscles",
                "Better cardiovascular health",
                "Improved feelings of well-being",
                "The enjoyment of running",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 p-5 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-light)]"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-lighter)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-nunito)" }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-[var(--color-accent-lighter)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <TestimonialCard
            quote="This program was just what I needed. I've never been a runner and always found it discouraging. Sandra provided a friendly, approachable, encouraging atmosphere. I have gone from being unable to jog for more than a couple minutes to now going for 30 minute runs on a regular basis."
            author="Renée C."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Ready to Start Running?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8" style={{ fontFamily: "var(--font-nunito)" }}>
              Get in touch to learn about upcoming Walker to Runner clinics and how to get your copy of the book.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Sandra
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
