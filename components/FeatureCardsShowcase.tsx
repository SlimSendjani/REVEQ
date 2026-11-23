"use client";

import React from "react";
import { QrCode, Sparkles, Bell, CheckCircle2, Star, Smartphone, Printer, ShieldCheck } from "lucide-react";

export function FeatureCardsShowcase() {
  return (
    <section id="fonctionnalites" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: Kit PDF prêt à imprimer */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
            
            {/* Visual Top Preview */}
            <div className="h-48 w-full bg-gradient-to-b from-slate-100 to-slate-200/50 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden mb-6">
              {/* Table Tent / Stand Graphic */}
              <div className="relative flex items-center justify-center gap-3">
                {/* Counter stand */}
                <div className="w-24 h-32 bg-white rounded-xl shadow-lg border border-slate-200 p-2.5 flex flex-col items-center justify-between text-center transform -rotate-3 transition-transform group-hover:-rotate-6">
                  <div className="w-full text-[7px] font-bold text-slate-800 border-b border-slate-100 pb-1">
                    Scannez pour votre avis
                  </div>
                  <div className="p-1 bg-slate-50 rounded border border-slate-200">
                    <QrCode className="w-9 h-9 text-slate-900" />
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-2 h-2 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Vertical table tent */}
                <div className="w-22 h-28 bg-[#1e293b] text-white rounded-xl shadow-xl p-2 flex flex-col items-center justify-between text-center transform rotate-3 transition-transform group-hover:rotate-6">
                  <span className="text-[6px] tracking-wider uppercase text-teal-300 font-bold">REVEQ</span>
                  <div className="p-1 bg-white rounded text-slate-900">
                    <QrCode className="w-8 h-8" />
                  </div>
                  <span className="text-[6px] text-slate-300">Merci de votre visite</span>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Kit PDF prêt à imprimer
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chevalets de table et présentoirs comptoir bilingues au design épuré, prêts à imprimer en 1 clic pour votre établissement.
              </p>
            </div>

          </div>

          {/* CARD 2: Réponses IA en 1 clic */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
            
            {/* Visual Top Preview */}
            <div className="h-48 w-full bg-gradient-to-b from-slate-100 to-slate-200/50 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden mb-6">
              {/* Floating UI Assistant Window */}
              <div className="w-full max-w-[260px] bg-white rounded-2xl shadow-lg border border-slate-200 p-3.5 space-y-2.5 transition-transform group-hover:-translate-y-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Sparkles className="w-3.5 h-3.5 text-[#0e7470]" />
                    <span>Réponses IA en 1 clic</span>
                  </div>
                  <span className="text-slate-300 text-xs">•••</span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-[11px] text-slate-700 leading-relaxed">
                  « Bonjour Camille, nous sommes sincèrement désolés pour l&apos;attente. Permettez-nous de vous offrir un café lors de votre prochain passage... »
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-slate-400">Tonalité : Chaleureux</span>
                  <button className="bg-[#0e7470] text-white text-[10px] font-bold px-3 py-1 rounded-lg shadow-xs">
                    Valider
                  </button>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Réponses IA en 1 clic
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Générez instantanément des réponses courtoises, empathiques et personnalisées adaptées au français québécois pour chaque critique.
              </p>
            </div>

          </div>

          {/* CARD 3: Alertes de retours privés */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
            
            {/* Visual Top Preview */}
            <div className="h-48 w-full bg-gradient-to-b from-slate-100 to-slate-200/50 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden mb-6">
              {/* Smartphone Mockup with Push Notification */}
              <div className="w-[180px] bg-slate-900 rounded-2xl p-2 shadow-xl border-2 border-slate-800 relative">
                <div className="w-10 h-2 bg-black rounded-full mx-auto mb-2" />
                
                {/* Notification Floating Banner */}
                <div className="bg-white rounded-xl p-2.5 shadow-md border border-slate-200 space-y-1 transform transition-transform group-hover:scale-105">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-[10px]">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span>Alerte retour privé</span>
                  </div>
                  <p className="text-[9px] text-slate-600 leading-tight">
                    Notification mobile & courriel instantanée envoyée directement à la direction.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Alertes de retours privés
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recevez chaque insatisfaction immédiatement par courriel avant qu&apos;elle ne soit publiée sur Google Maps.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
