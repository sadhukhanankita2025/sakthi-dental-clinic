import React, { useState } from "react";
import { motion } from "motion/react";
import { UploadCloud, FileText, CheckCircle2, User, Calendar } from "lucide-react";
import { TREATMENTS_DATA } from "../data/treatmentsData";

export default function DoctorUploadReport() {
  const [formData, setFormData] = useState({
    patientEmail: "",
    title: "",
    type: "Prescription",
    doctor: "Dr. Sakthi Saravanan",
    date: new Date().toISOString().split("T")[0],
    file: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate file upload API call
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1000);
    } catch (err) {
      setLoading(false);
      alert("Error uploading file.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Upload Report & Prescription</h1>
        <p className="text-xs text-slate-500">Securely push digital prescriptions and scan results to a patient's portal.</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        {success ? (
          <div className="py-12 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Document Uploaded Successfully!</h3>
            <p className="text-xs text-slate-500">The patient can now access this file from their "Reports & Prescription" page.</p>
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({
                  patientEmail: "",
                  title: "",
                  type: "Prescription",
                  doctor: "Dr. Sakthi Saravanan",
                  date: new Date().toISOString().split("T")[0],
                  file: null,
                });
              }}
              className="rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-bold text-white hover:bg-slate-800 cursor-pointer"
            >
              Upload Another Document
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-700">
                Patient Email or Phone Identifier *
              </label>
              <input
                type="text"
                required
                placeholder="patient@email.com"
                value={formData.patientEmail}
                onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-xs font-medium text-slate-800 focus:bg-white focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Document Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Post-Op Crown Prescription"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-xs font-medium text-slate-800 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Document Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-xs font-medium text-slate-800 focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="Prescription">Prescription</option>
                  <option value="Radiology">Radiology / X-Ray Scan</option>
                  <option value="Lab Report">Lab Report</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-700">
                Upload PDF / Scan File *
              </label>
              <input
                type="file"
                required
                accept=".pdf,.jpg,.png"
                onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2 text-xs text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-purple-600/25 transition-all hover:opacity-95"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <UploadCloud className="h-4 w-4" />
                  <span>Publish to Patient Portal</span>
                </>
              )}
            </motion.button>
          </form>
        )}
      </div>
    </div>
  );
}