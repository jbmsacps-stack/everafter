"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2027-06-18T10:30:00+05:30").getTime();

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

function formatNumber(value: number) {
  return value.toString().padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="bg-[#FDFBF7] px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#B99A45] sm:text-xs">
          Until we say I do
        </p>

        <h2 className="mt-5 font-display text-4xl font-light leading-none text-[#1C352D] sm:text-5xl md:text-6xl">
          The countdown begins.
        </h2>

        <div className="mt-12 grid grid-cols-4 border-y border-[#1C352D]/10 py-7 sm:mt-16 sm:py-10">
          {units.map((unit, index) => (
            <div
              key={unit.label}
              className={`
                px-2
                ${index !== 0 ? "border-l border-[#1C352D]/10" : ""}
              `}
            >
              <div className="font-display text-4xl font-light tabular-nums text-[#1C352D] sm:text-6xl md:text-7xl">
                {unit.label === "Days"
                  ? unit.value
                  : formatNumber(unit.value)}
              </div>

              <div className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#1C352D]/45 sm:text-[10px]">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-display text-xl text-[#1C352D]/70 sm:text-2xl">
          18 · June · 2027
        </p>
      </div>
    </section>
  );
}