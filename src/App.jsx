import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

export default function App() {
  // =========================================================
  // APPOINTMENT MODAL STATE
  // =========================================================

  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // Open appointment modal
  const handleOpenAppointment = () => {
    setAppointmentOpen(true);
  };

  // Close appointment modal
  const handleCloseAppointment = () => {
    setAppointmentOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#1E1B4B]">

      {/* =====================================================
          SCROLL TO TOP
      ===================================================== */}

      <ScrollToTop />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar
        onOpenAppointment={handleOpenAppointment}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main>
        <Routes>

          {/* =================================================
              HOME
          ================================================= */}

          <Route
            path="/"
            element={
              <Home
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          {/* =================================================
              ABOUT
          ================================================= */}

          <Route
            path="/about"
            element={
              <About
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          {/* =================================================
              TREATMENTS
          ================================================= */}

          <Route
            path="/treatments"
            element={
              <Treatments
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          {/* =================================================
              PRIVACY
          ================================================= */}

          <Route
            path="/privacy"
            element={<Privacy />}
          />

          {/* =================================================
              CONTACT
          ================================================= */}

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =================================================
              FALLBACK
          ================================================= */}

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

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer
        onOpenAppointment={handleOpenAppointment}
      />

      {/* =====================================================
          EXISTING APPOINTMENT MODAL
          DO NOT CREATE ANOTHER MODAL
      ===================================================== */}

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={handleCloseAppointment}
      />

    </div>
  );
}