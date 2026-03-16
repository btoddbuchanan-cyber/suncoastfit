"use client";

import { useState } from "react";
import { AnimatedSection, AnimatedHeading } from "@/components/AnimatedSection";
import { videos, videoCategories } from "@/data/videos";

function VideoCard({ title, youtubeId, duration, category }: {
  title: string;
  youtubeId: string;
  duration: string;
  category: string;
}) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] border border-[var(--color-border-light)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-[var(--color-bg-secondary)]">
        <img
          src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-bold bg-black/80 text-white" style={{ fontFamily: "var(--font-nunito)" }}>
          {duration}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="inline-block px-2.5 py-0.5 rounded-[var(--radius-full)] text-[10px] font-bold tracking-wide uppercase bg-[var(--color-primary-lighter)] text-[var(--color-primary-dark)]"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {category}
          </span>
        </div>
        <h3
          className="text-base font-semibold leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-2"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {title}
        </h3>
      </div>
    </a>
  );
}

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-lighter)] via-[var(--color-bg-primary)] to-[var(--color-primary-lighter)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedHeading>
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Workouts
            </span>
            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Fitness Over Fifty{" "}
              <span className="text-[var(--color-primary)]">Videos</span>
            </h1>
            <p
              className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Join Sandra for home workouts with highly impactful results!
              Low impact routines you can do in the comfort of your own home.
            </p>
            <a
              href="https://www.youtube.com/@fitnessoverfifty-sandra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-full)] bg-red-600 text-white font-semibold hover:bg-red-700 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white" />
              </svg>
              Subscribe on YouTube
            </a>
          </AnimatedHeading>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {videoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-[var(--radius-full)] text-sm font-semibold tracking-wide transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[var(--color-primary)] text-white shadow-[var(--shadow-sm)]"
                      : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-dark)] border border-[var(--color-border-light)]"
                  }`}
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <VideoCard
                key={video.youtubeId}
                title={video.title}
                youtubeId={video.youtubeId}
                duration={video.duration}
                category={video.category}
              />
            ))}
          </div>

          {/* More on YouTube */}
          <div className="mt-16 text-center">
            <p
              className="text-[var(--color-text-muted)] mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Showing {filtered.length} of 200+ videos
            </p>
            <a
              href="https://www.youtube.com/@fitnessoverfifty-sandra/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] transition-colors"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              View all videos on YouTube
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
