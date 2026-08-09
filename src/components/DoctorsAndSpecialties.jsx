import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  Stethoscope,
  Zap,
  Sparkles,
  Heart,
  CheckCircle2,
  Users,
  Check,
  Building2,
  FileBadge
} from 'lucide-react';
import DoctorCard from './DoctorCard';
import { DOCTORS_DATA, CLINIC_SPECIALTIES } from '../data/doctorsData.js';

export default function DoctorsAndSpecialties({ onOpenAppointment }) {
  const [activeTab, setActiveTab] = useState('specialties'); // 'specialties' or 'doctors'

  const iconMap = {
    Stethoscope,
    Zap,
    Sparkles,
    Heart,
    ShieldCheck,
    Award
  };

  return (
    <section id="trust-specialties" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Gradient Spheres */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-bold text-[#0D9488] uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" /> Institutional Trust & Medical Credentials
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Specialized Care Led By Verified Medical Experts
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our hospital brings together German-certified 3D dental technology, verified MDS doctor credentials, and 20+ years of clinical excellence for zero-pain treatments.
          </p>

          {/* Toggle Pills */}
          <div className="pt-3 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => setActiveTab('specialties')}
              className={`px-6 py-3 rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'specialties'
                  ? 'bg-gradient-to-r from-[#0D9488] to-[#0284C7] text-white shadow-lg shadow-[#0D9488]/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Clinic Core Specialties (6)</span>
            </button>

            <button
              onClick={() => setActiveTab('doctors')}
              className={`px-6 py-3 rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'doctors'
                  ? 'bg-gradient-to-r from-[#0D9488] to-[#0284C7] text-white shadow-lg shadow-[#0D9488]/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Doctor Credentials & Team (4)</span>
            </button>
          </div>
        </div>

        {/* Institutional Trust Badges Bar */}
        <div className="glass-card p-6 sm:p-8 border border-white/80 shadow-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-center">
            
            <div className="p-3 space-y-1">
              <FileBadge className="w-6 h-6 text-[#0D9488] mx-auto mb-1" />
              <p className="text-xs font-black text-slate-900">NABH Accredited</p>
              <p className="text-[10px] text-slate-500">Quality Dental Standards</p>
            </div>

            <div className="p-3 space-y-1 pt-3 sm:pt-3">
              <Building2 className="w-6 h-6 text-[#0284C7] mx-auto mb-1" />
              <p className="text-xs font-black text-slate-900">ISO 9001:2015</p>
              <p className="text-[10px] text-slate-500">Certified Healthcare Unit</p>
            </div>

            <div className="p-3 space-y-1 pt-3 sm:pt-3">
              <ShieldCheck className="w-6 h-6 text-emerald-500 mx-auto mb-1" />
              <p className="text-xs font-black text-slate-900">Class-B Autoclave</p>
              <p className="text-[10px] text-slate-500">100% German Sterilization</p>
            </div>

            <div className="p-3 space-y-1 pt-3 sm:pt-3">
              <Award className="w-6 h-6 text-amber-500 mx-auto mb-1" />
              <p className="text-xs font-black text-slate-900">IDA Life Member</p>
              <p className="text-[10px] text-slate-500">Indian Dental Association</p>
            </div>

            <div className="p-3 space-y-1 pt-3 sm:pt-3">
              <Sparkles className="w-6 h-6 text-[#059669] mx-auto mb-1" />
              <p className="text-xs font-black text-slate-900">ICOI Fellow (USA)</p>
              <p className="text-[10px] text-slate-500">International Implantology</p>
            </div>

          </div>
        </div>

        {/* Tab 1: Clinic Specialties */}
        {activeTab === 'specialties' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {CLINIC_SPECIALTIES.map((spec) => {
              const IconComp = iconMap[spec.iconName] || Stethoscope;
              return (
                <motion.div
                  key={spec.id}
                  whileHover={{ y: -6 }}
                  className="glass-card p-6 sm:p-8 border border-slate-200/80 hover:border-[#0D9488]/50 shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    {/* Header Icon & Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0D9488] to-[#0284C7] text-white flex items-center justify-center shadow-md shadow-[#0D9488]/20">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-extrabold uppercase tracking-wider">
                        {spec.keyStats.split('•')[0]}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-lg font-black text-slate-900 leading-snug">
                        {spec.title}
                      </h3>
                      <p className="text-xs font-bold text-[#0D9488] mt-0.5">
                        {spec.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {spec.description}
                    </p>

                    {/* Equipment Tech Used */}
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                        Advanced Equipment Used:
                      </span>
                      <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{spec.techUsed}</span>
                      </p>
                    </div>

                    {/* Highlights Bullets */}
                    <div className="space-y-1.5 pt-1">
                      {spec.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Consultation Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenAppointment(spec.title)}
                      className="w-full py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Inquire About {spec.title.split(' ')[0]}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Tab 2: Doctor Credentials */}
        {activeTab === 'doctors' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {DOCTORS_DATA.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} onOpenAppointment={onOpenAppointment} />
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
