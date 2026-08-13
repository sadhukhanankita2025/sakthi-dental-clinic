import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Navigation,
  ExternalLink,
} from "lucide-react";

import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-24 pb-16 space-y-16 bg-slate-50 min-h-screen">
      {/* =====================================================
          HERO HEADER
      ====================================================== */}
      <section className="bg-gradient-hero py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-bold text-[#0D9488] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Get In Touch
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact Sakthi Dental Clinic
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Located conveniently on Main Metro Junction with valet parking,
            wheelchair ramps, and 24/7 emergency dental assistance.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT SECTION
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* =================================================
              LEFT COLUMN - CONTACT FORM
          ================================================== */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* =================================================
                REACH US CARD
            ================================================== */}
            <div className="glass-card p-6 sm:p-8 border border-white/80 space-y-6 shadow-xl rounded-3xl">
              <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0D9488]" />
                Reach Us Directly
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                {/* ADDRESS */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="p-2.5 rounded-xl bg-[#0D9488]/10 text-[#0D9488] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Clinic Address
                    </h4>

                    <p className="text-slate-600 mt-1 leading-relaxed">
                      #42, Metro Grand Avenue, Near Central Bus Station,
                      Chennai, Tamil Nadu - 600001
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="p-2.5 rounded-xl bg-[#0284C7]/10 text-[#0284C7] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Phone & WhatsApp
                    </h4>

                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:+919876543210"
                        className="block text-slate-600 font-medium hover:text-[#0284C7] transition-colors"
                      >
                        +91 98765 43210
                      </a>

                      <a
                        href="tel:04423456789"
                        className="block text-slate-600 font-medium hover:text-[#0284C7] transition-colors"
                      >
                        044 2345 6789
                      </a>
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="p-2.5 rounded-xl bg-[#059669]/10 text-[#059669] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Email Inquiry
                    </h4>

                    <a
                      href="mailto:care@sakthidental.com"
                      className="text-slate-600 mt-1 block hover:text-[#059669] transition-colors"
                    >
                      care@sakthidental.com
                    </a>
                  </div>
                </div>

                {/* TIMINGS */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Clinic Timings
                    </h4>

                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Mon - Sat: 9:00 AM - 8:30 PM
                      <br />
                      Sunday: 10:00 AM - 2:00 PM
                      <br />
                      <span className="font-bold text-emerald-600">
                        Emergency: 24x7
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  SOCIAL LINKS
              ================================================== */}
              <div className="pt-4 border-t border-slate-200/60">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                  Connect on Social Media
                </span>

                <div className="flex items-center gap-3 flex-wrap">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-3 rounded-2xl bg-slate-100 text-slate-700 hover:text-white hover:bg-[#0D9488] transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <span className="text-sm font-black">IG</span>
                    Instagram
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="p-3 rounded-2xl bg-slate-100 text-slate-700 hover:text-white hover:bg-[#0D9488] transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <span className="text-sm font-black">f</span>
                    Facebook
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="p-3 rounded-2xl bg-slate-100 text-slate-700 hover:text-white hover:bg-[#059669] transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <span className="text-sm font-black">▶</span>
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* =================================================
                GOOGLE MAP
            ================================================== */}
            <div className="glass-card overflow-hidden border border-slate-200/80 shadow-md rounded-3xl">
              {/* MAP HEADER */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <Navigation className="w-4 h-4 text-[#0D9488]" />
                  <span>Interactive Clinic Map</span>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chennai+Central"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-[#0D9488] hover:text-white transition-colors flex items-center gap-1"
                >
                  Open in Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* MAP */}
              <div className="relative h-64 bg-slate-200">
                <iframe
                  title="Sakthi Dental Clinic Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.837861922572!2d80.27071831482278!3d13.082680190783168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333f%3A0x6d3e336b1103f7e3!2sChennai%20Central!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}