import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  UserCheck,
  Award,
  HeartHandshake,
  Sparkles,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Safe & Gentle Care',
      description:
        'Advanced dental care with a strong focus on patient safety, comfort, and gentle treatment.',
      color: 'purple',
    },
    {
      icon: UserCheck,
      title: 'Experienced Dentists',
      description:
        'Our experienced dental professionals provide personalized treatment for every patient.',
      color: 'indigo',
    },
    {
      icon: Award,
      title: 'Modern Technology',
      description:
        'We use modern dental technology and advanced treatment techniques for better results.',
      color: 'teal',
    },
    {
      icon: HeartHandshake,
      title: 'Patient First',
      description:
        'Every treatment is planned around your comfort, needs, expectations, and long-term oral health.',
      color: 'rose',
    },
  ];

  const benefits = [
    'Experienced dental professionals',
    'Modern dental technology',
    'Comfortable and hygienic environment',
    'Personalized treatment plans',
    'Family-friendly dental care',
    'Emergency dental support',
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#FAF5FF] via-white to-purple-50/40 py-20 sm:py-24 lg:py-28">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -top-20 -left-24 h-125 w-125 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="pointer-events-none absolute top-1/3 -right-24 h-125 w-125 rounded-full bg-indigo-200/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-90 w-90 -translate-x-1/2 rounded-full bg-teal-100/20 blur-3xl" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mx-auto max-w-3xl text-center"
        >

          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-purple-600" />

            <span className="text-xs font-bold uppercase tracking-wider text-purple-800">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Dental Care You Can{' '}
            <span className="bg-linear-to-r from-purple-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
              Trust
            </span>
          </h2>

          {/* Description */}

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            At Sakthi Dental Clinic, we combine experienced professionals,
            modern technology, and compassionate care to create a comfortable
            dental experience for every member of your family.
          </p>
        </motion.div>

        {/* ===================================================
            FEATURE CARDS
        ==================================================== */}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            const iconStyles = {
              purple: 'bg-purple-100 text-purple-700',
              indigo: 'bg-indigo-100 text-indigo-700',
              teal: 'bg-teal-100 text-teal-700',
              rose: 'bg-rose-100 text-rose-600',
            };

            return (
              <motion.div
                key={feature.title}
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group rounded-4xl border border-purple-100/80 bg-white/90 p-6 shadow-lg shadow-purple-900/5 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10"
              >

                {/* Icon */}

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    iconStyles[feature.color]
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}

                <h3 className="text-lg font-black text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* ===================================================
            LOWER CONTENT
        ==================================================== */}

        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              IMAGE / VISUAL CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >

            {/* Main Image */}

            <div className="relative overflow-hidden rounded-4xl border border-purple-100 bg-white p-3 shadow-2xl shadow-purple-900/10">

              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000"
                alt="Modern dental care at Sakthi Dental Clinic"
                className="h-100 w-full rounded-3xl object-cover sm:h-110"
              />

              {/* Overlay */}

              <div className="pointer-events-none absolute inset-3 rounded-3xl bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />

            </div>

            {/* Floating Experience Card */}

            <motion.div
              animate={{
                y: [-7, 7, -7],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-5 left-5 rounded-2xl border border-purple-100 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:left-10"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-tr from-purple-600 to-indigo-600 text-white shadow-md">
                  <Award className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-black text-slate-900">
                    20+ Years
                  </p>

                  <p className="text-[11px] font-medium text-slate-500">
                    Dental Experience
                  </p>
                </div>

              </div>
            </motion.div>

          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Small Heading */}

            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" />

              <span className="text-sm font-bold uppercase tracking-wider text-purple-700">
                Designed Around You
              </span>
            </div>

            {/* Main Heading */}

            <h3 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              A Comfortable Dental Experience for the{' '}
              <span className="bg-linear-to-r from-purple-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                Whole Family
              </span>
            </h3>

            {/* Description */}

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              From your first consultation to complete treatment, our team
              focuses on making every visit simple, comfortable, and
              stress-free. We believe excellent dental care starts with
              listening to our patients.
            </p>

            {/* Benefits */}

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-purple-100/70 bg-white/80 px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600" />

                  <span className="text-sm font-semibold text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

            {/* Trust Banner */}

            <div className="mt-8 rounded-3xl border border-purple-100 bg-linear-to-r from-purple-50 via-indigo-50 to-teal-50 p-5">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-purple-700 shadow-sm">
                  <HeartHandshake className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-black text-slate-900">
                    Your Smile, Our Priority
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Compassionate care, modern treatments, and a welcoming
                    environment for patients of every age.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}