import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Heart,
} from "lucide-react";

/* =========================================================
   SOCIAL MEDIA ICONS
   Inline SVG avoids lucide-react brand icon errors.
========================================================= */

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
    </svg>
  );
}

export default function Footer({ onOpenAppointment }) {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-8 overflow-hidden border-t border-purple-950/80">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">

          {/* =================================================
              COLUMN 1 - CLINIC DETAILS
          ================================================== */}

          <div className="space-y-4">

            {/* Logo */}

            <Link to="/" className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-teal-500 p-0.5 shadow-md shadow-purple-500/20">

                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-purple-400">

                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12,2 C8,2 5,4.5 5,8 C5,10.5 6,13 7,16 C8,19 9,22 10.5,22 C11.5,22 11.8,20 12,20 C12.2,20 12.5,22 13.5,22 C15,22 16,19 17,16 C18,13 19,10.5 19,8 C19,4.5 16,2 12,2 Z" />
                  </svg>

                </div>

              </div>

              <div className="flex flex-col">

                <span className="text-xl font-extrabold tracking-tight text-white leading-tight">
                  Sakthi
                  <span className="text-purple-400"> Dental</span>
                </span>

                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  International Hospital
                </span>

              </div>

            </Link>

            {/* Description */}

            <p className="text-xs text-slate-400 leading-relaxed">
              Pioneering international standard dental care for women,
              children, and families with pain-free technology, 20+ years of
              clinical excellence, and 100% sterile protocols.
            </p>

            {/* Contact Details */}

            <div className="pt-2 space-y-2 text-xs">

              {/* Address */}

              <div className="flex items-start gap-2.5 text-slate-300">

                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />

                <span>
                  #42, Metro Grand Avenue, Near Central Bus Station,
                  Chennai - 600001
                </span>

              </div>

              {/* Phone */}

              <div className="flex items-center gap-2.5 text-slate-300">

                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />

                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210 / 044 2345 6789
                </a>

              </div>

              {/* Email */}

              <div className="flex items-center gap-2.5 text-slate-300">

                <Mail className="w-4 h-4 text-teal-400 shrink-0" />

                <a
                  href="mailto:care@sakthidental.com"
                  className="hover:text-white transition-colors"
                >
                  care@sakthidental.com
                </a>

              </div>

            </div>

          </div>

          {/* =================================================
              COLUMN 2 - QUICK LINKS
          ================================================== */}

          <div className="space-y-4">

            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white border-l-2 border-purple-500 pl-3">
              Quick Links
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-purple-400">›</span>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-purple-400">›</span>
                  About Our Clinic
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-purple-400">›</span>
                  Full Treatments List
                </Link>
              </li>

              <li>
                <Link
                  to="/faqs"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-purple-400">›</span>
                  Patient FAQs
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-purple-400">›</span>
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-purple-400">›</span>
                  Contact & Directions
                </Link>
              </li>

            </ul>

          </div>

          {/* =================================================
              COLUMN 3 - SPECIALIZED CARE
          ================================================== */}

          <div className="space-y-4">

            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white border-l-2 border-indigo-500 pl-3">
              Specialized Care
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-400">

              <li>
                <Link
                  to="/treatments?cat=General+Dentistry"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Painless Tooth Extraction
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=General+Dentistry"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Composite Tooth Filling
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=General+Dentistry"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Deep Teeth Cleaning & Scaling
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=Cosmetic+Dentistry"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Laser Teeth Whitening
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=Orthodontics"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Ceramic Braces & Clear Aligners
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=Surgical+%26+Implants"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Titanium Dental Implants
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=Pediatric+Dentistry"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Pediatric Dental Care for Kids
                </Link>
              </li>

            </ul>

          </div>

          {/* =================================================
              COLUMN 4 - HOURS & SOCIAL
          ================================================== */}

          <div className="space-y-4">

            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white border-l-2 border-teal-500 pl-3">
              Clinic Hours & Connect
            </h4>

            {/* Working Schedule */}

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">

              <div className="flex items-center gap-2 text-teal-400 font-bold">

                <Clock className="w-4 h-4" />

                <span>Working Schedule</span>

              </div>

              <div className="flex justify-between text-slate-300">

                <span>Mon - Sat:</span>

                <span className="font-semibold text-white">
                  9:00 AM - 8:30 PM
                </span>

              </div>

              <div className="flex justify-between text-slate-300">

                <span>Sunday:</span>

                <span className="font-semibold text-teal-300">
                  10:00 AM - 2:00 PM
                </span>

              </div>

              <div className="pt-1 text-[11px] text-slate-400 flex items-center gap-1.5">

                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />

                <span>24/7 Emergency Dental On Call</span>

              </div>

            </div>

            {/* Social Media */}

            <div className="space-y-2">

              <span className="text-xs font-semibold text-slate-400 block">
                Follow Us:
              </span>

              <div className="flex items-center gap-2">

                {/* Instagram */}

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-purple-600 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* Facebook */}

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-purple-600 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                {/* YouTube */}

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-teal-600 transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM COPYRIGHT
        ====================================================== */}

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">

          <p>
            © {new Date().getFullYear()} Sakthi Dental Clinic. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-4">

            <Link
              to="/privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>

            <span>•</span>

            <span className="flex items-center gap-1">

              Crafted with

              <Heart className="w-3 h-3 text-purple-400 fill-current" />

              for Healthy Smiles

            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}