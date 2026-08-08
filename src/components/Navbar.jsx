import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Calendar, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ onOpenAppointment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // ONLY HOME AND ABOUT
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200 py-3"
              : "bg-white/85 backdrop-blur-md py-4"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ================= LOGO ================= */}
            <NavLink
              to="/"
              className="flex items-center gap-3"
            >
              {/* Logo Icon */}
              <div
                className="
                  w-11 h-11
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#0D9488]
                  via-[#0284C7]
                  to-[#059669]
                  flex items-center justify-center
                  shadow-lg
                  shadow-[#0D9488]/20
                "
              >
                <span className="text-white text-xl font-black">
                  S
                </span>
              </div>

              {/* Logo Text */}
              <div>
                <h1 className="text-lg sm:text-xl font-black text-slate-900 leading-none">
                  Sakthi<span className="text-[#0D9488]">Dental</span>
                </h1>

                <p className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  International Hospital
                </p>
              </div>
            </NavLink>

            {/* ================= DESKTOP NAV ================= */}
            <nav
              className="
                hidden md:flex
                items-center
                gap-2
                px-2 py-2
                rounded-full
                bg-white/80
                backdrop-blur-md
                border border-slate-200
                shadow-sm
              "
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    px-6 py-2.5
                    rounded-full
                    text-sm
                    font-bold
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#0D9488] to-[#0284C7] text-white shadow-md"
                        : "text-slate-600 hover:text-[#0D9488] hover:bg-slate-100"
                    }
                    `
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* ================= DESKTOP CTA ================= */}
            <div className="hidden md:flex items-center gap-3">

              <a
                href="tel:+919876543210"
                className="
                  flex items-center gap-2
                  text-sm
                  font-bold
                  text-slate-700
                  hover:text-[#0D9488]
                  transition
                "
              >
                <span
                  className="
                    p-2
                    rounded-full
                    bg-[#0D9488]/10
                    text-[#0D9488]
                  "
                >
                  <PhoneCall className="w-4 h-4" />
                </span>

                +91 98765 43210
              </a>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenAppointment}
                className="
                  px-5 py-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#0D9488]
                  via-[#0284C7]
                  to-[#059669]
                  text-white
                  font-bold
                  text-xs
                  uppercase
                  tracking-wider
                  shadow-lg
                  shadow-[#0D9488]/25
                  flex items-center gap-2
                "
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </motion.button>
            </div>

            {/* ================= MOBILE ================= */}
            <div className="flex md:hidden items-center gap-2">

              <button
                onClick={onOpenAppointment}
                className="
                  p-2.5
                  rounded-full
                  bg-gradient-to-r
                  from-[#0D9488]
                  to-[#0284C7]
                  text-white
                  shadow-md
                "
                aria-label="Book Appointment"
              >
                <Calendar className="w-4 h-4" />
              </button>

              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="
                  p-2.5
                  rounded-xl
                  bg-white
                  border border-slate-200
                  text-slate-700
                  shadow-sm
                "
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            className="
              fixed
              top-[75px]
              left-0
              right-0
              z-40
              px-4
              md:hidden
            "
          >
            <div
              className="
                rounded-3xl
                bg-white/95
                backdrop-blur-xl
                border border-slate-200
                shadow-2xl
                p-5
              "
            >

              {/* Mobile Links */}
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `
                      block
                      px-5 py-4
                      rounded-2xl
                      text-sm
                      font-bold
                      ${
                        isActive
                          ? "bg-[#0D9488]/10 text-[#0D9488]"
                          : "text-slate-700 hover:bg-slate-50"
                      }
                      `
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Phone */}
              <a
                href="tel:+919876543210"
                className="
                  mt-4
                  flex items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-2xl
                  bg-slate-100
                  text-slate-700
                  font-bold
                  text-xs
                "
              >
                <PhoneCall className="w-4 h-4 text-[#0D9488]" />
                +91 98765 43210
              </a>

              {/* Mobile Appointment */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);

                  if (onOpenAppointment) {
                    onOpenAppointment();
                  }
                }}
                className="
                  mt-3
                  w-full
                  py-3.5
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#0D9488]
                  to-[#0284C7]
                  text-white
                  font-bold
                  text-xs
                  uppercase
                  tracking-wider
                "
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </span>
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}