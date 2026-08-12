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
import DoctorsAndSpecialties from "../components/DoctorsAndSpecialties";
import FAQAccordion from "../components/FAQAccordion";
import CTA from "../components/CTA";

import { DOCTORS_DATA } from "../data/doctorsData";

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
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <>{value.toLocaleString()}</>;
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About({ onOpenAppointment }) {
  /* =======================================================
     STATISTICS
  ======================================================= */

  const stats = [
    {
      label: "Happy Smiles Treated",
      value: 15000,
      suffix: "+",
      icon: Users,
      color: "text-purple-600",
    },
    {
      label: "Years Clinical Experience",
      value: 20,
      suffix: "+",
      icon: Award,
      color: "text-indigo-600",
    },
    {
      label: "Specialized Treatments",
      value: 18,
      suffix: "+",
      icon: Stethoscope,
      color: "text-violet-600",
    },
    {
      label: "Patient Satisfaction",
      value: 99,
      suffix: "%",
      icon: Heart,
      color: "text-fuchsia-600",
    },
  ];

  /* =======================================================
     TIMELINE
  ======================================================= */

  const timelineEvents = [
    {
      year: "2005",
      title: "Foundation of Sakthi Dental",
      desc: "Dr. Sakthi Saravanan established the first clinic with a vision for pain-free family dentistry.",
    },
    {
      year: "2012",
      title: "Digital X-Ray & Implant Center",
      desc: "Upgraded to low-radiation 3D CBCT digital imaging and dedicated surgical implant suites.",
    },
    {
      year: "2018",
      title: "Pediatric & Women Dental Wing",
      desc: "Launched specialized anxiety-free pediatric care and dedicated female dental healthcare services.",
    },
    {
      year: "2026",
      title: "International Accreditation",
      desc: "Awarded top rating for sterilization standards and continued growth in advanced dental treatments.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 space-y-20 bg-slate-50">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-indigo-50 py-16 sm:py-24">
        {/* Background Glow */}

        <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT CONTENT */}

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
              className="lg:col-span-7 space-y-6"
            >
              {/* Badge */}

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 text-purple-600" />

                About Sakthi Dental Hospital
              </div>

              {/* Heading */}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                20+ Years of Gentle,{" "}
                <span className="bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Pain-Free Dentistry
                </span>
              </h1>

              {/* Description */}

              <p className="text-sm sm:text-base text-slate-600 leading-7 max-w-2xl">
                Founded by Dr. Sakthi Saravanan, Sakthi Dental Clinic has
                grown into a premier dental healthcare center. We blend
                compassionate patient care with modern dental technology to
                deliver comfortable and confident smiles.
              </p>

              {/* Features */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-purple-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  </div>

                  <span className="text-xs sm:text-sm font-bold text-slate-700">
                    German Class-B Sterilization
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-indigo-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  </div>

                  <span className="text-xs sm:text-sm font-bold text-slate-700">
                    Rotary Single-Sitting RCT
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT DOCTOR IMAGE */}

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
                delay: 0.2,
              }}
              className="lg:col-span-5 relative"
            >
              {/* Glow */}

              <div className="absolute -inset-5 bg-purple-500/20 blur-3xl rounded-full" />

              {/* Image Card */}

              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative rounded-4xl overflow-hidden p-3 bg-white/90 shadow-2xl border border-purple-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                  alt="Dental doctor"
                  className="w-full h-96 object-cover rounded-3xl"
                />

                {/* Image Overlay */}

                <div className="absolute inset-3 rounded-3xl bg-linear-to-t from-purple-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Doctor Information */}

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-purple-100 shadow-lg">
                  <p className="text-sm font-extrabold text-slate-900">
                    Dr. Sakthi Saravanan
                  </p>

                  <p className="text-xs text-purple-600 font-bold">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            duration: 0.6,
          }}
          className="bg-white rounded-4xl p-8 sm:p-12 border border-purple-100 shadow-xl shadow-purple-500/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((st, idx) => {
              const IconComp = st.icon;

              return (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -5,
                  }}
                  className="text-center space-y-3"
                >
                  <IconComp
                    className={`w-8 h-8 ${st.color} mx-auto`}
                  />

                  <div className="text-3xl sm:text-4xl font-black text-slate-900">
                    <AnimatedNumber
                      end={st.value}
                      duration={2500}
                    />

                    <span>{st.suffix}</span>
                  </div>

                  <p className="text-[10px] sm:text-xs font-bold uppercase text-slate-500 tracking-wider">
                    {st.label}
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MISSION */}

          <motion.div
            whileHover={{
              y: -8,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-white rounded-4xl p-8 border-t-4 border-purple-600 shadow-lg shadow-purple-500/10 space-y-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-7">
              To provide painless, accessible, and ethical dental care of
              international caliber for every patient. We aim to reduce dental
              anxiety through gentle modern procedures and dedicated patient
              care.
            </p>
          </motion.div>

          {/* VISION */}

          <motion.div
            whileHover={{
              y: -8,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-white rounded-4xl p-8 border-t-4 border-indigo-600 shadow-lg shadow-indigo-500/10 space-y-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Eye className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-7">
              To be recognized as a trusted family dental hospital known for
              comfortable dental care, advanced implantology, modern
              technology, and preventive dental education for children and
              parents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            duration: 0.6,
          }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Our Journey
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            20+ Years Journey of{" "}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            A timeline of trust, innovation, and important milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineEvents.map((item, idx) => (
            <motion.div
              key={idx}
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
                duration: 0.5,
                delay: idx * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="bg-white rounded-3xl p-6 relative space-y-4 border border-purple-100 shadow-md hover:shadow-xl hover:shadow-purple-500/10 transition-shadow"
            >
              <span className="text-3xl font-black bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {item.year}
              </span>

              <h4 className="text-base font-bold text-slate-800">
                {item.title}
              </h4>

              <p className="text-xs text-slate-600 leading-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          DOCTORS & SPECIALTIES
      ====================================================== */}

      <DoctorsAndSpecialties />

      {/* =====================================================
          DOCTORS
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            duration: 0.6,
          }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-4 h-4" />
            Our Experts
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Meet Our{" "}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Specialist Doctors
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            Experienced dental professionals dedicated to your oral health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS_DATA.map((doc) => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              onOpenAppointment={onOpenAppointment}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
      ====================================================== */}

      <section className="relative overflow-hidden py-20 bg-linear-to-br from-purple-50 via-white to-indigo-50">
        {/* Background Glow */}

        <div className="absolute top-10 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* FAQ TITLE */}

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
              duration: 0.6,
            }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 border border-purple-200 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-purple-600" />

              Patient Guidance & FAQs
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Frequently Asked{" "}
              <span className="bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-7 max-w-2xl mx-auto">
              Everything you need to know about dental treatments, pain
              relief, scaling, root canals, implants, braces, and oral
              hygiene.
            </p>
          </motion.div>

          {/* IMAGE LEFT + FAQ RIGHT */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
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

              <div className="absolute -inset-6 bg-purple-500/20 blur-3xl rounded-full" />

              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative bg-white p-3 rounded-4xl border border-purple-200 shadow-2xl shadow-purple-500/20 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=85&w=900"
                  alt="Dental patient care"
                  className="w-full h-96 sm:h-112 object-cover rounded-3xl"
                />

                {/* Image Gradient */}

                <div className="absolute inset-3 rounded-3xl bg-linear-to-t from-purple-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Information Card */}

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
                    delay: 0.3,
                    duration: 0.5,
                  }}
                  className="absolute bottom-8 left-8 right-8 p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-purple-100 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-purple-600" />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-slate-900">
                        Have Questions?
                      </p>

                      <p className="text-xs text-purple-600 font-semibold">
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
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-5 -right-5 w-16 h-16 rounded-2xl bg-linear-to-br from-purple-600 to-indigo-600 shadow-xl shadow-purple-500/30 flex items-center justify-center"
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
            </motion.div>

            {/* RIGHT FAQ */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
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

              <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-4xl" />

              <div className="relative bg-white/95 backdrop-blur-xl rounded-4xl border border-purple-200 shadow-2xl shadow-purple-500/10 overflow-hidden">
                {/* FAQ Header */}

                <div className="px-5 sm:px-6 py-5 bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base">
                        Dental FAQs
                      </h3>

                      <p className="text-[11px] sm:text-xs text-white/80">
                        Find answers to common dental questions
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ CONTENT */}

                <div className="p-4 sm:p-5 bg-linear-to-b from-white to-purple-50/40 max-h-107.5 overflow-y-auto">
                  <FAQAccordion />
                </div>

                {/* Footer */}

                <div className="px-5 py-3 border-t border-purple-100 bg-purple-50 text-center">
                  <p className="text-[10px] sm:text-xs font-bold text-purple-600 uppercase tracking-wider">
                    Tap a question to view the answer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <CTA onOpenAppointment={onOpenAppointment} />
    </div>
  );
}