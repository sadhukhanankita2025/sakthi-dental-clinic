import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Stethoscope } from 'lucide-react';
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
    'orthodontics',
  ];

  const featuredTreatments = TREATMENTS_DATA.filter((t) =>
    homeTreatmentsKeys.includes(t.id)
  );

  return (
    <section className="relative overflow-hidden bg-purple-50 py-24">

      {/* =====================================================
          SOFT PURPLE BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl space-y-3">

            {/* Badge */}

            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-800">

              <Stethoscope className="h-3.5 w-3.5 text-purple-600" />

              Comprehensive Dental Solutions

            </div>

            {/* Heading */}

            <h2 className="text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl">
              Specialized{' '}
              <span className="bg-linear-to-r from-purple-700 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Treatments
              </span>{' '}
              Tailored for You
            </h2>

            {/* Description */}

            <p className="text-sm font-normal leading-relaxed text-purple-800/70 sm:text-base">
              Painless procedures using world-class equipment and
              biocompatible dental materials.
            </p>

          </div>

          {/* =================================================
              VIEW TREATMENTS BUTTON
          ================================================== */}

          <Link
            to="/treatments"
            className="group inline-flex shrink-0 items-center gap-2 rounded-2xl border border-purple-200 bg-white px-6 py-3 text-xs font-bold text-purple-800 shadow-sm transition-all hover:bg-purple-700 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span>
              View Full Treatments (15+)
            </span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>

        {/* =====================================================
            TREATMENT GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">

          {featuredTreatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
              }}
              className="group"
            >
              <TreatmentCard
                treatment={treatment}
                onOpenAppointment={onOpenAppointment}
              />
            </motion.div>
          ))}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-12 text-center">

          <Link
            to="/treatments"
            className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-purple-700 via-violet-600 to-fuchsia-600 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/30"
          >

            <span>
              View All 15+ Advanced Treatments
            </span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

          </Link>

        </div>

      </div>
    </section>
  );
}