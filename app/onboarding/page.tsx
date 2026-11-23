import React from "react";
import Link from "next/link";
import { OnboardingForm } from "@/components/OnboardingForm";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Onboarding Express (3 min) | Kit Réputation Google",
  description: "Configurez le filtre intelligent d'avis pour votre commerce au Québec en 3 minutes.",
};

export default function OnboardingPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  return (
    <div className="min-h-screen bg-background-subtle selection:bg-brand-light selection:text-brand flex flex-col">
      {/* Top minimal header */}
      <header className="border-b border-border bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-base shadow-sm">
              K
            </div>
            <span className="font-extrabold text-base tracking-tight text-foreground">
              Kit Réputation <span className="text-brand font-semibold">Google</span>
            </span>
          </Link>

          <Link
            href="/"
            className="text-xs font-semibold text-slate-500 hover:text-foreground flex items-center gap-1.5 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10 sm:py-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Déploiement instantané · Conforme Loi 96 Québec
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
            Configurez votre Kit Réputation
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Remplissez les informations ci-dessous et visualisez votre rendu mobile en temps réel à droite.
          </p>
        </div>

        {/* Wizard Form */}
        <OnboardingForm initialPlan={searchParams.plan} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-xs text-slate-400 bg-white">
        Kit Réputation Google · Conçu pour les commerces locaux au Québec · Loi 96 & Loi 25
      </footer>
    </div>
  );
}
