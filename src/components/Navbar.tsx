"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/store";
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Calculator, 
  Inbox, 
  ArrowRight,
  Sparkles,
  MapPin
} from "lucide-react";
import { BRAND } from "@/data/brand";

export default function Navbar() {
  const { 
    setIsConsultationModalOpen, 
    setIsQuoteModalOpen, 
    setIsAdminOpen, 
    inquiries, 
    consultations 
  } = useApp();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalLeads = inquiries.length + consultations.length;
  const newLeads = inquiries.filter(i => i.status === "new").length + consultations.filter(c => c.status === "pending").length;

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Process", href: "#process" },
    { label: "Solutions", href: "#solutions" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Materials", href: "#materials" },
    { label: "Cost Estimator", href: "#estimator" },
  ];

  return (
    <>
      {/* Top micro bar for location and contact */}
      <div className="bg-[#121316] text-[#a1a1aa] text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Abuja Design Studio & In-House Factory, Nigeria</span>
            </span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-300 font-medium">
              Nationwide Delivery & Installation (Abuja • Lagos • Port Harcourt)
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={`tel:${BRAND.contact.phone}`} 
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{BRAND.contact.phone}</span>
            </a>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-zinc-200 px-2.5 py-0.5 rounded text-[11px] font-medium flex items-center gap-1.5 transition-colors border border-white/10"
              title="Open Lead Management Dashboard"
            >
              <Inbox className="w-3 h-3 text-amber-400" />
              <span>Inquiries Hub</span>
              {newLeads > 0 && (
                <span className="bg-amber-500 text-black font-bold text-[10px] px-1.5 py-0.2 rounded-full">
                  {newLeads}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#121316]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3" 
            : "bg-[#121316] border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-500/10 p-1 border border-amber-500/40 group-hover:border-amber-400 transition-colors shrink-0">
              <Image 
                src="/logos/spacevamp-symbol-circle.png" 
                alt="Spacevamp Emblem" 
                width={36} 
                height={36} 
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="relative h-7 sm:h-8 w-44 sm:w-52">
              <Image 
                src="/logos/spacevamp-wordmark-white.png" 
                alt="Spacevamp Designs Limited" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="text-xs font-semibold text-zinc-200 hover:text-white px-3.5 py-2.5 rounded-lg border border-white/20 hover:border-amber-400/50 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>Instant Quote</span>
            </button>
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="text-xs font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-2.5 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="bg-white/10 text-amber-400 p-2 rounded-lg text-xs flex items-center gap-1 sm:hidden border border-white/10"
              aria-label="Admin Inquiries"
            >
              <Inbox className="w-4 h-4" />
              {newLeads > 0 && (
                <span className="bg-amber-500 text-black font-bold text-[9px] px-1 rounded-full">
                  {newLeads}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#18191d] border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-4 shadow-2xl animate-in slide-in-from-top-4">
            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-amber-400 hover:bg-white/5 rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full text-center text-sm font-medium text-zinc-200 py-2.5 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Instant Cost Estimator</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConsultationModalOpen(true);
                }}
                className="w-full text-center text-sm font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 py-2.5 rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-zinc-400">
              <p>Abuja Design Studio: +234 803 000 7826</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
