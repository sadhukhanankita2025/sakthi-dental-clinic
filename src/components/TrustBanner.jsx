import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Sparkles,
  Check,
} from 'lucide-react';

export default function TrustBanner() {
  return (
    <section className="relative z-20 bg-purple-50 py-8">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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
          }}
          transition={{
            duration: 0.5,
          }}
          className="relative overflow-hidden rounded-3xl border border-purple-200/70 bg-linear-to-r from-purple-100 via-violet-50 to-fuchsia-100 p-6 shadow-lg backdrop-blur-md sm:p-8"
        >

          {/* =====================================================
              BACKGROUND GLOW
          ====================================================== */}

          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-linear-to-bl from-purple-300/40 to-transparent blur-2xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-purple-200/30 blur-3xl" />

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="flex items-center gap-5 text-center md:text-left">

              {/* Shield Icon */}

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-tr from-purple-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/25 sm:h-16 sm:w-16">

                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <ShieldCheck className="h-8 w-8 sm:h-9 sm:w-9" />
                </motion.div>

              </div>

              {/* Text */}

              <div>

                {/* Label */}

                <div className="mb-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-700">

                  <Sparkles className="h-3.5 w-3.5 text-purple-600" />

                  Safety First Commitment

                </div>

                {/* Heading */}

                <h3 className="text-xl font-black tracking-tight text-purple-950 sm:text-2xl">
                  You are always in safe hands.
                </h3>

                {/* Description */}

                <p className="mt-1 max-w-xl text-xs font-normal leading-relaxed text-purple-900/65 sm:text-sm">
                  Class-B German Autoclave sterilization, 100% disposable
                  kits, and gentle bio-friendly materials ensure a safe,
                  infection-free environment.
                </p>

              </div>
            </div>

            {/* =================================================
                RIGHT BADGES
            ================================================== */}

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-purple-950">

              {/* Zero Cross Infection */}

              <div className="flex items-center gap-2 rounded-xl border border-purple-200 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                  <Check className="h-4 w-4 stroke-3 text-purple-700" />
                </div>

                <span>
                  Zero Cross-Infection
                </span>

              </div>

              {/* Painless Protocol */}

              <div className="flex items-center gap-2 rounded-xl border border-purple-200 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm">

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-100">
                  <Check className="h-4 w-4 stroke-3 text-fuchsia-600" />
                </div>

                <span>
                  100% Painless Protocol
                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}