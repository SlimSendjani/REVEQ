"use client";

import React, { useState } from "react";
import { TrendingDown, ShieldAlert, Sparkles, ArrowRight, DollarSign } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

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
    <div className="w-full max-w-5xl mx-auto my-8">
      {/* Outer Tactical Hardware Chassis */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0D1320] via-[#090D16] to-[#070A11] p-6 sm:p-10 shadow-2xl overflow-hidden">
        
        {/* Top Technical Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
            <span className="text-white font-bold uppercase tracking-wider">
              SIMULATEUR DE SAIGNÉE FINANCIÈRE
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500 hidden sm:inline">ALGORITHME LOCAL PACK GOOGLE MAPS</span>
          </div>

          <div className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-black text-[11px]">
            FORFAIT REVEQ : 79 $ CAD / MOIS
          </div>
        </div>

        {/* Headline */}
        <div className="mt-6 mb-8 text-left max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ajustez vos chiffres. Regardez la vérité en face.
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Dans la restauration et le commerce de détail au Québec, 3 ou 4 avis 1 étoile suffisent à faire dérailler votre note moyenne et vous faire disparaître du Top 3 Google Maps.
          </p>
        </div>

        {/* Controls and Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Controls (Sliders) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Slider 1: Weekly Clients */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 font-bold uppercase">Clients servis par semaine</span>
                <span className="text-brand font-black text-base">{weeklyClients} clients</span>
              </div>
              <input
                type="range"
                min={100}
                max={2000}
                step={25}
                value={weeklyClients}
                onChange={(e) => setWeeklyClients(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00F59B]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>100 (Boutique/Salon)</span>
                <span>800 (Bistro)</span>
                <span>2 000+ (Gros resto)</span>
              </div>
            </div>

            {/* Slider 2: Average Check */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 font-bold uppercase">Addition / Panier moyen</span>
                <span className="text-brand font-black text-base">{avgCheck} $ CAD</span>
              </div>
              <input
                type="range"
                min={15}
                max={200}
                step={5}
                value={avgCheck}
                onChange={(e) => setAvgCheck(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00F59B]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>15 $ (Café)</span>
                <span>45 $ (Table moyenne)</span>
                <span>150 $+ (Gastronomique)</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500 flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Base de calcul : 8 % de clients perdus suite à une baisse de note sous 4.3★.</span>
            </div>

          </div>

          {/* Right: The High-Contrast Telemetry Output */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-black/80 via-dark-900 to-black/80 border-2 border-brand/40 p-6 sm:p-7 text-left space-y-5 shadow-glow relative">
            
            <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-white/10">
              <span className="text-slate-400">IMPACT MENSUEL ESTIMÉ</span>
              <span className="text-red-400 font-bold flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                SANS REVEQ : SAIGNÉE DIRECTE
              </span>
            </div>

            {/* Loss Big Number */}
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-red-400 tracking-tight font-mono">
                - {monthlyLoss.toLocaleString("fr-CA")} $ <span className="text-xs text-slate-400 font-normal">CAD / mois</span>
              </div>
              <p className="text-xs text-slate-300 font-mono">
                Soit environ <strong>{lostClientsMonth} clients détournés</strong> vers vos concurrents d&apos;en face chaque mois ({annualLoss.toLocaleString("fr-CA")} $ / an).
              </p>
            </div>

            {/* Comparison with REVEQ 79$ */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Coût de protection REVEQ :</span>
                <span className="text-white font-black">79 $ CAD / mois</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-brand font-bold">Chiffre d&apos;affaires net protégé :</span>
                <span className="text-brand font-black text-sm">+ {netProtectedMonth.toLocaleString("fr-CA")} $ CAD / mois</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-slate-400">Rendement de l&apos;outil (ROI) :</span>
                <span className="px-2 py-0.5 rounded bg-brand text-black font-black text-xs">
                  {roiMultiplier}x votre mise
                </span>
              </div>
            </div>

            {/* Verdict Callout */}
            <div className="pt-2">
              <div className="p-3 rounded-xl bg-brand/10 border border-brand/20 text-xs text-brand font-mono leading-relaxed">
                ⚡ <strong>Verdict :</strong> REVEQ est rentabilisé dès le <strong>2e client mécontent</strong> intercepté et rattrapé en privé par l&apos;IA.
              </div>
            </div>

            <Link href="/onboarding" className="block pt-1">
              <Button className="w-full font-black text-sm shadow-glow py-3">
                Bloquer cette perte pour 79 $ / mois
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}
