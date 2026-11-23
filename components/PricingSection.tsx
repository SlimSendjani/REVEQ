"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";

export function PricingSection() {
  return (
    <section id="tarifs" className="py-20 bg-slate-50 border-t border-slate-200/80 font-sans">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e7470]/10 text-[#0e7470] text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tarification Simple &amp; Transparente</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Un seul forfait tout inclus. Sans surprise.
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mt-2 text-sm sm:text-base">
          Aucun frais caché, aucun contrat de 12 mois. Vous commencez par un essai gratuit de 7 jours et vous annulez quand vous voulez en 1 clic.
        </p>

        {/* The 79$ Card */}
        <div className="mt-12 max-w-lg mx-auto bg-white border-2 border-[#0e7470] rounded-3xl p-8 sm:p-10 shadow-xl relative text-left">
          
          {/* Top floating pill */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0e7470] text-white text-xs font-bold tracking-wide uppercase shadow-sm">
            Offre de Lancement Québec
          </div>

          <div className="flex items-baseline justify-between border-b border-slate-100 pb-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Forfait Tout Inclus</h3>
              <p className="text-xs text-slate-500 mt-0.5">Essai gratuit de 7 jours</p>
            </div>
            <div className="text-right">
              <span className="text-4xl sm:text-5xl font-black text-slate-900">79 $</span>
              <span className="text-xs font-semibold text-slate-500"> CAD / mois</span>
            </div>
          </div>

          {/* Feature List */}
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-8">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#0e7470]/10 text-[#0e7470] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span><strong>Aiguillage intelligent :</strong> 5★ vers Google Maps, 1-3★ en privé</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#0e7470]/10 text-[#0e7470] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span><strong>Générateur IA de riposte client</strong> (4 tonalités au choix)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#0e7470]/10 text-[#0e7470] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span><strong>Kit d&apos;impression PDF HD :</strong> Chevalets de table &amp; présentoirs comptoir</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#0e7470]/10 text-[#0e7470] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span><strong>Alertes courriel instantanées</strong> à chaque avis critique</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#0e7470]/10 text-[#0e7470] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span><strong>Rapport mensuel de ROI</strong> et statistiques de scans en direct</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#0e7470]/10 text-[#0e7470] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span><strong>100 % conforme :</strong> Loi 96, Loi 25 et directives Google</span>
            </li>
          </ul>

          <Link href="/onboarding" className="block">
            <button className="w-full py-4 px-6 rounded-2xl bg-[#0e7470] hover:bg-[#0c625f] text-white font-bold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              <span>Démarrer mes 7 jours gratuits</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          <p className="text-center text-[11px] text-slate-400 mt-4">
            0.00 $ aujourd&apos;hui • Sans engagement • Annulation en 1 clic
          </p>

        </div>

      </div>
    </section>
  );
}
