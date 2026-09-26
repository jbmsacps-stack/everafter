import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="bg-[#FDFBF7]">
      <Hero />

      <section
        id="story"
        className="flex min-h-screen items-center justify-center"
      >
        <p className="font-display text-4xl text-[#1C352D]">
          Our Story
        </p>
      </section>
    </main>
  );
}