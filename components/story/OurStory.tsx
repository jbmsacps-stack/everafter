"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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

const STORY_DURATION = 6500;

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);
  const imageElementRef = useRef<HTMLImageElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const activeIndexRef = useRef(0);
  const transitioningRef = useRef(false);
  const autoTimerRef = useRef<number | null>(null);

  const activeStory = stories[activeIndex];

  /*
   * ------------------------------------------------------
   * Section entrance
   * ------------------------------------------------------
   */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      intro
        .fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          imageRef.current,
          {
            opacity: 0,
            y: 45,
            scale: 0.965,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.55"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*
   * ------------------------------------------------------
   * Slow dreamy artwork movement
   * ------------------------------------------------------
   */

  useEffect(() => {
    if (!imageElementRef.current) return;

    const animation = gsap.to(imageElementRef.current, {
      y: -5,
      x: 1.5,
      rotation: 0.25,
      scale: 1.012,
      duration: 5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      animation.kill();
    };
  }, [activeIndex]);

  /*
   * ------------------------------------------------------
   * Progress bar
   * ------------------------------------------------------
   */

  useEffect(() => {
    if (!progressRef.current) return;

    gsap.killTweensOf(progressRef.current);

    gsap.set(progressRef.current, {
      scaleX: 0,
    });

    gsap.to(progressRef.current, {
      scaleX: 1,
      duration: STORY_DURATION / 1000,
      ease: "none",
    });
  }, [activeIndex]);

  /*
   * ------------------------------------------------------
   * Story transition
   * ------------------------------------------------------
   */

  const changeStory = useCallback(
    (nextIndex: number) => {
      if (transitioningRef.current) return;

      const normalizedIndex =
        nextIndex < 0
          ? stories.length - 1
          : nextIndex >= stories.length
            ? 0
            : nextIndex;

      if (normalizedIndex === activeIndexRef.current) return;

      transitioningRef.current = true;

      if (autoTimerRef.current) {
        window.clearTimeout(autoTimerRef.current);
        autoTimerRef.current = null;
      }

      const outgoingImage = imageRef.current;
      const outgoingContent = contentRef.current;

      const timeline = gsap.timeline({
        onComplete: () => {
          activeIndexRef.current = normalizedIndex;
          setActiveIndex(normalizedIndex);
          transitioningRef.current = false;
        },
      });

      timeline
        .to(
          outgoingContent,
          {
            opacity: 0,
            y: 10,
            duration: 0.28,
            ease: "power2.in",
          },
          0
        )
        .to(
          outgoingImage,
          {
            opacity: 0,
            scale: 0.975,
            y: -5,
            duration: 0.5,
            ease: "power2.inOut",
          },
          0
        );
    },
    []
  );

  /*
   * ------------------------------------------------------
   * Animate newly selected story
   * ------------------------------------------------------
   */

  useEffect(() => {
    if (!imageRef.current || !contentRef.current) return;

    if (transitioningRef.current) {
      const entrance = gsap.timeline({
        delay: 0.05,
        onComplete: () => {
          transitioningRef.current = false;
        },
      });

      entrance
        .set(imageRef.current, {
          opacity: 0,
          scale: 1.025,
          y: 8,
        })
        .set(contentRef.current, {
          opacity: 0,
          y: 10,
        })
        .to(imageRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        })
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.42"
        );

      return () => {
        entrance.kill();
      };
    }

    /*
     * Initial render
     */
    gsap.set(imageRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
    });

    gsap.set(contentRef.current, {
      opacity: 1,
      y: 0,
    });
  }, [activeIndex]);

  /*
   * ------------------------------------------------------
   * Automatic progression
   * ------------------------------------------------------
   */

  useEffect(() => {
    const scheduleNext = () => {
      autoTimerRef.current = window.setTimeout(() => {
        const nextIndex =
          activeIndexRef.current === stories.length - 1
            ? 0
            : activeIndexRef.current + 1;

        changeStory(nextIndex);
      }, STORY_DURATION);
    };

    scheduleNext();

    return () => {
      if (autoTimerRef.current) {
        window.clearTimeout(autoTimerRef.current);
      }
    };
  }, [activeIndex, changeStory]);

  /*
   * ------------------------------------------------------
   * Render
   * ------------------------------------------------------
   */

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

        {/* Heading */}

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

          {/* Artwork */}

          <div
            ref={imageRef}
            className="
              relative
              aspect-[4/5]
              overflow-hidden
              rounded-[24px]
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
                select-none
              "
              draggable={false}
            />

            {/* Soft overlay */}

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

            {/* Story number */}

            <div
              className="
                absolute
                right-5
                top-5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#FDFBF7]/55
                bg-[#1C352D]/15
                text-[9px]
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
                leading-none
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

          {/* Navigation */}

          <div className="mt-9">

            {/* Progress */}

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

              {/* Indicators */}

              <div className="flex items-center gap-3">
                {stories.map((story, index) => (
                  <button
                    key={story.number}
                    type="button"
                    aria-label={`Show ${story.title}`}
                    aria-current={
                      index === activeIndex
                        ? "step"
                        : undefined
                    }
                    onClick={() => changeStory(index)}
                    className="
                      flex
                      items-center
                      gap-2
                      p-1
                    "
                  >
                    <span
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          index === activeIndex
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
                    transition-all
                    duration-300
                    hover:bg-[#1C352D]
                    hover:text-[#FDFBF7]
                    active:scale-90
                  "
                >
                  <ChevronLeft
                    size={16}
                    strokeWidth={1.2}
                  />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    changeStory(activeIndex + 1)
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
                    transition-all
                    duration-300
                    hover:bg-[#1C352D]
                    hover:text-[#FDFBF7]
                    active:scale-90
                  "
                >
                  <ChevronRight
                    size={16}
                    strokeWidth={1.2}
                  />
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}