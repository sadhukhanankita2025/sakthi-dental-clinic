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
    border: "hover:border-violet-300",
    glow: "bg-violet-300/20",
    borderGlow: "from-violet-300 via-purple-400 to-violet-300",
    ring: "group-hover:ring-violet-300/60",
  },

  Accessibility: {
    icon: "bg-linear-to-br from-sky-300 to-blue-400",
    iconBg: "bg-sky-50",
    hover: "group-hover:text-sky-600",
    border: "hover:border-sky-300",
    glow: "bg-sky-300/20",
    borderGlow: "from-sky-300 via-blue-400 to-sky-300",
    ring: "group-hover:ring-sky-300/60",
  },

  Truck: {
    icon: "bg-linear-to-br from-rose-300 to-pink-400",
    iconBg: "bg-rose-50",
    hover: "group-hover:text-rose-600",
    border: "hover:border-rose-300",
    glow: "bg-rose-300/20",
    borderGlow: "from-rose-300 via-pink-400 to-rose-300",
    ring: "group-hover:ring-rose-300/60",
  },

  UserCheck: {
    icon: "bg-linear-to-br from-emerald-300 to-teal-400",
    iconBg: "bg-emerald-50",
    hover: "group-hover:text-emerald-600",
    border: "hover:border-emerald-300",
    glow: "bg-emerald-300/20",
    borderGlow: "from-emerald-300 via-teal-400 to-emerald-300",
    ring: "group-hover:ring-emerald-300/60",
  },

  MapPin: {
    icon: "bg-linear-to-br from-amber-300 to-orange-400",
    iconBg: "bg-amber-50",
    hover: "group-hover:text-amber-600",
    border: "hover:border-amber-300",
    glow: "bg-amber-300/20",
    borderGlow: "from-amber-300 via-orange-400 to-amber-300",
    ring: "group-hover:ring-amber-300/60",
  },

  Gamepad2: {
    icon: "bg-linear-to-br from-fuchsia-300 to-purple-400",
    iconBg: "bg-fuchsia-50",
    hover: "group-hover:text-fuchsia-600",
    border: "hover:border-fuchsia-300",
    glow: "bg-fuchsia-300/20",
    borderGlow: "from-fuchsia-300 via-purple-400 to-fuchsia-300",
    ring: "group-hover:ring-fuchsia-300/60",
  },

  Scan: {
    icon: "bg-linear-to-br from-cyan-300 to-teal-400",
    iconBg: "bg-cyan-50",
    hover: "group-hover:text-cyan-600",
    border: "hover:border-cyan-300",
    glow: "bg-cyan-300/20",
    borderGlow: "from-cyan-300 via-teal-400 to-cyan-300",
    ring: "group-hover:ring-cyan-300/60",
  },

  ShieldCheck: {
    icon: "bg-linear-to-br from-indigo-300 to-violet-400",
    iconBg: "bg-indigo-50",
    hover: "group-hover:text-indigo-600",
    border: "hover:border-indigo-300",
    glow: "bg-indigo-300/20",
    borderGlow: "from-indigo-300 via-violet-400 to-indigo-300",
    ring: "group-hover:ring-indigo-300/60",
  },
};

// =====================================================
// FACILITY CARD
// =====================================================
export default function FacilityCard({
  facility,
  index = 0,
}) {
  const IconComponent =
    iconMap[facility?.iconName] || ShieldCheck;

  const theme =
    colorThemes[facility?.iconName] ||
    colorThemes.ShieldCheck;

  return (
    <motion.div
      // =================================================
      // ENTRANCE ANIMATION
      // =================================================
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      // =================================================
      // FLOATING EFFECT
      // =================================================
      animate={{
        y: [0, -4, 0],
      }}
      className="relative group"
    >
      {/* =================================================
          OUTER GLOWING BORDER
      ================================================= */}
      <motion.div
        className={`
          absolute
          -inset-0.5
          rounded-[26px]
          bg-linear-to-r
          ${theme.borderGlow}
          blur-xs
          pointer-events-none
          transition-opacity
          duration-500
        `}
        animate={{
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.15,
        }}
      />

      {/* =================================================
          STRONG HOVER BORDER GLOW
      ================================================= */}
      <motion.div
        className={`
          absolute
          -inset-px
          rounded-[25px]
          bg-linear-to-r
          ${theme.borderGlow}
          opacity-40
          pointer-events-none
          group-hover:opacity-100
          transition-opacity
          duration-500
        `}
      />

      {/* =================================================
          MAIN CARD
      ================================================= */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.025,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
        }}
        className={`
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
          border-white
          ${theme.border}
          shadow-[0_8px_30px_rgba(139,92,246,0.06)]
          hover:shadow-[0_0_35px_rgba(139,92,246,0.20)]
          transition-shadow
          duration-500
        `}
      >
        {/* =================================================
            TOP RIGHT GLOW
        ================================================= */}
        <motion.div
          className={`
            absolute
            -right-14
            -top-14
            w-36
            h-36
            rounded-full
            ${theme.glow}
            blur-3xl
            pointer-events-none
          `}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.15,
          }}
        />

        {/* =================================================
            BOTTOM LEFT GLOW
        ================================================= */}
        <motion.div
          className="
            absolute
            -bottom-14
            -left-14
            w-32
            h-32
            rounded-full
            bg-purple-200/20
            blur-3xl
            pointer-events-none
          "
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />

        {/* =================================================
            IMAGE / ICON CONTAINER
        ================================================= */}
        <motion.div
          whileHover={{
            scale: 1.13,
            rotate: -3,
            y: -3,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 12,
          }}
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
            transition-shadow
            duration-500
            group-hover:shadow-lg
          `}
        >
          {/* =================================================
              ICON INNER GLOW
          ================================================= */}
          <motion.div
            className={`
              absolute
              inset-1
              rounded-2xl
              ${theme.glow}
              blur-xl
              pointer-events-none
            `}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.9, 1.08, 0.9],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =================================================
              IMAGE
          ================================================= */}
          {facility?.image ? (
            <motion.img
              src={facility.image}
              alt={
                facility.title ||
                "Clinic facility"
              }
              loading="lazy"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
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
            /* =================================================
               LUCIDE ICON FALLBACK
            ================================================= */
            <motion.div
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`
                relative
                z-10
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
            </motion.div>
          )}

          {/* =================================================
              ICON GLOW RING
          ================================================= */}
          <motion.div
            className={`
              absolute
              inset-0
              rounded-2xl
              ring-2
              ring-transparent
              ${theme.ring}
              transition-all
              duration-500
            `}
            animate={{
              boxShadow: [
                "0 0 0px rgba(139,92,246,0)",
                "0 0 16px rgba(139,92,246,0.18)",
                "0 0 0px rgba(139,92,246,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* =================================================
            CONTENT
        ================================================= */}
        <div className="relative z-10 min-w-0 flex-1 pt-0.5">
          {/* TITLE */}
          <motion.h4
            whileHover={{
              x: 3,
            }}
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
            {facility?.title ||
              "Clinic Facility"}
          </motion.h4>

          {/* DESCRIPTION */}
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

          {/* =================================================
              POPUP TEXT
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 5,
            }}
            whileHover={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              mt-2
              text-[11px]
              font-semibold
              text-violet-500
            "
          >
            Learn more →
          </motion.div>
        </div>

        {/* =================================================
            FLOATING DOT
        ================================================= */}
        <motion.div
          className={`
            absolute
            right-5
            top-5
            w-2
            h-2
            rounded-full
            ${theme.icon}
          `}
          animate={{
            y: [0, -4, 0],
            opacity: [0.35, 1, 0.35],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.15,
          }}
        />

        {/* =================================================
            HOVER ARROW
        ================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: -8,
          }}
          whileHover={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            right-5
            bottom-5
            text-violet-400
            text-lg
            font-bold
          "
        >
          →
        </motion.div>

        {/* =================================================
            SHINE EFFECT
        ================================================= */}
        <motion.div
          className="
            absolute
            inset-y-0
            left-0
            w-1/3
            -translate-x-45
            pointer-events-none
            bg-linear-to-r
            from-transparent
            via-white/50
            to-transparent
            skew-x-12
          "
          whileHover={{
            x: "500%",
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            BOTTOM GLOW LINE
        ================================================= */}
        <motion.div
          className={`
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            h-0.5
            w-0
            rounded-full
            bg-linear-to-r
            ${theme.borderGlow}
            group-hover:w-2/3
            transition-all
            duration-500
          `}
        />
      </motion.div>
    </motion.div>
  );
}