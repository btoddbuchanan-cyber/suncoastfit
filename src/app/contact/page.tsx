import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch with Sandra Buchanan at Suncoastfit. Ask about Pilates classes, personal training, or the Walker to Runner program on the Sunshine Coast, BC.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-lighter)] via-[var(--color-bg-primary)] to-[var(--color-primary-lighter)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedHeading>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4" style={{ fontFamily: "var(--font-nunito)" }}>
              Connect
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Let&apos;s{" "}
              <span className="text-[var(--color-primary)]">Connect</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-nunito)" }}>
              Have a question about my services or packages? I&apos;d love to hear from you.
              I&apos;ll be in touch within 2 business days or sooner.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl mb-4" style={{ fontFamily: "var(--font-dm-serif)" }}>
                      Location
                    </h2>
                    <p className="text-[var(--color-text-secondary)]" style={{ fontFamily: "var(--font-nunito)" }}>
                      Suncoastfit is located on the beautiful<br />
                      <span className="font-semibold text-[var(--color-text-primary)]">Sunshine Coast, BC, Canada</span>
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl mb-4" style={{ fontFamily: "var(--font-dm-serif)" }}>
                      Follow Along
                    </h2>
                    <div className="flex gap-4">
                      {[
                        { label: "Facebook", href: "https://facebook.com/suncoastfit" },
                        { label: "YouTube", href: "https://youtube.com/@suncoastfit" },
                        { label: "Instagram", href: "https://instagram.com/suncoastfit" },
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-[var(--radius-full)] text-sm font-medium bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-dark)] transition-colors duration-200 border border-[var(--color-border)]"
                          style={{ fontFamily: "var(--font-nunito)" }}
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-[var(--color-primary-lighter)] rounded-[var(--radius-xl)] border border-[var(--color-primary)]/10">
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-dm-serif)" }}>
                      YouTube Workouts
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]" style={{ fontFamily: "var(--font-nunito)" }}>
                      Join Sandra for free home workouts on YouTube! New videos
                      added regularly.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
