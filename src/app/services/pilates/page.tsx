import { Metadata } from "next";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Pilates Plus — Mat Classes",
  description:
    "Join Sandra's Pilates-inspired mat classes on the Sunshine Coast, BC. Strengthen your core, improve posture, and find mind-body balance. Online via Zoom. All levels welcome.",
};

const testimonials = [
  { quote: "Sandra has been my pilates trainer for several years. Her classes are challenging but you can start at any level. She explains and demonstrates every pose and watches that we are getting it. She is a helpful, fun and kind person.", author: "Janice M." },
  { quote: "Attending Mat Pilates with Sandra has been a wonderful experience for me. After years of major sport injuries I am now feeling the benefits of the weekly class and realizing how much I was in need of using muscles and ligaments that haven't been regularly exercised.", author: "Catherine D." },
  { quote: "I find Sandra's classes to be a perfect fit for me. I get a good workout, plus it's fun and there is a good combination of routine and novelty in each class. I think just about any age group or fitness level could benefit.", author: "Joan M." },
  { quote: "I have really enjoyed our Pilates classes this past year. I had tried pilates classes in the past and did not enjoy them half as much as yours. It's a good workout and the stretching moves are very relaxing.", author: "Anna K." },
];

export default function PilatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedHeading className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
              Pilates Plus
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Pilates Inspired{" "}
              <span className="text-[var(--color-primary)]">Mat Classes</span>
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed" style={{ fontFamily: "var(--font-nunito)" }}>
              Safely strengthen core muscles, improve posture, body alignment, flexibility,
              and mind-body connection. All levels — from beginner to advanced.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-3xl mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
                What to Expect
              </h2>
              <div style={{ fontFamily: "var(--font-nunito)" }}>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  My Pilates-inspired mat classes are ideal for participants who want to
                  safely and effectively strengthen core muscles (abdominals, back, hips,
                  shoulders), and improve posture, body alignment, flexibility, and
                  mind-body connection.
                </p>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  Class participants are given modification suggestions, and all levels
                  from beginner to more advanced will benefit. Each class completes with
                  stretching, deep breathing, and relaxation, resulting in a clearer mind
                  to tackle the rest of the day.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-dm-serif)" }}>Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Stronger core muscles resulting in a leaner body",
                  "Improved ability to participate in activities you love",
                  "Decreased risk of injury",
                  "Better posture and flexibility",
                  "Low-impact and safe for all levels",
                  "Increased muscular endurance and breathing capacity",
                  "A calmer, more centred mind",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-text-secondary)]" style={{ fontFamily: "var(--font-nunito)" }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              {/* Program Card */}
              <div className="bg-white rounded-[var(--radius-xl)] p-8 lg:p-10 shadow-[var(--shadow-lg)] border border-[var(--color-border-light)] sticky top-28">
                <h3 className="text-2xl mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  Program Details
                </h3>

                <div className="space-y-5 mb-8" style={{ fontFamily: "var(--font-nunito)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary-lighter)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">Online via Zoom</p>
                      <p className="text-sm text-[var(--color-text-muted)]">From the comfort of your home</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary-lighter)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">Tuesdays at 10:00 AM</p>
                      <p className="text-sm text-[var(--color-text-muted)]">8-week sessions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-accent-lighter)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">$96 per Session</p>
                      <p className="text-sm text-[var(--color-text-muted)]">8 classes included</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-primary-lighter)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">Bonus Recording</p>
                      <p className="text-sm text-[var(--color-text-muted)]">Available for one week to replay</p>
                    </div>
                  </div>
                </div>

                <Button href="/contact" variant="primary" size="lg" className="w-full text-center">
                  Sign Up for Next Session
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-dm-serif)" }}>
              What Students <span className="text-[var(--color-primary)]">Say</span>
            </h2>
          </AnimatedHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} quote={t.quote} author={t.author} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
