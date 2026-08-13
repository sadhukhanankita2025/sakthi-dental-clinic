import React, { useState } from "react";
import { motion } from "motion/react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactForm() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ==========================================
  // VALIDATE FORM
  // ==========================================
  const validate = () => {
    const errs = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    // Name validation
    if (!name) {
      errs.name = "Full name is required";
    } else if (name.length < 2) {
      errs.name = "Please enter a valid name";
    }

    // Email validation
    if (!email) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email";
    }

    // Phone validation
    const phoneDigits = phone.replace(/\D/g, "");

    if (!phone) {
      errs.phone = "Phone number is required";
    } else if (phoneDigits.length !== 10) {
      errs.phone = "Enter a valid 10-digit phone number";
    }

    // Message validation
    if (!message) {
      errs.message = "Message content is required";
    } else if (message.length < 10) {
      errs.message = "Message must contain at least 10 characters";
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================
  const handleChange = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Clear field error while typing
    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: "",
      }));
    }
  };

  // ==========================================
  // HANDLE SUBMIT
  // ==========================================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    const isValid = validate();

    if (!isValid) return;

    setLoading(true);

    // Simulated submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  // ==========================================
  // RESET FORM
  // ==========================================
  const handleReset = () => {
    setSubmitted(false);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <div className="glass-card p-6 sm:p-10 border border-white/80 shadow-xl rounded-3xl">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          {/* ==================================
              HEADER
          ================================== */}
          <div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">
              We would love to hear from you
            </h3>

            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Have a question about treatments, costs, or appointments?
              Send us a message and our patient desk will reply promptly.
            </p>
          </div>

          {/* ==================================
              NAME FIELD
          ================================== */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
            >
              Full Name *
            </label>

            <div className="relative">
              <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />

              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Please enter your name"
                value={formData.name}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
                className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  errors.name
                    ? "border-rose-400 focus:ring-rose-400/50"
                    : "border-slate-200 focus:ring-[#0D9488]/50"
                }`}
              />
            </div>

            {errors.name && (
              <p className="text-[11px] text-rose-500 font-semibold mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* ==================================
              EMAIL + PHONE
          ================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* EMAIL */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
              >
                Email Address *
              </label>

              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />

                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="abc@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    handleChange("email", e.target.value)
                  }
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                    errors.email
                      ? "border-rose-400 focus:ring-rose-400/50"
                      : "border-slate-200 focus:ring-[#0D9488]/50"
                  }`}
                />
              </div>

              {errors.email && (
                <p className="text-[11px] text-rose-500 font-semibold mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
              >
                Phone Number *
              </label>

              <div className="relative">
                <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />

                <input
                  id="contact-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value)
                  }
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                    errors.phone
                      ? "border-rose-400 focus:ring-rose-400/50"
                      : "border-slate-200 focus:ring-[#0D9488]/50"
                  }`}
                />
              </div>

              {errors.phone && (
                <p className="text-[11px] text-rose-500 font-semibold mt-1">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* ==================================
              MESSAGE FIELD
          ================================== */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
            >
              Your Message *
            </label>

            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />

              <textarea
                id="contact-message"
                rows={4}
                placeholder="Tell us about your dental query or request..."
                value={formData.message}
                onChange={(e) =>
                  handleChange("message", e.target.value)
                }
                className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none ${
                  errors.message
                    ? "border-rose-400 focus:ring-rose-400/50"
                    : "border-slate-200 focus:ring-[#0D9488]/50"
                }`}
              />
            </div>

            {errors.message && (
              <p className="text-[11px] text-rose-500 font-semibold mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* ==================================
              SUBMIT BUTTON
          ================================== */}
          <motion.button
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            disabled={loading}
            type="submit"
            className={`w-full py-3.5 px-6 rounded-2xl bg-linear-to-r from-[#0D9488] via-[#0284C7] to-[#059669] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0D9488]/25 flex items-center justify-center gap-2 transition-all ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "cursor-pointer hover:opacity-95"
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>
      ) : (
        /* ==================================
           SUCCESS MESSAGE
        ================================== */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 space-y-4"
        >
          {/* SUCCESS ICON */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"
          >
            <CheckCircle2 className="w-10 h-10" />
          </motion.div>

          {/* TITLE */}
          <h3 className="text-2xl font-black text-slate-800">
            Message Received!
          </h3>

          {/* MESSAGE */}
          <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
            Thank you,{" "}
            <span className="font-bold text-slate-900">
              {formData.name}
            </span>
            . Our desk officer will review your inquiry and get back to you
            shortly.
          </p>

          {/* RESET BUTTON */}
          <button
            type="button"
            onClick={handleReset}
            className="py-2.5 px-6 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </motion.div>
      )}
    </div>
  );
}