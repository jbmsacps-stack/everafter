"use client";

import { MapPin, Navigation } from "lucide-react";

const events = [
  {
    type: "Ceremony",
    label: "The Marriage",
    time: "10:30 AM",
    venue: "Marriage Venue",
    address: "Venue address goes here",
    mapsUrl: "https://www.google.com/maps",
  },
  {
    type: "Reception",
    label: "The Celebration",
    time: "6:30 PM",
    venue: "Reception Venue",
    address: "Venue address goes here",
    mapsUrl: "https://www.google.com/maps",
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="
        bg-[#FDFBF7]
        px-6
        py-28
        sm:px-8
        sm:py-36
      "
    >
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div
          data-reveal
          className="text-center"
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
            The day
          </p>

          <h2
            className="
              mt-6
              font-display
              text-[50px]
              font-light
              leading-[0.9]
              tracking-[-0.025em]
              text-[#1C352D]
              sm:text-7xl
            "
          >
            Two moments.
            <br />
            One beautiful day.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-md
              text-sm
              leading-7
              text-[#1C352D]/55
            "
          >
            Here&apos;s everything you need to know
            about where and when to join us.
          </p>
        </div>

        {/* Events */}
        <div className="relative mt-16">

          {/* Connecting line */}
          <div
            className="
              absolute
              bottom-8
              left-[11px]
              top-8
              w-px
              bg-[#1C352D]/10
              sm:left-1/2
              sm:-translate-x-1/2
            "
          />

          <div
            data-stagger
            className="relative space-y-16 sm:space-y-24"
          >
            {events.map((event, index) => (
              <article
                key={event.type}
                className="
                  relative
                  grid
                  grid-cols-[24px_1fr]
                  gap-6
                  sm:grid-cols-[1fr_24px_1fr]
                  sm:gap-10
                "
              >
                {/* Desktop left content */}
                <div
                  className={`
                    hidden
                    sm:block
                    ${
                      index % 2 === 0
                        ? "text-right"
                        : "order-3 text-left"
                    }
                  `}
                >
                  {index % 2 === 0 && (
                    <EventInfo event={event} />
                  )}
                </div>

                {/* Timeline point */}
                <div
                  className="
                    relative
                    z-10
                    mt-1
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/50
                    bg-[#FDFBF7]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#D4AF37]
                    "
                  />
                </div>

                {/* Mobile / desktop right content */}
                <div
                  className={`
                    ${
                      index % 2 === 0
                        ? ""
                        : "sm:order-1"
                    }
                  `}
                >
                  <div className="sm:hidden">
                    <EventInfo event={event} />
                  </div>

                  <div className="hidden sm:block">
                    {index % 2 !== 0 && (
                      <EventInfo event={event} />
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function EventInfo({
  event,
}: {
  event: (typeof events)[number];
}) {
  return (
    <div>

      {/* Event type */}
      <p
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.4em]
          text-[#B99A45]
        "
      >
        {event.type}
      </p>

      {/* Time */}
      <p
        className="
          mt-4
          font-display
          text-4xl
          font-light
          leading-none
          text-[#1C352D]
        "
      >
        {event.time}
      </p>

      {/* Venue */}
      <h3
        className="
          mt-5
          font-display
          text-2xl
          font-light
          leading-tight
          text-[#1C352D]
        "
      >
        {event.venue}
      </h3>

      {/* Address */}
      <div
        className="
          mt-3
          flex
          items-start
          gap-2
          text-sm
          leading-6
          text-[#1C352D]/50
          sm:justify-end
        "
      >
        <MapPin
          size={14}
          strokeWidth={1.4}
          className="mt-1 shrink-0"
        />

        <span>{event.address}</span>
      </div>

      {/* Maps */}
      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          border-b
          border-[#1C352D]/25
          pb-1.5
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.28em]
          text-[#1C352D]
          transition
          duration-300
          hover:border-[#D4AF37]
          hover:text-[#B99A45]
        "
      >
        <Navigation
          size={13}
          strokeWidth={1.4}
        />

        Open in Maps
      </a>

    </div>
  );
}