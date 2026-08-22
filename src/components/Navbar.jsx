import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import {
  Menu,
  X,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Mail,
  House,
  Info,
  Stethoscope,
  User,
  LogOut,
  FileText,
  ChevronDown,
} from "lucide-react";

export default function Navbar({ onOpenAppointment, onOpenAuth, isLoggedIn, user, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const location = useLocation();

  // =====================================================
  // SCROLL DETECTION
  // =====================================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =====================================================
  // CLOSE MENUS ON ROUTE CHANGE OR OUTSIDE CLICK
  // =====================================================
  useEffect(() => {
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // =====================================================
  // NAVIGATION LINKS
  // =====================================================
  const navLinks = [
    { name: "Home", path: "/", icon: House },
    { name: "About", path: "/about", icon: Info },
    { name: "Treatments", path: "/treatments", icon: Stethoscope },
    { name: "Contact", path: "/contact", icon: Mail },
    { name: "Privacy", path: "/privacy", icon: ShieldCheck },
  ];

  const handleAppointment = () => {
    if (onOpenAppointment) onOpenAppointment();
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            animate={{
              y: scrolled ? -2 : 0,
              scale: scrolled ? 0.985 : 1,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="relative flex min-h-18 items-center rounded-full border border-purple-100/80 bg-white/90 backdrop-blur-md px-4 shadow-[0_12px_40px_rgba(107,33,168,0.08)] transition-shadow duration-500 hover:shadow-[0_16px_45px_rgba(107,33,168,0.12)] sm:px-5 lg:px-6"
          >
            {/* LOGO */}
            <Link to="/" className="relative z-10 flex shrink-0 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex h-13 w-37.5 items-center justify-center overflow-hidden rounded-2xl bg-transparent sm:h-14 sm:w-42.5"
              >
                <img
                  src="/src/assets/SDC%20Logo.png"
                  alt="Sakthi Dental Clinic"
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </Link>

            {/* DIVIDER */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="mx-4 hidden h-8 w-px bg-purple-100 lg:block"
            />

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden flex-1 items-center justify-center gap-1.5 lg:flex">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.45, type: "spring" }}
                  >
                    <NavLink
                      to={link.path}
                      className="group relative block rounded-full px-4 py-2.5"
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <motion.div
                              layoutId="navbar-active"
                              className="absolute inset-0 rounded-full bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 shadow-[0_5px_15px_rgba(107,33,168,0.25)]"
                              transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            />
                          )}
                          {!isActive && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2 }}
                              className="absolute inset-0 rounded-full bg-purple-50/80"
                            />
                          )}
                          <span
                            className={`relative z-10 flex items-center gap-2 whitespace-nowrap text-[13px] font-bold transition-colors duration-300 ${
                              isActive ? "text-white" : "text-slate-600 group-hover:text-purple-700"
                            }`}
                          >
                            <motion.span whileHover={{ scale: 1.2, rotate: -8 }} transition={{ type: "spring", stiffness: 400 }}>
                              <Icon className="h-4 w-4" />
                            </motion.span>
                            {link.name}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                );
              })}
            </nav>

            {/* RIGHT ACTIONS (DESKTOP) */}
            <div className="relative z-10 ml-auto hidden items-center gap-3 lg:flex">
              {/* AUTH SECTION: LOGIN/SIGNUP OR PROFILE DROPDOWN */}
              {isLoggedIn ? (
                <div className="relative" ref={dropdownRef}>
                  <motion.button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 rounded-full bg-purple-50/80 border border-purple-200/60 px-3 py-1.5 shadow-sm transition-all hover:bg-purple-100/60"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
                      {user?.name ? user.name.slice(0, 2).toUpperCase() : "SS"}
                    </div>
                    <span className="text-xs font-bold text-purple-900 max-w-22.5 truncate">
                      {user?.name || "Profile"}
                    </span>
                    <ChevronDown className={`h-3.5 w-3.5 text-purple-700 transition-transform duration-200 ${profileDropdownOpen ? "rotate-180" : ""}`} />
                  </motion.button>

                  {/* DROP DOWN MENU */}
                  <AnimatePresence>
                    {profileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 rounded-2xl border border-purple-100 bg-white/95 p-2 shadow-xl backdrop-blur-md"
                      >
                        <Link
                          to="/appointments"
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-700"
                        >
                          <Calendar className="h-4 w-4 text-purple-600" />
                          My Appointments
                        </Link>
                        <Link
                          to="/records"
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-700"
                        >
                          <FileText className="h-4 w-4 text-purple-600" />
                          Reports & Prescription
                        </Link>
                        <div className="my-1 h-px bg-purple-50" />
                        <button
                          onClick={() => {
                            setProfileDropdownOpen(false);
                            if (onLogout) onLogout();
                          }}
                          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50"
                        >
                          <LogOut className="h-4 w-4" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  onClick={onOpenAuth}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full bg-purple-50/80 border border-purple-100 px-4 py-2 text-xs font-bold text-purple-700 shadow-sm transition-all hover:bg-purple-100 hover:shadow"
                >
                  <User className="h-4 w-4" />
                  Login / Signup
                </motion.button>
              )}

              {/* APPOINTMENT BUTTON */}
              <motion.button
                type="button"
                onClick={handleAppointment}
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 12px 25px rgba(107,33,168,0.25)" }}
                whileTap={{ scale: 0.96 }}
                className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(107,33,168,0.2)]"
              >
                <Calendar className="relative z-10 h-4 w-4" />
                <span className="relative z-10">Book Appointment</span>
              </motion.button>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="ml-auto flex items-center gap-2 lg:hidden">
              {!isLoggedIn ? (
                <motion.button
                  onClick={onOpenAuth}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-700"
                  aria-label="Login / Signup"
                >
                  <User className="h-4 w-4" />
                </motion.button>
              ) : (
                <motion.button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white shadow-sm"
                  aria-label="Profile"
                >
                  {user?.name ? user.name.slice(0, 2).toUpperCase() : "SS"}
                </motion.button>
              )}

              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-100 bg-white text-slate-700 shadow-sm"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            className="fixed left-4 right-4 top-23 z-50 lg:hidden"
          >
            <div className="rounded-3xl border border-purple-100 bg-white p-4 shadow-2xl">
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all ${
                          isActive ? "bg-purple-50 text-purple-700" : "text-slate-700 hover:bg-purple-50/50"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="flex items-center gap-3">
                            <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${isActive ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-600"}`}>
                              <Icon className="h-4 w-4" />
                            </span>
                            {link.name}
                          </span>
                          <ChevronRight className="h-4 w-4 opacity-40" />
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>

              {isLoggedIn && (
                <>
                  <div className="my-3 h-px bg-purple-50" />
                  <div className="space-y-1">
                    <Link to="/appointments" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-purple-50">
                      <Calendar className="h-4 w-4 text-purple-600" /> My Appointments
                    </Link>
                    <Link to="/records" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-purple-50">
                      <FileText className="h-4 w-4 text-purple-600" /> Reports & Prescription
                    </Link>
                    <button onClick={onLogout} className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50">
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                </>
              )}

              <div className="my-4 h-px bg-purple-50" />

              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAppointment();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}