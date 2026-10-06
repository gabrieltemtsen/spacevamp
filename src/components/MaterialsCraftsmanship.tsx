"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MATERIALS_LIBRARY, MaterialItem } from "@/data/materials";
import { 
  Trees, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  MapPin, 
  Layers,
  Award
} from "lucide-react";

export default function MaterialsCraftsmanship() {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("iroko");
  const activeMaterial = MATERIALS_LIBRARY.find(m => m.id === selectedMaterialId) || MATERIALS_LIBRARY[0];

  return (
    <section id="materials" className="py-24 bg-[#121316] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trees className="w-3.5 h-3.5" />
            <span>African Identity & Raw Material Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Honest Materials. Master Craftsmanship.
          </h2>
          <p className="mt-4 text-base text-zinc-300">
            A furniture piece is only as permanent as the materials selected. We champion sustainably harvested Nigerian hardwoods, aerospace-grade powder-coated steel, and eco-certified hardwax finishes.
          </p>
        </div>

        {/* Materials selector tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {MATERIALS_LIBRARY.map((mat) => {
            const isSelected = mat.id === selectedMaterialId;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterialId(mat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? "bg-amber-500 text-zinc-950 border-amber-400 shadow-md shadow-amber-500/20"
                    : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {mat.name.split(" ")[0]} {mat.name.split(" ")[1] || ""}
              </button>
            );
          })}
        </div>

        {/* Deep Dive Material Card */}
        <div className="bg-[#18191d] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-xl group">
                <Image
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase bg-black/60 px-2 py-0.5 rounded text-amber-400 border border-white/10">
                    {activeMaterial.category}
                  </span>
                  <span className="text-xs text-zinc-300 font-medium">
                    {activeMaterial.durabilityRating}
                  </span>
                </div>
              </div>
            </div>

            {/* Material Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-mono mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Origin: {activeMaterial.origin}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {activeMaterial.name}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {activeMaterial.description}
                </p>
              </div>

              {/* Characteristics */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
                  Engineered Properties:
                </h4>
                <div className="grid sm:grid-cols-1 gap-2 pt-1">
                  {activeMaterial.characteristics.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Applications & Durability */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-mono">
                    Ideal Applications
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {activeMaterial.bestUsedFor}
                  </span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-mono">
                    Longevity Rating
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300">
                    {activeMaterial.durabilityRating}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
