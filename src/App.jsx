import React, { useEffect, useState } from "react";
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
  // =====================================================
  // APPOINTMENT MODAL STATE
  // =====================================================
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // =====================================================
  // OPEN APPOINTMENT MODAL
  // Works for Hero Button, Doctor Cards, Treatments, CTA
  // =====================================================
  const handleOpenAppointment = (doctorOrTreatment = null, treatment = "") => {
    // If first argument is a doctor object
    if (
      doctorOrTreatment &&
      typeof doctorOrTreatment === "object" &&
      doctorOrTreatment.name
    ) {
      setSelectedDoctor(doctorOrTreatment);
      setSelectedTreatment(treatment || "");
    } else {
      // If first argument is a treatment string
      setSelectedDoctor(null);
      setSelectedTreatment(doctorOrTreatment || "");
    }

    setAppointmentOpen(true);
  };

  // =====================================================
  // CLOSE APPOINTMENT MODAL
  // =====================================================
  const handleCloseAppointment = () => {
    setAppointmentOpen(false);
    setSelectedDoctor(null);
    setSelectedTreatment("");
  };

  // =====================================================
  // LISTEN FOR CUSTOM EVENT (Treatment Cards)
  // =====================================================
  useEffect(() => {
    const openAppointment = (event) => {
      const doctor = event?.detail?.doctor || null;
      const treatment = event?.detail?.treatment || "";

      handleOpenAppointment(doctor || treatment, treatment);
    };

    window.addEventListener("openAppointment", openAppointment);

    return () => {
      window.removeEventListener("openAppointment", openAppointment);
    };
  }, []);

  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = appointmentOpen ? "hidden" : "auto";
  }, [appointmentOpen]);

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#1E1B4B]">
      <ScrollToTop />

      {/* ================= NAVBAR ================= */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      {/* ================= ROUTES ================= */}
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home onOpenAppointment={handleOpenAppointment} />}
          />

          <Route
            path="/about"
            element={<About onOpenAppointment={handleOpenAppointment} />}
          />

          <Route
            path="/treatments"
            element={<Treatments onOpenAppointment={handleOpenAppointment} />}
          />

          <Route path="/privacy" element={<Privacy />} />

          <Route
            path="/contact"
            element={<Contact onOpenAppointment={handleOpenAppointment} />}
          />

          {/* Fallback */}
          <Route
            path="*"
            element={<Home onOpenAppointment={handleOpenAppointment} />}
          />
        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer onOpenAppointment={handleOpenAppointment} />

      {/* ================= APPOINTMENT MODAL ================= */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={handleCloseAppointment}
        selectedDoctor={selectedDoctor}
        selectedTreatment={selectedTreatment}
      />
    </div>
  );
}