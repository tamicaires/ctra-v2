import Navbar from "@/components/sections/Navbar";
import EventsSection from "@/components/sections/EventsSection";
import Footer from "@/components/sections/Footer";

export default function EventosPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <EventsSection mode="full" />
      <Footer />
    </main>
  );
}
