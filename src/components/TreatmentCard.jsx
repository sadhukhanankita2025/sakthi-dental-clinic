import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  Shield,
  Sparkles,
  X,
  Check,
  Calendar,
  Eye,
  Info,
  ChevronRight,
  PhoneCall,
} from "lucide-react";

export default function TreatmentCard({
  treatment,
  onOpenAppointment,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  // Prevent crash if treatment is missing
  if (!treatment) {
    console.warn("TreatmentCard: treatment prop is missing.");
    return null;
  }

  return (
    <>
      {/* =====================================================
          TREATMENT CARD
      ====================================================== */}

      <motion.div
        whileHover={{ y: -8 }}
        onClick={() => setModalOpen(true)}
        className="group relative flex h-90 cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-900 shadow-md transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20 sm:h-95"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={treatment.image || "/images/default-treatment.jpg"}
            alt={treatment.title || "Dental Treatment"}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-purple-950 via-purple-950/60 to-slate-950/20 transition-colors duration-300 group-hover:via-purple-950/75" />
        </div>

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between gap-2 p-5">
          <span className="rounded-full border border-purple-200/40 bg-white/95 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-purple-900 shadow-sm backdrop-blur-md">
            {treatment.category || "Dental Care"}
          </span>

          <div className="flex items-center gap-1.5">
            {treatment.painless && (
              <span className="flex items-center gap-1 rounded-full bg-purple-600/90 px-3 py-1 text-[10px] font-bold tracking-wide text-white shadow-md backdrop-blur-md">
                <Sparkles className="h-3 w-3" />
                Painless
              </span>
            )}

            <span className="rounded-full bg-purple-950/50 p-2 text-purple-100 backdrop-blur-md transition-all group-hover:bg-purple-600 group-hover:text-white">
              <Eye className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Hover Message */}
        <div className="relative z-10 my-auto scale-90 text-center opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/30 bg-purple-900/30 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md">
            <Info className="h-4 w-4 text-purple-300" />
            Click image for full details
          </span>
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 space-y-3 p-6">
          <div>
            <h3 className="text-xl font-black tracking-tight text-white transition-colors duration-200 group-hover:text-purple-300 sm:text-2xl">
              {treatment.title || "Dental Treatment"}
            </h3>

            <p className="mt-1.5 line-clamp-2 text-xs font-medium leading-relaxed text-purple-100/80">
              {treatment.shortDesc || "Professional dental care and treatment."}
            </p>
          </div>

          {/* Quick Specs */}
          <div className="flex items-center justify-between border-t border-purple-200/20 pt-3 text-xs font-semibold text-purple-100/80">
            <div className="flex items-center gap-1.5 text-purple-300">
              <Clock className="h-3.5 w-3.5" />
              <span>{treatment.duration || "Consultation"}</span>
            </div>

            <div className="font-bold text-purple-300">
              {treatment.priceEstimate || "Contact Us"}
            </div>

            <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white/90 transition-colors group-hover:text-purple-300">
              <span>Details</span>
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          TREATMENT DETAILS MODAL
      ====================================================== */}

      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-purple-950/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="relative z-10 my-auto flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-2xl"
            >
              {/* Modal Header Image */}
              <div className="relative h-60 shrink-0 overflow-hidden sm:h-72">
                <img
                  src={
                    treatment.image ||
                    "/images/default-treatment.jpg"
                  }
                  alt={treatment.title || "Dental Treatment"}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-purple-950 via-purple-900/40 to-transparent" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="absolute right-4 top-4 z-20 cursor-pointer rounded-full bg-purple-950/70 p-2.5 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-purple-950"
                  aria-label="Close procedure popup"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Title */}
                <div className="absolute bottom-5 left-6 right-6 space-y-2 text-white">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      {treatment.category || "Dental Care"}
                    </span>

                    {treatment.painless && (
                      <span className="flex items-center gap-1 rounded-full bg-violet-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                        <Sparkles className="h-3 w-3" />
                        100% Painless Protocol
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-black tracking-tight drop-shadow-sm sm:text-3xl">
                    {treatment.title || "Dental Treatment"}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 overflow-y-auto p-6 sm:p-8">
                {/* Description */}
                <div>
                  <h4 className="mb-2 text-xs font-extrabold uppercase tracking-widest text-purple-700">
                    Procedure Overview
                  </h4>

                  <p className="text-sm font-normal leading-relaxed text-slate-700 sm:text-base">
                    {treatment.fullDesc ||
                      treatment.shortDesc ||
                      "Please contact our dental clinic for complete procedure information."}
                  </p>
                </div>

                {/* Benefits */}
                {Array.isArray(treatment.benefits) &&
                  treatment.benefits.length > 0 && (
                    <div>
                      <h4 className="mb-3 text-xs font-extrabold uppercase tracking-widest text-purple-700">
                        Key Clinical Benefits
                      </h4>

                      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {treatment.benefits.map(
                          (benefit, idx) => (
                            <div
                              key={`${benefit}-${idx}`}
                              className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-purple-50/70 p-3 text-xs font-semibold text-slate-800 sm:text-sm"
                            >
                              <div className="shrink-0 rounded-full bg-purple-100 p-1 text-purple-700">
                                <Check className="h-3.5 w-3.5 stroke-3" />
                              </div>

                              <span>{benefit}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* Clinical Highlights */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
                  {/* Duration */}
                  <div className="rounded-2xl border border-purple-100 bg-purple-50/80 p-4">
                    <Clock className="mx-auto mb-1 h-4 w-4 text-purple-700" />

                    <span className="block text-[10px] font-extrabold uppercase text-slate-400">
                      Duration
                    </span>

                    <span className="text-xs font-extrabold text-slate-800 sm:text-sm">
                      {treatment.duration || "Varies"}
                    </span>
                  </div>

                  {/* Recovery */}
                  <div className="rounded-2xl border border-violet-100 bg-violet-50/80 p-4">
                    <Shield className="mx-auto mb-1 h-4 w-4 text-violet-700" />

                    <span className="block text-[10px] font-extrabold uppercase text-slate-400">
                      Recovery
                    </span>

                    <span className="text-xs font-extrabold text-slate-800 sm:text-sm">
                      {treatment.recovery || "Varies"}
                    </span>
                  </div>

                  {/* Estimate */}
                  <div className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50/80 p-4">
                    <Sparkles className="mx-auto mb-1 h-4 w-4 text-fuchsia-600" />

                    <span className="block text-[10px] font-extrabold uppercase text-slate-400">
                      Estimate
                    </span>

                    <span className="text-xs font-extrabold text-slate-800 sm:text-sm">
                      {treatment.priceEstimate || "Contact Us"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex shrink-0 flex-col items-center gap-3 border-t border-purple-100 bg-purple-50/60 p-6 sm:flex-row">
                {/* Appointment */}
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);

                    if (onOpenAppointment) {
                      onOpenAppointment(treatment.title);
                    }
                  }}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-purple-700 via-violet-700 to-fuchsia-600 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-purple-700/25 transition-all hover:scale-[1.01] hover:opacity-95 sm:flex-1"
                >
                  <Calendar className="h-4 w-4" />

                  <span>
                    Book Appointment For This Procedure
                  </span>
                </button>

                {/* Call Doctor */}
                <a
                  href="tel:+919876543210"
                  className="flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl border border-purple-200 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:bg-purple-50 sm:w-auto"
                >
                  <PhoneCall className="h-4 w-4 text-purple-700" />

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
