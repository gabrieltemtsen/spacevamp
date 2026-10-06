"use client";

import React, { useState } from "react";
import { useApp } from "@/lib/store";
import { 
  X, 
  Inbox, 
  Calendar, 
  Phone, 
  Mail, 
  Download, 
  CheckCircle, 
  Clock, 
  Filter,
  DollarSign,
  MapPin,
  ExternalLink
} from "lucide-react";

export default function AdminDrawer() {
  const { 
    isAdminOpen, 
    setIsAdminOpen, 
    inquiries, 
    consultations, 
    updateInquiryStatus, 
    updateConsultationStatus 
  } = useApp();

  const [activeTab, setActiveTab] = useState<"inquiries" | "consultations">("inquiries");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  if (!isAdminOpen) return null;

  const filteredInquiries = filterStatus === "all" 
    ? inquiries 
    : inquiries.filter(i => i.status === filterStatus);

  const filteredConsultations = filterStatus === "all"
    ? consultations
    : consultations.filter(c => c.status === filterStatus);

  const exportToCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    if (activeTab === "inquiries") {
      csvContent += "ID,Full Name,Email,Phone,Client Type,Service,Location,Budget,Scope,Status,Date\n";
      inquiries.forEach(i => {
        csvContent += `"${i.id}","${i.fullName}","${i.email}","${i.phone}","${i.clientType}","${i.serviceRequested}","${i.location}","${i.budgetRange || ''}","${i.projectScope.replace(/"/g, '""')}","${i.status}","${new Date(i.createdAt).toISOString()}"\n`;
      });
    } else {
      csvContent += "ID,Full Name,Email,Phone,Preferred Date,Time Slot,Mode,Space Type,Location,Status,Date\n";
      consultations.forEach(c => {
        csvContent += `"${c.id}","${c.fullName}","${c.email}","${c.phone}","${c.preferredDate}","${c.preferredTimeSlot}","${c.consultationMode}","${c.spaceType}","${c.propertyLocation}","${c.status}","${new Date(c.createdAt).toISOString()}"\n`;
      });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `spacevamp_${activeTab}_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#141519] border-l border-white/15 h-full flex flex-col text-white shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#18191d]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Spacevamp Inquiries Hub</span>
                <span className="text-[10px] font-mono uppercase bg-amber-500 text-zinc-950 font-bold px-1.5 py-0.5 rounded">
                  Live CRM
                </span>
              </h2>
              <p className="text-xs text-zinc-400">
                Incoming leads, bespoke quotes & consultation bookings
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportToCSV}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs flex items-center gap-1.5 transition-colors"
              title="Export as CSV"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab & Filter Bar */}
        <div className="p-4 border-b border-white/10 bg-[#121316] flex flex-wrap items-center justify-between gap-3">
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => { setActiveTab("inquiries"); setFilterStatus("all"); }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "inquiries"
                  ? "bg-amber-500 text-zinc-950 font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Quotes & Inquiries ({inquiries.length})</span>
            </button>
            <button
              onClick={() => { setActiveTab("consultations"); setFilterStatus("all"); }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "consultations"
                  ? "bg-amber-500 text-zinc-950 font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consultations ({consultations.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <Filter className="w-3.5 h-3.5 text-zinc-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-[#18191d] border border-white/20 rounded-lg px-2.5 py-1 text-xs text-zinc-200 focus:outline-none"
            >
              <option value="all">All Statuses</option>
              {activeTab === "inquiries" ? (
                <>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="quote_sent">Quote Sent</option>
                  <option value="closed">Closed</option>
                </>
              ) : (
                <>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                </>
              )}
            </select>
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {activeTab === "inquiries" ? (
            filteredInquiries.length === 0 ? (
              <div className="text-center py-16 text-zinc-500 text-sm">
                No inquiries matching this status.
              </div>
            ) : (
              filteredInquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="bg-[#18191d] border border-white/10 rounded-xl p-4 sm:p-5 space-y-3 hover:border-amber-400/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{inq.fullName}</h4>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                          {inq.clientType}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1">
                        <a href={`tel:${inq.phone}`} className="hover:text-amber-400 flex items-center gap-1">
                          <Phone className="w-3 h-3 text-amber-500" />
                          <span>{inq.phone}</span>
                        </a>
                        <a href={`mailto:${inq.email}`} className="hover:text-amber-400 flex items-center gap-1">
                          <Mail className="w-3 h-3 text-amber-500" />
                          <span>{inq.email}</span>
                        </a>
                      </div>
                    </div>

                    <select
                      value={inq.status}
                      onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                      className={`text-[11px] font-bold uppercase rounded-lg px-2.5 py-1 border focus:outline-none ${
                        inq.status === "new"
                          ? "bg-amber-500/20 text-amber-400 border-amber-500/40"
                          : inq.status === "quote_sent"
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/40"
                          : inq.status === "contacted"
                          ? "bg-purple-500/20 text-purple-400 border-purple-500/40"
                          : "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                      }`}
                    >
                      <option value="new" className="bg-zinc-900 text-white">New</option>
                      <option value="contacted" className="bg-zinc-900 text-white">Contacted</option>
                      <option value="quote_sent" className="bg-zinc-900 text-white">Quote Sent</option>
                      <option value="closed" className="bg-zinc-900 text-white">Closed</option>
                    </select>
                  </div>

                  <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-xs text-zinc-300 space-y-1">
                    <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3 text-amber-500" />
                        <span>{inq.location}</span>
                      </span>
                      {inq.budgetRange && (
                        <span className="text-amber-400 font-bold">{inq.budgetRange}</span>
                      )}
                    </div>
                    <p className="pt-1">{inq.projectScope}</p>
                    {inq.notes && (
                      <p className="text-zinc-400 italic pt-1 border-t border-white/5">
                        Notes: {inq.notes}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                    <span>Ref: {inq.id}</span>
                    <span>{new Date(inq.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              ))
            )
          ) : (
            filteredConsultations.length === 0 ? (
              <div className="text-center py-16 text-zinc-500 text-sm">
                No consultations found.
              </div>
            ) : (
              filteredConsultations.map((c) => (
                <div
                  key={c.id}
                  className="bg-[#18191d] border border-white/10 rounded-xl p-4 sm:p-5 space-y-3 hover:border-amber-400/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-white">{c.fullName}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1">
                        <a href={`tel:${c.phone}`} className="hover:text-amber-400 flex items-center gap-1">
                          <Phone className="w-3 h-3 text-amber-500" />
                          <span>{c.phone}</span>
                        </a>
                        <a href={`mailto:${c.email}`} className="hover:text-amber-400 flex items-center gap-1">
                          <Mail className="w-3 h-3 text-amber-500" />
                          <span>{c.email}</span>
                        </a>
                      </div>
                    </div>

                    <select
                      value={c.status}
                      onChange={(e) => updateConsultationStatus(c.id, e.target.value as any)}
                      className={`text-[11px] font-bold uppercase rounded-lg px-2.5 py-1 border focus:outline-none ${
                        c.status === "pending"
                          ? "bg-amber-500/20 text-amber-400 border-amber-500/40"
                          : c.status === "confirmed"
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                          : "bg-zinc-500/20 text-zinc-400 border-zinc-500/40"
                      }`}
                    >
                      <option value="pending" className="bg-zinc-900 text-white">Pending</option>
                      <option value="confirmed" className="bg-zinc-900 text-white">Confirmed</option>
                      <option value="completed" className="bg-zinc-900 text-white">Completed</option>
                    </select>
                  </div>

                  <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-xs text-zinc-300 space-y-1.5">
                    <div className="flex items-center justify-between text-amber-400 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{c.preferredDate}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{c.preferredTimeSlot}</span>
                      </span>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Space: <strong className="text-zinc-200">{c.spaceType}</strong> • Mode: <span className="uppercase text-amber-400">{c.consultationMode.replace('_', ' ')}</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Location: {c.propertyLocation}
                    </div>
                    {c.notes && (
                      <p className="text-zinc-400 italic pt-1 border-t border-white/5">
                        Notes: {c.notes}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                    <span>Booking Ref: {c.id}</span>
                    <span>{new Date(c.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              ))
            )
          )}
        </div>

      </div>
    </div>
  );
}
