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
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { Button } from "./ui/button";
import { generateCustomerResponse, RESPONSE_TONES, type ResponseTone } from "@/lib/ai-responder";

export function InteractiveDemo() {
  const [rating, setRating] = useState<number | null>(2); // Default to 2 stars to immediately showcase the new AI feature!
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [tone, setTone] = useState<ResponseTone>("chaleureux");
  const [copied, setCopied] = useState(false);

  const sampleComplaint = "Le temps d'attente pour le café était de plus de 15 minutes ce matin malgré peu de monde...";

  const reset = () => {
    setRating(null);
    setHoverRating(null);
  };

  const activeRating = hoverRating || rating || 0;

  // Génération dynamique de la réponse IA selon le ton sélectionné
  const aiGeneratedReply = generateCustomerResponse({
    businessName: "Café Le Petit Saint-Denis",
    customerName: "Alexandre",
    rating: rating || 2,
    message: sampleComplaint,
    tone,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(aiGeneratedReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto my-6">
      
      {/* 1. Smartphone Frame */}
      <div className="relative w-full max-w-[310px] aspect-[9/19] bg-slate-900 rounded-[44px] p-3.5 shadow-2xl ring-1 ring-slate-800 shrink-0">
        {/* Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>

        {/* Screen Content */}
        <div className="relative h-full w-full bg-white rounded-[34px] overflow-hidden flex flex-col justify-between pt-8 pb-4 px-4 text-center select-none shadow-inner border border-slate-100">
          
          {/* Logo & Identity */}
          <div>
            <div className="w-13 h-13 mx-auto rounded-2xl bg-emerald-50 text-brand flex items-center justify-center font-bold text-2xl shadow-xs border border-emerald-100">
              ☕
            </div>
            <h3 className="mt-2.5 text-sm font-extrabold text-foreground">
              Café Le Petit Saint-Denis
            </h3>
            <p className="text-[10px] text-slate-400 font-medium">Plateau Mont-Royal · Montréal</p>
          </div>

          {/* Interactive Screen Center */}
          <div className="my-auto py-2">
            {rating === null ? (
              <div className="space-y-4">
                <p className="text-xs font-bold text-foreground px-2">
                  Comment s&apos;est déroulée votre visite aujourd&apos;hui ?
                </p>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1.5 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                      aria-label={`${star} étoiles`}
                    >
                      <Star
                        className={`w-7 h-7 transition-colors ${
                          star <= activeRating
                            ? "fill-star text-star drop-shadow-sm"
                            : "text-slate-300 fill-slate-50"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <p className="text-[10px] text-slate-400">
                  Touchez les étoiles pour tester le comportement
                </p>
              </div>
            ) : rating >= 4 ? (
              /* POSITIVE ROUTE (4-5 Stars) -> Google Maps */
              <div className="space-y-3 bg-emerald-50/90 p-3.5 rounded-2xl border border-emerald-200 animate-in fade-in zoom-in-95 duration-150">
                <div className="w-9 h-9 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black text-emerald-950 block">
                    Expérience {rating}★ Détectée !
                  </span>
                  <p className="text-[10px] text-emerald-800 leading-relaxed">
                    Redirection instantanée vers votre fiche Google Maps...
                  </p>
                </div>
                <div className="p-2 bg-white rounded-xl border border-emerald-100 shadow-2xs text-left text-[10px]">
                  <div className="flex items-center justify-between font-bold text-slate-700">
                    <span>Google Reviews</span>
                    <span className="text-star">★★★★★</span>
                  </div>
                  <p className="text-slate-500 truncate">Avis 5 étoiles publié publiquement</p>
                </div>
              </div>
            ) : (
              /* PRIVATE INTERCEPTION (1-3 Stars) */
              <div className="space-y-2 bg-amber-50/90 p-3 rounded-2xl border border-amber-200 text-left animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center gap-1.5 text-amber-900 font-extrabold text-[11px]">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Insatisfaction {rating}★ interceptée en privé</span>
                </div>
                <p className="text-[10px] text-amber-800 leading-tight">
                  Ce retour parvient au gérant SANS impacter votre note Google Maps :
                </p>
                <div className="text-[10px] p-2 rounded-lg border border-amber-200 bg-white text-slate-700 italic">
                  &ldquo;{sampleComplaint}&rdquo;
                </div>
                <div className="text-[9px] text-emerald-700 font-bold bg-emerald-100/60 p-1.5 rounded-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-700 shrink-0" />
                  <span>L&apos;IA a rédigé votre réponse en direct →</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer note inside phone & Google compliance */}
          <div className="pt-2 border-t border-slate-100">
            {rating !== null && rating <= 3 && (
              <p className="text-[9px] text-slate-400 hover:underline cursor-pointer flex items-center justify-center gap-1 mb-1">
                Laisser un avis directement sur Google
                <ExternalLink className="w-2.5 h-2.5" />
              </p>
            )}
            <p className="text-[9px] text-slate-400 font-medium">
              Conformité Loi 96 · Directives Google
            </p>
          </div>
        </div>
      </div>

      {/* 2. Side Showcase Card : REVEQ AI RESPONDER */}
      <div className="flex-1 max-w-xl text-left bg-white p-6 sm:p-7 rounded-3xl border border-border shadow-lg space-y-5">
        
        {/* Top Feature Tag */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            Nouveau dans REVEQ : Réponses Clients par IA
          </div>

          {rating !== null && (
            <button
              type="button"
              onClick={reset}
              className="text-xs text-slate-400 hover:text-foreground flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              Changer de note
            </button>
          )}
        </div>

        {/* Headline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            Ne perdez plus 20 minutes à rédiger vos réponses.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Choisissez simplement le ton souhaité. L&apos;IA de REVEQ génère immédiatement une réponse diplomatique, humaine et prête à envoyer.
          </p>
        </div>

        {/* Tone Selector Pills */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider">
            1. Choisissez le type de réponse :
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {RESPONSE_TONES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTone(t.id)}
                className={`p-2.5 rounded-xl text-xs font-bold transition flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                  tone === t.id
                    ? "bg-brand text-white border-brand shadow-sm scale-102"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span className="text-base">{t.emoji}</span>
                <span className="text-[11px] leading-tight text-center">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Live Generated AI Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-brand" />
              <span>2. Réponse rédigée en 1 seconde par l&apos;IA :</span>
            </label>
            <span className="text-[10px] text-slate-400 font-mono">Modèle REVEQ-AI</span>
          </div>

          <div className="relative">
            <textarea
              readOnly
              rows={6}
              value={aiGeneratedReply}
              className="w-full text-xs p-3.5 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-800 font-sans leading-relaxed resize-none focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-1">
          <Button
            size="sm"
            onClick={handleCopy}
            className="text-xs font-bold bg-brand hover:bg-brand-hover text-white shadow-xs"
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

          <span className="text-[11px] text-slate-500 font-semibold">
            Inclus dans le Forfait Unique 79 $ / mois
          </span>
        </div>

      </div>

    </div>
  );
}
