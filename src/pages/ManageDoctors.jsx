import React, { useState, useEffect } from "react";
import { 
  Stethoscope, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Edit3, 
  Save, 
  Search,
  CalendarDays,
  Loader2
} from "lucide-react";
import { DOCTORS_DATA } from "../data/doctorsData";

const initialRooms = {
  "dr-anupriya": "Room 101",
  "dr-ananya-iyer": "Room 102",
  "dr-meera-subramanian": "Room 103",
  "dr-arvind-kumar": "Room 104",
  "dr-sneha-n": "Room 105",
  "dr-srinivas-rohit-ramanujam": "Room 106",
  "dr-balu": "Room 107",
  "dr-vikram-raj-kishore": "Room 108"
};

const initialAppointments = [
  { id: 101, doctorId: "dr-anupriya", patientName: "Rahul Sharma", time: "10:30 AM", status: "Confirmed" },
  { id: 102, doctorId: "dr-anupriya", patientName: "Priya Patel", time: "11:15 AM", status: "Pending" },
  { id: 103, doctorId: "dr-ananya-iyer", patientName: "Amit Kumar", time: "02:00 PM", status: "Pending" },
  { id: 104, doctorId: "dr-arvind-kumar", patientName: "Sneha Roy", time: "01:30 PM", status: "Confirmed" },
  { id: 105, doctorId: "dr-srinivas-rohit-ramanujam", patientName: "Karthik V", time: "11:00 AM", status: "Pending" }
];

export default function ManageDoctors() {
  const [doctors, setDoctors] = useState(() => {
    const saved = localStorage.getItem("sakthi_manage_doctors");
    if (saved) return JSON.parse(saved);
    return DOCTORS_DATA.map((doc) => ({
      ...doc,
      assignedRoom: initialRooms[doc.id] || "Room 100",
      customSchedule: doc.availableDays
    }));
  });

  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("sakthi_manage_appointments");
    return saved ? JSON.parse(saved) : initialAppointments;
  });

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [roomInput, setRoomInput] = useState("");
  const [scheduleInput, setScheduleInput] = useState("");

  // Save updates to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("sakthi_manage_doctors", JSON.stringify(doctors));
  }, [doctors]);

  useEffect(() => {
    localStorage.setItem("sakthi_manage_appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleEdit = (doc) => {
    setEditingId(doc.id);
    setRoomInput(doc.assignedRoom || "");
    setScheduleInput(doc.customSchedule || "");
  };

  const handleSave = (id) => {
    setDoctors(
      doctors.map((d) => 
        d.id === id ? { ...d, assignedRoom: roomInput, customSchedule: scheduleInput } : d
      )
    );
    setEditingId(null);
  };

  const handleStatusChange = (appId, newStatus) => {
    setAppointments(
      appointments.map((a) => (a.id === appId ? { ...a, status: newStatus } : a))
    );
  };

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="h-8 w-8 text-purple-600 animate-spin" />
        <p className="text-xs font-bold text-slate-500">Loading doctor profiles...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Doctors Directory & Management</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Manage consultation rooms, update schedules, and review patient appointments for Sakthi Dental Clinic specialists.
          </p>
        </div>
        
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by doctor name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-purple-600 shadow-2xs"
          />
        </div>
      </div>

      {/* Doctors Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDoctors.map((doc) => {
          const isEditing = editingId === doc.id;
          const docAppointments = appointments.filter((app) => app.doctorId === doc.id);

          return (
            <div key={doc.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between">
              <div>
                {/* Header Profile with Avatar */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-12 h-12 rounded-2xl object-cover border border-purple-100 shadow-sm shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-slate-900">{doc.name}</h3>
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                          ⭐ {doc.rating}
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-purple-700 mt-0.5">{doc.role}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{doc.qualifications} • {doc.experience}</p>
                    </div>
                  </div>

                  {!isEditing ? (
                    <button
                      onClick={() => handleEdit(doc)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-slate-600 hover:text-purple-700 hover:bg-purple-50 rounded-xl text-xs font-bold transition-colors cursor-pointer border border-slate-200 shrink-0"
                    >
                      <Edit3 className="h-3.5 w-3.5" /> Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSave(doc.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white rounded-xl text-xs font-bold transition-colors hover:bg-purple-700 cursor-pointer shadow-sm shrink-0"
                    >
                      <Save className="h-3.5 w-3.5" /> Save
                    </button>
                  )}
                </div>

                {/* Specialty Snippet */}
                <p className="text-xs text-slate-600 mt-3.5 line-clamp-2 bg-purple-50/40 p-2.5 rounded-xl border border-purple-100/50">
                  <span className="font-bold text-purple-900">Expertise: </span>{doc.specialty}
                </p>

                {/* Room & Schedule Editing Section */}
                <div className="mt-3.5 space-y-2.5 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="h-4 w-4 text-purple-600 shrink-0" />
                    <span className="font-semibold w-20">Room No:</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={roomInput}
                        onChange={(e) => setRoomInput(e.target.value)}
                        className="bg-white border border-slate-300 rounded px-2 py-1 text-xs font-bold text-slate-900 w-36 focus:outline-purple-600"
                      />
                    ) : (
                      <span className="font-bold text-slate-900 px-2 py-0.5 bg-white border border-slate-200 rounded-md shadow-2xs">
                        {doc.assignedRoom}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-slate-600">
                    <CalendarDays className="h-4 w-4 text-purple-600 shrink-0" />
                    <span className="font-semibold w-20">Schedule:</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={scheduleInput}
                        onChange={(e) => setScheduleInput(e.target.value)}
                        className="bg-white border border-slate-300 rounded px-2 py-1 text-xs font-medium text-slate-900 flex-1 focus:outline-purple-600"
                      />
                    ) : (
                      <span className="font-medium text-slate-700">{doc.customSchedule}</span>
                    )}
                  </div>
                </div>

                {/* Patient Appointments Queue */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Patient Appointments
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full">
                      {docAppointments.length} Active
                    </span>
                  </div>

                  {docAppointments.length === 0 ? (
                    <div className="text-center py-3 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-400">
                      No appointments booked for this specialist.
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                      {docAppointments.appMap || docAppointments.map((app) => (
                        <div key={app.id} className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200 text-xs shadow-2xs">
                          <div>
                            <p className="font-bold text-slate-800">{app.patientName}</p>
                            <p className="text-[10px] font-medium text-slate-500">Time: {app.time}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide ${
                                app.status === "Confirmed"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                                  : app.status === "Cancelled"
                                  ? "bg-red-50 text-red-700 border border-red-200/50"
                                  : "bg-amber-50 text-amber-700 border border-amber-200/50"
                              }`}
                            >
                              {app.status}
                            </span>

                            <div className="flex items-center gap-1 border-l border-slate-200 pl-1.5">
                              {app.status !== "Confirmed" && (
                                <button
                                  onClick={() => handleStatusChange(app.id, "Confirmed")}
                                  className="p-1 text-emerald-600 hover:bg-emerald-50 rounded transition-colors cursor-pointer"
                                  title="Confirm Appointment"
                                >
                                  <CheckCircle2 className="h-4 w-4" />
                                </button>
                              )}
                              {app.status !== "Cancelled" && (
                                <button
                                  onClick={() => handleStatusChange(app.id, "Cancelled")}
                                  className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer"
                                  title="Cancel Appointment"
                                >
                                  <XCircle className="h-4 w-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}