"use client";

import React, { useState } from "react";
import { TrendingDown, ShieldAlert, ArrowRight, DollarSign, Sparkles } from "lucide-react";
import Link from "next/link";

export function FinancialBleedCalculator() {
  const [weeklyClients, setWeeklyClients] = useState<number>(450);
  const [avgCheck, setAvgCheck] = useState<number>(42);

  // Formule de calcul réaliste pour le commerce local :
  // Une chute de note de 4.8★ à 4.2★ fait perdre environ 8% de clientèle de passage via Google Maps
  const monthlyClients = weeklyClients * 4.3;
  const lostClientsMonth = Math.max(12, Math.round(monthlyClients * 0.08));
  const monthlyLoss = lostClientsMonth * avgCheck;
  const annualLoss = monthlyLoss * 12;
  const reveqCostMonth = 79;
  const netProtectedMonth = monthlyLoss - reveqCostMonth;
  const roiMultiplier = Math.round(monthlyLoss / reveqCostMonth);

  return (
    <div className="w-full max-w-5xl mx-auto my-12 font-sans">
      {/* Outer Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl overflow-hidden">
        
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0e7470] animate-pulse" />
            <span className="text-slate-900 font-extrabold text-sm uppercase tracking-wider">
              Simulateur d&apos;impact financier Google Maps
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 hidden sm:inline">Commerces &amp; Restos du Québec</span>
          </div>

          <div className="px-3 py-1 rounded-full bg-[#0e7470]/10 border border-[#0e7470]/20 text-[#0e7470] font-bold text-xs">
            Forfait Unique REVEQ : 79 $ CAD / mois
          </div>
        </div>

        {/* Headline */}
        <div className="mt-6 mb-8 text-left max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ajustez vos chiffres. Calculez vos pertes évitées.
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Dans la restauration et le commerce de détail au Québec, 2 ou 3 avis 1 étoile suffisent à faire chuter votre moyenne sous 4.3★ et vous faire disparaître des premiers résultats Google Maps.
          </p>
        </div>

        {/* Controls and Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Sliders */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Slider 1: Clients / week */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-700 font-bold uppercase tracking-wider">Clients servis par semaine</span>
                <span className="text-[#0e7470] font-extrabold text-base">{weeklyClients} clients</span>
              </div>
              <input
                type="range"
                min={100}
                max={2000}
                step={25}
                value={weeklyClients}
                onChange={(e) => setWeeklyClients(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0e7470]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>100 (Boutique/Salon)</span>
                <span>800 (Bistro)</span>
                <span>2 000+ (Gros resto)</span>
              </div>
            </div>

            {/* Slider 2: Average Ticket */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-700 font-bold uppercase tracking-wider">Addition / Panier moyen</span>
                <span className="text-[#0e7470] font-extrabold text-base">{avgCheck} $ CAD</span>
              </div>
              <input
                type="range"
                min={15}
                max={200}
                step={5}
                value={avgCheck}
                onChange={(e) => setAvgCheck(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0e7470]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>15 $ (Café)</span>
                <span>45 $ (Table moyenne)</span>
                <span>150 $+ (Gastronomique)</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Base estimée : 8 % de clients de passage détournés en cas de baisse sous 4.3★.</span>
            </div>

          </div>

          {/* Right: Results Card */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900 text-white p-7 text-left space-y-5 shadow-2xl relative">
            
            <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
              <span className="text-slate-400 font-medium">HÉMORRAGIE FINANCIÈRE ÉVITÉE</span>
              <span className="text-amber-400 font-bold flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                SANS PROTECTION REVEQ
              </span>
            </div>

            {/* Loss Big Number */}
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-rose-400 tracking-tight">
                - {monthlyLoss.toLocaleString("fr-CA")} $ <span className="text-sm font-normal text-slate-400">CAD / mois</span>
              </div>
              <p className="text-xs text-slate-400">
                Soit environ <strong>{lostClientsMonth} clients perdus</strong> au profit de vos concurrents chaque mois ({annualLoss.toLocaleString("fr-CA")} $ / an).
              </p>
            </div>

            {/* Comparison */}
            <div className="pt-3 border-t border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Coût de protection REVEQ :</span>
                <span className="text-white font-bold">79 $ CAD / mois</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-teal-400 font-semibold">Chiffre d&apos;affaires protégé net :</span>
                <span className="text-emerald-400 font-extrabold text-sm">+ {netProtectedMonth.toLocaleString("fr-CA")} $ CAD / mois</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-400">Rendement estimé (ROI) :</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0e7470] text-white font-extrabold text-xs">
                  {roiMultiplier}x votre investissement
                </span>
              </div>
            </div>

            {/* Verdict */}
            <div className="p-3 rounded-2xl bg-[#0e7470]/20 border border-[#0e7470]/30 text-xs text-teal-300 leading-relaxed">
              ✨ <strong>Verdict :</strong> REVEQ est rentabilisé dès le <strong>2e client mécontent</strong> intercepté et rattrapé en privé par l&apos;IA.
            </div>

            <Link href="/onboarding" className="block pt-1">
              <button className="w-full bg-[#0e7470] hover:bg-[#0c625f] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                <span>Sécuriser mon établissement pour 79 $ / mois</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}
