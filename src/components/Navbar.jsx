import React, { useEffect, useState } from "react";
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

  const location = useLocation();

  // =====================================================
  // SCROLL DETECTION
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
  // APPOINTMENT
  // =====================================================

  const handleAppointment = () => {
    if (onOpenAppointment) {
      onOpenAppointment();
    }
  };

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <motion.header
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-0
          right-0
          top-0
          z-50
          px-4
          pt-5
          sm:px-6
          lg:px-8
        "
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            animate={{
              y: scrolled ? -2 : 0,
              scale: scrolled ? 0.985 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
            }}
            className="
              relative
              flex
              min-h-18
              items-center
              rounded-full
              border
              border-purple-100/80
              bg-white/90
              backdrop-blur-md
              px-4
              shadow-[0_12px_40px_rgba(107,33,168,0.08)]
              transition-shadow
              duration-500
              hover:shadow-[0_16px_45px_rgba(107,33,168,0.12)]
              sm:px-5
              lg:px-6
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              className="
                relative
                z-10
                flex
                shrink-0
                items-center
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.04,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  h-13
                  w-37.5
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  bg-transparent
                  sm:h-14
                  sm:w-42.5
                "
              >
                <img
                  src="/src/assets/SDC%20Logo.png"
                  alt="Sakthi Dental Clinic"
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </motion.div>
            </Link>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scaleY: 0,
              }}
              animate={{
                opacity: 1,
                scaleY: 1,
              }}
              transition={{
                delay: 0.45,
                duration: 0.4,
              }}
              className="
                mx-4
                hidden
                h-8
                w-px
                bg-purple-100
                lg:block
              "
            />

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                hidden
                flex-1
                items-center
                justify-center
                gap-1.5
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
                      y: -12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3 + index * 0.08,
                      duration: 0.45,
                      type: "spring",
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
                        py-2.5
                      "
                    >
                      {({ isActive }) => (
                        <>
                          {/* ACTIVE BACKGROUND */}

                          {isActive && (
                            <motion.div
                              layoutId="navbar-active"
                              className="
                                absolute
                                inset-0
                                rounded-full
                                bg-linear-to-r
                                from-purple-600
                                via-violet-600
                                to-indigo-600
                                shadow-[0_5px_15px_rgba(107,33,168,0.25)]
                              "
                              transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 25,
                              }}
                            />
                          )}

                          {/* HOVER BACKGROUND */}

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
                                bg-purple-50/80
                              "
                            />
                          )}

                          {/* CONTENT */}

                          <span
                            className={`
                              relative
                              z-10
                              flex
                              items-center
                              gap-2
                              whitespace-nowrap
                              text-[13px]
                              font-bold
                              transition-colors
                              duration-300
                              ${
                                isActive
                                  ? "text-white"
                                  : "text-slate-600 group-hover:text-purple-700"
                              }
                            `}
                          >
                            <motion.span
                              whileHover={{
                                scale: 1.2,
                                rotate: -8,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                              }}
                            >
                              <Icon className="h-4 w-4" />
                            </motion.span>

                            {link.name}
                          </span>

                          {/* SMALL UNDERLINE */}

                          {!isActive && (
                            <motion.span
                              initial={{
                                width: 0,
                              }}
                              whileHover={{
                                width: "55%",
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
                RIGHT ACTIONS
            ================================================= */}

            <div
              className="
                relative
                z-10
                ml-auto
                hidden
                items-center
                gap-3
                lg:flex
              "
            >
              {/* PHONE */}

              <motion.a
                href="tel:+919876543210"
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  px-3
                  py-2
                  text-xs
                  font-bold
                  text-slate-700
                  transition-colors
                  duration-300
                  hover:bg-purple-50
                  hover:text-purple-700
                "
              >
                <motion.span
                  whileHover={{
                    rotate: [0, -12, 12, -8, 0],
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-purple-100/70
                    text-purple-700
                  "
                >
                  <PhoneCall className="h-4 w-4" />
                </motion.span>

                <span className="hidden xl:block">
                  +91 98765 43210
                </span>
              </motion.a>

              {/* APPOINTMENT BUTTON */}

              <motion.button
                type="button"
                onClick={handleAppointment}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.75,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  boxShadow:
                    "0 12px 25px rgba(107,33,168,0.25)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
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
                  via-violet-600
                  to-indigo-600
                  px-5
                  py-3
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-wide
                  text-white
                  shadow-[0_8px_20px_rgba(107,33,168,0.2)]
                "
              >
                {/* MOVING SHINE */}

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
                    blur-sm
                  "
                />

                {/* ICON */}

                <motion.span
                  whileHover={{
                    rotate: 10,
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

            <div
              className="
                ml-auto
                flex
                items-center
                gap-2
                lg:hidden
              "
            >
              {/* PHONE */}

              <motion.a
                href="tel:+919876543210"
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-50
                  text-purple-700
                "
                aria-label="Call Sakthi Dental"
              >
                <PhoneCall className="h-4 w-4" />
              </motion.a>

              {/* APPOINTMENT */}

              <motion.button
                type="button"
                onClick={handleAppointment}
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-linear-to-r
                  from-purple-600
                  to-indigo-600
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
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-purple-100
                  bg-white
                  text-slate-700
                  shadow-sm
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
                      <X className="h-5 w-5" />
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
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

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
                z-40
                bg-slate-950/20
                backdrop-blur-sm
                lg:hidden
              "
            />

            {/* MOBILE PANEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: -30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
              }}
              className="
                fixed
                left-4
                right-4
                top-23
                z-50
                lg:hidden
              "
            >
              <div
                className="
                  rounded-3xl
                  border
                  border-purple-100
                  bg-white
                  p-4
                  shadow-2xl
                "
              >
                {/* MOBILE LINKS */}

                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;

                    return (
                      <motion.div
                        key={link.path}
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.06,
                        }}
                      >
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            px-4
                            py-3.5
                            text-sm
                            font-bold
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "bg-purple-50 text-purple-700"
                                : "text-slate-700 hover:bg-purple-50/50"
                            }
                            `
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span className="flex items-center gap-3">
                                <motion.span
                                  whileHover={{
                                    scale: 1.1,
                                    rotate: -5,
                                  }}
                                  className={`
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-xl
                                    ${
                                      isActive
                                        ? "bg-purple-600 text-white"
                                        : "bg-purple-50 text-purple-600"
                                    }
                                  `}
                                >
                                  <Icon className="h-4 w-4" />
                                </motion.span>

                                {link.name}
                              </span>

                              <motion.span
                                whileHover={{
                                  x: 5,
                                }}
                              >
                                <ChevronRight className="h-4 w-4 opacity-40" />
                              </motion.span>
                            </>
                          )}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>

                {/* DIVIDER */}

                <div className="my-4 h-px bg-purple-50" />

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
                    text-sm
                    font-bold
                    text-purple-700
                  "
                >
                  <PhoneCall className="h-4 w-4" />

                  +91 98765 43210
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
                    mt-3
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
                    to-indigo-600
                    py-3.5
                    text-sm
                    font-extrabold
                    uppercase
                    tracking-wide
                    text-white
                    shadow-lg
                  "
                >
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}