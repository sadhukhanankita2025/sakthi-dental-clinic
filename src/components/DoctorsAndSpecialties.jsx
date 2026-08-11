import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  ShieldCheck,
  Stethoscope,
  Zap,
  Sparkles,
  Heart,
  CheckCircle2,
  Users,
  Building2,
  FileBadge,
  Calendar,
  ChevronRight,
} from 'lucide-react';

import DoctorCard from './DoctorCard';
import {
  DOCTORS_DATA,
  CLINIC_SPECIALTIES,
} from '../data/doctorsData';

export default function DoctorsAndSpecialties({
  onOpenAppointment,
}) {
  const [activeTab, setActiveTab] = useState('specialties');

  const iconMap = {
    Stethoscope,
    Zap,
    Sparkles,
    Heart,
    ShieldCheck,
    Award,
  };

  return (
    <section
      id="trust-specialties"
      className="
        relative
        overflow-hidden
        bg-linear-to-b
        from-[#FAF5FF]
        via-purple-50
        to-violet-50/60
        py-24
      "
    >
      {/* =====================================================
          BACKGROUND FLOATING GLOWS
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-0
          h-105
          w-105
          rounded-full
          bg-purple-300/20
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[10%]
          h-112.5
          w-112.5
          rounded-full
          bg-violet-300/20
          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =====================================================
            HEADER
        ====================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
          "
        >

          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-200
              bg-white/90
              px-4
              py-2
              text-xs
              font-extrabold
              uppercase
              tracking-wider
              text-purple-700
              shadow-sm
              backdrop-blur-md
            "
          >
            <ShieldCheck className="h-4 w-4 text-purple-600" />

            Institutional Trust & Medical Credentials
          </motion.div>

          {/* Heading */}

          <motion.h2
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
              delay: 0.1,
              duration: 0.6,
            }}
            className="
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-5xl
            "
          >
            Specialized Care Led By{' '}

            <span
              className="
                bg-linear-to-r
                from-purple-700
                via-violet-600
                to-fuchsia-600
                bg-clip-text
                text-transparent
              "
            >
              Verified Medical Experts
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
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
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-relaxed
              text-slate-600
              sm:text-base
            "
          >
            Our hospital combines advanced dental technology,
            experienced doctors, modern equipment, and patient-focused
            care to deliver comfortable dental treatments.
          </motion.p>

          {/* =====================================================
              TAB BUTTONS
          ====================================================== */}

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
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              pt-7
            "
          >

            {/* Specialties Button */}

            <motion.button
              type="button"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => setActiveTab('specialties')}
              className={`
                flex
                cursor-pointer
                items-center
                gap-2
                rounded-2xl
                px-6
                py-3
                text-xs
                font-extrabold
                uppercase
                tracking-wider
                transition-all
                duration-300
                ${
                  activeTab === 'specialties'
                    ? `
                      bg-linear-to-r
                      from-purple-600
                      via-violet-600
                      to-fuchsia-600
                      text-white
                      shadow-lg
                      shadow-purple-500/25
                    `
                    : `
                      border
                      border-purple-200
                      bg-white
                      text-purple-800
                      hover:border-purple-300
                      hover:bg-purple-50
                    `
                }
              `}
            >
              <Stethoscope className="h-4 w-4" />

              <span>
                Clinic Specialties (6)
              </span>
            </motion.button>

            {/* Doctors Button */}

            <motion.button
              type="button"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => setActiveTab('doctors')}
              className={`
                flex
                cursor-pointer
                items-center
                gap-2
                rounded-2xl
                px-6
                py-3
                text-xs
                font-extrabold
                uppercase
                tracking-wider
                transition-all
                duration-300
                ${
                  activeTab === 'doctors'
                    ? `
                      bg-linear-to-r
                      from-purple-600
                      via-violet-600
                      to-fuchsia-600
                      text-white
                      shadow-lg
                      shadow-purple-500/25
                    `
                    : `
                      border
                      border-purple-200
                      bg-white
                      text-purple-800
                      hover:border-purple-300
                      hover:bg-purple-50
                    `
                }
              `}
            >
              <Users className="h-4 w-4" />

              <span>
                Doctor Credentials & Team (4)
              </span>
            </motion.button>

          </motion.div>
        </motion.div>

        {/* =====================================================
            TRUST BADGES
        ====================================================== */}

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
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-14
            rounded-[28px]
            border
            border-purple-200
            bg-white/90
            p-5
            shadow-xl
            shadow-purple-900/5
            backdrop-blur-md
            sm:p-8
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              lg:grid-cols-5
            "
          >

            <TrustBadge
              icon={FileBadge}
              title="NABH Accredited"
              subtitle="Quality Dental Standards"
            />

            <TrustBadge
              icon={Building2}
              title="ISO 9001:2015"
              subtitle="Certified Healthcare Unit"
            />

            <TrustBadge
              icon={ShieldCheck}
              title="Class-B Autoclave"
              subtitle="German Sterilization"
            />

            <TrustBadge
              icon={Award}
              title="IDA Life Member"
              subtitle="Indian Dental Association"
            />

            <TrustBadge
              icon={Sparkles}
              title="ICOI Fellow"
              subtitle="International Implantology"
              extraClass="col-span-2 sm:col-span-1"
            />

          </div>
        </motion.div>

        {/* =====================================================
            TAB CONTENT
        ====================================================== */}

        <AnimatePresence mode="wait">

          {/* ===================================================
              SPECIALTIES
          ==================================================== */}

          {activeTab === 'specialties' && (
            <motion.div
              key="specialties"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {CLINIC_SPECIALTIES.map((spec, index) => {
                const IconComp =
                  iconMap[spec.iconName] || Stethoscope;

                return (
                  <motion.div
                    key={spec.id}
                    initial={{
                      opacity: 0,
                      y: 40,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.02,
                    }}
                    className="group relative"
                  >

                    {/* Card Glow */}

                    <div
                      className="
                        absolute
                        -inset-1
                        rounded-[30px]
                        bg-linear-to-r
                        from-purple-400
                        via-violet-500
                        to-fuchsia-400
                        opacity-0
                        blur-xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-30
                      "
                    />

                    {/* Main Card */}

                    <div
                      className="
                        relative
                        flex
                        h-full
                        flex-col
                        justify-between
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-purple-100
                        bg-white
                        p-6
                        shadow-md
                        transition-all
                        duration-500
                        group-hover:border-purple-300
                        group-hover:shadow-2xl
                        group-hover:shadow-purple-500/20
                        sm:p-8
                      "
                    >

                      {/* Floating Orb */}

                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="
                          pointer-events-none
                          absolute
                          -right-10
                          -top-10
                          h-32
                          w-32
                          rounded-full
                          bg-purple-100/70
                          blur-2xl
                        "
                      />

                      {/* Floating Dot */}

                      <motion.div
                        animate={{
                          y: [0, 10, 0],
                          x: [0, -5, 0],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="
                          pointer-events-none
                          absolute
                          bottom-12
                          right-6
                          h-3
                          w-3
                          rounded-full
                          bg-purple-400/40
                          blur-sm
                        "
                      />

                      <div className="relative z-10">

                        {/* Icon */}

                        <div className="mb-5 flex items-center justify-between">

                          <motion.div
                            whileHover={{
                              scale: 1.12,
                              rotate: 8,
                            }}
                            className="
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-2xl
                              bg-linear-to-br
                              from-purple-600
                              via-violet-600
                              to-fuchsia-600
                              text-white
                              shadow-lg
                              shadow-purple-500/25
                            "
                          >
                            <IconComp className="h-6 w-6" />
                          </motion.div>

                          <span
                            className="
                              rounded-full
                              border
                              border-purple-200
                              bg-purple-50
                              px-3
                              py-1
                              text-[10px]
                              font-extrabold
                              uppercase
                              tracking-wider
                              text-purple-800
                            "
                          >
                            {spec.keyStats?.split('•')[0] ||
                              'Specialized Care'}
                          </span>

                        </div>

                        {/* Title */}

                        <h3
                          className="
                            text-lg
                            font-black
                            leading-snug
                            text-slate-900
                            transition-colors
                            duration-300
                            group-hover:text-purple-700
                          "
                        >
                          {spec.title}
                        </h3>

                        <p className="mt-1 text-xs font-bold text-purple-700">
                          {spec.tagline}
                        </p>

                        {/* Description */}

                        <p
                          className="
                            mt-4
                            text-xs
                            leading-relaxed
                            text-slate-600
                          "
                        >
                          {spec.description}
                        </p>

                        {/* Equipment */}

                        <motion.div
                          whileHover={{
                            scale: 1.02,
                          }}
                          className="
                            mt-5
                            rounded-2xl
                            border
                            border-purple-100
                            bg-linear-to-r
                            from-purple-50
                            to-violet-50
                            p-4
                          "
                        >
                          <span
                            className="
                              mb-1
                              block
                              text-[10px]
                              font-extrabold
                              uppercase
                              tracking-wider
                              text-purple-500
                            "
                          >
                            Advanced Equipment Used
                          </span>

                          <div
                            className="
                              flex
                              items-start
                              gap-2
                              text-xs
                              font-bold
                              text-purple-950
                            "
                          >
                            <Sparkles
                              className="
                                mt-0.5
                                h-4
                                w-4
                                shrink-0
                                text-purple-600
                              "
                            />

                            <span>
                              {spec.techUsed}
                            </span>
                          </div>
                        </motion.div>

                        {/* Highlights */}

                        <div className="mt-5 space-y-2">

                          {spec.highlights?.map(
                            (highlight, highlightIndex) => (
                              <motion.div
                                key={highlightIndex}
                                initial={{
                                  opacity: 0,
                                  x: -10,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  delay:
                                    index * 0.08 +
                                    highlightIndex * 0.06 +
                                    0.2,
                                }}
                                className="
                                  flex
                                  items-center
                                  gap-2
                                  text-xs
                                  font-semibold
                                  text-slate-700
                                "
                              >
                                <CheckCircle2
                                  className="
                                    h-4
                                    w-4
                                    shrink-0
                                    text-purple-600
                                  "
                                />

                                <span>
                                  {highlight}
                                </span>
                              </motion.div>
                            )
                          )}

                        </div>

                      </div>

                      {/* Appointment */}

                      <div
                        className="
                          relative
                          z-10
                          mt-6
                          border-t
                          border-purple-100
                          pt-5
                        "
                      >
                        <motion.button
                          type="button"
                          whileHover={{
                            scale: 1.03,
                            y: -2,
                          }}
                          whileTap={{
                            scale: 0.97,
                          }}
                          onClick={() =>
                            onOpenAppointment?.(spec.title)
                          }
                          className="
                            flex
                            w-full
                            cursor-pointer
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-linear-to-r
                            from-purple-700
                            via-violet-700
                            to-fuchsia-700
                            px-4
                            py-3
                            text-xs
                            font-bold
                            uppercase
                            tracking-wider
                            text-white
                            shadow-lg
                            shadow-purple-500/20
                            transition-all
                            duration-300
                            hover:shadow-xl
                            hover:shadow-purple-500/30
                          "
                        >
                          <Calendar className="h-4 w-4" />

                          <span>
                            Inquire About{' '}
                            {spec.title.split(' ')[0]}
                          </span>

                          <ChevronRight className="h-4 w-4" />
                        </motion.button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* ===================================================
              DOCTORS
          ==================================================== */}

          {activeTab === 'doctors' && (
            <motion.div
              key="doctors"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {DOCTORS_DATA.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="group"
                >
                  <div
                    className="
                      rounded-[28px]
                      transition-all
                      duration-500
                      group-hover:shadow-2xl
                      group-hover:shadow-purple-500/20
                    "
                  >
                    <DoctorCard
                      doctor={doctor}
                      onOpenAppointment={onOpenAppointment}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}


/* ============================================================
   TRUST BADGE
============================================================ */

function TrustBadge({
  icon: Icon,
  title,
  subtitle,
  extraClass = '',
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group
        rounded-2xl
        p-4
        text-center
        transition-all
        duration-300
        hover:bg-purple-50
        ${extraClass}
      `}
    >
      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Icon
          className="
            mx-auto
            mb-2
            h-7
            w-7
            text-purple-600
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </motion.div>

      <p className="text-xs font-black text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-[10px] font-medium text-slate-500">
        {subtitle}
      </p>
    </motion.div>
  );
}