import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ScrollingBanner from "@/components/sections/scrolling-banner";
import FeaturesGrid from "@/components/sections/features-grid";
import NurtureRelationshipsSection from "@/components/sections/nurture-relationships-section";
import SavingTimeSection from "@/components/sections/saving-time-section";
import AIAssistantSection from "@/components/sections/ai-assistant-section";
import MeowCTASection from "@/components/sections/meow-cta-section";
import NewsletterSection from "@/components/sections/newsletter-section";
import DreadingChangeSection from "@/components/sections/dreading-change-section";
import SingleSoftwareCTASection from "@/components/sections/single-software-cta-section";
import DiscoverSection from "@/components/sections/discover-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FeaturedInSection from "@/components/sections/featured-in-section";
import GetStartedSection from "@/components/sections/get-started-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ScrollingBanner />
        <FeaturesGrid />
        <NurtureRelationshipsSection />
        <SavingTimeSection />
        <AIAssistantSection />
        <MeowCTASection />
        <NewsletterSection />
        <DreadingChangeSection />
        <SingleSoftwareCTASection />
        <DiscoverSection />
        <TestimonialsSection />
        <FeaturedInSection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
}
