import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  QrCode,
  ArrowRight,
  FileText,
  Tablet,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-brand-light selection:text-brand">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-border bg-gradient-to-b from-background via-background-subtle to-background">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light text-brand text-xs font-bold mb-6 border border-brand/20 shadow-xs">
            <ShieldCheck className="w-4 h-4" />
            SaaS Spécialisé Commerces du Québec · Conforme Loi 96 & Loi 25
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground max-w-4xl leading-[1.12]">
            Transformez vos clients satisfaits en{" "}
            <span className="text-brand">avis Google 5 étoiles</span>.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Interceptez les insatisfactions en privé avant qu&apos;elles n&apos;impactent votre fiche publique. Zéro logistique, sans engagement, déployé en 3 minutes.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link href="/onboarding" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-4 font-bold shadow-lg shadow-brand/20">
                Créer mon Kit Gratuitement (7 jours d&apos;essai)
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <a href="#simulateur" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-6">
                Tester le simulateur
              </Button>
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Activation instantanée · Aucune carte de crédit requise pour prévisualiser · Annulation en 1 clic
          </p>

          {/* Interactive Mobile Demo */}
          <div className="w-full mt-10" id="simulateur">
            <InteractiveDemo />
          </div>

        </div>
      </section>

      {/* Comparison Problem vs Solution Section */}
      <section className="py-20 border-b border-border bg-white" id="comparaison">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand px-3 py-1 bg-brand-light rounded-full">
              Pourquoi les codes QR classiques sont dangereux
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-3">
              Un seul avis 1 étoile coûte des milliers de dollars en chiffre d&apos;affaires
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Sur Google Maps, passer de 4.6 à 4.1 étoiles vous fait disparaître du pack local des 3 premiers résultats à Montréal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* The Old Way */}
            <div className="p-6 sm:p-8 rounded-2xl border border-red-200 bg-red-50/30 space-y-4">
              <div className="flex items-center gap-2 text-red-700 font-bold text-lg">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3>Le code QR ou sticker gratuit</h3>
              </div>
              <ul className="space-y-3 text-sm text-red-950/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Envoie indistinctement les clients mécontents directement sur votre fiche Google.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>0 % d&apos;interception : vous découvrez le problème une fois l&apos;avis 1 étoile publié.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Aucun moyen de recontacter le client pour rectifier le tir à l&apos;amiable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Ou alors, des agences vous facturent 300 $ à 500 $/mois avec engagement d&apos;un an.</span>
                </li>
              </ul>
            </div>

            {/* Our Solution */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-brand bg-brand-light/30 space-y-4">
              <div className="flex items-center gap-2 text-brand font-bold text-lg">
                <CheckCircle2 className="w-6 h-6 text-brand" />
                <h3>Notre Kit Réputation Google</h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Filtre dynamique :</strong> Les 4-5★ vont sur Google, les 1-3★ restent en privé.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Alerte courriel d&apos;urgence :</strong> Vous intervenez avant toute nuisance publique.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Kits PDF imprimables :</strong> Affiches comptoir et autocollants prêts en 1 clic.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Tarif accessible :</strong> 29 $ CAD/mois sans contrat ni engagement de durée.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 border-b border-border bg-background-subtle" id="fonctionnalites">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand px-3 py-1 bg-brand-light rounded-full">
              Processus 100 % Autonome
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-3">
              Prêt en 3 minutes, actif 24h/24
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Aucune compétence technique nécessaire. Aucune attente de livraison postale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-sm mb-4">
                1
              </div>
              <h3 className="font-bold text-base text-foreground mb-2">
                Configurez votre profil
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Renseignez le nom de votre établissement, votre lien Google Maps et votre courriel d&apos;alerte. Votre lien dynamique personnalisé est généré instantanément.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-sm mb-4">
                2
              </div>
              <h3 className="font-bold text-base text-foreground mb-2">
                Téléchargez vos supports
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Imprimez vos affiches de comptoir demi-lettre et autocollants vectoriels HD ou ouvrez le mode tablette au comptoir en 1 clic.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-sm mb-4">
                3
              </div>
              <h3 className="font-bold text-base text-foreground mb-2">
                Encaissez les 5 étoiles
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vos clients satisfaits boostent votre note sur Google Maps. En cas de retour mitigé, vous recevez une notification privée pour désamorcer l&apos;insatisfaction.
              </p>
            </div>
          </div>

          {/* 3 Deliverables Features */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border">
              <FileText className="w-6 h-6 text-brand shrink-0" />
              <div>
                <p className="text-xs font-bold text-foreground">Kits d&apos;impression PDF</p>
                <p className="text-[11px] text-slate-500">Formats A4 / Demi-lettre pour présentoirs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border">
              <QrCode className="w-6 h-6 text-brand shrink-0" />
              <div>
                <p className="text-xs font-bold text-foreground">Liens courts dynamiques</p>
                <p className="text-[11px] text-slate-500">Prêts pour reçus Square, SMS ou bio Insta</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border">
              <Tablet className="w-6 h-6 text-brand shrink-0" />
              <div>
                <p className="text-xs font-bold text-foreground">Mode Écran Tablette</p>
                <p className="text-[11px] text-slate-500">Plein écran continu sans veille pour caisse</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-white">
        <PricingCard />
      </section>

      {/* FAQ & Legal Compliance */}
      <section className="py-16 border-t border-border bg-background-subtle" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand px-3 py-1 bg-brand-light rounded-full">
              Transparence & Cadre Juridique
            </span>
            <h2 className="text-3xl font-extrabold text-foreground mt-3">
              Questions Fréquentes & Conformité
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white border border-border shadow-xs">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Est-ce conforme aux directives de Google sur les avis (&ldquo;Review Gating&rdquo;) ?
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-6">
                <strong>Oui, à 100 %.</strong> Pour respecter scrupuleusement les conditions d&apos;utilisation de Google, notre système n&apos;interdit techniquement jamais le dépôt d&apos;un avis public. Sur la page d&apos;interception privée, un lien direct et discret &ldquo;Publier directement sur Google&rdquo; reste accessible en tout temps, assurant une parfaite conformité légale.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-border shadow-xs">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Comment respectez-vous la Loi 96 sur la langue française au Québec ?
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-6">
                L&apos;ensemble de nos interfaces, formulaires clients, tableaux de bord et kits PDF imprimables sont rédigés nativement en français québécois de qualité. Une bascule linguistique rapide vers l&apos;anglais est intégrée pour convenir aux commerces situés dans des zones bilingues du Grand Montréal.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-border shadow-xs">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Mes données et celles de mes clients sont-elles protégées (Loi 25) ?
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-6">
                Conformément à la Loi 25 du Québec sur la protection des renseignements personnels, nous appliquons le principe de minimalisme : aucun renseignement n&apos;est collecté sans consentement explicite, et les retours privés ne sont jamais partagés avec des tiers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-border shadow-xs">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Y a-t-il un engagement ou un matériel physique à attendre ?
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-6">
                Aucun engagement : vous pouvez annuler votre abonnement mensuel à tout moment depuis votre tableau de bord. La plateforme est 100 % numérique : vous téléchargez immédiatement vos supports PDF vectoriels en haute définition prêts à être imprimés sur n&apos;importe quelle imprimante de bureau ou chez un imprimeur local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-brand text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Prêt à sécuriser et propulser la réputation de votre commerce ?
          </h2>
          <p className="text-base text-brand-light/90 max-w-xl mx-auto">
            Créez votre profil en moins de 3 minutes et testez le système gratuitement pendant 7 jours.
          </p>
          <div className="pt-2">
            <Link href="/onboarding">
              <Button size="lg" className="bg-white text-brand hover:bg-slate-50 font-bold px-8 shadow-xl">
                Créer mon Kit Réputation
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-xs text-slate-500 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">Kit Réputation Google</span>
            <span>· Conçu à Montréal, Québec</span>
          </div>
          <p>© 2026 Tous droits réservés · Conforme Loi 96 & Loi 25 (Québec)</p>
        </div>
      </footer>
    </div>
  );
}
