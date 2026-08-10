import React from "react";
import { motion } from "motion/react";
import {
  Heart,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-linear-to-b from-white via-slate-50 to-white">

      {/* ================================
          BACKGROUND DECORATION
      ================================= */}

      <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================================
            HEADING
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0D9488]">
            About Us
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            About{" "}
            <span className="bg-linear-to-r from-[#0D9488] via-[#0284C7] to-[#059669] bg-clip-text text-transparent">
              Sakthi Dental Clinic
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl">
            Providing compassionate, modern and patient-focused
            dental care for women, children and families.
          </p>
        </motion.div>

        {/* ================================
            MAIN CONTENT
        ================================= */}

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================================
              IMAGE
          ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="overflow-hidden rounded-4xl bg-white p-3 shadow-2xl shadow-slate-900/10 border border-slate-100"
          >
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000"
              alt="Dental care at Sakthi Dental Clinic"
              className="w-full h-100 md:h-125 object-cover rounded-3xl"
            />
          </motion.div>

          {/* ================================
              TEXT CONTENT
          ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Your Smile, Our Commitment
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              At Sakthi Dental Clinic, we believe that quality
              dental care should be comfortable, accessible and
              personalized for every patient.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Our clinic combines modern dental technology with
              compassionate care to create a comfortable
              experience for women, children and families.
            </p>

            {/* ================================
                FEATURES
            ================================= */}

            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              {/* Patient First */}
              <div className="glass-card p-5 rounded-2xl border border-slate-200/70 hover:shadow-lg transition-all duration-300">

                <div className="w-11 h-11 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Patient First
                </h3>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Comfortable and personalized dental care.
                </p>

              </div>

              {/* Safe Care */}
              <div className="glass-card p-5 rounded-2xl border border-slate-200/70 hover:shadow-lg transition-all duration-300">

                <div className="w-11 h-11 rounded-xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Safe Care
                </h3>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Modern standards and hygienic treatment.
                </p>

              </div>

              {/* Excellence */}
              <div className="glass-card p-5 rounded-2xl border border-slate-200/70 hover:shadow-lg transition-all duration-300">

                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Excellence
                </h3>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Experienced dental professionals.
                </p>

              </div>

              {/* Family Care */}
              <div className="glass-card p-5 rounded-2xl border border-slate-200/70 hover:shadow-lg transition-all duration-300">

                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Family Care
                </h3>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Dental care for the whole family.
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}