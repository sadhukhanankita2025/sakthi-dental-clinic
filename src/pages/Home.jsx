import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TrustBanner from "../components/TrustBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home({ onOpenAppointment }) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <Hero onOpenAppointment={onOpenAppointment} />
      </section>
      <TrustBanner />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <CTA onOpenAppointment={onOpenAppointment} />
      

    </>
  );
}