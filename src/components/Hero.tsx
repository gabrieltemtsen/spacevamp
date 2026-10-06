"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "@/lib/store";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Hammer, 
  ShieldCheck, 
  Compass,
  Building2,
  Calendar
} from "lucide-react";
import { BRAND } from "@/data/brand";

export default function Hero() {
  const { setIsConsultationModalOpen, setIsQuoteModalOpen } = useApp();

  return (
    <section className="relative bg-[#121316] text-white pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Subtle architectural ambient backdrop */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vision, Tagline, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Brand positioning badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Nigerian Design Studio & Direct In-House Joinery</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              We don&apos;t simply furnish spaces. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                We understand spaces, design solutions & make things that work.
              </span>
            </h1>

            {/* Sub-headline directly reflecting PDF */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              <strong className="text-white font-medium">Spacevamp Designs Limited</strong> bridges 
              spatial interior architecture with precision factory joinery. Influenced by African culture 
              and engineered with contemporary excellence, we move seamlessly from concept to factory production and finished space.
            </p>

            {/* Key Value Proposition Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Dual Capability</h4>
                  <p className="text-[11px] text-zinc-400">Design studio + factory</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <Hammer className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Direct Production</h4>
                  <p className="text-[11px] text-zinc-400">No imported markups</p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Smart Value</h4>
                  <p className="text-[11px] text-zinc-400">Quality without excess</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:translate-y-[-1px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <span>Instant Cost Estimator</span>
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-zinc-300 hover:text-amber-400 font-medium text-sm transition-colors"
              >
                <span>Explore Portfolio</span>
                <span className="text-xs">↓</span>
              </a>
            </div>

            {/* Trust validation */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Manufactured in Abuja</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Nationwide Installation</span>
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>5-Year Structural Warranty</span>
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Hero Visual with Dynamic Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-900 group">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                  alt="Spacevamp Bespoke Living and Custom Joinery"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Gradient overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Corner emblem stamp */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl flex items-center gap-2.5">
                  <div className="relative h-4 w-24">
                    <Image
                      src="/logos/spacevamp-wordmark-white.png"
                      alt="Spacevamp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-amber-400 uppercase border-l border-white/20 pl-2">
                    Direct Joinery
                  </span>
                </div>

                {/* Bottom Architectural Caption Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#18191d]/90 backdrop-blur-md border border-white/15 p-4 rounded-xl space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-semibold uppercase tracking-wider text-[10px]">
                      Case Study • Abuja FCT
                    </span>
                    <span className="text-zinc-400 text-[11px]">850 sqm Full Fit-Out</span>
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    Guzape Luxury Villa: Custom Iroko & Fluted Joinery
                  </h3>
                  <p className="text-[11px] text-zinc-300 line-clamp-2">
                    Designed in 3D, precision-crafted in our Abuja workshop, and installed seamlessly without sub-contractors.
                  </p>
                </div>
              </div>

              {/* Floating Floating Pill: 5-Stage Pipeline */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-amber-500 text-zinc-950 p-3.5 rounded-xl shadow-xl flex items-center gap-3 border border-amber-300">
                <div className="p-2 bg-black/10 rounded-lg">
                  <Compass className="w-5 h-5 text-zinc-950" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-900">
                    Full Spectrum Delivery
                  </div>
                  <div className="text-xs font-extrabold text-zinc-950">
                    Concept → Design → Production → Installation
                  </div>
                </div>
              </div>

              {/* Floating Pill: Smart Value */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-[#1e2025]/95 backdrop-blur-md text-white p-3 rounded-xl border border-white/20 shadow-xl items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-medium text-zinc-200">
                  Direct Factory Pricing • Zero Importer Markup
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
