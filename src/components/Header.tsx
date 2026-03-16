"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/pilates", label: "Pilates Plus" },
      { href: "/services/personal-training", label: "Personal Training" },
      { href: "/services/walker-to-runner", label: "Walker to Runner" },
    ],
  },
  { href: "/book", label: "Book" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Connect" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-bg-primary)]/95 backdrop-blur-md shadow-[var(--shadow-md)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Suncoastfit home">
          <div className="relative w-12 h-12">
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
              {/* Sun rays */}
              <line x1="24" y1="4" x2="24" y2="10" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="12" y1="8" x2="15" y2="13" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="36" y1="8" x2="33" y2="13" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6" y1="16" x2="12" y2="18" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="42" y1="16" x2="36" y2="18" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
              {/* Mountain / coast silhouette */}
              <path
                d="M4 38 L14 22 L22 30 L30 18 L44 38Z"
                fill="var(--color-primary-dark)"
                className="group-hover:fill-[var(--color-primary)] transition-colors duration-300"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl leading-none tracking-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>
              <span className="text-[var(--color-primary-dark)]">suncoast</span>
              <span className="text-[var(--color-primary)]">fit</span>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-nunito)" }}>
              Fitness over 50 with Sandra
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-[15px] font-semibold tracking-wide uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {link.label}
                  <svg className="inline-block w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-[var(--color-bg-primary)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] border border-[var(--color-border-light)] overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-[15px] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-dark)] transition-colors duration-150"
                          style={{ fontFamily: "var(--font-nunito)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[15px] font-semibold tracking-wide uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-[var(--color-text-primary)] transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[var(--color-text-primary)] transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[var(--color-text-primary)] transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-[72px] bg-[var(--color-bg-primary)] z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center gap-2 py-12 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-xl font-semibold tracking-wide uppercase text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="flex flex-col gap-1 mt-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-base text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                          style={{ fontFamily: "var(--font-nunito)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
