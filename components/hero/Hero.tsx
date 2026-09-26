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
            absolute inset-0
            bg-cover bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-[#12261F]/35" />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#12261F]/10
            via-[#12261F]/10
            to-[#12261F]/90
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#12261F]/35
            via-transparent
            to-[#12261F]/15
          "
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end">
        <div className="px-6 pb-10 sm:px-8 sm:pb-14">
          <div className="mx-auto w-full max-w-6xl">

            {/* Date */}
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.38em] text-[#D4AF37]">
              18 · 06 · 2027
            </p>

            {/* Names */}
            <h1 className="font-display font-light leading-[0.82] tracking-[-0.035em]">

              <span className="block text-[19vw] sm:text-[14vw] lg:text-[9rem]">
                Sarah
              </span>

              <span className="block pl-[14vw] text-[19vw] sm:pl-[10vw] sm:text-[14vw] lg:pl-32 lg:text-[9rem]">
                <span className="text-[#D4AF37]"> & </span>
                Alexander
              </span>

            </h1>

            {/* Bottom information */}
            <div className="mt-8 flex items-end justify-between gap-6">

              <div>
                <p className="font-display text-[26px] font-light leading-[0.95] sm:text-3xl">
                  We&apos;re getting
                  <br />
                  married.
                </p>

                <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.35em] text-[#FDFBF7]/60">
                  Chennai, India
                </p>
              </div>

              {/* Scroll button */}
              <button
                type="button"
                onClick={scrollToStory}
                aria-label="Scroll to our story"
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-full
                  border border-[#FDFBF7]/30
                  bg-[#FDFBF7]/10
                  text-[#FDFBF7]
                  backdrop-blur-md
                  transition-transform
                  duration-300
                  active:scale-90
                "
              >
                <ArrowDown size={17} strokeWidth={1} />
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Gold bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF37]/30" />
    </section>
  );
}