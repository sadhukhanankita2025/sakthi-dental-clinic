import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  Stethoscope,
  ChevronRight
} from 'lucide-react';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { DOCTORS_DATA } from '../data/doctorsData';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    doctor: DOCTORS_DATA[0].name,
    treatment: TREATMENTS_DATA[0].title,
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-100 z-10 my-auto"
        >

          {/* Top Decorative Gradient */}
          <div className="h-2.5 bg-linear-to-r from-[#0D9488] via-[#0284C7] to-[#059669]" />

          {/* Close Button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="p-6 sm:p-8">

              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Instant Booking
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                  Fix an Appointment
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Choose your preferred specialist & time. We will confirm your slot instantly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Patient Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Patient Full Name *
                    </label>

                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />

                      <input
                        type="text"
                        required
                        placeholder="Please enter your name"
                        value={formData.patientName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            patientName: e.target.value
                          })
                        }
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />

                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value
                          })
                        }
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Treatment + Doctor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Select Treatment */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Select Treatment
                    </label>

                    <div className="relative">
                      <Stethoscope className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />

                      <select
                        value={formData.treatment}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            treatment: e.target.value
                          })
                        }
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        {TREATMENTS_DATA.map((t) => (
                          <option key={t.id} value={t.title}>
                            {t.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Select Doctor */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Specialist
                    </label>

                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />

                      <select
                        value={formData.doctor}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            doctor: e.target.value
                          })
                        }
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        {DOCTORS_DATA.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name} ({d.role.split('-')[0]})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Date
                    </label>

                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />

                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            date: e.target.value
                          })
                        }
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Time Slot
                    </label>

                    <div className="relative">
                      <Clock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />

                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            time: e.target.value
                          })
                        }
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="09:30 AM">
                          09:30 AM (Morning)
                        </option>

                        <option value="11:00 AM">
                          11:00 AM (Morning)
                        </option>

                        <option value="02:30 PM">
                          02:30 PM (Afternoon)
                        </option>

                        <option value="05:00 PM">
                          05:00 PM (Evening)
                        </option>

                        <option value="07:00 PM">
                          07:00 PM (Evening)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Describe Any Tooth Pain or Request (Optional)
                  </label>

                  <textarea
                    rows={2}
                    placeholder="e.g. Sensitivity to cold water on lower left tooth..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        notes: e.target.value
                      })
                    }
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:bg-white transition-all"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-linear-to-r from-[#0D9488] to-[#0284C7] text-white font-bold text-sm shadow-lg shadow-[#0D9488]/25 flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Confirm Appointment Request</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

              </form>
            </div>
          ) : (

            /* Success Confirmation Screen */
            <div className="p-8 text-center space-y-6">

              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Appointment Confirmed!
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Thank you,{' '}
                  <span className="font-semibold text-slate-900">
                    {formData.patientName}
                  </span>
                  . Your slot request has been sent to Sakthi Dental Clinic.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-2 max-w-md mx-auto text-xs text-slate-700">

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-400">
                    Treatment:
                  </span>

                  <span className="font-semibold">
                    {formData.treatment}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-400">
                    Specialist:
                  </span>

                  <span className="font-semibold">
                    {formData.doctor}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Date & Time:
                  </span>

                  <span className="font-semibold">
                    {formData.date} at {formData.time}
                  </span>
                </div>

              </div>

              <p className="text-xs text-slate-500">
                Our patient coordinator will call your mobile{' '}
                <span className="font-semibold">
                  {formData.phone}
                </span>{' '}
                shortly to finalize your token.
              </p>

              <button
                onClick={handleReset}
                className="py-3 px-8 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close & Return
              </button>

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}