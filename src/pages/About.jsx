import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

import {
  Award,
  Users,
  Stethoscope,
  Heart,
  Sparkles,
  Target,
  Eye,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

import DoctorCard from "../components/DoctorCard";
import { DOCTORS_DATA } from "../data/doctorsData";

import CTA from "../components/CTA";
import DoctorsAndSpecialities from "../components/DoctorsAndSpecialties";
import FAQAccordion from "../components/FAQAccordion";

/* =========================================================
   ANIMATED NUMBER
========================================================= */

function AnimatedNumber({ end, duration = 2500 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setValue(
        Math.floor(easedProgress * end)
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return <>{value.toLocaleString()}</>;
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About({
  onOpenAppointment,
}) {
  /* =======================================================
     STATISTICS
  ======================================================= */

  const stats = [
    {
      label: "Happy Smiles Treated",
      value: 15000,
      suffix: "+",
      icon: Users,
    },
    {
      label: "Years Clinical Experience",
      value: 20,
      suffix: "+",
      icon: Award,
    },
    {
      label: "Specialized Treatments",
      value: 18,
      suffix: "+",
      icon: Stethoscope,
    },
    {
      label: "Patient Satisfaction",
      value: 99,
      suffix: "%",
      icon: Heart,
    },
  ];

  /* =======================================================
     TIMELINE
  ======================================================= */

  const timelineEvents = [
    {
      year: "2005",
      title: "Foundation of Sakthi Dental",
      desc:
        "Dr. Sakthi Saravanan established the first clinic with a vision for pain-free family dentistry.",
    },
    {
      year: "2012",
      title: "Digital X-Ray & Implant Center",
      desc:
        "Upgraded to low-radiation 3D CBCT digital imaging and dedicated surgical implant suites.",
    },
    {
      year: "2018",
      title: "Pediatric & Women Dental Wing",
      desc:
        "Launched specialized anxiety-free pediatric play lounge and female dental healthcare desk.",
    },
    {
      year: "2026",
      title: "International Accreditation",
      desc:
        "Awarded top rating for advanced sterilization standards and 15,000+ successful smile makeovers.",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        pt-24
        pb-16
        space-y-20
        bg-gradient-to-b
        from-purple-50
        via-white
        to-purple-50
        overflow-hidden
      "
    >

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          py-16
          sm:py-24
          bg-gradient-to-br
          from-purple-100
          via-violet-50
          to-indigo-100
        "
      >

        {/* Background Glow */}

        <div
          className="
            absolute
            -top-32
            -left-32
            w-96
            h-96
            bg-purple-400/20
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -right-32
            w-96
            h-96
            bg-indigo-400/20
            rounded-full
            blur-3xl
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

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-12
              items-center
            "
          >

            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                lg:col-span-7
                space-y-6
              "
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-white/80
                  backdrop-blur-md
                  border
                  border-purple-200
                  text-xs
                  font-bold
                  text-purple-700
                  uppercase
                  tracking-wider
                  shadow-sm
                "
              >

                <Sparkles className="w-4 h-4" />

                About Sakthi Dental Hospital

              </div>

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  text-slate-900
                  tracking-tight
                  leading-tight
                "
              >

                20+ Years of Gentle,

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-purple-600
                    via-violet-600
                    to-indigo-600
                    bg-clip-text
                    text-transparent
                  "
                >
                  Pain-Free Dentistry
                </span>

              </h1>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-slate-600
                  leading-relaxed
                  max-w-2xl
                "
              >
                Founded by Dr. Sakthi Saravanan,
                Sakthi Dental Clinic has grown into
                a premier international dental
                healthcare center. We blend
                compassionate patient care with
                cutting-edge dental technology to
                deliver life-changing smiles.
              </p>

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-4
                  pt-2
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-2xl
                    bg-white/90
                    border
                    border-purple-100
                    shadow-lg
                    shadow-purple-500/5
                  "
                >

                  <CheckCircle2
                    className="
                      w-5
                      h-5
                      text-purple-600
                      shrink-0
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      text-slate-700
                    "
                  >
                    German Class-B Sterilization
                  </span>

                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-2xl
                    bg-white/90
                    border
                    border-purple-100
                    shadow-lg
                    shadow-purple-500/5
                  "
                >

                  <CheckCircle2
                    className="
                      w-5
                      h-5
                      text-violet-600
                      shrink-0
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      text-slate-700
                    "
                  >
                    Rotary Single-Sitting RCT
                  </span>

                </div>

              </div>

            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                lg:col-span-5
                relative
              "
            >

              <div
                className="
                  absolute
                  -inset-5
                  bg-purple-500/20
                  blur-3xl
                  rounded-full
                "
              />

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                className="
                  relative
                  rounded-[2rem]
                  overflow-hidden
                  p-3
                  bg-white/90
                  shadow-2xl
                  shadow-purple-500/20
                  border
                  border-purple-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                  alt="Dental professional"
                  className="
                    w-full
                    h-96
                    object-cover
                    rounded-[1.5rem]
                  "
                />

                <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    right-7
                    p-4
                    rounded-2xl
                    bg-white/90
                    backdrop-blur-xl
                    border
                    border-purple-100
                    shadow-xl
                  "
                >

                  <p
                    className="
                      text-sm
                      font-extrabold
                      text-slate-900
                    "
                  >
                    Dr. Sakthi Saravanan
                  </p>

                  <p
                    className="
                      text-xs
                      text-purple-600
                      font-bold
                    "
                  >
                    Chief Implantologist & Founder
                  </p>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

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
          className="
            bg-white/90
            backdrop-blur-xl
            rounded-[2rem]
            p-8
            sm:p-12
            border
            border-purple-100
            shadow-2xl
            shadow-purple-500/10
          "
        >

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
            "
          >

            {stats.map((stat, index) => {

              const Icon = stat.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="
                    text-center
                    space-y-2
                  "
                >

                  <div
                    className="
                      mx-auto
                      w-14
                      h-14
                      rounded-2xl
                      bg-purple-100
                      text-purple-600
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Icon className="w-7 h-7" />

                  </div>

                  <div
                    className="
                      text-3xl
                      sm:text-4xl
                      font-black
                      text-slate-900
                    "
                  >

                    <AnimatedNumber
                      end={stat.value}
                    />

                    <span
                      className="
                        text-purple-600
                      "
                    >
                      {stat.suffix}
                    </span>

                  </div>

                  <p
                    className="
                      text-[10px]
                      sm:text-xs
                      font-bold
                      uppercase
                      text-slate-500
                      tracking-wider
                    "
                  >
                    {stat.label}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ====================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {/* MISSION */}

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
              bg-white/90
              p-8
              rounded-[2rem]
              border
              border-purple-100
              border-t-4
              border-t-purple-600
              shadow-xl
              shadow-purple-500/10
              space-y-4
            "
          >

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-purple-100
                text-purple-600
                flex
                items-center
                justify-center
              "
            >

              <Target className="w-7 h-7" />

            </div>

            <h3
              className="
                text-2xl
                font-black
                text-slate-900
              "
            >
              Our Mission
            </h3>

            <p
              className="
                text-sm
                text-slate-600
                leading-relaxed
              "
            >
              To provide painless, accessible,
              and ethical dental care of
              international caliber for every
              patient. We eliminate dental anxiety
              through gentle, modern procedures
              and dedicated empathy.
            </p>

          </motion.div>


          {/* VISION */}

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
              bg-white/90
              p-8
              rounded-[2rem]
              border
              border-indigo-100
              border-t-4
              border-t-indigo-600
              shadow-xl
              shadow-indigo-500/10
              space-y-4
            "
          >

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-indigo-100
                text-indigo-600
                flex
                items-center
                justify-center
              "
            >

              <Eye className="w-7 h-7" />

            </div>

            <h3
              className="
                text-2xl
                font-black
                text-slate-900
              "
            >
              Our Vision
            </h3>

            <p
              className="
                text-sm
                text-slate-600
                leading-relaxed
              "
            >
              To be recognized as the most trusted
              family dental hospital in the region,
              known for zero-pain standards,
              advanced 3D implantology, and
              preventive dental education for
              kids and parents.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            text-center
            max-w-2xl
            mx-auto
            mb-12
            space-y-3
          "
        >

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
              text-xs
              font-bold
              uppercase
              tracking-wider
            "
          >

            <Award className="w-4 h-4" />

            Our Journey

          </div>

          <h2
            className="
              text-3xl
              sm:text-4xl
              font-black
              text-slate-900
            "
          >

            20+ Years Journey of{" "}

            <span
              className="
                bg-gradient-to-r
                from-purple-600
                to-indigo-600
                bg-clip-text
                text-transparent
              "
            >
              Excellence
            </span>

          </h2>

          <p
            className="
              text-sm
              text-slate-600
            "
          >
            A timeline of trust, innovation,
            and happy milestones.
          </p>

        </div>


        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {timelineEvents.map((item, index) => (

            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-white/90
                p-6
                rounded-[1.5rem]
                border
                border-purple-100
                shadow-lg
                shadow-purple-500/5
                space-y-3
              "
            >

              <span
                className="
                  text-3xl
                  font-black
                  bg-gradient-to-r
                  from-purple-600
                  to-indigo-600
                  bg-clip-text
                  text-transparent
                "
              >
                {item.year}
              </span>

              <h4
                className="
                  text-base
                  font-bold
                  text-slate-900
                "
              >
                {item.title}
              </h4>

              <p
                className="
                  text-xs
                  text-slate-600
                  leading-relaxed
                "
              >
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          DOCTORS AND SPECIALITIES
      ====================================================== */}

      <DoctorsAndSpecialities />


      {/* =====================================================
          DOCTORS
      ====================================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            text-center
            max-w-2xl
            mx-auto
            mb-12
            space-y-3
          "
        >

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
              text-xs
              font-bold
              uppercase
              tracking-wider
            "
          >

            <Stethoscope className="w-4 h-4" />

            Our Specialists

          </div>

          <h2
            className="
              text-3xl
              sm:text-4xl
              font-black
              text-slate-900
            "
          >

            Meet Our{" "}

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
              Specialist Doctors
            </span>

          </h2>

          <p
            className="
              text-sm
              text-slate-600
            "
          >
            Experienced MDS specialists
            dedicated to your dental health.
          </p>

        </div>


        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {DOCTORS_DATA.map((doctor) => (

            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onOpenAppointment={
                onOpenAppointment
              }
            />

          ))}

        </div>

      </section>


      {/* =====================================================
          FAQ SECTION
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          py-10
        "
      >

        {/* Background Glow */}

        <div
          className="
            absolute
            top-20
            left-0
            w-80
            h-80
            bg-purple-300/20
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-96
            h-96
            bg-indigo-300/20
            rounded-full
            blur-3xl
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
              FAQ TITLE ABOVE IMAGE + QUESTIONS
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

              <HelpCircle
                className="
                  w-4
                  h-4
                  text-purple-600
                "
              />

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
              Everything you need to know about
              pain relief, dental scaling, root
              canals, implants, braces, and
              maintaining a healthy smile.
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

                {/* Image Gradient */}

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

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

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

              {/* Glow */}

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

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

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

                      <HelpCircle
                        className="w-5 h-5"
                      />

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
                        Find answers to common
                        dental questions
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


      {/* =====================================================
          CTA
      ====================================================== */}

      <CTA
        onOpenAppointment={
          onOpenAppointment
        }
      />

    </div>
  );
}