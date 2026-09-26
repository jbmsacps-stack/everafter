"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date(
  "2027-06-18T10:30:00+05:30"
).getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
  const difference = weddingDate - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),
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

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    {
      label: "Days",
      value: timeLeft.days.toString(),
    },
    {
      label: "Hours",
      value: pad(timeLeft.hours),
    },
    {
      label: "Minutes",
      value: pad(timeLeft.minutes),
    },
    {
      label: "Seconds",
      value: pad(timeLeft.seconds),
    },
  ];

  return (
    <section
      id="countdown"
      className="bg-[#FDFBF7] px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <div className="text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#B99A45]">
            Until we say I do
          </p>

          <h2
            className="
              mt-6
              font-display
              text-[42px]
              font-light
              leading-[0.9]
              tracking-[-0.025em]
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
        <div className="mt-14 border-y border-[#1C352D]/10">
          <div className="grid grid-cols-4">

            {units.map((unit, index) => (
              <div
                key={unit.label}
                className={`
                  flex
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  py-8
                  sm:py-10
                  ${
                    index !== 0
                      ? "border-l border-[#1C352D]/10"
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
                    tabular-nums
                    text-[#1C352D]
                    sm:text-5xl
                  "
                >
                  {unit.value}
                </span>

                <span
                  className="
                    mt-3
                    text-[7px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
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

        {/* Date */}
        <p className="mt-8 text-center font-display text-lg text-[#1C352D]/65">
          18 · June · 2027
        </p>

      </div>
    </section>
  );
}