import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, Settings, Check, X, ShieldCheck } from "lucide-react";

export const COOKIE_CONSENT_KEY = "sakthi_cookie_consent_v1";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);
  
  const [preferences, setPreferences] = useState({
    essential: true, // Always true and locked
    doctorSelection: true,
    analytics: true,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, doctorSelection: true, analytics: true };
    saveConsent(allAccepted);
  };

  const handleAcceptEssential = () => {
    const essentialOnly = { essential: true, doctorSelection: false, analytics: false };
    saveConsent(essentialOnly);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (consentData) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    document.cookie = "sakthi_cookies_accepted=true; path=/; max-age=31536000; SameSite=Lax";
    setShowBanner(false);
    setShowPreferencesModal(false);
  };

  return (
    <>
      {/* 1. Cookie Banner Popup */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-white shadow-2xl"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#0D9488]/20 text-[#0D9488] rounded-xl mt-1">
                  <Cookie className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Your Privacy & Cookie Preferences</h4>
                  <p className="text-xs text-slate-300 mt-0.5 max-w-2xl leading-relaxed">
                    Our website uses cookies to enhance your user experience, remember doctor preferences, and track site activity safely.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
                <button
                  onClick={() => setShowPreferencesModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Settings className="w-3.5 h-3.5" />
                  Customize
                </button>
                <button
                  onClick={handleAcceptEssential}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                >
                  Essential Only
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 rounded-xl bg-linear-to-r from-[#0D9488] to-[#0284C7] hover:opacity-95 text-xs font-bold text-white transition-opacity cursor-pointer shadow-lg shadow-[#0D9488]/20"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Customization Modal */}
      {showPreferencesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-slate-800 relative"
          >
            <button
              onClick={() => setShowPreferencesModal(false)}
              className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#0D9488] mb-2 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Privacy Center
            </div>

            <h3 className="text-xl font-black text-slate-900 tracking-tight">Manage Cookie Settings</h3>
            <p className="text-xs text-slate-500 mt-1 mb-6 leading-relaxed">
              Choose which cookie categories you wish to allow. Essential cookies cannot be disabled.
            </p>

            <div className="space-y-4">
              {/* Essential */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Strictly Essential</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">Required for appointment booking validation and security tokens.</p>
                </div>
                <input type="checkbox" checked disabled className="mt-1 accent-[#0D9488] cursor-not-allowed" />
              </div>

              {/* Preferences */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Preference & Doctor Selection</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">Remembers your preferred doctors and interface settings.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.doctorSelection}
                  onChange={(e) => setPreferences({ ...preferences, doctorSelection: e.target.checked })}
                  className="mt-1 accent-[#0D9488] cursor-pointer w-4 h-4"
                />
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Anonymous Telemetry</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">Measures page speeds and treatment catalog performance.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 accent-[#0D9488] cursor-pointer w-4 h-4"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowPreferencesModal(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0D9488]/90 text-xs font-bold text-white transition-colors cursor-pointer shadow-md shadow-[#0D9488]/20 flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                Save Preferences
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}