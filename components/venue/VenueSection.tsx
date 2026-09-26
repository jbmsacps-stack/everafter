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
      className="bg-[#EFEAE1] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B99A45]">
            When & Where
          </p>

          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-[#1C352D] sm:text-5xl">
            Your day with us.
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-[#1C352D]/65">
            Here&apos;s everything you need to know about the
            celebration, including the venues and directions.
          </p>
        </div>

        {/* Venue cards */}
        <div className="space-y-5">
          {venues.map((venue) => (
            <article
              key={venue.type}
              className="
                overflow-hidden
                rounded-2xl
                border border-[#1C352D]/10
                bg-[#FDFBF7]
                shadow-[0_8px_30px_rgba(28,53,45,0.04)]
              "
            >
              <div className="p-6 sm:p-8">

                {/* Event */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B99A45]">
                      {venue.type}
                    </p>

                    <p className="mt-4 text-sm font-medium text-[#1C352D]/65">
                      {venue.date}
                    </p>

                    <p className="mt-1 font-display text-3xl font-light text-[#1C352D] sm:text-4xl">
                      {venue.time}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1C352D] text-[#FDFBF7]">
                    <MapPin size={17} strokeWidth={1.4} />
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-[#1C352D]/10" />

                {/* Location */}
                <div>
                  <h3 className="font-display text-2xl font-medium text-[#1C352D] sm:text-3xl">
                    {venue.name}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#1C352D]/60">
                    {venue.address}
                  </p>
                </div>

                {/* Maps */}
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    flex
                    min-h-12
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    bg-[#1C352D]
                    px-5
                    text-xs
                    font-semibold
                    text-[#FDFBF7]
                    transition-transform
                    active:scale-[0.98]
                  "
                >
                  <span>Open in Google Maps</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}