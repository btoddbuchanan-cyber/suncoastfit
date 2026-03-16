import { Metadata } from "next";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Fitness guides from Sandra Buchanan for adults 50+. Strength Training Starter Kit, stretching, home workouts, and more.",
};

const availableGuides = [
  {
    title: "Strength Training Starter Kit for 50+",
    description:
      "A clear, step-by-step strength training program designed specifically for adults over 50 who want to build strength safely and confidently at home. Created by a certified personal trainer and former occupational therapist.",
    price: "$15.00 USD",
    href: "https://payhip.com/b/p2Qnh",
    icon: "💪",
  },
];

const upcomingGuides = [
  {
    title: "Building a Home Workout Routine",
    description:
      "How to set up your space, choose the right equipment, and stay consistent with at-home fitness.",
    icon: "🏠",
  },
  {
    title: "Stretching & Mobility for Everyday Life",
    description:
      "Daily stretches to improve flexibility, reduce stiffness, and keep you moving comfortably.",
    icon: "🧘",
  },
  {
    title: "Walking to Running: Your First Steps",
    description:
      "A quick-start companion to the Walker to Runner program with tips for getting off the couch and onto the trail.",
    icon: "🏃",
  },
];

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedHeading>
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Guides
            </span>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Fitness{" "}
              <span className="text-[var(--color-primary)]">Guides</span>
            </h1>
            <p
              className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Practical, easy-to-follow guides to help you stay strong, flexible,
              and active after 50.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      {/* Available Guides */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <h2
              className="text-2xl lg:text-3xl mb-10 text-center"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Available Now
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto mb-24">
            {availableGuides.map((guide, i) => (
              <AnimatedSection key={guide.title} delay={i * 0.08}>
                <a
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-[var(--radius-xl)] p-8 lg:p-10 shadow-[var(--shadow-md)] border border-[var(--color-border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-4xl flex-shrink-0" role="img" aria-label={guide.title}>
                      {guide.icon}
                    </span>
                    <div className="flex-1">
                      <h3
                        className="text-2xl mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                      >
                        {guide.title}
                      </h3>
                      <p
                        className="text-[var(--color-text-secondary)] leading-relaxed mb-5"
                        style={{ fontFamily: "var(--font-nunito)" }}
                      >
                        {guide.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <span
                          className="text-lg font-bold text-[var(--color-primary)]"
                          style={{ fontFamily: "var(--font-nunito)" }}
                        >
                          {guide.price}
                        </span>
                        <span
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-full)] bg-[var(--color-accent)] text-[var(--color-text-primary)] text-sm font-semibold group-hover:bg-[var(--color-accent-light)] shadow-[var(--shadow-sm)] transition-all duration-300"
                          style={{ fontFamily: "var(--font-nunito)" }}
                        >
                          Get the Guide
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Upcoming Guides */}
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-full)] bg-[var(--color-accent-lighter)] text-[var(--color-accent)] text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </div>
              <p
                className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                More guides are on the way!
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingGuides.map((guide, i) => (
              <AnimatedSection key={guide.title} delay={i * 0.08}>
                <div className="h-full bg-white rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-sm)] border border-[var(--color-border-light)] opacity-75">
                  <span className="text-3xl mb-4 block" role="img" aria-label={guide.title}>
                    {guide.icon}
                  </span>
                  <h3
                    className="text-xl mb-3"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {guide.title}
                  </h3>
                  <p
                    className="text-[var(--color-text-secondary)] leading-relaxed"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {guide.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section className="py-24 bg-[var(--color-primary-lighter)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl lg:text-4xl mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Want to Be the First to Know?
            </h2>
            <p
              className="text-lg text-[var(--color-text-secondary)] mb-8"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Send me a message and I&apos;ll let you know as soon as new guides
              are available.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Notified
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
