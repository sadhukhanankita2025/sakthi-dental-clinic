import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Mail, User, Phone, ArrowRight } from "lucide-react";

export default function SignupModal({ isOpen, onClose, onSignupSuccess, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: formData.name,
      email: formData.emailOrPhone,
    };
    
    if (onSignupSuccess) {
      onSignupSuccess(newUser);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* BACKDROP BLUR OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/30 backdrop-blur-md"
        />

        {/* MODAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-8 shadow-[0_20px_50px_rgba(107,33,168,0.15)] backdrop-blur-xl"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-purple-50/80 text-slate-500 transition-colors hover:bg-purple-100 hover:text-slate-800"
          >
            <X className="h-4 w-4" />
          </button>

          {/* HEADER */}
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Create Account
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Sign up to book & manage your appointments easily
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">
                Full Name
              </label>
              <div className="relative flex items-center">
                <User className="absolute left-3.5 h-4 w-4 text-purple-400" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Mr. / Ms. John Doe"
                  className="w-full rounded-2xl border border-purple-100 bg-white/70 py-3 pl-10 pr-4 text-xs font-semibold text-slate-800 outline-none transition-all focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">
                Email or Phone Number
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 h-4 w-4 text-purple-400" />
                <input
                  type="text"
                  name="emailOrPhone"
                  required
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-2xl border border-purple-100 bg-white/70 py-3 pl-10 pr-4 text-xs font-semibold text-slate-800 outline-none transition-all focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3.5 h-4 w-4 text-purple-400" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-purple-100 bg-white/70 py-3 pl-10 pr-4 text-xs font-semibold text-slate-800 outline-none transition-all focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 py-3.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_10px_20px_rgba(107,33,168,0.25)]"
            >
              <span>Create Account</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </form>

          {/* SWITCH TO LOGIN LINK */}
          <div className="mt-5 text-center">
            <p className="text-xs text-slate-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="font-bold text-purple-700 hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}