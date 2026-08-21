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
  ArrowUpRight,
  Star,
} from "lucide-react";

import bannerImg1 from "../assets/Banner Images/Banner_img_1.jpg";
import bannerImg2 from "../assets/Banner Images/Banner_img_2.jpg";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function WhyChooseUs({ onOpenAppointment }) {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-[#FAF5FF] via-purple-50/40 to-indigo-50/30 py-24 text-slate-900 sm:py-28">

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <motion.div
        animate={{
          x: [0, 80, 0, -60, 0],
          y: [0, -40, 20, -20, 0],
          scale: [1, 1.15, 1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-56 -top-40 h-150 w-150 rounded-full bg-purple-400/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-56 -right-48 h-150 w-150 rounded-full bg-teal-400/20 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-300/10 blur-[120px]"
      />

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          ["8%", "18%", "bg-purple-400", 6],
          ["18%", "72%", "bg-indigo-400", 8],
          ["38%", "12%", "bg-teal-400", 7],
          ["58%", "25%", "bg-purple-300", 9],
          ["78%", "14%", "bg-indigo-300", 6],
          ["91%", "68%", "bg-teal-300", 8],
          ["48%", "82%", "bg-purple-300", 7],
          ["70%", "88%", "bg-indigo-300", 9],
        ].map(([left, top, color, duration], index) => (
          <motion.div
            key={index}
            style={{
              left,
              top,
            }}
            animate={{
              y: [0, -22, 0, 18, 0],
              x: [0, 10, -8, 5, 0],
              opacity: [0.1, 0.65, 0.2, 0.5, 0.1],
              scale: [1, 1.4, 0.8, 1.2, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: index * 0.5,
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
            HEADER
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            className="relative mb-5 inline-flex items-center gap-2 overflow-hidden rounded-full border border-purple-200/80 bg-white/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-purple-700 shadow-lg shadow-purple-900/5 backdrop-blur-xl sm:text-xs"
          >
            <motion.span
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="absolute inset-y-0 w-12 skew-x-12 bg-white/70 blur-md"
            />

            <motion.span
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Sparkles className="relative h-3.5 w-3.5 text-purple-600" />
            </motion.span>

            <span className="relative">
              The Sakthi Clinical Distinction
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-3xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
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
                  delay: 0.7,
                  duration: 1,
                  ease: "easeOut",
                }}
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-linear-to-r from-purple-500 via-indigo-500 to-teal-400 opacity-50"
              />
            </span>{" "}
            <br className="hidden sm:block" />
            in Family Dentistry
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            We combine 3D robotic accuracy, gentle painless protocols, and
            20+ years of clinical mastery in a soothing, kid-friendly
            hospital environment.
          </motion.p>

          {/* Stars */}

          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center justify-center gap-1"
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: item * 0.12,
                }}
              >
                <Star className="h-3.5 w-3.5 fill-purple-400 text-purple-400" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* =======================================================
            BENTO GRID
        ======================================================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">

          {/* =====================================================
              CARD 1
          ===================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            transition={{
              duration: 0.8,
              delay: 0.05,
              ease: "easeOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.015,
            }}
            className="group relative min-h-100 overflow-hidden rounded-4xl border border-purple-100 bg-white/80 p-7 shadow-xl shadow-purple-900/5 backdrop-blur-xl transition-shadow duration-500 hover:border-purple-300/70 hover:shadow-2xl hover:shadow-purple-900/10 sm:min-h-110 sm:p-8 md:col-span-7"
          >
            {/* Glow */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
              }}
              className="pointer-events-none absolute -inset-20 rounded-full bg-purple-400/20 blur-3xl transition-opacity duration-500"
            />

            {/* Background Image */}

            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.img
                src={bannerImg2}
                alt="Modern Dental Clinic"
                initial={{
                  scale: 1.05,
                }}
                animate={{
                  scale: [1.05, 1.1, 1.05],
                }}
                whileHover={{
                  scale: 1.15,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full object-cover opacity-35 transition-all duration-700 group-hover:opacity-45"
              />

              <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/55 to-white/15" />
            </div>

            {/* Shine */}

            <motion.div
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              className="pointer-events-none absolute inset-y-0 z-10 w-24 skew-x-12 bg-white/20 blur-xl"
            />

            <div className="relative z-20 flex items-center justify-between gap-3">

              <motion.span
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-full border border-purple-200/80 bg-purple-100/95 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-purple-800 shadow-sm sm:text-[11px]"
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
                whileHover={{
                  scale: 1.2,
                  rotate: 15,
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-purple-200/80 bg-purple-100/95 text-purple-700 shadow-lg"
              >
                <HeartPulse className="h-5 w-5" />
              </motion.div>
            </div>

            <div className="relative z-20 mt-auto flex flex-col justify-end space-y-4 pt-20">

              <div>
                <motion.h3
                  whileHover={{
                    x: 4,
                  }}
                  className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-purple-700 sm:text-3xl"
                >
                  Complete Dental Ecosystem
                </motion.h3>

                <p className="mt-2 max-w-lg text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Everything your family needs under one roof — from gentle
                  pediatric suites and clear aligners to 3D guided implants,
                  root canals, and cosmetic smile designs.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "10+ MDS Specialties",
                  "In-House 3D Scan Lab",
                  "Kid Play Zone",
                ].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.5 + index * 0.15,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-purple-100 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-purple-900 shadow-sm backdrop-blur-md"
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
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.015,
            }}
            className="group relative min-h-100 overflow-hidden rounded-4xl border border-indigo-100 bg-linear-to-br from-white via-purple-50/50 to-indigo-50/70 p-7 shadow-xl shadow-purple-900/5 transition-all duration-500 hover:border-indigo-300/70 hover:shadow-2xl hover:shadow-indigo-900/10 sm:min-h-110 sm:p-8 md:col-span-5"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.12, 0.3, 0.12],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"
            />

            <div className="relative z-10 flex items-center justify-between gap-3">

              <span className="rounded-full border border-indigo-200/80 bg-indigo-100/95 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-indigo-800 shadow-sm sm:text-[11px]">
                Expert MDS Leadership
              </span>

              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: -10,
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-indigo-200/80 bg-indigo-100/95 text-indigo-700 shadow-lg"
              >
                <UserCheck className="h-5 w-5" />
              </motion.div>
            </div>

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
                delay: 0.5,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.04,
                y: -6,
              }}
              className="relative z-10 my-8 flex items-center gap-3.5 rounded-2xl border border-purple-100 bg-white/95 p-4 shadow-lg backdrop-blur-md"
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
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-tr from-purple-600 to-teal-500 text-lg font-black text-white shadow-lg"
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

            <div className="relative z-10 mt-auto space-y-2">

              <motion.h3
                whileHover={{
                  x: 4,
                }}
                className="text-xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-purple-700 sm:text-2xl"
              >
                20+ Years Master Surgeons
              </motion.h3>

              <p className="text-xs leading-relaxed text-slate-600">
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
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.015,
            }}
            className="group relative min-h-90 overflow-hidden rounded-4xl border border-teal-100 bg-linear-to-br from-white via-teal-50/40 to-emerald-50/60 p-7 shadow-xl shadow-teal-900/5 transition-all duration-500 hover:border-teal-300/70 hover:shadow-2xl hover:shadow-teal-900/10 sm:p-8 md:col-span-5"
          >
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.12, 0.35, 0.12],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-teal-300/30 blur-3xl"
            />

            <div className="relative z-10 flex items-center justify-between gap-3">

              <span className="rounded-full border border-teal-200/80 bg-teal-100/95 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-teal-800 shadow-sm sm:text-[11px]">
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
                whileHover={{
                  scale: 1.2,
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-teal-200/80 bg-teal-100/95 text-teal-700 shadow-lg"
              >
                <Heart className="h-5 w-5" />
              </motion.div>
            </div>

            <div className="relative z-10 mt-auto flex flex-col justify-end space-y-3 pt-20">

              <motion.div
                whileHover={{
                  scale: 1.05,
                  x: 4,
                }}
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-teal-200 bg-white/95 px-3.5 py-2 text-xs font-bold text-teal-800 shadow-md"
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

              <motion.h3
                whileHover={{
                  x: 4,
                }}
                className="text-xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-teal-700 sm:text-2xl"
              >
                Zero-Anxiety Patient Comfort
              </motion.h3>

              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                Transparent consultations with zero hidden fees, gentle local
                numbing, quiet ergonomic dental chairs, and personalized care
                for nervous patients.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              CARD 4
          ===================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: "easeOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.015,
            }}
            className="group relative min-h-100 overflow-hidden rounded-4xl border border-purple-100 bg-white/85 p-7 shadow-xl shadow-purple-900/5 backdrop-blur-xl transition-all duration-500 hover:border-purple-300/70 hover:shadow-2xl hover:shadow-purple-900/10 sm:min-h-105 sm:p-8 md:col-span-7"
          >
            {/* Background Image */}

            <div className="absolute inset-0 z-0 overflow-hidden">

              <motion.img
                src={bannerImg1}
                alt="Dental Technology"
                initial={{
                  scale: 1.05,
                }}
                animate={{
                  scale: [1.05, 1.1, 1.05],
                  x: [0, 8, 0],
                }}
                whileHover={{
                  scale: 1.16,
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full object-cover opacity-35 transition-all duration-700 group-hover:opacity-50"
              />

              <div className="absolute inset-0 bg-linear-to-t from-white/85 via-white/45 to-white/10" />
            </div>

            {/* Shine */}

            <motion.div
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              className="pointer-events-none absolute inset-y-0 z-10 w-24 skew-x-12 bg-white/25 blur-xl"
            />

            <div className="relative z-20 flex items-center justify-between gap-3">

              <motion.span
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-full border border-purple-200/80 bg-purple-100/95 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-purple-800 shadow-sm sm:text-[11px]"
              >
                German 3D Robotics
              </motion.span>

              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.2,
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-purple-200/80 bg-purple-100/95 text-purple-700 shadow-lg"
              >
                <Cpu className="h-5 w-5" />
              </motion.div>
            </div>

            <div className="relative z-20 mt-auto flex flex-col justify-end space-y-3 pt-20">

              <motion.h3
                whileHover={{
                  x: 4,
                }}
                className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-purple-700 sm:text-3xl"
              >
                Next-Gen 3D Scans & Laser Surgery
              </motion.h3>

              <p className="max-w-lg text-xs leading-relaxed text-slate-600 sm:text-sm">
                Ultra-low radiation 3D CBCT digital imaging, CAD/CAM same-day
                ceramic crowns, soft-tissue laser drills, and medical-grade
                autoclave sterilization.
              </p>

              {/* Features */}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs font-extrabold">

                {/* ISO */}

                <motion.span
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.7,
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  className="inline-flex min-w-0 items-center gap-1.5 rounded-lg border border-purple-100 bg-white/90 px-2.5 py-1.5 text-purple-800 shadow-sm backdrop-blur-md"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0],
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

                <span className="hidden text-purple-300 sm:inline">
                  •
                </span>

                {/* Sterilization */}

                <motion.span
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.85,
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  className="inline-flex min-w-0 items-center gap-1.5 rounded-lg border border-teal-100 bg-white/90 px-2.5 py-1.5 text-teal-800 shadow-sm backdrop-blur-md"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.4,
                    }}
                    className="shrink-0"
                  >
                    <ShieldCheck className="h-4 w-4 text-teal-500" />
                  </motion.span>

                  <span className="whitespace-normal leading-relaxed">
                    Zero Cross-Contamination
                  </span>
                </motion.span>
              </div>

              {/* Accent */}

              <motion.div
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
                  delay: 0.9,
                  duration: 1,
                }}
                className="mt-2 h-0.5 rounded-full bg-linear-to-r from-purple-500 via-indigo-500 to-teal-400 opacity-30"
              />
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            APPOINTMENT BUTTON
            Uses YOUR existing AppointmentModal
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            type="button"
            onClick={onOpenAppointment}
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-purple-200/80 bg-white/90 px-5 py-3 shadow-lg shadow-purple-900/10 backdrop-blur-xl transition-all duration-300 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-900/20"
          >
            {/* Animated Shine */}

            <motion.span
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="pointer-events-none absolute inset-y-0 w-12 skew-x-12 bg-white/70 blur-md"
            />

            {/* Icon */}

            <motion.span
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-purple-600 to-teal-500 text-white shadow-md"
            >
              <CheckCircle2 className="h-4 w-4" />
            </motion.span>

            {/* Text */}

            <span className="relative text-xs font-bold text-slate-700 transition-colors group-hover:text-purple-700 sm:text-sm">
              Advanced Technology • Expert Care • Patient First
            </span>

            {/* Arrow */}

            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="relative"
            >
              <ArrowUpRight className="h-4 w-4 text-purple-600 transition-transform duration-300 group-hover:rotate-45" />
            </motion.span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}