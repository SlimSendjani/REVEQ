"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck, X, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function PricingCard() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4" id="tarifs">
      
      {/* Eyebrow and Headline */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono font-black uppercase tracking-widest text-brand px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20">
          TARIF UNIQUE · ZÉRO SURPRISE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight leading-tight">
          79 $ par mois. Tout inclus. <br className="hidden sm:inline" />
          <span className="text-brand">Rentabilisé en 48 heures.</span>
        </h2>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
          Pendant que les agences vous demandent 400 $ à 600 $/mois avec des contrats bloquants de 12 mois, REVEQ vous donne tous les outils en libre-service sans engagement.
        </p>
      </div>

      {/* Pricing Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
        
        {/* Left: Traditional Agency / Podium */}
        <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-dark-900/60 p-7 flex flex-col justify-between text-left space-y-6 opacity-75">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="uppercase font-bold">Solutions concurrentes</span>
              <span>Podium / Birdeye</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-300">450 $</span>
              <span className="text-xs text-slate-500 font-mono">CAD / mois</span>
            </div>
            <p className="text-xs text-slate-400">
              Contrat annuel obligatoire de 5 400 $ CAD avec reconduction tacite et commercial agressif.
            </p>

            <ul className="space-y-2.5 pt-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0" />
                <span>Engagement 12 mois non résiliable</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0" />
                <span>Aucune IA adaptée au français du Québec</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0" />
                <span>Frais d&apos;installation initiaux (200 $ à 500 $)</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0" />
                <span>Support basé aux États-Unis en anglais</span>
              </li>
            </ul>
          </div>

          <div className="p-3 rounded-2xl bg-dark-850 border border-white/5 text-[11px] text-slate-400 font-mono text-center">
            Total annuel : 5 400 $ + Taxes
          </div>
        </div>

        {/* Right: REVEQ SINGLE HERO OFFER */}
        <div className="lg:col-span-7 rounded-3xl border-2 border-brand bg-gradient-to-b from-dark-850 to-dark-900 p-8 sm:p-10 flex flex-col justify-between text-left shadow-glow relative overflow-hidden">
          
          <div className="absolute top-0 right-0 bg-brand text-black font-black text-[10px] uppercase font-mono tracking-widest px-4 py-1.5 rounded-bl-2xl">
            FORFAIT UNIQUE SANS ENGAGEMENT
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-black text-white">REVEQ Intégral</h3>
                <span className="text-[10px] font-mono font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full border border-brand/20">
                  TOUT COMPRIS
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                La suite complète de réputation avec l&apos;assistant IA de réponse illimité.
              </p>
            </div>

            <div className="flex items-baseline gap-2 pb-5 border-b border-white/10">
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                79 $
              </span>
              <div>
                <span className="text-xs font-mono font-extrabold text-brand block uppercase">
                  CAD / mois
                </span>
                <span className="text-[11px] text-slate-400">Sans engagement · Annulable en 1 clic</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand text-black flex items-center justify-center shrink-0 mt-0.5 font-black text-[10px]">
                  ✓
                </div>
                <div>
                  <strong className="text-white">Assistant IA de réponse aux clients en illimité :</strong> Rédige en 1 seconde la réponse parfaite selon 4 tonalités prêtes à envoyer.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand text-black flex items-center justify-center shrink-0 mt-0.5 font-black text-[10px]">
                  ✓
                </div>
                <div>
                  <strong className="text-white">Filtre anti-avis négatif :</strong> Les 4-5★ vont sur Google Maps, les 1-3★ restent confidentiels sur votre téléphone.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand text-black flex items-center justify-center shrink-0 mt-0.5 font-black text-[10px]">
                  ✓
                </div>
                <div>
                  <strong className="text-white">Supports d&apos;impression PDF haute définition :</strong> Affiches comptoir 5.5&quot;x8.5&quot; demi-lettre et planches de stickers vectoriels.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand text-black flex items-center justify-center shrink-0 mt-0.5 font-black text-[10px]">
                  ✓
                </div>
                <div>
                  <strong className="text-white">Mode Borne Tablette Caisse :</strong> Écran continu pour iPad au comptoir avec réinitialisation automatique.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand text-black flex items-center justify-center shrink-0 mt-0.5 font-black text-[10px]">
                  ✓
                </div>
                <div>
                  <strong className="text-white">Alertes instantanées & Bilan mensuel ROI :</strong> Sachez exactement combien d&apos;avis 5★ ont été générés et combien de clients ont été sauvés.
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 space-y-3 pt-4 border-t border-white/10">
            <Link href="/onboarding" className="block">
              <Button size="lg" className="w-full text-base font-black py-4 shadow-glow">
                Démarrer mes 7 jours d&apos;essai gratuit (79 $ / mois)
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>

            <p className="text-center text-[11px] text-slate-400 font-mono flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand" />
              0.00 $ aujourd&apos;hui · Aucun engagement · Annulation instantanée
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
