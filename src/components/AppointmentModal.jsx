import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

import { TREATMENTS_DATA } from "../data/TreatmentsData";
import { DOCTORS_DATA } from "../data/doctorsData";

export default function AppointmentModal({
  isOpen,
  onClose,
  selectedTreatment = "",
  isLoggedIn = false,
  onOpenAuth = () => {},
  user = null,
}) {
  const defaultTreatment =
    TREATMENTS_DATA.find((t) => t.title === selectedTreatment)?.title ||
    TREATMENTS_DATA[0]?.title ||
    "";

  // Today's date in YYYY-MM-DD format for min attribute
  const todayDateString = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    patientName: user?.name || "",
    phone: "",
    email: user?.email || "",
    doctor: DOCTORS_DATA[0]?.name || "",
    treatment: defaultTreatment,
    date: todayDateString,
    time: "10:00 AM",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData((previous) => ({
        ...previous,
        patientName: user.name || previous.patientName,
        email: user.email || previous.email,
      }));
    }
  }, [user]);

  useEffect(() => {
    if (!selectedTreatment) return;
    const treatmentExists = TREATMENTS_DATA.some(
      (treatment) => treatment.title === selectedTreatment
    );
    if (treatmentExists) {
      setFormData((previous) => ({
        ...previous,
        treatment: selectedTreatment,
      }));
    }
  }, [selectedTreatment]);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setLoading(false);
      setErrorMessage("");

      setFormData((previous) => ({
        ...previous,
        patientName: user?.name || previous.patientName,
        email: user?.email || previous.email,
        treatment: selectedTreatment || TREATMENTS_DATA[0]?.title || "",
        date: todayDateString,
      }));
    }
  }, [isOpen, selectedTreatment, user, todayDateString]);

  // =========================================================
  // SUBMIT WITH CONFLICT CHECKING (Date, Time, Doctor)
  // =========================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      onClose();
      onOpenAuth();
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      // 1. Check existing appointments in localStorage to prevent double booking
      const savedAppointments = JSON.parse(localStorage.getItem("sakthi_manage_appointments") || "[]");
      
      const isSlotTaken = savedAppointments.some(
        (app) =>
          app.doctor === formData.doctor &&
          app.date === formData.date &&
          app.time === formData.time &&
          app.status !== "Cancelled"
      );

      if (isSlotTaken) {
        setLoading(false);
        setErrorMessage(`Sorry! ${formData.doctor} is already booked on ${formData.date} at ${formData.time}. Please select another time slot or date.`);
        return;
      }

      // 2. Prepare new appointment object
      const newAppointment = {
        id: Date.now(),
        doctorId: DOCTORS_DATA.find((d) => d.name === formData.doctor)?.id || "dr-anupriya",
        ...formData,
        status: "Confirmed",
      };

      // 3. Save to localStorage queue used by ManageDoctors / Reports
      const updatedAppointments = [newAppointment, ...savedAppointments];
      localStorage.setItem("sakthi_manage_appointments", JSON.stringify(updatedAppointments));

      // Optional: Attempt backend POST if server is running
      try {
        await fetch("http://localhost:5000/api/appointments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.log("Backend offline, using local storage backup.");
      }

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Booking error:", error);
      setLoading(false);
      setErrorMessage("Could not complete booking. Please try again.");
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setLoading(false);
    setErrorMessage("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 my-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl"
        >
          <div className="h-2.5 bg-linear-to-r from-[#0D9488] via-[#0284C7] to-[#059669]" />

          <button
            type="button"
            onClick={handleReset}
            className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
            aria-label="Close appointment modal"
          >
            <X className="h-5 w-5" />
          </button>

          {!submitted ? (
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#0D9488]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0D9488]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Instant Booking
                </div>

                <h3 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                  Fix an Appointment
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Choose your preferred specialist & time. Slots are validated in real-time.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-rose-600">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Patient Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Please enter your name"
                        value={formData.patientName}
                        onChange={(e) =>
                          setFormData({ ...formData, patientName: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        maxLength="15"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => {
                          const numericValue = e.target.value.replace(/[^0-9+\s-]/g, "");
                          setFormData({ ...formData, phone: numericValue });
                        }}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="abc@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Select Treatment
                    </label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3.5 top-3 z-10 h-4 w-4 text-slate-400" />
                      <select
                        value={formData.treatment}
                        onChange={(e) =>
                          setFormData({ ...formData, treatment: e.target.value })
                        }
                        className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50"
                      >
                        {TREATMENTS_DATA.map((treatment) => (
                          <option key={treatment.id} value={treatment.title}>
                            {treatment.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Preferred Specialist
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 z-10 h-4 w-4 text-slate-400" />
                      <select
                        value={formData.doctor}
                        onChange={(e) =>
                          setFormData({ ...formData, doctor: e.target.value })
                        }
                        className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50"
                      >
                        {DOCTORS_DATA.map((doctor) => (
                          <option key={doctor.id} value={doctor.name}>
                            {doctor.name} ({doctor.role.split("-")[0]})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="date"
                        min={todayDateString} // Block past dates
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50"
                      >
                        <option value="09:30 AM">09:30 AM (Morning)</option>
                        <option value="11:00 AM">11:00 AM (Morning)</option>
                        <option value="02:30 PM">02:30 PM (Afternoon)</option>
                        <option value="05:00 PM">05:00 PM (Evening)</option>
                        <option value="07:00 PM">07:00 PM (Evening)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Describe Any Tooth Pain or Request (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Sensitivity to cold water on lower left tooth..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#0D9488] to-[#0284C7] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0D9488]/25 transition-all hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>{isLoggedIn ? "Confirm Appointment Request" : "Login / Signup to Book"}</span>
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          ) : (
            <div className="space-y-6 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Appointment Confirmed!
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Thank you,{" "}
                  <span className="font-semibold text-slate-900">
                    {formData.patientName}
                  </span>
                  . Your slot has been successfully scheduled.
                </p>
              </div>

              <div className="mx-auto max-w-md space-y-2 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 text-left text-xs text-slate-700">
                <div className="flex justify-between gap-4 border-b border-slate-200 pb-2">
                  <span className="text-slate-400">Treatment:</span>
                  <span className="text-right font-semibold">{formData.treatment}</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-200 pb-2">
                  <span className="text-slate-400">Specialist:</span>
                  <span className="text-right font-semibold">{formData.doctor}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Date & Time:</span>
                  <span className="text-right font-semibold">
                    {formData.date} at {formData.time}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="cursor-pointer rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
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