import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  HeartPulse,
  UserCheck,
  Heart,
  Cpu,
  CheckCircle2,
  Zap,
  Award,
  ShieldCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#FAF5FF] via-purple-50/40 to-indigo-50/30 py-28 text-slate-900">

      {/* =========================================================
          ANIMATED BACKGROUND GLOWS
      ========================================================= */}

      <motion.div
        animate={{
          x: [0, 60, 0, -40, 0],
          y: [0, -30, 20, -10, 0],
          scale: [1, 1.12, 1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-0 h-125 w-125 rounded-full bg-purple-300/25 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-teal-300/20 blur-[140px]"
      />

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {[
          ["10%", "20%", "bg-purple-400", 6],
          ["25%", "70%", "bg-indigo-400", 8],
          ["48%", "15%", "bg-teal-400", 7],
          ["70%", "30%", "bg-purple-300", 9],
          ["90%", "20%", "bg-indigo-300", 6],
          ["85%", "75%", "bg-teal-300", 8],
        ].map(([left, top, color, duration], index) => (
          <motion.div
            key={index}
            style={{ left, top }}
            animate={{
              y: [0, -20, 0, 20, 0],
              x: [0, 10, -10, 5, 0],
              opacity: [0.15, 0.6, 0.2, 0.5, 0.15],
              scale: [1, 1.3, 0.8, 1.2, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
            className={`absolute h-2 w-2 rounded-full ${color} blur-[1px]`}
          />
        ))}
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">

          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-purple-200/80 bg-white/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-700 shadow-sm backdrop-blur-md"
          >

            {/* Badge Shine */}

            <motion.span
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="absolute inset-y-0 w-10 skew-x-12 bg-white/60 blur-md"
            />

            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Sparkles className="relative h-3.5 w-3.5 text-purple-600" />
            </motion.div>

            <span className="relative">
              The Sakthi Clinical Distinction
            </span>

          </motion.div>

          {/* Heading */}

          <motion.h2
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
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl"
          >
            Pioneering a{" "}

            <span className="relative inline-block">

              <span className="bg-linear-to-r from-purple-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                New Standard
              </span>

              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "100%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="absolute -bottom-1 left-0 h-1 rounded-full bg-linear-to-r from-purple-500 via-indigo-500 to-teal-400 opacity-40"
              />

            </span>{" "}

            in Family Dentistry

          </motion.h2>

          {/* Description */}

          <motion.p
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
              delay: 0.3,
              duration: 0.6,
            }}
            className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-slate-600 sm:text-base"
          >
            We combine 3D robotic accuracy, gentle painless protocols, and
            20+ years of clinical mastery in a soothing, kid-friendly
            hospital environment.
          </motion.p>

        </div>

        {/* =======================================================
            BENTO GRID
        ======================================================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">

          {/* =====================================================
              CARD 1
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
              duration: 0.7,
              delay: 0.1,
            }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
            className="group relative min-h-[400px] overflow-hidden rounded-4xl border border-purple-100 bg-white/90 p-8 shadow-xl shadow-purple-900/5 backdrop-blur-xl transition-shadow duration-500 hover:border-purple-300/60 hover:shadow-2xl sm:min-h-[440px] md:col-span-7"
          >

            {/* Background Image */}

            <div className="absolute inset-0 z-0 overflow-hidden">

              <motion.img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Dental Ecosystem Clinic"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:opacity-40"
              />

              <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/55 to-white/20" />

            </div>

            {/* Moving Shine */}

            <motion.div
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 5,
              }}
              className="pointer-events-none absolute inset-y-0 z-10 w-20 skew-x-12 bg-white/20 blur-xl"
            />

            {/* Top Bar */}

            <div className="relative z-20 flex items-center justify-between gap-2">

              <motion.span
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-full border border-purple-200/80 bg-purple-100/90 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-purple-800 shadow-sm"
              >
                Integrated Clinical Care
              </motion.span>

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-purple-200/80 bg-purple-100/90 text-purple-700 shadow-sm"
              >
                <HeartPulse className="h-5 w-5" />
              </motion.div>

            </div>

            {/* Bottom Content */}

            <div className="relative z-20 mt-auto flex flex-col justify-end space-y-4 pt-20">

              <div>

                <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-purple-700 sm:text-3xl">
                  Complete Dental Ecosystem
                </h3>

                <p className="mt-2 max-w-lg text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
                  Everything your family needs under one roof — from gentle
                  pediatric suites and clear aligners to 3D guided implants,
                  root canals, and cosmetic smile designs.
                </p>

              </div>

              {/* Feature Pills */}

              <div className="flex flex-wrap gap-2 pt-2">

                {[
                  "10+ MDS Specialties",
                  "In-House 3D Scan Lab",
                  "Kid Play Zone",
                ].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.5 + index * 0.12,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-purple-100 bg-purple-50/95 px-3 py-1 text-xs font-bold text-purple-900 shadow-sm"
                  >

                    <motion.span
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
                    </motion.span>

                    {item}

                  </motion.span>
                ))}

              </div>

            </div>

          </motion.div>

          {/* =====================================================
              CARD 2
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
            className="group relative min-h-[400px] overflow-hidden rounded-4xl border border-indigo-100 bg-linear-to-br from-white via-purple-50/40 to-indigo-50/60 p-8 shadow-xl shadow-purple-900/5 transition-shadow duration-500 hover:border-indigo-300/60 hover:shadow-2xl sm:min-h-[440px] md:col-span-5"
          >

            {/* Decorative Glow */}

            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl"
            />

            {/* Top */}

            <div className="relative z-10 flex items-center justify-between gap-2">

              <span className="rounded-full border border-indigo-200/80 bg-indigo-100/90 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-indigo-800 shadow-sm">
                Expert MDS Leadership
              </span>

              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-indigo-200/80 bg-indigo-100/90 text-indigo-700 shadow-sm"
              >
                <UserCheck className="h-5 w-5" />
              </motion.div>

            </div>

            {/* Doctor Card */}

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -5,
              }}
              className="relative z-10 my-8 flex items-center gap-3.5 rounded-2xl border border-purple-100 bg-white/95 p-4 shadow-md backdrop-blur-sm"
            >

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-tr from-purple-600 to-teal-500 text-lg font-black text-white shadow-md"
              >
                DS
              </motion.div>

              <div className="min-w-0">

                <p className="truncate text-sm font-extrabold text-slate-900">
                  Dr. Sakthi Saravanan
                </p>

                <p className="text-xs font-bold text-purple-700">
                  Chief Dental Implantologist
                </p>

                <p className="mt-0.5 text-[10px] font-medium leading-relaxed text-slate-500">
                  20+ Years Clinical Practice • 15,000+ Patients
                </p>

              </div>

            </motion.div>

            {/* Bottom */}

            <div className="relative z-10 mt-auto space-y-2">

              <h3 className="text-xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-purple-700 sm:text-2xl">
                20+ Years Master Surgeons
              </h3>

              <p className="text-xs font-normal leading-relaxed text-slate-600">
                Board-certified specialists delivering precise surgical
                outcomes with soft-tissue lasers and zero-error digital
                planning.
              </p>

            </div>

          </motion.div>

          {/* =====================================================
              CARD 3
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
            className="group relative min-h-[360px] overflow-hidden rounded-4xl border border-teal-100 bg-linear-to-br from-white via-teal-50/30 to-emerald-50/50 p-8 shadow-xl shadow-teal-900/5 transition-shadow duration-500 hover:border-teal-300/60 hover:shadow-2xl md:col-span-5"
          >

            {/* Animated Teal Glow */}

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-300/30 blur-3xl"
            />

            {/* Top */}

            <div className="relative z-10 flex items-center justify-between gap-2">

              <span className="rounded-full border border-teal-200/80 bg-teal-100/90 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-teal-800 shadow-sm">
                100% Pain-Free Protocol
              </span>

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-teal-200/80 bg-teal-100/90 text-teal-700 shadow-sm"
              >
                <Heart className="h-5 w-5" />
              </motion.div>

            </div>

            {/* Content */}

            <div className="relative z-10 mt-auto flex flex-col justify-end space-y-3 pt-20">

              <motion.div
                whileHover={{
                  scale: 1.04,
                  x: 4,
                }}
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-teal-200 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-teal-800 shadow-sm"
              >

                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Zap className="h-4 w-4 text-teal-600" />
                </motion.div>

                Computer-Assisted Anesthesia

              </motion.div>

              <h3 className="text-xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-teal-700 sm:text-2xl">
                Zero-Anxiety Patient Comfort
              </h3>

              <p className="text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
                Transparent consultations with zero hidden fees, gentle local
                numbing, quiet ergonomic dental chairs, and personalized care
                for nervous patients.
              </p>

            </div>

          </motion.div>

          {/* =====================================================
              CARD 4 - FIXED VISIBILITY
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
            className="group relative min-h-[400px] overflow-hidden rounded-4xl border border-purple-100 bg-white/90 p-8 shadow-xl shadow-purple-900/5 backdrop-blur-xl transition-shadow duration-500 hover:border-purple-300/60 hover:shadow-2xl sm:min-h-[420px] md:col-span-7"
          >

            {/* Background Image */}

            <div className="absolute inset-0 z-0 overflow-hidden">

              <motion.img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                alt="3D Digital Scanner Technology"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:opacity-40"
              />

              {/* Softer Overlay */}

              <div className="absolute inset-0 bg-linear-to-t from-white/85 via-white/45 to-white/15" />

            </div>

            {/* Moving Shine */}

            <motion.div
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 5,
              }}
              className="pointer-events-none absolute inset-y-0 z-10 w-20 skew-x-12 bg-white/20 blur-xl"
            />

            {/* Top */}

            <div className="relative z-20 flex items-center justify-between gap-3">

              <span className="rounded-full border border-purple-200/80 bg-purple-100/95 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-purple-800 shadow-sm">
                German 3D Robotics
              </span>

              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-purple-200/80 bg-purple-100/95 text-purple-700 shadow-sm"
              >
                <Cpu className="h-5 w-5" />
              </motion.div>

            </div>

            {/* Content */}

            <div className="relative z-20 mt-auto flex flex-col justify-end space-y-3 pt-20">

              <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-purple-700 sm:text-3xl">
                Next-Gen 3D Scans & Laser Surgery
              </h3>

              <p className="max-w-lg text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
                Ultra-low radiation 3D CBCT digital imaging, CAD/CAM same-day
                ceramic crowns, soft-tissue laser drills, and medical-grade
                autoclave sterilization.
              </p>

              {/* Bottom Features */}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs font-extrabold text-purple-800">

                {/* ISO */}

                <motion.span
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="inline-flex min-w-0 items-center gap-1.5 rounded-lg border border-purple-100 bg-white/75 px-2 py-1"
                >

                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="shrink-0"
                  >
                    <Award className="h-4 w-4 text-purple-600" />
                  </motion.span>

                  <span className="whitespace-normal leading-relaxed">
                    ISO 9001:2026 Certified Facility
                  </span>

                </motion.span>

                {/* Divider */}

                <span className="hidden text-purple-300 sm:inline">
                  •
                </span>

                {/* Cross Contamination */}

                <motion.span
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="inline-flex min-w-0 items-center gap-1.5 rounded-lg border border-teal-100 bg-white/75 px-2 py-1"
                >

                  <ShieldCheck className="h-4 w-4 shrink-0 text-teal-500" />

                  <span className="whitespace-normal leading-relaxed">
                    Zero Cross-Contamination
                  </span>

                </motion.span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}