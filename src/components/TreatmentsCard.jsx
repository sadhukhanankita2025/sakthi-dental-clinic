import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Shield, Sparkles, X, Check, Calendar, Eye, Info, ChevronRight, PhoneCall } from 'lucide-react';

export default function TreatmentCard({ treatment, onOpenAppointment }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Modern Image-Centric Card */}
      <motion.div
        whileHover={{ y: -8 }}
        onClick={() => setModalOpen(true)}
        className="group relative h-[360px] sm:h-[380px] rounded-[28px] overflow-hidden cursor-pointer border border-purple-100 hover:border-purple-300 shadow-md hover:shadow-2xl hover:shadow-purple-500/15 transition-all duration-500 bg-slate-900 flex flex-col justify-between"
      >
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Dual Overlay Gradients for Crisp Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/30 group-hover:via-slate-950/70 transition-colors duration-300" />
        </div>

        {/* Top Badges Bar */}
        <div className="relative z-10 p-5 flex items-center justify-between gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-purple-950 text-[10px] font-extrabold uppercase tracking-wider shadow-sm border border-purple-100">
            {treatment.category}
          </span>

          <div className="flex items-center gap-1.5">
            {treatment.painless && (
              <span className="px-3 py-1 rounded-full bg-teal-500/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wide flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3" /> Painless
              </span>
            )}
            <span className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white/80 group-hover:text-white group-hover:bg-purple-600 transition-all">
              <Eye className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Hover Center Quick Hint Badge */}
        <div className="relative z-10 my-auto text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold shadow-lg">
            <Info className="w-4 h-4 text-purple-200" />
            Click image for full details
          </span>
        </div>

        {/* Bottom Content Area on Image */}
        <div className="relative z-10 p-6 space-y-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-purple-200 transition-colors duration-200">
              {treatment.title}
            </h3>
            <p className="text-xs text-slate-300 line-clamp-2 mt-1.5 font-normal leading-relaxed">
              {treatment.shortDesc}
            </p>
          </div>

          {/* Quick Specs Strip */}
          <div className="flex items-center justify-between border-t border-white/15 pt-3 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5 text-purple-200">
              <Clock className="w-3.5 h-3.5" />
              <span>{treatment.duration}</span>
            </div>

            <div className="text-teal-300 font-bold">
              {treatment.priceEstimate}
            </div>

            <div className="flex items-center gap-1 text-white/90 group-hover:text-purple-200 transition-colors font-bold text-[11px] uppercase tracking-wider">
              <span>Details</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detailed Treatment Popup Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-[32px] bg-white shadow-2xl overflow-hidden z-10 border border-purple-100 my-auto max-h-[90vh] flex flex-col"
            >
              {/* Header Image Cover */}
              <div className="relative h-60 sm:h-72 overflow-hidden shrink-0">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-all cursor-pointer hover:scale-105 z-20"
                  aria-label="Close procedure popup"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Badges and Title over Image Header */}
                <div className="absolute bottom-5 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-purple-600 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      {treatment.category}
                    </span>
                    {treatment.painless && (
                      <span className="px-3 py-1 rounded-full bg-teal-500 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> 100% Painless Protocol
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm">
                    {treatment.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Body Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Description */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-700 mb-2">
                    Procedure Overview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {treatment.fullDesc}
                  </p>
                </div>

                {/* Key Benefits Grid */}
                {treatment.benefits && (
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-700 mb-3">
                      Key Clinical Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {treatment.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 bg-purple-50/50 p-3 rounded-2xl border border-purple-100/70"
                        >
                          <div className="p-1 rounded-full bg-purple-100 text-purple-700 shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Clinical Spec Highlights */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
                  <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-100">
                    <Clock className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                    <span className="text-purple-400 block text-[10px] uppercase font-extrabold">Duration</span>
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm">{treatment.duration}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100">
                    <Shield className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
                    <span className="text-indigo-400 block text-[10px] uppercase font-extrabold">Recovery</span>
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm">{treatment.recovery}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-100">
                    <Sparkles className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                    <span className="text-teal-500 block text-[10px] uppercase font-extrabold">Estimate</span>
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm">{treatment.priceEstimate}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 bg-purple-50/30 border-t border-purple-100 flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    setModalOpen(false);
                    if (onOpenAppointment) onOpenAppointment(treatment.title);
                  }}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment For This Procedure</span>
                </button>

                <a
                  href="tel:+919876543210"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white border border-purple-200 text-slate-800 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shrink-0"
                >
                  <PhoneCall className="w-4 h-4 text-purple-600" />
                  <span>Call Doctor</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}


