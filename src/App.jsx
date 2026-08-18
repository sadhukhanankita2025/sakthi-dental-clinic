import React, {
  useEffect,
  useState,
} from "react";

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
  const [appointmentOpen, setAppointmentOpen] =
    useState(false);

  const [selectedTreatment, setSelectedTreatment] =
    useState("");

  // =====================================================
  // OPEN APPOINTMENT
  // =====================================================

  const handleOpenAppointment = (treatment = "") => {
    console.log(
      "APP: Opening appointment:",
      treatment
    );

    setSelectedTreatment(treatment);
    setAppointmentOpen(true);
  };

  // =====================================================
  // CLOSE APPOINTMENT
  // =====================================================

  const handleCloseAppointment = () => {
    setAppointmentOpen(false);
    setSelectedTreatment("");
  };

  // =====================================================
  // LISTEN FOR TREATMENT CARD EVENT
  // =====================================================

  useEffect(() => {
    const openAppointment = (event) => {
      const treatment =
        event?.detail?.treatment || "";

      console.log(
        "APP EVENT: Appointment requested:",
        treatment
      );

      handleOpenAppointment(treatment);
    };

    window.addEventListener(
      "openAppointment",
      openAppointment
    );

    return () => {
      window.removeEventListener(
        "openAppointment",
        openAppointment
      );
    };
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-[#FAF5FF]
        text-[#1E1B4B]
      "
    >
      <ScrollToTop />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar
        onOpenAppointment={() =>
          handleOpenAppointment("")
        }
      />

      {/* =====================================================
          ROUTES
      ===================================================== */}

      <main>
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <Home
                onOpenAppointment={
                  handleOpenAppointment
                }
              />
            }
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <About
                onOpenAppointment={
                  handleOpenAppointment
                }
              />
            }
          />

          {/* TREATMENTS - FIXED */}
          <Route
            path="/treatments"
            element={
              <Treatments
                onOpenAppointment={
                  handleOpenAppointment
                }
              />
            }
          />

          {/* PRIVACY */}
          <Route
            path="/privacy"
            element={<Privacy />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* FALLBACK */}
          <Route
            path="*"
            element={
              <Home
                onOpenAppointment={
                  handleOpenAppointment
                }
              />
            }
          />

        </Routes>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer
        onOpenAppointment={() =>
          handleOpenAppointment("")
        }
      />

      {/* =====================================================
          SINGLE APPOINTMENT MODAL
      ===================================================== */}

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={handleCloseAppointment}
        selectedTreatment={
          selectedTreatment
        }
      />
    </div>
  );
}