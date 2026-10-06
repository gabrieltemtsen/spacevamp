"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_PROJECTS, Project } from "@/data/portfolio";
import { useApp } from "@/lib/store";
import { 
  FolderGit2, 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";

export default function PortfolioSection() {
  const { setSelectedProjectForModal, setIsQuoteModalOpen } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "corporate", label: "Corporate & Offices" },
    { id: "hospitality", label: "Hospitality & Dining" },
    { id: "bespoke_furniture", label: "Bespoke Furniture" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#121316] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Visual Portfolio & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Works & Completed Spaces
            </h2>
            <p className="mt-3 text-base text-zinc-300">
              Each project represents an original response to space, materiality, and client purpose — designed with rigor and manufactured in Nigeria.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white border border-white/20 transition-colors"
            >
              Request Custom Build
            </button>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid of Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProjectForModal(project)}
              className="group bg-[#18191d] border border-white/10 hover:border-amber-400/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:translate-y-[-4px] cursor-pointer flex flex-col"
            >
              {/* Image thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-amber-400 border border-white/15">
                  {project.categoryLabel}
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors border border-white/20">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400">{project.year}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Materials Tags */}
                <div className="pt-3 border-t border-white/5 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.slice(0, 3).map((mat, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5">
                        {mat}
                      </span>
                    ))}
                    {project.materials.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded text-zinc-500">
                        +{project.materials.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-amber-400 font-semibold group-hover:underline pt-1">
                    <span>View Engineering & Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
