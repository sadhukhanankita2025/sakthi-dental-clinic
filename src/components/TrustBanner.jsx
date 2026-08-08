import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Sparkles, Check } from 'lucide-react';

export default function TrustBanner() {
  return (
    <section className="py-8 bg-slate-50/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0D9488]/10 via-[#0284C7]/10 to-[#059669]/10 p-6 sm:p-8 border border-white/80 shadow-lg backdrop-blur-md"
        >
          {/* Animated Glow Dot */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#0284C7]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left Content */}
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#0D9488] via-[#0284C7] to-[#059669] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#0D9488]/25">
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9" />
                </motion.div>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Safety First Commitment
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
                  You are always in safe hands.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Class-B German Autoclave sterilization, 100% disposable kits, and gentle bio-friendly materials ensure a safe, infection-free environment.
                </p>
              </div>
            </div>

            {/* Right Quick Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-700">
              <div className="px-3.5 py-2 rounded-xl bg-white/80 shadow-sm border border-slate-200/60 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                <span>Zero Cross-Infection</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-white/80 shadow-sm border border-slate-200/60 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0D9488] stroke-[3]" />
                <span>100% Painless Protocol</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
