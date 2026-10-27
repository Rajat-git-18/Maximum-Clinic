import { Booking } from "@/components/booking";
import { BookingProvider } from "@/components/booking-provider";
import { Doctors } from "@/components/doctors";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { QuickActions } from "@/components/quick-actions";
import { Reviews } from "@/components/reviews";
import { Specialties } from "@/components/specialties";
import { TopBar } from "@/components/top-bar";
import { TrustBand } from "@/components/trust-band";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function HomePage() {
  return (
    <BookingProvider>
      <div id="home">
        <TopBar />
        <Header />
        <main id="main">
          <Hero />
          <QuickActions />
          <TrustBand />
          <Specialties />
          <Reviews />
          <Doctors />
          <Booking />
          <Location />
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
    </BookingProvider>
  );
}
