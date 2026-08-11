import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function TrustBanner() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Safe & Trusted',
      description: 'Patient-first dental care',
    },
    {
      icon: Award,
      title: '20+ Years',
      description: 'Experienced professionals',
    },
    {
      icon: Users,
      title: '15,000+',
      description: 'Happy patients',
    },
    {
      icon: HeartHandshake,
      title: 'Family Care',
      description: 'Comfort for every age',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-purple-700 via-indigo-600 to-teal-600 py-10 sm:py-12">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            TOP TRUST MESSAGE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            duration: 0.6,
          }}
          className="mb-8 flex flex-col items-center justify-center text-center"
        >

          {/* Badge */}

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-purple-100" />

            <span className="text-[10px] font-extrabold uppercase tracking-widest text-white sm:text-xs">
              Trusted Dental Care
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Your Smile Is in{' '}
            <span className="text-teal-200">
              Safe Hands
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-purple-100 sm:text-base">
            Advanced technology, experienced professionals, and compassionate
            care come together to give you a confident and healthy smile.
          </p>

        </motion.div>

        {/* ===================================================
            TRUST ITEMS
        ==================================================== */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-md transition-all duration-300 hover:bg-white/15 sm:p-5"
              >

                {/* Icon */}

                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}

                <h3 className="text-sm font-black text-white sm:text-base">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-1 text-[10px] font-medium text-purple-100 sm:text-xs">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* ===================================================
            BOTTOM TRUST STRIP
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/15 pt-6"
        >

          <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
            <CheckCircle2 className="h-4 w-4 text-teal-200" />
            <span>Modern Technology</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
            <CheckCircle2 className="h-4 w-4 text-teal-200" />
            <span>Experienced Doctors</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
            <CheckCircle2 className="h-4 w-4 text-teal-200" />
            <span>Comfortable Environment</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
            <CheckCircle2 className="h-4 w-4 text-teal-200" />
            <span>Patient-Centered Care</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}