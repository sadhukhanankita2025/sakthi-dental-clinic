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

import doctorImage from "../assets/doc.png";

export default function Hero({ onOpenAppointment }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-purple-100/60 via-indigo-50/40 to-purple-50/30 pt-32 pb-24 md:pt-40 md:pb-36">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-12 left-1/2 h-125 w-175 -translate-x-1/2 rounded-full bg-linear-to-br from-purple-200/40 via-indigo-100/40 to-teal-100/30 blur-[140px]" />

      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

      {/* Bottom Wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-10 w-full fill-current text-[#FAF5FF] sm:h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C300,110 900,110 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-7 text-center lg:col-span-7 lg:text-left"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-purple-200/70 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md"
            >
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-purple-600" />

              <Sparkles className="h-4 w-4 text-purple-600" />

              <span className="text-xs font-bold tracking-wide text-purple-950">
                ISO 9001:2026 Certified Dental Hospital
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-4xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Specialized Dental Care for{" "}

              <span className="bg-linear-to-r from-purple-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                Women, Children
              </span>{" "}

              & Families
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
            >
              Experience gentle, zero-pain dental care in a soothing,
              kid-friendly environment. From preventive checkups to 3D
              implants, Sakthi Dental Clinic delivers international
              standards with 20+ years of trusted smiles.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 pt-3 sm:flex-row lg:justify-start">

              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={onOpenAppointment}
                className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-purple-600 via-indigo-600 to-teal-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-purple-500/25 transition-all hover:shadow-2xl sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                Fix an Appointment
              </motion.button>

              <motion.a
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                href="tel:+919876543210"
                className="flex w-full items-center justify-center gap-2.5 rounded-full border border-purple-100 bg-white px-7 py-4 text-sm font-bold tracking-wide text-slate-800 shadow-sm transition-all hover:bg-purple-50 sm:w-auto"
              >
                <div className="rounded-full bg-rose-100 p-1.5 text-rose-500">
                  <PhoneCall className="h-4 w-4" />
                </div>

                Emergency Dental Support
              </motion.a>

            </div>

            {/* Metrics */}
            <div className="mx-auto max-w-xl pt-4 lg:mx-0">
              <div className="grid grid-cols-3 gap-3">

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-purple-100/90 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md lg:text-left"
                >
                  <p className="text-2xl font-black tracking-tight text-purple-950 sm:text-3xl">
                    20+
                  </p>

                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-purple-600">
                    Years Exp.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-teal-100/90 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md lg:text-left"
                >
                  <p className="text-2xl font-black tracking-tight text-teal-700 sm:text-3xl">
                    15,000+
                  </p>

                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-teal-600">
                    Patients
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-amber-100/90 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md lg:items-start"
                >
                  <div className="flex items-center text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3.5 w-3.5 fill-current"
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-[11px] font-bold tracking-wider text-slate-700">
                    4.9 / 5.0 Rating
                  </p>
                </motion.div>

              </div>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative flex justify-center lg:col-span-5"
          >

            {/* Main Floating Image */}
            <motion.div
              animate={{
                y: [0, -10, 0, 10, 0],
                rotate: [0, 0.4, 0, -0.4, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.025,
                rotate: 0,
              }}
              className="relative w-full max-w-md rounded-4xl border border-purple-100 bg-white/80 p-3 shadow-2xl shadow-purple-900/10 backdrop-blur-xl"
            >

              {/* IMAGE */}
              <img
                src={doctorImage}
                alt="Sakthi Dental Clinic"
                className="h-95 w-full rounded-3xl object-cover sm:h-110"
                onError={(e) => {
                  console.error("Hero image failed to load:", e);
                }}
              />

              {/* Image Gradient */}
              <div className="pointer-events-none absolute inset-3 rounded-3xl bg-linear-to-t from-purple-950/30 via-transparent to-transparent" />

              {/* Image Glow */}
              <div className="pointer-events-none absolute -inset-2 -z-10 rounded-4xl bg-purple-400/20 blur-2xl" />

            </motion.div>

            {/* Floating Doctor Card */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="absolute -left-4 -top-6 z-20 hidden max-w-55 items-center gap-3 rounded-2xl border border-purple-100 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:-left-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <UserCheck className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Dr. Sakthi Saravanan
                </p>

                <p className="text-[10px] font-medium text-purple-600">
                  Chief Implantologist
                </p>
              </div>
            </motion.div>

            {/* Floating Experience Card */}
            <motion.div
              animate={{
                y: [8, -8, 8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="absolute -right-4 top-1/2 z-20 flex max-w-52.5 items-center gap-3 rounded-2xl border border-purple-100 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:-right-8"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-linear-to-tr from-purple-600 to-indigo-600 text-white shadow-md">
                <Award className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  20+ Years Exp.
                </p>

                <p className="text-[10px] font-medium text-slate-500">
                  Top Dental Surgeons
                </p>
              </div>
            </motion.div>

            {/* Floating Emergency Card */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="absolute -bottom-6 left-6 z-20 flex items-center gap-3 rounded-2xl border border-purple-100 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:left-12"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-md">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  24/7 Pain Relief
                </p>

                <p className="text-[10px] font-semibold text-teal-600">
                  Instant Emergency Care
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}