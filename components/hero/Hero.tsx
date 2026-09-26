"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollDown = () => {
    document.getElementById("countdown")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#12261F]
        text-[#FDFBF7]
      "
    >
      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src="/images/Hero.png"
          alt="Sarah and Alexander"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Cinematic overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#12261F]/20
            via-transparent
            to-[#12261F]/75
          "
        />

        {/* Slight side vignette */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#12261F]/20
            via-transparent
            to-[#12261F]/10
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col">

        {/* Top editorial label */}
        <div className="px-6 pt-8 sm:px-10 sm:pt-10">
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.42em]
              text-white/85
            "
          >
            A celebration of love
          </p>
        </div>

        {/* Main identity */}
        <div
          className="
            mt-auto
            px-6
            pb-10
            sm:px-10
            sm:pb-14
          "
        >
          <div className="mx-auto max-w-5xl">

            {/* Date */}
            <p
              className="
                mb-5
                text-[9px]
                font-medium
                uppercase
                tracking-[0.42em]
                text-[#D4AF37]
                sm:text-[10px]
              "
            >
              18 · 06 · 2027
            </p>

            {/* Names */}
            <h1
              className="
                font-display
                font-light
                leading-[0.82]
                tracking-[-0.04em]
              "
            >
              <span
                className="
                  block
                  text-[21vw]
                  sm:text-[16vw]
                  md:text-[13vw]
                  lg:text-[9rem]
                "
              >
                Sarah
              </span>

              <span
                className="
                  block
                  pl-[14vw]
                  text-[21vw]
                  sm:pl-[10vw]
                  sm:text-[16vw]
                  md:pl-[8vw]
                  md:text-[13vw]
                  lg:pl-28
                  lg:text-[9rem]
                "
              >
                <span className="text-[#D4AF37]">&amp;</span>{" "}
                Alexander
              </span>
            </h1>

            {/* Bottom metadata */}
            <div
              className="
                mt-7
                flex
                items-end
                justify-between
                border-t
                border-white/20
                pt-5
              "
            >
              <div>
                <p
                  className="
                    font-display
                    text-[23px]
                    font-light
                    leading-tight
                    sm:text-3xl
                  "
                >
                  We&apos;re getting married.
                </p>

                <p
                  className="
                    mt-3
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-white/65
                  "
                >
                  Chennai · India
                </p>
              </div>

              {/* Minimal scroll cue */}
              <button
                type="button"
                onClick={scrollDown}
                aria-label="Scroll to countdown"
                className="
                  hidden
                  flex-col
                  items-center
                  gap-2
                  text-white/70
                  sm:flex
                "
              >
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                  "
                >
                  Scroll
                </span>

                <ArrowDown
                  size={15}
                  strokeWidth={1}
                />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile scroll cue */}
      <button
        type="button"
        onClick={scrollDown}
        aria-label="Scroll to countdown"
        className="
          absolute
          bottom-5
          right-6
          flex
          h-8
          w-8
          items-center
          justify-center
          text-white/65
          sm:hidden
        "
      >
        <ArrowDown
          size={16}
          strokeWidth={1}
        />
      </button>
    </section>
  );
}