import React, { useState } from "react";
import { motion } from "motion/react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function ContactForm({ isLoggedIn = false, onOpenAuth = () => {} }) {
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
  const [serverError, setServerError] = useState("");

  // ==========================================
  // VALIDATE FORM
  // ==========================================
  const validate = () => {
    const errs = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name) {
      errs.name = "Full name is required";
    } else if (name.length < 2) {
      errs.name = "Please enter a valid name";
    }

    if (!email) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email";
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone) {
      errs.phone = "Phone number is required";
    } else if (phoneDigits.length !== 10) {
      errs.phone = "Enter a valid 10-digit phone number";
    }

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

    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: "",
      }));
    }
    if (serverError) {
      setServerError("");
    }
  };

  // ==========================================
  // HANDLE SUBMIT
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      onOpenAuth();
      return;
    }

    if (loading) return;

    const isValid = validate();
    if (!isValid) return;

    setLoading(true);
    setServerError("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to the server.");
      }

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Database connection error:", error);
      setLoading(false);
      setServerError("Could not connect to the backend server. Make sure your server is running.");
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(initialFormData);
    setErrors({});
    setServerError("");
  };

  return (
    <div className="glass-card p-6 sm:p-10 border border-white/80 shadow-xl rounded-3xl relative overflow-hidden bg-white/80 backdrop-blur-md">
      {/* OVERLAY IF NOT LOGGED IN */}
      {!isLoggedIn && (
        <div 
          onClick={onOpenAuth}
          className="absolute inset-0 z-25 bg-purple-950/20 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all hover:bg-purple-950/25"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg mb-3">
            <Lock className="h-5 w-5" />
          </div>
          <h4 className="text-base font-extrabold text-slate-900">Login Required to Send Message</h4>
          <p className="text-xs font-medium text-slate-700 mt-1 max-w-xs">
            Please sign in or create an account to securely communicate with our patient desk.
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenAuth();
            }}
            className="mt-4 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 px-6 py-2.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-md hover:shadow-lg cursor-pointer transition-transform hover:scale-105"
          >
            Login / Signup Now
          </button>
        </div>
      )}

      {/* FORM WRAPPER */}
      <div className={!isLoggedIn ? "opacity-30 pointer-events-none select-none" : ""}>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                We would love to hear from you
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Have a question about treatments, costs, or appointments?
                Send us a message and our patient desk will reply promptly.
              </p>
            </div>

            {serverError && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-rose-600">
                {serverError}
              </div>
            )}

            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Please enter your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                    errors.name ? "border-rose-400 focus:ring-rose-400/50" : "border-slate-200 focus:ring-[#0D9488]/50"
                  }`}
                />
              </div>
              {errors.name && <p className="text-[11px] text-rose-500 font-semibold mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="abc@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      errors.email ? "border-rose-400 focus:ring-rose-400/50" : "border-slate-200 focus:ring-[#0D9488]/50"
                    }`}
                  />
                </div>
                {errors.email && <p className="text-[11px] text-rose-500 font-semibold mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/[^0-9+\s-]/g, "");
                      handleChange("phone", numericValue);
                    }}
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      errors.phone ? "border-rose-400 focus:ring-rose-400/50" : "border-slate-200 focus:ring-[#0D9488]/50"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-rose-500 font-semibold mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your dental query or request..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none ${
                    errors.message ? "border-rose-400 focus:ring-rose-400/50" : "border-slate-200 focus:ring-[#0D9488]/50"
                  }`}
                />
              </div>
              {errors.message && <p className="text-[11px] text-rose-500 font-semibold mt-1">{errors.message}</p>}
            </div>

            <motion.button
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              disabled={loading}
              type="submit"
              className={`w-full py-3.5 px-6 rounded-2xl bg-linear-to-r from-[#0D9488] via-[#0284C7] to-[#059669] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0D9488]/25 flex items-center justify-center gap-2 transition-all ${
                loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer hover:opacity-95"
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-800">Message Received!</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Your message has been saved to the database.
            </p>
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
    </div>
  );
}