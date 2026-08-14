import React from "react";
import { motion } from "motion/react";

import {
  Calendar,
  PhoneCall,
  Sparkles,
  Award,
  ShieldCheck,
  Star,
  UserCheck,
  HeartPulse,
  CircleCheck,
} from "lucide-react";

import doctorImage from "../assets/doc.png";

export default function Hero({ onOpenAppointment }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-purple-100/60 via-indigo-50/40 to-purple-50/30 pt-32 pb-24 md:pt-40 md:pb-36">

      {/* =========================================================
          BACKGROUND ANIMATED GLOW
      ========================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-20 left-1/2 h-125 w-175 -translate-x-1/2 rounded-full bg-linear-to-br from-purple-300/40 via-indigo-200/30 to-teal-200/30 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [0, -20, 20, -10, 0],
          scale: [1, 1.08, 1, 1.06, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-purple-300/25 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 25, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-10 -left-32 h-96 w-96 rounded-full bg-teal-200/20 blur-3xl"
      />

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {[
          {
            left: "8%",
            top: "22%",
            size: "w-2 h-2",
            color: "bg-purple-400",
            duration: 6,
          },
          {
            left: "18%",
            top: "65%",
            size: "w-3 h-3",
            color: "bg-indigo-400",
            duration: 8,
          },
          {
            left: "38%",
            top: "18%",
            size: "w-1.5 h-1.5",
            color: "bg-teal-400",
            duration: 5,
          },
          {
            left: "62%",
            top: "25%",
            size: "w-2.5 h-2.5",
            color: "bg-purple-300",
            duration: 7,
          },
          {
            left: "82%",
            top: "18%",
            size: "w-2 h-2",
            color: "bg-indigo-400",
            duration: 9,
          },
          {
            left: "90%",
            top: "60%",
            size: "w-3 h-3",
            color: "bg-teal-300",
            duration: 6,
          },
        ].map((particle, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -25, 0, 25, 0],
              x: [0, 15, -10, 10, 0],
              opacity: [0.15, 0.6, 0.2, 0.5, 0.15],
              scale: [1, 1.4, 0.8, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            style={{
              left: particle.left,
              top: particle.top,
            }}
            className={`absolute rounded-full blur-[1px] ${particle.size} ${particle.color}`}
          />
        ))}

      </div>

      {/* =========================================================
          DECORATIVE CROSS / PLUS
      ========================================================= */}

      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-[8%] top-[35%] hidden md:block"
      >
        <div className="relative h-8 w-8">
          <div className="absolute left-1/2 top-0 h-8 w-1 -translate-x-1/2 rounded-full bg-purple-400/40" />
          <div className="absolute left-0 top-1/2 h-1 w-8 -translate-y-1/2 rounded-full bg-purple-400/40" />
        </div>
      </motion.div>

      {/* =========================================================
          BOTTOM WAVE
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-10 w-full fill-current text-[#FAF5FF] sm:h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C300,110 900,110 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-7 text-center lg:col-span-7 lg:text-left"
          >

            {/* =================================================
                BADGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-purple-200/70 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md"
            >

              {/* Badge glow */}
              <motion.div
                animate={{
                  x: ["-120%", "250%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-10 skew-x-12 bg-white/60 blur-md"
              />

              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="relative h-2 w-2 rounded-full bg-purple-600"
              />

              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="relative h-4 w-4 text-purple-600" />
              </motion.div>

              <span className="relative text-xs font-bold tracking-wide text-purple-950">
                ISO 9001:2026 Certified Dental Hospital
              </span>

            </motion.div>

            {/* =================================================
                HEADING
            ================================================= */}

            <div className="relative">

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Specialized Dental Care for{" "}

                <span className="relative inline-block">

                  <span className="bg-linear-to-r from-purple-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent bg-size-[200%_200%] animate-[gradient_5s_ease_infinite]">
                    Women, Children
                  </span>

                  {/* Heading underline */}
                  <motion.span
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      delay: 1,
                      duration: 0.8,
                    }}
                    className="absolute -bottom-1 left-0 h-1 rounded-full bg-linear-to-r from-purple-500 via-indigo-500 to-teal-400 opacity-40"
                  />

                </span>{" "}

                & Families
              </motion.h1>

              {/* Small floating sparkle */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -right-2 -top-5 hidden text-purple-400 sm:block"
              >
                <Sparkles className="h-5 w-5" />
              </motion.div>

            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
            >
              Experience gentle, zero-pain dental care in a soothing,
              kid-friendly environment. From preventive checkups to 3D
              implants, Sakthi Dental Clinic delivers international
              standards with 20+ years of trusted smiles.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.65,
                duration: 0.6,
              }}
              className="flex flex-col items-center justify-center gap-4 pt-3 sm:flex-row lg:justify-start"
            >

              {/* APPOINTMENT BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.06,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={onOpenAppointment}
                className="group relative flex w-full cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full bg-linear-to-r from-purple-600 via-indigo-600 to-teal-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-purple-500/25 sm:w-auto"
              >

                {/* Moving shine */}

                <motion.span
                  animate={{
                    x: ["-150%", "250%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="absolute inset-y-0 w-12 skew-x-12 bg-white/30 blur-md"
                />

                <motion.span
                  animate={{
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <Calendar className="relative z-10 h-5 w-5" />
                </motion.span>

                <span className="relative z-10">
                  Fix an Appointment
                </span>

              </motion.button>

              {/* EMERGENCY BUTTON */}

              <motion.a
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="tel:+919876543210"
                className="group flex w-full items-center justify-center gap-2.5 rounded-full border border-purple-100 bg-white px-7 py-4 text-sm font-bold tracking-wide text-slate-800 shadow-sm sm:w-auto"
              >

                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="rounded-full bg-rose-100 p-1.5 text-rose-500"
                >
                  <PhoneCall className="h-4 w-4" />
                </motion.div>

                Emergency Dental Support

              </motion.a>

            </motion.div>

            {/* =================================================
                METRICS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="mx-auto max-w-xl pt-4 lg:mx-0"
            >

              <div className="grid grid-cols-3 gap-3">

                {/* YEARS */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.9,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  className="group rounded-2xl border border-purple-100/90 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md lg:text-left"
                >

                  <motion.p
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="text-2xl font-black tracking-tight text-purple-950 sm:text-3xl"
                  >
                    20+
                  </motion.p>

                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-purple-600">
                    Years Exp.
                  </p>

                </motion.div>

                {/* PATIENTS */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  className="group rounded-2xl border border-teal-100/90 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md lg:text-left"
                >

                  <motion.p
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                    className="text-2xl font-black tracking-tight text-teal-700 sm:text-3xl"
                  >
                    15,000+
                  </motion.p>

                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-teal-600">
                    Patients
                  </p>

                </motion.div>

                {/* RATING */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.1,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-amber-100/90 bg-white/90 p-4 text-center shadow-sm backdrop-blur-md lg:items-start"
                >

                  <div className="flex items-center text-amber-400">

                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <motion.div
                        key={star}
                        animate={{
                          scale: [1, 1.25, 1],
                          rotate: [0, 8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.15,
                        }}
                      >
                        <Star
                          className="h-3.5 w-3.5 fill-current"
                        />
                      </motion.div>
                    ))}

                  </div>

                  <p className="mt-1 text-[11px] font-bold tracking-wider text-slate-700">
                    4.9 / 5.0 Rating
                  </p>

                </motion.div>

              </div>
            </motion.div>

          </motion.div>

          {/* =====================================================
              RIGHT IMAGE SECTION
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center lg:col-span-5"
          >

            {/* =================================================
                DECORATIVE ROTATING RINGS
            ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute h-105 w-105 rounded-full border border-dashed border-purple-300/30"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute h-115 w-115 rounded-full border border-dotted border-teal-300/25"
            />

            {/* Ring dot */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute h-105 w-105"
            >
              <div className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
            </motion.div>

            {/* =================================================
                MAIN IMAGE
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -12, 0, 12, 0],
                rotate: [0, 0.5, 0, -0.5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.035,
                rotate: 0,
              }}
              className="relative z-10 w-full max-w-md rounded-4xl border border-purple-100 bg-white/80 p-3 shadow-2xl shadow-purple-900/10 backdrop-blur-xl"
            >

              {/* IMAGE GLOW */}

              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-purple-400/30 blur-3xl"
              />

              {/* IMAGE */}

              <div className="relative overflow-hidden rounded-3xl">

                <motion.img
                  src={doctorImage}
                  alt="Sakthi Dental Clinic"
                  initial={{
                    scale: 1.1,
                  }}
                  animate={{
                    scale: [1.05, 1, 1.05],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-95 w-full object-cover sm:h-110"
                  onError={(e) => {
                    console.error(
                      "Hero image failed to load:",
                      e
                    );
                  }}
                />

                {/* IMAGE GRADIENT */}

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-purple-950/35 via-transparent to-transparent" />

                {/* IMAGE SHINE */}

                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 w-20 skew-x-12 bg-white/15 blur-xl"
                />

              </div>

            </motion.div>

            {/* =================================================
                DOCTOR CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.07,
                rotate: 0,
              }}
              className="absolute -left-4 -top-6 z-20 hidden max-w-55 items-center gap-3 rounded-2xl border border-purple-100 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:-left-8"
            >

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700"
              >
                <UserCheck className="h-6 w-6" />
              </motion.div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Dr. Sakthi Saravanan
                </p>

                <p className="text-[10px] font-medium text-purple-600">
                  Chief Implantologist
                </p>
              </div>

            </motion.div>

            {/* =================================================
                EXPERIENCE CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [10, -10, 10],
                x: [0, 4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.07,
              }}
              className="absolute -right-4 top-1/2 z-20 flex max-w-52.5 items-center gap-3 rounded-2xl border border-purple-100 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:-right-8"
            >

              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-linear-to-tr from-purple-600 to-indigo-600 text-white shadow-md"
              >
                <Award className="h-5 w-5" />
              </motion.div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  20+ Years Exp.
                </p>

                <p className="text-[10px] font-medium text-slate-500">
                  Top Dental Surgeons
                </p>
              </div>

            </motion.div>

            {/* =================================================
                EMERGENCY CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [0, -1, 0, 1, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.07,
                rotate: 0,
              }}
              className="absolute -bottom-6 left-6 z-20 flex items-center gap-3 rounded-2xl border border-purple-100 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:left-12"
            >

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(20,184,166,0)",
                    "0 0 20px rgba(20,184,166,0.35)",
                    "0 0 0 rgba(20,184,166,0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-md"
              >
                <ShieldCheck className="h-5 w-5" />
              </motion.div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  24/7 Pain Relief
                </p>

                <p className="text-[10px] font-semibold text-teal-600">
                  Instant Emergency Care
                </p>
              </div>

            </motion.div>

            {/* =================================================
                SMALL HEART ICON
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-2 right-6 z-20 hidden rounded-full bg-white p-3 text-rose-500 shadow-xl sm:block"
            >
              <HeartPulse className="h-5 w-5" />
            </motion.div>

            {/* =================================================
                CHECK BADGE
            ================================================= */}

            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: 1.4,
                type: "spring",
                stiffness: 300,
              }}
              className="absolute right-2 top-8 z-20 rounded-full bg-white p-2 shadow-lg"
            >
              <CircleCheck className="h-5 w-5 text-teal-500" />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}