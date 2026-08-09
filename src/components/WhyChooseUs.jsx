import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  HeartPulse,
  UserCheck,
  Heart,
  Cpu,
  CheckCircle2,
  Zap,
  Award,
} from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-slate-50">

      {/* Soft Light Blue Background Decorative Blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-125 h-125 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-125 h-125 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200/80 text-xs font-extrabold text-[#0D9488] uppercase tracking-widest shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            The Sakthi Clinical Distinction
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Pioneering a{' '}
            <span className="text-gradient">New Standard</span> in Family
            Dentistry
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            We combine 3D robotic accuracy, gentle painless protocols, and
            20+ years of clinical mastery in a soothing, kid-friendly
            hospital environment.
          </motion.p>

        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* =====================================================
              CARD 1 — COMPLETE DENTAL ECOSYSTEM
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="md:col-span-7 group relative rounded-4xl overflow-hidden border border-sky-100 bg-white/90 backdrop-blur-xl p-8 flex flex-col justify-between h-100 sm:h-110 shadow-xl shadow-sky-900/5 hover:shadow-2xl hover:border-[#0D9488]/40 transition-all duration-500"
          >

            {/* Image Overlay */}
            <div className="absolute inset-0 z-0">

              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Dental Ecosystem Clinic"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-15 group-hover:opacity-25"
              />

              <div className="absolute inset-0 bg-linear-to-t from-white via-white/85 to-transparent" />

            </div>

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between gap-2">

              <span className="px-3.5 py-1.5 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/20 text-[#0D9488] text-[11px] font-extrabold uppercase tracking-wider">
                Integrated Clinical Care
              </span>

              <div className="w-10 h-10 rounded-2xl bg-[#0D9488]/10 border border-[#0D9488]/20 flex items-center justify-center text-[#0D9488]">
                <HeartPulse className="w-5 h-5" />
              </div>

            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-4">

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-[#0D9488] transition-colors">
                  Complete Dental Ecosystem
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal max-w-lg">
                  Everything your family needs under one roof — from gentle
                  pediatric suites and clear aligners to 3D guided implants,
                  root canals, and cosmetic smile designs.
                </p>
              </div>

              {/* Mini Features Pills */}
              <div className="flex flex-wrap gap-2 pt-2">

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  10+ MDS Specialties
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  In-House 3D Scan Lab
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Kid Play Zone
                </span>

              </div>
            </div>
          </motion.div>

          {/* =====================================================
              CARD 2 — 20+ YEARS MASTER SURGEONS
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="md:col-span-5 group relative rounded-4xl overflow-hidden border border-sky-100 bg-linear-to-br from-white via-sky-50/50 to-blue-50/80 p-8 flex flex-col justify-between h-100 sm:h-110 shadow-xl shadow-sky-900/5 hover:shadow-2xl hover:border-[#0284C7]/40 transition-all duration-500"
          >

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">

              <span className="px-3.5 py-1.5 rounded-full bg-[#0284C7]/10 border border-[#0284C7]/20 text-[#0284C7] text-[11px] font-extrabold uppercase tracking-wider">
                Expert MDS Leadership
              </span>

              <div className="w-10 h-10 rounded-2xl bg-[#0284C7]/10 border border-[#0284C7]/20 flex items-center justify-center text-[#0284C7]">
                <UserCheck className="w-5 h-5" />
              </div>

            </div>

            {/* Doctor Badge */}
            <div className="relative z-10 p-4 rounded-2xl bg-white border border-sky-200/80 shadow-md flex items-center gap-3.5 my-auto">

              <div className="w-12 h-12 rounded-full bg-linear-to-tr from-[#0284C7] to-[#0D9488] text-white flex items-center justify-center font-black text-lg shrink-0 shadow-md">
                DS
              </div>

              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  Dr. Sakthi Saravanan
                </p>

                <p className="text-xs text-[#0284C7] font-bold">
                  Chief Dental Implantologist
                </p>

                <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                  20+ Years Clinical Practice • 15,000+ Patients
                </p>
              </div>

            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-2">

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#0284C7] transition-colors">
                20+ Years Master Surgeons
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Board-certified specialists delivering precise surgical
                outcomes with soft-tissue lasers and zero-error digital
                planning.
              </p>

            </div>
          </motion.div>

          {/* =====================================================
              CARD 3 — ZERO-ANXIETY PATIENT COMFORT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="md:col-span-5 group relative rounded-4xl overflow-hidden border border-emerald-100 bg-linear-to-br from-white via-emerald-50/40 to-teal-50/60 p-8 flex flex-col justify-between h-90 shadow-xl shadow-emerald-900/5 hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-500"
          >

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">

              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-extrabold uppercase tracking-wider">
                100% Pain-Free Protocol
              </span>

              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                <Heart className="w-5 h-5" />
              </div>

            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-emerald-200 text-emerald-700 text-xs font-bold shadow-sm">
                <Zap className="w-4 h-4 text-emerald-500" />
                Computer-Assisted Anesthesia
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                Zero-Anxiety Patient Comfort
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Transparent consultations with zero hidden fees, gentle local
                numbing, quiet ergonomic dental chairs, and personalized care
                for nervous patients.
              </p>

            </div>
          </motion.div>

          {/* =====================================================
              CARD 4 — NEXT-GEN 3D ROBOTICS & SCANS
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="md:col-span-7 group relative rounded-4xl overflow-hidden border border-sky-100 bg-white/90 backdrop-blur-xl p-8 flex flex-col justify-between h-90 shadow-xl shadow-sky-900/5 hover:shadow-2xl hover:border-cyan-500/40 transition-all duration-500"
          >

            {/* Image Overlay */}
            <div className="absolute inset-0 z-0">

              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                alt="3D Digital Scanner Tech"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-15 group-hover:opacity-25"
              />

              <div className="absolute inset-0 bg-linear-to-t from-white via-white/85 to-transparent" />

            </div>

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">

              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 text-[11px] font-extrabold uppercase tracking-wider">
                German 3D Robotics
              </span>

              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600">
                <Cpu className="w-5 h-5" />
              </div>

            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-3">

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-cyan-700 transition-colors">
                Next-Gen 3D Scans & Laser Surgery
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-lg">
                Ultra-low radiation 3D CBCT digital imaging, CAD/CAM
                same-day ceramic crowns, soft-tissue laser drills, and
                medical-grade autoclave sterilization.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-extrabold text-cyan-700">

                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-cyan-600" />
                  ISO 9001:2026 Certified Facility
                </span>

                <span className="text-slate-300">•</span>

                <span>
                  Zero Cross-Contamination
                </span>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}