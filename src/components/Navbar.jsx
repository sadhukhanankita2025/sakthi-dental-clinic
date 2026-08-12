import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Calendar,
  PhoneCall,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function Navbar({ onOpenAppointment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  // =====================================================
  // DETECT SCROLL
  // =====================================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // CLOSE MOBILE MENU WHEN ROUTE CHANGES
  // =====================================================
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // =====================================================
  // NAVIGATION LINKS
  // =====================================================
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Treatments",
      path: "/treatments",
    },
    {
      name: "Privacy",
      path: "/privacy",
    },
  ];

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3.5 shadow-sm border-purple-100/60"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* =================================================
                LOGO
            ================================================= */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              {/* Logo Icon */}
              <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-purple-600 via-indigo-600 to-teal-500 p-0.5 shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">

                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">

                  <svg
                    className="w-6 h-6 fill-current text-purple-600"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12,2 C8,2 5,4.5 5,8 C5,10.5 6,13 7,16 C8,19 9,22 10.5,22 C11.5,22 11.8,20 12,20 C12.2,20 12.5,22 13.5,22 C15,22 16,19 17,16 C18,13 19,10.5 19,8 C19,4.5 16,2 12,2 Z" />
                  </svg>

                </div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">

                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-tight">
                  Sakthi
                  <span className="text-purple-600">
                    {" "}Dental
                  </span>
                </span>

                <span className="text-[10px] font-bold text-purple-500/80 uppercase tracking-widest">
                  International Hospital
                </span>

              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}
            <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-100 shadow-sm">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20"
                        : "text-slate-600 hover:text-purple-900 hover:bg-purple-50/70"
                    }`
                  }
                >
                  <span className="flex items-center gap-1.5">
                    {link.name === "Privacy" && (
                      <ShieldCheck className="w-3.5 h-3.5" />
                    )}

                    {link.name}
                  </span>
                </NavLink>
              ))}

            </nav>

            {/* =================================================
                DESKTOP RIGHT ACTIONS
            ================================================= */}
            <div className="hidden lg:flex items-center gap-3">

              {/* Phone Number */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-purple-700 transition-colors px-3 py-2"
              >
                <div className="p-2 rounded-full bg-purple-100 text-purple-700">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>

                <span>
                  +91 98765 43210
                </span>
              </a>

              {/* Book Appointment */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenAppointment}
                className="px-5 py-2.5 rounded-full bg-linear-to-r from-purple-600 via-indigo-600 to-teal-600 text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-purple-500/20 flex items-center gap-2 cursor-pointer hover:shadow-xl transition-all"
              >
                <Calendar className="w-4 h-4" />

                <span>
                  Book Appointment
                </span>
              </motion.button>

            </div>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}
            <div className="lg:hidden flex items-center gap-2">

              {/* Mobile Phone */}
              <a
                href="tel:+919876543210"
                className="p-2 rounded-full bg-purple-100 text-purple-700 shadow-sm"
                aria-label="Call Sakthi Dental"
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              {/* Mobile Appointment */}
              <button
                onClick={onOpenAppointment}
                className="p-2 rounded-full bg-purple-600 text-white shadow-md"
                aria-label="Book Appointment"
              >
                <Calendar className="w-4 h-4" />
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="p-2.5 rounded-2xl bg-white/90 border border-purple-100 text-slate-800 shadow-sm focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-purple-950" />
                ) : (
                  <Menu className="w-6 h-6 text-purple-950" />
                )}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>

        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-x-0 top-18 z-30 p-4 lg:hidden"
          >

            <div className="rounded-3xl bg-white/95 backdrop-blur-2xl border border-purple-100 p-6 shadow-2xl space-y-4">

              {/* =================================================
                  MOBILE NAVIGATION LINKS
              ================================================= */}
              <div className="flex flex-col space-y-1.5">

                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-bold flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-purple-100/80 text-purple-800"
                          : "text-slate-700 hover:bg-purple-50/50"
                      }`
                    }
                  >
                    <span className="flex items-center gap-2">

                      {link.name === "Privacy" && (
                        <ShieldCheck className="w-4 h-4 text-purple-600" />
                      )}

                      {link.name}

                    </span>

                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}

              </div>

              {/* =================================================
                  MOBILE ACTIONS
              ================================================= */}
              <div className="pt-4 border-t border-purple-100 space-y-3">

                {/* Phone */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-purple-50 text-purple-800 font-semibold text-xs"
                >
                  <PhoneCall className="w-4 h-4 text-purple-600" />

                  <span>
                    +91 98765 43210
                  </span>
                </a>

                {/* Book Appointment */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);

                    if (onOpenAppointment) {
                      onOpenAppointment();
                    }
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl bg-linear-to-r from-purple-600 via-indigo-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />

                  <span>
                    Book Appointment
                  </span>
                </button>

              </div>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}