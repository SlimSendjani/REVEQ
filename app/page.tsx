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
  TrendingUp,
  AlertTriangle,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark-950 text-white selection:bg-brand selection:text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-white/5 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
        
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-mono font-black mb-6 border border-brand/20 shadow-glow-sm">
            <Sparkles className="w-4 h-4 text-brand" />
            <span>COMMERCES DU QUÉBEC · RÉPUTATION & RÉPONSES IA AUTOMATISÉES</span>
          </div>

          {/* Main Direct Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.08]">
            Arrêtez de laisser un seul client mécontent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-emerald-400 to-white">
              détruire des années d&apos;efforts
            </span>{" "}
            sur Google Maps.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            REVEQ propulse vos clients satisfaits vers votre Google 5 étoiles en 3 secondes. Les insatisfactions ? Elles atterrissent sur votre cellulaire en privé. Et notre IA génère la réponse idéale en 1 clic pour désamorcer la crise.
          </p>

          {/* Value Badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-dark-850 text-slate-300 text-xs font-mono border border-white/10">
            <span>⚡ Un seul forfait tout inclus : <strong>79 $ CAD / mois</strong></span>
            <span>·</span>
            <span className="text-brand font-bold">Sans engagement</span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link href="/onboarding" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base font-black px-8 py-4 shadow-glow">
                Démarrer mes 7 jours gratuits (79 $ / mois)
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <a href="#simulateur" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-bold px-6">
                Tester le simulateur & l&apos;IA
              </Button>
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500 font-mono">
            Prêt en 3 minutes · 0.00 $ aujourd&apos;hui · Annulable en 1 clic
          </p>

          {/* Interactive Mobile Simulator & Live AI Showcase */}
          <div className="w-full mt-12" id="simulateur">
            <InteractiveDemo />
          </div>

        </div>
      </section>

      {/* THE FINANCIAL REALITY SECTION (LE CALCUL QUI FAIT MAL) */}
      <section className="py-20 border-b border-white/5 bg-dark-900/60" id="probleme">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-amber-400 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              LE CALCUL FINANCIER QUE PEU DE COMMERÇANTS FONT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              Combien vous coûte réellement un avis 1 étoile sur Google Maps ?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              Dans un quartier compétitif à Montréal, la différence entre 4.7★ et 4.2★ ne se joue qu&apos;à 3 ou 4 avis négatifs non interceptés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-3xl bg-dark-850 border border-white/5 space-y-3 text-left">
              <div className="text-3xl font-black text-red-400 font-mono">- 35 %</div>
              <h3 className="font-bold text-sm text-white">Chute hors du Top 3 Google</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Quand votre note baisse sous 4.3★, Google Maps cesse de vous recommander dans le &ldquo;Local 3-Pack&rdquo; au profit du resto d&apos;en face.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-dark-850 border border-white/5 space-y-3 text-left">
              <div className="text-3xl font-black text-amber-400 font-mono">3 800 $</div>
              <h3 className="font-bold text-sm text-white">Perte de chiffre mensuelle moyenne</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Selon les données de recherche locale, un seul avis 1 étoile sur la première page détourne jusqu&apos;à 30 clients potentiels par semaine.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-dark-850 border-2 border-brand space-y-3 text-left shadow-glow-sm">
              <div className="text-3xl font-black text-brand font-mono">79 $ / mois</div>
              <h3 className="font-bold text-sm text-white">L&apos;assurance totale avec REVEQ</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Un seul client mécontent intercepté et rattrapé par mois rembourse votre abonnement pour toute l&apos;année.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE BEFORE / AFTER COMPARISON */}
      <section className="py-20 border-b border-white/5 bg-dark-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Le piège du code QR ordinaire vs la stratégie REVEQ
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Le QR Code au comptoir peut être votre meilleure arme... ou votre pire ennemi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* The Old Dangerous Way */}
            <div className="p-8 rounded-3xl border border-red-500/20 bg-red-950/20 space-y-5 text-left">
              <div className="flex items-center gap-2 text-red-400 font-black text-lg">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3>Le code QR Google gratuit classique</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Vous tendez le bâton pour vous faire battre : les clients mécontents cliquent et atterrissent directement sur Google Maps.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Zéro seconde de répit : vous découvrez le problème une fois l&apos;avis 1 étoile affiché aux yeux de toute la ville.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Aucun moyen de désamorcer le conflit avant la publication.</span>
                </li>
              </ul>
            </div>

            {/* The REVEQ Strategic Way */}
            <div className="p-8 rounded-3xl border-2 border-brand bg-dark-850 space-y-5 text-left shadow-glow-sm">
              <div className="flex items-center gap-2 text-brand font-black text-lg">
                <CheckCircle2 className="w-6 h-6 text-brand" />
                <h3>Le filtre intelligent REVEQ (79 $ / mois)</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Vous contrôlez l&apos;aiguillage :</strong> Les 4-5★ vont sur Google Maps, les 1-3★ atterrissent sur votre téléphone en privé.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>Le client se défoule en direct :</strong> Il vide son sac dans votre formulaire privé au lieu de détruire votre fiche publique.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-brand font-bold shrink-0">✓</span>
                  <span><strong>L&apos;IA génère votre réponse :</strong> Offrez un café ou un rabais en 1 clic pour transformer un mécontent en client fidèle.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PHYSICAL DELIVERABLES INCLUDED */}
      <section className="py-20 border-b border-white/5 bg-dark-900/40" id="comment-ca-marche">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-brand px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20">
              PRÊT EN 3 MINUTES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
              Tout le matériel prêt à imprimer pour votre comptoir
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Aucune attente postale. Tout est généré instantanément dans votre tableau de bord.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-7 rounded-3xl bg-dark-850 border border-white/5 space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center font-black">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">
                Affiches de Comptoir Demi-Lettre
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Format standard québécois (5.5&quot; x 8.5&quot;) prêt pour les présentoirs en plexiglas sur votre comptoir de caisse avec votre logo et vos couleurs.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-dark-850 border border-white/5 space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center font-black">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">
                Planches d&apos;Autocollants & Tables
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                6 autocollants haute définition par page pour tables de restaurant, miroirs de salon ou comptoirs de prise de commande.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-dark-850 border border-white/5 space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center font-black">
                <Tablet className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white">
                Mode Borne Plein Écran pour Tablette
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ouvrez la borne sur votre iPad de caisse. Écran continu sans veille qui se réinitialise automatiquement 10 secondes après chaque client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-14 bg-dark-950" id="tarifs">
        <PricingCard />
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 border-t border-white/5 bg-dark-900/60" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-4 text-left">
            <div className="p-6 rounded-3xl bg-dark-850 border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Comment l&apos;IA m&apos;aide-t-elle à répondre aux clients ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Quand une insatisfaction arrive dans votre tableau de bord, vous cliquez sur &ldquo;Répondre avec l&apos;IA&rdquo;. Vous choisissez simplement l&apos;intention (Chaleureux, Institutionnel, Geste commercial avec rabais ou Explicatif du rush) et l&apos;IA formule en 1 seconde un message courtois et humain prêt à envoyer par courriel.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-dark-850 border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Est-ce conforme aux conditions de Google ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                <strong>Oui, à 100 %.</strong> Pour respecter scrupuleusement la politique anti-gating de Google, notre page d&apos;interception affiche toujours en bas un lien discret &ldquo;Publier directement sur Google&rdquo;. Le client est libre de cliquer, mais 95 % préfèrent régler le problème directement avec la direction via le formulaire privé.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-dark-850 border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand shrink-0" />
                Y a-t-il un engagement ou des frais cachés ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Aucun engagement, aucun contrat de 12 mois comme chez Podium. Le forfait est de 79 $ CAD / mois tout inclus. Vous pouvez résilier en un clic à tout moment depuis votre tableau de bord.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL VENDEUR CTA BANNER */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-dark-900 to-dark-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-mono font-bold border border-brand/20">
            <Zap className="w-3.5 h-3.5" />
            7 JOURS D&apos;ESSAI GRATUIT SANS ENGAGEMENT
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Reprenez le contrôle de votre note Google Maps dès aujourd&apos;hui.
          </h2>

          <p className="text-base text-slate-400 max-w-xl mx-auto">
            Rejoignez les commerces locaux du Québec qui protègent leur chiffre d&apos;affaires avec REVEQ pour 79 $ / mois.
          </p>

          <div className="pt-2">
            <Link href="/onboarding">
              <Button size="lg" className="text-base font-black px-10 py-4 shadow-glow">
                Créer mon REVEQ Gratuitement
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500 bg-dark-950">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2">
            <span className="font-black text-white text-sm tracking-tight">
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
