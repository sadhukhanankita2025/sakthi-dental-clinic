import React from "react";
import { motion } from "motion/react";
import {
  Calendar,
  PhoneCall,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function CTA({ onOpenAppointment }) {
  const handleAppointmentClick = () => {
    if (typeof onOpenAppointment === "function") {
      onOpenAppointment("");
    } else {
      console.error(
        "CTA.jsx: onOpenAppointment is not connected. " +
          "Make sure App.jsx passes onOpenAppointment to <CTA />."
      );
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF5FF] py-24">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="group relative overflow-hidden rounded-4xl bg-linear-to-r from-purple-700 via-indigo-700 to-purple-800 p-8 text-white shadow-2xl shadow-purple-900/20 sm:p-14"
        >

          {/* =================================================
              ANIMATED GLOW CIRCLES
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-2xl"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.25, 0.15, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-purple-950/30 blur-2xl"
          />

          {/* Decorative dots */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-white/50"
          />

          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-[20%] right-[15%] h-2.5 w-2.5 rounded-full bg-purple-200/70"
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">

            {/* Badge */}

            <motion.div
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
                delay: 0.15,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm backdrop-blur-md"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-4 w-4 text-purple-200" />
              </motion.div>

              Ready for a Healthier Smile?
            </motion.div>

            {/* Heading */}

            <motion.h2
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
                delay: 0.25,
              }}
              className="text-3xl font-black leading-tight tracking-tight sm:text-5xl"
            >
              Book Your Appointment Today
            </motion.h2>

            {/* Description */}

            <motion.p
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
                delay: 0.35,
              }}
              className="mx-auto max-w-xl text-sm font-normal leading-relaxed text-white/90 sm:text-base"
            >
              Don't let tooth pain or dental anxiety hold you back.
              Schedule a gentle consultation with Dr. Sakthi Saravanan
              and our expert dental team today.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">

              {/* Appointment Button */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.06,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={handleAppointmentClick}
                className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-purple-950 shadow-xl shadow-purple-950/20 transition-all hover:bg-purple-50 sm:w-auto"
              >
                <motion.div
                  animate={{
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Calendar className="h-4 w-4 text-purple-600" />
                </motion.div>

                <span>Fix an Appointment</span>
              </motion.button>

              {/* Phone Button */}

              <motion.a
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="tel:+919876543210"
                className="flex w-full items-center justify-center gap-2.5 rounded-full border border-white/30 bg-black/20 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md transition-all hover:bg-black/30 sm:w-auto"
              >
                <div className="rounded-full bg-white/15 p-1.5">
                  <PhoneCall className="h-4 w-4 text-purple-200" />
                </div>

                <span>Call Emergency</span>
              </motion.a>

            </div>

            {/* =================================================
                TRUST FEATURES
            ================================================= */}

            <motion.div
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
                delay: 0.5,
              }}
              className="flex flex-col items-center justify-center gap-3 pt-5 text-xs font-medium text-white/80 sm:flex-row sm:gap-6"
            >

              <span className="flex items-center gap-1.5">
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <ShieldCheck className="h-4 w-4 text-purple-200" />
                </motion.span>

                Instant Confirmation
              </span>

              <span className="hidden sm:block">•</span>

              <span>100% Pain-Free Protocol</span>

              <span className="hidden sm:block">•</span>

              <span>Expert Dental Care</span>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}