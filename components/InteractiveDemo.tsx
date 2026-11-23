"use client";

import React, { useState } from "react";
import {
  Star,
  ShieldAlert,
  CheckCircle2,
  RotateCcw,
  ExternalLink,
  Sparkles,
  Copy,
  Check,
  Send,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { generateCustomerResponse, RESPONSE_TONES, type ResponseTone } from "@/lib/ai-responder";

export function InteractiveDemo() {
  const [rating, setRating] = useState<number | null>(2);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [tone, setTone] = useState<ResponseTone>("rabais");
  const [copied, setCopied] = useState(false);

  const sampleComplaint = "On a attendu plus de 25 minutes pour nos cafés et nos croissants ce matin. C'était tiède et personne ne s'est excusé.";

  const activeRating = hoverRating || rating || 0;

  const aiReply = generateCustomerResponse({
    businessName: "Café & Bistro Le Saint-Laurent",
    customerName: "Marc-Antoine",
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
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto my-4">
      
      {/* 1. Realistic Smartphone Chassis (Dark Luxury Frame) */}
      <div className="relative w-full max-w-[320px] aspect-[9/18.8] bg-black rounded-[46px] p-3 shadow-2xl ring-1 ring-white/10 shrink-0">
        
        {/* Dynamic Island Speaker */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-dark-950 rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>

        {/* Screen */}
        <div className="relative h-full w-full bg-dark-950 rounded-[36px] overflow-hidden flex flex-col justify-between pt-8 pb-4 px-4 text-center select-none border border-white/5">
          
          {/* Business Header */}
          <div className="pt-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-dark-850 border border-white/10 flex items-center justify-center text-brand font-black text-xl shadow-inner">
              ☕
            </div>
            <h3 className="mt-2 text-sm font-black text-white tracking-tight">
              Bistro Le Saint-Laurent
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">Boul. Saint-Laurent · Montréal</p>
          </div>

          {/* Central Interactive Zone */}
          <div className="my-auto py-2">
            {rating === null ? (
              <div className="space-y-4">
                <p className="text-xs font-bold text-white px-2">
                  Comment s&apos;est déroulée votre expérience aujourd&apos;hui ?
                </p>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1.5 py-1">
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
                            ? "fill-star text-star drop-shadow-md"
                            : "text-slate-700 fill-slate-800"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <p className="text-[10px] text-slate-500 font-mono">
                  Touchez une note pour tester l&apos;aiguillage
                </p>
              </div>
            ) : rating >= 4 ? (
              /* POSITIVE ROUTE (4-5 Stars) -> Google Maps */
              <div className="space-y-3 bg-brand/10 p-4 rounded-2xl border border-brand/30 animate-in fade-in zoom-in-95 duration-150">
                <div className="w-10 h-10 mx-auto rounded-full bg-brand text-black flex items-center justify-center font-black shadow-glow">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black text-brand block uppercase tracking-wider">
                    {rating} Étoiles Détectées
                  </span>
                  <p className="text-[11px] text-white leading-relaxed font-medium">
                    Redirection automatique vers Google Maps en cours...
                  </p>
                </div>
                <div className="p-2.5 bg-dark-900 rounded-xl border border-white/10 text-left text-[10px]">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>Fiche Google Maps</span>
                    <span className="text-star">★★★★★</span>
                  </div>
                  <p className="text-slate-400 truncate">Avis 5★ public qui fait monter votre note</p>
                </div>
              </div>
            ) : (
              /* INTERCEPTION ROUTE (1-3 Stars) */
              <div className="space-y-2.5 bg-amber-500/10 p-3.5 rounded-2xl border border-amber-500/30 text-left animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center gap-1.5 text-amber-400 font-black text-[11px] uppercase tracking-wider">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>Insatisfaction {rating}★ interceptée</span>
                </div>
                <p className="text-[10px] text-slate-300 leading-tight">
                  Ce retour parvient au gérant en privé. <strong>Zéro publication sur Google Maps.</strong>
                </p>
                <div className="text-[10px] p-2 rounded-xl border border-amber-500/20 bg-dark-900/90 text-slate-300 italic">
                  &ldquo;{sampleComplaint}&rdquo;
                </div>
                <div className="text-[10px] text-brand font-bold bg-brand/10 p-1.5 rounded-lg border border-brand/20 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-brand shrink-0" />
                  <span>Réponse IA déjà générée à droite →</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer note & Google compliance */}
          <div className="pt-2 border-t border-white/5">
            {rating !== null && rating <= 3 && (
              <p className="text-[9px] text-slate-500 hover:text-slate-300 underline cursor-pointer flex items-center justify-center gap-1 mb-1 font-mono">
                Laisser un avis directement sur Google
                <ExternalLink className="w-2.5 h-2.5" />
              </p>
            )}
            <p className="text-[9px] text-slate-500 font-mono">
              Conformité Loi 96 Québec · Règlements Google
            </p>
          </div>

        </div>
      </div>

      {/* 2. Side Control Panel : REVEQ AI RESPONSE GENERATOR */}
      <div className="flex-1 max-w-xl text-left bg-dark-850 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-mono font-black border border-brand/20">
            <Sparkles className="w-3.5 h-3.5" />
            ASSISTANT IA REVEQ (79 $ / MOIS)
          </div>

          {rating !== null && (
            <button
              type="button"
              onClick={() => setRating(null)}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              Recommencer
            </button>
          )}
        </div>

        {/* Commercial Hook */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            Désamorcez les mécontents en 10 secondes.
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Ne perdez plus 25 minutes à peser chaque mot après votre shift. Choisissez le ton souhaité, l&apos;IA rédige la réponse parfaite en français d&apos;ici pour rattraper le client avant qu&apos;il ne parte chez votre concurrent.
          </p>
        </div>

        {/* Tone Selector Pills */}
        <div className="space-y-2">
          <label className="block text-[11px] font-mono font-extrabold uppercase tracking-widest text-slate-400">
            Étape 1 · Sélectionnez le ton de votre réponse :
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {RESPONSE_TONES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTone(t.id)}
                className={`p-2.5 rounded-xl text-xs font-bold transition flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                  tone === t.id
                    ? "bg-brand text-black border-brand font-black shadow-glow-sm"
                    : "bg-dark-900 text-slate-300 border-white/5 hover:border-slate-700 hover:bg-dark-800"
                }`}
              >
                <span className="text-sm font-black">{t.emoji}</span>
                <span className="text-[10px] text-center leading-tight">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Live Generated Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <span>Étape 2 · Réponse prête à expédier :</span>
            </label>
            <span className="text-[10px] text-brand font-mono">100% Personnalisée</span>
          </div>

          <div className="relative">
            <textarea
              readOnly
              rows={6}
              value={aiReply}
              className="w-full text-xs p-4 rounded-2xl border border-white/10 bg-dark-900 text-slate-200 font-sans leading-relaxed resize-none focus:outline-none focus:border-brand"
            />
          </div>
        </div>

        {/* Direct Action */}
        <div className="flex items-center justify-between flex-wrap gap-3 pt-1 border-t border-white/5">
          <Button
            size="md"
            onClick={handleCopy}
            className="text-xs font-black shadow-glow"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1" />
                Copié dans le presse-papier !
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 mr-1" />
                Copier la réponse
              </>
            )}
          </Button>

          <span className="text-xs text-slate-400 font-mono">
            Rentabilisé dès la 1ère table sauvée
          </span>
        </div>

      </div>

    </div>
  );
}
