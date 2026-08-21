import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  Award,
  Users,
  Stethoscope,
  Heart,
  Sparkles,
  Target,
  Eye,
  HelpCircle,
  MapPin,
  Building2,
  ShieldCheck,
  Calendar,
  ArrowRight,
  X,
  Cpu,
  Zap,
  Smile,
  Shield,
  Sun,
  Activity,
} from "lucide-react";

import DoctorsAndSpecialties from "../components/DoctorsAndSpecialties";
import FAQAccordion from "../components/FAQAccordion";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";

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
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out

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
  const [selectedService, setSelectedService] = useState(null);

  const stats = [
    {
      label: "Happy Smiles Treated",
      value: 15000,
      suffix: "+",
      icon: Users,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      label: "Years Clinical Experience",
      value: 20,
      suffix: "+",
      icon: Award,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      label: "Specialized Treatments",
      value: 18,
      suffix: "+",
      icon: Stethoscope,
      color: "text-violet-600 bg-violet-50 border-violet-100",
    },
    {
      label: "Patient Satisfaction",
      value: 99,
      suffix: "%",
      icon: Heart,
      color: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100",
    },
  ];

  const specialtyServices = [
    {
      badge: "5,000+ Implants",
      title: "3D Computer-Guided Implantology",
      subtitle: "Permanent tooth replacement with lifetime warranty",
      desc: "Flapless, keyhole implant placement guided by 3D digital scans for immediate loading and zero post-op swelling.",
      equipment: "German CBCT 3D X-Ray & Swiss Titanium Implants",
      highlights: ["Surgical Precision", "Lifetime Warranty", "Natural Chewing Power"],
      icon: Cpu,
      queryName: "3D Implants",
    },
    {
      badge: "8,000+ RCTs",
      title: "Rotary Micro-Endodontics (RCT)",
      subtitle: "Single-visit painless root canal therapy",
      desc: "Precision nerve cleaning using German rotary files and laser sterilizing beams. Pain is eliminated before procedure starts.",
      equipment: "Carl Zeiss Dental Microscope & Computerized Anesthesia",
      highlights: ["Single Sitting", "Zero Needle Pain", "99.4% Tooth Saving"],
      icon: Zap,
      queryName: "Rotary",
    },
    {
      badge: "3,200+ Cases",
      title: "Digital Orthodontics & Clear Aligners",
      subtitle: "Invisalign & invisible aligner alignment",
      desc: "Straighten misaligned teeth using custom medical-grade clear aligner trays without metal wires or mouth sores.",
      equipment: "iTero Element 5D Intraoral Scanner",
      highlights: ["100% Removable", "Invisible Aesthetics", "0% Interest EMI"],
      icon: Activity,
      queryName: "Digital",
    },
    {
      badge: "10,000+ Happy Kids",
      title: "Anxiety-Free Pediatric Dentistry",
      subtitle: "Gentle child-friendly dental play environment",
      desc: "Dedicated kid-friendly treatment lounge with cartoon displays, preventive fluoride varnish, and painless cavity fillings.",
      equipment: "Pain-Free Wand Anesthesia & Nitrous Sedation",
      highlights: ["Fear-Free Protocol", "Preventive Fluoride", "Kids Play Suite"],
      icon: Smile,
      queryName: "Anxiety-Free",
    },
    {
      badge: "100% Bloodless",
      title: "Laser Periodontics & Gum Care",
      subtitle: "Bloodless gum reshaping & deep cleaning",
      desc: "Treat bleeding gums, pyorrhea, and dark gum hyperpigmentation without scalpels, sutures, or heavy bleeding.",
      equipment: "Biolase Waterlase Diode Laser System",
      highlights: ["No Scalpel / Sutures", "Instant Healing", "Gummy Smile Correction"],
      icon: Shield,
      queryName: "Laser",
    },
    {
      badge: "1-Hour Whitening",
      title: "Cosmetic Veneers & Digital Smile Design",
      subtitle: "Hollywood porcelain veneers & teeth whitening",
      desc: "Transform discolored, chipped, or gapped teeth into a stunning picture-perfect smile customized to your facial symmetry.",
      equipment: "Digital Smile Design (DSD) Software & Zoom Bleaching",
      highlights: ["Custom Shade Match", "1-Hour Transformation", "Stain Resistant"],
      icon: Sun,
      queryName: "Cosmetic",
    },
  ];

  const timelineEvents = [
    {
      year: "2000",
      title: "Professional Journey Begins",
      desc: "Dr. Anupriya graduated and started her career in modern dentistry, later refining clinical skills over 6 years at Mathura Clinic.",
    },
    {
      year: "2004",
      title: "Foundation of Sakthi Dental",
      desc: "Established in Hosur with a clear vision to make high-quality, patient-centric dental care accessible to all.",
    },
    {
      year: "2014+",
      title: "Healthcare Consultancy",
      desc: "Marked long-standing service as a trusted dental consultant with the Primary Health Center at Chandara Hospital.",
    },
    {
      year: "2026",
      title: "Excellence in Modern Dentistry",
      desc: "Bringing over 2 decades of expertise, combining advanced technology with compassionate, personalized care.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 space-y-24 bg-linear-to-b from-purple-50/40 via-white to-slate-50 relative overflow-hidden">
      
      {/* =====================================================
          SOFT PASTEL AMBIENT GLOW EFFECTS
      ====================================================== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-linear-to-br from-purple-200/40 via-indigo-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-125 h-125 bg-purple-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-125 h-125 bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none" />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden py-12 sm:py-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-purple-200 text-xs font-bold text-purple-950 uppercase tracking-wider shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-purple-600" /> About Us • Sakthi Dental Clinic
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  Get to Know <span className="bg-linear-to-r from-purple-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent">Dr. Anupriya</span>
                </h1>
                <p className="text-lg sm:text-xl font-bold text-purple-800">
                  Your Trusted Partner in Dental Care & Smile Transformation
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  With more than two decades of dedicated practice, Dr. Anupriya has built a reputation for clinical excellence, gentle care, and a patient-first philosophy. After graduating in 2000, she spent six formative years at Mathura Clinic before establishing Sakthi Dental Clinic in Hosur in 2004.
                </p>
                <div className="font-medium text-slate-800 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-purple-100 shadow-sm flex items-start gap-3">
                  <Heart className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span>Whether you're looking for preventive care, cosmetic enhancements, or restorative solutions, Dr. Anupriya and her team are committed to delivering excellence at every step.</span>
                </div>
              </div>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-sm border border-purple-100/80">
                  <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Hosur, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-sm border border-purple-100/80">
                  <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Est. 2004 in Hosur</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-sm border border-purple-100/80">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>PHC Dental Consultant</span>
                </div>
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenAppointment}
                  className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 via-indigo-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment with Dr. Anupriya</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </motion.div>

            {/* Founder Profile Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[36px] overflow-hidden p-3.5 bg-white/90 backdrop-blur-md shadow-xl border border-purple-100/80 shadow-purple-900/10 group">
                <img
                  src={backgroundImage}
                  alt="Dr. Anupriya Founder & Chief Dental Surgeon"
                  className="w-full h-112.5 object-cover rounded-[28px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-black text-slate-900">Dr. Anupriya</p>
                      <p className="text-xs text-purple-700 font-bold">Founder & Chief Dental Surgeon</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-black">
                      20+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-linear-to-r from-purple-400 via-indigo-300 to-fuchsia-400 rounded-4xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/95 backdrop-blur-xl rounded-4xl p-8 sm:p-12 border border-purple-200 shadow-2xl shadow-purple-500/15"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((st, idx) => {
                const IconComp = st.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="text-center space-y-3 p-4 rounded-2xl transition-all bg-linear-to-b from-purple-50/50 to-white border border-purple-100/60 shadow-sm"
                  >
                    <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center border shadow-inner ${st.color}`}>
                      <IconComp className="w-7 h-7" />
                    </div>
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
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-4xl shadow-xl group min-h-105 border border-purple-100"
          >
            <img
              src={Missionimg}
              alt="Mission"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

            <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-between space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center border border-purple-200 shadow-md">
                <Target className="w-7 h-7 text-purple-700" />
              </div>
              <div className="space-y-3 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-lg">
                <h3 className="text-3xl font-black text-slate-900">Our Mission</h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                  To redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We create a welcoming environment where patients feel comfortable and confident taking charge of their health.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-4xl shadow-xl group min-h-105 border border-indigo-100"
          >
            <img
              src={Visionimg}
              alt="Vision"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

            <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-between space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center border border-indigo-200 shadow-md">
                <Eye className="w-7 h-7 text-indigo-700" />
              </div>
              <div className="space-y-3 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-lg">
                <h3 className="text-3xl font-black text-slate-900">Our Vision</h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                  To be a leading force in modern dentistry, known for setting new standards in patient care, technological innovation, and community engagement for healthier, confident smiles.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200">
            <Award className="w-4 h-4" /> Our Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            20+ Years Journey of <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineEvents.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 relative space-y-3 border border-purple-100 shadow-md hover:shadow-xl transition-all"
            >
              <span className="text-3xl font-black bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {item.year}
              </span>
              <h4 className="text-base font-bold text-slate-800">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Doctors & Specialties */}
      <div className="relative z-10">
        <DoctorsAndSpecialties onOpenAppointment={onOpenAppointment} />
      </div>

      {/* FAQ SECTION */}
      <section className="relative overflow-hidden py-20 bg-linear-to-br from-purple-50/60 via-white to-indigo-50/60 border-y border-purple-100 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 border border-purple-200 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-purple-600" /> Patient Guidance
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
              Frequently Asked <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="bg-white p-3 rounded-4xl border border-purple-200 shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=85&w=900"
                  alt="Dental care"
                  className="w-full h-100 object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-xl rounded-4xl border border-purple-200 shadow-xl overflow-hidden">
              <div className="px-6 py-4 bg-linear-to-r from-purple-600 via-indigo-600 to-violet-600 text-white font-bold">
                Dental FAQs & Support
              </div>
              <div className="p-4 sm:p-6 max-h-100 overflow-y-auto">
                <FAQAccordion />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="relative z-10">
        <CTA onOpenAppointment={onOpenAppointment} />
      </div>
    </div>
  );
}