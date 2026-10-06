"use client";

import React, { useState } from "react";
import { useApp } from "@/lib/store";
import { 
  X, 
  Calculator, 
  CheckCircle2, 
  Send,
  Building,
  Home,
  Check
} from "lucide-react";

export default function QuoteModal() {
  const { isQuoteModalOpen, setIsQuoteModalOpen, addInquiry } = useApp();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [clientType, setClientType] = useState("residential");
  const [serviceRequested, setServiceRequested] = useState("bespoke_furniture");
  const [location, setLocation] = useState("Abuja, FCT");
  const [budgetRange, setBudgetRange] = useState("₦3,000,000 - ₦7,000,000");
  const [projectScope, setProjectScope] = useState("");
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState("");

  if (!isQuoteModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    setSubmitting(true);
    try {
      const id = await addInquiry({
        fullName,
        email,
        phone,
        clientType,
        serviceRequested,
        location,
        projectScope: projectScope || "General Custom Furniture & Interior Inquiries",
        budgetRange,
        targetTimeline: "Standard (3-4 Weeks)",
        notes,
      });
      setSubmittedId(id);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsQuoteModalOpen(false);
    setSubmittedId("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#18191d] border border-white/20 rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full border border-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedId ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Official Quotation Request Received!
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-white">{fullName}</strong>. Our engineering & estimating department will formulate an itemized bill of quantities for your project.
            </p>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-zinc-400 max-w-sm mx-auto font-mono">
              Quotation Lead Ref: {submittedId}
            </div>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-1.5 mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold font-mono">
                <Calculator className="w-3.5 h-3.5" />
                <span>Fast-Track Engineering Quote</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Request a Custom Project Quotation
              </h2>
              <p className="text-xs text-zinc-300">
                Direct manufacturing pricing from our Abuja joinery facility. No imported middleman fees.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category */}
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setServiceRequested("bespoke_furniture")}
                  className={`py-2 px-3 rounded-lg border text-center transition-all ${
                    serviceRequested === "bespoke_furniture"
                      ? "bg-amber-500 text-zinc-950 border-amber-400 font-bold"
                      : "bg-white/5 text-zinc-300 border-white/10"
                  }`}
                >
                  Bespoke Furniture
                </button>
                <button
                  type="button"
                  onClick={() => setServiceRequested("turnkey_fitout")}
                  className={`py-2 px-3 rounded-lg border text-center transition-all ${
                    serviceRequested === "turnkey_fitout"
                      ? "bg-amber-500 text-zinc-950 border-amber-400 font-bold"
                      : "bg-white/5 text-zinc-300 border-white/10"
                  }`}
                >
                  Turnkey Interior Fit-out
                </button>
              </div>

              {/* Personal info */}
              <div className="grid sm:grid-cols-3 gap-2.5">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Location & Budget */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Project Location:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maitama, Abuja or Ikeja, Lagos"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Estimated Budget Range (₦):
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="₦1,500,000 - ₦3,500,000">₦1.5M – ₦3.5M (Single Pieces / Rooms)</option>
                    <option value="₦3,500,000 - ₦8,000,000">₦3.5M – ₦8M (Living / Executive Suites)</option>
                    <option value="₦8,000,000 - ₦20,000,000">₦8M – ₦20M (Full Residence / Offices)</option>
                    <option value="₦20,000,000+">₦20M+ (Turnkey Estate / Commercial HQ)</option>
                  </select>
                </div>
              </div>

              {/* Project Scope Description */}
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-zinc-400">
                  Project Description & Specifications:
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="List the furniture pieces or interior spaces you need built (e.g. 10-seater dining table, fluted kitchen island, 20 office workstations)..."
                  value={projectScope}
                  onChange={(e) => setProjectScope(e.target.value)}
                  className="w-full bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Processing Specifications...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request For Quotation</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
