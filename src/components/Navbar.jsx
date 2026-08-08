import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Calendar, PhoneCall, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenAppointment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0D9488] via-[#0284C7] to-[#059669] p-0.5 shadow-md shadow-[#0D9488]/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#0D9488]">
                  <svg className="w-6 h-6 fill-current text-[#0D9488]" viewBox="0 0 24 24">
                    <path d="M12,2 C8,2 5,4.5 5,8 C5,10.5 6,13 7,16 C8,19 9,22 10.5,22 C11.5,22 11.8,20 12,20 C12.2,20 12.5,22 13.5,22 C15,22 16,19 17,16 C18,13 19,10.5 19,8 C19,4.5 16,2 12,2 Z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-800 leading-tight">
                  Sakthi<span className="text-[#0D9488]">Dental</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  International Hospital
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 shadow-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#0D9488] to-[#0284C7] text-white shadow-md shadow-[#0D9488]/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#0D9488] transition-colors px-3 py-2"
              >
                <div className="p-2 rounded-full bg-[#0D9488]/10 text-[#0D9488]">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span>+91 98765 43210</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenAppointment}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#059669] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#0D9488]/25 flex items-center gap-2 cursor-pointer hover:opacity-95 transition-opacity"
              >
                <Calendar className="w-4 h-4" />
                <span>Fix an Appointment</span>
              </motion.button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenAppointment}
                className="p-2 rounded-full bg-[#0D9488] text-white shadow-md text-xs font-semibold flex items-center justify-center sm:hidden"
                aria-label="Fix Appointment"
              >
                <Calendar className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-white/80 border border-slate-200 text-slate-700 shadow-sm focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-30 p-4 lg:hidden"
          >
            <div className="rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/80 p-6 shadow-2xl space-y-4">
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-bold flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#0D9488]/10 text-[#0D9488]'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-slate-100 text-slate-700 font-semibold text-xs"
                >
                  <PhoneCall className="w-4 h-4 text-[#0D9488]" />
                  <span>Call Emergency: +91 98765 43210</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#059669] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0D9488]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Fix an Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
