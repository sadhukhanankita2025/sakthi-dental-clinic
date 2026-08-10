import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, Sparkles, Stethoscope, Filter, Layers } from 'lucide-react';
import TreatmentCard from '../components/TreatmentCard';
import { TREATMENTS_DATA, TREATMENTS_CATEGORIES } from '../data/treatmentsData';
import CTA from '../components/CTA';

export default function Treatments({ onOpenAppointment }) {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchParams.get('cat')) {
      setActiveCategory(searchParams.get('cat'));
    }
  }, [searchParams]);

  // Filter treatments
  const filteredTreatments = TREATMENTS_DATA.filter((t) => {
    const matchesCat = activeCategory === 'All' || t.category === activeCategory;
    const matchesQuery =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-24 pb-16 space-y-16 bg-slate-50">
      
      {/* Hero Header */}
      <section className="bg-gradient-hero py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-bold text-[#0D9488] uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" /> Complete Dental Care Directory
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Specialized Treatments & Procedures
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            From preventive scaling to advanced 3D implants and clear aligners, discover international quality dental treatments designed for zero pain.
          </p>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 border border-slate-200/80 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search treatments (e.g. Root Canal, Implants, Bleaching)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 shadow-sm"
              />
            </div>

            {/* Total Badge */}
            <div className="text-xs font-bold text-slate-500">
              Showing <span className="text-slate-900 font-extrabold">{filteredTreatments.length}</span> of {TREATMENTS_DATA.length} Procedures
            </div>

          </div>

          {/* Categories Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {TREATMENTS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#0D9488] to-[#0284C7] text-white shadow-md shadow-[#0D9488]/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                onOpenAppointment={onOpenAppointment}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card space-y-3">
            <Layers className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="text-lg font-bold text-slate-800">No treatments found</p>
            <p className="text-xs text-slate-500">Try searching for another keyword or select "All" categories.</p>
          </div>
        )}
      </section>

      <CTA onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
