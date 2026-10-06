"use client";

import React, { useState } from "react";
import { useApp } from "@/lib/store";
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Send,
  Building,
  Home,
  Compass,
  Sparkles
} from "lucide-react";
import { BRAND } from "@/data/brand";

export default function ConsultationModal() {
  const { isConsultationModalOpen, setIsConsultationModalOpen, addConsultation } = useApp();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTimeSlot, setPreferredTimeSlot] = useState("10:00 AM - 12:00 PM");
  const [consultationMode, setConsultationMode] = useState("on_site");
  const [spaceType, setSpaceType] = useState("Residential Villa / Apartment");
  const [propertyLocation, setPropertyLocation] = useState("Abuja, FCT");
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submittedBookingId, setSubmittedBookingId] = useState("");

  if (!isConsultationModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !preferredDate) return;

    setSubmitting(true);
    try {
      const id = await addConsultation({
        fullName,
        email,
        phone,
        preferredDate,
        preferredTimeSlot,
        consultationMode,
        spaceType,
        propertyLocation,
        notes,
      });
      setSubmittedBookingId(id);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsConsultationModalOpen(false);
    setSubmittedBookingId("");
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

        {submittedBookingId ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Consultation Scheduled!
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-white">{fullName}</strong>. Our senior spatial architect will confirm your session for{" "}
              <span className="text-amber-400 font-bold">{preferredDate} ({preferredTimeSlot})</span>.
            </p>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-zinc-400 max-w-sm mx-auto font-mono">
              Booking Ref: {submittedBookingId}
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
                <Calendar className="w-3.5 h-3.5" />
                <span>Spacevamp Design Desk</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Book a Design & Spatial Consultation
              </h2>
              <p className="text-xs text-zinc-300">
                Discuss your architectural floorplan, bespoke furniture needs, or corporate workspace layout with our design directors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Consultation Mode */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-zinc-400">
                  Consultation Format:
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                  {[
                    { id: "on_site", label: "On-Site Visit" },
                    { id: "abuja_studio", label: "Abuja Studio" },
                    { id: "virtual_video", label: "Virtual 3D Call" },
                  ].map((mode) => (
                    <button
                      type="button"
                      key={mode.id}
                      onClick={() => setConsultationMode(mode.id)}
                      className={`py-2 px-2 rounded-lg border text-center transition-all ${
                        consultationMode === mode.id
                          ? "bg-amber-500 text-zinc-950 border-amber-400 font-bold"
                          : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Space Type & Location */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Space Type:
                  </label>
                  <select
                    value={spaceType}
                    onChange={(e) => setSpaceType(e.target.value)}
                    className="w-full bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Residential Villa / Apartment">Residential Villa / Apartment</option>
                    <option value="Corporate Office Headquarters">Corporate Office Headquarters</option>
                    <option value="Hospitality Restaurant / Hotel">Hospitality Restaurant / Hotel</option>
                    <option value="Property Developer Multi-Unit">Property Developer Multi-Unit</option>
                    <option value="Single Bespoke Furniture Commission">Single Bespoke Furniture Commission</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Property Location:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maitama, Abuja or Ikoyi, Lagos"
                    value={propertyLocation}
                    onChange={(e) => setPropertyLocation(e.target.value)}
                    className="w-full bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Preferred Date: *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-400">
                    Preferred Time Slot:
                  </label>
                  <select
                    value={preferredTimeSlot}
                    onChange={(e) => setPreferredTimeSlot(e.target.value)}
                    className="w-full bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM (Morning)</option>
                    <option value="11:30 AM - 01:30 PM">11:30 AM - 01:30 PM (Midday)</option>
                    <option value="02:30 PM - 04:30 PM">02:30 PM - 04:30 PM (Afternoon)</option>
                    <option value="05:00 PM - 06:30 PM">05:00 PM - 06:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid sm:grid-cols-3 gap-2.5">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
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

              {/* Notes */}
              <div className="space-y-1">
                <textarea
                  rows={2}
                  placeholder="Briefly describe your objectives or questions for the consultation..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#121316] border border-white/20 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Securing Schedule...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Consultation Booking</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-zinc-400 text-center">
                Need urgent on-site measurement in Abuja? Call{" "}
                <a href={`tel:${BRAND.contact.phone}`} className="text-amber-400 font-semibold underline">
                  {BRAND.contact.phone}
                </a>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
