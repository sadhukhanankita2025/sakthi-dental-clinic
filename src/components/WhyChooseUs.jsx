import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, HeartPulse, UserCheck, Heart, Cpu, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 'all-in-one',
      title: 'Complete Dental Ecosystem',
      badge: 'Integrated Care',
      desc: 'An all-under-one-roof clinical environment — from preventive checkups to 3D guided implants, invisible braces, and specialized pediatric suites.',
      icon: HeartPulse,
      gradient: 'from-[#0D9488] to-teal-700',
      accentColor: 'text-[#0D9488]',
      badgeBg: 'bg-[#0D9488]/10 text-[#0D9488]',
      borderColor: 'group-hover:border-[#0D9488]/50',
      shadow: 'shadow-[#0D9488]/20'
    },
    {
      id: 'doctors',
      title: '20+ Yrs Master Surgeons',
      badge: 'MDS Specialists',
      desc: 'Led by Chief Surgeon Dr. Sakthi Saravanan, our team brings together board-certified MDS specialists in every advanced dental discipline.',
      icon: UserCheck,
      gradient: 'from-[#0284C7] to-sky-700',
      accentColor: 'text-[#0284C7]',
      badgeBg: 'bg-[#0284C7]/10 text-[#0284C7]',
      borderColor: 'group-hover:border-[#0284C7]/50',
      shadow: 'shadow-[#0284C7]/20'
    },
    {
      id: 'patient-centric',
      title: 'Zero-Anxiety Patient Comfort',
      badge: 'Pain-Free Protocol',
      desc: 'Gentle, transparent consultations with 100% upfront pricing, pain-free computer-assisted anesthesia, and soothing child-friendly environments.',
      icon: Heart,
      gradient: 'from-[#059669] to-emerald-700',
      accentColor: 'text-[#059669]',
      badgeBg: 'bg-[#059669]/10 text-[#059669]',
      borderColor: 'group-hover:border-[#059669]/50',
      shadow: 'shadow-[#059669]/20'
    },
    {
      id: 'technology',
      title: 'Next-Gen 3D Robotics & Scans',
      badge: 'German Tech',
      desc: 'Powered by low-radiation 3D CBCT digital imaging, soft-tissue laser drills, CAD/CAM ceramic crowns, and Class-B autoclave sterilization.',
      icon: Cpu,
      gradient: 'from-cyan-600 to-teal-600',
      accentColor: 'text-cyan-600',
      badgeBg: 'bg-cyan-500/10 text-cyan-700',
      borderColor: 'group-hover:border-cyan-500/50',
      shadow: 'shadow-cyan-500/20'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 relative overflow-hidden">
      {/* Background Subtle Tech Mesh Blur */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-xs font-extrabold text-[#0D9488] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" /> The Sakthi Clinical Distinction
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Pioneering the Future of <span className="text-gradient">Precision Dental Care</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            We blend world-class 3D technology, zero-pain protocols, and compassionate family-first care to establish an unmatched experience in oral health.
          </p>
        </div>

        {/* 4 Premium Modern Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`glass-card p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 border border-slate-200/90 ${feature.borderColor} hover:shadow-2xl hover:shadow-slate-200/80 rounded-[28px] bg-white/90 backdrop-blur-xl`}
              >
                {/* Top Subtle Color Accent Strip */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.gradient}`} />

                <div>
                  {/* Top Bar: Icon Box + Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${feature.gradient} text-white flex items-center justify-center shadow-lg ${feature.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${feature.badgeBg}`}>
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-[#0D9488] transition-colors leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom Footer Accent Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-slate-800 group-hover:text-[#0D9488] transition-colors">
                  <span>Explore Standard</span>
                  <div className={`p-1.5 rounded-full bg-slate-100 group-hover:${feature.badgeBg} group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

