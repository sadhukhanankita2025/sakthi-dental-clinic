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
    <section className="relative overflow-hidden bg-[#FAF5FF] py-20">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div className="max-w-2xl space-y-2.5">

            {/* Badge */}

            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-200/80 bg-purple-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">

              <Stethoscope className="h-3.5 w-3.5 text-purple-600" />

              Comprehensive Dental Solutions

            </div>

            {/* Heading */}

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">

              Specialized Treatments Tailored for You

            </h2>

            {/* Description */}

            <p className="text-sm font-normal text-slate-600 sm:text-base">

              Painless procedures using world-class equipment and
              biocompatible dental materials.

            </p>

          </div>

        </div>

        {/* =====================================================
            CAROUSEL
        ====================================================== */}

        <div className="group/carousel relative">

          {/* ===================================================
              LEFT ARROW
          ==================================================== */}

          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="
              absolute
              left-0
              top-1/2
              z-20
              flex
              h-11
              w-11
              -translate-x-3
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-purple-200
              bg-white/95
              text-purple-950
              shadow-xl
              backdrop-blur-md
              transition-all
              hover:scale-110
              hover:bg-purple-600
              hover:text-white
              active:scale-95
              sm:-translate-x-5
            "
            aria-label="Previous Treatment"
          >
            <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
          </button>

          {/* ===================================================
              TREATMENT CARDS
          ==================================================== */}

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="
              flex
              snap-x
              snap-mandatory
              gap-6
              overflow-x-auto
              scroll-smooth
              px-1
              py-4
              scrollbar-none
            "
          >

            {TREATMENTS_DATA.map((treatment) => (
              <div
                key={treatment.id}
                className="
                  w-75
                  shrink-0
                  snap-start
                  sm:w-87.5
                  md:w-95
                "
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
            className="
              absolute
              right-0
              top-1/2
              z-20
              flex
              h-11
              w-11
              translate-x-3
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-purple-200
              bg-white/95
              text-purple-950
              shadow-xl
              backdrop-blur-md
              transition-all
              hover:scale-110
              hover:bg-purple-600
              hover:text-white
              active:scale-95
              sm:translate-x-5
            "
            aria-label="Next Treatment"
          >
            <ChevronRight className="h-6 w-6 stroke-[2.5]" />
          </button>

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-8 flex justify-end border-t border-purple-100/80 pt-4">

          <Link
            to="/treatments"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2.5
              rounded-full
              bg-purple-950
              px-6
              py-3
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-white
              shadow-md
              transition-all
              hover:bg-purple-900
              hover:shadow-lg
            "
          >

            <span>
              View All Treatments Grid
            </span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

          </Link>

        </div>

      </div>

    </section>
  );
}