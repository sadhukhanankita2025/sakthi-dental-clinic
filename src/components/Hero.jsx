import React from "react";
import { motion } from "motion/react";
import {
  Calendar,
  PhoneCall,
  Sparkles,
  Award,
  ShieldCheck,
  Star,
  UserCheck,
} from "lucide-react";

export default function Hero({ onOpenAppointment }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 sm:py-20 lg:py-24">
      {/* =========================================
          DECORATIVE SOFT PASTEL GLOW ORBS
      ========================================== */}

      <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-10 blur-[120px] pointer-events-none" />

      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-[#0D9488]/10 blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 -left-32 h-96 w-96 rounded-full bg-[#EC4899]/10 blur-3xl pointer-events-none" />

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">

          {/* =========================================
              LEFT COLUMN
          ========================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="space-y-7 text-center lg:col-span-7 lg:text-left"
          >
            {/* TOP BADGE */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="inline-flex items-center gap-2.5 rounded-full border border-purple-200/70 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md"
            >
              <span className="flex h-2 w-2 animate-ping rounded-full bg-[#8B5CF6]" />

              <Sparkles className="h-4 w-4 text-[#8B5CF6]" />

              <span className="text-xs font-bold tracking-wide text-[#1E1B4B]">
                ISO 9001:2026 Certified Dental Hospital
              </span>
            </motion.div>

            {/* MAIN HEADING */}

            <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-[#1E1B4B] sm:text-5xl lg:text-6xl">
              Specialized Dental Care for{" "}
              <span className="text-gradient">
                Women, Children
              </span>{" "}
              & Families
            </h1>

            {/* DESCRIPTION */}

            <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              Experience gentle, zero-pain dental care in a soothing,
              kid-friendly environment. From preventive checkups to 3D
              implants, Sakthi Dental Clinic delivers international standards
              with 20+ years of trusted smiles.
            </p>

            {/* CTA BUTTONS */}

            <div className="flex flex-col items-center justify-center gap-4 pt-3 sm:flex-row lg:justify-start">

              {/* APPOINTMENT */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={onOpenAppointment}
                className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#8B5CF6]/25 transition-all duration-300 hover:shadow-2xl sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                <span>Fix an Appointment</span>
              </motion.button>

              {/* EMERGENCY */}

              <a
                href="tel:+919876543210"
                className="flex w-full items-center justify-center gap-2.5 rounded-full border border-purple-100 bg-white px-7 py-4 text-sm font-bold tracking-wide text-[#1E1B4B] shadow-sm transition-all duration-300 hover:bg-purple-50 sm:w-auto"
              >
                <span className="rounded-full bg-pink-100 p-1.5 text-[#EC4899]">
                  <PhoneCall className="h-4 w-4" />
                </span>

                <span>Emergency Dental Support</span>
              </a>
            </div>

            {/* =========================================
                QUICK METRICS
            ========================================== */}

            <div className="mx-auto max-w-xl pt-4 lg:mx-0">
              <div className="grid grid-cols-3 gap-3">

                {/* YEARS */}

                <div className="rounded-2xl border border-purple-100 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md lg:text-left">
                  <p className="text-2xl font-black tracking-tight text-[#1E1B4B] sm:text-3xl">
                    20+
                  </p>

                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-[#8B5CF6]">
                    Years Exp.
                  </p>
                </div>

                {/* PATIENTS */}

                <div className="rounded-2xl border border-teal-100 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md lg:text-left">
                  <p className="text-2xl font-black tracking-tight text-[#0D9488] sm:text-3xl">
                    15,000+
                  </p>

                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                    Patients
                  </p>
                </div>

                {/* RATING */}

                <div className="flex flex-col items-center justify-center rounded-2xl border border-pink-100 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md lg:items-start lg:text-left">
                  <div className="flex items-center text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3.5 w-3.5 fill-current"
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-[11px] font-bold tracking-wider text-[#1E1B4B]">
                    4.9 / 5.0 Rating
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative flex justify-center lg:col-span-5"
          >

            {/* =========================================
                MAIN IMAGE CARD
            ========================================== */}

            <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-purple-100 bg-white/80 p-3 shadow-2xl shadow-[#8B5CF6]/10 backdrop-blur-xl lg:max-w-none">

              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900"
                alt="Happy family dental care at Sakthi Dental Clinic"
                className="h-[380px] w-full rounded-[24px] object-cover sm:h-[440px] lg:h-[520px]"
              />

              {/* IMAGE OVERLAY */}

              <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-t from-[#1E1B4B]/30 via-transparent to-transparent" />
            </div>

            {/* =========================================
                FLOATING CARD 1
            ========================================== */}

            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-card absolute -left-4 -top-6 hidden max-w-[220px] items-center gap-3 border-purple-100 p-3.5 shadow-xl sm:flex lg:-left-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[#8B5CF6]">
                <UserCheck className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Dr. Sakthi Saravanan
                </p>

                <p className="text-[10px] font-medium text-[#8B5CF6]">
                  Chief Implantologist
                </p>
              </div>
            </motion.div>

            {/* =========================================
                FLOATING CARD 2
            ========================================== */}

            <motion.div
              animate={{
                y: [8, -8, 8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-card absolute -right-4 top-1/2 flex max-w-[210px] items-center gap-3 border-purple-100 p-3.5 shadow-xl sm:-right-8"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-md">
                <Award className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">
                  20+ Years Exp.
                </p>

                <p className="text-[10px] font-medium text-slate-500">
                  Top Dental Surgeons
                </p>
              </div>
            </motion.div>

            {/* =========================================
                FLOATING CARD 3
            ========================================== */}

            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-card absolute -bottom-6 left-6 flex items-center gap-3 border-purple-100 p-3.5 shadow-xl sm:left-12"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0D9488] text-white shadow-md">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">
                  24/7 Pain Relief
                </p>

                <p className="text-[10px] font-semibold text-[#0D9488]">
                  Instant Emergency Care
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* =========================================
          BOTTOM CURVE
      ========================================== */}

      <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block h-10 w-full text-[#FAF5FF] sm:h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,40 C300,110 900,110 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}