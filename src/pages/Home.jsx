import React from "react";
import { motion } from "motion/react";
import { HelpCircle, Sparkles } from "lucide-react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import TrustBanner from "../components/TrustBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FacilitiesSection from "../components/FacilitiesSection";
import CTA from "../components/CTA";
import FAQAccordion from "../components/FAQAccordion";

export default function Home({ onOpenAppointment }) {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-hero">
        <Hero onOpenAppointment={onOpenAppointment} />
      </section>

      {/* =====================================================
          TRUST BANNER
      ====================================================== */}

      <TrustBanner />

      {/* =====================================================
          WHY CHOOSE US
          Appointment button connected to existing modal
      ====================================================== */}

      <WhyChooseUs
        onOpenAppointment={onOpenAppointment}
      />

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <Services />

      {/* =====================================================
          FACILITIES
      ====================================================== */}

      <FacilitiesSection />

      {/* =====================================================
          CTA
          Appointment button connected to existing modal
      ====================================================== */}

      <CTA
        onOpenAppointment={onOpenAppointment}
      />

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <Testimonials />

      {/* =====================================================
          FAQ SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-indigo-50 py-20">

        {/* =================================================
            BACKGROUND GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-10
            h-80
            w-80
            rounded-full
            bg-purple-400/20
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            h-96
            w-96
            rounded-full
            bg-indigo-400/20
            blur-3xl
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mx-auto
              mb-12
              max-w-3xl
              space-y-4
              text-center
            "
          >

            {/* Badge */}

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-purple-200
                bg-purple-100
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-purple-700
                shadow-sm
              "
            >
              <HelpCircle className="h-4 w-4 text-purple-600" />

              Patient Guidance & FAQs
            </motion.div>

            {/* Heading */}

            <h2
              className="
                text-3xl
                font-black
                tracking-tight
                text-slate-900
                sm:text-4xl
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
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                max-w-2xl
                text-sm
                leading-7
                text-slate-600
                sm:text-base
              "
            >
              Everything you need to know about pain relief,
              dental scaling, root canals, implants, braces,
              and maintaining a healthy smile.
            </p>

          </motion.div>

          {/* =================================================
              IMAGE LEFT + FAQ RIGHT
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-10
              lg:grid-cols-2
              lg:gap-14
            "
          >

            {/* =================================================
                LEFT IMAGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              {/* Purple Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-6
                  rounded-full
                  bg-purple-500/20
                  blur-3xl
                "
              />

              {/* Image Card */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-4xl
                  border
                  border-purple-200
                  bg-white
                  p-3
                  shadow-2xl
                  shadow-purple-500/20
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=85&w=900"
                  alt="Dental patient care"
                  className="
                    h-100
                    w-full
                    rounded-3xl
                    object-cover
                    sm:h-120
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-3
                    rounded-3xl
                    bg-linear-to-t
                    from-purple-950/70
                    via-purple-900/10
                    to-transparent
                  "
                />

                {/* Floating Card */}

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
                    delay: 0.4,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="
                    absolute
                    bottom-8
                    left-8
                    right-8
                    rounded-2xl
                    border
                    border-purple-100
                    bg-white/90
                    p-5
                    shadow-xl
                    backdrop-blur-xl
                  "
                >

                  <div className="flex items-center gap-3">

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
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-purple-100
                      "
                    >
                      <HelpCircle
                        className="
                          h-5
                          w-5
                          text-purple-600
                        "
                      />
                    </motion.div>

                    <div>

                      <p
                        className="
                          text-sm
                          font-extrabold
                          text-slate-900
                        "
                      >
                        Have Questions?
                      </p>

                      <p
                        className="
                          text-xs
                          font-semibold
                          text-purple-600
                        "
                      >
                        We are here to help you.
                      </p>

                    </div>

                  </div>

                </motion.div>

              </motion.div>

              {/* Floating Sparkle */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 15,
                }}
                className="
                  absolute
                  -right-5
                  -top-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-linear-to-br
                  from-purple-600
                  to-indigo-600
                  shadow-xl
                  shadow-purple-500/30
                "
              >
                <Sparkles
                  className="
                    h-7
                    w-7
                    text-white
                  "
                />
              </motion.div>

              {/* Floating Circle */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-5
                  -left-5
                  h-14
                  w-14
                  rounded-full
                  bg-linear-to-br
                  from-violet-500
                  to-purple-700
                  shadow-xl
                  shadow-purple-500/30
                "
              />

            </motion.div>

            {/* =================================================
                RIGHT FAQ
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              {/* FAQ Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-4
                  rounded-4xl
                  bg-purple-500/10
                  blur-3xl
                "
              />

              {/* FAQ Card */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-4xl
                  border
                  border-purple-200
                  bg-white/95
                  shadow-2xl
                  shadow-purple-500/10
                  backdrop-blur-xl
                "
              >

                {/* Purple Header */}

                <div
                  className="
                    bg-linear-to-r
                    from-purple-600
                    via-violet-600
                    to-indigo-600
                    px-5
                    py-5
                    text-white
                    sm:px-6
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
                      }}
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/20
                        backdrop-blur-md
                      "
                    >
                      <HelpCircle className="h-5 w-5" />
                    </motion.div>

                    <div>

                      <h3
                        className="
                          text-sm
                          font-extrabold
                          sm:text-base
                        "
                      >
                        Dental FAQs
                      </h3>

                      <p
                        className="
                          text-[11px]
                          text-white/80
                          sm:text-xs
                        "
                      >
                        Find answers to common dental questions
                      </p>

                    </div>

                  </div>

                </div>

                {/* FAQ ACCORDION */}

                <div
                  className="
                    custom-scrollbar
                    max-h-130
                    overflow-y-auto
                    bg-linear-to-b
                    from-white
                    to-purple-50/40
                    p-4
                    sm:p-5
                  "
                >
                  <FAQAccordion />
                </div>

                {/* Bottom */}

                <div
                  className="
                    border-t
                    border-purple-100
                    bg-purple-50
                    px-5
                    py-3
                    text-center
                  "
                >

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-purple-600
                      sm:text-xs
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
    </>
  );
}