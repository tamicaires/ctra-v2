import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import ModalitiesSection from "@/components/sections/ModalitiesSection";
import VideoLibrarySection from "@/components/sections/VideoLibrarySection";
import MastersSection from "@/components/sections/MastersSection";
import TransformationSection from "@/components/sections/TransformationSection";
import ChampionsSection from "@/components/sections/ChampionsSection";
import MediaSection from "@/components/sections/MediaSection";
import EventsSection from "@/components/sections/EventsSection";
import FacilitySection from "@/components/sections/FacilitySection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import FAQSection from "@/components/sections/FAQSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Scroll Progress Bar - será adicionado depois */}

      {/* Floating Particles Background - será adicionado depois */}

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Showcase Section */}
      <ShowcaseSection />

      {/* Modalidades Section */}
      <ModalitiesSection />

      {/* Masters Section */}
      <MastersSection />

      {/* Transformation Section */}
      <TransformationSection />

      {/* Champions Section */}
      <ChampionsSection />

      {/* Events Section - Próximos Eventos */}
      <EventsSection mode="preview" />

      {/* Video Library Section - Netflix Style */}
      <VideoLibrarySection />


      {/* Media Section - CTRA na Mídia */}
      <MediaSection />


      {/* Facility Section */}
      {/* <FacilitySection /> */}

      {/* Process Section - How to Start */}
      <ProcessSection />

      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* Why Us Section - Differentials */}
      <WhyUsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Guarantee Section - 30 Day Money Back */}
      <GuaranteeSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
