import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  CalendarDays, 
  Clock, 
  TrendingUp, 
  Calendar, 
  Users, 
  UploadCloud, 
  Stethoscope, 
  ArrowRight,
  Loader2
} from "lucide-react";

export default function DoctorOverview() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/appointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const todayStr = "2026-08-23";
  const todayDate = new Date("2026-08-23");

  const tomorrowDate = new Date(todayDate);
  tomorrowDate.setDate(todayDate.getDate() + 1);
  const tomorrowStr = tomorrowDate.toISOString().split("T")[0];

  const isWithinWeek = (dateStr) => {
    const d = new Date(dateStr);
    const diffTime = d - todayDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 7;
  };

  const isWithinMonth = (dateStr) => {
    const d = new Date(dateStr);
    return (
      d.getFullYear() === todayDate.getFullYear() &&
      d.getMonth() === todayDate.getMonth() &&
      d >= todayDate
    );
  };

  const upcomingAppointments = appointments.filter((appt) => {
    if (!appt.date) return false;
    const cleanDate = appt.date.split("T")[0];
    return cleanDate >= todayStr;
  });

  const countToday = upcomingAppointments.filter((a) => a.date && a.date.split("T")[0] === todayStr).length;
  const countTomorrow = upcomingAppointments.filter((a) => a.date && a.date.split("T")[0] === tomorrowStr).length;
  const countWeek = upcomingAppointments.filter((a) => a.date && isWithinWeek(a.date.split("T")[0])).length;
  const countMonth = upcomingAppointments.filter((a) => a.date && isWithinMonth(a.date.split("T")[0])).length;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 gap-3">
        <Loader2 className="h-8 w-8 text-purple-600 animate-spin" />
        <p className="text-xs font-bold text-slate-500">Loading dashboard overview...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-linear-to-r from-purple-700 to-indigo-800 rounded-3xl p-8 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-white/10 text-purple-200 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-white/10">
            Clinical Command Center
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Welcome, Doctor 👋</h1>
          <p className="text-xs sm:text-sm text-purple-100 max-w-xl font-medium">
            Here is your live appointment summary and clinic schedule overview for Sakthi Dental Clinic.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/doctor/schedule"
            className="bg-white text-purple-900 hover:bg-purple-50 px-5 py-2.5 rounded-2xl text-xs font-black transition-all shadow-md flex items-center gap-2"
          >
            View Full Schedule <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl shrink-0">
            <CalendarDays className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Today</p>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">{countToday} Bookings</h3>
            <p className="text-[10px] text-emerald-600 font-bold mt-1">● Active schedule</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
          <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl shrink-0">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Tomorrow</p>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">{countTomorrow} Bookings</h3>
            <p className="text-[10px] text-amber-600 font-bold mt-1">Upcoming queue</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">This Week</p>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">{countWeek} Bookings</h3>
            <p className="text-[10px] text-blue-600 font-bold mt-1">7-day outlook</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">This Month</p>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">{countMonth} Bookings</h3>
            <p className="text-[10px] text-emerald-600 font-bold mt-1">Monthly total</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/doctor/schedule" className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-purple-300 transition-all shadow-2xs group flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <CalendarDays className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Patient Appointments & Schedule</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">Review upcoming treatments, contact patients directly, and send instructions.</p>
          </div>
          <span className="text-xs font-bold text-purple-600 flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform">
            Open Schedule <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link to="/doctor/upload" className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-purple-300 transition-all shadow-2xs group flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <UploadCloud className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Upload Reports & Prescriptions</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">Upload digital X-rays, lab scans, and prescriptions directly to patient profiles.</p>
          </div>
          <span className="text-xs font-bold text-purple-600 flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform">
            Upload Files <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link to="/doctor/doctors" className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-purple-300 transition-all shadow-2xs group flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Manage Consultation Rooms</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">Assign clinic rooms, update weekly working schedules, and view specialist directories.</p>
          </div>
          <span className="text-xs font-bold text-purple-600 flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform">
            Manage Rooms <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}