import { Metadata } from "next";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Personal Training — Mobile 1:1 & Small Groups",
  description:
    "Personalized mobile personal training on the Sunshine Coast, BC. Sandra Buchanan brings ACE-certified training to your home, gym, pool, or outdoors.",
};

export default function PersonalTrainingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-lighter)] via-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedHeading className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
              Personal Training
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Training That Comes{" "}
              <span className="text-[var(--color-accent)]">to You</span>
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed" style={{ fontFamily: "var(--font-nunito)" }}>
              Personalized, mobile training in the comfort of your own home, at your local
              gym, pool, or your favourite outdoor space on the Sunshine Coast.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
                Your Program, Your Way
              </h2>
              <div style={{ fontFamily: "var(--font-nunito)" }}>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Whether you choose to train alone, with a partner, or a small group of
                  friends, with a personalized program built upon proven methods and a renewed
                  commitment to doing the work, you will start feeling better in body right away.
                </p>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  Drawing on my background in occupational therapy, I design programs that respect
                  your body&apos;s unique needs while challenging you to grow. Every session is
                  tailored to your goals, your fitness level, and your life.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "At Home", desc: "In the comfort of your living room" },
                  { title: "At the Gym", desc: "Your local fitness centre" },
                  { title: "Poolside", desc: "Aquatic fitness sessions" },
                  { title: "Outdoors", desc: "Your favourite trails & parks" },
                ].map((loc) => (
                  <div key={loc.title} className="p-4 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-light)]">
                    <h3 className="font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-nunito)" }}>{loc.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-nunito)" }}>{loc.desc}</p>
                  </div>
                ))}
              </div>

              <Button href="/contact" variant="primary" size="lg">
                Book a Session
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-[var(--color-primary-lighter)] rounded-[var(--radius-xl)] p-8 lg:p-10 border border-[var(--color-primary)]/10">
                <h3 className="text-2xl mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  What&apos;s Included
                </h3>
                <ul className="space-y-4" style={{ fontFamily: "var(--font-nunito)" }}>
                  {[
                    "Initial fitness assessment and goal setting",
                    "Personalized workout program",
                    "Ongoing program adjustments",
                    "Nutrition guidance and support",
                    "Flexible scheduling",
                    "Mobile service — I come to you",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <TestimonialCard
                  quote="I have struggled to find a fitness program that not only works for me, but also one that I would stick with for the long term. Sandra was amazing. Because of her background and knowledge, she developed a personalized program that I love!"
                  author="Joni F."
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
