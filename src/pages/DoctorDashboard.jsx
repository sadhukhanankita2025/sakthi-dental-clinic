import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  Calendar,
  UploadCloud,
  Users,
  LogOut,
  Stethoscope,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";

export default function DoctorDashboard({ onLogout }) {
  const navigate = useNavigate();

  const sidebarLinks = [
    { name: "Patient Schedule", path: "/doctor/schedule", icon: Calendar },
    { name: "Upload Reports & Rx", path: "/doctor/upload", icon: UploadCloud },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 flex">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col justify-between p-6 shadow-xs">
        <div>
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-900">Doctor Portal</h2>
              <p className="text-[10px] font-semibold text-purple-600">Sakthi Dental Clinic</p>
            </div>
          </div>

          <nav className="space-y-1.5">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                        : "text-slate-600 hover:bg-purple-50 hover:text-purple-700"
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-slate-100 pt-4">
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