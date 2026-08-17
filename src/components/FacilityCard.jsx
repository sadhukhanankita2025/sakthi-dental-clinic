import React from "react";
import { motion } from "motion/react";
import {
  Car,
  Accessibility,
  Truck,
  UserCheck,
  MapPin,
  Gamepad2,
  Scan,
  ShieldCheck,
} from "lucide-react";

// =====================================================
// ICON MAP
// =====================================================
const iconMap = {
  Car,
  Accessibility,
  Truck,
  UserCheck,
  MapPin,
  Gamepad2,
  Scan,
  ShieldCheck,
};

// =====================================================
// PASTEL COLOR THEMES
// =====================================================
const colorThemes = {
  Car: {
    icon: "bg-linear-to-br from-violet-300 to-purple-400",
    iconBg: "bg-violet-50",
    hover: "group-hover:text-violet-600",
    border: "hover:border-violet-200",
    glow: "bg-violet-300/20",
  },

  Accessibility: {
    icon: "bg-linear-to-br from-sky-300 to-blue-400",
    iconBg: "bg-sky-50",
    hover: "group-hover:text-sky-600",
    border: "hover:border-sky-200",
    glow: "bg-sky-300/20",
  },

  Truck: {
    icon: "bg-linear-to-br from-rose-300 to-pink-400",
    iconBg: "bg-rose-50",
    hover: "group-hover:text-rose-600",
    border: "hover:border-rose-200",
    glow: "bg-rose-300/20",
  },

  UserCheck: {
    icon: "bg-linear-to-br from-emerald-300 to-teal-400",
    iconBg: "bg-emerald-50",
    hover: "group-hover:text-emerald-600",
    border: "hover:border-emerald-200",
    glow: "bg-emerald-300/20",
  },

  MapPin: {
    icon: "bg-linear-to-br from-amber-300 to-orange-400",
    iconBg: "bg-amber-50",
    hover: "group-hover:text-amber-600",
    border: "hover:border-amber-200",
    glow: "bg-amber-300/20",
  },

  Gamepad2: {
    icon: "bg-linear-to-br from-fuchsia-300 to-purple-400",
    iconBg: "bg-fuchsia-50",
    hover: "group-hover:text-fuchsia-600",
    border: "hover:border-fuchsia-200",
    glow: "bg-fuchsia-300/20",
  },

  Scan: {
    icon: "bg-linear-to-br from-cyan-300 to-teal-400",
    iconBg: "bg-cyan-50",
    hover: "group-hover:text-cyan-600",
    border: "hover:border-cyan-200",
    glow: "bg-cyan-300/20",
  },

  ShieldCheck: {
    icon: "bg-linear-to-br from-indigo-300 to-violet-400",
    iconBg: "bg-indigo-50",
    hover: "group-hover:text-indigo-600",
    border: "hover:border-indigo-200",
    glow: "bg-indigo-300/20",
  },
};

// =====================================================
// FACILITY CARD
// =====================================================
export default function FacilityCard({ facility, index = 0 }) {
  const IconComponent =
    iconMap[facility?.iconName] || ShieldCheck;

  const theme =
    colorThemes[facility?.iconName] || colorThemes.ShieldCheck;

  return (
    <motion.div
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -7,
        scale: 1.015,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/95
        p-5
        sm:p-6
        flex
        items-start
        gap-4
        border
        border-violet-100
        shadow-[0_8px_30px_rgba(139,92,246,0.06)]
        hover:shadow-[0_20px_50px_rgba(139,92,246,0.16)]
        ${theme.border}
        transition-all
        duration-300
      `}
    >
      {/* =================================================
          DECORATIVE GLOW
      ================================================= */}
      <div
        className={`
          absolute
          -right-12
          -top-12
          w-32
          h-32
          rounded-full
          ${theme.glow}
          blur-3xl
          pointer-events-none
          transition-all
          duration-700
          group-hover:scale-[1.8]
          group-hover:opacity-100
        `}
      />

      {/* Second glow */}
      <div
        className="
          absolute
          -bottom-12
          -left-12
          w-28
          h-28
          rounded-full
          bg-purple-200/20
          blur-3xl
          pointer-events-none
          transition-all
          duration-700
          group-hover:scale-150
        "
      />

      {/* =================================================
          IMAGE / ICON
      ================================================= */}
      <div
        className={`
          relative
          z-10
          ${theme.iconBg}
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-2xl
          flex
          items-center
          justify-center
          shrink-0
          shadow-sm
          border
          border-white
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:-rotate-2
        `}
      >
        {facility?.image ? (
          <img
            src={facility.image}
            alt={facility.title || "Clinic facility"}
            loading="lazy"
            className="
              w-11
              h-11
              sm:w-12
              sm:h-12
              object-contain
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        ) : (
          <div
            className={`
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-xl
              ${theme.icon}
              text-white
              flex
              items-center
              justify-center
              shadow-sm
              transition-transform
              duration-500
              group-hover:rotate-6
            `}
          >
            <IconComponent
              className="w-5 h-5 sm:w-6 sm:h-6"
              strokeWidth={2}
            />
          </div>
        )}

        {/* Image glow ring */}
        <div
          className="
            absolute
            inset-0
            rounded-2xl
            ring-2
            ring-transparent
            group-hover:ring-violet-200/60
            transition-all
            duration-500
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}
      <div className="relative z-10 min-w-0 pt-0.5">
        <h4
          className={`
            text-sm
            sm:text-base
            font-bold
            text-slate-800
            tracking-tight
            ${theme.hover}
            transition-colors
            duration-300
            mb-1.5
          `}
        >
          {facility?.title || "Clinic Facility"}
        </h4>

        <p
          className="
            text-xs
            sm:text-sm
            text-slate-500
            leading-relaxed
            max-w-md
          "
        >
          {facility?.desc ||
            "Comfortable and convenient facilities designed for our patients."}
        </p>
      </div>

      {/* =================================================
          HOVER SHINE
      ================================================= */}
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          group-hover:translate-x-full
          transition-transform
          duration-1000
          pointer-events-none
          bg-linear-to-r
          from-transparent
          via-white/40
          to-transparent
          skew-x-12
        "
      />
    </motion.div>
  );
}