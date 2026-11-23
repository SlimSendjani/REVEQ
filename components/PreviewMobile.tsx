"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, ShieldAlert, ExternalLink } from "lucide-react";

interface PreviewMobileProps {
  businessName: string;
  slug: string;
  primaryColor?: string;
  language?: "FR" | "EN" | "BOTH";
  logoUrl?: string | null;
}

export function PreviewMobile({
  businessName,
  slug,
  primaryColor = "#00F59B",
  language = "FR",
  logoUrl,
}: PreviewMobileProps) {
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const displayName = businessName.trim() || "Votre Établissement";
  const displaySlug = slug.trim() || "votre-commerce";

  return (
    <div className="flex flex-col items-center">
      {/* Phone container */}
      <div className="relative w-[300px] aspect-[9/18.5] bg-black rounded-[42px] p-3 shadow-2xl ring-1 ring-white/10">
        
        {/* Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-dark-950 rounded-full z-20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-800" />
        </div>

        {/* Screen */}
        <div className="relative h-full w-full bg-dark-950 rounded-[34px] overflow-hidden flex flex-col justify-between pt-7 pb-4 px-4 text-center select-none border border-white/5 text-white">
          
          {/* Top URL preview bar */}
          <div className="text-[10px] bg-dark-900 text-slate-400 py-1 px-3 rounded-full font-mono truncate max-w-[200px] mx-auto border border-white/10">
            app.reveq.ca/{displaySlug}
          </div>

          {/* Business Info */}
          <div className="mt-3">
            <div
              className="w-13 h-13 mx-auto rounded-2xl flex items-center justify-center font-black text-xl text-black shadow-glow-sm"
              style={{ backgroundColor: primaryColor }}
            >
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt={displayName} className="w-full h-full object-cover rounded-2xl" />
              ) : (
                displayName.charAt(0).toUpperCase()
              )}
            </div>
            <h4 className="mt-2.5 text-sm font-black text-white truncate px-2">
              {displayName}
            </h4>
            <p className="text-[10px] text-slate-400 font-mono">
              {language === "EN" ? "Montreal, QC" : "Montréal, Québec"}
            </p>
          </div>

          {/* Core Interactive Area */}
          <div className="my-auto py-2">
            {selectedStar === null ? (
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-200 px-2 leading-snug">
                  {language === "EN"
                    ? "How was your experience today?"
                    : "Comment s'est déroulée votre expérience aujourd'hui ?"}
                </p>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedStar(s)}
                      className="p-1 hover:scale-110 transition cursor-pointer"
                      aria-label={`${s} étoiles`}
                    >
                      <Star className="w-6 h-6 fill-star text-star" />
                    </button>
                  ))}
                </div>

                <p className="text-[10px] text-slate-500 font-mono italic">
                  Aperçu direct du scan client
                </p>
              </div>
            ) : selectedStar >= 4 ? (
              <div className="bg-brand/10 p-3 rounded-2xl border border-brand/30 space-y-1.5 text-center">
                <CheckCircle2 className="w-7 h-7 text-brand mx-auto shadow-glow-sm" />
                <p className="text-xs font-black text-brand">
                  {selectedStar}★ : Redirection Google Reviews
                </p>
                <p className="text-[10px] text-slate-300">
                  Le client est envoyé directement sur votre fiche Google Maps pour poster son avis 5 étoiles.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedStar(null)}
                  className="text-[10px] text-brand underline font-mono"
                >
                  Tester une autre note
                </button>
              </div>
            ) : (
              <div className="bg-amber-500/10 p-2.5 rounded-2xl border border-amber-500/30 space-y-1.5 text-left">
                <div className="flex items-center gap-1.5 text-amber-400 font-black text-[11px] uppercase">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>{selectedStar}★ : Interception privée</span>
                </div>
                <p className="text-[10px] text-slate-300 leading-snug">
                  Un formulaire privé s&apos;ouvre. Vous recevez l&apos;alerte par courriel en direct et l&apos;IA génère la réponse.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedStar(null)}
                  className="text-[10px] text-amber-400 underline font-mono block text-center w-full"
                >
                  Tester une autre note
                </button>
              </div>
            )}
          </div>

          {/* Footer note inside phone */}
          <div className="pt-2 border-t border-white/5">
            <span className="text-[9px] text-slate-500 font-mono flex items-center justify-center gap-1">
              Publier directement sur Google
              <ExternalLink className="w-2.5 h-2.5" />
            </span>
          </div>

        </div>
      </div>

      <span className="text-xs text-slate-400 font-mono mt-3">
        📱 Rendu mobile en direct pour vos clients
      </span>
    </div>
  );
}
