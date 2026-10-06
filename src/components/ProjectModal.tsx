"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/lib/store";
import { Project } from "@/data/portfolio";
import { 
  X, 
  MapPin, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Maximize2, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function ProjectModal() {
  const { selectedProjectForModal, setSelectedProjectForModal, setIsConsultationModalOpen } = useApp();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!selectedProjectForModal) return null;

  const project: Project = selectedProjectForModal;
  const allImages = [project.heroImage, ...(project.galleryImages || [])];
  const activeImage = allImages[activeImageIndex] || project.heroImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#18191d] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setSelectedProjectForModal(null)}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full border border-white/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image viewer with gallery thumbnails */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
          <Image
            src={activeImage}
            alt={project.title}
            fill
            className="object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-mono uppercase bg-black/70 px-2.5 py-1 rounded text-amber-400 border border-amber-500/30">
              {project.categoryLabel}
            </span>
            <div className="flex gap-1.5 bg-black/60 p-1 rounded-lg backdrop-blur-sm">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-10 h-7 relative rounded overflow-hidden border ${
                    activeImageIndex === idx ? "border-amber-400 ring-1 ring-amber-400" : "border-white/20 opacity-60"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header information */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>Delivered {project.year}</span>
              </span>
              <span>•</span>
              <span className="text-zinc-300 font-medium">{project.dimensionsOrScope}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-amber-300/90 mt-1 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-sm text-zinc-300 leading-relaxed">
            {project.overview}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[#121316] p-4 rounded-xl border border-white/10 space-y-1.5">
              <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider">The Spatial Challenge</span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="bg-[#121316] p-4 rounded-xl border border-amber-500/20 space-y-1.5">
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">The Spacevamp Solution</span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Bespoke Elements Fabricated */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
              Bespoke Furniture & Joinery Fabricated In-House:
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.bespokeElements.map((elem, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{elem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials Palette */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-2">
              Curated Materials & Finishes:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((mat, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-zinc-400">
              Want a similar space or bespoke piece crafted for your property?
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedProjectForModal(null)}
                className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedProjectForModal(null);
                  setIsConsultationModalOpen(true);
                }}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md"
              >
                <span>Discuss Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
