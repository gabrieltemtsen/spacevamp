"use client";

import React, { useState } from "react";
import { useApp } from "@/lib/store";
import { 
  Calculator, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Send, 
  ShieldCheck, 
  Coins, 
  Building, 
  Home, 
  Coffee, 
  Armchair,
  CheckCircle2
} from "lucide-react";

interface ItemOption {
  id: string;
  label: string;
  category: string;
  baseCost: number;
}

const AVAILABLE_ITEMS: ItemOption[] = [
  { id: "chef-kitchen", label: "Custom Chef Kitchen Cabinetry & Island", category: "residential", baseCost: 4500000 },
  { id: "walkin-closet", label: "Wall-to-Wall Fluted Walk-in Wardrobes", category: "residential", baseCost: 2800000 },
  { id: "iroko-dining", label: "10-12 Seater Solid Iroko Dining Suite", category: "residential", baseCost: 2400000 },
  { id: "living-suite", label: "Curved Sectional & Media Feature Joinery", category: "residential", baseCost: 3200000 },
  { id: "boardroom-table", label: "Monolithic 16-20 Person AV Boardroom Table", category: "corporate", baseCost: 3800000 },
  { id: "executive-suite", label: "Executive Desk + Fluted Storage Credenza", category: "corporate", baseCost: 2200000 },
  { id: "workstation-pods", label: "Modular 6-Person Ergonomic Team Workstation", category: "corporate", baseCost: 2900000 },
  { id: "reception-desk", label: "Curved Statement Reception Counter + Backlit Joinery", category: "corporate", baseCost: 1950000 },
  { id: "banquette-booths", label: "High-Traffic Commercial Banquette Booths (per 5m)", category: "hospitality", baseCost: 2100000 },
  { id: "spatial-3d-plan", label: "Full 3D Spatial Architecture & Lighting Design", category: "all", baseCost: 750000 },
];

export default function InteractiveEstimator() {
  const { addInquiry } = useApp();

  const [clientType, setClientType] = useState<string>("residential");
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "chef-kitchen", 
    "walkin-closet"
  ]);
  const [finishGrade, setFinishGrade] = useState<number>(1.0); // 1.0 standard, 1.25 premium hardwood + brass
  const [location, setLocation] = useState<string>("Abuja");
  
  // Contact details
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState("");

  const toggleItem = (itemId: string) => {
    setSelectedItems((prev) => 
      prev.includes(itemId) ? prev.filter(i => i !== itemId) : [...prev, itemId]
    );
  };

  // Calculate live estimate
  const rawTotal = selectedItems.reduce((sum, itemId) => {
    const item = AVAILABLE_ITEMS.find(i => i.id === itemId);
    return sum + (item ? item.baseCost : 0);
  }, 0);

  const estimatedTotal = Math.round(rawTotal * finishGrade);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    setSubmitting(true);
    try {
      const selectedLabels = selectedItems
        .map(id => AVAILABLE_ITEMS.find(i => i.id === id)?.label)
        .filter(Boolean) as string[];

      const id = await addInquiry({
        fullName,
        email,
        phone,
        clientType,
        serviceRequested: "bespoke_furniture_and_interior",
        location,
        projectScope: `Selected: ${selectedLabels.join(", ")}`,
        budgetRange: `Estimated: ₦${estimatedTotal.toLocaleString()}`,
        targetTimeline: "Standard (3-5 Weeks)",
        estimatedCost: estimatedTotal,
        selectedItems: selectedLabels,
        notes: notes || "Submitted via Online Interactive Estimator",
      });

      setSubmittedId(id);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="estimator" className="py-24 bg-[#141519] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Instant Bespoke Furniture & Space Budget Builder
          </h2>
          <p className="mt-4 text-base text-zinc-300">
            Configure your project scope, choose your desired joinery pieces, and get an immediate, transparent factory-direct estimation in Nigerian Naira (₦).
          </p>
        </div>

        {/* The Estimator Card */}
        <div className="bg-[#1a1b20] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Quotation Request Submitted Successfully!
              </h3>
              <p className="text-zinc-300 max-w-lg mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Your customized project estimate of{" "}
                <span className="text-amber-400 font-bold">₦{estimatedTotal.toLocaleString()}</span> has been routed to our Abuja engineering desk.
              </p>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 max-w-md mx-auto text-xs text-zinc-400">
                <span className="block font-mono text-zinc-300">Reference: {submittedId}</span>
                <span className="mt-1 block">A senior Spacevamp designer will reach out within 24 hours to schedule technical measurements.</span>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  Configure Another Estimate
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Client Type */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono flex items-center gap-2">
                  <span>1. Select Project Sector</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "residential", label: "Residential Home / Villa", icon: <Home className="w-4 h-4" /> },
                    { id: "corporate", label: "Corporate Office Fit-Out", icon: <Building className="w-4 h-4" /> },
                    { id: "hospitality", label: "Hospitality & Restaurant", icon: <Coffee className="w-4 h-4" /> },
                    { id: "developer", label: "Developer Multi-Unit", icon: <Armchair className="w-4 h-4" /> },
                  ].map((type) => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setClientType(type.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all ${
                        clientType === type.id
                          ? "bg-amber-500 text-zinc-950 border-amber-400 font-bold shadow-md"
                          : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {type.icon}
                      <span>{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                    2. Choose Bespoke Elements & Joinery
                  </label>
                  <span className="text-[11px] text-zinc-400">
                    {selectedItems.length} items selected
                  </span>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {AVAILABLE_ITEMS.map((item) => {
                    const isSelected = selectedItems.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-amber-500/15 border-amber-500/60 text-white"
                            : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                            isSelected ? "bg-amber-500 border-amber-400 text-zinc-950" : "border-zinc-500 bg-transparent"
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                        </div>
                        <span className="text-xs font-mono text-zinc-400 shrink-0 ml-2">
                          ~₦{(item.baseCost / 1000000).toFixed(1)}M
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Material Spec & Location */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                    3. Timber & Finish Specification
                  </label>
                  <select
                    value={finishGrade}
                    onChange={(e) => setFinishGrade(parseFloat(e.target.value))}
                    className="w-full bg-[#121316] border border-white/20 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value={1.0}>Standard Architectural Hardwoods & Matte Finishes (1.0x)</option>
                    <option value={1.2}>Premium Kiln-Dried Nigerian Iroko + Brushed Brass (1.2x)</option>
                    <option value={1.35}>Executive Fluted Walnut + Italian Quartz + Motorized AV (1.35x)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                    4. Project Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#121316] border border-white/20 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Abuja">Abuja, FCT (Local Factory Delivery)</option>
                    <option value="Lagos">Lagos State (Turnkey Installation Crew)</option>
                    <option value="Port Harcourt">Port Harcourt, Rivers State</option>
                    <option value="Other">Other States Across Nigeria</option>
                  </select>
                </div>
              </div>

              {/* Live Estimate Result Banner */}
              <div className="bg-gradient-to-r from-amber-500/20 via-white/5 to-amber-500/20 border border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block">
                    Estimated Factory-Direct Investment
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    ₦{estimatedTotal.toLocaleString()}{" "}
                    <span className="text-xs font-normal text-zinc-400 font-sans">
                      (Approximate Nigerian Naira)
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-1">
                    Includes in-house manufacturing, joinery hardware, multi-coat finish, and factory testing.
                  </p>
                </div>

                <div className="text-right sm:text-right shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Smart Value Guarantee</span>
                  </span>
                </div>
              </div>

              {/* Step 5: Contact info to lock in quotation */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                  5. Send Official Engineering Specs & Site Survey Request
                </h4>
                
                <div className="grid sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-[#121316] border border-white/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#121316] border border-white/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#121316] border border-white/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Additional details (e.g. room dimensions, timeline, preferred wood stains)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#121316] border border-white/20 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-zinc-400">
                    No spam. Your inquiry is recorded directly in our Spacevamp project database.
                  </span>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Calculating & Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit for Detailed Quotation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
