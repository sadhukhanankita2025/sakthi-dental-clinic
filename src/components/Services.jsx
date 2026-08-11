import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import TreatmentCard from "./TreatmentCard";
import { TREATMENTS_DATA } from "../data/treatmentsData";

export default function Services({ onOpenAppointment }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const {
        scrollLeft,
        scrollWidth,
        clientWidth,
      } = scrollRef.current;

      // Return to beginning when carousel reaches the end
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({
          left: 380,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* =========================================================
     MANUAL CAROUSEL CONTROL
  ========================================================= */

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = direction === "left" ? -380 : 380;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-[#FAF5FF] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">

          <div className="space-y-2.5 max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200/80 text-xs font-bold uppercase tracking-wider">

              <Stethoscope className="w-3.5 h-3.5 text-purple-600" />

              Comprehensive Dental Solutions

            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Treatments Tailored for You
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Painless procedures using world-class equipment and biocompatible
              dental materials.
            </p>

          </div>

        </div>

        {/* =====================================================
            CAROUSEL
        ====================================================== */}

        <div className="relative group/carousel">

          {/* ===================================================
              LEFT ARROW
          ==================================================== */}

          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-purple-200 text-purple-950 shadow-xl hover:bg-purple-600 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
            aria-label="Previous Treatment"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* ===================================================
              TREATMENT CARDS
          ==================================================== */}

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
          >

            {TREATMENTS_DATA.map((treatment) => (
              <div
                key={treatment.id}
                className="w-75 sm:w-87.5 md:w-95 shrink-0 snap-start"
              >
                <TreatmentCard
                  treatment={treatment}
                  onOpenAppointment={onOpenAppointment}
                />
              </div>
            ))}

          </div>

          {/* ===================================================
              RIGHT ARROW
          ==================================================== */}

          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-purple-200 text-purple-950 shadow-xl hover:bg-purple-600 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
            aria-label="Next Treatment"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-8 flex justify-end pt-4 border-t border-purple-100/80">

          <Link
            to="/treatments"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-purple-950 hover:bg-purple-900 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all group cursor-pointer shrink-0"
          >

            <span>
              View All Treatments Grid
            </span>

            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

          </Link>

        </div>

      </div>

    </section>
  );
}