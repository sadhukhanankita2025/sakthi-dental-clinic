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

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer({ onOpenAppointment }) {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-6">

      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">

          {/* =========================
              COLUMN 1 - CLINIC
          ========================== */}

          <div className="space-y-4">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-[#0D9488] via-[#0284C7] to-[#059669] p-0.5 shadow-md shadow-[#0D9488]/20">

                <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-[#0D9488]">

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
                  <span className="text-[#0D9488]">
                    Dental
                  </span>
                </span>

                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  International Hospital
                </span>

              </div>
            </Link>

            {/* Description */}
            <p className="text-xs text-slate-400 leading-relaxed">
              Pioneering international standard dental care for women,
              children, and families with pain-free technology, 20+ years
              of clinical excellence, and 100% sterile protocols.
            </p>

            {/* Contact Information */}
            <div className="pt-2 space-y-3 text-xs">

              {/* Address */}
              <div className="flex items-start gap-2.5 text-slate-300">

                <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />

                <span>
                  #42, Metro Grand Avenue,
                  <br />
                  Near Central Bus Station,
                  <br />
                  Chennai - 600001
                </span>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 text-slate-300">

                <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />

                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>

              </div>

              {/* Landline */}
              <div className="flex items-center gap-2.5 text-slate-300">

                <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />

                <a
                  href="tel:04423456789"
                  className="hover:text-white transition-colors"
                >
                  044 2345 6789
                </a>

              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5 text-slate-300">

                <Mail className="w-4 h-4 text-[#059669] shrink-0" />

                <a
                  href="mailto:care@sakthidental.com"
                  className="hover:text-white transition-colors"
                >
                  care@sakthidental.com
                </a>

              </div>

            </div>

            {/* Appointment Button */}
            {onOpenAppointment && (
              <button
                type="button"
                onClick={onOpenAppointment}
                className="w-full mt-4 px-4 py-3 rounded-xl bg-[#0D9488] text-white font-bold hover:bg-[#0F766E] transition-all shadow-lg shadow-[#0D9488]/20"
              >
                Book an Appointment
              </button>
            )}

          </div>

          {/* =========================
              COLUMN 2 - QUICK LINKS
          ========================== */}

          <div className="space-y-4">

            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white border-l-2 border-[#0D9488] pl-3">
              Quick Links
            </h4>

            <ul className="space-y-3 text-xs text-slate-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-[#0D9488] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#0D9488]">
                    ›
                  </span>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#0D9488] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#0D9488]">
                    ›
                  </span>
                  About Our Clinic
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments"
                  className="hover:text-[#0D9488] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#0D9488]">
                    ›
                  </span>
                  Full Treatments List
                </Link>
              </li>

              <li>
                <Link
                  to="/faqs"
                  className="hover:text-[#0D9488] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#0D9488]">
                    ›
                  </span>
                  Patient FAQs
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#0D9488] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#0D9488]">
                    ›
                  </span>
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#0D9488] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#0D9488]">
                    ›
                  </span>
                  Contact & Directions
                </Link>
              </li>

            </ul>
          </div>

          {/* =========================
              COLUMN 3 - TREATMENTS
          ========================== */}

          <div className="space-y-4">

            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white border-l-2 border-[#0284C7] pl-3">
              Specialized Care
            </h4>

            <ul className="space-y-3 text-xs text-slate-400">

              <li>
                <Link
                  to="/treatments?cat=General+Dentistry"
                  className="hover:text-[#0284C7] transition-colors"
                >
                  Painless Tooth Extraction
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=General+Dentistry"
                  className="hover:text-[#0284C7] transition-colors"
                >
                  Composite Tooth Filling
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=General+Dentistry"
                  className="hover:text-[#0284C7] transition-colors"
                >
                  Deep Teeth Cleaning & Scaling
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=Cosmetic+Dentistry"
                  className="hover:text-[#0284C7] transition-colors"
                >
                  Laser Teeth Whitening
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=Orthodontics"
                  className="hover:text-[#0284C7] transition-colors"
                >
                  Ceramic Braces & Clear Aligners
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=Surgical+%26+Implants"
                  className="hover:text-[#0284C7] transition-colors"
                >
                  Titanium Dental Implants
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments?cat=Pediatric+Dentistry"
                  className="hover:text-[#0284C7] transition-colors"
                >
                  Pediatric Dental Care for Kids
                </Link>
              </li>

            </ul>
          </div>

          {/* =========================
              COLUMN 4 - HOURS & SOCIAL
          ========================== */}

          <div className="space-y-4">

            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white border-l-2 border-[#059669] pl-3">
              Clinic Hours & Connect
            </h4>

            {/* Working Hours */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3 text-xs">

              <div className="flex items-center gap-2 text-[#059669] font-bold">

                <Clock className="w-4 h-4" />

                <span>
                  Working Schedule
                </span>

              </div>

              <div className="flex justify-between gap-3 text-slate-300">

                <span>
                  Mon - Sat:
                </span>

                <span className="font-semibold text-white">
                  9:00 AM - 8:30 PM
                </span>

              </div>

              <div className="flex justify-between gap-3 text-slate-300">

                <span>
                  Sunday:
                </span>

                <span className="font-semibold text-emerald-400">
                  10:00 AM - 2:00 PM
                </span>

              </div>

              <div className="pt-1 text-[11px] text-slate-400 flex items-start gap-1.5">

                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />

                <span>
                  24/7 Emergency Dental On Call
                </span>

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
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#0D9488] transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#0D9488] transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#059669] transition-all"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>

              </div>
            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM FOOTER
        ========================== */}

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Sakthi Dental Clinic.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">

            <Link
              to="/privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>

            <span>
              •
            </span>

            <span className="flex items-center gap-1">
              Crafted with

              <Heart
                className="w-3 h-3 text-[#059669] fill-current"
              />

              for Healthy Smiles
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}