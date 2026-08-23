import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  Calendar,
  UploadCloud,
  Users,
  LogOut,
  Stethoscope,
  LayoutDashboard,
  History
} from "lucide-react";

const doctorsList = [
  { id: "dr-anupriya", name: "Dr. Anupriya" },
  { id: "dr-ananya-iyer", name: "Dr. Ananya Iyer" },
  { id: "dr-meera-subramanian", name: "Dr. Meera Subramanian" },
  { id: "dr-arvind-kumar", name: "Dr. Arvind Kumar" },
  { id: "dr-sneha-n", name: "Dr. Sneha N" },
  { id: "dr-srinivas-rohit-ramanujam", name: "Dr. Srinivas Rohit" },
  { id: "dr-balu", name: "Dr. Balu" },
  { id: "dr-vikram-raj-kishore", name: "Dr. Vikram Raj Kishore" }
];

export default function DoctorDashboard({ onLogout }) {
  const navigate = useNavigate();

  const sidebarLinks = [
    { name: "Dashboard Home", path: "/doctor", icon: LayoutDashboard, end: true },
    { name: "Patient Schedule", path: "/doctor/schedule", icon: Calendar },
    { name: "Appointment History", path: "/doctor/history", icon: History },
    { name: "Upload Reports & Rx", path: "/doctor/upload", icon: UploadCloud },
    { name: "Manage Doctors", path: "/doctor/doctors", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 flex">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col justify-between p-6 shadow-xs overflow-y-auto max-h-[calc(100vh-80px)] sticky top-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shrink-0">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-900">Doctor Portal</h2>
              <p className="text-[10px] font-semibold text-purple-600">Sakthi Dental Clinic</p>
            </div>
          </div>

          {/* Core Navigation */}
          <nav className="space-y-1.5">
            <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-3 mb-1">Main Menu</p>
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                        : "text-slate-600 hover:bg-purple-50 hover:text-purple-700"
                    }`
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Individual Doctor Shortcuts */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-3 mb-2">Clinic Specialists</p>
            <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
              {doctorsList.map((doc) => (
                <NavLink
                  key={doc.id}
                  to={`/doctor/schedule?doctor=${encodeURIComponent(doc.name)}`}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 rounded-xl px-3 py-2 text-[11px] font-bold transition-colors ${
                      isActive
                        ? "bg-purple-50 text-purple-700 font-black"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`
                  }
                >
                  <div className="h-2 w-2 rounded-full bg-purple-400 shrink-0" />
                  <span className="truncate">{doc.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4 mt-6">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-xs font-bold text-red-600 transition-colors hover:bg-red-50 cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            Exit Portal
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 sm:p-10 max-w-6xl mx-auto overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}