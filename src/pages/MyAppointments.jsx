import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Clock,
  User,
  Stethoscope,
  MessageSquare,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Plus,
  Lock,
  Sparkles,
  RefreshCw,
  MapPin,
} from "lucide-react";

export default function MyAppointments({
  isLoggedIn = false,
  user = null,
  onOpenAuth = () => {},
  onOpenAppointment = () => {},
}) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // 'all' | 'upcoming' | 'completed'

  // =====================================================
  // FETCH USER APPOINTMENTS FROM DATABASE ONLY
  // =====================================================
  const fetchAppointments = async () => {
    if (!isLoggedIn || !user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const userIdentifier = user.email || user.phone || "";
      
      const response = await fetch(
        `http://localhost:5000/api/my-appointments?query=${encodeURIComponent(
          userIdentifier
        )}`
      );

      if (response.ok) {
        const data = await response.json();
        const formattedData = data.map((item) => ({
          id: item.id,
          patientName: item.patientName,
          treatment: item.treatment,
          doctor: item.doctor,
          date: item.date,
          time: item.time,
          room: item.room || "01",
          status: item.status || "Confirmed",
          adminMessage: item.adminMessage || "",
          adminMessageDate: item.adminMessageDate || "",
        }));
        setAppointments(formattedData);
      } else {
        setAppointments([]);
      }
    } catch (error) {
      console.error("Database connection error:", error);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [isLoggedIn, user]);

  const filteredAppointments = appointments.filter((item) => {
    if (filter === "upcoming") return item.status !== "Completed";
    if (filter === "completed") return item.status === "Completed";
    return true;
  });

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-[#FAF5FF] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-purple-100 bg-white/90 p-8 shadow-xl backdrop-blur-md"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 shadow-inner">
              <Lock className="h-8 w-8" />
            </div>

            <h2 className="text-2xl font-black text-slate-900">
              Access Your Appointments
            </h2>

            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Please sign in to view your scheduled visits from the database.
            </p>

            <button
              type="button"
              onClick={onOpenAuth}
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-purple-600/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <User className="h-4 w-4" />
              Login / Signup Now
            </button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF5FF] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-purple-700">
              <Sparkles className="h-3.5 w-3.5" />
              Patient Dashboard
            </div>
            <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              My Appointments & Updates
            </h1>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Welcome back, <span className="font-bold">{user?.name || "Patient"}</span>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchAppointments}
              className="flex items-center gap-1.5 rounded-xl border border-purple-100 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-colors hover:bg-purple-50 cursor-pointer"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>

            <button
              onClick={() => onOpenAppointment()}
              className="flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-purple-600/20 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              Book New Slot
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 border-b border-purple-100 pb-4 mb-6">
          {[
            { id: "all", label: "All Appointments" },
            { id: "upcoming", label: "Upcoming" },
            { id: "completed", label: "Completed" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-purple-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="h-44 w-full animate-pulse rounded-3xl border border-purple-100 bg-white/70"
              />
            ))}
          </div>
        ) : filteredAppointments.length === 0 ? (
          <div className="rounded-3xl border border-purple-100 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
              <Calendar className="h-7 w-7" />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              No Appointments Found
            </h3>
            <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
              You haven't booked any appointments yet.
            </p>
            <button
              onClick={() => onOpenAppointment()}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white shadow hover:bg-purple-700 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              Schedule Now
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAppointments.map((appt) => (
              <AppointmentCard key={appt.id} appt={appt} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function AppointmentCard({ appt }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Confirmed":
        return (
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-700">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Confirmed
          </span>
        );
      case "Completed":
        return (
          <span className="flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[11px] font-bold text-slate-600">
            <CheckCircle2 className="h-3.5 w-3.5 text-slate-500" />
            Completed
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-bold text-amber-700">
            <Clock3 className="h-3.5 w-3.5 text-amber-600" />
            Pending Confirmation
          </span>
        );
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-purple-50 p-2 text-purple-600">
              <Stethoscope className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                {appt.treatment}
              </h3>
              <p className="text-xs font-semibold text-purple-700">
                Specialist: {appt.doctor}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span>{appt.date}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="h-4 w-4 text-slate-400" />
              <span>{appt.time}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span>Sakthi Dental Clinic</span>
            </div>
          </div>
        </div>

        <div>{getStatusBadge(appt.status)}</div>
      </div>

      {appt.adminMessage ? (
        <div className="mt-4 rounded-2xl border border-indigo-100 bg-linear-to-r from-purple-50/80 via-indigo-50/50 to-teal-50/40 p-4">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="h-4 w-4 text-indigo-600" />
            <span className="text-[11px] font-black uppercase tracking-wider text-indigo-900">
              Message from Clinic Admin:
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-700 pl-6 font-medium">
            "{appt.adminMessage}"
          </p>
        </div>
      ) : (
        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400 pl-1">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>No specific notes from the admin desk yet.</span>
        </div>
      )}
    </div>
  );
}