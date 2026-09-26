"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#1C352D] text-[#FDFBF7]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="
            absolute inset-0 scale-[1.03]
            bg-[url('/images/hero.jpg')]
            bg-cover bg-center
          "
        />

        <div className="absolute inset-0 bg-[#12261F]/35" />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#12261F]/20
            via-transparent
            to-[#12261F]/85
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#12261F]/70
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-10 sm:px-8 sm:pb-12">
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.42em] text-[#D4AF37] sm:text-xs">
            18 · 06 · 2027
          </p>

          <h1 className="font-display text-[18vw] font-light leading-[0.76] tracking-[-0.05em] sm:text-[13vw] lg:text-[10rem]">
            Sarah
            <span className="mx-2 text-[#D4AF37]/80 sm:mx-4">
              &
            </span>
            Alexander
          </h1>

          <div className="mt-7 flex items-end justify-between gap-5">
            <div>
              <p className="font-display text-2xl font-light leading-[0.95] text-[#FDFBF7]/90 sm:text-3xl">
                We&apos;re getting
                <br />
                married.
              </p>

              <p className="mt-4 text-[9px] uppercase tracking-[0.35em] text-[#FDFBF7]/60">
                Chennai, India
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToStory}
              aria-label="Scroll to our story"
              className="
                flex h-12 w-12 shrink-0 items-center
                justify-center rounded-full
                border border-[#FDFBF7]/30
                bg-[#FDFBF7]/10
                backdrop-blur-md
                transition-transform duration-300
                active:scale-90
              "
            >
              <ArrowDown size={17} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF37]/30" />
    </section>
  );
}