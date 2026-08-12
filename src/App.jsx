import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import FAQs from "./pages/FAQs";

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => {
    setAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#1E1B4B]">
      <Navbar />

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
            element={<About />}
          />

          {/* Treatments */}
          <Route
            path="/treatments"
            element={<Treatments />}
          />

          {/* FAQs */}
          <Route
            path="/faqs"
            element={
              <FAQs
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />
        </Routes>
      </main>

      <Footer />

      {/* Appointment modal */}
      {/* Add AppointmentModal here when you are ready */}
    </div>
  );
}