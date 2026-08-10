import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import DoctorsAndSpecialities from "../components/DoctorsAndSpecialties";
import TrustBanner from "../components/TrustBanner";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home({ onOpenAppointment }) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <Hero onOpenAppointment={onOpenAppointment} />
      </section>

      <Services />

      <DoctorsAndSpecialities />

      <TrustBanner />

      <WhyChooseUs />
    </>
  );
}