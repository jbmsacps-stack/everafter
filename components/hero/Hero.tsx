"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FDFBF7] text-[#1C352D]"
    >
      {/* HERO IMAGE */}
      <div className="relative h-[46svh] min-h-[390px] overflow-hidden bg-[#1C352D]">
        <img
          src="/images/Hero.png"
          alt="Wedding couple"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: "center 58%",
          }}
        />

        {/* Soft photographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

        {/* Editorial label */}
        <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
          <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-white/80">
            Celebration of Love
          </p>
        </div>

        {/* Initials */}
        <div className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-[#1C352D]/40 backdrop-blur-md">
          <span className="font-display text-sm text-[#D4AF37]">
            S <span className="text-white/60">&</span> A
          </span>
        </div>
      </div>

      {/* INVITATION CONTENT */}
      <div className="px-6 pb-10 pt-7 sm:px-8 sm:pb-12 sm:pt-9">
        <div className="mx-auto max-w-xl">

          {/* DATE */}
          <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#B99A45]">
            18 · 06 · 2027
          </p>

          {/* NAMES */}
          <div className="mt-5 text-center">
            <h1 className="font-display font-light leading-[0.72] tracking-[-0.045em]">

              <span className="block text-[18vw] sm:text-[12vw]">
                Sarah
              </span>

              <span className="my-2 block text-[11vw] leading-none text-[#D4AF37] sm:text-[7vw]">
                &
              </span>

              <span className="block text-[18vw] sm:text-[12vw]">
                Alexander
              </span>

            </h1>
          </div>

          {/* INTRODUCTION */}
          <div className="mt-9 border-t border-[#1C352D]/10 pt-6">

            <p className="font-display text-[27px] leading-[1.05] text-[#1C352D] sm:text-3xl">
              We&apos;re getting married.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#1C352D]/50">
                Chennai · India
              </p>

              <span className="h-px w-14 bg-[#D4AF37]/50" />
            </div>

          </div>

        </div>
      </div>

      {/* EDITORIAL DIVIDER */}
      <div className="mx-6 h-px bg-[#1C352D]/10 sm:mx-8" />
    </section>
  );
}