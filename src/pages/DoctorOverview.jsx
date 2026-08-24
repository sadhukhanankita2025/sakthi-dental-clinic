import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  CalendarDays, 
  Clock, 
  TrendingUp, 
  Calendar, 
  Users, 
  UploadCloud, 
  ArrowRight,
  Loader2,
  Activity,
  Zap,
  BarChart3,
  ShieldCheck
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

  // FIXED: Using dynamic current date instead of a hardcoded value
  const todayObj = new Date();
  const todayStr = todayObj.toISOString().split("T")[0];
  const todayDate = new Date(todayStr);

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

  const trendData = [
    { day: "Monday", short: "Mon", patients: 4, date: "Aug 17", load: "Normal" },
    { day: "Tuesday", short: "Tue", patients: 7, date: "Aug 18", load: "Moderate" },
    { day: "Wednesday", short: "Wed", patients: 5, date: "Aug 19", load: "Normal" },
    { day: "Thursday", short: "Thu", patients: 9, date: "Aug 20", load: "High" },
    { day: "Friday", short: "Fri", patients: 6, date: "Aug 21", load: "Moderate" },
    { day: "Saturday", short: "Sat", patients: 8, date: "Aug 22", load: "High" },
    { day: "Sunday", short: "Sun", patients: countToday || 3, date: "Aug 23", load: "Peak" },
  ];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 gap-3">
        <Loader2 className="h-8 w-8 text-purple-600 animate-spin" />
        <p className="text-xs font-bold text-slate-500">Loading command center analytics...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* HERO BANNER */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-purple-950 to-indigo-950 rounded-3xl p-8 text-white shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10">
        <div className="absolute -right-12 -bottom-12 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-2 relative z-10">
          <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-purple-500/30">
            <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" /> Live Clinical Operations
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Welcome Back, Doctor 👋</h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-medium leading-relaxed">
            Sakthi Dental Clinic is operating smoothly. You have <span className="font-bold text-white underline decoration-emerald-400">{countToday} bookings</span> scheduled for today.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <Link
            to="/doctor/schedule"
            className="bg-white text-slate-900 hover:bg-purple-50 px-5 py-3 rounded-2xl text-xs font-black transition-all shadow-xl hover:shadow-purple-500/25 flex items-center gap-2 group cursor-pointer"
          >
            View Full Schedule <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <CalendarDays className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Today's Queue</p>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">{countToday} Bookings</h3>
            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Active Now
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
          <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Tomorrow</p>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">{countTomorrow} Bookings</h3>
            <p className="text-[10px] text-amber-600 font-bold mt-1">Prepared queue</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">This Week</p>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">{countWeek} Bookings</h3>
            <p className="text-[10px] text-blue-600 font-bold mt-1">7-day outlook</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">This Month</p>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">{countMonth} Bookings</h3>
            <p className="text-[10px] text-emerald-600 font-bold mt-1">Monthly total</p>
          </div>
        </div>
      </div>

      {/* WEEKLY PATIENT FLOW ANALYTICS */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-purple-50 text-purple-700 rounded-2xl border border-purple-100">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-black text-slate-900">Weekly Patient Flow Analytics</h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Structured daily load distribution and clinical visitor volume over the past 7 days.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold border border-emerald-100">
              <Zap className="h-3.5 w-3.5 text-emerald-600" /> Peak Hours: 10:00 AM – 01:00 PM
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {trendData.map((item, index) => {
            const maxPatients = 10;
            const percentage = Math.min((item.patients / maxPatients) * 100, 100);

            return (
              <div key={index} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-purple-200 transition-all flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-900">{item.day}</span>
                    <span className="text-[10px] text-slate-400 font-medium">({item.date})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      item.load === "Peak" ? "bg-purple-100 text-purple-800" :
                      item.load === "High" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {item.load} Demand
                    </span>
                    <span className="font-black text-purple-700 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                      {item.patients} Visits
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-linear-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Daily Average</span>
            <span className="text-xs font-black text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200">6.4 Patients/Day</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Busiest Day</span>
            <span className="text-xs font-black text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">Thursday (9 Visits)</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Clinic Capacity</span>
            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">88% Optimal</span>
          </div>
        </div>
      </div>

      {/* BENTO GRID NAVIGATION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/doctor/schedule" className="relative overflow-hidden bg-linear-to-br from-purple-900 to-indigo-950 p-7 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-600/30 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 group-hover:bg-white group-hover:text-purple-900 transition-colors">
              <CalendarDays className="h-6 w-6" />
            </div>
            <h3 className="text-base font-black">Patient Appointments & Schedule</h3>
            <p className="text-xs text-purple-200 mt-2 font-medium leading-relaxed">Review upcoming treatments, contact patients directly via quick-call, and dispatch instructions.</p>
          </div>
          <span className="text-xs font-bold text-purple-300 flex items-center gap-1 mt-8 group-hover:translate-x-1.5 transition-transform relative z-10">
            Open Schedule <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link to="/doctor/upload" className="relative overflow-hidden bg-linear-to-br from-indigo-900 to-slate-900 p-7 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-600/30 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 group-hover:bg-white group-hover:text-indigo-900 transition-colors">
              <UploadCloud className="h-6 w-6" />
            </div>
            <h3 className="text-base font-black">Upload Reports & Prescriptions</h3>
            <p className="text-xs text-indigo-200 mt-2 font-medium leading-relaxed">Upload digital X-rays, lab scans, and clinical prescriptions directly to patient profiles.</p>
          </div>
          <span className="text-xs font-bold text-indigo-300 flex items-center gap-1 mt-8 group-hover:translate-x-1.5 transition-transform relative z-10">
            Upload Files <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link to="/doctor/doctors" className="relative overflow-hidden bg-linear-to-br from-slate-900 to-purple-950 p-7 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-600/30 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 group-hover:bg-white group-hover:text-purple-900 transition-colors">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-base font-black">Manage Consultation Rooms</h3>
            <p className="text-xs text-purple-200 mt-2 font-medium leading-relaxed">Assign clinic rooms, update weekly working schedules, and view specialist directories.</p>
          </div>
          <span className="text-xs font-bold text-purple-300 flex items-center gap-1 mt-8 group-hover:translate-x-1.5 transition-transform relative z-10">
            Manage Rooms <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}