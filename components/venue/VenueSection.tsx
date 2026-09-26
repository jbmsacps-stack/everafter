import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

const venues = [
  {
    type: "Marriage",
    date: "18 June 2027",
    time: "10:30 AM",
    name: "Marriage Venue Name",
    address: "Full venue address, Chennai, Tamil Nadu",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marriage+Venue+Name+Chennai",
  },
  {
    type: "Reception",
    date: "18 June 2027",
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
      className="bg-[#EFEAE1] px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <div className="max-w-xl">
          <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#B99A45]">
            When & Where
          </p>

          <h2
            className="
              mt-5
              font-display
              text-[43px]
              font-light
              leading-[0.9]
              tracking-[-0.025em]
              text-[#1C352D]
              sm:text-6xl
            "
          >
            Join us
            <br />
            for the celebration.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#1C352D]/60">
            Two moments, two places, one day we'll remember forever.
          </p>
        </div>

        {/* Venue cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {venues.map((venue, index) => (
            <article
              key={venue.type}
              className="
                relative
                overflow-hidden
                border
                border-[#1C352D]/10
                bg-[#FDFBF7]
                p-7
                sm:p-9
              "
            >
              {/* Number */}
              <span
                className="
                  absolute
                  right-6
                  top-5
                  font-display
                  text-5xl
                  font-light
                  text-[#1C352D]/[0.06]
                  sm:right-8
                  sm:top-6
                "
              >
                0{index + 1}
              </span>

              {/* Event type */}
              <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#B99A45]">
                {venue.type}
              </p>

              {/* Time */}
              <div className="mt-7">
                <p className="font-display text-3xl font-light text-[#1C352D]">
                  {venue.time}
                </p>

                <div className="mt-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-[#1C352D]/45">
                  <CalendarDays size={12} strokeWidth={1.2} />
                  {venue.date}
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-[#1C352D]/10" />

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1C352D] text-[#FDFBF7]">
                  <MapPin size={15} strokeWidth={1.3} />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-medium text-[#1C352D]">
                    {venue.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-6 text-[#1C352D]/55">
                    {venue.address}
                  </p>
                </div>
              </div>

              {/* Maps button */}
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  flex
                  min-h-12
                  w-full
                  items-center
                  justify-between
                  border
                  border-[#1C352D]/15
                  px-4
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#1C352D]
                  transition-colors
                  hover:bg-[#1C352D]
                  hover:text-[#FDFBF7]
                "
              >
                <span>Open in Google Maps</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.2}
                />
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}