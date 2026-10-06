"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EXECUTION_PROCESS, ProcessStep } from "@/data/process";
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Cpu, 
  Workflow,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function ProcessPipeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep: ProcessStep = EXECUTION_PROCESS[activeStepIndex];

  return (
    <section id="process" className="py-24 bg-[#121316] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Demonstrated Manufacturing Capability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The 5-Stage Execution Pipeline
          </h2>
          <p className="mt-4 text-base text-zinc-300">
            We don’t order flat-pack imports or leave installations to untrained subcontractors. 
            Here is how your project moves with engineering rigor from first sketch to keys-in-hand.
          </p>
        </div>

        {/* Step Progression Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {EXECUTION_PROCESS.map((item, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 sm:p-4 rounded-xl text-left transition-all border relative overflow-hidden ${
                  isActive
                    ? "bg-amber-500 text-zinc-950 border-amber-400 shadow-lg shadow-amber-500/20"
                    : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isActive ? "text-zinc-900" : "text-amber-400"
                  }`}>
                    Stage 0{item.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-zinc-950" />}
                </div>
                <div className={`text-xs sm:text-sm font-bold truncate ${isActive ? "text-zinc-950" : "text-white"}`}>
                  {item.title.split("&")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="bg-[#18191d] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 font-mono">
                    STAGE 0{activeStep.step} OF 05
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Typical Duration: {activeStep.duration}</span>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {activeStep.title}
                </h3>
                <p className="text-sm font-medium text-amber-400">
                  {activeStep.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Activities list */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Key Technical Activities & Milestones:
                </h4>
                <div className="grid sm:grid-cols-1 gap-2">
                  {activeStep.activities.map((act, actIdx) => (
                    <div key={actIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Deliverables & Engineering Pillar */}
              <div className="pt-4 border-t border-white/10 grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-mono">
                    Tangible Deliverable
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {activeStep.deliverable}
                  </span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-mono">
                    Technical Discipline
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300">
                    {activeStep.engineeringPillar}
                  </span>
                </div>
              </div>

              {/* Next/Previous Controls */}
              <div className="pt-2 flex items-center gap-3">
                {activeStepIndex > 0 && (
                  <button
                    onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-zinc-300 border border-white/10"
                  >
                    ← Previous Stage
                  </button>
                )}
                {activeStepIndex < EXECUTION_PROCESS.length - 1 ? (
                  <button
                    onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                    className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-xs font-bold text-zinc-950 flex items-center gap-1 shadow"
                  >
                    <span>Next: {EXECUTION_PROCESS[activeStepIndex + 1].title.split("&")[0]}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Finished Space Handed Over to Client</span>
                  </span>
                )}
              </div>

            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden border border-white/15 shadow-xl bg-zinc-900 group">
                <Image
                  src={activeStep.image}
                  alt={activeStep.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">
                    Spacevamp Factory & Site Ops
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {activeStep.engineeringPillar}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
