import React from "react";
import Link from "next/link";
import { OnboardingForm } from "@/components/OnboardingForm";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Activation Express REVEQ (3 min) | Forfait 79 $",
  description: "Configurez votre système de réputation REVEQ et l'assistant IA de réponse aux clients.",
};

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-background-subtle selection:bg-brand-light selection:text-brand flex flex-col">
      {/* Top minimal header */}
      <header className="border-b border-border bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-brand-dark to-brand flex items-center justify-center text-white font-black text-base shadow-sm">
              R
            </div>
            <span className="font-black text-lg tracking-tight text-foreground">
              REV<span className="text-brand">EQ</span>
            </span>
          </Link>

          <Link
            href="/"
            className="text-xs font-semibold text-slate-500 hover:text-foreground flex items-center gap-1.5 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour au site
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10 sm:py-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            Forfait Unique Tout Inclus 79 $ / mois · 7 jours d&apos;essai gratuit
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
            Activez votre REVEQ en 3 minutes
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Renseignez votre commerce ci-dessous et visualisez votre rendu mobile en direct.
          </p>
        </div>

        {/* Wizard Form */}
        <OnboardingForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-xs text-slate-400 bg-white">
        REVEQ · Le système de réputation sous pilote automatique pour commerces au Québec
      </footer>
    </div>
  );
}
