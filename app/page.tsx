import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#B99A45]">
            A celebration of love
          </p>

          <h1 className="font-display text-7xl font-light tracking-tight text-[#1C352D] md:text-9xl">
            EverAfter
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#17221E]/60">
            A modern wedding experience designed around your story,
            your people, and your celebration.
          </p>
        </div>
      </section>

      <section id="story" className="h-1" />
      <section id="schedule" className="h-1" />
      <section id="gallery" className="h-1" />
      <section id="rsvp" className="h-1" />
    </main>
  );
}