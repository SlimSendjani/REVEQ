"use client";

import React from "react";
import { ShieldCheck, ShieldAlert, Radio } from "lucide-react";

export function LiveIncidentTicker() {
  const incidents = [
    {
      time: "21:42",
      location: "Mile-End, Montréal",
      business: "Boulangerie & Café",
      type: "intercept",
      text: "2★ intercepté en privé (temps d'attente) · 0 avis public",
    },
    {
      time: "21:28",
      location: "Vieux-Québec",
      business: "Bistro Italien",
      type: "google",
      text: "5★ propulsé sur Google Maps · Note globale : 4.9★",
    },
    {
      time: "20:55",
      location: "Quartier Dix30, Brossard",
      business: "Clinique Esthétique",
      type: "intercept",
      text: "1★ désamorcé avec offre IA personnalisée",
    },
    {
      time: "20:31",
      location: "Plateau Mont-Royal",
      business: "Resto & Bar",
      type: "google",
      text: "Nouvel avis 5★ vérifié en direct (+1 client récurrent)",
    },
    {
      time: "19:48",
      location: "Saint-Roch, Québec",
      business: "Microbrasserie",
      type: "intercept",
      text: "Insatisfaction table 08 traitée en 15 secondes",
    },
  ];

  return (
    <div className="w-full border-y border-white/5 bg-black/60 py-2.5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex items-center gap-4 text-xs font-mono">
        
        {/* Radar Beacon Label */}
        <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-white/10 text-brand">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
          </span>
          <span className="font-black uppercase tracking-wider text-[11px] hidden sm:inline">
            RADAR QUÉBEC EN DIRECT
          </span>
        </div>

        {/* Ticker Stream */}
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px]">
          {incidents.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300 shrink-0">
              <span className="text-slate-500 font-bold">{item.time}</span>
              <span className="text-slate-400">[{item.location}]</span>
              <span className="font-bold text-white">{item.business} :</span>
              {item.type === "intercept" ? (
                <span className="text-amber-400 flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-amber-400" />
                  {item.text}
                </span>
              ) : (
                <span className="text-brand flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-brand" />
                  {item.text}
                </span>
              )}
              {idx < incidents.length - 1 && <span className="text-slate-700">///</span>}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
