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
      className="bg-[#FDFBF7] text-[#1C352D]"
    >
      {/* PHOTO */}
      <div className="relative h-[58svh] min-h-[440px] overflow-hidden bg-[#1C352D]">
        <img
          src="/images/Hero.png"
          alt="A couple celebrating their wedding"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-center
          "
        />

        {/* Very subtle cinematic overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/5
            via-transparent
            to-black/25
          "
        />

        {/* Top editorial detail */}
        <div className="absolute left-6 top-7 sm:left-8 sm:top-9">
          <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-white/80">
            A celebration of love
          </p>
        </div>

        {/* Small gold detail */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-sm">
            <span className="font-display text-sm text-[#D4AF37]">
              S<span className="mx-0.5 text-white/70">&</span>A
            </span>
          </div>
        </div>
      </div>

      {/* TYPOGRAPHY */}
      <div className="px-6 pb-9 pt-8 sm:px-8 sm:pb-12 sm:pt-10">
        <div className="mx-auto max-w-5xl">
          {/* Date */}
          <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-[#B99A45] sm:text-[10px]">
            18 · 06 · 2027
          </p>

          {/* Names */}
          <h1
            className="
              mt-4
              font-display
              font-light
              leading-[0.78]
              tracking-[-0.045em]
              text-[#1C352D]
            "
          >
            <span className="block text-[21vw] sm:text-[14vw] md:text-[9rem]">
              Sarah
            </span>

            <span className="mt-1 block text-[21vw] sm:text-[14vw] md:text-[9rem]">
              <span className="text-[#D4AF37]">&</span>
              <span className="ml-2 sm:ml-4">Alexander</span>
            </span>
          </h1>

          {/* Bottom information */}
          <div className="mt-8 flex items-end justify-between gap-6">
            <div>
              <p className="font-display text-[25px] leading-[0.95] text-[#1C352D] sm:text-3xl">
                We&apos;re getting
                <br />
                married.
              </p>

              <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.32em] text-[#1C352D]/50">
                Chennai · India
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToStory}
              aria-label="Scroll to our story"
              className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-full
                bg-[#1C352D]
                text-[#FDFBF7]
                shadow-[0_8px_25px_rgba(28,53,45,0.16)]
                transition-all duration-300
                active:scale-90
              "
            >
              <ArrowDown
                size={17}
                strokeWidth={1.2}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Editorial divider */}
      <div className="mx-6 h-px bg-[#1C352D]/10 sm:mx-8" />
    </section>
  );
}