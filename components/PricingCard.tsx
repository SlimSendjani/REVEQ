"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function PricingCard() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4" id="tarifs">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-black uppercase tracking-wider text-brand px-3.5 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
          Un seul tarif. Zéro complication.
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-foreground mt-3 tracking-tight">
          Un seul forfait tout inclus à 79 $ / mois.
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Tout ce dont votre commerce a besoin pour sécuriser sa note Google Maps et répondre à chaque client en 1 clic grâce à l&apos;IA.
        </p>
      </div>

      {/* Single Bold Pricing Card */}
      <div className="max-w-xl mx-auto rounded-3xl border-2 border-brand bg-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-brand/10 blur-3xl pointer-events-none" />

        {/* Top Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <span className="font-black text-xl text-foreground">REVEQ Intégral</span>
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-brand text-white">
              Tout Compris
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            <span>IA Intégrée</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-6">
          La formule complète sans restriction, sans options payantes cachées et sans engagement de durée.
        </p>

        {/* Price Display */}
        <div className="flex items-baseline gap-2 pb-6 border-b border-slate-100">
          <span className="text-5xl font-black text-foreground tracking-tight">
            79 $
          </span>
          <div className="text-left">
            <span className="text-xs font-extrabold text-slate-700 block">CAD / mois</span>
            <span className="text-[11px] text-slate-400">Sans contrat d&apos;engagement</span>
          </div>
        </div>

        {/* Features Checklist */}
        <ul className="my-8 space-y-3.5 text-xs text-slate-700">
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3" />
            </div>
            <div>
              <strong className="text-foreground">Générateur de Réponses Clients par IA :</strong> Rédigez en 1 clic des réponses adaptées selon le ton de votre choix (chaleureux, formel, geste commercial, explicatif).
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <strong className="text-foreground">Filtre Intelligent Anti-Avis Négatif :</strong> Les 4-5★ vont directement sur Google Maps, les 1-3★ sont interceptés confidentiellement.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <strong className="text-foreground">Kit d&apos;Impression PDF Haute Définition :</strong> Affiches de comptoir demi-lettre (5.5&quot; x 8.5&quot;) et planches d&apos;autocollants prêtes en 1 clic.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <strong className="text-foreground">Mode Borne Tablette de Caisse :</strong> Interface continue pour iPad posé en caisse enregistreuse avec réinitialisation automatique.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <strong className="text-foreground">Alertes d&apos;urgence & Bilan ROI mensuel :</strong> Notification immédiate par courriel et récapitulatif automatique des avis protégés.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <div>
              <strong className="text-foreground">Volume 100 % Illimité :</strong> Zéro limite sur le nombre de scans, de retours ou de réponses IA générées.
            </div>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="space-y-3 pt-2">
          <Link href="/onboarding">
            <Button
              size="lg"
              className="w-full text-sm font-extrabold py-4 shadow-lg bg-brand hover:bg-brand-hover text-white flex items-center justify-center gap-2"
            >
              <span>Démarrer 7 jours gratuits (79 $ / mois)</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Aucun prélèvement aujourd&apos;hui · Annulation en 1 clic sans condition
          </p>
        </div>

      </div>

      <div className="text-center mt-6 text-xs text-slate-400">
        Pas de contrat d&apos;un an contraignant à 400 $/mois comme chez Podium ou Birdeye.
      </div>
    </div>
  );
}
