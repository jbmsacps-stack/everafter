"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2027-06-18T10:30:00+05:30").getTime();

const initialTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function getTimeRemaining() {
  const difference = weddingDate - Date.now();

  if (difference <= 0) {
    return initialTime;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    // Calculate only after the component has mounted.
    setTime(getTimeRemaining());

    const interval = window.setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const units = [
    {
      label: "Days",
      value: time.days,
    },
    {
      label: "Hours",
      value: time.hours,
    },
    {
      label: "Minutes",
      value: time.minutes,
    },
    {
      label: "Seconds",
      value: time.seconds,
    },
  ];

  return (
    <section
      id="countdown"
      className="bg-[#FDFBF7] px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#B99A45]">
            Until we say I do
          </p>

          <h2
            className="
              mt-6
              font-display
              text-4xl
              font-light
              leading-[0.95]
              tracking-[-0.02em]
              text-[#1C352D]
              sm:text-6xl
            "
          >
            The countdown
            <br />
            begins.
          </h2>
        </div>

        {/* Countdown */}
        <div
          className="
            mt-14
            grid
            grid-cols-4
            border-y
            border-[#1C352D]/10
          "
        >
          {units.map((unit, index) => (
            <div
              key={unit.label}
              className={`
                flex
                flex-col
                items-center
                px-2
                py-7
                sm:py-9
                ${
                  index !== units.length - 1
                    ? "border-r border-[#1C352D]/10"
                    : ""
                }
              `}
            >
              <span
                className="
                  font-display
                  text-[31px]
                  font-light
                  leading-none
                  tracking-tight
                  text-[#1C352D]
                  sm:text-5xl
                "
              >
                {String(unit.value).padStart(2, "0")}
              </span>

              <span
                className="
                  mt-3
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#1C352D]/45
                  sm:text-[9px]
                "
              >
                {unit.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}