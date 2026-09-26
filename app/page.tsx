import Countdown from "@/components/countdown/Countdown";
import Hero from "@/components/hero/Hero";
import VenueSection from "@/components/venue/VenueSection";
import OurStory from "@/components/story/OurStory";

export default function Home() {
  return (
    <main className="bg-[#FDFBF7]">
      <Hero />

      <Countdown />

      <VenueSection />

      <OurStory />

    </main>
  );
}