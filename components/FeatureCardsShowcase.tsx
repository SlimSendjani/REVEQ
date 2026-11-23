"use client";

import React from "react";
import { QrCode, Star, Sparkles, CheckSquare, Bell } from "lucide-react";

export function FeatureCardsShowcase() {
  return (
    <section id="fonctionnalites" className="py-12 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: Kit PDF prêt à imprimer */}
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            
            {/* Visual Top Preview */}
            <div className="h-44 w-full bg-[#f1f5f9]/70 rounded-xl p-3 flex items-center justify-center relative overflow-hidden mb-4">
              <div className="relative flex items-end justify-center gap-3">
                
                {/* 3D Acrylic Table Tent Stand (Left) */}
                <div className="w-24 bg-[#1e293b] rounded-t-lg rounded-b shadow-md p-2 flex flex-col items-center justify-between text-center transform -rotate-3 transition-transform hover:-rotate-4">
                  <div className="text-[7px] font-bold text-slate-200 uppercase tracking-wider mb-1">
                    Scannez l&apos;avis
                  </div>
                  <div className="p-1 bg-white rounded shadow-2xs">
                    <QrCode className="w-9 h-9 text-slate-900" />
                  </div>
                  <div className="flex gap-0.5 text-[#faa71d] mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-1.5 h-1.5 fill-[#faa71d]" />
                    ))}
                  </div>
                </div>

                {/* Counter Card Insert (Right) */}
                <div className="w-20 bg-white rounded-lg shadow-md border border-slate-200 p-2 flex flex-col items-center justify-between text-center transform rotate-2">
                  <div className="w-6 h-6 rounded-full bg-[#1e392a] text-white flex items-center justify-center text-[7px] font-bold">
                    La Piazza
                  </div>
                  <div className="flex gap-0.5 text-[#faa71d] my-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-1.5 h-1.5 fill-[#faa71d]" />
                    ))}
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full" />
                  <div className="w-10 h-1 bg-slate-100 rounded-full mt-1" />
                  <div className="w-full h-2 bg-amber-500/80 rounded-xs mt-2" />
                </div>

              </div>
            </div>

            {/* Content Bottom */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Kit PDF prêt à imprimer
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Chevalets de table et présentoirs comptoir bilingues au design épuré, prêts à imprimer en 1 clic.
              </p>
            </div>

          </div>

          {/* CARD 2: Réponses IA en 1 clic */}
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            
            {/* Visual Top Preview */}
            <div className="h-44 w-full bg-[#f1f5f9]/70 rounded-xl p-3 flex items-center justify-center relative overflow-hidden mb-4">
              <div className="w-full max-w-[230px] bg-white rounded-xl shadow-md border border-slate-200 p-3 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-900">
                    <Sparkles className="w-3 h-3 text-[#0e636a]" />
                    <span>Réponses IA en 1 clic</span>
                  </div>
                  <span className="text-slate-300 text-xs">•••</span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 text-[10px] text-slate-600 leading-tight">
                  « Bonjour, nous prenons bonne note de votre remarque et vous remercions de nous aider à nous améliorer... »
                </div>

                <div className="flex justify-end pt-0.5">
                  <button className="bg-[#0e636a] text-white text-[10px] font-bold px-3 py-1 rounded-md shadow-2xs">
                    Valider
                  </button>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Réponses IA en 1 clic
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                L&apos;IA rédige instantanément une réponse empathique et professionnelle adaptée à votre commerce.
              </p>
            </div>

          </div>

          {/* CARD 3: Alertes de retours privés */}
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            
            {/* Visual Top Preview */}
            <div className="h-44 w-full bg-[#f1f5f9]/70 rounded-xl p-3 flex items-center justify-center relative overflow-hidden mb-4">
              {/* Smartphone Frame with Notification */}
              <div className="relative w-full max-w-[210px] flex items-center justify-center">
                {/* Phone outline behind */}
                <div className="w-32 h-36 bg-slate-900 rounded-2xl border-2 border-slate-800 p-1.5 flex flex-col items-center">
                  <div className="w-8 h-1.5 bg-black rounded-full mb-1" />
                  <div className="w-full h-full bg-slate-950 rounded-xl" />
                </div>

                {/* Floating Notification Box in front */}
                <div className="absolute inset-x-0 bg-white rounded-xl p-2.5 shadow-lg border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-[10px]">
                    <CheckSquare className="w-3.5 h-3.5 text-[#0e636a] shrink-0" />
                    <span>Alertes de retours privés</span>
                  </div>
                  <p className="text-[9px] text-slate-500 leading-tight">
                    Notification mobile &amp; courriel instantanée envoyée directement au propriétaire.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Alertes de retours privés
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Recevez chaque insatisfaction immédiatement par courriel avant qu&apos;elle ne soit publiée sur Google Maps.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
