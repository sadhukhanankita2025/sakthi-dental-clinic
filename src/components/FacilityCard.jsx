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
  },

  Accessibility: {
    icon: "bg-linear-to-br from-sky-300 to-blue-400",
    iconBg: "bg-sky-50",
    hover: "group-hover:text-sky-600",
    border: "hover:border-sky-200",
  },

  Truck: {
    icon: "bg-linear-to-br from-rose-300 to-pink-400",
    iconBg: "bg-rose-50",
    hover: "group-hover:text-rose-600",
    border: "hover:border-rose-200",
  },

  UserCheck: {
    icon: "bg-linear-to-br from-emerald-300 to-teal-400",
    iconBg: "bg-emerald-50",
    hover: "group-hover:text-emerald-600",
    border: "hover:border-emerald-200",
  },

  MapPin: {
    icon: "bg-linear-to-br from-amber-300 to-orange-400",
    iconBg: "bg-amber-50",
    hover: "group-hover:text-amber-600",
    border: "hover:border-amber-200",
  },

  Gamepad2: {
    icon: "bg-linear-to-br from-fuchsia-300 to-purple-400",
    iconBg: "bg-fuchsia-50",
    hover: "group-hover:text-fuchsia-600",
    border: "hover:border-fuchsia-200",
  },

  Scan: {
    icon: "bg-linear-to-br from-cyan-300 to-teal-400",
    iconBg: "bg-cyan-50",
    hover: "group-hover:text-cyan-600",
    border: "hover:border-cyan-200",
  },

  ShieldCheck: {
    icon: "bg-linear-to-br from-indigo-300 to-violet-400",
    iconBg: "bg-indigo-50",
    hover: "group-hover:text-indigo-600",
    border: "hover:border-indigo-200",
  },
};

// =====================================================
// FACILITY CARD
// =====================================================
export default function FacilityCard({ facility, index = 0 }) {
  const IconComponent = iconMap[facility?.iconName] || ShieldCheck;

  const theme =
    colorThemes[facility?.iconName] || colorThemes.ShieldCheck;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/90
        p-5
        sm:p-6
        flex
        items-start
        gap-4
        border
        border-violet-100
        shadow-[0_8px_30px_rgba(139,92,246,0.06)]
        hover:shadow-[0_16px_40px_rgba(139,92,246,0.12)]
        ${theme.border}
        transition-all
        duration-300
      `}
    >
      {/* =================================================
          SOFT DECORATIVE BACKGROUND
      ================================================= */}
      <div
        className="
          absolute
          -right-10
          -top-10
          w-24
          h-24
          rounded-full
          bg-violet-100/40
          blur-2xl
          pointer-events-none
          transition-transform
          duration-500
          group-hover:scale-150
        "
      />

      {/* =================================================
          ICON
      ================================================= */}
      <div
        className={`
          relative
          ${theme.iconBg}
          w-12
          h-12
          sm:w-14
          sm:h-14
          rounded-2xl
          flex
          items-center
          justify-center
          shrink-0
          shadow-sm
          transition-transform
          duration-300
          group-hover:scale-110
        `}
      >
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
          `}
        >
          <IconComponent
            className="w-5 h-5 sm:w-6 sm:h-6"
            strokeWidth={2}
          />
        </div>
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}
      <div className="relative min-w-0 pt-0.5">
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
    </motion.div>
  );
}