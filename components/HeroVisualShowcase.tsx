"use client";

import React, { useState } from "react";
import { Star, ShieldAlert } from "lucide-react";

export function HeroVisualShowcase() {
  const [selectedStars, setSelectedStars] = useState<number>(5);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center pt-2 pb-6">
      
      {/* 1. DESKTOP WINDOW MOCKUP (Left) */}
      <div className="w-full max-w-[440px] bg-white border border-[#e2e8f0] rounded-2xl shadow-xl p-5 relative z-10 transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Top Window Bar with macOS dots & centered search */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#f1f5f9]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
          </div>
          <div className="w-44 h-4 bg-[#f1f5f9] rounded-full flex items-center justify-center text-[10px] text-slate-400 font-mono gap-1">
            <span className="text-[9px]">🔍</span>
            <span>reveq.ca/la-piazza</span>
          </div>
          <div className="w-6" />
        </div>

        {/* Business Header Inside Window */}
        <div className="pt-4 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1e392a] text-white flex items-center justify-center text-[10px] font-bold shadow-inner">
              La Piazza
            </div>
            <div className="text-left">
              <h3 className="font-extrabold text-base text-slate-900 tracking-tight">
                La Piazza Montréal
              </h3>
              <div className="w-20 h-1.5 bg-[#f1f5f9] rounded-full mt-1" />
            </div>
          </div>
        </div>

        {/* Floating Google Rating Badge */}
        <div className="my-2.5 text-left">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#e8f7ee] border border-[#bbf0cb] text-xs font-bold text-[#166534] shadow-2xs">
            <span>Note Google: 4.8</span>
            <span className="text-[#faa71d]">★</span>
            <span className="text-emerald-700 font-medium">(+0.3 ce mois-ci)</span>
          </div>
        </div>

        {/* Two Metrics Cards */}
        <div className="grid grid-cols-2 gap-3 bg-[#f8fafc] border border-[#f1f5f9] rounded-xl p-4 my-3 text-center">
          <div className="space-y-0.5">
            <p className="text-3xl font-black text-slate-900 tracking-tight">62</p>
            <p className="text-xs text-slate-500 font-medium">
              Avis 5<span className="text-[#faa71d]">★</span> générés
            </p>
          </div>
          <div className="space-y-0.5 border-l border-[#e2e8f0]">
            <p className="text-3xl font-black text-slate-900 tracking-tight">4</p>
            <p className="text-xs text-slate-500 font-medium">Retours privés interceptés</p>
          </div>
        </div>

        {/* Alert Notification Pill */}
        <div className="bg-white border border-[#e2e8f0] rounded-xl px-3.5 py-2.5 shadow-2xs flex items-center justify-between text-left">
          <div className="flex items-center gap-2">
            <span className="text-sm">🚨</span>
            <span className="text-xs font-semibold text-slate-800">
              Nouveau retour privé reçu
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Il y a 3 min</span>
        </div>

      </div>

      {/* 2. OVERLAPPING SMARTPHONE MOCKUP (Right, Rotated -6deg) */}
      <div 
        className="w-[240px] sm:w-[260px] bg-[#0a0a0a] rounded-[38px] p-2.5 shadow-2xl border-4 border-slate-800 relative z-20 shrink-0 md:-ml-12 mt-5 md:-mt-6 transition-transform duration-300 hover:scale-[1.02]"
        style={{ transform: "rotate(-6deg)" }}
      >
        
        {/* Dynamic Island Notch */}
        <div className="w-20 h-4 bg-black rounded-full mx-auto my-1 flex items-center justify-end px-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Smartphone Screen Content */}
        <div className="bg-white rounded-[28px] p-3 text-center space-y-2 border border-[#f1f5f9] shadow-inner">
          
          {/* Commerce Logo */}
          <div className="w-10 h-10 rounded-full bg-[#1e392a] text-white flex items-center justify-center text-[10px] font-bold mx-auto shadow-2xs">
            La Piazza
          </div>

          {/* Interactive Star Rating */}
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setSelectedStars(star)}
                className="p-0.5 hover:scale-125 transition-transform"
                title={`${star} étoiles`}
              >
                <Star
                  className={`w-4 h-4 ${
                    star <= selectedStars
                      ? "text-[#faa71d] fill-[#faa71d]"
                      : "text-slate-200"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Title */}
          <p className="text-[11px] font-bold text-slate-800 leading-tight px-1">
            Comment s&apos;est passée<br />votre visite ? / How was<br />your visit?
          </p>

          {/* 1-3★ Box (Private Feedback) */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-2 text-left space-y-1">
            <div className="flex items-center gap-1 text-slate-600 text-[9px] font-medium">
              <ShieldAlert className="w-3 h-3 text-amber-500 shrink-0" />
              <span>1-3 ★ redirects to private feedback</span>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-1.5 text-[9px] text-slate-400">
              <span>Laissez-nous un message privé</span>
            </div>
          </div>

          {/* 4-5★ Box (Google Maps + Confetti) */}
          <div className="bg-gradient-to-br from-emerald-50/90 via-teal-50/80 to-amber-50/60 border border-emerald-200/90 rounded-xl p-2 text-center space-y-0.5 relative overflow-hidden">
            <div className="inline-flex items-center gap-1 text-[11px] font-black text-slate-900">
              <span className="text-[#faa71d]">✨</span>
              <span>4-5</span>
              <span className="text-[#faa71d]">★</span>
              <span className="text-[#faa71d]">✨</span>
            </div>
            <p className="text-[9px] font-bold text-slate-800 leading-tight">
              Merci ! Laissez un avis sur Google Maps
            </p>
          </div>

          <p className="text-[8px] text-slate-400">
            Conforme Loi 96 &amp; Directives Google
          </p>

        </div>

      </div>

    </div>
  );
}
