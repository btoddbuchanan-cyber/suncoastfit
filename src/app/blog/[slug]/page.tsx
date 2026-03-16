import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { blogPosts } from "@/data/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: { type: string; content: string; items?: string[] }[] = [];
  let currentList: string[] | null = null;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (currentList) {
        elements.push({ type: "list", content: "", items: currentList });
        currentList = null;
      }
      elements.push({ type: "h2", content: line.slice(3) });
    } else if (line.startsWith("- **") || line.startsWith("- ")) {
      if (!currentList) currentList = [];
      currentList.push(line.slice(2));
    } else if (line.startsWith("**") && line.endsWith("**")) {
      if (currentList) {
        elements.push({ type: "list", content: "", items: currentList });
        currentList = null;
      }
      elements.push({ type: "bold-line", content: line.slice(2, -2) });
    } else if (line.trim() === "") {
      if (currentList) {
        elements.push({ type: "list", content: "", items: currentList });
        currentList = null;
      }
    } else {
      if (currentList) {
        elements.push({ type: "list", content: "", items: currentList });
        currentList = null;
      }
      elements.push({ type: "p", content: line });
    }
  }
  if (currentList) {
    elements.push({ type: "list", content: "", items: currentList });
  }

  return elements;
}

function InlineMarkdown({ text }: { text: string }) {
  // Handle **bold** and regular text
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-bold text-[var(--color-text-primary)]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  const elements = renderMarkdown(post.content);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] to-[var(--color-bg-primary)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedHeading>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors mb-6"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Blog
            </Link>

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

            <h1
              className="text-[clamp(2rem,4vw,3rem)] leading-[1.15]"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {post.title}
            </h1>
          </AnimatedHeading>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <article
              className="space-y-6"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              {elements.map((el, i) => {
                if (el.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="text-2xl mt-10 mb-4"
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                      {el.content}
                    </h2>
                  );
                }
                if (el.type === "bold-line") {
                  return (
                    <p
                      key={i}
                      className="font-bold text-[var(--color-text-primary)]"
                    >
                      {el.content}
                    </p>
                  );
                }
                if (el.type === "list") {
                  return (
                    <ul key={i} className="space-y-2 ml-1">
                      {el.items?.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-[var(--color-text-secondary)] leading-relaxed">
                            <InlineMarkdown text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[var(--color-text-secondary)] text-lg leading-relaxed"
                  >
                    <InlineMarkdown text={el.content} />
                  </p>
                );
              })}
            </article>
          </AnimatedSection>

          {/* Author */}
          <AnimatedSection delay={0.1}>
            <div className="mt-16 p-8 bg-[var(--color-primary-lighter)] rounded-[var(--radius-xl)] border border-[var(--color-primary)]/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-dm-serif)" }}>
                    S
                  </span>
                </div>
                <div>
                  <p
                    className="font-bold text-[var(--color-text-primary)]"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Sandra Buchanan
                  </p>
                  <p
                    className="text-sm text-[var(--color-text-muted)]"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    ACE Certified Personal Trainer
                  </p>
                </div>
              </div>
              <p
                className="text-[var(--color-text-secondary)] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Sandra has been helping people move better and feel stronger for
                over 20 years. She specializes in fitness for mature adults and
                brings training directly to you.
              </p>
            </div>
          </AnimatedSection>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border-light)] flex flex-col sm:flex-row justify-between gap-6">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex-1"
              >
                <span
                  className="text-xs font-bold tracking-widest uppercase text-[var(--color-text-muted)] mb-1 block"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  Previous
                </span>
                <span
                  className="text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex-1 text-right"
              >
                <span
                  className="text-xs font-bold tracking-widest uppercase text-[var(--color-text-muted)] mb-1 block"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  Next
                </span>
                <span
                  className="text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.15}>
            <div className="mt-16 text-center">
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Ready to Get Started?
              </h2>
              <p
                className="text-[var(--color-text-secondary)] mb-6"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Whether it&apos;s learning to run, finding the right workout, or
                staying active over 50 — Sandra would love to help.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
