"use client";

import { ArrowUp, MapPin } from "lucide-react";

export default function WeddingFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#1C352D]
        px-6
        pb-8
        pt-28
        text-[#FDFBF7]
        sm:px-8
        sm:pt-36
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Closing message */}
        <div className="text-center">

          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.45em]
              text-[#D4AF37]
            "
          >
            Until then
          </p>

          <h2
            className="
              mt-7
              font-display
              text-[58px]
              font-light
              leading-[0.88]
              tracking-[-0.03em]
              sm:text-8xl
            "
          >
            See you
            <br />
            there.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-sm
              text-sm
              leading-7
              text-[#FDFBF7]/60
            "
          >
            Thank you for being part of our
            story. We cannot wait to celebrate
            this beautiful day with you.
          </p>

        </div>

        {/* Date */}
        <div
          className="
            mx-auto
            mt-16
            flex
            max-w-sm
            items-center
            justify-center
            gap-5
          "
        >
          <span className="h-px flex-1 bg-[#FDFBF7]/15" />

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#D4AF37]
            "
          >
            18 · 06 · 2027
          </span>

          <span className="h-px flex-1 bg-[#FDFBF7]/15" />
        </div>

        {/* Couple */}
        <div className="mt-12 text-center">

          <p
            className="
              font-display
              text-3xl
              font-light
              text-[#FDFBF7]
            "
          >
            Sarah
            <span className="mx-3 text-[#D4AF37]">
              &
            </span>
            Alexander
          </p>

          <p
            className="
              mt-3
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-[#FDFBF7]/40
            "
          >
            Chennai · India
          </p>

        </div>

        {/* Quick navigation */}
        <nav
          aria-label="Footer navigation"
          className="
            mx-auto
            mt-16
            flex
            max-w-md
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-4
          "
        >
          {[
            ["Home", "home"],
            ["Schedule", "schedule"],
            ["Our Story", "story"],
            ["RSVP", "rsvp"],
            ["FAQs", "faq"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#FDFBF7]/55
                transition
                duration-300
                hover:text-[#D4AF37]
              "
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Bottom */}
        <div
          className="
            mt-20
            flex
            flex-col
            items-center
            justify-between
            gap-6
            border-t
            border-[#FDFBF7]/10
            pt-7
            sm:flex-row
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#FDFBF7]/35
            "
          >
            #AlexFoundHisSarah
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#FDFBF7]/15
              text-[#FDFBF7]/70
              transition
              duration-300
              hover:border-[#D4AF37]/50
              hover:text-[#D4AF37]
              active:scale-90
            "
          >
            <ArrowUp
              size={15}
              strokeWidth={1.2}
            />
          </button>

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-[#FDFBF7]/30
            "
          >
            Made with love
          </p>
        </div>

      </div>
    </footer>
  );
}