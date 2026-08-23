import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";
import LoginModal from "./components/LoginModal";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import MyAppointments from "./pages/MyAppointments";
import Reports from "./pages/Reports";

// IMPORT DOCTOR DASHBOARD PAGES
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorOverview from "./pages/DoctorOverview";
import DoctorSchedule from "./pages/DoctorSchedule";
import AppointmentHistory from "./pages/AppointmentHistory"; // <-- 1. IMPORT HISTORY PAGE
import DoctorUploadReport from "./pages/DoctorUploadReport";
import ManageDoctors from "./pages/ManageDoctors";

export default function App() {
  const navigate = useNavigate();

  // =====================================================
  // APPOINTMENT MODAL STATE
  // =====================================================
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // =====================================================
  // AUTHENTICATION MODAL & PERSISTENT USER STATE
  // =====================================================
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("sakthi_isLoggedIn") === "true";
  });
  
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("sakthi_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("sakthi_user", JSON.stringify(userData));
    localStorage.setItem("sakthi_isLoggedIn", "true");
    setAuthModalOpen(false);

    if (userData.role === "doctor" || userData.email === "anupriya@sakthidental.com") {
      navigate("/doctor");
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("sakthi_user");
    localStorage.removeItem("sakthi_isLoggedIn");
    navigate("/");
  };

  const handleOpenAppointment = (doctorOrTreatment = null, treatment = "") => {
    if (
      doctorOrTreatment &&
      typeof doctorOrTreatment === "object" &&
      doctorOrTreatment.name
    ) {
      setSelectedDoctor(doctorOrTreatment);
      setSelectedTreatment(treatment || "");
    } else {
      setSelectedDoctor(null);
      setSelectedTreatment(doctorOrTreatment || "");
    }

    setAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setAppointmentOpen(false);
    setSelectedDoctor(null);
    setSelectedTreatment("");
  };

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

  useEffect(() => {
    document.body.style.overflow = (appointmentOpen || authModalOpen) ? "hidden" : "auto";
  }, [appointmentOpen, authModalOpen]);

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#1E1B4B]">
      <ScrollToTop />

      <Navbar
        onOpenAppointment={handleOpenAppointment}
        onOpenAuth={() => setAuthModalOpen(true)}
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={handleLogout}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/about" element={<About onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/treatments" element={<Treatments onOpenAppointment={handleOpenAppointment} />} />
          
          <Route
            path="/appointments"
            element={
              <MyAppointments
                isLoggedIn={isLoggedIn}
                user={user}
                onOpenAuth={() => setAuthModalOpen(true)}
                onOpenAppointment={handleOpenAppointment}
              />
            }
          />

          <Route
            path="/records"
            element={
              <Reports
                isLoggedIn={isLoggedIn}
                user={user}
                onOpenAuth={() => setAuthModalOpen(true)}
              />
            }
          />

          {/* ================= DOCTOR DASHBOARD ROUTES ================= */}
          <Route path="/doctor" element={<DoctorDashboard onLogout={handleLogout} />}>
            <Route index element={<DoctorOverview />} />
            <Route path="schedule" element={<DoctorSchedule />} />
            <Route path="history" element={<AppointmentHistory />} /> {/* <-- 2. ROUTE ADDED HERE */}
            <Route path="upload" element={<DoctorUploadReport />} />
            <Route path="doctors" element={<ManageDoctors />} />
          </Route>

          <Route path="/privacy" element={<Privacy />} />

          <Route
            path="/contact"
            element={
              <Contact
                onOpenAppointment={handleOpenAppointment}
                isLoggedIn={isLoggedIn}
                onOpenAuth={() => setAuthModalOpen(true)}
              />
            }
          />

          <Route path="*" element={<Home onOpenAppointment={handleOpenAppointment} />} />
        </Routes>
      </main>

      <Footer onOpenAppointment={handleOpenAppointment} />

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={handleCloseAppointment}
        selectedDoctor={selectedDoctor}
        selectedTreatment={selectedTreatment}
        isLoggedIn={isLoggedIn}
        user={user} 
        onOpenAuth={() => setAuthModalOpen(true)}
      />

      <LoginModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <CookieConsent />
    </div>
  );
}