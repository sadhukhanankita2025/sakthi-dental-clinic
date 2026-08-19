import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

import sdcLogo from "../assets/SDC Logo.png";

export default function Footer({ onOpenAppointment }) {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Treatments", path: "/treatments" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
  ];

  const treatments = [
    "General Dentistry",
    "Dental Implants",
    "Orthodontics",
    "Teeth Whitening",
    "Root Canal Treatment",
    "Pediatric Dentistry",
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            -top-32
            h-96
            w-96
            rounded-full
            bg-purple-600/10
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            -right-32
            h-96
            w-96
            rounded-full
            bg-teal-500/10
            blur-3xl
          "
        />

        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-[#0f0b1f]" />
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* =================================================
              BRAND
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            {/* LOGO + BRAND */}

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              {/* LOGO */}

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="
                  relative
                  h-16
                  w-16
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                  border
                  border-purple-300/20
                  bg-white
                  p-1
                  shadow-xl
                  shadow-purple-500/20
                "
              >
                {/* GLOW */}

                <motion.div
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -inset-2
                    rounded-3xl
                    bg-purple-500/30
                    blur-xl
                  "
                />

                {/* LOGO IMAGE */}

                <img
                  src={sdcLogo}
                  alt="Sakthi Dental Clinic Logo"
                  className="
                    relative
                    z-10
                    h-full
                    w-full
                    rounded-xl
                    object-contain
                  "
                />

                {/* SHINE */}

                <motion.span
                  animate={{
                    x: ["-150%", "250%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    z-20
                    w-6
                    skew-x-12
                    bg-white/40
                    blur-md
                  "
                />
              </motion.div>

              {/* BRAND TEXT */}

              <div className="flex flex-col">
                <span className="text-xl font-black leading-tight tracking-tight text-white sm:text-2xl">
                  Sakthi
                  <span className="text-purple-400">
                    {" "}
                    Dental
                  </span>
                </span>

                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  International Hospital
                </span>
              </div>
            </Link>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Sakthi Dental Clinic, Hosur, provides trusted,
              modern dental care for women, children, and
              families—from routine check-ups to advanced
              treatments like implants and orthodontics—with
              a focus on comfort, quality, and compassionate
              care.
            </p>

            {/* APPOINTMENT BUTTON */}

            <motion.button
              type="button"
              onClick={() => {
                if (onOpenAppointment) {
                  onOpenAppointment();
                }
              }}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2
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
                shadow-purple-500/20
              "
            >
              Book Appointment

              <motion.span
                whileHover={{
                  x: 4,
                  y: -4,
                }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <h3 className="mb-5 text-sm font-black uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    to={link.path}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-slate-400
                      transition-colors
                      duration-300
                      hover:text-purple-400
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-purple-500
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* =================================================
              TREATMENTS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h3 className="mb-5 text-sm font-black uppercase tracking-wider text-white">
              Treatments
            </h3>

            <ul className="space-y-3">
              {treatments.map((treatment, index) => (
                <motion.li
                  key={treatment}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    to="/treatments"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-slate-400
                      transition-colors
                      duration-300
                      hover:text-teal-400
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-teal-400
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    {treatment}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <h3 className="mb-5 text-sm font-black uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="space-y-4">
              {/* ADDRESS */}

              <motion.div
                whileHover={{
                  x: 4,
                }}
                className="flex items-start gap-3"
              >
                <div className="rounded-xl bg-purple-500/10 p-2 text-purple-400">
                  <MapPin className="h-4 w-4" />
                </div>

                <p className="text-sm leading-6 text-slate-400">
                  #42, Metro Grand Avenue,
                  <br />
                  Near Central Bus Station,
                  <br />
                  Hosur, Tamil Nadu
                </p>
              </motion.div>

              {/* PHONE */}

              <motion.a
                href="tel:+919876543210"
                whileHover={{
                  x: 4,
                }}
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-purple-400"
              >
                <div className="rounded-xl bg-purple-500/10 p-2 text-purple-400">
                  <Phone className="h-4 w-4" />
                </div>

                +91 98765 43210
              </motion.a>

              {/* EMAIL */}

              <motion.a
                href="mailto:care@sakthidental.com"
                whileHover={{
                  x: 4,
                }}
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-teal-400"
              >
                <div className="rounded-xl bg-teal-500/10 p-2 text-teal-400">
                  <Mail className="h-4 w-4" />
                </div>

                care@sakthidental.com
              </motion.a>

              {/* TIMING */}

              <motion.div
                whileHover={{
                  x: 4,
                }}
                className="flex items-start gap-3"
              >
                <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
                  <Clock className="h-4 w-4" />
                </div>

                <div className="text-sm leading-6 text-slate-400">
                  <p>Mon - Sat: 9:00 AM - 8:30 PM</p>
                  <p>Sunday: 10:00 AM - 2:00 PM</p>

                  <p className="mt-1 font-bold text-emerald-400">
                    Emergency: 24x7
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-12 h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent" />

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sakthi Dental Clinic.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/privacy"
              className="text-xs text-slate-500 transition-colors hover:text-purple-400"
            >
              Privacy Policy
            </Link>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              Made with
              <Heart className="h-3.5 w-3.5 fill-current text-purple-500" />
              for healthier smiles
            </span>

            <ShieldCheck className="h-4 w-4 text-teal-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}