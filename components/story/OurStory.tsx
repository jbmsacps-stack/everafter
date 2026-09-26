"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Story = {
  number: string;
  title: string;
  description: string;
  image: string;
  date: string;
};

const stories: Story[] = [
  {
    number: "01",
    title: "First Met",
    description:
      "Somewhere between an ordinary day and an unexpected moment, our story quietly began.",
    image: "/images/story-01.png",
    date: "The beginning",
  },
  {
    number: "02",
    title: "First Date",
    description:
      "A simple day together became one of those memories we wished we could keep forever.",
    image: "/images/story-02.png",
    date: "A little later",
  },
  {
    number: "03",
    title: "The Proposal",
    description:
      "Under a sky full of lights, one question turned our favorite story into forever.",
    image: "/images/story-03.png",
    date: "The moment",
  },
];

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageElementRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const transitioningRef = useRef(false);

  const activeStory = stories[activeIndex];

  /*
   * Section entrance animation
   */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*
   * Slow dreamy movement of the illustration.
   *
   * This is intentionally VERY subtle.
   */
  useEffect(() => {
    if (!imageElementRef.current) return;

    const floatAnimation = gsap.to(imageElementRef.current, {
      y: -7,
      x: 2,
      rotation: 0.35,
      scale: 1.015,
      duration: 4.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      floatAnimation.kill();
    };
  }, [activeIndex]);

  /*
   * Transition to another story.
   */
  const changeStory = useCallback(
    (nextIndex: number) => {
      if (
        transitioningRef.current ||
        nextIndex === activeIndex ||
        nextIndex < 0 ||
        nextIndex >= stories.length
      ) {
        return;
      }

      transitioningRef.current = true;

      const timeline = gsap.timeline({
        onComplete: () => {
          setActiveIndex(nextIndex);
          transitioningRef.current = false;
        },
      });

      /*
       * Current illustration gently disappears.
       */
      timeline
        .to(imageRef.current, {
          opacity: 0,
          scale: 0.96,
          filter: "blur(5px)",
          y: -8,
          duration: 0.45,
          ease: "power2.inOut",
        })
        .to(
          contentRef.current,
          {
            opacity: 0,
            y: 12,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.25"
        );
    },
    [activeIndex]
  );

  /*
   * Animate the newly selected story into place.
   */
  useEffect(() => {
    if (transitioningRef.current) return;

    const timeline = gsap.timeline();

    timeline
      .set(imageRef.current, {
        opacity: 0,
        scale: 1.04,
        filter: "blur(5px)",
        y: 12,
      })
      .set(contentRef.current, {
        opacity: 0,
        y: 12,
      })
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.85,
        ease: "power3.out",
      })
      .to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.5"
      );

    return () => {
      timeline.kill();
    };
  }, [activeIndex]);

  /*
   * Automatic story progression.
   */
  useEffect(() => {
    const timer = window.setInterval(() => {
      const nextIndex =
        activeIndex === stories.length - 1
          ? 0
          : activeIndex + 1;

      changeStory(nextIndex);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [activeIndex, changeStory]);

  /*
   * Progress indicator animation.
   */
  useEffect(() => {
    if (!progressRef.current) return;

    gsap.fromTo(
      progressRef.current,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration: 6.5,
        ease: "none",
      }
    );
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="
  overflow-hidden
  bg-[#EFEAE1]
  px-6
  pt-20
  pb-28
  sm:px-8
  sm:pt-24
  sm:pb-36
"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <div
          ref={headingRef}
          className="mx-auto max-w-xl text-center"
        >
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.45em]
              text-[#B99A45]
            "
          >
            Our Story
          </p>

          <h2
            className="
              mt-6
              font-display
              text-[46px]
              font-light
              leading-[0.95]
              tracking-[-0.025em]
              text-[#1C352D]
              sm:text-6xl
            "
          >
            Three moments.
            <br />
            One beautiful story.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-sm
              text-sm
              leading-7
              text-[#1C352D]/60
            "
          >
            A few memories that brought us
            from a first hello to forever.
          </p>
        </div>

        {/* Story stage */}
        <div className="mx-auto mt-16 max-w-md sm:mt-20">

          {/* Memory image */}
          <div
            ref={imageRef}
            className="
    relative
    aspect-[4/5]
    overflow-hidden
    rounded-[20px]
    bg-[#FDFBF7]
    shadow-[0_25px_70px_rgba(28,53,45,0.10)]
    isolate
    will-change-transform
  "
          >
            <img
              ref={imageElementRef}
              src={activeStory.image}
              alt={activeStory.title}
              className="
      block
      h-full
      w-full
      object-cover
      will-change-transform
    "
            />

            <div
              className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-t
      from-[#1C352D]/10
      via-transparent
      to-[#FDFBF7]/5
    "
            />

            <div
              className="
      absolute
      right-5
      top-5
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-[#FDFBF7]/60
      bg-[#1C352D]/15
      text-[10px]
      tracking-[0.2em]
      text-[#FDFBF7]
      backdrop-blur-sm
    "
            >
              {activeStory.number}
            </div>
          </div>

          {/* Story information */}
          <div
            ref={contentRef}
            className="mt-9"
          >
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-[#B99A45]
              "
            >
              {activeStory.date}
            </p>

            <h3
              className="
                mt-3
                font-display
                text-4xl
                font-light
                text-[#1C352D]
              "
            >
              {activeStory.title}
            </h3>

            <p
              className="
                mt-4
                max-w-sm
                text-sm
                leading-7
                text-[#1C352D]/60
              "
            >
              {activeStory.description}
            </p>
          </div>

          {/* Story navigation */}
          <div className="mt-9">

            {/* Auto-progress */}
            <div
              className="
                h-px
                w-full
                overflow-hidden
                bg-[#1C352D]/10
              "
            >
              <div
                ref={progressRef}
                className="
                  h-full
                  origin-left
                  bg-[#B99A45]
                "
              />
            </div>

            <div className="mt-5 flex items-center justify-between">

              {/* Story indicators */}
              <div className="flex items-center gap-3">
                {stories.map((story, index) => (
                  <button
                    key={story.number}
                    type="button"
                    aria-label={`Show ${story.title}`}
                    onClick={() => changeStory(index)}
                    className="group flex items-center gap-2"
                  >
                    <span
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-500
                        ${index === activeIndex
                          ? "w-8 bg-[#1C352D]"
                          : "w-1.5 bg-[#1C352D]/25"
                        }
                      `}
                    />
                  </button>
                ))}
              </div>

              {/* Previous / next */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    changeStory(activeIndex - 1)
                  }
                  disabled={activeIndex === 0}
                  aria-label="Previous story"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#1C352D]/15
                    text-[#1C352D]
                    transition
                    active:scale-90
                    disabled:opacity-25
                  "
                >
                  <ChevronLeft size={16} strokeWidth={1.2} />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    changeStory(activeIndex + 1)
                  }
                  disabled={
                    activeIndex === stories.length - 1
                  }
                  aria-label="Next story"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#1C352D]/15
                    text-[#1C352D]
                    transition
                    active:scale-90
                    disabled:opacity-25
                  "
                >
                  <ChevronRight size={16} strokeWidth={1.2} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}