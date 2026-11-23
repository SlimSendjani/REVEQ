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
  primaryColor = "#0E7470",
  language = "FR",
  logoUrl,
}: PreviewMobileProps) {
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const displayName = businessName.trim() || "Votre Établissement";
  const displaySlug = slug.trim() || "votre-commerce";

  return (
    <div className="flex flex-col items-center">
      {/* Phone container */}
      <div className="relative w-[300px] aspect-[9/18.5] bg-slate-900 rounded-[40px] p-3 shadow-2xl ring-1 ring-slate-800">
        
        {/* Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-800" />
        </div>

        {/* Screen */}
        <div className="relative h-full w-full bg-white rounded-[32px] overflow-hidden flex flex-col justify-between pt-7 pb-4 px-4 text-center select-none shadow-inner border border-slate-100">
          
          {/* Top URL preview bar */}
          <div className="text-[10px] bg-slate-100 text-slate-500 py-1 px-2 rounded-full font-mono truncate max-w-[200px] mx-auto border border-slate-200">
            app.reveq.ca/{displaySlug}
          </div>

          {/* Business Info */}
          <div className="mt-3">
            <div
              className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-sm"
              style={{ backgroundColor: primaryColor }}
            >
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt={displayName} className="w-full h-full object-cover rounded-2xl" />
              ) : (
                displayName.charAt(0).toUpperCase()
              )}
            </div>
            <h4 className="mt-2.5 text-sm font-bold text-foreground truncate px-2">
              {displayName}
            </h4>
            <p className="text-[10px] text-slate-400">
              {language === "EN" ? "Montreal, QC" : "Montréal, Québec"}
            </p>
          </div>

          {/* Core Interactive Area */}
          <div className="my-auto py-2">
            {selectedStar === null ? (
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-800 px-2 leading-snug">
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

                <p className="text-[10px] text-slate-400 italic">
                  Aperçu en direct du scan client
                </p>
              </div>
            ) : selectedStar >= 4 ? (
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 space-y-2">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-emerald-900">
                  {selectedStar}★ : Redirection Google Reviews
                </p>
                <p className="text-[10px] text-emerald-700">
                  Le client sera envoyé directement sur votre fiche pour laisser un avis 5 étoiles.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedStar(null)}
                  className="text-[10px] text-emerald-800 underline font-medium"
                >
                  Tester une autre note
                </button>
              </div>
            ) : (
              <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 space-y-2 text-left">
                <div className="flex items-center gap-1.5 text-amber-900 font-bold text-[11px]">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{selectedStar}★ : Interception privée</span>
                </div>
                <p className="text-[10px] text-amber-800 leading-snug">
                  Un formulaire privé s&apos;ouvre. Vous recevez l&apos;alerte par courriel en direct.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedStar(null)}
                  className="text-[10px] text-amber-800 underline font-medium block text-center w-full"
                >
                  Tester une autre note
                </button>
              </div>
            )}
          </div>

          {/* Footer note inside phone */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-[9px] text-slate-400 flex items-center justify-center gap-1">
              Publier directement sur Google
              <ExternalLink className="w-2.5 h-2.5" />
            </span>
          </div>

        </div>
      </div>

      <span className="text-xs text-slate-500 font-medium mt-3">
        📱 Rendu mobile en direct pour vos clients
      </span>
    </div>
  );
}
