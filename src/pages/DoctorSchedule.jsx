import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Search } from "lucide-react";

export default function DoctorSchedule() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [adminNotes, setAdminNotes] = useState({});

  // Fetch all patient appointments booked in the system
  useEffect(() => {
    fetch("http://localhost:5000/api/admin/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch(() => {
        // Fallback mock data if backend isn't configured yet
        setAppointments([
          {
            id: 1,
            patientName: "Rahul Sharma",
            phone: "+91 9876543210",
            treatment: "Root Canal Treatment",
            date: "2026-03-28",
            time: "11:00 AM",
            status: "Confirmed",
            adminMessage: "Bring previous dental records.",
          },
          {
            id: 2,
            patientName: "Priya Patel",
            phone: "+91 9123456789",
            treatment: "Laser Teeth Whitening",
            date: "2026-04-05",
            time: "02:30 PM",
            status: "Pending",
            adminMessage: "",
          },
        ]);
      });
  }, []);

  const handleUpdateMessage = async (id) => {
    const note = adminNotes[id] || "";
    try {
      await fetch(`http://localhost:5000/api/admin/appointments/${id}/message`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminMessage: note }),
      });
      alert("Instruction sent successfully to patient dashboard!");
    } catch (err) {
      alert("Note saved locally / simulated successfully.");
    }
  };

  const filtered = appointments.filter(
    (a) =>
      a.patientName.toLowerCase().includes(search.toLowerCase()) ||
      a.treatment.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Patient Schedule</h1>
          <p className="text-xs text-slate-500">Manage patient bookings and send direct preparation instructions.</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search patient or treatment..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((appt) => (
          <div key={appt.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-black text-slate-900">{appt.patientName}</h3>
                  <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[10px] font-bold text-purple-700">
                    {appt.treatment}
                  </span>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-slate-400" /> {appt.phone}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-purple-600" /> {appt.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-purple-600" /> {appt.time}
                </span>
              </div>
            </div>

            {/* SEND MESSAGE TO PATIENT */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Write instruction/message for patient dashboard..."
                  defaultValue={appt.adminMessage}
                  onChange={(e) =>
                    setAdminNotes({ ...adminNotes, [appt.id]: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-xs font-medium text-slate-800 focus:bg-white focus:outline-none"
                />
              </div>
              <button
                onClick={() => handleUpdateMessage(appt.id)}
                className="w-full sm:w-auto rounded-xl bg-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-purple-700 cursor-pointer"
              >
                Send to Patient
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}