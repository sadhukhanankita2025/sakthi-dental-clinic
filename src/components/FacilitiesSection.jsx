import React from 'react';
import { Sparkles, Building2 } from 'lucide-react';
import FacilityCard from './FacilityCard';
import { FACILITIES_DATA } from '../data/facilitiesData';

export default function FacilitiesSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" /> World-Class Hospital Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Facilities & Amenities
          </h2>
          <p className="text-sm text-slate-600">
            Designed for seamless comfort, accessibility, and peace of mind for patients of all age groups.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((facility, idx) => (
            <FacilityCard key={facility.id} facility={facility} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
