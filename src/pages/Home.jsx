import React from "react";
import { motion } from "motion/react";
import {
  HelpCircle,
  Sparkles,
} from "lucide-react";

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
      ====================================================== */}

      <WhyChooseUs />

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
      ====================================================== */}

      <CTA onOpenAppointment={onOpenAppointment} />

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <Testimonials />

      {/* =====================================================
          FAQ SECTION
      ====================================================== */}

      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">

        {/* =================================================
            BACKGROUND GLOW
        ================================================== */}

        <div
          className="
            absolute
            top-10
            left-0
            w-80
            h-80
            bg-purple-400/20
            rounded-full
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-96
            h-96
            bg-indigo-400/20
            rounded-full
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            relative
            z-10
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
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              text-center
              max-w-3xl
              mx-auto
              mb-12
              space-y-4
            "
          >

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-purple-100
                text-purple-700
                border
                border-purple-200
                shadow-sm
                text-xs
                font-bold
                uppercase
                tracking-wider
              "
            >
              <HelpCircle className="w-4 h-4 text-purple-600" />

              Patient Guidance & FAQs
            </div>

            {/* Heading */}

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-black
                tracking-tight
                text-slate-900
              "
            >
              Frequently Asked{" "}

              <span
                className="
                  bg-gradient-to-r
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
                text-sm
                sm:text-base
                text-slate-600
                leading-7
                max-w-2xl
                mx-auto
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
              lg:grid-cols-2
              gap-10
              lg:gap-14
              items-center
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
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              {/* Purple Glow */}

              <div
                className="
                  absolute
                  -inset-6
                  bg-purple-500/20
                  blur-3xl
                  rounded-full
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
                  bg-white
                  p-3
                  rounded-[2rem]
                  border
                  border-purple-200
                  shadow-2xl
                  shadow-purple-500/20
                  overflow-hidden
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=85&w=900"
                  alt="Dental patient care"
                  className="
                    w-full
                    h-[400px]
                    sm:h-[480px]
                    object-cover
                    rounded-[1.5rem]
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-3
                    rounded-[1.5rem]
                    bg-gradient-to-t
                    from-purple-950/70
                    via-purple-900/10
                    to-transparent
                    pointer-events-none
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
                  className="
                    absolute
                    bottom-8
                    left-8
                    right-8
                    p-5
                    rounded-2xl
                    bg-white/90
                    backdrop-blur-xl
                    border
                    border-purple-100
                    shadow-xl
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-purple-100
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <HelpCircle
                        className="
                          w-5
                          h-5
                          text-purple-600
                        "
                      />
                    </div>

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
                          text-purple-600
                          font-semibold
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
                className="
                  absolute
                  -top-5
                  -right-5
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-purple-600
                  to-indigo-600
                  shadow-xl
                  shadow-purple-500/30
                  flex
                  items-center
                  justify-center
                "
              >
                <Sparkles
                  className="
                    w-7
                    h-7
                    text-white
                  "
                />
              </motion.div>


              {/* Floating Circle */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
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
                  w-14
                  h-14
                  rounded-full
                  bg-gradient-to-br
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
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              {/* FAQ Glow */}

              <div
                className="
                  absolute
                  -inset-4
                  bg-purple-500/10
                  blur-3xl
                  rounded-[2rem]
                "
              />

              {/* FAQ Card */}

              <div
                className="
                  relative
                  bg-white/95
                  backdrop-blur-xl
                  rounded-[2rem]
                  border
                  border-purple-200
                  shadow-2xl
                  shadow-purple-500/10
                  overflow-hidden
                "
              >

                {/* Purple Header */}

                <div
                  className="
                    px-5
                    sm:px-6
                    py-5
                    bg-gradient-to-r
                    from-purple-600
                    via-violet-600
                    to-indigo-600
                    text-white
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-white/20
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <div>

                      <h3
                        className="
                          font-extrabold
                          text-sm
                          sm:text-base
                        "
                      >
                        Dental FAQs
                      </h3>

                      <p
                        className="
                          text-[11px]
                          sm:text-xs
                          text-white/80
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
                    p-4
                    sm:p-5
                    bg-gradient-to-b
                    from-white
                    to-purple-50/40
                    max-h-[520px]
                    overflow-y-auto
                    custom-scrollbar
                  "
                >

                  <FAQAccordion />

                </div>


                {/* Bottom */}

                <div
                  className="
                    px-5
                    py-3
                    border-t
                    border-purple-100
                    bg-purple-50
                    text-center
                  "
                >

                  <p
                    className="
                      text-[10px]
                      sm:text-xs
                      font-bold
                      text-purple-600
                      uppercase
                      tracking-wider
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