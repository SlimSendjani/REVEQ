"use client";

import React, { useState } from "react";
import { Star, ShieldAlert, CheckCircle2, ArrowRight, RotateCcw, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function InteractiveDemo() {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const reset = () => {
    setRating(null);
    setHoverRating(null);
    setFeedbackSent(false);
  };

  const activeRating = hoverRating || rating || 0;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-4xl mx-auto my-8">
      {/* Smartphone frame container */}
      <div className="relative w-full max-w-[320px] aspect-[9/19] bg-slate-900 rounded-[44px] p-3.5 shadow-2xl ring-1 ring-slate-800">
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>

        {/* Screen content */}
        <div className="relative h-full w-full bg-white rounded-[34px] overflow-hidden flex flex-col justify-between pt-8 pb-4 px-4 text-center select-none shadow-inner border border-slate-100">
          
          {/* Header & Logo */}
          <div>
            <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-light text-brand flex items-center justify-center font-bold text-xl shadow-sm border border-brand/10">
              ☕
            </div>
            <h3 className="mt-3 text-base font-bold text-foreground">
              Café Le Petit Saint-Denis
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">Plateau Mont-Royal · Montréal</p>
          </div>

          {/* Central Interactive Card */}
          <div className="my-auto py-2">
            {rating === null ? (
              <div className="space-y-4">
                <p className="text-sm font-semibold text-foreground px-2">
                  Comment s&apos;est déroulée votre visite aujourd&apos;hui ?
                </p>

                {/* 5 Tactile Stars */}
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

                <p className="text-[11px] text-slate-400">
                  Touchez les étoiles pour tester l&apos;expérience client
                </p>
              </div>
            ) : rating >= 4 ? (
              /* POSITIVE ROUTING (4-5 Stars) -> Google Maps */
              <div className="space-y-3 bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-200 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-900 block">
                    Expérience 5 Étoiles détectée !
                  </span>
                  <p className="text-[11px] text-emerald-800 leading-relaxed">
                    Redirection automatique vers la fiche Google Maps en cours...
                  </p>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-emerald-100 shadow-xs text-left text-[11px] space-y-1">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="font-semibold text-slate-700">Google Reviews</span>
                    <div className="flex text-star text-[10px]">★★★★★</div>
                  </div>
                  <p className="text-slate-600 truncate">Partagez votre avis publiquement</p>
                </div>
              </div>
            ) : (
              /* INTERCEPTION ROUTING (1-3 Stars) -> Private Feedback */
              <div className="space-y-2.5 bg-amber-50/80 p-3 rounded-2xl border border-amber-200 text-left animate-in fade-in zoom-in-95 duration-200">
                {!feedbackSent ? (
                  <>
                    <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs">
                      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Insatisfaction interceptée</span>
                    </div>
                    <p className="text-[11px] text-amber-800 leading-snug">
                      Ce retour reste 100% privé et parvient directement au gérant :
                    </p>
                    <textarea
                      readOnly
                      rows={2}
                      value="Le temps d'attente était un peu long et mon café était tiède..."
                      className="w-full text-[11px] p-2 rounded-lg border border-amber-200 bg-white text-slate-700 resize-none focus:outline-none"
                    />
                    <Button
                      size="sm"
                      onClick={() => setFeedbackSent(true)}
                      className="w-full text-[11px] py-1.5 bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      Envoyer à la direction (Privé)
                    </Button>
                  </>
                ) : (
                  <div className="py-3 text-center space-y-1.5">
                    <div className="w-8 h-8 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold text-slate-800">Retour transmis en privé !</p>
                    <p className="text-[10px] text-slate-600">
                      Alerte courriel instantanée envoyée au propriétaire. Zéro impact sur la note publique Google.
                    </p>
                  </div>
                )}
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
            <p className="text-[9px] text-slate-400">
              Conformité stricte Loi 96 · Directives Google
            </p>
          </div>
        </div>
      </div>

      {/* Explanation side card */}
      <div className="flex-1 max-w-md text-left space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-bold">
          Simulateur Interactif en direct
        </div>

        <h3 className="text-2xl font-bold text-foreground">
          Voyez la différence en 1 clic
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed">
          Un code QR standard envoie indistinctement 100% des clients mécontents sur Google. Notre filtre intelligent sépare les parcours en temps réel :
        </p>

        <div className="space-y-3">
          <div className={`p-3 rounded-xl border transition-all ${
            rating !== null && rating >= 4
              ? "border-emerald-300 bg-emerald-50/50 ring-1 ring-emerald-200"
              : "border-border bg-white"
          }`}>
            <div className="flex items-center gap-2 font-semibold text-xs text-foreground">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>Parcours 4-5 Étoiles (Clients Heureux)</span>
            </div>
            <p className="mt-1 text-xs text-slate-600 pl-7">
              Redirection immédiate vers Google Maps pour maximiser les avis positifs et propulser votre référencement local.
            </p>
          </div>

          <div className={`p-3 rounded-xl border transition-all ${
            rating !== null && rating <= 3
              ? "border-amber-300 bg-amber-50/50 ring-1 ring-amber-200"
              : "border-border bg-white"
          }`}>
            <div className="flex items-center gap-2 font-semibold text-xs text-foreground">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">
                !
              </span>
              <span>Parcours 1-3 Étoiles (Clients Mécontents)</span>
            </div>
            <p className="mt-1 text-xs text-slate-600 pl-7">
              Formulaire privé instantané. Le problème est intercepté en interne avant qu&apos;il ne détruise votre note publique.
            </p>
          </div>
        </div>

        {rating !== null && (
          <Button
            variant="outline"
            size="sm"
            onClick={reset}
            className="text-xs text-slate-600"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1" />
            Réinitialiser le simulateur
          </Button>
        )}
      </div>
    </div>
  );
}
