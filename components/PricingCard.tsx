"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function PricingCard() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4" id="tarifs">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-brand px-3 py-1 bg-brand-light rounded-full">
          Tarification claire et prévisible
        </span>
        <h2 className="text-3xl font-extrabold text-foreground mt-3">
          Sans engagement. Moins cher qu&apos;un seul avis négatif.
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Pourquoi payer 300 $ à 600 $/mois chez Podium ou Birdeye avec un contrat annuel bloquant ?
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className={`text-sm font-medium ${!isAnnual ? "text-foreground font-bold" : "text-slate-500"}`}>
            Mensuel
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 bg-slate-200 rounded-full p-0.5 transition-colors focus:outline-none cursor-pointer relative"
            aria-label="Basculer facturation annuelle"
          >
            <div
              className={`w-5 h-5 rounded-full bg-brand shadow-sm transition-transform ${
                isAnnual ? "translate-x-6 bg-brand" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? "text-foreground font-bold" : "text-slate-500"}`}>
            Annuel
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
              2 mois offerts
            </span>
          </span>
        </div>
      </div>

      {/* Plans grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Plan Solo */}
        <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">Forfait Solo</h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                1 commerce
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Idéal pour café, salon, restaurant ou clinique indépendante.
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-foreground">
                {isAnnual ? "24" : "29"} $
              </span>
              <span className="text-xs font-semibold text-slate-500">CAD / mois</span>
              {isAnnual && (
                <span className="text-[11px] text-slate-400 ml-2">facturé 290 $/an</span>
              )}
            </div>

            <ul className="mt-6 space-y-3 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>1 fiche Google Maps connectée</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Filtre intelligent d&apos;avis (4-5★ Google / 1-3★ privé)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>QR Code HD vectoriel + Lien court dynamique</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Générateur PDF d&apos;affiches et autocollants imprimables</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Mode écran de comptoir tablette (/kiosk/[slug])</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Alertes courriel instantanées & Bilan mensuel ROI</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100">
            <Link href="/onboarding?plan=solo">
              <Button variant="outline" className="w-full text-sm font-semibold">
                Démarrer 7 jours gratuits
              </Button>
            </Link>
          </div>
        </div>

        {/* Plan Pro / Multi-Sites */}
        <div className="rounded-2xl border-2 border-brand bg-white p-6 sm:p-8 flex flex-col justify-between shadow-lg relative">
          <div className="absolute -top-3 right-6 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Sparkles className="w-3 h-3" />
            Populaire
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">Forfait Pro</h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-light text-brand font-bold">
                Jusqu&apos;à 3 adresses
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Pour franchises locales, commerces multi-succursales ou forte affluence.
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-foreground">
                {isAnnual ? "40" : "49"} $
              </span>
              <span className="text-xs font-semibold text-slate-500">CAD / mois</span>
              {isAnnual && (
                <span className="text-[11px] text-slate-400 ml-2">facturé 490 $/an</span>
              )}
            </div>

            <ul className="mt-6 space-y-3 text-xs text-slate-700">
              <li className="flex items-center gap-2 font-medium text-foreground">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Tout ce qui est inclus dans le plan Solo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Jusqu&apos;à 3 emplacements Google Maps distincts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Marque blanche (retrait du badge de plateforme)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Modèles de réponses bilingues (FR/EN) pré-rédigés</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Tableau de bord analytics multi-commerces unifié</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span>Support prioritaire québécois par courriel en 24h</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100">
            <Link href="/onboarding?plan=pro">
              <Button className="w-full text-sm font-semibold shadow-md">
                Essayer Pro gratuitement (7 jours)
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

      </div>

      <p className="text-center text-xs text-slate-400 mt-6">
        Essai gratuit de 7 jours · Sans engagement de durée · Annulation en 1 clic
      </p>
    </div>
  );
}
