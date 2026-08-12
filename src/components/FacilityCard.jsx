import React from 'react';
import { motion } from 'motion/react';
import { Car, Accessibility, Truck, UserCheck, MapPin, Gamepad2, Scan, ShieldCheck } from 'lucide-react';

const iconMap = {
  Car,
  Accessibility,
  Truck,
  UserCheck,
  MapPin,
  Gamepad2,
  Scan,
  ShieldCheck
};

export default function FacilityCard({ facility, index }) {
  const IconComponent = iconMap[facility.iconName] || ShieldCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-card p-6 flex items-start gap-4 border border-slate-200/70 hover:border-[#0D9488]/30 transition-all duration-300 group"
    >
      {/* Icon Circle */}
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${facility.color} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Text Info */}
      <div>
        <h4 className="text-base font-bold text-slate-800 tracking-tight group-hover:text-[#0D9488] transition-colors mb-1">
          {facility.title}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          {facility.desc}
        </p>
      </div>
    </motion.div>
  );
}
