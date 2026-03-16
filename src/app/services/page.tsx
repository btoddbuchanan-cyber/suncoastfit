import { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Suncoastfit services: Pilates Plus mat classes, personalized personal training, and the Walker to Runner 8-week program on the Sunshine Coast, BC.",
};

const services = [
  {
    title: "Pilates Plus",
    subtitle: "Mat Classes",
    description:
      "Safely strengthen core muscles, improve posture, body alignment, flexibility, and mind-body connection. All levels welcome — from beginner to advanced. Each class finishes with stretching, deep breathing, and relaxation.",
    features: [
      "Online via Zoom — Tuesdays at 10:00 AM",
      "8-week sessions with recordings included",
      "All levels from beginner to advanced",
      "Modifications provided for every exercise",
    ],
    price: "$96 for 8-week session",
    href: "/services/pilates",
    accent: "var(--color-primary)",
  },
  {
    title: "Personal Training",
    subtitle: "1:1 & Small Groups",
    description:
      "Personalized, mobile training delivered in the comfort of your own home, at your local gym, pool, or your favourite outdoor space. Train alone, with a partner, or a small group of friends.",
    features: [
      "Mobile — training comes to you",
      "Personalized programs built on proven methods",
      "Home, gym, pool, or outdoor sessions",
      "One-on-one or small groups",
    ],
    price: "Contact for rates",
    href: "/services/personal-training",
    accent: "var(--color-accent)",
  },
  {
    title: "Walker to Runner",
    subtitle: "8-Week Program",
    description:
      "A powerful yet simple fitness program that transforms you into a runner in about 8 weeks. Start with walk intervals and gradually build to a full 30-minute run.",
    features: [
      "3 prescribed walk/run outings per week",
      "Warm-up exercises and cool-down stretches",
      "Running advice on shoes, form, and nutrition",
      "Copy of the book included",
    ],
    price: "Contact for upcoming clinics",
    href: "/services/walker-to-runner",
    accent: "var(--color-primary-dark)",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedHeading>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
              Services
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Find Your Perfect{" "}
              <span className="text-[var(--color-primary)]">Fit</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-nunito)" }}>
              Every body is different. Every program is personalized. Choose the path
              that resonates with you — or combine them for a complete fitness journey.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.05}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Info */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span
                    className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3"
                    style={{ color: service.accent, fontFamily: "var(--font-nunito)" }}
                  >
                    {service.subtitle}
                  </span>
                  <h2 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: "var(--font-dm-serif)" }}>
                    {service.title}
                  </h2>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6" style={{ fontFamily: "var(--font-nunito)" }}>
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: service.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--color-text-secondary)]" style={{ fontFamily: "var(--font-nunito)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-bold mb-6" style={{ color: service.accent, fontFamily: "var(--font-nunito)" }}>
                    {service.price}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href={service.href} variant="secondary">
                      Learn More
                    </Button>
                    <Button href="/contact" variant="outline">
                      Get Started
                    </Button>
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden" style={{ backgroundColor: `color-mix(in srgb, ${service.accent} 8%, var(--color-bg-primary))` }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `color-mix(in srgb, ${service.accent} 15%, transparent)` }}>
                          <span className="text-4xl" style={{ fontFamily: "var(--font-dm-serif)", color: service.accent }}>
                            {i === 0 ? "P" : i === 1 ? "PT" : "W2R"}
                          </span>
                        </div>
                        <p className="text-lg font-semibold" style={{ color: service.accent, fontFamily: "var(--font-dm-serif)" }}>
                          {service.title}
                        </p>
                      </div>
                    </div>
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
            <h2 className="text-3xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8" style={{ fontFamily: "var(--font-nunito)" }}>
              Send me a message and let&apos;s chat about your goals. Together we&apos;ll find the perfect program for your journey.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Let&apos;s Talk
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
