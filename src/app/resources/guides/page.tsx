import { Metadata } from "next";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Fitness guides from Sandra Buchanan for adults 50+. Strength training, stretching, home workouts, and more — coming soon.",
};

const upcomingGuides = [
  {
    title: "Getting Started with Strength Training After 50",
    description:
      "A beginner-friendly guide covering essential exercises, proper form, and how to build a safe, effective routine.",
    icon: "💪",
  },
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
              and active after 50. New guides coming soon!
            </p>
          </AnimatedHeading>
        </div>
      </section>

      {/* Upcoming Guides */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
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
                I&apos;m working on these guides right now. Sign up to be notified
                when they&apos;re ready!
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingGuides.map((guide, i) => (
              <AnimatedSection key={guide.title} delay={i * 0.08}>
                <div className="h-full bg-white rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-sm)] border border-[var(--color-border-light)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
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
              Send me a message and I&apos;ll let you know as soon as the guides
              are available for download.
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
