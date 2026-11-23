"use client";

import React from "react";
import Link from "next/link";
import { Check, X, ShieldAlert, ShieldCheck, ArrowRight, FileWarning } from "lucide-react";
import { Button } from "./ui/button";

export function TacticalDossier() {
  return (
    <div className="w-full max-w-5xl mx-auto my-12 px-4" id="comparatif">
      
      {/* Dossier Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs font-bold uppercase mb-3">
          <FileWarning className="w-3.5 h-3.5 text-red-400" />
          <span>DOSSIER DÉCLASSIFIÉ · RÉALITÉ DU MARCHÉ</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Pourquoi les commerces locaux fuient les agences traditionnelles.
        </h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          Pendant des années, les plateformes américaines ont imposé des contrats léonins de 5 000 $ par an aux restaurateurs et commerçants. REVEQ brise ce monopole.
        </p>
      </div>

      {/* Side by side dossier comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* LE RACKET DES AGENCES */}
        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 to-black/60 p-7 sm:p-8 flex flex-col justify-between text-left space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-red-400 border-b border-red-500/15 pb-3">
              <span className="font-black uppercase tracking-wider">LE PIÈGE CLASSIQUE</span>
              <span>PODIUM / BIRDEYE / AGENCES</span>
            </div>

            <div className="space-y-1">
              <div className="text-3xl font-black text-slate-300 font-mono">
                450 $ à 600 $ <span className="text-xs text-slate-500 font-normal">CAD / mois</span>
              </div>
              <p className="text-xs text-red-400/80 font-mono">
                5 400 $ à 7 200 $ par an bloqués d&apos;avance.
              </p>
            </div>

            <ul className="space-y-3 pt-2 text-xs text-slate-300 font-mono">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Contrat annuel obligatoire de 12 mois</strong> : Impossible de résilier si vous n&apos;êtes pas satisfait.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Commercial agressif au téléphone</strong> : 3 réunions Zoom avant même de voir le moindre tarif.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Usine à gaz américaine</strong> : Interfaces lourdes non adaptées à la Loi 96 et au français du Québec.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Zéro matériel de caisse</strong> : Pas d&apos;affiches ni d&apos;autocollants physiques prêts à imprimer.</span>
              </li>
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/20 text-[11px] font-mono text-red-300/80 text-center">
            Verdict : Trop cher, trop lourd, conçu pour les grandes chaînes.
          </div>
        </div>

        {/* L'ARMURE REVEQ */}
        <div className="rounded-3xl border-2 border-brand bg-gradient-to-b from-dark-850 to-black p-7 sm:p-8 flex flex-col justify-between text-left space-y-6 shadow-glow relative overflow-hidden">
          
          <div className="absolute top-0 right-0 bg-brand text-black font-black text-[10px] font-mono uppercase tracking-widest px-4 py-1 rounded-bl-xl">
            FORFAIT UNIQUE SANS ENGAGEMENT
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-brand border-b border-brand/20 pb-3">
              <span className="font-black uppercase tracking-wider">L&apos;ARMURE REVEQ</span>
              <span className="text-white font-bold">100% LIBRE-SERVICE</span>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                79 $ <span className="text-xs text-brand font-bold uppercase">CAD / mois tout inclus</span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Sans contrat · Annulable en 1 clic à tout moment.
              </p>
            </div>

            <ul className="space-y-3 pt-2 text-xs text-slate-200 font-mono">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span><strong>Aiguillage intelligent en 3 secondes</strong> : 4-5★ vers Google Maps, 1-3★ intercepté en privé.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span><strong>Assistant IA de réponse illimité</strong> : Rédige instantanément des réponses en français d&apos;ici pour rattraper le client.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span><strong>Kit imprimable vectoriel immédiat</strong> : Affiches demi-lettre, stickers tables et mode borne caisse.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span><strong>Conforme Loi 96 et Loi 25</strong> : Conçu à Montréal, pour les réalités du Québec.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-brand/10 border border-brand/20 text-[11px] font-mono text-brand text-center font-bold">
              Verdict : Rentabilisé dès le 1er avis négatif évité.
            </div>

            <Link href="/onboarding" className="block">
              <Button className="w-full font-black text-sm shadow-glow py-3">
                Activer REVEQ pour 79 $ / mois (7 jours gratuits)
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
