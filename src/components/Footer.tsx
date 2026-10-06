"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/data/brand";
import { useApp } from "@/lib/store";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Inbox
} from "lucide-react";

export default function Footer() {
  const { setIsQuoteModalOpen, setIsConsultationModalOpen, setIsAdminOpen } = useApp();

  return (
    <footer className="bg-[#0e0f12] text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center">
              <div className="relative h-9 sm:h-10 w-56 sm:w-64">
                <Image 
                  src="/logos/spacevamp-wordmark-white.png" 
                  alt="Spacevamp Designs Limited - Interior Design | Bespoke Furniture" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Spacevamp Designs Limited is an innovative interior design and furniture manufacturing company creating functional, beautiful, and purposeful spaces.
            </p>

            <div className="text-xs text-zinc-300 italic border-l-2 border-amber-500 pl-3 py-0.5">
              &ldquo;We don&apos;t simply furnish spaces. We understand spaces, design solutions and make things that work.&rdquo;
            </div>

            <div className="pt-2 space-y-2 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{BRAND.locations.primary} &bull; Manufacturing Hub, Idu Industrial Area</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${BRAND.contact.phone}`} className="hover:text-amber-400">
                  {BRAND.contact.phone}
                </a>
                <span>/</span>
                <a href={`tel:${BRAND.contact.altPhone}`} className="hover:text-amber-400">
                  {BRAND.contact.altPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${BRAND.contact.email}`} className="hover:text-amber-400">
                  {BRAND.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation (Col 6-7) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About & Brand Story</a></li>
              <li><a href="#capabilities" className="hover:text-amber-400 transition-colors">Dual Capabilities</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">5-Stage Process</a></li>
              <li><a href="#solutions" className="hover:text-amber-400 transition-colors">Client Sectors</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Visual Portfolio</a></li>
              <li><a href="#materials" className="hover:text-amber-400 transition-colors">Materials Library</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">Cost Estimator</a></li>
            </ul>
          </div>

          {/* Capabilities & Services (Col 8-10) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">
              Capabilities & Fit-Outs
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Residential Interior Architecture</li>
              <li>Bespoke Boardroom & Office Desks</li>
              <li>Architectural Walk-In Wardrobes</li>
              <li>Custom Fitted Chef Kitchens</li>
              <li>Modular Ergonomic Workstations</li>
              <li>Hospitality Banquette & Dining Seating</li>
              <li>Developer Multi-Unit Turnkey Packages</li>
            </ul>
          </div>

          {/* Quick CTAs & Portal (Col 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">
              Client Desk
            </h4>
            <div className="space-y-2">
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full text-left p-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition-colors flex items-center justify-between"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors flex items-center justify-between"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              <button
                onClick={() => setIsAdminOpen(true)}
                className="w-full text-left p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-amber-400 font-medium text-xs border border-white/10 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <Inbox className="w-3.5 h-3.5" />
                  <span>Inquiries Hub</span>
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1 rounded">View</span>
              </button>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud (PDF Section 3.6 Online Discoverability) */}
        <div className="py-6 border-b border-white/10 text-[11px] text-zinc-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-zinc-400 font-semibold">Specialized Discoverability:</span>
            {[
              "Interior design company in Nigeria",
              "Interior designers in Abuja",
              "Bespoke furniture Nigeria",
              "Custom furniture Nigeria",
              "Furniture manufacturers Nigeria",
              "Office furniture Nigeria",
              "Residential interior design Nigeria",
              "Commercial interior design Nigeria",
              "Custom office furniture",
              "Bespoke wardrobes",
              "Custom kitchens",
              "Interior fit-out services"
            ].map((keyword, i) => (
              <span key={i} className="hover:text-zinc-400 transition-colors">
                {keyword} {i < 11 && "•"}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Spacevamp Designs Limited. RC Registered in the Federal Republic of Nigeria.
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>African Identity • Contemporary Excellence</span>
            <span>&bull;</span>
            <span>Abuja &bull; Lagos &bull; Nationwide</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
