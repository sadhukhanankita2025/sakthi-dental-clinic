import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Stethoscope } from 'lucide-react';
import TreatmentCard from './TreatmentCard';
import { TREATMENTS_DATA } from '../data/treatmentsData';

export default function Services({ onOpenAppointment }) {
  // Select requested key treatments for home showcase
  const homeTreatmentsKeys = [
    'teeth-cleaning',
    'tooth-filling',
    'tooth-extraction',
    'artificial-denture',
    'bleaching',
    'orthodontics'
  ];

  const featuredTreatments = TREATMENTS_DATA.filter((t) =>
    homeTreatmentsKeys.includes(t.id)
  );

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5" /> Comprehensive Dental Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Treatments Tailored for You
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Painless procedures using world-class equipment and biocompatible dental materials.
            </p>
          </div>

          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-100 hover:bg-[#0D9488] text-slate-800 hover:text-white text-xs font-bold transition-all shadow-sm group shrink-0"
          >
            <span>View Full Treatments (15+)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredTreatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <TreatmentCard treatment={treatment} onOpenAppointment={onOpenAppointment} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#0D9488] to-[#0284C7] text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#0D9488]/25 hover:opacity-95 transition-all group cursor-pointer"
          >
            <span>View All 15+ Advanced Treatments</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
