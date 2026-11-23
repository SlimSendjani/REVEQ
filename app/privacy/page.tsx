"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Globe, Lock, UserCheck, Trash2, Mail } from "lucide-react";
import { type SupportedLocale } from "@/lib/i18n";

export default function PrivacyPage() {
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
            Loi 25
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
            /* Version Française (Conforme Loi 25 Québec) */
            <article className="space-y-8">
              <div className="border-b border-neutral-100 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e7470]/10 text-[#0e7470] text-xs font-bold mb-3">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Conformité Loi 25 du Québec</span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-black">
                  Politique de Confidentialité
                </h1>
                <p className="text-sm text-neutral-500 mt-2">
                  Dernière mise à jour : 23 novembre 2026 • Entité responsable : REVEQ (Montréal, Québec)
                </p>
              </div>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#0e7470]" />
                  1. Engagement de conformité à la Loi 25
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  REVEQ s&apos;engage formellement à respecter la <em>Loi modernisant des dispositions législatives en matière de protection des renseignements personnels</em> (Loi 25 du Québec). Nous appliquons les principes de collecte minimale, de transparence absolue, de limitation des finalités et de sécurité renforcée.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#0e7470]" />
                  2. Renseignements recueillis et finalités
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Nous ne collectons que les renseignements strictement nécessaires à l&apos;exécution de nos services :
                </p>
                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1.5 pl-2">
                  <li><strong>Commerçants abonnés :</strong> Nom commercial, adresse courriel d&apos;alerte, identifiant Stripe client, adresse de redirection Google Maps.</li>
                  <li><strong>Clients finaux (formulaire d&apos;avis privé) :</strong> Nom ou prénom (facultatif), numéro de téléphone ou courriel (facultatif), commentaire d&apos;expérience. Ces données sont utilisées exclusivement pour permettre à la direction du commerce de faire le suivi de l&apos;incident.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <Trash2 className="w-4 h-4 text-[#0e7470]" />
                  3. Vos droits : Accès, Rectification et Suppression
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Conformément à la législation québécoise, vous disposez des droits suivants sur vos renseignements personnels :
                </p>
                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1.5 pl-2">
                  <li>Droit d&apos;accès à vos données personnelles conservées dans nos bases.</li>
                  <li>Droit de rectification de toute information inexacte ou incomplète.</li>
                  <li>Droit à la suppression définitive (« droit à l&apos;oubli ») sur simple demande écrite.</li>
                  <li>Droit de retirer votre consentement au traitement à tout moment.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0e7470]" />
                  4. Responsable de la protection des renseignements personnels
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Pour exercer l&apos;un de vos droits ou pour toute question relative au traitement de vos données, veuillez vous adresser directement à notre Responsable de la protection des données :
                </p>
                <div className="p-4 rounded-xl bg-neutral-100 text-sm text-neutral-800 space-y-1">
                  <p><strong>Responsable :</strong> Direction de la protection des données — REVEQ</p>
                  <p><strong>Courriel officiel :</strong> <a href="mailto:privacy@reveq.ca" className="text-[#0e7470] underline">privacy@reveq.ca</a></p>
                  <p><strong>Lieu :</strong> Montréal (Québec), Canada</p>
                  <p><strong>Délai de réponse :</strong> Sous 30 jours civils maximum, conformément aux exigences de la Commission d&apos;accès à l&apos;information (CAI).</p>
                </div>
              </section>
            </article>
          ) : (
            /* English Version (Quebec Law 25 Compliant) */
            <article className="space-y-8">
              <div className="border-b border-neutral-100 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e7470]/10 text-[#0e7470] text-xs font-bold mb-3">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Quebec Law 25 Compliance</span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-black">
                  Privacy Policy
                </h1>
                <p className="text-sm text-neutral-500 mt-2">
                  Last Updated: November 23, 2026 • Operating Entity: REVEQ (Montreal, Quebec)
                </p>
              </div>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#0e7470]" />
                  1. Commitment to Quebec Law 25
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  REVEQ strictly adheres to Quebec&apos;s <em>Act modernizing legislative provisions respecting the protection of personal information</em> (Law 25). We uphold data minimization, full transparency, purpose limitation, and encryption standards.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#0e7470]" />
                  2. Collected Data & Purposes
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We collect only the personal information strictly required for service delivery:
                </p>
                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1.5 pl-2">
                  <li><strong>Subscribed Businesses:</strong> Trade name, alert notification email, Stripe customer ID, Google Maps review destination.</li>
                  <li><strong>End Customers (Private Feedback Form):</strong> Name (optional), phone or email (optional), detailed feedback message. This data is exclusively processed to enable management follow-up on service issues.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <Trash2 className="w-4 h-4 text-[#0e7470]" />
                  3. Your Rights: Access, Rectification & Erasure
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  In accordance with Quebec privacy laws, you possess the right to:
                </p>
                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1.5 pl-2">
                  <li>Access personal information stored in our databases.</li>
                  <li>Rectify any inaccurate, outdated, or incomplete data.</li>
                  <li>Request permanent data deletion (&quot;right to be forgotten&quot;).</li>
                  <li>Withdraw your processing consent at any time.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0e7470]" />
                  4. Privacy Officer Contact
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  To exercise your rights or submit an inquiry regarding your personal data, contact our designated Privacy Officer:
                </p>
                <div className="p-4 rounded-xl bg-neutral-100 text-sm text-neutral-800 space-y-1">
                  <p><strong>Officer:</strong> Data Protection Department — REVEQ</p>
                  <p><strong>Email:</strong> <a href="mailto:privacy@reveq.ca" className="text-[#0e7470] underline">privacy@reveq.ca</a></p>
                  <p><strong>Location:</strong> Montreal (Quebec), Canada</p>
                  <p><strong>Response SLA:</strong> Within 30 calendar days as mandated by the Commission d&apos;accès à l&apos;information (CAI).</p>
                </div>
              </section>
            </article>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-xs text-neutral-400 border-t border-neutral-200 bg-white">
        <div className="flex items-center justify-center gap-6">
          <Link href="/terms" className="hover:text-neutral-700 transition-colors">
            {locale === "fr" ? "Conditions d'utilisation" : "Terms of Service"}
          </Link>
          <span>•</span>
          <Link href="/privacy" className="text-[#0e7470] font-semibold">
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
