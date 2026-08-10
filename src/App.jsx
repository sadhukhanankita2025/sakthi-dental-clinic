import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#1E1B4B]">
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenAppointment={() => setAppointmentOpen(true)}
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route path="/treatments" element={<Treatments />} />
        </Routes>
      </main>

      <Footer />

      {/* Appointment modal can be added here later */}
    </div>
  );
}