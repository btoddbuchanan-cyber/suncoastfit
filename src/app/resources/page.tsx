import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Fitness resources from Sandra Buchanan — including the Walker to 30 Minute Runner book and downloadable guides for adults 50+.",
};

const resources = [
  {
    title: "Walker to 30 Minute Runner",
    subtitle: "The Book",
    description:
      "A powerful yet simple fitness program that transforms you into a runner in about 8 weeks. Start with walk intervals and gradually build to a full 30-minute run. Includes warm-up exercises, cool-down stretches, and advice on shoes, form, and nutrition.",
    href: "/book",
    image: "/images/book/book-trio.jpg",
    cta: "Learn More",
  },
  {
    title: "Fitness Guides",
    subtitle: "Coming Soon",
    description:
      "Downloadable guides on topics like getting started with strength training after 50, building a home workout routine, stretching for mobility, and more. Check back soon!",
    href: "/resources/guides",
    image: "/images/services/walker-to-runner.png",
    cta: "View Guides",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedHeading>
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Resources
            </span>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Tools for Your{" "}
              <span className="text-[var(--color-primary)]">Fitness Journey</span>
            </h1>
            <p
              className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Books, guides, and everything you need to stay active, strong, and
              confident after 50.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
          {resources.map((resource, i) => (
            <AnimatedSection key={resource.title} delay={i * 0.05}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                {/* Info */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span
                    className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-3"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {resource.subtitle}
                  </span>
                  <h2
                    className="text-3xl lg:text-4xl mb-4"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {resource.title}
                  </h2>
                  <p
                    className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {resource.description}
                  </p>
                  <Button href={resource.href} variant="secondary">
                    {resource.cta}
                  </Button>
                </div>

                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-lg)]">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 45vw"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-primary-lighter)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl lg:text-4xl mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Have a Question?
            </h2>
            <p
              className="text-lg text-[var(--color-text-secondary)] mb-8"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Whether you&apos;re looking for workout advice or want to learn
              more about the Walker to Runner program — I&apos;d love to hear
              from you.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
