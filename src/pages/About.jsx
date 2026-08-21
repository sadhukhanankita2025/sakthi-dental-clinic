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
  MapPin,
  Building2,
  ShieldCheck,
  Calendar,
} from "lucide-react";

import DoctorCard from "../components/DoctorCard";
import DoctorsAndSpecialties from "../components/DoctorsAndSpecialties";
import FAQAccordion from "../components/FAQAccordion";
import CTA from "../components/CTA";

import { DOCTORS_DATA } from "../data/doctorsData";
import backgroundImage from "../assets/1doc.jpg";
import Visionimg from "../assets/Banner Images/Banner_img_1.jpg";
import Missionimg from "../assets/Banner Images/Banner_img_1.jpg";


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
      year: "2000",
      title: "Professional Journey Begins",
      desc: "Dr. Anupriya graduated and started her career in modern dentistry, later refining her clinical skills during 6 impactful years at Mathura Clinic.",
    },
    {
      year: "2004",
      title: "Foundation of Sakthi Dental Clinic",
      desc: "Established in Hosur with a clear vision to make high-quality, patient-centric dental care accessible to all.",
    },
    {
      year: "2014+",
      title: "Decade of Healthcare Consultancy",
      desc: "Marked long-standing service as a trusted dental consultant with the Primary Health Center at Chandara Hospital for over a decade.",
    },
    {
      year: "2026",
      title: "Excellence in Modern Dentistry",
      desc: "Bringing over 20 years of expertise, combining advanced technology with compassionate, personalized care.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 space-y-20 bg-slate-50">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      {/* Hero: Get to Know Dr. Anupriya */}
      <section className="relative overflow-hidden bg-linear-to-b from-purple-100/70 via-indigo-50/40 to-[#FAF5FF] py-16 sm:py-24">
        {/* Soft pastel ambient orbs */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-200 h-125 bg-linear-to-br from-purple-300/30 via-indigo-200/35 to-teal-100/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-95 h-95 bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-purple-200/80 text-xs font-black text-purple-950 uppercase tracking-wider shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-purple-600" /> About Us • Sakthi Dental Clinic
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Get to Know <span className="bg-linear-to-r from-purple-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent">Dr. Anupriya</span>
                </h1>
                <p className="text-lg sm:text-xl font-extrabold text-purple-800">
                  Your Trusted Partner in Dental Care & Smile Transformation
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  With more than two decades of dedicated practice, Dr. Anupriya has built a reputation for clinical excellence, gentle care, and a patient-first philosophy. After graduating in 2000, she spent six formative years (2000–2006) at Mathura Clinic refining her expertise before establishing Sakthi Dental Clinic in Hosur in 2004.
                </p>
                <p>
                  For over a decade, she has also been a trusted dental consultant at the Primary Health Center (PHC) at Chandara Hospital, extending quality healthcare to diverse communities.
                </p>
                <p>
                  At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free. From routine check-ups to specialized treatments, we prioritize personalized care tailored to your unique dental needs.
                </p>
                <div className="font-semibold text-slate-900 bg-white/90 p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-sm flex items-start gap-3">
                  <Heart className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Whether you're looking for preventive care, cosmetic enhancements, or restorative solutions, Dr. Anupriya and her team are committed to delivering excellence at every step. Because here, your smile isn’t just treated — it’s celebrated.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-sm border border-purple-100">
                  <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Hosur, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-sm border border-purple-100">
                  <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Est. 2004 in Hosur</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-sm border border-purple-100">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>PHC Dental Consultant</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 via-indigo-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment with Dr. Anupriya</span>
                </button>
              </div>
            </div>

            {/* Founder Doctor Profile Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[36px] overflow-hidden p-3.5 bg-white/90 shadow-2xl border border-white shadow-purple-900/15">
                <img
                  src={backgroundImage}
                  alt="Dr. Anupriya Founder & Chief Dental Surgeon"
                  className="w-full h-110 object-cover rounded-[28px]"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-black text-slate-900">Dr. Anupriya</p>
                      <p className="text-xs text-purple-700 font-bold">Founder & Chief Dental Surgeon</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-black">
                      20+ Yrs Exp
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">
                    Leading Modern Dentistry in Hosur Since 2004
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-4xl p-8 sm:p-12 border border-purple-100 shadow-xl shadow-purple-500/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((st, idx) => {
              const IconComp = st.icon;

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="text-center space-y-3"
                >
                  <IconComp className={`w-8 h-8 ${st.color} mx-auto`} />
                  <div className="text-3xl sm:text-4xl font-black text-slate-900">
                    <AnimatedNumber end={st.value} duration={2500} />
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* MISSION */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-4xl shadow-2xl group min-h-107.5"
          >
            {/* Background Image */}
            <img
              src={Missionimg}
              alt="Sakthi Dental Clinic"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-900/85 via-purple-800/70 to-slate-900/80" />

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Target className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>

                <p className="text-sm sm:text-base leading-7 text-slate-100">
                  At Sakthi Dental Clinic, our mission is to redefine oral healthcare
                  by delivering personalized, compassionate, and advanced dental
                  services. We are committed to creating a welcoming environment where
                  patients feel comfortable and confident in taking charge of their
                  dental health.
                </p>

                <p className="mt-3 text-sm sm:text-base leading-7 text-slate-100">
                  By integrating state-of-the-art technology with patient-centric care,
                  we ensure every treatment enhances not only your smile but also your
                  overall well-being. Continuous learning and innovation drive us to
                  provide comprehensive solutions for lifelong oral health.
                </p>
              </div>
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-4xl shadow-2xl group min-h-107.5"
          >
            {/* Background Image */}
            <img
              src={Visionimg}
              alt="Sakthi Dental Clinic"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-indigo-900/85 via-indigo-800/70 to-slate-900/80" />

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Eye className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>

                <p className="text-sm sm:text-base leading-7 text-slate-100">
                  Our vision is to be a leading force in modern dentistry, known for
                  setting new standards in patient care, innovation, and community
                  engagement. We believe building trust and encouraging preventive care
                  are essential for healthier smiles.
                </p>

                <p className="mt-3 text-sm sm:text-base leading-7 text-slate-100">
                  We aspire to deliver exceptional dental outcomes while contributing
                  positively to the community through awareness initiatives and outreach
                  programs, ensuring every smile reflects confidence, health, and
                  happiness.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
        <div className="absolute top-10 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              Everything you need to know about dental treatments, pain relief, scaling, root canals, implants, braces, and oral hygiene.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-purple-500/20 blur-3xl rounded-full" />
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white p-3 rounded-4xl border border-purple-200 shadow-2xl shadow-purple-500/20 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=85&w=900"
                  alt="Dental patient care"
                  className="w-full h-96 sm:h-112 object-cover rounded-3xl"
                />
                <div className="absolute inset-3 rounded-3xl bg-linear-to-t from-purple-950/70 via-transparent to-transparent pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
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

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 w-16 h-16 rounded-2xl bg-linear-to-br from-purple-600 to-indigo-600 shadow-xl shadow-purple-500/30 flex items-center justify-center"
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
            </motion.div>

            {/* RIGHT FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-4xl" />
              <div className="relative bg-white/95 backdrop-blur-xl rounded-4xl border border-purple-200 shadow-2xl shadow-purple-500/10 overflow-hidden">
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

                <div className="p-4 sm:p-5 bg-linear-to-b from-white to-purple-50/40 max-h-107.5 overflow-y-auto">
                  <FAQAccordion />
                </div>

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