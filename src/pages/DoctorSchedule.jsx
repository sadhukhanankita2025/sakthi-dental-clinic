import React, { useEffect, useState } from "react";
import { Calendar, Clock, Phone, MessageSquare, Search, PhoneCall, RefreshCw, Loader2 } from "lucide-react";

export default function DoctorSchedule() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [adminNotes, setAdminNotes] = useState({});

  const fetchAppointments = async (isManualRefresh = false) => {
    try {
      if (isManualRefresh) setRefreshing(true);
      else setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:5000/api/admin/appointments");
      if (!response.ok) {
        throw new Error("Failed to retrieve patient schedule from database.");
      }

      const data = await response.json();
      setAppointments(data);
    } catch (err) {
      console.error("Error fetching schedule:", err);
      setError(err.message || "Could not connect to the database server.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleUpdateMessage = async (id) => {
    const note = adminNotes[id] || "";
    try {
      const res = await fetch(`http://localhost:5000/api/admin/appointments/${id}/message`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminMessage: note }),
      });

      if (!res.ok) throw new Error("Failed to save note");
      alert("Instruction sent successfully to patient dashboard!");
    } catch (err) {
      alert("Failed to update message in database.");
    }
  };

  // Helper to safely extract YYYY-MM-DD string from database date
  const formatDateString = (dateInput) => {
    if (!dateInput) return "";
    return dateInput.toString().split("T")[0];
  };

  // ==========================================
  // DYNAMIC LOCAL DATE CALCULATIONS
  // ==========================================
  const getLocalDateString = (date = new Date()) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayStr = getLocalDateString(); // Gets current local date dynamically

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrowStr = getLocalDateString(tomorrowDate); // Gets tomorrow's date dynamically

  const todayDateObj = new Date(todayStr);

  // Helper to check if a date string falls within the next 7 days (Days 2 to 7 after today)
  const isNextWeek = (dateStr) => {
    if (!dateStr) return false;
    const target = new Date(dateStr);
    const diffTime = target - todayDateObj;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays > 1 && diffDays <= 7;
  };

  // Filter out past dates (Strictly show today onwards)
  const upcomingAppointments = appointments.filter((appt) => {
    const cleanDate = formatDateString(appt.date);
    return cleanDate >= todayStr;
  });

  // Categorize accurately using dynamic string comparison
  const todayList = upcomingAppointments.filter((a) => formatDateString(a.date) === todayStr);
  const tomorrowList = upcomingAppointments.filter((a) => formatDateString(a.date) === tomorrowStr);
  const nextWeekList = upcomingAppointments.filter((a) => isNextWeek(formatDateString(a.date)));

  // Search Filter Helper
  const applySearch = (list) => {
    return list.filter(
      (a) =>
        a.patientName?.toLowerCase().includes(search.toLowerCase()) ||
        a.treatment?.toLowerCase().includes(search.toLowerCase()) ||
        (a.doctor && a.doctor.toLowerCase().includes(search.toLowerCase()))
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 gap-3">
        <Loader2 className="h-8 w-8 text-purple-600 animate-spin" />
        <p className="text-xs font-bold text-slate-500">Loading patient schedule from database...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-lg mt-12 rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center shadow-xs">
        <h3 className="text-sm font-bold text-rose-800">Database Connection Error</h3>
        <p className="mt-1 text-xs text-rose-600">{error}</p>
        <button
          onClick={() => fetchAppointments()}
          className="mt-4 rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-rose-700 cursor-pointer"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  const renderTable = (list, emptyMessage) => {
    const filtered = applySearch(list);
    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase text-slate-500 tracking-wider">
                <th className="py-3.5 px-6">Patient Name</th>
                <th className="py-3.5 px-6">Treatment</th>
                <th className="py-3.5 px-6">Assigned Doctor</th>
                <th className="py-3.5 px-6">Date & Time</th>
                <th className="py-3.5 px-6">Contact / Call</th>
                <th className="py-3.5 px-6">Patient Instructions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-800">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-slate-400 font-semibold">
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                filtered.map((appt) => (
                  <tr key={appt.id} className="hover:bg-purple-50/20 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-black text-[10px] shrink-0">
                        {appt.patientName ? appt.patientName.charAt(0).toUpperCase() : "P"}
                      </div>
                      {appt.patientName}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block rounded-full bg-purple-50 px-2.5 py-0.5 text-[10px] font-bold text-purple-700 border border-purple-100">
                        {appt.treatment}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-700">
                      {appt.doctor || "General Specialist"}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-bold text-slate-700">
                        <Calendar className="h-3.5 w-3.5 text-purple-600" />
                        {formatDateString(appt.date)}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                        <Clock className="h-3 w-3 text-slate-400" />
                        {appt.time}
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="font-bold text-slate-700">{appt.phone}</div>
                      <a
                        href={`tel:${appt.phone}`}
                        className="inline-flex items-center gap-1 mt-1 px-2.5 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-[10px] font-bold transition-colors"
                      >
                        <PhoneCall className="h-3 w-3" /> Call Patient
                      </a>
                    </td>
                    <td className="py-4 px-6 min-w-70">
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <MessageSquare className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            placeholder="Instruction for patient..."
                            defaultValue={appt.adminMessage || ""}
                            onChange={(e) =>
                              setAdminNotes({ ...adminNotes, [appt.id]: e.target.value })
                            }
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-3 text-[11px] font-medium text-slate-800 focus:bg-white focus:outline-none"
                          />
                        </div>
                        <button
                          onClick={() => handleUpdateMessage(appt.id)}
                          className="rounded-xl bg-purple-600 px-3 py-1.5 text-[11px] font-bold text-white shadow hover:bg-purple-700 cursor-pointer shrink-0"
                        >
                          Send
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Patient Schedule</h1>
          <p className="text-xs text-slate-500">Organized into today, tomorrow, and upcoming weekly schedules.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchAppointments(true)}
            disabled={refreshing}
            className="flex items-center gap-1.5 px-3 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer shrink-0"
            title="Refresh Schedule"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin text-purple-600" : ""}`} />
            Refresh
          </button>

          <div className="relative">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search patient, treatment, or doctor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-64 rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
        </div>
      </div>

      {/* SECTION 1: TODAY'S SCHEDULE */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-600" />
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
            1. Today's Appointments ({todayList.length})
          </h2>
        </div>
        {renderTable(todayList, "No appointments scheduled for today.")}
      </div>

      {/* SECTION 2: TOMORROW'S SCHEDULE */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
            2. Tomorrow's Appointments ({tomorrowList.length})
          </h2>
        </div>
        {renderTable(tomorrowList, "No appointments scheduled for tomorrow.")}
      </div>

      {/* SECTION 3: NEXT WEEK'S SCHEDULE */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
            3. Next 7 Days ({nextWeekList.length})
          </h2>
        </div>
        {renderTable(nextWeekList, "No appointments scheduled for the rest of this week.")}
      </div>
    </div>
  );
}