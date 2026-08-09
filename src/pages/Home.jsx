import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBanner from '../components/TrustBanner';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Home({ onOpenAppointment }) {
  return (
    <div className="min-h-screen">
      <Navbar onOpenAppointment={onOpenAppointment} />

      <main>
        <Hero onOpenAppointment={onOpenAppointment} />
      </main>
      <TrustBanner />
      <WhyChooseUs />
    </div>
  );
}