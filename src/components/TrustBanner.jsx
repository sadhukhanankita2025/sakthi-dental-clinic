import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Sparkles,
  Check,
  HeartPulse,
  Shield,
} from "lucide-react";

export default function TrustBanner() {
  return (
    <section className="relative z-20 overflow-hidden bg-purple-50 py-8 sm:py-10">

      {/* =====================================================
          BACKGROUND ANIMATED GLOWS
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -20, 20, -10, 0],
          scale: [1, 1.15, 1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0, 30, 0],
          y: [0, 20, -20, 10, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -3,
          }}
          className="group relative overflow-hidden rounded-3xl border border-purple-200/70 bg-linear-to-r from-purple-100 via-violet-50 to-fuchsia-100 p-6 shadow-lg shadow-purple-900/5 backdrop-blur-md sm:p-8"
        >

          {/* =================================================
              MOVING SHINE
          ================================================== */}

          <motion.div
            animate={{
              x: ["-150%", "250%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 z-10 w-32 skew-x-12 bg-white/20 blur-xl"
          />

          {/* =================================================
              ANIMATED BORDER GLOW
          ================================================== */}

          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-purple-300/20"
          />

          {/* =================================================
              DECORATIVE ROTATING CIRCLE
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -right-10 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full border border-dashed border-purple-300/30 sm:block"
          >
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-purple-400/60" />
          </motion.div>

          {/* =================================================
              BACKGROUND SPARKLES
          ================================================== */}

          <motion.div
            animate={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="pointer-events-none absolute right-[30%] top-5 text-purple-400/40"
          >
            <Sparkles className="h-6 w-6" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="pointer-events-none absolute bottom-5 left-[40%] text-fuchsia-400/30"
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>

          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <div className="relative z-20 flex flex-col items-center justify-between gap-7 md:flex-row">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="flex items-center gap-5 text-center md:text-left"
            >

              {/* =================================================
                  SHIELD ICON
              ================================================== */}

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -3,
                }}
                className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-tr from-purple-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/25 sm:h-16 sm:w-16"
              >

                {/* Pulsing outer ring */}

                <motion.div
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-2xl border-2 border-purple-500"
                />

                {/* Shield */}

                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ShieldCheck className="h-8 w-8 sm:h-9 sm:w-9" />
                </motion.div>

                {/* Small sparkle */}

                <motion.div
                  animate={{
                    scale: [0.7, 1.2, 0.7],
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -right-1 -top-1 text-white"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                </motion.div>

              </motion.div>

              {/* =================================================
                  TEXT
              ================================================== */}

              <div>

                {/* LABEL */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.35,
                  }}
                  className="mb-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-700"
                >

                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles className="h-3.5 w-3.5 text-purple-600" />
                  </motion.div>

                  Safety First Commitment

                </motion.div>

                {/* HEADING */}

                <motion.h3
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
                    delay: 0.45,
                    duration: 0.5,
                  }}
                  className="text-xl font-black tracking-tight text-purple-950 sm:text-2xl"
                >
                  You are always in safe hands.
                </motion.h3>

                {/* DESCRIPTION */}

                <motion.p
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
                    delay: 0.55,
                    duration: 0.5,
                  }}
                  className="mt-1 max-w-xl text-xs font-normal leading-relaxed text-purple-900/65 sm:text-sm"
                >
                  Class-B German Autoclave sterilization, 100% disposable
                  kits, and gentle bio-friendly materials ensure a safe,
                  infection-free environment.
                </motion.p>

              </div>

            </motion.div>

            {/* =================================================
                RIGHT BADGES
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-purple-950"
            >

              {/* =================================================
                  ZERO CROSS INFECTION
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.9,
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
                  delay: 0.55,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                className="group/badge flex cursor-default items-center gap-2 rounded-xl border border-purple-200 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-purple-500/10"
              >

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100"
                >
                  <Check className="h-4 w-4 stroke-3 text-purple-700" />
                </motion.div>

                <span>
                  Zero Cross-Infection
                </span>

              </motion.div>

              {/* =================================================
                  PAINLESS PROTOCOL
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.9,
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
                  delay: 0.7,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                className="group/badge flex cursor-default items-center gap-2 rounded-xl border border-purple-200 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-fuchsia-500/10"
              >

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                  }}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-100"
                >
                  <Check className="h-4 w-4 stroke-3 text-fuchsia-600" />
                </motion.div>

                <span>
                  100% Painless Protocol
                </span>

              </motion.div>

              {/* =================================================
                  SAFETY BADGE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.9,
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
                  delay: 0.85,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                className="hidden items-center gap-2 rounded-xl border border-purple-200 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-sm sm:flex"
              >

                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100"
                >
                  <Shield className="h-3.5 w-3.5 text-teal-600" />
                </motion.div>

                <span>
                  Safe & Hygienic
                </span>

              </motion.div>

            </motion.div>

          </div>

          {/* =================================================
              BOTTOM HEART PULSE
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 text-purple-300/40 sm:block"
          >
            <HeartPulse className="h-5 w-5" />
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}