"use client";

import React, { useState } from "react";
import { Star, ShieldAlert, CheckCircle2, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export function HeroVisualShowcase() {
  const [selectedStars, setSelectedStars] = useState<number>(5);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center pt-4 pb-8">
      
      {/* Background Soft Glow Auras (Teal & Indigo) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[380px] h-[300px] bg-teal-400/25 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[380px] h-[300px] bg-indigo-400/20 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. DESKTOP WINDOW MOCKUP (Left) */}
      <div className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-6 relative z-10 transition-transform duration-500 hover:scale-[1.01]">
        
        {/* Top Window Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="w-36 sm:w-48 h-4 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-400 font-mono">
            <span>reveq.ca/la-piazza</span>
          </div>
          <div className="w-8" />
        </div>

        {/* Business Header Inside Window */}
        <div className="pt-5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#1e3932] text-white flex items-center justify-center text-xs font-bold shadow-inner">
              La Piazza
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                La Piazza Montréal
              </h3>
              <div className="w-24 h-2 bg-slate-100 rounded-full mt-1" />
            </div>
          </div>
        </div>

        {/* Floating Google Rating Badge */}
        <div className="my-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] text-xs font-bold text-[#065f46] shadow-2xs">
            <span>Note Google : 4.8</span>
            <span className="text-amber-500">★</span>
            <span className="text-emerald-600 font-medium">(+0.3 ce mois-ci)</span>
          </div>
        </div>

        {/* Two Metrics Cards */}
        <div className="grid grid-cols-2 gap-4 bg-slate-50/80 border border-slate-100 rounded-2xl p-4 my-4 text-center">
          <div className="space-y-0.5">
            <p className="text-3xl font-black text-slate-900 tracking-tight">62</p>
            <p className="text-xs text-slate-500 font-medium">Avis 5★ générés</p>
          </div>
          <div className="space-y-0.5 border-l border-slate-200">
            <p className="text-3xl font-black text-slate-900 tracking-tight">4</p>
            <p className="text-xs text-slate-500 font-medium">Retours privés interceptés</p>
          </div>
        </div>

        {/* Alert Notification Pill */}
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-base">🚨</span>
            <span className="text-xs font-semibold text-slate-800">
              Nouveau retour privé reçu
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Il y a 3 min</span>
        </div>

      </div>

      {/* 2. OVERLAPPING SMARTPHONE MOCKUP (Right) */}
      <div className="w-[270px] sm:w-[300px] bg-slate-900 rounded-[44px] p-2.5 shadow-2xl border-4 border-slate-800 relative z-20 shrink-0 md:-ml-12 mt-6 md:-mt-8 transition-transform duration-500 hover:scale-[1.02]">
        
        {/* Dynamic Island Notch */}
        <div className="w-24 h-4.5 bg-black rounded-full mx-auto my-1.5 flex items-center justify-end px-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* Smartphone Screen Content */}
        <div className="bg-white rounded-[34px] p-4 text-center space-y-3 border border-slate-100 shadow-inner">
          
          {/* Commerce Logo */}
          <div className="w-12 h-12 rounded-full bg-[#1e3932] text-white flex items-center justify-center text-xs font-bold mx-auto shadow-sm">
            La Piazza
          </div>

          {/* Interactive Star Rating Preview */}
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setSelectedStars(star)}
                className="p-1 hover:scale-125 transition-transform"
                title={`${star} étoiles`}
              >
                <Star
                  className={`w-6 h-6 ${
                    star <= selectedStars
                      ? "text-amber-400 fill-amber-400"
                      : "text-slate-200"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Bilingual Title */}
          <p className="text-xs font-bold text-slate-800 leading-snug px-1">
            Comment s&apos;est passée votre visite ? / How was your visit?
          </p>

          {/* Conditional Branching Preview */}
          {selectedStars <= 3 ? (
            /* 1-3 Stars: Private Interception Path */
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3 text-left space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-1.5 text-amber-800 text-[11px] font-bold">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>1-3★ redirigé vers retour privé</span>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-[11px] text-slate-400 h-16 flex flex-col justify-between">
                <span>Laissez-nous un message privé...</span>
                <span className="text-[9px] text-[#0e7470] font-semibold self-end">Envoyer à la direction →</span>
              </div>
            </div>
          ) : (
            /* 4-5 Stars: Google Maps Positive Redirection */
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/80 rounded-2xl p-4 text-center space-y-1.5 animate-in fade-in duration-200">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                <span>✨ 4-5 ★ ✨</span>
              </div>
              <p className="text-xs font-bold text-slate-900">
                Merci ! Laissez un avis sur Google Maps
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#0e7470] px-3 py-1.5 rounded-lg shadow-xs">
                  Ouvrir Google Maps →
                </span>
              </div>
            </div>
          )}

          <p className="text-[9px] text-slate-400 pt-1">
            Conforme Loi 96 &amp; Directives Google
          </p>

        </div>

      </div>

    </div>
  );
}
