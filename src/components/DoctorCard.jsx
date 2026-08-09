import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Award, Calendar, CheckCircle2, ShieldCheck, FileText, ChevronDown, ChevronUp } from 'lucide-react';

export default function DoctorCard({ doctor, onOpenAppointment }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden flex flex-col justify-between group transition-all duration-300 border border-slate-200/80 hover:border-[#0D9488]/50 hover:shadow-2xl rounded-3xl"
    >
      <div>
        {/* Doctor Photo Header */}
        <div className="relative h-64 overflow-hidden bg-slate-100">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center gap-1 text-xs font-bold text-slate-800">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>{doctor.rating}</span>
            <span className="text-[10px] text-slate-400 font-normal">({doctor.reviewsCount})</span>
          </div>

          {/* Experience Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D9488] text-white text-[10px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            <span>{doctor.experience}</span>
          </div>

          {/* Bottom Photo Overlay Info */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/90 text-[10px] font-extrabold uppercase tracking-wider mb-1">
              {doctor.proceduresDone}
            </span>
            <p className="text-[10px] text-slate-200 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> {doctor.regNo}
            </p>
          </div>
        </div>

        {/* Info Content */}
        <div className="p-6 space-y-3">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#0D9488] transition-colors">
              {doctor.name}
            </h3>
            <p className="text-xs font-bold text-[#0D9488] uppercase tracking-wider mt-0.5">
              {doctor.role}
            </p>
          </div>

          <p className="text-xs font-semibold text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            🎓 {doctor.qualifications}
          </p>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {doctor.bio}
          </p>

          <div className="pt-2 text-xs font-semibold text-slate-700 space-y-1.5">
            <div className="flex items-start gap-1.5 text-slate-700 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>Core Specialty: <strong className="text-slate-900">{doctor.specialty}</strong></span>
            </div>

            {/* Toggle Fellowships & Certifications */}
            {doctor.memberships && doctor.memberships.length > 0 && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-[11px] font-bold text-[#0D9488] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{showDetails ? 'Hide Credentials' : 'View Fellowships & Memberships'}</span>
                  {showDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>

                {showDetails && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2 space-y-1 pl-2 border-l-2 border-[#0D9488]/30 text-[10px] text-slate-600 font-medium"
                  >
                    {doctor.memberships.map((mem, idx) => (
                      <li key={idx}>• {mem}</li>
                    ))}
                  </motion.ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Book Appointment CTA */}
      <div className="px-6 pb-6 pt-2">
        <button
          onClick={() => onOpenAppointment && onOpenAppointment('', doctor.name)}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#059669] hover:opacity-95 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#0D9488]/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Dr. Consultation</span>
        </button>
      </div>
    </motion.div>
  );
}
