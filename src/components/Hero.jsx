import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  PhoneCall,
  Sparkles,
  Award,
  ShieldCheck,
  Star,
  UserCheck,
} from 'lucide-react';

// IMPORTANT: Image is inside src/assets
import docImage from '../assets/doc.png';

export default function Hero({ onOpenAppointment }) {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-gradient-to-b from-purple-100/50 via-indigo-50/30 to-purple-50/20">

      {/* =====================================================
          DECORATIVE BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-br from-purple-200/30 via-indigo-100/40 to-teal-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />


      {/* =====================================================
          SECTION DIVIDER
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-10 sm:h-16 md:h-20 text-[#FAF5FF] fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C300,110 900,110 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">


          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >

            {/* =================================================
                TOP BADGE
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-purple-200/70 shadow-sm backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-ping" />

              <Sparkles className="w-4 h-4 text-purple-600" />

              <span className="text-xs font-bold text-purple-950 tracking-wide">
                ISO 9001:2026 Certified Dental Hospital
              </span>
            </motion.div>


            {/* =================================================
                HEADLINE
            ================================================= */}

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]"
            >
              Specialized Dental Care for{' '}

              <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Women, Children
              </span>{' '}

              & Families
            </motion.h1>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Experience gentle, zero-pain dental care in a soothing,
              kid-friendly environment. From preventive checkups to 3D
              implants, Sakthi Dental Clinic delivers international
              standards with 20+ years of trusted smiles.
            </motion.p>


            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >

              {/* Book Appointment */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-2xl transition-all"
              >
                <Calendar className="w-5 h-5" />

                <span>
                  Fix an Appointment
                </span>
              </motion.button>


              {/* Emergency Support */}

              <motion.a
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                href="tel:+919876543210"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-slate-800 font-bold text-sm tracking-wide border border-purple-100 shadow-sm hover:bg-purple-50 transition-all flex items-center justify-center gap-2.5"
              >
                <div className="p-1.5 rounded-full bg-rose-100 text-rose-500">
                  <PhoneCall className="w-4 h-4" />
                </div>

                <span>
                  Emergency Dental Support
                </span>
              </motion.a>

            </motion.div>


            {/* =================================================
                QUICK METRICS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4 max-w-xl mx-auto lg:mx-0"
            >

              <div className="grid grid-cols-3 gap-3">

                {/* Experience */}

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 rounded-2xl bg-white/90 border border-purple-100/90 shadow-sm backdrop-blur-md text-center lg:text-left transition-shadow hover:shadow-lg hover:shadow-purple-200/40"
                >
                  <p className="text-2xl sm:text-3xl font-black text-purple-950 tracking-tight">
                    20+
                  </p>

                  <p className="text-[11px] font-bold text-purple-600 uppercase tracking-wider mt-0.5">
                    Years Exp.
                  </p>
                </motion.div>


                {/* Patients */}

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 rounded-2xl bg-white/90 border border-purple-100/90 shadow-sm backdrop-blur-md text-center lg:text-left transition-shadow hover:shadow-lg hover:shadow-purple-200/40"
                >
                  <p className="text-2xl sm:text-3xl font-black text-purple-700 tracking-tight">
                    15,000+
                  </p>

                  <p className="text-[11px] font-bold text-purple-600 uppercase tracking-wider mt-0.5">
                    Patients
                  </p>
                </motion.div>


                {/* Rating */}

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 rounded-2xl bg-white/90 border border-purple-100/90 shadow-sm backdrop-blur-md text-center lg:text-left flex flex-col justify-center items-center lg:items-start transition-shadow hover:shadow-lg hover:shadow-purple-200/40"
                >

                  <div className="flex items-center text-amber-400">

                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />

                  </div>

                  <p className="text-[11px] font-bold text-slate-700 tracking-wider mt-1">
                    4.9 / 5.0 Rating
                  </p>

                </motion.div>

              </div>

            </motion.div>

          </motion.div>


          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              x: 30,
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
            className="lg:col-span-5 relative flex justify-center"
          >

            {/* =================================================
                MAIN IMAGE CARD
            ================================================= */}

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative w-full max-w-md lg:max-w-none rounded-[32px] overflow-hidden p-3 bg-white/80 backdrop-blur-xl border border-purple-100 shadow-2xl shadow-purple-900/10"
            >

              {/* FIXED IMAGE PATH */}

              <img
                src={docImage}
                alt="Happy family dental care at Sakthi Dental Clinic"
                className="w-full h-[380px] sm:h-[440px] object-cover rounded-[24px]"
              />

              {/* Image Overlay */}

              <div className="absolute inset-3 rounded-[24px] bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />

            </motion.div>


            {/* =================================================
                FLOATING CARD 1 - DOCTOR
            ================================================= */}

            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 items-center gap-3 shadow-xl max-w-[220px] hidden sm:flex border border-purple-100"
            >

              <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Dr. Sakthi Saravanan
                </p>

                <p className="text-[10px] text-purple-600 font-medium">
                  Chief Implantologist
                </p>
              </div>

            </motion.div>


            {/* =================================================
                FLOATING CARD 2 - EXPERIENCE
            ================================================= */}

            <motion.div
              animate={{
                y: [8, -8, 8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="absolute top-1/2 -right-4 sm:-right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 flex items-center gap-3 shadow-xl max-w-[210px] border border-purple-100"
            >

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Award className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  20+ Years Exp.
                </p>

                <p className="text-[10px] text-slate-500 font-medium">
                  Top Dental Surgeons
                </p>
              </div>

            </motion.div>


            {/* =================================================
                FLOATING CARD 3 - EMERGENCY
            ================================================= */}

            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="absolute -bottom-6 left-6 sm:left-12 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 flex items-center gap-3 shadow-xl border border-purple-100"
            >

              <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  24/7 Pain Relief
                </p>

                <p className="text-[10px] text-purple-600 font-semibold">
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