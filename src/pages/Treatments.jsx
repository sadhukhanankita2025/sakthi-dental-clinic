import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  Search,
  Stethoscope,
  Layers,
  Sparkles,
} from "lucide-react";

import TreatmentCard from "../components/TreatmentCard";
import CTA from "../components/CTA";

import {
  TREATMENTS_DATA,
  TREATMENTS_CATEGORIES,
} from "../data/treatmentsData";

export default function Treatments({ onOpenAppointment }) {
  const [searchParams] = useSearchParams();

  // =====================================================
  // CATEGORY FROM URL
  // =====================================================

  const categoryFromURL =
    searchParams.get("cat") || "All";

  const [activeCategory, setActiveCategory] =
    useState(categoryFromURL);

  const [searchQuery, setSearchQuery] =
    useState("");

  // =====================================================
  // UPDATE CATEGORY FROM URL
  // =====================================================

  useEffect(() => {
    const category = searchParams.get("cat");

    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory("All");
    }
  }, [searchParams]);

  // =====================================================
  // FILTER TREATMENTS
  // =====================================================

  const filteredTreatments = TREATMENTS_DATA.filter(
    (treatment) => {
      const title =
        treatment.title?.toLowerCase() || "";

      const description =
        treatment.shortDesc?.toLowerCase() || "";

      const category =
        treatment.category?.toLowerCase() || "";

      const query =
        searchQuery.trim().toLowerCase();

      // Category filter
      const matchesCategory =
        activeCategory === "All" ||
        treatment.category === activeCategory;

      // Search filter
      const matchesSearch =
        query === "" ||
        title.includes(query) ||
        description.includes(query) ||
        category.includes(query);

      return (
        matchesCategory &&
        matchesSearch
      );
    }
  );

  // =====================================================
  // APPOINTMENT HANDLER
  // =====================================================

  const handleAppointment = (
    treatment = ""
  ) => {
    if (
      typeof onOpenAppointment ===
      "function"
    ) {
      onOpenAppointment(treatment);
    } else {
      console.error(
        "Treatments.jsx: onOpenAppointment is not connected. " +
          "Make sure App.jsx passes onOpenAppointment to <Treatments />."
      );
    }
  };

  // =====================================================
  // CATEGORY HANDLER
  // =====================================================

  const handleCategoryChange = (
    category
  ) => {
    setActiveCategory(category);
  };

  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  const handleClearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="min-h-screen pt-24 pb-16 space-y-20 bg-linear-to-b from-purple-50/40 via-white to-slate-50 relative overflow-hidden">
      
      {/* =====================================================
          SOFT PASTEL AMBIENT GLOW EFFECTS
      ====================================================== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-linear-to-br from-purple-200/40 via-indigo-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-125 h-125 bg-purple-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-125 h-125 bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none" />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden py-16 sm:py-20 z-10">
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            text-center
            sm:px-6
            lg:px-8
          "
        >

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-200
              bg-white/90
              px-4
              py-2
              text-xs
              font-extrabold
              uppercase
              tracking-wider
              text-purple-800
              shadow-sm
              backdrop-blur-md
            "
          >
            <Sparkles className="h-4 w-4 text-purple-600" />
            Complete Dental Care Directory
          </motion.div>

          {/* Heading with Colorful Accent */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Specialized <span className="bg-linear-to-r from-purple-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent">Treatments & Procedures</span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-relaxed
              text-slate-600
              sm:text-base
            "
          >
            From preventive scaling to advanced
            3D implants and clear aligners,
            discover international quality dental
            treatments designed for comfortable
            and confident care.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          SEARCH + FILTER SECTION
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >
        <div
          className="
            rounded-4xl
            border
            border-purple-100/80
            bg-white/90
            backdrop-blur-xl
            p-6
            shadow-xl
            shadow-purple-500/5
            sm:p-8
          "
        >

          {/* Search Row */}

          <div
            className="
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            {/* Search Input */}

            <div
              className="
                relative
                w-full
                md:max-w-md
              "
            >
              <Search
                className="
                  absolute
                  left-4
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(
                    event.target.value
                  )
                }
                placeholder="Search treatments by name or keyword..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50/50
                  py-3.5
                  pl-11
                  pr-4
                  text-xs
                  font-bold
                  text-slate-800
                  outline-none
                  shadow-sm
                  transition
                  placeholder:text-slate-400
                  focus:border-purple-600
                  focus:bg-white
                  focus:ring-2
                  focus:ring-purple-600/20
                "
              />
            </div>

            {/* Result Count */}

            <div
              className="
                text-xs
                font-extrabold
                text-slate-500
                uppercase
                tracking-wider
              "
            >
              Showing{" "}

              <span
                className="
                  font-black
                  text-purple-700
                "
              >
                {filteredTreatments.length}
              </span>

              {" "}of{" "}

              <span
                className="
                  font-black
                  text-slate-900
                "
              >
                {TREATMENTS_DATA.length}
              </span>

              {" "}Procedures
            </div>

          </div>

          {/* =================================================
              CATEGORY BUTTONS
          ================================================== */}

          <div
            className="
              mt-6
              flex
              gap-2
              overflow-x-auto
              pb-2
              scrollbar-none
            "
          >
            {TREATMENTS_CATEGORIES.map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(
                      category
                    )
                  }
                  className={`
                    whitespace-nowrap
                    rounded-2xl
                    px-5
                    py-3
                    text-xs
                    font-extrabold
                    uppercase
                    tracking-wider
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      activeCategory === category
                        ? "bg-linear-to-r from-purple-600 via-indigo-600 to-teal-600 text-white shadow-lg shadow-purple-500/25"
                        : "border border-purple-100 bg-white text-slate-600 hover:bg-purple-50/50 hover:text-purple-700"
                    }
                  `}
                >
                  {category}
                </button>
              )
            )}
          </div>

        </div>
      </section>

      {/* =====================================================
          TREATMENTS GRID
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >

        {filteredTreatments.length > 0 ? (

          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {filteredTreatments.map(
              (treatment) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                  onOpenAppointment={
                    handleAppointment
                  }
                />
              )
            )}
          </div>

        ) : (

          /* =================================================
              NO RESULTS
          ================================================== */

          <div
            className="
              rounded-4xl
              border
              border-purple-100
              bg-white/90
              backdrop-blur-xl
              px-6
              py-16
              text-center
              shadow-xl
              shadow-purple-500/5
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4 border border-purple-100">
              <Layers className="h-7 w-7" />
            </div>

            <h3
              className="
                text-xl
                font-black
                text-slate-900
              "
            >
              No treatments found
            </h3>

            <p
              className="
                mt-2
                text-xs
                font-medium
                text-slate-500
                max-w-sm
                mx-auto
              "
            >
              Try adjusting your search query or selecting a different category tab above.
            </p>

            <button
              type="button"
              onClick={
                handleClearFilters
              }
              className="
                mt-6
                rounded-2xl
                bg-linear-to-r
                from-purple-600
                to-indigo-600
                px-6
                py-3
                text-xs
                font-extrabold
                uppercase
                tracking-wider
                text-white
                shadow-lg
                shadow-purple-500/20
                transition-all
                hover:shadow-xl
                cursor-pointer
              "
            >
              Clear Filters
            </button>

          </div>
        )}

      </section>

      {/* =====================================================
          CTA SECTION
      ====================================================== */}

      <section className="relative z-10">
        <CTA
          onOpenAppointment={
            handleAppointment
          }
        />
      </section>

    </div>
  );
}