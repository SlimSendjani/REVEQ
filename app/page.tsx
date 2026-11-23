import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { HeroVisualShowcase } from "@/components/HeroVisualShowcase";
import { FeatureCardsShowcase } from "@/components/FeatureCardsShowcase";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { FinancialBleedCalculator } from "@/components/FinancialBleedCalculator";
import { PricingSection } from "@/components/PricingSection";
import { ArrowRight, Check, ShieldCheck, HelpCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 font-sans selection:bg-[#0e7470]/20 selection:text-[#0e7470]">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <section
        className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs mb-6">
            <span>Sécuriser les commerces et restos d&apos;ici</span>
            <span>⚜️🍁</span>
          </div>

          {/* Main Headline H1 matching reference */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] max-w-4xl mx-auto">
            Ne laissez plus un seul{" "}
            <span className="text-orange-600 font-black">
              avis 1<span className="text-amber-500">★</span>
            </span>{" "}
            couler votre entreprise.
          </h1>

          {/* Subtitle matching reference */}
          <p className="mt-5 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            La solution simple pour transformer vos clients satisfaits en avis 5<span className="text-amber-500">★</span> sur Google Maps et recevoir les critiques en privé, avant qu&apos;elles ne nuisent à votre réputation.
          </p>

          {/* CTAs matching reference */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-8">
            <Link href="/onboarding" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#0e7470] hover:bg-[#0c625f] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5">
                <span>Essai gratuit de 7 jours</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <a href="#demo" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all shadow-xs hover:border-slate-300">
                Voir la démo interactive
              </button>
            </a>
          </div>

          {/* Trust badges line */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Sans carte de crédit
            </span>
            <span>•</span>
            <span>Sans engagement</span>
            <span>•</span>
            <span>Conforme Loi 96</span>
          </div>

          {/* 3. HERO VISUAL SHOWCASE (DUAL DESKTOP & SMARTPHONE MOCKUP) */}
          <div className="mt-12 sm:mt-16">
            <HeroVisualShowcase />
          </div>

        </div>
      </section>

      {/* 4. THREE FEATURE CARDS SHOWCASE */}
      <FeatureCardsShowcase />

      {/* 5. INTERACTIVE DEMO (AIGUILLAGE & RIPOSTE IA) */}
      <section id="demo" className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e7470]/10 text-[#0e7470] text-xs font-bold mb-3">
            <span>Testez en Direct</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Expérimentez la bascule 5★ vs 1★ et l&apos;IA de riposte
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
            Touchez une note ci-dessous pour voir comment vos clients sont aiguillés en temps réel et comment l&apos;IA formule une réponse immédiate.
          </p>

          <InteractiveDemo />
        </div>
      </section>

      {/* 6. FINANCIAL BLEED CALCULATOR */}
      <section id="calculateur" className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <FinancialBleedCalculator />
        </div>
      </section>

      {/* 7. PRICING SECTION (79 $ CAD / MOIS) */}
      <PricingSection />

      {/* 8. FAQ SECTION */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Questions Fréquentes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Tout ce que vous devez savoir avant de déployer REVEQ dans votre établissement.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-2">
              <h3 className="font-bold text-base text-slate-900">
                Est-ce conforme aux directives officielles de Google Maps ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Oui, à 100 %. Nous ne bloquons aucun avis Google. Un lien direct « Publier directement sur Google » reste accessible en tout temps sur le formulaire pour respecter scrupuleusement les conditions de Google tout en invitant courtoisement les clients mécontents à s&apos;exprimer d&apos;abord en privé.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-2">
              <h3 className="font-bold text-base text-slate-900">
                Comment respectez-vous la Loi 96 et la Loi 25 au Québec ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Toutes nos interfaces, kits imprimables et formulaires sont rédigés nativement en français québécois de qualité. Une bascule bilingue est disponible pour les clientèles touristiques. Les données personnelles respectent la Loi 25 (protection des renseignements personnels, aucune revente de données).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-2">
              <h3 className="font-bold text-base text-slate-900">
                Que comprend exactement le forfait à 79 $ CAD / mois ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Le forfait unique englobe la totalité des fonctionnalités : QR codes et chevalets de table illimités en PDF prêt à imprimer, interception des avis privés, alertes immédiates par courriel, générateur IA de réponses en 4 tonalités et rapport mensuel de ROI. Sans engagement, annulable en 1 clic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-slate-200/80 py-10 bg-slate-50 text-xs text-slate-500 font-sans">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-black text-slate-900 text-base">
              REV<span className="text-[#0e7470]">EQ</span>
            </span>
            <span>· Conçu à Montréal, Québec · © 2026 REVEQ</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            <Link href="/terms" className="hover:text-black transition-colors">
              Conditions (79 $/mois)
            </Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-black transition-colors">
              Confidentialité (Loi 25)
            </Link>
            <span>·</span>
            <Link href="/login" className="text-[#0e7470] font-semibold hover:underline">
              Connexion
            </Link>
            <span>·</span>
            <Link href="/onboarding" className="text-[#0e7470] font-semibold hover:underline">
              Essai Gratuit 7 jours
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
