"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#1C352D] text-[#FDFBF7]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="
            absolute inset-0 scale-105
            bg-[url('/images/hero.jpg')]
            bg-cover bg-center
            transition-transform duration-[2000ms]
          "
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-[#12261F]/35" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#12261F]/55 via-transparent to-[#12261F]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#12261F]/65 via-transparent to-[#12261F]/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end px-6 pb-14 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <div className="w-full max-w-7xl">
          <div className="max-w-4xl">
            <p
              className="
                mb-5 text-[10px] font-medium uppercase
                tracking-[0.45em] text-[#D4AF37]
                sm:text-xs
              "
            >
              18 · 06 · 2027 — Chennai, India
            </p>

            <h1
              className="
                font-display text-[clamp(4rem,11vw,10rem)]
                font-light leading-[0.78]
                tracking-[-0.04em]
              "
            >
              Sarah
              <span className="mx-3 font-light text-[#D4AF37]/80 sm:mx-5">
                &
              </span>
              Alexander
            </h1>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p
                className="
                  max-w-sm font-display text-2xl font-light
                  leading-tight text-[#FDFBF7]/85
                  sm:text-3xl
                "
              >
                We're getting
                <br />
                married.
              </p>

              <div className="flex items-center gap-4 text-[#FDFBF7]/60">
                <span className="h-px w-12 bg-[#D4AF37]/60" />

                <span className="text-[9px] uppercase tracking-[0.35em]">
                  Scroll to explore
                </span>

                <ArrowDown size={15} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-[#D4AF37]/30" />
    </section>
  );
}