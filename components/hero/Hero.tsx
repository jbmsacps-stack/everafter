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
      className="min-h-[100svh] bg-[#FDFBF7] text-[#1C352D]"
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-[46svh] min-h-[390px] overflow-hidden bg-[#1C352D]">
        <img
          src="/images/Hero.png"
          alt="Wedding couple"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: "center 58%",
          }}
        />

        {/* Very light photographic treatment */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

        {/* Editorial label */}
        <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
          <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-white/80">
            Celebration of Love
          </p>
        </div>

        {/* Couple initials */}
        <div className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-[#1C352D]/40 backdrop-blur-md">
          <span className="font-display text-sm text-[#D4AF37]">
            S <span className="text-white/60">&</span> A
          </span>
        </div>
      </div>

      {/* =====================================================
          INVITATION CONTENT
      ====================================================== */}

      <div className="relative px-6 pb-8 pt-7 sm:px-8 sm:pb-10 sm:pt-9">
        <div className="mx-auto max-w-xl">

          {/* Date */}
          <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#B99A45]">
            18 · 06 · 2027
          </p>

          {/* Names */}
          <div className="mt-5 text-center">

            <h1 className="font-display font-light leading-[0.72] tracking-[-0.045em]">

              <span className="block text-[18vw] sm:text-[12vw]">
                Sarah
              </span>

              <span className="my-2 block font-display text-[12vw] leading-none text-[#D4AF37] sm:text-[8vw]">
                &
              </span>

              <span className="block text-[18vw] sm:text-[12vw]">
                Alexander
              </span>

            </h1>
          </div>

          {/* Footer information */}
          <div className="mt-7 flex items-end justify-between gap-5 border-t border-[#1C352D]/10 pt-5">

            <div>
              <p className="font-display text-[22px] leading-[0.95] sm:text-2xl">
                We&apos;re getting
                <br />
                married.
              </p>

              <p className="mt-3 text-[8px] font-medium uppercase tracking-[0.32em] text-[#1C352D]/50">
                Chennai · India
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToStory}
              aria-label="Scroll to our story"
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-full
                bg-[#1C352D]
                text-[#FDFBF7]
                shadow-[0_8px_25px_rgba(28,53,45,0.16)]
                transition-transform duration-300
                active:scale-90
              "
            >
              <ArrowDown size={16} strokeWidth={1.2} />
            </button>

          </div>
        </div>
      </div>

      {/* Fine editorial line */}
      <div className="mx-6 h-px bg-[#1C352D]/10 sm:mx-8" />
    </section>
  );
}