import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EventsSection } from "@/components/EventsSection";
import { CultureSection } from "@/components/CultureSection";
import { CommunitySection } from "@/components/CommunitySection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <EventsSection />
        <CultureSection />
        <CommunitySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
