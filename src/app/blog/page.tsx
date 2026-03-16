import { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Fitness & Healthy Living",
  description:
    "Fitness tips, healthy living articles, and training advice from Sandra Buchanan at Suncoastfit for adults 50+.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] to-[var(--color-bg-primary)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedHeading>
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Blog
            </span>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Fitness &{" "}
              <span className="text-[var(--color-primary)]">Healthy Living</span>
            </h1>
            <p
              className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Tips, stories, and advice to help you move better, feel stronger,
              and live healthier.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-[var(--radius-xl)] p-8 lg:p-10 shadow-[var(--shadow-sm)] border border-[var(--color-border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-[var(--radius-full)] text-xs font-bold tracking-wide uppercase bg-[var(--color-primary-lighter)] text-[var(--color-primary-dark)]"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-sm text-[var(--color-text-muted)]"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {formatDate(post.date)}
                    </span>
                    <span className="text-[var(--color-border)]">·</span>
                    <span
                      className="text-sm text-[var(--color-text-muted)]"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    className="text-2xl mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {post.title}
                  </h2>

                  <p
                    className="text-[var(--color-text-secondary)] leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {post.excerpt}
                  </p>

                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-[var(--color-primary)] group-hover:gap-3 transition-all duration-300"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Read Article
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
