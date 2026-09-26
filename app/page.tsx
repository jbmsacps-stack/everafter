import Countdown from "@/components/countdown/Countdown";
import Hero from "@/components/hero/Hero";
import VenueSection from "@/components/venue/VenueSection";
import OurStory from "@/components/story/OurStory";
import RSVP from "@/components/rsvp/RSVP";
import FAQ from "@/components/faq/FAQ";
import WeddingFooter from "@/components/footer/WeddingFooter";

export default function Home() {
  return (
    <main className="bg-[#FDFBF7]">
      <Hero />

      <Countdown />

      <VenueSection />

      <OurStory />

      <RSVP />

      <FAQ />

      <WeddingFooter />

    </main>
  );
}