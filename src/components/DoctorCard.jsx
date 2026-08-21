import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Star,
  Award,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function DoctorCard({ doctor, onOpenAppointment }) {
  const [showDetails, setShowDetails] = useState(false);

  const {
    name = "Dr. Sakthi Saravanan",
    specialty = "Dental Specialist",
    qualification = "BDS, MDS",
    experience = "10+ Years Experience",
    rating = 4.9,
    reviews = 120,
    image,
    location = "Sakthi Dental Clinic",
    description = "Experienced dental professional providing gentle, modern, and patient-focused dental care.",
    verified = true,
    available = true,
  } = doctor || {};

  const initials = name
    .replace("Dr. ", "")
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl"
    >
      {/* =========================
          Doctor Image
      ========================== */}

      <div className="relative h-72 overflow-hidden bg-linear-to-br from-purple-50 via-white to-violet-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-purple-100 text-5xl font-black text-purple-700">
              {initials}
            </div>
          </div>
        )}

        {/* Image Overlay */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/50 to-transparent" />

        {/* =========================
            Availability Badge
        ========================== */}

        <div className="absolute left-4 top-4">
          <span
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold shadow-md backdrop-blur-md ${available
              ? "bg-emerald-500/90 text-white"
              : "bg-slate-700/90 text-white"
              }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${available ? "bg-white" : "bg-slate-300"
                }`}
            />

            {available ? "Available Today" : "Currently Unavailable"}
          </span>
        </div>

        {/* =========================
            Verified Badge
        ========================== */}

        {verified && (
          <div className="absolute right-4 top-4">
            <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-purple-700 shadow-md backdrop-blur-md">
              <ShieldCheck className="h-4 w-4" />
              Verified
            </div>
          </div>
        )}

        {/* =========================
            Doctor Name
        ========================== */}

        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-2xl font-black text-white drop-shadow-lg">
            {name}
          </h3>

          <p className="mt-1 text-sm font-medium text-purple-100">
            {specialty}
          </p>
        </div>
      </div>

      {/* =========================
          Doctor Information
      ========================== */}

      <div className="p-6">

        {/* Qualification */}

        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Award className="h-4 w-4 text-purple-600" />

          <span>{qualification}</span>
        </div>

        {/* Experience */}

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />

          <span>{experience}</span>
        </div>

        {/* =========================
            Rating
        ========================== */}

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-purple-50 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-extrabold text-slate-800">
              {rating}
            </span>

            <span className="text-xs text-slate-500">
              ({reviews} reviews)
            </span>
          </div>

          <span className="text-xs font-bold text-purple-700">
            Highly Rated
          </span>
        </div>

        {/* =========================
            View Details Button
        ========================== */}

        <button
          type="button"
          onClick={() => setShowDetails((prev) => !prev)}
          className="mt-4 flex w-full cursor-pointer items-center justify-between rounded-xl px-1 py-2 text-sm font-bold text-purple-700 transition-colors hover:text-purple-900"
        >
          <span>
            {showDetails ? "Hide Details" : "View Doctor Details"}
          </span>

          {showDetails ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {/* =========================
            Expandable Details
        ========================== */}

        <motion.div
          initial={false}
          animate={{
            height: showDetails ? "auto" : 0,
            opacity: showDetails ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="overflow-hidden"
        >
          <div className="border-t border-slate-100 pt-4">
            <p className="text-sm leading-relaxed text-slate-600">
              {description}
            </p>

            <div className="mt-4 flex items-start gap-2 text-sm text-slate-600">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />

              <span>{location}</span>
            </div>
          </div>
        </motion.div>

        {/* =========================
           Appointment Button
          ========================== */}

        <div className="mt-6">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              // Open Appointment Modal with selected doctor
              onOpenAppointment?.(doctor);
            }}
            className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-purple-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/40 hover:from-purple-700 hover:via-violet-700 hover:to-indigo-700"
          >
            <Calendar className="h-5 w-5" />
            Book Appointment
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}