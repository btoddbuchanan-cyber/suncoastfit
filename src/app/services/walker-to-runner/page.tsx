import { Metadata } from "next";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Walker to Runner — 8-Week Program",
  description:
    "Transform from walker to runner in 8 weeks with Sandra Buchanan's proven program. Safe, gradual, and incredibly rewarding for adults 50+.",
};

export default function WalkerToRunnerPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[var(--color-bg-dark)] text-[var(--color-text-on-dark)] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedHeading className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent-light)] mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
              8-Week Program
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[var(--color-text-on-dark)] mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Walker to 30 Minute{" "}
              <span className="text-[var(--color-accent-light)]">Runner</span>
            </h1>
            <p className="text-xl text-[var(--color-text-on-dark)]/80 leading-relaxed" style={{ fontFamily: "var(--font-nunito)" }}>
              A powerful yet simple fitness program that transforms you into a runner
              in about 8 weeks. Whether you&apos;re new to running or ready to return.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection>
                <h2 className="text-3xl mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  The Program
                </h2>
                <div style={{ fontFamily: "var(--font-nunito)" }}>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    Maybe you have been cooped up at home and find staying fit challenging.
                    Maybe after a setback you have been struggling to get back on track. Or
                    maybe you&apos;ve had a desire to become a runner for years.
                  </p>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                    This program offers the flexibility to fit into your life as well as the
                    accountability to keep you on track. If you are looking for a gradual
                    approach to becoming a runner, advice on running related issues, support,
                    and fun — you&apos;re in the right place.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-dm-serif)" }}>Benefits</h3>
                <ul className="space-y-3 mb-8" style={{ fontFamily: "var(--font-nunito)" }}>
                  {[
                    "Increased strength, endurance, and breathing capacity",
                    "Leaner body composition that boosts metabolism",
                    "Better sleep, decreased stress, and improved mood",
                    "The thrill of completing your 30-minute run on the last day",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-text-secondary)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-[var(--radius-xl)] p-8 lg:p-10 shadow-[var(--shadow-lg)] border border-[var(--color-border-light)] sticky top-28">
                <h3 className="text-2xl mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  8-Week Program Includes
                </h3>
                <ul className="space-y-4 mb-8" style={{ fontFamily: "var(--font-nunito)" }}>
                  {[
                    "8-week running clinic with 3 outings per week",
                    "Warm-up exercises and cool-down stretches every session",
                    "Intervals start at 4.5 min walking / 30 sec running",
                    "Gradually build to a full 30-minute run",
                    "Running advice: shoes, form, nutrition",
                    "Copy of the book: Walker to 30 Minute Runner",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant="primary" size="lg" className="w-full text-center">
                  Join the Next Clinic
                </Button>

                <p className="text-sm text-[var(--color-text-muted)] mt-4 text-center" style={{ fontFamily: "var(--font-nunito)" }}>
                  Sign up for the newsletter to hear about upcoming clinics
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Runner <span className="text-[var(--color-primary)]">Stories</span>
            </h2>
          </AnimatedHeading>
          <div className="space-y-8">
            <TestimonialCard
              quote="I highly recommend the Walker to 30 minute runner program led by Sandra Buchanan. I really enjoyed experiencing the weekly progressions as well as the thrill of running 30 minutes on the last day! I have continued to run 2 to 3 times a week and am grateful to have had the opportunity."
              author="Jacquie L."
            />
            <TestimonialCard
              quote="This program was just what I needed. I've never been a runner and always found it discouraging. Sandra provided a friendly, approachable, encouraging atmosphere. I have gone from being unable to jog for more than a couple minutes to now going for 30 minute runs on a regular basis."
              author="Renée C."
              index={1}
            />
          </div>
        </div>
      </section>
    </>
  );
}
