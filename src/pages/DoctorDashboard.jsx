import React, { useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  Calendar,
  UploadCloud,
  Users,
  LogOut,
  Stethoscope,
  LayoutDashboard,
  History,
  Menu,
  X
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
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarLinks = [
    { name: "Dashboard Home", path: "/doctor", icon: LayoutDashboard, end: true },
    { name: "Patient Schedule", path: "/doctor/schedule", icon: Calendar },
    { name: "Appointment History", path: "/doctor/history", icon: History },
    { name: "Upload Reports & Rx", path: "/doctor/upload", icon: UploadCloud },
    { name: "Manage Doctors", path: "/doctor/doctors", icon: Users },
  ];

  // Close mobile menu automatically on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 flex flex-col md:flex-row relative">
      
      {/* MOBILE TOP NAVIGATION BAR */}
      <div className="md:hidden flex items-center justify-between bg-white border-b border-slate-200 px-4 py-3 sticky top-20 z-30 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white shadow-xs">
            <Stethoscope className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-xs font-black text-slate-900">Doctor Portal</h2>
            <p className="text-[9px] font-bold text-purple-600">Sakthi Dental Clinic</p>
          </div>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE BACKDROP OVERLAY */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/40 z-40 md:hidden backdrop-blur-xs transition-opacity"
        />
      )}

      {/* SIDEBAR NAVIGATION (Properly positioned below navbar) */}
      <aside className={`
        fixed md:sticky top-20 z-30 h-[calc(100vh-5rem)] w-72 bg-white border-r border-slate-200 
        flex flex-col justify-between p-6 shadow-xl md:shadow-xs transition-transform duration-300 ease-in-out
        overflow-y-auto
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className="space-y-6 pt-2">
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
            <div className="space-y-1 max-h-48 md:max-h-64 overflow-y-auto pr-1">
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
      <main className="flex-1 p-4 sm:p-6 md:p-10 max-w-6xl mx-auto w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}