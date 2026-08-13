import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";

import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => {
    setAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#1E1B4B]">

      <Navbar onOpenAppointment={handleOpenAppointment} />

      <main>
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <Home
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          {/* About */}
          <Route
            path="/about"
            element={
              <About
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          {/* Treatments */}
          <Route
            path="/treatments"
            element={
              <Treatments
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />

      {/* Appointment modal can be added here */}
    </div>
  );
}