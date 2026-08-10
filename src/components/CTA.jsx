import React from 'react';
import { motion } from 'motion/react';
import { Calendar, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

export default function CTA({ onOpenAppointment }) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#FAF5FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[36px] bg-gradient-to-r from-purple-700 via-indigo-700 to-teal-700 p-8 sm:p-14 text-white shadow-2xl overflow-hidden"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-purple-200" /> Ready for a Healthier Smile?
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Book Your Appointment Today
            </h2>

            <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-normal leading-relaxed">
              Don't let tooth pain or dental anxiety hold you back. Schedule a gentle consultation with Dr. Sakthi Saravanan & team today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-purple-950 font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-purple-600" />
                <span>Fix an Appointment</span>
              </motion.button>

              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider border border-white/30 hover:bg-black/40 transition-all flex items-center justify-center gap-2.5"
              >
                <PhoneCall className="w-4 h-4 text-teal-300" />
                <span>Call Emergency: +91 98765 43210</span>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-teal-300" /> Instant Confirmation
              </span>
              <span>•</span>
              <span>100% Pain-Free Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

