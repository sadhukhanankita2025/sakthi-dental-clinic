import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Mail, User, ArrowRight, Sparkles } from "lucide-react";

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", emailOrPhone: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignUp ? "http://localhost:5000/api/signup" : "http://localhost:5000/api/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Verify if server actually responded with JSON (prevents HTML crash)
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server error or backend is offline. Please check port 5000.");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      onLoginSuccess(data.user);
      onClose();
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" />

        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-md overflow-hidden rounded-4xl border border-white/90 bg-white/90 p-8 shadow-[0_25px_60px_rgba(107,33,168,0.2)] backdrop-blur-2xl">
          <button onClick={onClose} className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-slate-500 hover:bg-purple-100 hover:text-slate-800">
            <X className="h-4 w-4" />
          </button>

          <div className="mb-6 text-center relative z-10">
            <h3 className="text-2xl font-extrabold text-slate-900">{isSignUp ? "Create Account" : "Welcome Back"}</h3>
            <p className="mt-1 text-xs font-medium text-slate-500">{isSignUp ? "Join Sakthi Dental Clinic" : "Sign in to access your patient portal"}</p>
          </div>

          {errorMsg && <div className="mb-4 rounded-xl bg-red-50 p-3 text-center text-xs font-bold text-red-600">{errorMsg}</div>}

          <div className="relative mb-6 flex rounded-full bg-purple-100/60 p-1 border border-purple-200/50">
            <button type="button" onClick={() => setIsSignUp(false)} className="relative flex-1 rounded-full py-2.5 text-xs font-bold z-10">
              <span className={!isSignUp ? "text-purple-700" : "text-slate-500"}>Login</span>
            </button>
            <button type="button" onClick={() => setIsSignUp(true)} className="relative flex-1 rounded-full py-2.5 text-xs font-bold z-10">
              <span className={isSignUp ? "text-purple-700" : "text-slate-500"}>Sign Up</span>
            </button>
            <motion.div animate={{ x: isSignUp ? "100%" : "0%" }} transition={{ type: "spring", stiffness: 400, damping: 30 }} className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white shadow-sm" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            {isSignUp && (
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">Full Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-3.5 h-4 w-4 text-purple-400" />
                  <input type="text" name="name" required={isSignUp} value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full rounded-2xl border border-purple-100 bg-white/70 py-3 pl-10 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-purple-500 focus:bg-white" />
                </div>
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">Email or Phone Number</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 h-4 w-4 text-purple-400" />
                <input type="text" name="emailOrPhone" required value={formData.emailOrPhone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full rounded-2xl border border-purple-100 bg-white/70 py-3 pl-10 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-purple-500 focus:bg-white" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3.5 h-4 w-4 text-purple-400" />
                <input type="password" name="password" required value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full rounded-2xl border border-purple-100 bg-white/70 py-3 pl-10 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-purple-500 focus:bg-white" />
              </div>
            </div>

            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 py-3.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-md">
              <span>{isSignUp ? "Create Account" : "Sign In"}</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}