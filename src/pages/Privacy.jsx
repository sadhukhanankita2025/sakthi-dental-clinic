import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Lock,
  Eye,
  Cookie,
  Server,
  FileText,
  Bell,
  PhoneCall,
  X,
  Sparkles,
} from "lucide-react";

export default function Privacy() {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      id: "info-collection",
      title: "1. Information Collection",
      icon: FileText,
      color: "purple",
      content:
        "We collect personal information necessary for dental consultations, appointment scheduling, and electronic health records (EHR). This includes your full name, phone number, email address, dental history, medical allergies, and insurance details.",
    },
    {
      id: "cookies",
      title: "2. Cookies & Analytics",
      icon: Cookie,
      color: "indigo",
      content:
        "Our website utilizes essential browser cookies and anonymous telemetry to enhance navigation speed, remember preferred appointment preferences, and analyze web page performance. No medical records or personal identity data are stored inside public cookies.",
    },
    {
      id: "use-of-data",
      title: "3. How We Use Data",
      icon: Eye,
      color: "violet",
      content:
        "We use your information to confirm or reschedule appointments, send appointment reminders, maintain clinical treatment logs, support digital X-ray diagnostics, process payments and insurance claims, and send preventive dental reminders.",
    },
    {
      id: "security",
      title: "4. Data Security Standards",
      icon: Lock,
      color: "blue",
      content:
        "We employ 256-bit SSL encryption across digital communication channels. Patient electronic medical records are hosted inside encrypted, access-restricted servers behind firewall protection.",
    },
    {
      id: "sharing",
      title: "5. Information Sharing",
      icon: Server,
      color: "sky",
      content:
        "We never sell, trade, or rent your personal information to third-party advertisers. Information is only shared with certified diagnostic labs or medical specialists explicitly involved in your direct treatment plan.",
    },
    {
      id: "children-privacy",
      title: "6. Children Privacy Protection",
      icon: ShieldCheck,
      color: "pink",
      content:
        "We take extra precautions for pediatric patients under the age of 18. Medical records and treatment decisions for children require explicit consent and presence of a parent or legal guardian.",
    },
    {
      id: "updates",
      title: "7. Policy Updates",
      icon: Bell,
      color: "amber",
      content:
        "Sakthi Dental Clinic may update this policy periodically to reflect evolving healthcare regulations. Revisions will be published directly on this page with an updated effective timestamp.",
    },
    {
      id: "contact-privacy",
      title: "8. Privacy Officer Contact",
      icon: PhoneCall,
      color: "purple",
      content:
        "For questions regarding your privacy rights or to request a copy or deletion of your records, contact our privacy desk at privacy@sakthidental.com or +91 98765 43210.",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          MAIN PAGE
      ====================================================== */}

      <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-[#faf8ff] via-white to-[#f5f3ff] overflow-hidden">
        {/* =================================================
            GLOBAL BACKGROUND GLOW
        ================================================== */}

        <div className="fixed top-20 left-0 w-72 h-72 bg-purple-300/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="fixed bottom-10 right-0 w-96 h-96 bg-indigo-300/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="fixed top-1/2 left-1/2 w-64 h-64 bg-pink-200/10 blur-[100px] rounded-full pointer-events-none" />

        {/* =================================================
            HERO
        ================================================== */}

        <section className="relative overflow-hidden border-b border-purple-100 bg-gradient-to-br from-[#f5f0ff] via-white to-[#eef9ff] py-16 sm:py-20">
          {/* Glow blobs */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-300/30 blur-[90px]"
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 -right-20 w-[450px] h-[450px] rounded-full bg-indigo-300/30 blur-[100px]"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-purple-100 shadow-lg shadow-purple-200/30 text-xs font-bold text-purple-700 uppercase tracking-wider"
            >
              <Lock className="w-4 h-4 text-purple-500" />

              Patient Privacy & Confidentiality
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Privacy &{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Data Security
              </span>{" "}
              Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-7"
            >
              Your privacy matters to us. Learn how Sakthi Dental Clinic
              collects, protects, uses, and manages your personal and
              healthcare information.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-white/80 border border-purple-100 text-xs font-semibold text-slate-500 shadow-md shadow-purple-100/30"
            >
              Effective Date: January 1, 2026
              <span className="mx-2 text-purple-300">•</span>
              Last Updated: August 2026
            </motion.div>
          </div>
        </section>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
              <motion.div
                whileHover={{ y: -4 }}
                className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-purple-100 shadow-xl shadow-purple-200/30 p-6"
              >
                {/* Glow */}

                <div className="absolute -inset-1 bg-purple-300/10 blur-2xl rounded-3xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 flex items-center justify-center shadow-sm">
                      <FileText className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">
                        Privacy Policy
                      </h3>

                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                        Table of Contents
                      </p>
                    </div>
                  </div>

                  <nav className="space-y-2">
                    {sections.map((section) => {
                      const Icon = section.icon;

                      return (
                        <motion.button
                          key={section.id}
                          whileHover={{
                            x: 5,
                            scale: 1.01,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          onClick={() => scrollToSection(section.id)}
                          className="group relative w-full flex items-center gap-3 text-left px-3 py-3 rounded-xl text-xs font-semibold text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200"
                        >
                          <span className="w-8 h-8 shrink-0 rounded-lg bg-slate-50 group-hover:bg-purple-100 flex items-center justify-center transition-colors">
                            <Icon className="w-4 h-4 group-hover:text-purple-600" />
                          </span>

                          <span>{section.title}</span>
                        </motion.button>
                      );
                    })}
                  </nav>

                  <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-purple-500 shrink-0" />

                      <p className="text-[11px] leading-5 text-slate-600">
                        Your personal and healthcare information is handled
                        with care and confidentiality.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </aside>

            {/* =================================================
                ARTICLE
            ================================================== */}

            <main className="lg:col-span-8 space-y-6">
              {/* INTRO */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-3xl bg-white border border-purple-100 shadow-lg shadow-purple-100/30 p-6 sm:p-8"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-purple-200/30 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 text-purple-600 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>

                    <h2 className="text-xl font-bold text-slate-900">
                      Patient Commitment to Confidentiality
                    </h2>
                  </div>

                  <p className="text-sm text-slate-600 leading-7">
                    Sakthi Dental Clinic ("we", "our", "hospital") respects
                    your privacy and is strictly committed to protecting the
                    medical, personal, and financial data of our patients and
                    web visitors.
                  </p>
                </div>
              </motion.div>

              {/* =================================================
                  PRIVACY CARDS
              ================================================== */}

              {sections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{
                      opacity: 0,
                      y: 35,
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
                      delay: index * 0.03,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    onClick={() => setSelectedSection(section)}
                    className="group relative overflow-hidden scroll-mt-28 cursor-pointer rounded-3xl bg-white border border-purple-100 shadow-md shadow-purple-100/20 hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-300 p-6 sm:p-8"
                  >
                    {/* Glow */}

                    <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-purple-200/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-purple-100 text-purple-600 group-hover:bg-purple-200 group-hover:shadow-lg group-hover:shadow-purple-200 transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>

                          <h3 className="text-lg font-bold text-slate-900">
                            {section.title}
                          </h3>
                        </div>

                        <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Sparkles className="w-4 h-4" />
                          View
                        </div>
                      </div>

                      {/* Preview */}

                      <p className="mt-4 text-sm text-slate-600 leading-7 line-clamp-2">
                        {section.content}
                      </p>
                    </div>
                  </motion.section>
                );
              })}

              {/* =================================================
                  CONTACT CARD
              ================================================== */}

              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.01,
                }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 via-indigo-600 to-violet-600 p-7 sm:p-9 text-white shadow-2xl shadow-purple-300/40"
              >
                {/* Animated glow */}

                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"
                />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/20">
                      <PhoneCall className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold">
                      Contact Our Privacy Desk
                    </h3>
                  </div>

                  <p className="text-sm text-purple-50 leading-7">
                    Have questions about your privacy rights or personal
                    information? Contact us at{" "}
                    <a
                      href="mailto:privacy@sakthidental.com"
                      className="font-bold underline underline-offset-4 hover:text-purple-100"
                    >
                      privacy@sakthidental.com
                    </a>{" "}
                    or call{" "}
                    <a
                      href="tel:+919876543210"
                      className="font-bold underline underline-offset-4"
                    >
                      +91 98765 43210
                    </a>
                    .
                  </p>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </div>

      {/* =====================================================
          POPUP MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedSection && (
          <>
            {/* Background */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSection(null)}
              className="fixed inset-0 z-[100] bg-purple-950/30 backdrop-blur-md"
            />

            {/* Modal */}

            <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.75,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="relative w-full max-w-xl"
              >
                {/* Outer glow */}

                <div className="absolute -inset-4 rounded-[35px] bg-purple-500/25 blur-3xl animate-pulse pointer-events-none" />

                {/* Modal Card */}

                <div className="relative overflow-hidden rounded-[30px] bg-white border border-purple-100 shadow-2xl shadow-purple-500/30">
                  {/* Top gradient */}

                  <div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500" />

                  <div className="p-6 sm:p-8">
                    {/* Close */}

                    <button
                      type="button"
                      onClick={() => setSelectedSection(null)}
                      className="absolute top-5 right-5 w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center hover:bg-purple-100 hover:rotate-90 transition-all duration-300"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Icon */}

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.15,
                        type: "spring",
                        stiffness: 250,
                      }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 flex items-center justify-center shadow-lg shadow-purple-100 mb-5"
                    >
                      <selectedSection.icon className="w-7 h-7" />
                    </motion.div>

                    {/* Title */}

                    <motion.h2
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className="pr-10 text-2xl sm:text-3xl font-black text-slate-900"
                    >
                      {selectedSection.title}
                    </motion.h2>

                    {/* Content */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.25,
                      }}
                      className="mt-5 text-sm sm:text-base text-slate-600 leading-7"
                    >
                      {selectedSection.content}
                    </motion.p>

                    {/* Bottom */}

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.35,
                      }}
                      className="mt-7 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100"
                    >
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />

                        <p className="text-xs font-semibold text-slate-600">
                          Your privacy and confidentiality are important to
                          Sakthi Dental Clinic.
                        </p>
                      </div>
                    </motion.div>

                    {/* Close Button */}

                    <button
                      type="button"
                      onClick={() => setSelectedSection(null)}
                      className="mt-6 w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white text-sm font-bold shadow-lg shadow-purple-300/30 hover:shadow-xl hover:shadow-purple-400/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300"
                    >
                      Close Privacy Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}