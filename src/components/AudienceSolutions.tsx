"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TARGET_AUDIENCES } from "@/data/services";
import { useApp } from "@/lib/store";
import { 
  Home, 
  Building2, 
  HardHat, 
  Coffee, 
  Compass, 
  Check, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function AudienceSolutions() {
  const [selectedAudienceId, setSelectedAudienceId] = useState("residential");
  const { setIsConsultationModalOpen, setIsQuoteModalOpen } = useApp();

  const activeAudience = TARGET_AUDIENCES.find(a => a.id === selectedAudienceId) || TARGET_AUDIENCES[0];

  const iconMap: Record<string, React.ReactNode> = {
    residential: <Home className="w-4 h-4" />,
    corporate: <Building2 className="w-4 h-4" />,
    developers: <HardHat className="w-4 h-4" />,
    hospitality: <Coffee className="w-4 h-4" />,
    architects: <Compass className="w-4 h-4" />,
  };

  return (
    <section id="solutions" className="py-24 bg-[#141519] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Solutions By Sector</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Designed for How You Live, Work & Build
          </h2>
          <p className="mt-4 text-base text-zinc-300">
            Whether you are furnishing a private penthouse, fitting out a multinational corporate headquarters, 
            or fitting 40 developer apartments, Spacevamp provides dedicated engineering and bespoke joinery packages.
          </p>
        </div>

        {/* Audience Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {TARGET_AUDIENCES.map((aud) => {
            const isSelected = aud.id === selectedAudienceId;
            return (
              <button
                key={aud.id}
                onClick={() => setSelectedAudienceId(aud.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? "bg-amber-500 text-zinc-950 border-amber-400 shadow-md shadow-amber-500/20"
                    : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {iconMap[aud.id]}
                <span>{aud.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Audience Showcase Card */}
        <div className="bg-[#1a1b20] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-xl group">
                <Image
                  src={activeAudience.image}
                  alt={activeAudience.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold">
                    Target Sector
                  </span>
                  <div className="text-base font-bold text-white">
                    {activeAudience.subtitle}
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Tailored Services */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  {activeAudience.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeAudience.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {activeAudience.description}
                </p>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
                  Primary Offerings & Capabilities:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                  {activeAudience.services.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-lg border border-white/5 text-xs sm:text-sm text-zinc-200">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-md transition-colors flex items-center gap-2"
                >
                  <span>{activeAudience.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-colors"
                >
                  Request Direct Quotation
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
