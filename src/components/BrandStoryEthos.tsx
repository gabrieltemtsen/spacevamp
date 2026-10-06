"use client";

import React from "react";
import Image from "next/image";
import { BRAND } from "@/data/brand";
import { 
  Award, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  Smile, 
  Compass, 
  Leaf, 
  TrendingUp, 
  Users, 
  Sparkles,
  HeartHandshake
} from "lucide-react";

export default function BrandStoryEthos() {
  const valueIcons: Record<string, React.ReactNode> = {
    Excellence: <Award className="w-5 h-5 text-amber-400" />,
    Integrity: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    "Technical Know-how": <Wrench className="w-5 h-5 text-amber-400" />,
    Accountability: <CheckCircle2 className="w-5 h-5 text-amber-400" />,
    Fun: <Smile className="w-5 h-5 text-amber-400" />,
  };

  const ethosIcons = [
    <HeartHandshake key="c" className="w-5 h-5 text-amber-400" />,
    <Award key="v" className="w-5 h-5 text-amber-400" />,
    <Leaf key="p" className="w-5 h-5 text-amber-400" />,
    <TrendingUp key="g" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="about" className="py-24 bg-[#141519] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Story Top Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Philosophy & Brand Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Spaces Designed to Enhance Well-Being & Daily Life.
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed">
              Spacevamp exists to improve how people experience the spaces around them. 
              We believe a room or building should never merely look good on camera; it must 
              <strong className="text-white"> work effortlessly, support everyday activities, improve physical comfort, and provide enduring value</strong>.
            </p>

            {/* Smart Value highlight directly from PDF */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider">
                Our Foundational Principle:
              </div>
              <div className="text-lg font-bold text-white">
                &ldquo;Smart value without compromising quality.&rdquo;
              </div>
              <p className="text-xs sm:text-sm text-zinc-300">
                We reject artificial luxury markups that disconnect design from ordinary Nigerian clients. 
                By manufacturing in our own Abuja workshops, we pass direct structural quality and intelligent design straight to you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-mono font-bold">
                  Our Vision
                </span>
                <p className="text-sm font-semibold text-white mt-1">
                  {BRAND.vision}
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-mono font-bold">
                  Our Mission
                </span>
                <p className="text-sm font-semibold text-white mt-1">
                  {BRAND.mission}
                </p>
              </div>
            </div>

          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                alt="Spacevamp Design Philosophy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <div className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">
                  African Identity + Contemporary Excellence
                </div>
                <div className="text-sm font-semibold text-white">
                  Combining organic Nigerian timber textures with modern minimalist geometry.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Our Five Core Values
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRAND.coreValues.map((val) => (
              <div 
                key={val.title}
                className="bg-[#18191d] p-5 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {valueIcons[val.title] || <Award className="w-5 h-5 text-amber-400" />}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5">{val.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organisational Ethos (Section 8 in PDF) */}
        <div className="bg-[#18191d] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">
              Organisational Ethos
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              How Spacevamp Operates & Grows
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-2">
              Subtly woven into every client relationship, design specification, and factory workflow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND.ethos.map((ethos, idx) => (
              <div key={ethos.title} className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3">
                  {ethosIcons[idx]}
                </div>
                <h4 className="text-sm font-bold text-white">{ethos.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{ethos.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
