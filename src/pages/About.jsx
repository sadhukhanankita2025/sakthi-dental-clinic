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
} from "lucide-react";

import DoctorCard from "../components/DoctorCard";
import { DOCTORS_DATA } from "../data/doctorsData";
import CTA from "../components/CTA";

/* =========================================================
   SIMPLE LOCAL COUNT-UP COMPONENT
   No react-countup dependency required
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
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return <>{value.toLocaleString()}</>;
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About({ onOpenAppointment }) {
  /* =========================================================
     STATISTICS
  ========================================================= */

  const stats = [
    {
      label: "Happy Smiles Treated",
      value: 15000,
      suffix: "+",
      icon: Users,
      color: "text-[#0D9488]",
    },
    {
      label: "Years Clinical Experience",
      value: 20,
      suffix: "+",
      icon: Award,
      color: "text-[#0284C7]",
    },
    {
      label: "Specialized Treatments",
      value: 18,
      suffix: "+",
      icon: Stethoscope,
      color: "text-[#059669]",
    },
    {
      label: "Patient Satisfaction",
      value: 99,
      suffix: "%",
      icon: Heart,
      color: "text-emerald-500",
    },
  ];

  /* =========================================================
     TIMELINE
  ========================================================= */

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
      desc: "Launched specialized anxiety-free pediatric play lounge and female dental healthcare desk.",
    },
    {
      year: "2026",
      title: "International Accreditation",
      desc: "Awarded top rating for Class-B German autoclave sterilization and 15,000+ successful smile makeovers.",
    },
  ];

  return (
    <div className="pt-24 pb-16 space-y-20 bg-slate-50">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-hero py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT CONTENT */}

            <div className="lg:col-span-7 space-y-6">

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-bold text-[#0D9488] uppercase tracking-wider">

                <Sparkles className="w-3.5 h-3.5" />

                About Sakthi Dental Hospital

              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">

                20+ Years of Gentle,{" "}

                <span className="text-gradient">
                  Pain-Free Dentistry
                </span>

              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded by Dr. Sakthi Saravanan, Sakthi Dental Clinic has grown
                into a premier international dental healthcare center. We blend
                compassionate patient care with cutting-edge dental technology
                to deliver life-changing smiles.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-bold text-slate-700">

                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-sm border border-slate-100">

                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />

                  <span>
                    German Class-B Sterilization
                  </span>

                </div>

                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-sm border border-slate-100">

                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />

                  <span>
                    Rotary Single-Sitting RCT
                  </span>

                </div>

              </div>

            </div>

            {/* DOCTOR IMAGE */}

            <div className="lg:col-span-5 relative">

              <div className="relative rounded-4xl overflow-hidden p-3 bg-white/80 shadow-2xl border border-white">

                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Sakthi Saravanan Chief Dental Surgeon"
                  className="w-full h-96 object-cover rounded-3xl"
                />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-lg">

                  <p className="text-sm font-extrabold text-slate-900">
                    Dr. Sakthi Saravanan
                  </p>

                  <p className="text-xs text-[#0D9488] font-bold">
                    Chief Implantologist & Founder
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="glass-card p-8 sm:p-12 border border-white shadow-xl">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">

            {stats.map((st, idx) => {

              const IconComp = st.icon;

              return (
                <div
                  key={idx}
                  className="text-center pt-4 md:pt-0 first:pt-0 space-y-2"
                >

                  <IconComp
                    className={`w-8 h-8 ${st.color} mx-auto mb-2`}
                  />

                  <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">

                    <AnimatedNumber
                      end={st.value}
                      duration={2500}
                    />

                    <span>
                      {st.suffix}
                    </span>

                  </div>

                  <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    {st.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* MISSION */}

          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card p-8 border-t-4 border-t-[#0D9488] space-y-4"
          >

            <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">

              <Target className="w-6 h-6" />

            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To provide painless, accessible, and ethical dental care of
              international caliber for every patient. We eliminate dental
              anxiety through gentle, modern procedures and dedicated empathy.
            </p>

          </motion.div>

          {/* VISION */}

          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card p-8 border-t-4 border-t-[#0284C7] space-y-4"
          >

            <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center">

              <Eye className="w-6 h-6" />

            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be recognized as the most trusted family dental hospital in
              the region, known for zero-pain standards, advanced 3D
              implantology, and preventive dental education for kids & parents.
            </p>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">

          <h2 className="text-3xl font-extrabold text-slate-900">
            20+ Years Journey of Excellence
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            A timeline of trust, innovation, and happy milestones.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {timelineEvents.map((item, idx) => (

            <div
              key={idx}
              className="glass-card p-6 relative space-y-3 border border-slate-200"
            >

              <span className="text-2xl font-black text-[#0D9488]">
                {item.year}
              </span>

              <h4 className="text-base font-bold text-slate-800">
                {item.title}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          DOCTORS
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">

          <h2 className="text-3xl font-extrabold text-slate-900">
            Meet Our Specialist Doctors
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            Experienced MDS specialists dedicated to your dental health.
          </p>

        </div>

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
          CTA
      ====================================================== */}

      <CTA
        onOpenAppointment={onOpenAppointment}
      />

    </div>
  );
}