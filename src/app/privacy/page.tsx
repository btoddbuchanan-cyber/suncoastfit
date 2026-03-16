import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Suncoastfit. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1
          className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-8"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Privacy Policy
        </h1>

        <div
          className="prose prose-lg text-[var(--color-text-secondary)] space-y-6"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          <p className="text-sm text-[var(--color-text-muted)]">
            Last updated: March 16, 2026
          </p>

          <h2
            className="text-xl mt-10 mb-3 text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Information We Collect
          </h2>
          <p>
            When you use our contact form, we collect the information you provide, including your
            name, email address, and message content. This information is sent to us via Formspree,
            a third-party form handling service.
          </p>

          <h2
            className="text-xl mt-10 mb-3 text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            How We Use Your Information
          </h2>
          <p>
            We use the information you provide solely to respond to your inquiry about our fitness
            training services. We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>

          <h2
            className="text-xl mt-10 mb-3 text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Third-Party Services
          </h2>
          <p>
            Our contact form submissions are processed through Formspree. Please refer to{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)]"
            >
              Formspree&apos;s privacy policy
            </a>{" "}
            for information on how they handle data.
          </p>

          <h2
            className="text-xl mt-10 mb-3 text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Cookies
          </h2>
          <p>
            This website does not use cookies for tracking or advertising purposes. We may use
            essential cookies required for the website to function properly.
          </p>

          <h2
            className="text-xl mt-10 mb-3 text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Your Rights
          </h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal
            information. To make such a request, please contact us at{" "}
            <a
              href="mailto:suncoastfit@gmail.com"
              className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)]"
            >
              suncoastfit@gmail.com
            </a>.
          </p>

          <h2
            className="text-xl mt-10 mb-3 text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Contact
          </h2>
          <p>
            If you have any questions about this privacy policy, please contact Sandra Buchanan at{" "}
            <a
              href="mailto:suncoastfit@gmail.com"
              className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)]"
            >
              suncoastfit@gmail.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+16042205342"
              className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)]"
            >
              604-220-5342
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
