"use client";

import { ArrowUpRight, MapPin } from "lucide-react";

const venues = [
  {
    type: "Wedding Ceremony",
    date: "Saturday, 18 June 2027",
    time: "10:30 AM",
    name: "Marriage Venue Name",
    address: "Full venue address, Chennai, Tamil Nadu",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marriage+Venue+Name+Chennai",
  },
  {
    type: "Reception",
    date: "Saturday, 18 June 2027",
    time: "6:30 PM",
    name: "Reception Venue Name",
    address: "Full venue address, Chennai, Tamil Nadu",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Reception+Venue+Name+Chennai",
  },
];

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="
        overflow-hidden
        bg-[#EFEAE1]
        px-5
        py-24
        sm:px-8
        sm:py-32
      "
    >
      <div className="mx-auto max-w-4xl">

        {/* ------------------------------------------------ */}
        {/* Heading */}
        {/* ------------------------------------------------ */}

        <div
          data-reveal
          className="mx-auto max-w-2xl text-center"
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
            When & Where
          </p>

          <h2
            className="
              mt-5
              font-display
              text-[48px]
              font-light
              leading-[0.92]
              tracking-[-0.025em]
              text-[#1C352D]
              sm:text-6xl
            "
          >
            Join us for
            <br />
            the celebration.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-md
              text-sm
              leading-7
              text-[#1C352D]/60
            "
          >
            Two moments, two places, and one beautiful
            day we hope to share with you.
          </p>
        </div>

        {/* ------------------------------------------------ */}
        {/* Venue Cards */}
        {/* ------------------------------------------------ */}

        <div
          data-stagger
          className="
            mt-14
            grid
            gap-5
            sm:mt-16
            sm:grid-cols-2
          "
        >
          {venues.map((venue, index) => (
            <article
              key={venue.type}
              className="
                group
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-[#1C352D]/10
                bg-[#FDFBF7]
                shadow-[0_12px_40px_rgba(28,53,45,0.045)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(28,53,45,0.08)]
              "
            >
              {/* Small top accent */}
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#D4AF37]/50
                  to-transparent
                "
              />

              <div className="p-6 sm:p-7">

                {/* Event heading */}
                <div className="flex items-start justify-between gap-5">

                  <div>
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.34em]
                        text-[#B99A45]
                      "
                    >
                      {venue.type}
                    </p>

                    <p
                      className="
                        mt-4
                        text-xs
                        font-medium
                        tracking-wide
                        text-[#1C352D]/50
                      "
                    >
                      {venue.date}
                    </p>

                    <p
                      className="
                        mt-1
                        font-display
                        text-[34px]
                        font-light
                        leading-none
                        tracking-[-0.02em]
                        text-[#1C352D]
                      "
                    >
                      {venue.time}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#1C352D]/10
                      bg-[#EFEAE1]/70
                      text-[#1C352D]
                      transition-transform
                      duration-500
                      group-hover:rotate-[-8deg]
                    "
                  >
                    <MapPin
                      size={16}
                      strokeWidth={1.35}
                    />
                  </div>

                </div>

                {/* Divider */}
                <div
                  className="
                    my-7
                    h-px
                    bg-[#1C352D]/10
                  "
                />

                {/* Location */}
                <div>

                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[#1C352D]/35
                    "
                  >
                    Location
                  </p>

                  <h3
                    className="
                      mt-3
                      font-display
                      text-[27px]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.015em]
                      text-[#1C352D]
                    "
                  >
                    {venue.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-6
                      text-[#1C352D]/55
                    "
                  >
                    {venue.address}
                  </p>

                </div>

                {/* Maps button */}
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-7
                    flex
                    min-h-12
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    bg-[#1C352D]
                    px-5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#FDFBF7]
                    transition-all
                    duration-300
                    hover:bg-[#12261F]
                    active:scale-[0.98]
                  "
                >
                  <span>Open in Google Maps</span>

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#FDFBF7]/20
                    "
                  >
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.4}
                    />
                  </span>
                </a>

              </div>
            </article>
          ))}
        </div>

        {/* ------------------------------------------------ */}
        {/* Small footer note */}
        {/* ------------------------------------------------ */}

        <div
          data-reveal
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
            text-center
          "
        >
          <span className="h-px w-8 bg-[#1C352D]/10" />

          <p
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#1C352D]/35
            "
          >
            Tap a location for directions
          </p>

          <span className="h-px w-8 bg-[#1C352D]/10" />
        </div>

      </div>
    </section>
  );
}