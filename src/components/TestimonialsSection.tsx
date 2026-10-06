"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS, FAQS } from "@/data/testimonials";
import { 
  Quote, 
  MapPin, 
  Building, 
  ChevronDown, 
  Star, 
  HelpCircle,
  Sparkles
} from "lucide-react";

export default function TestimonialsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#121316] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Trusted by Homeowners, Developers & Enterprises
          </h2>
          <p className="mt-4 text-base text-zinc-300">
            Hear from the architects, estate developers, and corporate executives who experience Spacevamp spaces every single day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-24">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#18191d] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">
                    {t.projectType}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-zinc-200 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-400/50 shrink-0">
                  <Image src={t.avatar} alt={t.clientName} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.clientName}</h4>
                  <p className="text-xs text-zinc-400">{t.role}, {t.organization}</p>
                  <p className="text-[11px] text-amber-400/90 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Questions & Answers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#18191d] border border-white/10 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-amber-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
