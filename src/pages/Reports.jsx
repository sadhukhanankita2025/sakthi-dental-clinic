import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  Download,
  Eye,
  Calendar,
  User,
  Stethoscope,
  Lock,
  Sparkles,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Reports({
  isLoggedIn = false,
  user = null,
  onOpenAuth = () => {},
}) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // FETCH USER REPORTS & PRESCRIPTIONS FROM DATABASE
  // =====================================================
  const fetchReports = async () => {
    if (!isLoggedIn || !user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const userIdentifier = user.email || user.phone || "";
      const response = await fetch(
        `http://localhost:5000/api/my-reports?query=${encodeURIComponent(
          userIdentifier
        )}`
      );

      if (response.ok) {
        const data = await response.json();
        setReports(data);
      } else {
        // Fallback sample records if endpoint isn't created on backend yet
        setReports(getMockReports(user?.name));
      }
    } catch (error) {
      console.warn("Using sample report records:", error);
      setReports(getMockReports(user?.name));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [isLoggedIn, user]);

  // =====================================================
  // NOT LOGGED IN STATE
  // =====================================================
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
              Access Medical Records
            </h2>

            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Please sign in securely to view your digital prescriptions, treatment notes, and dental scan reports.
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
        {/* PAGE HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-purple-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              Secure Patient Portal
            </div>
            <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Reports & Prescriptions
            </h1>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              View and download your official doctor prescriptions and consultation summaries.
            </p>
          </div>

          <button
            onClick={fetchReports}
            className="flex items-center gap-1.5 self-start rounded-xl border border-purple-100 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-colors hover:bg-purple-50 cursor-pointer"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh Records
          </button>
        </div>

        {/* REPORTS LIST */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="h-36 w-full animate-pulse rounded-3xl border border-purple-100 bg-white/70"
              />
            ))}
          </div>
        ) : reports.length === 0 ? (
          <div className="rounded-3xl border border-purple-100 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
              <FileText className="h-7 w-7" />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              No Reports Available
            </h3>
            <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
              There are no medical prescriptions or scan reports uploaded to your account yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {reports.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}

// =====================================================
// INDIVIDUAL REPORT CARD COMPONENT
// =====================================================
function ReportCard({ report }) {
  const handleView = () => {
    alert(`Opening preview for: ${report.title}`);
  };

  const handleDownload = () => {
    alert(`Downloading ${report.title}...`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="flex flex-col gap-4 rounded-3xl border border-purple-100 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-start gap-3.5">
        <div className="rounded-2xl bg-purple-100 p-3 text-purple-600">
          <FileText className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
              {report.title}
            </h3>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
              {report.type || "Prescription"}
            </span>
          </div>

          <p className="text-xs font-semibold text-purple-700">
            Specialist: {report.doctor}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {report.date}
            </span>
            <span>•</span>
            <span>{report.fileSize || "1.2 MB"}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center">
        <button
          onClick={handleView}
          className="inline-flex items-center gap-1.5 rounded-xl border border-purple-200 bg-purple-50 px-3.5 py-2 text-xs font-bold text-purple-700 transition-colors hover:bg-purple-100 cursor-pointer"
        >
          <Eye className="h-3.5 w-3.5" />
          View
        </button>

        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-1.5 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Download className="h-3.5 w-3.5" />
          Download PDF
        </button>
      </div>
    </motion.div>
  );
}

// Fallback preview data
function getMockReports(patientName = "Patient") {
  return [
    {
      id: 1,
      title: "Root Canal Post-Op Prescription",
      type: "Prescription",
      doctor: "Dr. Sakthi Saravanan",
      date: "2026-02-14",
      fileSize: "450 KB",
    },
    {
      id: 2,
      title: "Full Mouth Dental X-Ray Scan Report",
      type: "Radiology",
      doctor: "Dr. Ananya Iyer",
      date: "2026-01-10",
      fileSize: "3.4 MB",
    },
  ];
}