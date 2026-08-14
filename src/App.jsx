import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppointmentModal from './components/AppointmentModal';
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => {
    setAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#1E1B4B]">

      {/* Scroll to top whenever the route changes */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Main Content */}
      <main>
        <Routes>

          {/* =========================
              HOME
          ========================= */}
          <Route
            path="/"
            element={
              <Home
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          {/* =========================
              ABOUT
          ========================= */}
          <Route
            path="/about"
            element={
              <About
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          {/* =========================
              TREATMENTS
          ========================= */}
          <Route
            path="/treatments"
            element={
              <Treatments
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          {/* =========================
              PRIVACY
          ========================= */}
          <Route
            path="/privacy"
            element={<Privacy />}
          />

          {/* =========================
              CONTACT
          ========================= */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =========================
              FALLBACK
          ========================= */}
          <Route
            path="*"
            element={
              <Home
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer
        onOpenAppointment={handleOpenAppointment}
      />

      {/* 
        Appointment Modal

        If you already have an AppointmentModal component,
        add it here.

        Example:

        <AppointmentModal
          isOpen={appointmentOpen}
          onClose={() => setAppointmentOpen(false)}
        />
      */}

    </div>
  );
}