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
    <section className="min-h-screen bg-[#EFF9FF] pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
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

          <h1 className="mt-4 text-4xl md:text-6xl font-black text-slate-900">
            About{" "}
            <span className="text-gradient">
              Sakthi Dental Clinic
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Providing compassionate, modern and patient-focused
            dental care for women, children and families.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
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
            className="
              overflow-hidden
              rounded-[32px]
              bg-white
              p-3
              shadow-2xl
            "
          >
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000"
              alt="Dental care"
              className="
                w-full
                h-[400px]
                md:h-[500px]
                object-cover
                rounded-[24px]
              "
            />
          </motion.div>

          {/* Text */}
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
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
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

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              <div className="glass-card p-5">
                <div className="w-11 h-11 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Patient First
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Comfortable and personalized dental care.
                </p>
              </div>

              <div className="glass-card p-5">
                <div className="w-11 h-11 rounded-xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Safe Care
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Modern standards and hygienic treatment.
                </p>
              </div>

              <div className="glass-card p-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Excellence
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Experienced dental professionals.
                </p>
              </div>

              <div className="glass-card p-5">
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Family Care
                </h3>

                <p className="mt-2 text-sm text-slate-500">
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