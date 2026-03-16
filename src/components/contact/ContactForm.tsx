"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/suncoastfit@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[var(--color-primary-lighter)] rounded-[var(--radius-xl)] p-12 text-center border border-[var(--color-primary)]/10">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-dm-serif)" }}>
          Thank You!
        </h3>
        <p className="text-[var(--color-text-secondary)]" style={{ fontFamily: "var(--font-nunito)" }}>
          I will be in touch within 2 business days or sooner.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[var(--radius-xl)] p-8 lg:p-10 shadow-[var(--shadow-md)] border border-[var(--color-border-light)]"
    >
      <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
        Send a Message
      </h2>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            First Name <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all duration-200"
            style={{ fontFamily: "var(--font-nunito)" }}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Last Name <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all duration-200"
            style={{ fontFamily: "var(--font-nunito)" }}
          />
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Email Address <span className="text-[var(--color-accent)]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all duration-200"
          style={{ fontFamily: "var(--font-nunito)" }}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="interest"
          className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          I am interested in... <span className="text-[var(--color-accent)]">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all duration-200 appearance-none"
          style={{ fontFamily: "var(--font-nunito)" }}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="walker-to-runner">Walker to Runner Program</option>
          <option value="youtube">YouTube Workouts</option>
          <option value="book">The Book</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-8">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Message <span className="text-[var(--color-accent)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all duration-200 resize-vertical"
          style={{ fontFamily: "var(--font-nunito)" }}
        />
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700 text-sm" style={{ fontFamily: "var(--font-nunito)" }}>
          Something went wrong. Please try again or email{" "}
          <a href="mailto:suncoastfit@gmail.com" className="underline font-semibold">suncoastfit@gmail.com</a> directly.
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-3.5 rounded-[var(--radius-full)] bg-[var(--color-accent)] text-[var(--color-text-primary)] font-semibold hover:bg-[var(--color-accent-light)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      <p className="mt-4 text-xs text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-nunito)" }}>
        By submitting this form, you agree to be contacted regarding your inquiry.
      </p>
    </form>
  );
}
