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
  Mail,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Privacy() {
  const [contactOpen, setContactOpen] = useState(false);

  const sections = [
    {
      id: "info-collection",
      title: "1. Information Collection",
      icon: FileText,
    },
    {
      id: "cookies",
      title: "2. Cookies & Analytics",
      icon: Cookie,
    },
    {
      id: "use-of-data",
      title: "3. How We Use Data",
      icon: Eye,
    },
    {
      id: "security",
      title: "4. Data Security Standards",
      icon: Lock,
    },
    {
      id: "sharing",
      title: "5. Information Sharing",
      icon: Server,
    },
    {
      id: "children-privacy",
      title: "6. Children Privacy Protection",
      icon: ShieldCheck,
    },
    {
      id: "updates",
      title: "7. Policy Updates",
      icon: Bell,
    },
    {
      id: "contact-privacy",
      title: "8. Privacy Officer Contact",
      icon: PhoneCall,
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-violet-50 via-white to-fuchsia-50 pt-24 pb-16">
      {/* =====================================================
          BACKGROUND GLOW EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute left-0 top-32 h-100 w-100 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-96 h-100 w-100 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 left-1/3 h-100 w-100 rounded-full bg-indigo-300/15 blur-3xl" />

      {/* =====================================================
          HERO HEADER
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-purple-100/70 bg-linear-to-br from-purple-100/80 via-white to-pink-100/70 py-14 sm:py-20">
        {/* Decorative Glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-purple-300/30 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-700 shadow-lg shadow-purple-200/30 backdrop-blur-md"
          >
            <Lock className="h-4 w-4 text-purple-600" />

            <span>Patient Privacy & Confidentiality</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl"
          >
            Privacy & Data Security Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-slate-600 sm:text-sm"
          >
            Your privacy matters to us. Learn how Sakthi Dental Clinic
            collects, protects, uses, and manages your personal and healthcare
            information.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-xs font-semibold text-purple-600"
          >
            Effective Date: January 1, 2026 • Last Updated: August 2026
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* =================================================
              TABLE OF CONTENTS
          ================================================= */}

          <aside className="hidden lg:sticky lg:top-28 lg:col-span-4 lg:block">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white/80 p-6 shadow-xl shadow-purple-200/20 backdrop-blur-xl"
            >
              {/* Glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-200/30 blur-2xl" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <FileText className="h-4 w-4" />
                  </div>

                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Table of Contents
                  </h3>
                </div>

                <nav className="space-y-1.5">
                  {sections.map((section, index) => {
                    const Icon = section.icon;

                    return (
                      <motion.button
                        key={section.id}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs font-semibold text-slate-600 transition-all duration-200 hover:bg-purple-50 hover:text-purple-700"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-purple-100 group-hover:text-purple-600">
                          <Icon className="h-3.5 w-3.5" />
                        </span>

                        <span className="truncate">
                          {section.title}
                        </span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </aside>

          {/* =================================================
              MOBILE TABLE OF CONTENTS
          ================================================= */}

          <div className="lg:hidden">
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-max gap-2">
                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className="flex items-center gap-2 rounded-full border border-purple-100 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition-all hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
                    >
                      <Icon className="h-3.5 w-3.5 text-purple-500" />

                      {section.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              MAIN ARTICLE
          ================================================= */}

          <main className="space-y-7 lg:col-span-8">
            {/* =================================================
                INTRO CARD
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white/85 p-6 shadow-xl shadow-purple-200/20 backdrop-blur-xl sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl" />

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-300/40">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    Patient Commitment to Confidentiality
                  </h2>
                </div>

                <p className="text-sm leading-7 text-slate-600">
                  Sakthi Dental Clinic ("we", "our", "hospital") respects your
                  privacy and is strictly committed to protecting the medical,
                  personal, and financial data of our patients and web
                  visitors.
                </p>
              </div>
            </motion.div>

            {/* =================================================
                SECTION 1
            ================================================= */}

            <PrivacySection
              id="info-collection"
              icon={FileText}
              number="01"
              title="Information Collection"
              color="purple"
            >
              <p>
                We collect personal information necessary for dental
                consultations, appointment scheduling, and electronic health
                records (EHR). This includes your full name, phone number,
                email address, dental history, medical allergies, and
                insurance details.
              </p>
            </PrivacySection>

            {/* =================================================
                SECTION 2
            ================================================= */}

            <PrivacySection
              id="cookies"
              icon={Cookie}
              number="02"
              title="Cookies & Web Analytics"
              color="blue"
            >
              <p>
                Our website utilizes essential browser cookies and anonymous
                telemetry to enhance navigation speed, remember preferred
                appointment preferences, and analyze web page performance. No
                medical records or personal identity data are stored inside
                public cookies.
              </p>
            </PrivacySection>

            {/* =================================================
                SECTION 3
            ================================================= */}

            <PrivacySection
              id="use-of-data"
              icon={Eye}
              number="03"
              title="How We Use Data"
              color="emerald"
            >
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  To confirm, reschedule, or send SMS/WhatsApp appointment
                  reminders.
                </li>

                <li>
                  To maintain precise clinical treatment logs and digital
                  X-ray diagnostics.
                </li>

                <li>
                  To process digital payments and health insurance claims
                  securely.
                </li>

                <li>
                  To send annual preventive dental cleaning reminders
                  (opt-out available anytime).
                </li>
              </ul>
            </PrivacySection>

            {/* =================================================
                SECTION 4
            ================================================= */}

            <PrivacySection
              id="security"
              icon={Lock}
              number="04"
              title="Data Security Standards"
              color="violet"
            >
              <p>
                We employ 256-bit SSL encryption across all digital
                communication channels. Patient electronic medical records
                are hosted inside encrypted, access-restricted servers behind
                firewall protection in full compliance with international
                medical data privacy standards.
              </p>
            </PrivacySection>

            {/* =================================================
                SECTION 5
            ================================================= */}

            <PrivacySection
              id="sharing"
              icon={Server}
              number="05"
              title="Information Sharing"
              color="indigo"
            >
              <p>
                We NEVER sell, trade, or rent your personal information to
                third-party advertisers. Information is only shared with
                certified diagnostic labs or medical specialists explicitly
                involved in your direct treatment plan.
              </p>
            </PrivacySection>

            {/* =================================================
                SECTION 6
            ================================================= */}

            <PrivacySection
              id="children-privacy"
              icon={ShieldCheck}
              number="06"
              title="Children Privacy Protection"
              color="pink"
            >
              <p>
                We take extra precautions for pediatric patients under the age
                of 18. All medical records and treatment decisions for
                children require explicit consent and presence of a parent or
                legal guardian.
              </p>
            </PrivacySection>

            {/* =================================================
                SECTION 7
            ================================================= */}

            <PrivacySection
              id="updates"
              icon={Bell}
              number="07"
              title="Policy Updates"
              color="amber"
            >
              <p>
                Sakthi Dental Clinic reserves the right to update this policy
                periodically to reflect evolving healthcare regulations.
                Revisions will be published directly on this page with an
                updated effective timestamp.
              </p>
            </PrivacySection>

            {/* =================================================
                SECTION 8
            ================================================= */}

            <motion.section
              id="contact-privacy"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-purple-400/30 bg-linear-to-br from-purple-900 via-indigo-900 to-violet-950 p-6 text-white shadow-2xl shadow-purple-500/30 sm:p-8"
            >
              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-400/30 blur-3xl"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-md">
                    <PhoneCall className="h-5 w-5" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                      Need Help?
                    </span>

                    <h3 className="text-lg font-bold sm:text-xl">
                      Privacy Officer Contact
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-purple-100">
                  If you have questions regarding your data privacy rights, or
                  wish to request a copy or deletion of your records, our
                  privacy team is available to assist you.
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 15px 40px rgba(196,181,253,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setContactOpen(true)}
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-purple-700 shadow-lg transition-all duration-300 hover:bg-purple-50"
                >
                  <PhoneCall className="h-4 w-4" />

                  Contact Privacy Officer
                </motion.button>
              </div>
            </motion.section>
          </main>
        </div>
      </div>

      {/* =====================================================
          PRIVACY CONTACT POPUP
      ====================================================== */}

      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-purple-950/40 p-4 backdrop-blur-md"
            onClick={() => setContactOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-4xl border border-purple-200 bg-white shadow-2xl shadow-purple-900/30"
            >
              {/* Popup Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-300/30 blur-3xl" />

              <div className="relative p-6 sm:p-8">
                {/* Close */}

                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-purple-100 hover:text-purple-700"
                  aria-label="Close privacy contact popup"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Icon */}

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-300/40">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-500" />

                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                    Privacy Support
                  </span>
                </div>

                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Privacy Officer
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Our privacy team can help with questions about your personal
                  information, medical records, or privacy rights.
                </p>

                {/* Contact Options */}

                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:privacy@sakthidental.com"
                    className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-purple-50/70 p-4 transition-all hover:border-purple-300 hover:bg-purple-100"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm">
                      <Mail className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Email
                      </p>

                      <p className="text-sm font-bold text-purple-700">
                        privacy@sakthidental.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 transition-all hover:border-indigo-300 hover:bg-indigo-100"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                      <PhoneCall className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Phone
                      </p>

                      <p className="text-sm font-bold text-indigo-700">
                        +91 98765 43210
                      </p>
                    </div>
                  </a>
                </div>

                {/* Confirmation */}

                <div className="mt-5 flex items-start gap-2 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

                  <span>
                    Your privacy request will be handled confidentially by our
                    support team.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   REUSABLE PRIVACY SECTION
========================================================= */

function PrivacySection({
  id,
  icon: Icon,
  number,
  title,
  color = "purple",
  children,
}) {
  const colorStyles = {
    purple: {
      icon: "bg-purple-100 text-purple-600",
      number: "bg-purple-100 text-purple-700",
      border: "hover:border-purple-200",
      glow: "bg-purple-200/20",
    },

    blue: {
      icon: "bg-blue-100 text-blue-600",
      number: "bg-blue-100 text-blue-700",
      border: "hover:border-blue-200",
      glow: "bg-blue-200/20",
    },

    emerald: {
      icon: "bg-emerald-100 text-emerald-600",
      number: "bg-emerald-100 text-emerald-700",
      border: "hover:border-emerald-200",
      glow: "bg-emerald-200/20",
    },

    violet: {
      icon: "bg-violet-100 text-violet-600",
      number: "bg-violet-100 text-violet-700",
      border: "hover:border-violet-200",
      glow: "bg-violet-200/20",
    },

    indigo: {
      icon: "bg-indigo-100 text-indigo-600",
      number: "bg-indigo-100 text-indigo-700",
      border: "hover:border-indigo-200",
      glow: "bg-indigo-200/20",
    },

    pink: {
      icon: "bg-pink-100 text-pink-600",
      number: "bg-pink-100 text-pink-700",
      border: "hover:border-pink-200",
      glow: "bg-pink-200/20",
    },

    amber: {
      icon: "bg-amber-100 text-amber-600",
      number: "bg-amber-100 text-amber-700",
      border: "hover:border-amber-200",
      glow: "bg-amber-200/20",
    },
  };

  const styles = colorStyles[color] || colorStyles.purple;

  return (
    <motion.section
      id={id}
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
        margin: "-80px",
      }}
      transition={{
        duration: 0.5,
      }}
      className={`group relative scroll-mt-28 overflow-hidden rounded-3xl border border-slate-100 bg-white/85 p-6 shadow-lg shadow-purple-100/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${styles.border}`}
    >
      {/* Soft Glow */}

      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${styles.glow}`}
      />

      <div className="relative">
        {/* Header */}

        <div className="flex items-start gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}
          >
            <Icon className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span
                className={`rounded-lg px-2 py-1 text-[10px] font-black ${styles.number}`}
              >
                {number}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              {title}
            </h3>
          </div>
        </div>

        {/* Content */}

        <div className="mt-5 text-sm leading-7 text-slate-600">
          {children}
        </div>
      </div>
    </motion.section>
  );
}