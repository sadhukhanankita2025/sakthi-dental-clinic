import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home({ onOpenAppointment }) {
  return (
    <div className="min-h-screen">
      <Navbar onOpenAppointment={onOpenAppointment} />

      <main>
        <Hero onOpenAppointment={onOpenAppointment} />
      </main>
    </div>
  );
}