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
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import ContactForm from "../components/ContactForm";
import FAQAccordion from "../components/FAQAccordion";

import contactDental from "../assets/Banner Images/contact-dental.jpg";

export default function Contact({ isLoggedIn, onOpenAuth, onOpenAppointment }) {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-slate-50 pt-20 text-slate-900 sm:pt-24">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Purple glow */}
        <motion.div
          animate={{
            x: [0, 40, -25, 0],
            y: [0, -25, 35, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        />

        {/* Teal glow */}
        <motion.div
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 35, -25, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, 25, -25, 0],
            y: [0, -20, 25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
        />

        {/* Floating dots */}
        <motion.span
          animate={{
            y: [0, -15, 0, 12, 0],
            x: [0, 6, -6, 4, 0],
            opacity: [0.2, 0.7, 0.3, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-purple-500/50"
        />

        <motion.span
          animate={{
            y: [0, 18, 0, -12, 0],
            x: [0, -6, 6, -4, 0],
            opacity: [0.2, 0.6, 0.25, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[10%] top-[50%] h-2 w-2 rounded-full bg-teal-500/50"
        />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-teal-50 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-purple-700 shadow-md backdrop-blur-xl sm:px-4 sm:text-xs"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span>Get In Touch</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Contact{" "}
              <span className="bg-linear-to-r from-purple-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Sakthi Dental Clinic
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-lg"
            >
              We&apos;re here to make your dental care experience simple,
              comfortable, and stress-free. Reach out to us for appointments,
              treatments, emergency care, or any dental questions.
            </motion.p>

            {/* Quick information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            >
              {/* Timing */}
              <div className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2.5 text-xs font-bold text-slate-700 shadow-md backdrop-blur-xl sm:w-auto">
                <Clock className="h-4 w-4 shrink-0 text-purple-600" />
                <span>Mon - Sat: 9 AM - 7:00 PM</span>
              </div>

              {/* Phone */}
              <a
                href="tel:+919862890897"
                className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2.5 text-xs font-bold text-slate-700 shadow-md backdrop-blur-xl transition-all hover:-translate-y-1 hover:text-teal-700 hover:shadow-lg sm:w-auto"
              >
                <Phone className="h-4 w-4 shrink-0 text-teal-600" />

                <span className="break-normal">
                  +91 9862890897 / +91 9363298118
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          REACH US + FAQ
      ===================================================== */}

      <section className="relative py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* REACH US */}
            <motion.section
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{ duration: 0.7 }}
              className="group relative min-w-0 overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-4 shadow-xl shadow-purple-900/5 backdrop-blur-xl transition-all duration-500 hover:border-purple-300 hover:bg-white/95 hover:shadow-2xl hover:shadow-purple-500/20 sm:p-6 lg:p-8"
            >
              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-purple-400/20 blur-3xl sm:h-60 sm:w-60"
              />

              <div className="relative min-w-0">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-purple-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-purple-700 sm:text-xs">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  Reach Us
                </div>

                <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                  Reach Us Directly
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We&apos;re always happy to help. Get in touch with our clinic
                  team for appointments, treatment information, or emergency
                  dental assistance.
                </p>
              </div>

              {/* Contact cards */}
              <div className="relative mt-6 space-y-3">
                <ContactInfoCard
                  icon={<MapPin className="h-5 w-5" />}
                  iconClass="bg-purple-100 text-purple-600"
                  title="Clinic Address"
                >
                  <span>
                    #42, Metro Grand Avenue,
                    <br />
                    Near Central Bus Station,
                    <br />
                    Chennai, Tamil Nadu - 600001
                  </span>
                </ContactInfoCard>

                <ContactInfoCard
                  icon={<Phone className="h-5 w-5" />}
                  iconClass="bg-teal-100 text-teal-600"
                  title="Phone & WhatsApp"
                >
                  <div className="space-y-1">
                    <a
                      href="tel:+919862890897"
                      className="block transition-colors hover:text-teal-600"
                    >
                      +91 9862890897
                    </a>

                    <a
                      href="tel:+919363298118"
                      className="block transition-colors hover:text-teal-600"
                    >
                      +91 9363298118
                    </a>
                  </div>
                </ContactInfoCard>

                <ContactInfoCard
                  icon={<Mail className="h-5 w-5" />}
                  iconClass="bg-blue-100 text-blue-600"
                  title="Email Inquiry"
                >
                  <a
                    href="mailto:info@sakthidentalclinic.in"
                    className="block wrap-break-word transition-colors hover:text-blue-600"
                  >
                    info@sakthidentalclinic.in
                  </a>
                </ContactInfoCard>

                <ContactInfoCard
                  icon={<Clock className="h-5 w-5" />}
                  iconClass="bg-emerald-100 text-emerald-600"
                  title="Clinic Timings"
                >
                  <span>
                    Mon - Sat: 9:00 AM - 7:00 PM
                    <br />
                    <span className="font-black text-emerald-600">
                      Emergency: 24x7
                    </span>
                  </span>
                </ContactInfoCard>
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{ duration: 0.7 }}
              className="group relative min-w-0 overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-4 shadow-xl shadow-purple-900/5 backdrop-blur-xl transition-all duration-500 hover:border-purple-300 hover:bg-white/95 hover:shadow-2xl hover:shadow-purple-500/20 sm:p-6 lg:p-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl sm:h-60 sm:w-60"
              />

              <div className="relative mb-5 min-w-0">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-purple-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-purple-700 sm:text-xs">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  FAQ
                </div>

                <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                  Frequently Asked Questions
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Find quick answers to common questions about appointments,
                  treatments, emergency care, and our clinic.
                </p>
              </div>

              <div className="relative min-w-0 w-full max-w-full overflow-hidden">
                <FAQAccordion />
              </div>
            </motion.section>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM + IMAGE
      ===================================================== */}

      <section className="relative py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
            className="mb-8 text-center sm:mb-10"
          >
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-teal-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-teal-700 sm:px-4 sm:py-2 sm:text-xs">
              <HeartPulse className="h-4 w-4 shrink-0" />
              We&apos;re Here For You
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Send Us a Message
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:leading-7">
              Have a question or want to schedule your visit? Fill out the
              form and our clinic team will get back to you.
            </p>
          </motion.div>

          <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Contact Form with Passed Props */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.7,
              }}
              className="group min-w-0 w-full overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-4 shadow-xl shadow-purple-900/5 backdrop-blur-xl transition-all duration-500 hover:border-purple-300 hover:bg-white/95 hover:shadow-2xl hover:shadow-purple-500/20 sm:p-6 lg:p-8"
            >
              <div className="min-w-0 w-full max-w-full">
                <ContactForm isLoggedIn={isLoggedIn} onOpenAuth={onOpenAuth} />
              </div>
            </motion.div>

            {/* Dental Image */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.7,
              }}
              className="group relative min-h-72 w-full overflow-hidden rounded-3xl border border-white/80 bg-slate-900 shadow-2xl shadow-purple-900/10 transition-all duration-500 hover:shadow-purple-500/30 sm:min-h-96 lg:min-h-140"
            >
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
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-3 top-3 max-w-[calc(100%-1.5rem)] rounded-2xl border border-white/30 bg-white/90 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:right-6 sm:top-6 sm:px-4 sm:py-3"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-teal-600" />

                  <div className="min-w-0">
                    <p className="text-[11px] font-black text-slate-900 sm:text-xs">
                      Trusted Dental Care
                    </p>

                    <p className="text-[9px] font-semibold text-slate-500 sm:text-[10px]">
                      Gentle & Comfortable
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-7 lg:p-8">
                <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md sm:text-xs">
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-teal-300" />
                  Modern Dental Care
                </div>

                <h3 className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl">
                  Your smile deserves gentle, modern care.
                </h3>

                <p className="mt-2 max-w-lg text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                  Visit Sakthi Dental Clinic for comfortable treatment,
                  experienced professionals, and patient-focused care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="relative pb-12 pt-4 sm:pb-16 lg:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="group w-full overflow-hidden rounded-3xl border border-white/80 bg-white shadow-2xl shadow-purple-900/10 transition-all duration-500 hover:border-purple-300 hover:shadow-purple-500/20"
          >
            <div className="flex flex-col gap-4 bg-slate-950 p-4 text-white sm:p-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 shrink-0 text-teal-400" />

                  <h2 className="text-base font-black sm:text-lg">
                    Find Our Dental Clinic
                  </h2>
                </div>

                <p className="mt-1 wrap-break-word text-[11px] leading-5 text-slate-400 sm:text-xs">
                  #42, Metro Grand Avenue, Near Central Bus Station, Chennai
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Chennai+Central"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/20 sm:w-auto"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            </div>

            <div className="relative h-72 w-full overflow-hidden sm:h-96 lg:h-125">
              <iframe
                title="Sakthi Dental Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.837861922572!2d80.27071831482278!3d13.082680190783168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333f%3A0x6d3e336b1103f7e3!2sChennai%20Central!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-15 opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              />

              <motion.a
                href="/treatments"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-purple-600 via-indigo-600 to-teal-500 px-4 py-2.5 text-[10px] font-black uppercase tracking-wider text-white shadow-2xl shadow-purple-900/30 sm:bottom-6 sm:px-5 sm:py-3 sm:text-xs"
              >
                <span>See Treatments</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ContactInfoCard({ icon, iconClass, title, children }) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="flex min-w-0 w-full items-start gap-3 rounded-2xl border border-slate-100 bg-white/90 p-3.5 shadow-sm transition-all duration-300 hover:border-purple-200 hover:bg-white hover:shadow-lg hover:shadow-purple-500/10 sm:gap-4 sm:p-4"
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${iconClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-900 sm:text-xs">
          {title}
        </h3>

        <div className="mt-1 min-w-0 wrap-break-word text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
          {children}
        </div>
      </div>
    </motion.div>
  );
}