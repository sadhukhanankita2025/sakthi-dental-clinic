import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  Stethoscope,
  Layers,
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
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="bg-gradient-hero py-12 sm:py-16">
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

          <div
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white/80
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-[#0D9488]
              shadow-sm
              backdrop-blur-md
            "
          >
            <Stethoscope className="h-4 w-4" />

            Complete Dental Care Directory
          </div>

          {/* Heading */}

          <h1
            className="
              mt-5
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-5xl
            "
          >
            Specialized Treatments & Procedures
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            From preventive scaling to advanced
            3D implants and clear aligners,
            discover international quality dental
            treatments designed for comfortable
            and confident care.
          </p>

        </div>
      </section>

      {/* =====================================================
          SEARCH + FILTER SECTION
      ====================================================== */}

      <section
        className="
          mx-auto
          mt-12
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-slate-200/80
            bg-white
            p-5
            shadow-md
            sm:p-6
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
                placeholder="Search treatments..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  py-3
                  pl-11
                  pr-4
                  text-sm
                  font-medium
                  text-slate-800
                  outline-none
                  shadow-sm
                  transition
                  placeholder:text-slate-400
                  focus:border-[#0D9488]
                  focus:ring-2
                  focus:ring-[#0D9488]/20
                "
              />
            </div>

            {/* Result Count */}

            <div
              className="
                text-xs
                font-bold
                text-slate-500
              "
            >
              Showing{" "}

              <span
                className="
                  font-extrabold
                  text-slate-900
                "
              >
                {filteredTreatments.length}
              </span>

              {" "}of{" "}

              <span
                className="
                  font-extrabold
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
                    rounded-xl
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    transition-all
                    duration-200
                    ${
                      activeCategory === category
                        ? "bg-linear-to-r from-[#0D9488] to-[#0284C7] text-white shadow-md shadow-[#0D9488]/20"
                        : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
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
          mt-12
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
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
              rounded-3xl
              border
              border-slate-200
              bg-white
              px-6
              py-16
              text-center
              shadow-sm
            "
          >

            <Layers
              className="
                mx-auto
                h-12
                w-12
                text-slate-300
              "
            />

            <h3
              className="
                mt-4
                text-lg
                font-extrabold
                text-slate-800
              "
            >
              No treatments found
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
              "
            >
              Try another keyword or select
              the "All" category.
            </p>

            <button
              type="button"
              onClick={
                handleClearFilters
              }
              className="
                mt-5
                rounded-xl
                bg-linear-to-r
                from-[#0D9488]
                to-[#0284C7]
                px-5
                py-2.5
                text-xs
                font-bold
                text-white
                shadow-md
                transition
                hover:scale-[1.02]
                active:scale-[0.98]
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

      <section className="mt-16">
        <CTA
          onOpenAppointment={
            handleAppointment
          }
        />
      </section>

    </div>
  );
}