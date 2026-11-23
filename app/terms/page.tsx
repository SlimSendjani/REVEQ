"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Globe, CreditCard, RotateCcw, ShieldCheck, Scale } from "lucide-react";
import { type SupportedLocale } from "@/lib/i18n";

export default function TermsPage() {
  const [locale, setLocale] = useState<SupportedLocale>("fr");

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans flex flex-col justify-between">
      {/* Navbar */}
      <header className="w-full bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-black text-sm tracking-tighter">
            R
          </div>
          <span className="font-extrabold text-xl tracking-tight text-black">
            REV<span className="text-[#0e7470]">EQ</span>
          </span>
          <span className="text-xs bg-[#0e7470]/10 text-[#0e7470] font-semibold px-2 py-0.5 rounded-full ml-1">
            CGU / CGV
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-neutral-200 hover:bg-neutral-100 transition-colors text-neutral-700"
          >
            <Globe className="w-3.5 h-3.5 text-[#0e7470]" />
            <span>{locale === "fr" ? "English" : "Français"}</span>
          </button>
          <Link
            href="/"
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{locale === "fr" ? "Accueil" : "Home"}</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
        <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          {locale === "fr" ? (
            /* Version Française */
            <article className="space-y-8">
              <div className="border-b border-neutral-100 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e7470]/10 text-[#0e7470] text-xs font-bold mb-3">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Conditions Générales d&apos;Utilisation & de Vente</span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-black">
                  Conditions d&apos;Utilisation
                </h1>
                <p className="text-sm text-neutral-500 mt-2">
                  Dernière mise à jour : 23 novembre 2026 • REVEQ (Montréal, Québec, Canada)
                </p>
              </div>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#0e7470]" />
                  1. Abonnement, Tarification et Facturation Stripe
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  REVEQ propose un <strong>forfait unique tout inclus à 79 $ CAD / mois</strong> (taxes en sus le cas échéant), sans engagement de durée.
                </p>
                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1.5 pl-2">
                  <li><strong>Essai gratuit :</strong> Une période d&apos;essai gratuit de 7 jours est offerte lors de toute nouvelle souscription. Aucun prélèvement n&apos;est effectué avant la fin des 7 jours.</li>
                  <li><strong>Paiement sécurisé :</strong> Les transactions sont opérées par l&apos;infrastructure certifiée PCI-DSS de <strong>Stripe</strong>. Vos informations bancaires ne transitent jamais sur nos serveurs.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#0e7470]" />
                  2. Annulation en 1 clic & Sans engagement
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Vous conservez le contrôle total de votre abonnement. Vous pouvez résilier votre forfait à tout moment en <strong>1 seul clic</strong> depuis le portail client Stripe intégré dans votre tableau de bord (<em>Paramètres → Gérer la facturation</em>). La résiliation prend effet à la fin de la période de facturation mensuelle en cours.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0e7470]" />
                  3. Conformité aux directives des plateformes d&apos;avis
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  REVEQ est conçu dans le strict respect des politiques d&apos;utilisation des plateformes tierces, incluant Google Business Profile :
                </p>
                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1.5 pl-2">
                  <li>L&apos;application ne pratique pas le « review gating » déloyal : un lien direct et visible vers la publication d&apos;avis Google Maps est accessible en tout temps pour l&apos;ensemble des clients.</li>
                  <li>Le module de réponse IA fournit des suggestions de courtoisie et d&apos;apaisement commercial que l&apos;utilisateur demeure libre d&apos;éditer avant transmission.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#0e7470]" />
                  4. Droit applicable et juridiction
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Les présentes conditions sont régies et interprétées conformément aux lois en vigueur dans la <strong>province de Québec</strong> et aux lois fédérales du Canada applicables. Tout litige relève de la compétence exclusive des tribunaux du district judiciaire de Montréal (Québec).
                </p>
              </section>
            </article>
          ) : (
            /* English Version */
            <article className="space-y-8">
              <div className="border-b border-neutral-100 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e7470]/10 text-[#0e7470] text-xs font-bold mb-3">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Terms of Service & Subscription</span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-black">
                  Terms of Service
                </h1>
                <p className="text-sm text-neutral-500 mt-2">
                  Last Updated: November 23, 2026 • REVEQ (Montreal, Quebec, Canada)
                </p>
              </div>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#0e7470]" />
                  1. Subscription, Pricing & Stripe Billing
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  REVEQ provides a single <strong>all-inclusive plan at $79 CAD / month</strong> (applicable taxes extra), with no long-term commitment.
                </p>
                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1.5 pl-2">
                  <li><strong>7-Day Free Trial:</strong> A full 7-day trial period is granted upon new subscription creation. No billing occurs prior to trial expiration.</li>
                  <li><strong>PCI-DSS Certified Security:</strong> All financial transactions are processed by <strong>Stripe</strong>. Sensitive payment card details never reach or touch our servers.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#0e7470]" />
                  2. 1-Click Cancellation & Zero Commitment
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  You retain complete flexibility. Subscriptions can be canceled at any time in <strong>1 click</strong> directly via the Stripe Customer Portal inside your dashboard (<em>Settings → Manage Billing</em>). Cancellation takes effect at the end of the current billing cycle.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0e7470]" />
                  3. Platform Review Policy Compliance
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  REVEQ strictly adheres to third-party policies including Google Business Profile terms:
                </p>
                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1.5 pl-2">
                  <li>We do not enforce unfair review gating: a visible and direct link to publish public Google reviews is accessible to all patrons at all times.</li>
                  <li>The AI response generator provides suggested business apologies and compensation drafts which users review and approve before sending.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#0e7470]" />
                  4. Governing Law & Jurisdiction
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  These Terms are governed by and construed under the laws of the <strong>Province of Quebec</strong> and applicable federal laws of Canada. Any legal proceedings fall under the exclusive jurisdiction of the judicial district of Montreal (Quebec).
                </p>
              </section>
            </article>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-xs text-neutral-400 border-t border-neutral-200 bg-white">
        <div className="flex items-center justify-center gap-6">
          <Link href="/terms" className="text-[#0e7470] font-semibold">
            {locale === "fr" ? "Conditions d'utilisation" : "Terms of Service"}
          </Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-neutral-700 transition-colors">
            {locale === "fr" ? "Politique de confidentialité (Loi 25)" : "Privacy Policy (Law 25)"}
          </Link>
          <span>•</span>
          <Link href="/" className="hover:text-neutral-700 transition-colors">
            {locale === "fr" ? "Retour à l'accueil" : "Back to Home"}
          </Link>
        </div>
      </footer>
    </div>
  );
}
