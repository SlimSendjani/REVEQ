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
  Sparkles,
  Zap,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-brand-light selection:text-brand">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-border bg-gradient-to-b from-background via-emerald-50/20 to-background">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black mb-6 border border-emerald-200 shadow-2xs">
            <Sparkles className="w-4 h-4 text-brand" />
            <span>NOUVEAU · Réputation Google & Réponses par IA pour commerces du Québec</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground max-w-4xl leading-[1.08]">
            La réputation de votre commerce sous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-500">
              pilote automatique
            </span>.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            REVEQ transforme vos clients satisfaits en avis Google 5 étoiles, intercepte les insatisfactions en privé et <strong>génère vos réponses par IA en 1 clic</strong> selon le ton de votre choix.
          </p>

          {/* Plan Highlight Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
            <span>⚡ Un seul forfait clair à <strong>79 $ CAD / mois</strong></span>
            <span>·</span>
            <span>Tout inclus et sans engagement</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link href="/onboarding" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-4 font-black shadow-lg bg-brand hover:bg-brand-hover text-white">
                Démarrer 7 jours gratuits (79 $ / mois)
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <a href="#simulateur" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-6 font-bold">
                Tester le simulateur & l&apos;IA
              </Button>
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Prêt en 3 minutes · Aucun prélèvement aujourd&apos;hui · Annulable en 1 clic
          </p>

          {/* Interactive Mobile Demo with live AI responses */}
          <div className="w-full mt-10" id="simulateur">
            <InteractiveDemo />
          </div>

        </div>
      </section>

      {/* 3 Pillars of REVEQ Section */}
      <section className="py-20 border-b border-border bg-white" id="fonctionnalites">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-wider text-brand px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
              Pourquoi REVEQ est unique
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mt-3 tracking-tight">
              3 technologies indispensables dans 1 seul forfait
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Tout ce dont vous avez besoin pour dominer le pack local de Google Maps à Montréal et au Québec.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-brand flex items-center justify-center font-bold mb-5 shadow-2xs">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-2">
                  1. Propulseur Google 5★
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dès qu&apos;un client note 4 ou 5 étoiles, REVEQ le redirige instantanément vers votre profil Google Maps pour multiplier vos avis publics positifs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-emerald-800">
                +15 à 30 nouveaux avis 5★ / mois
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-5 shadow-2xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-2">
                  2. Bouclier Anti-Avis Négatif
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  En cas de retour mitigé (1-3★), un formulaire confidentiel s&apos;ouvre. Vous recevez une alerte courriel d&apos;urgence sans impact sur votre note publique.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-amber-800">
                Interception confidentielle en direct
              </div>
            </div>

            {/* Pillar 3 : AI RESPONSES */}
            <div className="p-8 rounded-3xl bg-emerald-50/50 border-2 border-brand shadow-xs flex flex-col justify-between hover:shadow-md transition relative">
              <div className="absolute -top-3 right-6 bg-brand text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                Exclusivité
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center font-bold mb-5 shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-2">
                  3. Réponses Clients par IA
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ne perdez plus votre temps à chercher vos mots. Choisissez le ton souhaité (chaleureux, professionnel, geste commercial ou explicatif) et l&apos;IA génère la réponse idéale en 1 seconde.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-200 text-xs font-bold text-brand">
                4 tonalités personnalisables au choix
              </div>
            </div>
          </div>

          {/* 3 Physical & Digital Deliverables */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border">
              <FileText className="w-6 h-6 text-brand shrink-0" />
              <div>
                <p className="text-xs font-bold text-foreground">Kits d&apos;impression PDF</p>
                <p className="text-[11px] text-slate-500">Formats Affiche comptoir Demi-lettre & autocollants</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border">
              <QrCode className="w-6 h-6 text-brand shrink-0" />
              <div>
                <p className="text-xs font-bold text-foreground">Liens courts dynamiques</p>
                <p className="text-[11px] text-slate-500">Prêts pour reçus Square, SMS ou bio réseaux</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border">
              <Tablet className="w-6 h-6 text-brand shrink-0" />
              <div>
                <p className="text-xs font-bold text-foreground">Mode Borne Tablette Caisse</p>
                <p className="text-[11px] text-slate-500">Plein écran continu pour iPad posé au comptoir</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Problem vs Solution Section */}
      <section className="py-20 border-b border-border bg-background-subtle">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-brand px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
              Pourquoi les codes QR classiques sont dangereux
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mt-3 tracking-tight">
              Un seul avis 1 étoile coûte des milliers de dollars en chiffre d&apos;affaires
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              À Montréal, descendre sous la barre des 4.3 étoiles vous fait chuter hors du pack local des 3 premiers résultats sur Google Maps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* The Old Way */}
            <div className="p-7 sm:p-8 rounded-3xl border border-red-200 bg-red-50/40 space-y-4">
              <div className="flex items-center gap-2 text-red-700 font-black text-lg">
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
                  <span>Aucune aide pour formuler vos réponses aux avis reçus.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Ou alors, des agences vous facturent 300 $ à 500 $/mois avec engagement d&apos;un an.</span>
                </li>
              </ul>
            </div>

            {/* REVEQ */}
            <div className="p-7 sm:p-8 rounded-3xl border-2 border-brand bg-emerald-50/30 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-brand font-black text-lg">
                <CheckCircle2 className="w-6 h-6 text-brand" />
                <h3>La solution REVEQ (79 $ / mois)</h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Filtre dynamique :</strong> 4-5★ vers Google Maps, 1-3★ restent en privé.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Réponses par IA en 1 clic :</strong> Choisissez le ton, l&apos;IA rédige la réponse parfaite.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Kits PDF imprimables :</strong> Affiches comptoir et autocollants prêts en 1 clic.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Forfait unique tout inclus :</strong> 79 $ CAD/mois sans contrat ni engagement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Single 79$ Plan) */}
      <section className="py-14 bg-white" id="tarifs">
        <PricingCard />
      </section>

      {/* FAQ & Compliance */}
      <section className="py-16 border-t border-border bg-background-subtle" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-brand px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
              Questions Fréquentes
            </span>
            <h2 className="text-3xl font-black text-foreground mt-3 tracking-tight">
              Tout ce que vous devez savoir
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-border shadow-xs">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Comment fonctionne l&apos;assistant IA de réponse aux clients ?
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-6">
                Chaque fois qu&apos;un retour négatif ou constructif est intercepté, vous pouvez cliquer sur &ldquo;Répondre avec l&apos;IA&rdquo; depuis votre tableau de bord. Vous sélectionnez le ton de votre choix (chaleureux, institutionnel, offre de rabais ou explicatif) et l&apos;IA génère instantanément une réponse personnalisée et diplomatique que vous pouvez copier ou envoyer par courriel en 1 clic.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-border shadow-xs">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Est-ce conforme aux directives de Google (&ldquo;Review Gating&rdquo;) ?
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-6">
                <strong>Oui, à 100 %.</strong> Pour respecter scrupuleusement les conditions de Google, notre système n&apos;interdit techniquement jamais la publication d&apos;un avis public. Sur la page d&apos;interception privée, un lien discret &ldquo;Publier directement sur Google&rdquo; reste accessible en tout temps, assurant une parfaite conformité légale.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-border shadow-xs">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Y a-t-il un engagement ou un matériel physique à installer ?
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-6">
                Aucun engagement : vous pouvez annuler votre abonnement mensuel à 79 $ à tout moment depuis votre tableau de bord. Tout est 100 % numérique : vous téléchargez directement vos affiches PDF demi-lettre et autocollants prêts à imprimer sur n&apos;importe quelle imprimante ou ouvrez le mode caisse sur votre tablette.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-dark via-brand to-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold backdrop-blur">
            <Sparkles className="w-3.5 h-3.5" />
            Essai Gratuit de 7 Jours Sans Risque
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Prêt à mettre la réputation de votre commerce sous pilote automatique ?
          </h2>
          <p className="text-base text-emerald-100 max-w-xl mx-auto">
            Activez REVEQ en 3 minutes pour 79 $ / mois tout inclus.
          </p>
          <div className="pt-3">
            <Link href="/onboarding">
              <Button size="lg" className="bg-white text-brand-dark hover:bg-slate-100 font-black text-base px-9 py-4 shadow-2xl">
                Créer mon REVEQ Gratuitement
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
            <span className="font-black text-foreground text-sm tracking-tight">
              REV<span className="text-brand">EQ</span>
            </span>
            <span>· Conçu à Montréal, Québec</span>
          </div>
          <p>© 2026 REVEQ · Conforme Loi 96 & Loi 25 (Québec)</p>
        </div>
      </footer>
    </div>
  );
}
