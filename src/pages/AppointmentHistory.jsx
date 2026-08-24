import React, { useEffect, useState } from "react";
import { History, Calendar, Clock, Search, RefreshCw, Loader2, FileText, User } from "lucide-react";

export default function AppointmentHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchHistory = async (isManualRefresh = false) => {
    try {
      if (isManualRefresh) setRefreshing(true);
      else setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:5000/api/admin/appointments");
      if (!response.ok) {
        throw new Error("Failed to retrieve appointment history from database.");
      }

      const data = await response.json();

      // Optional: Filter for past or completed appointments, or show all historical records
      setHistory(data);
    } catch (err) {
      console.error("Error fetching history:", err);
      setError(err.message || "Could not connect to the database server.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const formatDateString = (dateInput) => {
    if (!dateInput) return "";
    return dateInput.toString().split("T")[0];
  };

  const filtered = history.filter(
    (item) =>
      item.patientName?.toLowerCase().includes(search.toLowerCase()) ||
      item.treatment?.toLowerCase().includes(search.toLowerCase()) ||
      item.doctor?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 gap-3">
        <Loader2 className="h-8 w-8 text-purple-600 animate-spin" />
        <p className="text-xs font-bold text-slate-500">Loading appointment history...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-lg mt-12 rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center shadow-xs">
        <h3 className="text-sm font-bold text-rose-800">Database Connection Error</h3>
        <p className="mt-1 text-xs text-rose-600">{error}</p>
        <button
          onClick={() => fetchHistory()}
          className="mt-4 rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-rose-700 cursor-pointer"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Appointment History</h1>
          <p className="text-xs text-slate-500">Review previous patient records, medical problems, doctors, and next check-up schedules.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchHistory(true)}
            disabled={refreshing}
            className="flex items-center gap-1.5 px-3 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer shrink-0"
            title="Refresh History"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin text-purple-600" : ""}`} />
            Refresh
          </button>

          <div className="relative">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search patient, email, doctor, or problem..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-72 rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase text-slate-500 tracking-wider">
                <th className="py-3.5 px-6">Patient & Email</th>
                <th className="py-3.5 px-6">Problem / Treatment</th>
                <th className="py-3.5 px-6">Doctor Name</th>
                <th className="py-3.5 px-6">Date & Time</th>
                <th className="py-3.5 px-6">Medical Report</th>
                <th className="py-3.5 px-6">Next Check-up Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-800">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-12 text-slate-400 font-semibold">
                    No appointment history records found.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-purple-50/20 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-black text-[10px] shrink-0">
                          {item.patientName ? item.patientName.charAt(0).toUpperCase() : "P"}
                        </div>
                        {item.patientName}
                      </div>
                      <div className="text-[11px] text-slate-400 font-normal mt-0.5 ml-9">
                        {item.email || "No email provided"}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block rounded-full bg-purple-50 px-2.5 py-0.5 text-[10px] font-bold text-purple-700 border border-purple-100">
                        {item.treatment}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-700">
                      {item.doctor || "General Specialist"}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-bold text-slate-700">
                        <Calendar className="h-3.5 w-3.5 text-purple-600" />
                        {formatDateString(item.date)}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                        <Clock className="h-3 w-3 text-slate-400" />
                        {item.time}
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-[10px] font-bold border border-emerald-100">
                        <FileText className="h-3.5 w-3.5" /> Report Available
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-bold text-slate-700">
                      {item.nextCheckup ? (
                        <span className="text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                          {formatDateString(item.nextCheckup)}
                        </span>
                      ) : (
                        <span className="text-slate-400 font-normal italic">Not Scheduled</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}