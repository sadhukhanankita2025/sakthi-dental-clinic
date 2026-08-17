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
  Mail,
  House,
  Info,
  Stethoscope,
} from "lucide-react";

export default function Navbar({ onOpenAppointment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

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
  // CURSOR SPOTLIGHT
  // =====================================================

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
      icon: House,
    },
    {
      name: "About",
      path: "/about",
      icon: Info,
    },
    {
      name: "Treatments",
      path: "/treatments",
      icon: Stethoscope,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail,
    },
    {
      name: "Privacy",
      path: "/privacy",
      icon: ShieldCheck,
    },
  ];

  // =====================================================
  // APPOINTMENT HANDLER
  // =====================================================

  const handleAppointment = () => {
    if (onOpenAppointment) {
      onOpenAppointment();
    }
  };

  return (
    <>
      {/* =====================================================
          CURSOR SPOTLIGHT
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          -z-10
          h-80
          w-80
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass-nav border-purple-100/60 py-3.5 shadow-lg shadow-purple-900/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              className="group flex items-center gap-3"
            >
              {/* LOGO */}

              <motion.div
                initial={{
                  rotateY: -30,
                  rotateX: 20,
                  opacity: 0,
                }}
                animate={{
                  rotateY: 0,
                  rotateX: 0,
                  opacity: 1,
                }}
                whileHover={{
                  rotateY: 12,
                  rotateX: -8,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  relative
                  h-11
                  w-11
                  rounded-2xl
                  bg-linear-to-tr
                  from-purple-600
                  via-indigo-600
                  to-teal-500
                  p-0.5
                  shadow-xl
                  shadow-purple-500/20
                "
              >
                {/* LOGO SHINE */}

                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-5
                    skew-x-12
                    bg-white/30
                    blur-md
                  "
                />

                <div
                  className="
                    relative
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-white
                  "
                >
                  <motion.svg
                    whileHover={{
                      scale: 1.15,
                      rotate: -8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                    }}
                    className="
                      h-6
                      w-6
                      fill-current
                      text-purple-600
                    "
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12,2 C8,2 5,4.5 5,8 C5,10.5 6,13 7,16 C8,19 9,22 10.5,22 C11.5,22 11.8,20 12,20 C12.2,20 12.5,22 13.5,22 C15,22 16,19 17,16 C18,13 19,10.5 19,8 C19,4.5 16,2 12,2 Z" />
                  </motion.svg>
                </div>
              </motion.div>

              {/* BRAND TEXT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
                className="flex flex-col"
              >
                <span
                  className="
                    text-xl
                    font-black
                    leading-tight
                    tracking-tight
                    text-slate-900
                    sm:text-2xl
                  "
                >
                  Sakthi
                  <span className="text-purple-600">
                    {" "}Dental
                  </span>
                </span>

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-purple-500/80
                  "
                >
                  International Hospital
                </span>
              </motion.div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                hidden
                items-center
                gap-1
                rounded-full
                border
                border-white/70
                bg-white/60
                px-2
                py-2
                shadow-[0_8px_30px_rgba(88,28,135,0.08)]
                backdrop-blur-xl
                lg:flex
              "
            >
              {navLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <motion.div
                    key={link.path}
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      className="
                        group
                        relative
                        block
                        rounded-full
                        px-4
                        py-2
                      "
                    >
                      {({ isActive }) => (
                        <>
                          {/* ACTIVE PILL */}

                          {isActive && (
                            <motion.div
                              layoutId="liquidActive"
                              className="
                                absolute
                                inset-0
                                rounded-full
                                bg-linear-to-r
                                from-purple-600
                                via-indigo-600
                                to-teal-500
                                shadow-lg
                                shadow-purple-500/20
                              "
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                              }}
                            />
                          )}

                          {/* HOVER GLASS */}

                          {!isActive && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                scale: 0.8,
                              }}
                              whileHover={{
                                opacity: 1,
                                scale: 1,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                              className="
                                absolute
                                inset-0
                                rounded-full
                                bg-white/80
                                shadow-inner
                              "
                            />
                          )}

                          {/* NAV CONTENT */}

                          <span
                            className={`relative z-10 flex items-center gap-2 text-xs font-bold transition-colors duration-300 ${
                              isActive
                                ? "text-white"
                                : "text-slate-600 group-hover:text-purple-700"
                            }`}
                          >
                            <motion.span
                              whileHover={{
                                y: -2,
                                scale: 1.15,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                              }}
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </motion.span>

                            {link.name}
                          </span>

                          {/* UNDERLINE */}

                          {!isActive && (
                            <motion.span
                              initial={{
                                width: 0,
                                opacity: 0,
                              }}
                              whileHover={{
                                width: "60%",
                                opacity: 1,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="
                                absolute
                                bottom-1
                                left-1/2
                                h-0.5
                                -translate-x-1/2
                                rounded-full
                                bg-purple-500
                              "
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                );
              })}
            </nav>

            {/* =================================================
                DESKTOP RIGHT ACTIONS
            ================================================= */}

            <div className="hidden items-center gap-3 lg:flex">

              {/* PHONE */}

              <motion.a
                href="tel:+919876543210"
                whileHover={{
                  scale: 1.03,
                  x: -2,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  text-xs
                  font-bold
                  text-slate-700
                  transition-colors
                  hover:text-purple-700
                "
              >
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    rounded-full
                    bg-purple-100
                    p-2
                    text-purple-700
                  "
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                </motion.div>

                <span>
                  +91 98765 43210
                </span>
              </motion.a>

              {/* =================================================
                  DESKTOP APPOINTMENT BUTTON
              ================================================= */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  boxShadow:
                    "0 15px 35px rgba(124,58,237,0.30)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                onClick={handleAppointment}
                className="
                  group
                  relative
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  bg-linear-to-r
                  from-purple-600
                  via-indigo-600
                  to-teal-500
                  px-5
                  py-3
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                  shadow-lg
                  shadow-purple-500/25
                "
              >
                {/* ANIMATED GRADIENT */}

                <motion.span
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "100% 50%",
                      "0% 50%",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-0
                    bg-linear-to-r
                    from-purple-600
                    via-indigo-600
                    to-teal-500
                    bg-size-[200%_200%]
                  "
                />

                {/* SOFT GLASS */}

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-white/5
                  "
                />

                {/* SHINE */}

                <motion.span
                  initial={{
                    x: "-150%",
                  }}
                  whileHover={{
                    x: "250%",
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-10
                    skew-x-12
                    bg-white/30
                    blur-md
                  "
                />

                {/* ICON */}

                <motion.span
                  whileHover={{
                    rotate: 15,
                    scale: 1.15,
                  }}
                  className="relative z-10"
                >
                  <Calendar className="h-4 w-4" />
                </motion.span>

                {/* TEXT */}

                <span className="relative z-10">
                  Book Appointment
                </span>
              </motion.button>
            </div>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}

            <div className="flex items-center gap-2 lg:hidden">

              {/* PHONE */}

              <motion.a
                href="tel:+919876543210"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  rounded-full
                  bg-purple-100
                  p-2
                  text-purple-700
                  shadow-sm
                "
                aria-label="Call Sakthi Dental"
              >
                <PhoneCall className="h-4 w-4" />
              </motion.a>

              {/* MOBILE APPOINTMENT */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={handleAppointment}
                className="
                  relative
                  overflow-hidden
                  rounded-full
                  bg-purple-600
                  p-2
                  text-white
                  shadow-md
                "
                aria-label="Book Appointment"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-white/60
                  "
                />

                <Calendar className="relative z-10 h-4 w-4" />
              </motion.button>

              {/* MENU */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="
                  rounded-2xl
                  border
                  border-purple-100
                  bg-white/90
                  p-2.5
                  text-slate-800
                  shadow-sm
                  focus:outline-none
                "
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.5,
                      }}
                    >
                      <X className="h-6 w-6 text-purple-950" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.5,
                      }}
                    >
                      <Menu className="h-6 w-6 text-purple-950" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* BACKDROP */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="
                fixed
                inset-0
                z-20
                bg-slate-950/20
                backdrop-blur-sm
                lg:hidden
              "
            />

            {/* MOBILE MENU */}

            <motion.div
              initial={{
                opacity: 0,
                y: -30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 28,
              }}
              className="
                fixed
                inset-x-0
                top-18
                z-30
                p-4
                lg:hidden
              "
            >
              <div
                className="
                  space-y-4
                  rounded-3xl
                  border
                  border-purple-100
                  bg-white/95
                  p-6
                  shadow-2xl
                  backdrop-blur-2xl
                "
              >
                {/* MOBILE NAVIGATION */}

                <div className="flex flex-col space-y-1.5">

                  {navLinks.map((link, index) => {
                    const Icon = link.icon;

                    return (
                      <motion.div
                        key={link.path}
                        initial={{
                          opacity: 0,
                          x: -25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.07,
                          duration: 0.35,
                        }}
                      >
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `group relative flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                              isActive
                                ? "bg-purple-100/80 text-purple-800"
                                : "text-slate-700 hover:bg-purple-50/50"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span className="flex items-center gap-3">

                                {/* ICON */}

                                <motion.span
                                  whileHover={{
                                    scale: 1.2,
                                    rotate: -5,
                                  }}
                                  className={`rounded-xl p-2 ${
                                    isActive
                                      ? "bg-purple-200"
                                      : "bg-purple-50"
                                  }`}
                                >
                                  <Icon className="h-4 w-4 text-purple-600" />
                                </motion.span>

                                {link.name}
                              </span>

                              {/* ARROW */}

                              <motion.span
                                whileHover={{
                                  x: 5,
                                }}
                              >
                                <ChevronRight className="h-4 w-4 opacity-50" />
                              </motion.span>
                            </>
                          )}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>

                {/* =================================================
                    MOBILE ACTIONS
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                  className="
                    space-y-3
                    border-t
                    border-purple-100
                    pt-4
                  "
                >
                  {/* PHONE */}

                  <motion.a
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href="tel:+919876543210"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-purple-50
                      py-3
                      text-xs
                      font-semibold
                      text-purple-800
                    "
                  >
                    <PhoneCall className="h-4 w-4 text-purple-600" />

                    <span>
                      +91 98765 43210
                    </span>
                  </motion.a>

                  {/* APPOINTMENT */}

                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleAppointment();
                    }}
                    className="
                      relative
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-2
                      overflow-hidden
                      rounded-2xl
                      bg-linear-to-r
                      from-purple-600
                      via-indigo-600
                      to-teal-600
                      px-6
                      py-3.5
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                      shadow-lg
                      shadow-purple-500/25
                    "
                  >
                    {/* SHINE */}

                    <motion.span
                      animate={{
                        x: ["-150%", "250%"],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="
                        absolute
                        inset-y-0
                        w-1/3
                        skew-x-12
                        bg-white/20
                      "
                    />

                    <Calendar className="relative z-10 h-4 w-4" />

                    <span className="relative z-10">
                      Book Appointment
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}