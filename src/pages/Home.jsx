import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { HelpCircle, Sparkles, ArrowRight } from "lucide-react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import TrustBanner from "../components/TrustBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FacilitiesSection from "../components/FacilitiesSection";
import CTA from "../components/CTA";
import FAQAccordion from "../components/FAQAccordion";

import faqImage from "../assets/Banner Images/Banner_img_3.jpg";

export default function Home({ onOpenAppointment }) {
  return (
    <main className="w-full overflow-x-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-gradient-hero">
        <Hero onOpenAppointment={onOpenAppointment} />
      </section>

      {/* =====================================================
          TRUST BANNER
      ====================================================== */}
      <section className="w-full overflow-hidden">
        <TrustBanner />
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <section className="w-full overflow-hidden">
        <WhyChooseUs onOpenAppointment={onOpenAppointment} />
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="w-full overflow-hidden">
        <Services />
      </section>

      {/* =====================================================
          FACILITIES
      ====================================================== */}
      <section className="w-full overflow-hidden">
        <FacilitiesSection />
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="w-full overflow-hidden">
        <CTA onOpenAppointment={onOpenAppointment} />
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="w-full overflow-hidden">
        <Testimonials />
      </section>

      {/* =====================================================
          FAQ SECTION
      ====================================================== */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-linear-to-br
          from-purple-50
          via-white
          to-indigo-50
          py-14
          sm:py-16
          md:py-20
          lg:py-24
        "
      >
        {/* =================================================
            BACKGROUND GLOW 1
        ================================================== */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -25, 25, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -left-32
            top-10
            h-56
            w-56
            rounded-full
            bg-purple-400/20
            blur-3xl
            sm:-left-40
            sm:h-72
            sm:w-72
            lg:h-80
            lg:w-80
          "
        />

        {/* =================================================
            BACKGROUND GLOW 2
        ================================================== */}
        <motion.div
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 25, -20, 0],
            scale: [1, 0.9, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -bottom-20
            -right-20
            h-64
            w-64
            rounded-full
            bg-indigo-400/20
            blur-3xl
            sm:h-80
            sm:w-80
            lg:h-96
            lg:w-96
          "
        />

        {/* =================================================
            MAIN CONTAINER
        ================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              FAQ TITLE
          ================================================== */}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mx-auto
              mb-10
              w-full
              max-w-3xl
              text-center
              sm:mb-12
            "
          >
            {/* Badge */}
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="
                mx-auto
                inline-flex
                max-w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-purple-200
                bg-purple-100
                px-3
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-purple-700
                shadow-sm
                sm:px-4
                sm:text-xs
              "
            >
              <HelpCircle className="h-4 w-4 shrink-0 text-purple-600" />

              <span>Patient Guidance & FAQs</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
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
                delay: 0.1,
                duration: 0.6,
              }}
              className="
                mt-5
                px-1
                text-2xl
                font-black
                leading-tight
                tracking-tight
                text-slate-900
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >
              Frequently Asked{" "}
              <span
                className="
                  bg-linear-to-r
                  from-purple-600
                  via-violet-600
                  to-indigo-600
                  bg-clip-text
                  text-transparent
                "
              >
                Questions
              </span>
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
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mx-auto
                mt-4
                max-w-2xl
                px-2
                text-sm
                leading-6
                text-slate-600
                sm:text-base
                sm:leading-7
              "
            >
              Everything you need to know about pain relief, dental scaling,
              root canals, implants, braces, and maintaining a healthy smile.
            </motion.p>
          </motion.div>

          {/* =================================================
              IMAGE + FAQ
          ================================================== */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-stretch
              gap-8
              md:gap-10
              lg:grid-cols-2
              lg:gap-12
              xl:gap-16
            "
          >
            {/* =================================================
                IMAGE LEFT
            ================================================== */}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-2xl
                lg:mx-0
              "
            >
              {/* Image Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.12, 0.22, 0.12],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -inset-3
                  rounded-4xl
                  bg-purple-500/20
                  blur-3xl
                  sm:-inset-5
                "
              />

              {/* Image Card */}
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  relative
                  w-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-purple-200
                  bg-white
                  p-2
                  shadow-xl
                  shadow-purple-500/15
                  sm:rounded-4xl
                  sm:p-3
                  sm:shadow-2xl
                "
              >
                {/* Image */}
                <div
                  className="
                    relative
                    w-full
                    overflow-hidden
                    rounded-2xl
                    sm:rounded-3xl
                  "
                >
                  <img
                    src={faqImage}
                    alt="Dental patient care"
                    className="
                      block
                      h-72
                      w-full
                      object-cover
                      sm:h-96
                      md:h-105
                      lg:h-125
                      xl:h-130
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-purple-950/75
                      via-purple-900/10
                      to-transparent
                    "
                  />
                </div>

                {/* =================================================
                    HAVE QUESTIONS CARD
                ================================================== */}
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
                    delay: 0.35,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    rounded-2xl
                    border
                    border-purple-100
                    bg-white/95
                    p-4
                    shadow-xl
                    backdrop-blur-xl
                    sm:bottom-7
                    sm:left-7
                    sm:right-7
                    sm:p-5
                    md:bottom-8
                    md:left-8
                    md:right-8
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    {/* Content */}
                    <div className="flex min-w-0 items-center gap-3">
                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-purple-100
                          sm:h-11
                          sm:w-11
                        "
                      >
                        <HelpCircle className="h-5 w-5 text-purple-600" />
                      </motion.div>

                      <div className="min-w-0">
                        <p className="text-sm font-extrabold text-slate-900">
                          Have Questions?
                        </p>

                        <p className="mt-0.5 text-xs font-semibold text-purple-600">
                          We are here to help you.
                        </p>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <Link
                      to="/contact"
                      className="
                        group
                        inline-flex
                        min-h-11
                        w-full
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-linear-to-r
                        from-purple-600
                        to-indigo-600
                        px-4
                        py-3
                        text-xs
                        font-black
                        uppercase
                        tracking-wide
                        text-white
                        shadow-lg
                        shadow-purple-500/20
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:shadow-purple-500/30
                        active:scale-95
                        sm:w-auto
                      "
                    >
                      <span>Contact Us</span>

                      <motion.span
                        animate={{
                          x: [0, 3, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>

              {/* =================================================
                  FLOATING SPARKLE
              ================================================== */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  right-2
                  top-2
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-linear-to-br
                  from-purple-600
                  to-indigo-600
                  shadow-xl
                  shadow-purple-500/30
                  sm:-right-3
                  sm:-top-3
                  sm:h-14
                  sm:w-14
                  sm:rounded-2xl
                  md:h-16
                  md:w-16
                "
              >
                <Sparkles
                  className="
                    h-5
                    w-5
                    text-white
                    sm:h-6
                    sm:w-6
                    md:h-7
                    md:w-7
                  "
                />
              </motion.div>

              {/* =================================================
                  FLOATING CIRCLE
              ================================================== */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  bottom-2
                  left-2
                  h-10
                  w-10
                  rounded-full
                  bg-linear-to-br
                  from-violet-500
                  to-purple-700
                  shadow-xl
                  shadow-purple-500/30
                  sm:-bottom-3
                  sm:-left-3
                  sm:h-12
                  sm:w-12
                  md:h-14
                  md:w-14
                "
              />
            </motion.div>

            {/* =================================================
                FAQ RIGHT
            ================================================== */}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mx-auto
                flex
                w-full
                max-w-2xl
                lg:mx-0
              "
            >
              {/* FAQ Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -inset-3
                  rounded-4xl
                  bg-purple-500/15
                  blur-3xl
                  sm:-inset-4
                "
              />

              {/* FAQ Card */}
              <div
                className="
                  relative
                  flex
                  w-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-purple-200
                  bg-white/95
                  shadow-xl
                  shadow-purple-500/10
                  backdrop-blur-xl
                  sm:rounded-4xl
                  sm:shadow-2xl
                "
              >
                {/* Header */}
                <div
                  className="
                    shrink-0
                    bg-linear-to-r
                    from-purple-600
                    via-violet-600
                    to-indigo-600
                    px-4
                    py-4
                    text-white
                    sm:px-6
                    sm:py-5
                  "
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/20
                        backdrop-blur-md
                        sm:h-11
                        sm:w-11
                      "
                    >
                      <HelpCircle className="h-5 w-5" />
                    </motion.div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold sm:text-base">
                        Dental FAQs
                      </h3>

                      <p className="mt-0.5 text-[10px] text-white/80 sm:text-xs">
                        Find answers to common dental questions
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ CONTENT */}
                <div
                  className="
                    w-full
                    overflow-y-auto
                    bg-linear-to-b
                    from-white
                    to-purple-50/40
                    p-3
                    sm:max-h-130
                    sm:p-5
                    lg:max-h-140
                    xl:max-h-145
                  "
                >
                  <FAQAccordion />
                </div>

                {/* Bottom */}
                <div
                  className="
                    shrink-0
                    border-t
                    border-purple-100
                    bg-purple-50
                    px-4
                    py-3
                    text-center
                    sm:px-5
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-purple-600
                      sm:text-[10px]
                      md:text-xs
                    "
                  >
                    Scroll inside to view more questions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}