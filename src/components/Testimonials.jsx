import React, { useEffect, useRef, useState } from "react";
import {
  Star,
  Quote,
  Heart,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  MessageCircle,
  UserRound,
} from "lucide-react";

import { TESTIMONIALS_DATA } from "../data/testimonialsData";

export default function Testimonials() {
  const scrollRef = useRef(null);

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = Array.isArray(TESTIMONIALS_DATA)
    ? TESTIMONIALS_DATA
    : [];

  // =========================================================
  // AUTO SLIDER
  // =========================================================

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      if (!scrollRef.current) {
        return;
      }

      const container = scrollRef.current;

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: 360,
          behavior: "smooth",
        });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // =========================================================
  // MANUAL SLIDER
  // =========================================================

  const handleScroll = (direction) => {
    if (!scrollRef.current) {
      return;
    }

    const amount = 360;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // =========================================================
  // CLOSE POPUP WITH ESC
  // =========================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedTestimonial(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // =========================================================
  // RATING
  // =========================================================

  const renderStars = (rating = 5, size = "small") => {
    const safeRating = Math.min(
      Math.max(Number(rating) || 5, 1),
      5
    );

    const starClass =
      size === "large"
        ? "w-5 h-5"
        : "w-4 h-4";

    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: safeRating }).map((_, index) => (
          <Star
            key={index}
            className={`${starClass} text-amber-400 fill-amber-400`}
          />
        ))}
      </div>
    );
  };

  // =========================================================
  // INITIALS
  // =========================================================

  const getInitials = (name) => {
    if (!name) {
      return "P";
    }

    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <>
      {/* =====================================================
          TESTIMONIAL SECTION
      ====================================================== */}

      <section className="relative overflow-hidden py-20 sm:py-24 bg-slate-50">
        {/* Background Decoration */}

        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/20 blur-3xl pointer-events-none" />

        {/* Main Container */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* =================================================
              HEADER
          ================================================== */}

          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-100 shadow-sm mb-5">
              <Sparkles className="w-4 h-4 text-teal-500" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700">
                Patient Stories & Reviews
              </span>

              <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
            </div>

            {/* Heading */}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Loved by{" "}
              <span className="bg-linear-to-r from-[#0D9488] via-[#0284C7] to-purple-600 bg-clip-text text-transparent">
                Thousands
              </span>{" "}
              of Families
            </h2>

            {/* Description */}

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Real experiences from patients who trusted Sakthi Dental
              Clinic with their smiles, confidence, and dental health.
            </p>

            {/* Rating */}

            <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-md">
              {renderStars(5)}

              <div className="h-5 w-px bg-slate-200" />

              <span className="text-sm font-black text-slate-800">
                4.9/5
              </span>

              <span className="text-xs font-semibold text-slate-500">
                Patient Rating
              </span>
            </div>
          </div>

          {/* =================================================
              CAROUSEL
          ================================================== */}

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* LEFT BUTTON */}

            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-2 sm:-translate-x-5 w-11 h-11 rounded-full bg-white border border-teal-200 text-slate-700 shadow-xl hover:bg-[#0D9488] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* RIGHT BUTTON */}

            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-2 sm:translate-x-5 w-11 h-11 rounded-full bg-white border border-teal-200 text-slate-700 shadow-xl hover:bg-[#0D9488] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* CARDS CONTAINER */}

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth py-5 px-2 snap-x snap-mandatory testimonials-scroll"
            >
              {testimonials.map((testimonial, index) => {
                const rating = Math.min(
                  Math.max(Number(testimonial.rating) || 5, 1),
                  5
                );

                return (
                  <article
                    key={testimonial.id ?? index}
                    className="group flex-none w-80 sm:w-96 snap-start"
                  >
                    {/* OUTER CARD */}

                    <div className="h-full rounded-3xl p-px bg-linear-to-br from-white via-teal-50 to-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                      {/* INNER CARD */}

                      <div className="relative h-full min-h-90 rounded-3xl bg-white p-7 overflow-hidden">
                        {/* Hover Glow */}

                        <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-teal-200/20 blur-3xl group-hover:bg-teal-300/30 transition-all duration-500" />

                        <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-purple-200/20 blur-3xl group-hover:bg-purple-300/30 transition-all duration-500" />

                        {/* QUOTE ICON */}

                        <div className="absolute top-6 right-6">
                          <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 group-hover:rotate-6 transition-all duration-300">
                            <Quote className="w-6 h-6 text-[#0D9488]/40 group-hover:text-[#0D9488]/70" />
                          </div>
                        </div>

                        {/* CONTENT */}

                        <div className="relative z-10">
                          {/* Stars */}

                          <div className="flex items-center gap-1 mb-5">
                            {renderStars(rating)}

                            <span className="ml-2 text-[9px] font-black tracking-wider text-emerald-500">
                              VERIFIED
                            </span>
                          </div>

                          {/* Review */}

                          <p className="text-sm text-slate-700 leading-7 italic line-clamp-5">
                            "{testimonial.comment}"
                          </p>

                          {/* Read More */}

                          <button
                            type="button"
                            onClick={() =>
                              setSelectedTestimonial(testimonial)
                            }
                            className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#0D9488] hover:text-purple-600 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />

                            Read Full Review

                            <span className="transition-transform group-hover:translate-x-1">
                              →
                            </span>
                          </button>
                        </div>

                        {/* FOOTER */}

                        <div className="relative z-10 pt-6 mt-6 border-t border-slate-200">
                          <div className="flex items-center justify-between gap-3">
                            {/* Patient */}

                            <div className="flex items-center gap-3 min-w-0">
                              {testimonial.image ? (
                                <img
                                  src={testimonial.image}
                                  alt={
                                    testimonial.name ||
                                    "Dental patient"
                                  }
                                  loading="lazy"
                                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                                />
                              ) : (
                                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#0D9488] to-[#0284C7] text-white flex items-center justify-center font-black shadow-lg">
                                  {getInitials(testimonial.name)}
                                </div>
                              )}

                              <div className="min-w-0">
                                <h4 className="text-sm font-black text-slate-900 truncate">
                                  {testimonial.name ||
                                    "Happy Patient"}
                                </h4>

                                <p className="text-[11px] font-bold text-[#0D9488] truncate">
                                  {testimonial.treatment ||
                                    "Dental Treatment"}
                                </p>

                                <p className="text-[10px] text-slate-400 truncate">
                                  {testimonial.role || "Patient"}
                                </p>
                              </div>
                            </div>

                            {/* Heart */}

                            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* =================================================
              TRUST BADGES
          ================================================== */}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {/* Rating */}

            <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              </div>

              <div>
                <p className="text-xs font-black text-slate-800">
                  4.9/5 Rating
                </p>

                <p className="text-[10px] text-slate-400">
                  Patient Satisfaction
                </p>
              </div>
            </div>

            {/* Patients */}

            <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-4 h-4 text-[#0D9488] fill-[#0D9488]" />
              </div>

              <div>
                <p className="text-xs font-black text-slate-800">
                  15,000+
                </p>

                <p className="text-[10px] text-slate-400">
                  Happy Smiles
                </p>
              </div>
            </div>

            {/* Expert Doctors */}

            <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UserRound className="w-4 h-4 text-purple-500" />
              </div>

              <div>
                <p className="text-xs font-black text-slate-800">
                  Expert Doctors
                </p>

                <p className="text-[10px] text-slate-400">
                  Trusted Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL REVIEW POPUP
      ====================================================== */}

      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden animate-testimonial-popup"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Top Gradient */}

            <div className="h-2 bg-linear-to-r from-[#0D9488] via-[#0284C7] to-purple-600" />

            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:rotate-90"
              aria-label="Close review"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Popup Content */}

            <div className="p-7 sm:p-9">
              {/* Quote */}

              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6">
                <Quote className="w-7 h-7 text-[#0D9488]" />
              </div>

              {/* Stars */}

              <div className="mb-5">
                {renderStars(
                  selectedTestimonial.rating,
                  "large"
                )}
              </div>

              {/* Full Comment */}

              <p className="text-base sm:text-lg text-slate-700 leading-8 italic">
                "{selectedTestimonial.comment}"
              </p>

              {/* Divider */}

              <div className="my-7 h-px bg-slate-200" />

              {/* Patient */}

              <div className="flex items-center gap-4">
                {selectedTestimonial.image ? (
                  <img
                    src={selectedTestimonial.image}
                    alt={
                      selectedTestimonial.name ||
                      "Dental patient"
                    }
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#0D9488] to-[#0284C7] text-white flex items-center justify-center font-black text-lg">
                    {getInitials(selectedTestimonial.name)}
                  </div>
                )}

                <div>
                  <h3 className="text-base font-black text-slate-900">
                    {selectedTestimonial.name ||
                      "Happy Patient"}
                  </h3>

                  <p className="text-xs font-bold text-[#0D9488]">
                    {selectedTestimonial.treatment ||
                      "Dental Treatment"}
                  </p>

                  <p className="text-xs text-slate-400">
                    {selectedTestimonial.role || "Patient"}
                  </p>
                </div>
              </div>

              {/* Bottom Message */}

              <div className="mt-7 flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500 shrink-0" />

                <span className="text-xs font-bold text-emerald-700">
                  Thank you for trusting Sakthi Dental Clinic
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}