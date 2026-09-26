"use client";

import { useEffect, useRef, useState } from "react";

const STORY_DURATION = 6000;

const stories = [
  {
    number: "01",
    title: "First Met",
    subtitle: "Where it all began.",
    description:
      "Some stories begin with a grand moment. Ours began simply, with two people meeting and a conversation neither of us knew would matter so much.",
    image: "/images/story-01.png",
  },
  {
    number: "02",
    title: "First Date",
    subtitle: "A beginning of something more.",
    description:
      "One conversation became another, one evening became many, and somewhere along the way, spending time together started to feel like the easiest thing in the world.",
    image: "/images/story-02.png",
  },
  {
    number: "03",
    title: "The Proposal",
    subtitle: "The question that changed everything.",
    description:
      "With a little planning, a lot of anticipation, and one very important question, the next chapter of our story began.",
    image: "/images/story-03.png",
  },
];

export default function OurStory() {
  const [activeStory, setActiveStory] = useState(0);
  const [progress, setProgress] = useState(0);

  const animationFrame = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  const changeStory = (index: number) => {
    setActiveStory(index);
    setProgress(0);
    startTime.current = null;
  };

  useEffect(() => {
    startTime.current = performance.now();

    const animate = (currentTime: number) => {
      if (startTime.current === null) {
        startTime.current = currentTime;
      }

      const elapsed = currentTime - startTime.current;
      const percentage = Math.min(
        (elapsed / STORY_DURATION) * 100,
        100
      );

      setProgress(percentage);

      if (elapsed >= STORY_DURATION) {
        setActiveStory((current) => (current + 1) % stories.length);
        setProgress(0);
        startTime.current = currentTime;
      }

      animationFrame.current =
        requestAnimationFrame(animate);
    };

    animationFrame.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [activeStory]);

  const story = stories[activeStory];

  return (
    <section
      id="story"
      className="bg-[#FDFBF7] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B99A45]">
            Our Story
          </p>

          <h2
            className="
              mt-4
              max-w-md
              font-display
              text-5xl
              font-light
              leading-[0.9]
              tracking-[-0.02em]
              text-[#1C352D]
              sm:text-6xl
            "
          >
            A few moments
            <br />
            that brought us here.
          </h2>
        </div>

        {/* Image */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-[#EFEAE1]">
          <div className="relative aspect-[4/5]">

            <img
              key={story.image}
              src={story.image}
              alt={story.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-opacity
                duration-700
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#12261F]/45 via-transparent to-transparent" />

            <span className="absolute bottom-5 left-5 font-display text-6xl font-light text-white/90">
              {story.number}
            </span>

          </div>
        </div>

        {/* Story text */}
        <div className="mt-8">

          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#B99A45]">
            {story.number}
          </p>

          <h3 className="mt-3 font-display text-4xl font-light text-[#1C352D]">
            {story.title}
          </h3>

          <p className="mt-1 text-sm font-medium text-[#1C352D]/55">
            {story.subtitle}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#1C352D]/65">
            {story.description}
          </p>

        </div>

        {/* Timeline */}
        <div className="mt-10">

          {/* Overall timeline */}
          <div className="relative h-px bg-[#1C352D]/10">

            <div
              className="
                absolute
                left-0
                top-0
                h-px
                bg-[#D4AF37]
              "
              style={{
                width: `${progress}%`,
                transition:
                  "width 100ms linear",
              }}
            />

          </div>

          {/* Story buttons */}
          <div className="mt-5 grid grid-cols-3 gap-3">

            {stories.map((item, index) => {
              const isActive = index === activeStory;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => changeStory(index)}
                  className="text-left"
                  aria-label={`View ${item.title}`}
                >
                  <span
                    className={`
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      transition-colors
                      ${
                        isActive
                          ? "text-[#1C352D]"
                          : "text-[#1C352D]/30"
                      }
                    `}
                  >
                    {item.number}
                  </span>

                  <span
                    className={`
                      mt-2
                      block
                      text-xs
                      transition-colors
                      ${
                        isActive
                          ? "text-[#1C352D]"
                          : "text-[#1C352D]/35"
                      }
                    `}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}