import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative min-h-[80dvh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-lighter)] via-[var(--color-bg-primary)] to-[var(--color-accent-lighter)]" aria-hidden="true" />

      <div className="relative text-center px-6">
        <p
          className="text-[8rem] lg:text-[12rem] leading-none font-bold text-[var(--color-primary)]/10"
          style={{ fontFamily: "var(--font-dm-serif)" }}
          aria-hidden="true"
        >
          404
        </p>
        <div className="-mt-16 lg:-mt-24">
          <h1
            className="text-3xl lg:text-4xl mb-4"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Page Not Found
          </h1>
          <p
            className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Looks like this page went for a run and didn&apos;t come back. Let&apos;s get you
            back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/contact" variant="outline">
              Contact Sandra
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
