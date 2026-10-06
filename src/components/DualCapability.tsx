"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Compass, 
  Hammer, 
  Check, 
  ArrowRight, 
  Layers, 
  Sparkles,
  Maximize2,
  Box,
  Cpu
} from "lucide-react";
import { useApp } from "@/lib/store";

export default function DualCapability() {
  const { setIsQuoteModalOpen, setIsConsultationModalOpen } = useApp();
  const [activeTab, setActiveTab] = useState<"interior" | "furniture">("interior");

  return (
    <section id="capabilities" className="py-20 bg-zinc-950 text-white relative border-t border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>The Spacevamp Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Two Complementary Disciplines. One Seamless Solution.
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Most decorators purchase ready-made imports that rarely fit the architectural soul of a room. 
            Most carpenters build furniture without spatial vision. <strong className="text-white">Spacevamp brings both together</strong>.
          </p>
        </div>

        {/* Tab Switcher for Quick Exploration */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 p-1 rounded-xl border border-white/10 flex max-w-md w-full">
            <button
              onClick={() => setActiveTab("interior")}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === "interior"
                  ? "bg-amber-500 text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>1. Interior Design & Spatial</span>
            </button>
            <button
              onClick={() => setActiveTab("furniture")}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === "furniture"
                  ? "bg-amber-500 text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Hammer className="w-4 h-4" />
              <span>2. Furniture Manufacturing</span>
            </button>
          </div>
        </div>

        {/* Dual Side-by-Side Deep Dive Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: Interior Design & Spatial Solutions */}
          <div className={`rounded-2xl p-6 sm:p-8 transition-all border ${
            activeTab === "interior"
              ? "bg-[#18191d] border-amber-500/40 ring-1 ring-amber-500/20 shadow-xl"
              : "bg-[#141518] border-white/10 opacity-90"
          }`}>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">Discipline 01</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Interior Design & Spatial Solutions
            </h3>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              We design from first principles — assessing light, acoustics, functional zones, and human movement. We craft holistic environments that are beautiful, purposeful, and practical.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Architectural space planning & ergonomic layouts",
                "Photorealistic 4K 3D visualization & virtual tours",
                "Curated color schemes & African contemporary textures",
                "Lighting, MEP, and acoustic ceiling integration",
                "On-site site supervision & contractor management"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                alt="Spacevamp Interior Design"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs text-zinc-300">
                Residential Spatial Concept • Abuja FCT
              </div>
            </div>

            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors"
            >
              <span>Consult On Space Planning</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Pillar 2: Furniture Design & Manufacturing */}
          <div className={`rounded-2xl p-6 sm:p-8 transition-all border ${
            activeTab === "furniture"
              ? "bg-[#18191d] border-amber-500/40 ring-1 ring-amber-500/20 shadow-xl"
              : "bg-[#141518] border-white/10 opacity-90"
          }`}>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">Discipline 02</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Furniture Design & In-House Manufacturing
            </h3>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              We own the machinery, the joinery benches, and the spray booths. We source seasoned local hardwoods and custom-extrude metal bases, building bespoke pieces engineered for decades of real life.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Kiln-dried Nigerian Iroko, Obeche, and hardwood joinery",
                "Precision CNC routing and architectural steel fabrication",
                "Multi-coat dust-free polyurethane & hardwax oil finishing",
                "Bespoke boardroom tables, ergonomic workstations, and credenzas",
                "Custom kitchens, walk-in closets, and hotel seating"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                alt="Spacevamp Furniture Joinery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs text-zinc-300">
                Joinery & Metal Fabrication • Idu Workshop Abuja
              </div>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span>Request Bespoke Furniture Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* The Coordinated Transformation Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/15 via-white/5 to-amber-500/15 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Not Just Decorating. Not Just Carpentry. Coordinated Space Transformation.</span>
            </h4>
            <p className="text-sm text-zinc-300 max-w-2xl">
              By controlling both the spatial design and the manufacturing process, your finished space matches the approved 3D renders with zero finger-pointing and zero subcontractor delays.
            </p>
          </div>
          <button
            onClick={() => setIsConsultationModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider shrink-0 hover:bg-zinc-200 transition-colors"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
