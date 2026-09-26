"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);
  const namesRef = useRef<HTMLHeadingElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    document.getElementById("countdown")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          imageRef.current,
          {
            scale: 1.12,
          },
          {
            scale: 1,
            duration: 2.2,
            ease: "power2.out",
          }
        )
        .fromTo(
          overlayRef.current,
          {
            opacity: 0.9,
          },
          {
            opacity: 1,
            duration: 1.4,
          },
          "-=1.6"
        )
        .fromTo(
          eyebrowRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.8"
        )
        .fromTo(
          dateRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .fromTo(
          namesRef.current,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .fromTo(
          bottomRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.5"
        );

      /*
       * Scroll animation
       */
      gsap.to(imageRef.current, {
        yPercent: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(namesRef.current, {
        yPercent: -18,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 0.55,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#12261F]
        text-[#FDFBF7]
      "
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/Hero.png"
          alt="Bride and Groom"
          className="
            h-full
            w-full
            object-cover
            object-center
            will-change-transform
          "
        />

        <div
          ref={overlayRef}
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#12261F]/20
            via-transparent
            to-[#12261F]/80
          "
        />
      </div>

      {/* Eyebrow */}
      <div
        ref={eyebrowRef}
        className="
          absolute
          left-6
          top-8
          sm:left-10
          sm:top-10
        "
      >
        <p
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.45em]
            text-white/85
            sm:text-[9px]
          "
        >
          A celebration of love
        </p>
      </div>

      {/* Names */}
      <div
        ref={namesRef}
        className="
          absolute
          right-5
          top-[22%]
          w-[72%]
          text-right
          will-change-transform
          sm:right-10
          sm:top-[20%]
          sm:w-[58%]
        "
      >
        <h1
          className="
            font-display
            font-light
            leading-[0.78]
            tracking-[-0.04em]
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
            Groom
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
            <span className="text-[#D4AF37]">
              &amp;
            </span>
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
            Bride
          </span>
        </h1>
      </div>

      {/* Bottom information */}
      <div
        ref={bottomRef}
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
            border-t
            border-white/20
            pt-5
          "
        >
          <div>
            <p
              ref={dateRef}
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
    </section>
  );
}