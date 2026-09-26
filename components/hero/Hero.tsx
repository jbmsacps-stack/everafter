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

        {/* Dark cinematic gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#12261F]/25
            via-transparent
            to-[#12261F]/80
          "
        />

        {/* Subtle left/right depth */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#12261F]/25
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh]">

        {/* Editorial label */}
        <div className="absolute left-6 top-8 sm:left-10 sm:top-10">
          <p
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.45em]
              text-white/80
              sm:text-[9px]
            "
          >
            A celebration of love
          </p>
        </div>

        {/* Names */}
        <div
          className="
            absolute
            right-5
            top-[22%]
            w-[72%]
            text-right
            sm:right-10
            sm:top-[20%]
            sm:w-[58%]
            md:w-[52%]
          "
        >
          <h1
            className="
              font-display
              font-light
              leading-[0.78]
              tracking-[-0.04em]
              text-white
            "
          >
            <span
              className="
                block
                text-[17vw]
                sm:text-[12vw]
                md:text-[9vw]
                lg:text-[7rem]
              "
            >
              Sarah
            </span>

            <span
              className="
                mt-1
                block
                text-[17vw]
                sm:text-[12vw]
                md:text-[9vw]
                lg:text-[7rem]
              "
            >
              <span className="text-[#D4AF37]">&amp;</span>
            </span>

            <span
              className="
                mt-1
                block
                text-[14vw]
                sm:text-[10vw]
                md:text-[8vw]
                lg:text-[6.5rem]
              "
            >
              Alexander
            </span>
          </h1>
        </div>

        {/* Bottom information */}
        <div
          className="
            absolute
            bottom-8
            left-6
            right-6
            sm:bottom-10
            sm:left-10
            sm:right-10
          "
        >
          <div
            className="
              flex
              items-end
              justify-between
              gap-6
              border-t
              border-white/20
              pt-5
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.4em]
                  text-[#D4AF37]
                "
              >
                18 · 06 · 2027
              </p>

              <p
                className="
                  mt-3
                  font-display
                  text-[22px]
                  font-light
                  leading-tight
                  text-white
                  sm:text-3xl
                "
              >
                We&apos;re getting married.
              </p>

              <p
                className="
                  mt-2
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-white/60
                "
              >
                Chennai · India
              </p>
            </div>

            {/* Desktop scroll cue */}
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
              <span className="text-[8px] uppercase tracking-[0.3em]">
                Scroll
              </span>

              <ArrowDown
                size={15}
                strokeWidth={1}
              />
            </button>
          </div>
        </div>

        {/* Mobile scroll cue */}
        <button
          type="button"
          onClick={scrollDown}
          aria-label="Scroll to countdown"
          className="
            absolute
            bottom-7
            right-5
            flex
            h-8
            w-8
            items-center
            justify-center
            text-white/70
            sm:hidden
          "
        >
          <ArrowDown
            size={15}
            strokeWidth={1}
          />
        </button>

      </div>
    </section>
  );
}