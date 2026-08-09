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

export default function Hero({ onOpenAppointment }) {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-24">
      {/* Modern Clean Bottom Curve Section Divider */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />

              <Sparkles className="w-4 h-4 text-[#0284C7]" />

              <span className="text-xs font-bold text-slate-800 tracking-wide">
                ISO 9001:2026 Certified Dental Hospital
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Specialized Dental Care for{' '}
              <span className="text-gradient">
                Women, Children
              </span>{' '}
              & Families
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience compassionate, expert-led dental services tailored to
              your needs, all in a modern and welcoming environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">

              {/* Appointment Button */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-[#0D9488] via-[#0284C7] to-[#059669] text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#0D9488]/30 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Fix an Appointment</span>
              </motion.button>

              {/* Emergency Button */}
              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-slate-800 font-bold text-sm tracking-wide border border-slate-200/90 shadow-md hover:bg-slate-50 transition-all flex items-center justify-center gap-2.5"
              >
                <div className="p-1.5 rounded-full bg-rose-100 text-rose-500">
                  <PhoneCall className="w-4 h-4" />
                </div>

                <span>Emergency Dental Support</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-4 max-w-xl mx-auto lg:mx-0">
              <div className="grid grid-cols-3 gap-3">

                {/* Years Experience */}
                <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-md text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    20+
                  </p>

                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    Years Exp.
                  </p>
                </div>

                {/* Patients */}
                <div className="p-3.5 rounded-2xl bg-white/80 border border-teal-200/90 shadow-sm backdrop-blur-md text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-black text-[#0D9488] tracking-tight">
                    15,000+
                  </p>

                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    Patients
                  </p>
                </div>

                {/* Rating */}
                <div className="p-3.5 rounded-2xl bg-white/80 border border-amber-200/90 shadow-sm backdrop-blur-md text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
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
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Doctor Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Main Visual Image Card */}
            <div className="relative w-full max-w-md lg:max-w-none rounded-4xl overflow-hidden p-3 bg-white/60 backdrop-blur-xl border border-white/80 shadow-2xl">

              <img
                src="/doc.png"
                alt="Happy family dental care at Sakthi Dental Clinic"
                className="w-full h-95 sm:h-110 object-cover rounded-3xl"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 rounded-4xl bg-linear-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1: Senior Doctor */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -left-4 sm:-left-8 glass-card p-3.5 items-center gap-3 shadow-xl max-w-55 hidden sm:flex"
            >
              <div className="w-11 h-11 rounded-full bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488] shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Dr. Sakthi Saravanan
                </p>

                <p className="text-[10px] text-slate-500 font-medium">
                  Chief Implantologist
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2: Experience */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 -right-4 sm:-right-8 glass-card p-3.5 flex items-center gap-3 shadow-xl max-w-52.5"
            >
              <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-[#0D9488] to-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-md">
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

            {/* Floating Card 3: Emergency Care */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 left-6 sm:left-12 glass-card p-3.5 flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  24/7 Pain Relief
                </p>

                <p className="text-[10px] text-emerald-600 font-semibold">
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