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
  Sparkles,
  Zap,
  Terminal,
} from "lucide-react";
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
    <div className="w-full max-w-6xl mx-auto my-8 font-sans">
      
      {/* Outer Container */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl overflow-hidden">
        
        {/* Top Control Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0e7470] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0e7470]" />
            </span>
            <span className="text-slate-900 font-extrabold tracking-wider uppercase">
              DÉMO INTERACTIVE · AIGUILLAGE &amp; RIPOSTE IA
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-slate-500 hidden sm:inline">Temps de réponse IA : &lt; 1 seconde</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">
              Note testée : <strong className="text-slate-900">{rating ? `${rating}★` : "En attente"}</strong>
            </span>
            <button
              type="button"
              onClick={() => setRating(rating === 2 ? 5 : 2)}
              className="text-xs text-[#0e7470] hover:underline font-bold flex items-center gap-1 cursor-pointer bg-[#0e7470]/10 px-2.5 py-1 rounded-lg"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Bascule rapide ({rating === 2 ? "Passer à 5★" : "Passer à 2★"})</span>
            </button>
          </div>
        </div>

        {/* Dual Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* LEFT: Client Mobile Preview (42% width) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="w-full text-left mb-3 flex items-center justify-between text-xs">
              <span className="text-slate-600 uppercase font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0e7470]" />
                Vue Client (Scan QR Code)
              </span>
              <span className="text-[11px] text-slate-400">Canal Smartphone</span>
            </div>

            {/* Custom Phone Chassis */}
            <div className="relative w-full max-w-[320px] rounded-[42px] p-3.5 bg-slate-900 border-2 border-slate-800 shadow-2xl">
              
              {/* Dynamic Island */}
              <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Screen Body */}
              <div className="relative h-[480px] w-full bg-white rounded-[32px] overflow-hidden flex flex-col justify-between pt-6 pb-4 px-4 text-center select-none border border-slate-100 shadow-inner">
                
                {/* Merchant Branding */}
                <div>
                  <div className="w-11 h-11 mx-auto rounded-full bg-[#1e3932] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    ☕
                  </div>
                  <h4 className="mt-2 text-xs font-extrabold text-slate-900 tracking-tight">
                    Café &amp; Bistro Le Saint-Laurent
                  </h4>
                  <p className="text-[10px] text-slate-400">Boul. Saint-Laurent · Montréal</p>
                </div>

                {/* Star Interactive Rating Zone */}
                <div className="py-2">
                  <p className="text-xs font-bold text-slate-800 mb-2">
                    Comment s&apos;est déroulé votre service ?
                  </p>

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
                              ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                              : "text-slate-200 fill-slate-100"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <p className="text-[10px] text-slate-400 mt-1 font-medium">
                    {rating ? `Sélectionné : ${rating} étoiles` : "Touchez une étoile pour tester"}
                  </p>
                </div>

                {/* Routing Outcome State */}
                <div className="mb-2">
                  {rating !== null && rating >= 4 ? (
                    /* 4-5 STARS: Google Maps Route */
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-left space-y-2 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>AIGUILLAGE PUBLIC GOOGLE</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-snug">
                        Client ravi ! Il est propulsé directement sur votre fiche <strong>Google Maps</strong> pour publier son 5★.
                      </p>
                      <div className="pt-1">
                        <div className="w-full py-2 rounded-xl bg-[#0e7470] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm">
                          <span>Publier l&apos;avis 5★ sur Google</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* 1-3 STARS: Thermal Incident Ticket */
                    <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-left space-y-2 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center gap-1.5 text-amber-900 font-extrabold text-xs">
                        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>INTERCEPTION PRIVÉE IMMÉDIATE</span>
                      </div>
                      
                      {/* Ticket cutout */}
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-700 space-y-1">
                        <div className="text-slate-400 flex justify-between text-[9px] font-semibold">
                          <span>MESSAGE REÇU EN PRIVÉ</span>
                          <span className="text-emerald-700 font-bold">0 VISIBILITÉ GOOGLE</span>
                        </div>
                        <p className="italic text-slate-800 line-clamp-2">
                          &ldquo;{sampleComplaint}&rdquo;
                        </p>
                      </div>

                      <div className="text-[10px] text-[#0e7470] font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#0e7470]" />
                        <span>Réponse IA formulée ci-contre →</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Legal compliance subtext */}
                <div className="text-[9px] text-slate-400 pt-1 border-t border-slate-100">
                  Conforme Loi 96 Québec · Directives Google
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT: AI Response Cockpit (58% width) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-5">
            
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[#0e7470] uppercase font-extrabold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#0e7470]" />
                  ASSISTANT IA DE RIPOSTE CLIENT
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0e7470]/10 border border-[#0e7470]/20 text-[#0e7470] text-xs font-bold">
                  Inclus dans les 79 $ / mois
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Désamorcez les mécontents avant qu&apos;ils ne quittent votre table.
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Choisissez l&apos;angle de riposte souhaité. L&apos;IA génère instantanément la réponse parfaite rédigée en bon français québécois, prête à envoyer par courriel ou SMS.
              </p>
            </div>

            {/* 4 Selectable Response Tones */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Choisir la tonalité de la réponse IA :
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "chaleureux", label: "Chaleureux", desc: "Empathique & humain", icon: "🤝" },
                  { id: "professionnel", label: "Institutionnel", desc: "Formel & courtois", icon: "👔" },
                  { id: "rabais", label: "Geste commercial", desc: "Compensation & offre", icon: "🎟️" },
                  { id: "explicatif", label: "Contexte rush", desc: "Affluence & transparence", icon: "⚡" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id as ResponseTone)}
                    className={`p-3 rounded-2xl text-left transition-all border ${
                      tone === t.id
                        ? "bg-[#0e7470]/10 border-[#0e7470] text-slate-900 shadow-sm"
                        : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <div className="text-base mb-1">{t.icon}</div>
                    <div className="text-xs font-bold tracking-tight">{t.label}</div>
                    <div className="text-[10px] text-slate-500">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generated AI Response Output */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3 relative">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Brouillon IA généré en temps réel :</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copier la réponse</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-normal bg-white p-4 rounded-xl border border-slate-200">
                {aiReply}
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>✓ Prêt pour envoi SMS ou Courriel</span>
                <span className="text-[#0e7470] font-bold">Modifiable en 1 clic</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
