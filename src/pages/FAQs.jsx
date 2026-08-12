import React from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTA from '../components/CTA';

export default function FAQs({ onOpenAppointment }) {
  return (
    <div className="pt-24 pb-16 space-y-16 bg-slate-50">
      
      {/* Hero Header */}
      <section className="bg-gradient-hero py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-bold text-[#0D9488] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Patient Guidance & FAQs
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about pain relief, dental scaling, root canals, implants, braces, and daily oral hygiene routines.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </section>

      <CTA onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
