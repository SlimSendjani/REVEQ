"use client";

import React, { useState } from "react";
import {
  Star,
  ShieldCheck,
  ShieldAlert,
  RotateCcw,
  ExternalLink,
  Copy,
  Check,
  Zap,
  Activity,
  Terminal,
} from "lucide-react";
import { Button } from "./ui/button";
import { generateCustomerResponse, type ResponseTone } from "@/lib/ai-responder";

export function InteractiveDemo() {
  const [rating, setRating] = useState<number | null>(2);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [tone, setTone] = useState<ResponseTone>("rabais");
  const [copied, setCopied] = useState(false);

  const sampleComplaint =
    "On a attendu plus de 25 minutes pour nos cafés et nos croissants ce matin. C'était tiède et personne ne s'est excusé.";

  const activeRating = hoverRating || rating || 0;

  const aiReply = generateCustomerResponse({
    businessName: "Café & Bistro Le Saint-Laurent",
    customerName: "Alexandre",
    rating: rating || 2,
    message: sampleComplaint,
    tone,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(aiReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-6">
      
      {/* Tactical Console Outer Container */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0A0E17] via-[#080B12] to-[#05070B] p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Top Control Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand" />
            </span>
            <span className="text-white font-black tracking-wider uppercase">
              TERMINAL T-1 · AIGUILLAGE TACTIQUE & RIPOSTE IA
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">LATENCE: 0.04s</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400">
              Note active : <strong className="text-white">{rating ? `${rating}★` : "En attente"}</strong>
            </span>
            <button
              type="button"
              onClick={() => setRating(rating === 2 ? 5 : 2)}
              className="text-[11px] text-brand hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Bascule rapide (2★ / 5★)</span>
            </button>
          </div>
        </div>

        {/* Dual Cockpit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* LEFT CONSOLE: Client Mobile / Table Kiosk (42% width) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="w-full text-left mb-3 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400 uppercase font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                VUE CLIENT (BORNE DE TABLE / SCAN QR)
              </span>
              <span className="text-[10px] text-slate-500">CANAL #01</span>
            </div>

            {/* Custom Phone Chassis */}
            <div className="relative w-full max-w-[330px] rounded-[42px] p-3.5 bg-black border border-white/10 shadow-2xl">
              
              {/* Dynamic Island / Speaker notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-dark-950 rounded-full z-20 flex items-center justify-center border border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              </div>

              {/* Screen Body */}
              <div className="relative h-[480px] w-full bg-gradient-to-b from-[#0D1320] to-[#070A11] rounded-[32px] overflow-hidden flex flex-col justify-between pt-8 pb-4 px-4 text-center select-none border border-white/5">
                
                {/* Merchant Branding */}
                <div className="pt-2">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-black/60 border border-brand/20 flex items-center justify-center text-brand font-black text-lg">
                    ☕
                  </div>
                  <h4 className="mt-2 text-xs font-black text-white tracking-tight">
                    Café & Bistro Le Saint-Laurent
                  </h4>
                  <p className="text-[9px] text-slate-400 font-mono">Boul. Saint-Laurent · Montréal</p>
                </div>

                {/* Star Interactive Rating Zone */}
                <div className="py-2">
                  <p className="text-[11px] font-bold text-slate-200 mb-2">
                    Comment s&apos;est déroulé votre service ?
                  </p>

                  <div className="flex items-center justify-center gap-1 py-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onMouseEnter={() => setHoverRating(s)}
                        onMouseLeave={() => setHoverRating(null)}
                        onClick={() => setRating(s)}
                        className="p-1 transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                        aria-label={`${s} étoiles`}
                      >
                        <Star
                          className={`w-7 h-7 transition-colors ${
                            s <= activeRating
                              ? "fill-[#F59E0B] text-[#F59E0B] drop-shadow-md"
                              : "text-slate-700 fill-slate-800"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <p className="text-[9px] text-slate-500 font-mono mt-1">
                    {rating ? `Sélectionné : ${rating} étoiles` : "Touchez une étoile pour tester"}
                  </p>
                </div>

                {/* Routing Outcome State */}
                <div className="mb-2">
                  {rating !== null && rating >= 4 ? (
                    /* 4-5 STARS: Google Maps Route */
                    <div className="p-3.5 rounded-2xl bg-brand/10 border border-brand/30 text-left space-y-2 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center gap-2 text-brand font-black text-xs font-mono">
                        <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
                        <span>AIGUILLAGE PUBLIC ACTIF</span>
                      </div>
                      <p className="text-[11px] text-slate-200 leading-snug">
                        Client ravi ! Il est propulsé directement sur votre fiche <strong>Google Maps</strong> en 3 secondes.
                      </p>
                      <div className="pt-1">
                        <div className="w-full py-2 rounded-xl bg-brand text-black font-black text-xs flex items-center justify-center gap-1 shadow-glow-sm">
                          <span>Publier l&apos;avis 5★ sur Google</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* 1-3 STARS: Thermal Incident Ticket */
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-left space-y-2 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center gap-1.5 text-amber-400 font-mono font-black text-[10px] uppercase">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>INCIDENT BLOQUÉ · 0 VISIBILITÉ GOOGLE</span>
                      </div>
                      
                      {/* Thermal ticket cutout */}
                      <div className="p-2 rounded-lg bg-black/70 border border-white/5 font-mono text-[10px] text-slate-300 space-y-1">
                        <div className="text-slate-500 flex justify-between text-[8px]">
                          <span>TICKET #9482</span>
                          <span>INTERCEPTÉ</span>
                        </div>
                        <p className="italic text-slate-200 line-clamp-2">
                          &ldquo;{sampleComplaint}&rdquo;
                        </p>
                      </div>

                      <div className="text-[9px] font-mono text-brand flex items-center gap-1">
                        <Zap className="w-3 h-3 text-brand" />
                        <span>Riposte IA formulée à droite →</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Legal compliance subtext */}
                <div className="text-[9px] text-slate-500 font-mono pt-1 border-t border-white/5">
                  Loi 96 Québec · Règlements Google Respectés
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT CONSOLE: Tactical AI Response Cockpit (58% width) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-5">
            
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-brand uppercase font-bold flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-brand" />
                  COCKPIT DE RIPOSTE IA (CONSOLE COMMERÇANT)
                </span>
                <span className="px-2 py-0.5 rounded bg-brand/10 border border-brand/20 text-brand text-[10px] font-black">
                  INCLUS DANS LES 79 $ / MOIS
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Désamorcez les mécontents avant qu&apos;ils ne quittent votre table.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Quand une insatisfaction est interceptée, l&apos;IA de REVEQ génère en 1 seconde une lettre diplomatique rédigée en français d&apos;ici pour rattraper le client.
              </p>
            </div>

            {/* 4 Mode Channels (Tactical Soundboard / Mixer Buttons) */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                1. SÉLECTIONNEZ LE CANAL DE TONALITÉ :
              </span>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                
                {/* Channel 1: Geste Commercial */}
                <button
                  type="button"
                  onClick={() => setTone("rabais")}
                  className={`p-3 rounded-xl border text-left font-mono transition-all cursor-pointer ${
                    tone === "rabais"
                      ? "bg-brand text-black border-brand font-black shadow-glow-sm"
                      : "bg-dark-850/80 border-white/10 text-slate-300 hover:border-white/20"
                  }`}
                >
                  <div className="text-[9px] uppercase tracking-wider opacity-75">CH-01</div>
                  <div className="text-xs font-bold mt-0.5">Geste Commercial</div>
                  <div className="text-[9px] mt-0.5 line-clamp-1 opacity-80">Rabais ou boisson</div>
                </button>

                {/* Channel 2: Explicatif */}
                <button
                  type="button"
                  onClick={() => setTone("explicatif")}
                  className={`p-3 rounded-xl border text-left font-mono transition-all cursor-pointer ${
                    tone === "explicatif"
                      ? "bg-brand text-black border-brand font-black shadow-glow-sm"
                      : "bg-dark-850/80 border-white/10 text-slate-300 hover:border-white/20"
                  }`}
                >
                  <div className="text-[9px] uppercase tracking-wider opacity-75">CH-02</div>
                  <div className="text-xs font-bold mt-0.5">Contexte Rush</div>
                  <div className="text-[9px] mt-0.5 line-clamp-1 opacity-80">Rassurance & écoute</div>
                </button>

                {/* Channel 3: Chaleureux */}
                <button
                  type="button"
                  onClick={() => setTone("chaleureux")}
                  className={`p-3 rounded-xl border text-left font-mono transition-all cursor-pointer ${
                    tone === "chaleureux"
                      ? "bg-brand text-black border-brand font-black shadow-glow-sm"
                      : "bg-dark-850/80 border-white/10 text-slate-300 hover:border-white/20"
                  }`}
                >
                  <div className="text-[9px] uppercase tracking-wider opacity-75">CH-03</div>
                  <div className="text-xs font-bold mt-0.5">Chaleureux</div>
                  <div className="text-[9px] mt-0.5 line-clamp-1 opacity-80">Humain & direct</div>
                </button>

                {/* Channel 4: Professionnel */}
                <button
                  type="button"
                  onClick={() => setTone("professionnel")}
                  className={`p-3 rounded-xl border text-left font-mono transition-all cursor-pointer ${
                    tone === "professionnel"
                      ? "bg-brand text-black border-brand font-black shadow-glow-sm"
                      : "bg-dark-850/80 border-white/10 text-slate-300 hover:border-white/20"
                  }`}
                >
                  <div className="text-[9px] uppercase tracking-wider opacity-75">CH-04</div>
                  <div className="text-xs font-bold mt-0.5">Institutionnel</div>
                  <div className="text-[9px] mt-0.5 line-clamp-1 opacity-80">Courtois & sobre</div>
                </button>

              </div>
            </div>

            {/* Generated Teleprompter Output */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>2. TÉLÉPROMPTEUR DE RÉPONSE RÉDIGÉE EN DIRECT :</span>
                <span className="text-brand flex items-center gap-1 text-[11px]">
                  <Activity className="w-3 h-3 animate-pulse" />
                  MOTEUR IA PRÊT
                </span>
              </div>

              <div className="relative rounded-2xl bg-black/80 border border-white/10 p-4 font-sans text-xs text-slate-200 leading-relaxed shadow-inner">
                <textarea
                  readOnly
                  value={aiReply}
                  rows={6}
                  className="w-full bg-transparent resize-none border-none outline-none font-sans text-xs sm:text-sm text-slate-200 leading-relaxed"
                />
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand text-black font-black text-xs font-mono flex items-center justify-center gap-2 hover:bg-brand-hover shadow-glow-sm transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>COPIÉ DANS LE PRESSE-PAPIER !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-black" />
                    <span>COPIER LA RÉPONSE & ENVOYER</span>
                  </>
                )}
              </button>

              <div className="text-[11px] font-mono text-slate-400 text-center sm:text-right">
                <span>⚡ Zéro seconde perdue après le shift.</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
