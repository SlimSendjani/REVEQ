import React from "react";
import Link from "next/link";
import { OnboardingForm } from "@/components/OnboardingForm";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "Activation Express REVEQ (3 min) | Forfait 79 $",
  description: "Configurez votre système de réputation REVEQ et l'assistant IA de réponse aux clients.",
};

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-brand selection:text-black flex flex-col">
      {/* Top minimal header */}
      <header className="border-b border-white/10 bg-dark-950/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-brand-dark to-brand flex items-center justify-center text-black font-black text-base shadow-glow-sm">
              R
            </div>
            <span className="font-black text-lg tracking-tight text-white">
              REV<span className="text-brand">EQ</span>
            </span>
          </Link>

          <Link
            href="/"
            className="text-xs font-mono font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour au site
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10 sm:py-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-mono font-bold mb-3 border border-brand/20">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            FORFAIT UNIQUE TOUT INCLUS 79 $ / MOIS · 7 JOURS SANS FRAIS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Activez votre REVEQ en 3 minutes
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Renseignez votre établissement ci-dessous. Vos QR Codes et votre IA sont activés instantanément.
          </p>
        </div>

        {/* Wizard Form */}
        <OnboardingForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-500 bg-dark-950 font-mono">
        REVEQ · Le système de réputation sous pilote automatique pour commerces au Québec
      </footer>
    </div>
  );
}
