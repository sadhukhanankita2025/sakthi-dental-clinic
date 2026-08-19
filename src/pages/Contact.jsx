import React from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Navigation,
  ExternalLink,
  ArrowRight,
  Calendar,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

import ContactForm from "../components/ContactForm";
import FAQAccordion from "../components/FAQAccordion";

import contactDental from "../assets/contact-dental.jpg";

export default function Contact({ onOpenAppointment }) {
  const handleAppointment = () => {
    if (onOpenAppointment) {
      onOpenAppointment("");
      return;
    }

    window.dispatchEvent(
      new CustomEvent("openAppointment", {
        detail: {
          treatment: "",
        },
      })
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 pt-24 text-slate-900">
      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Purple Glow */}
        <motion.div
          animate={{
            x: [0, 70, -30, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-40
            h-96
            w-96
            rounded-full
            bg-purple-400/15
            blur-3xl
          "
        />

        {/* Teal Glow */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            top-1/3
            h-96
            w-96
            rounded-full
            bg-teal-400/10
            blur-3xl
          "
        />

        {/* Blue Glow */}
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            left-1/2
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-blue-400/10
            blur-3xl
          "
        />

        {/* Floating Dots */}
        {[
          {
            left: "8%",
            top: "18%",
            delay: 0,
          },
          {
            left: "90%",
            top: "24%",
            delay: 1,
          },
          {
            left: "15%",
            top: "68%",
            delay: 2,
          },
          {
            left: "92%",
            top: "72%",
            delay: 3,
          },
        ].map((dot, index) => (
          <motion.span
            key={index}
            className="
              absolute
              h-2
              w-2
              rounded-full
              bg-purple-400/40
              blur-[1px]
            "
            style={{
              left: dot.left,
              top: dot.top,
            }}
            animate={{
              y: [0, -20, 0, 15, 0],
              x: [0, 8, -8, 5, 0],
              opacity: [0.25, 0.7, 0.3, 0.6, 0.25],
              scale: [1, 1.4, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 5,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative bg-linear-to-br from-purple-50 via-white to-teal-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-purple-200
                bg-white/80
                px-4
                py-2
                text-xs
                font-black
                uppercase
                tracking-wider
                text-purple-700
                shadow-lg
                shadow-purple-500/10
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-4 w-4 text-purple-600" />

              <span>Get In Touch</span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="
                mt-6
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-slate-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Contact{" "}
              <span className="bg-linear-to-r from-purple-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Sakthi Dental Clinic
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                sm:leading-8
              "
            >
              We're here to make your dental care experience simple,
              comfortable, and stress-free. Reach out to us for appointments,
              treatments, emergency care, or any dental questions.
            </motion.p>

            {/* Quick Info */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
                sm:gap-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  bg-white/80
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-slate-700
                  shadow-md
                  backdrop-blur-xl
                "
              >
                <Clock className="h-4 w-4 text-purple-600" />

                <span>Mon - Sat: 9 AM - 8:30 PM</span>
              </div>

              <a
                href="tel:+919876543210"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  bg-white/80
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-slate-700
                  shadow-md
                  transition-all
                  hover:-translate-y-1
                  hover:text-purple-700
                  hover:shadow-lg
                  backdrop-blur-xl
                "
              >
                <Phone className="h-4 w-4 text-teal-600" />

                <span>+91 98765 43210</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          REACH US + FAQ
      ====================================================== */}

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* =================================================
                REACH US
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                overflow-hidden
                rounded-4xl
                border
                border-white
                bg-white/85
                p-6
                shadow-xl
                shadow-purple-900/5
                backdrop-blur-xl
                sm:p-8
              "
            >
              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  bg-purple-400/15
                  blur-3xl
                "
              />

              {/* Header */}

              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-purple-100
                    px-3
                    py-1.5
                    text-[11px]
                    font-black
                    uppercase
                    tracking-wider
                    text-purple-700
                  "
                >
                  <MapPin className="h-3.5 w-3.5" />

                  Reach Us
                </div>

                <h2
                  className="
                    mt-4
                    text-2xl
                    font-black
                    tracking-tight
                    text-slate-950
                    sm:text-3xl
                  "
                >
                  Reach Us Directly
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  We're always happy to help. Get in touch with our clinic
                  team for appointments, treatment information, or emergency
                  dental assistance.
                </p>
              </div>

              {/* Contact Items */}

              <div className="relative mt-7 space-y-4">
                {/* ADDRESS */}

                <motion.div
                  whileHover={{
                    x: 5,
                    scale: 1.01,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-4
                    shadow-sm
                    transition-shadow
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-purple-100
                      text-purple-600
                    "
                  >
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Clinic Address
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      #42, Metro Grand Avenue,
                      <br />
                      Near Central Bus Station,
                      <br />
                      Chennai, Tamil Nadu - 600001
                    </p>
                  </div>
                </motion.div>

                {/* PHONE */}

                <motion.div
                  whileHover={{
                    x: 5,
                    scale: 1.01,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-4
                    shadow-sm
                    transition-shadow
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-teal-100
                      text-teal-600
                    "
                  >
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Phone & WhatsApp
                    </h3>

                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:+919876543210"
                        className="
                          block
                          text-sm
                          font-semibold
                          text-slate-600
                          transition-colors
                          hover:text-teal-600
                        "
                      >
                        +91 98765 43210
                      </a>

                      <a
                        href="tel:04423456789"
                        className="
                          block
                          text-sm
                          font-semibold
                          text-slate-600
                          transition-colors
                          hover:text-teal-600
                        "
                      >
                        044 2345 6789
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* EMAIL */}

                <motion.div
                  whileHover={{
                    x: 5,
                    scale: 1.01,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-4
                    shadow-sm
                    transition-shadow
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-100
                      text-blue-600
                    "
                  >
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Email Inquiry
                    </h3>

                    <a
                      href="mailto:care@sakthidental.com"
                      className="
                        mt-1
                        block
                        text-sm
                        font-semibold
                        text-slate-600
                        transition-colors
                        hover:text-blue-600
                      "
                    >
                      care@sakthidental.com
                    </a>
                  </div>
                </motion.div>

                {/* TIMINGS */}

                <motion.div
                  whileHover={{
                    x: 5,
                    scale: 1.01,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-4
                    shadow-sm
                    transition-shadow
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-100
                      text-emerald-600
                    "
                  >
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Clinic Timings
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Mon - Sat: 9:00 AM - 8:30 PM
                      <br />
                      Sunday: 10:00 AM - 2:00 PM
                      <br />
                      <span className="font-black text-emerald-600">
                        Emergency: 24x7
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Appointment */}

              <motion.button
                type="button"
                onClick={handleAppointment}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  relative
                  mt-6
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-2xl
                  bg-linear-to-r
                  from-purple-600
                  via-indigo-600
                  to-teal-500
                  px-5
                  py-3.5
                  text-sm
                  font-black
                  uppercase
                  tracking-wider
                  text-white
                  shadow-lg
                  shadow-purple-500/20
                "
              >
                <motion.span
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-16
                    skew-x-12
                    bg-white/25
                    blur-sm
                  "
                />

                <Calendar className="relative z-10 h-4 w-4" />

                <span className="relative z-10">
                  Book an Appointment
                </span>
              </motion.button>
            </motion.div>

            {/* =================================================
                FAQ
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                overflow-hidden
                rounded-4xl
                border
                border-white
                bg-white/80
                p-6
                shadow-xl
                shadow-purple-900/5
                backdrop-blur-xl
                sm:p-8
              "
            >
              {/* Floating Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  bg-purple-500/20
                  blur-3xl
                "
              />

              <div className="relative mb-6">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-purple-100
                    px-3
                    py-1.5
                    text-[11px]
                    font-black
                    uppercase
                    tracking-wider
                    text-purple-700
                  "
                >
                  <Sparkles className="h-3.5 w-3.5" />

                  FAQ
                </div>

                <h2
                  className="
                    mt-4
                    text-2xl
                    font-black
                    tracking-tight
                    text-slate-950
                    sm:text-3xl
                  "
                >
                  Frequently Asked Questions
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Find quick answers to common questions about appointments,
                  treatments, emergency care, and our clinic.
                </p>
              </div>

              <div className="relative">
                <FAQAccordion />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM + IMAGE
      ====================================================== */}

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-teal-100
                px-4
                py-2
                text-xs
                font-black
                uppercase
                tracking-wider
                text-teal-700
              "
            >
              <HeartPulse className="h-4 w-4" />

              We're Here For You
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="
                mt-4
                text-3xl
                font-black
                tracking-tight
                text-slate-950
                sm:text-4xl
              "
            >
              Send Us a Message
            </motion.h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Have a question or want to schedule your visit? Fill out the
              form and our clinic team will get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            {/* =================================================
                CONTACT FORM — LEFT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                rounded-4xl
                border
                border-white
                bg-white/90
                p-5
                shadow-xl
                shadow-purple-900/5
                backdrop-blur-xl
                sm:p-8
              "
            >
              <ContactForm />
            </motion.div>

            {/* =================================================
                IMAGE — RIGHT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                group
                relative
                min-h-80
                overflow-hidden
                rounded-4xl
                border
                border-white
                bg-white
                shadow-2xl
                shadow-purple-900/10
                sm:min-h-100
              "
            >
              {/* Image */}

              <motion.img
                src={contactDental}
                alt="Sakthi Dental Clinic"
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-slate-950/80
                  via-slate-950/20
                  to-transparent
                "
              />

              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-5
                  top-5
                  rounded-2xl
                  border
                  border-white/40
                  bg-white/90
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-teal-600" />

                  <div>
                    <p className="text-xs font-black text-slate-900">
                      Trusted Dental Care
                    </p>

                    <p className="text-[10px] font-semibold text-slate-500">
                      Gentle & Comfortable
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Content */}

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div
                  className="
                    mb-3
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/15
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-white
                    backdrop-blur-md
                  "
                >
                  <Sparkles className="h-3.5 w-3.5 text-teal-300" />

                  Modern Dental Care
                </div>

                <h3 className="max-w-lg text-2xl font-black text-white sm:text-3xl">
                  Your smile deserves gentle, modern care.
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-white/80">
                  Visit Sakthi Dental Clinic for comfortable treatment,
                  experienced professionals, and patient-focused care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP CARD
      ====================================================== */}

      <section className="relative pb-20 pt-8 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              overflow-hidden
              rounded-4xl
              border
              border-white
              bg-white
              shadow-2xl
              shadow-purple-900/10
            "
          >
            {/* Map Header */}

            <div
              className="
                flex
                flex-col
                gap-4
                bg-slate-950
                p-5
                text-white
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-7
                sm:py-5
              "
            >
              <div>
                <div className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-teal-400" />

                  <h2 className="text-lg font-black">
                    Find Our Dental Clinic
                  </h2>
                </div>

                <p className="mt-1 text-xs text-slate-400">
                  #42, Metro Grand Avenue, Near Central Bus Station, Chennai
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Chennai+Central"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/15
                  bg-white/10
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  hover:bg-white/20
                "
              >
                Open in Google Maps

                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Map */}

            <div className="relative h-80 overflow-hidden sm:h-100 lg:h-115">
              <iframe
                title="Sakthi Dental Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.837861922572!2d80.27071831482278!3d13.082680190783168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333f%3A0x6d3e336b1103f7e3!2sChennai%20Central!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="
                  h-full
                  w-full
                  grayscale
                  opacity-90
                  transition-all
                  duration-500
                  hover:grayscale-0
                  hover:opacity-100
                "
              />

              {/* Treatments Button */}

              <motion.a
                href="/treatments"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  absolute
                  bottom-5
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  bg-linear-to-r
                  from-purple-600
                  via-indigo-600
                  to-teal-500
                  px-5
                  py-3
                  text-xs
                  font-black
                  uppercase
                  tracking-wider
                  text-white
                  shadow-2xl
                  shadow-purple-900/30
                  sm:bottom-7
                "
              >
                <span>See Treatments</span>

                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-r from-purple-700 via-indigo-700 to-teal-600 py-14">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-24
            -right-24
            h-72
            w-72
            rounded-full
            bg-teal-300/20
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Ready to take care of your smile?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Schedule your visit with Sakthi Dental Clinic and experience
              comfortable, modern dental care.
            </p>

            <motion.button
              type="button"
              onClick={handleAppointment}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-6
                py-3.5
                text-sm
                font-black
                text-purple-700
                shadow-xl
                shadow-purple-950/20
              "
            >
              <Calendar className="h-4 w-4" />

              Book Appointment

              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}