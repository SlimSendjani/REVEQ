import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { LiveIncidentTicker } from "@/components/LiveIncidentTicker";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { FinancialBleedCalculator } from "@/components/FinancialBleedCalculator";
import { TacticalDossier } from "@/components/TacticalDossier";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  QrCode,
  ArrowRight,
  FileText,
  Tablet,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Zap,
  Terminal,
  Printer,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070A11] text-white selection:bg-brand selection:text-black">
      <Navbar />

      {/* 1. LIVE INCIDENT RADAR TICKER */}
      <LiveIncidentTicker />

      {/* 2. HERO SECTION - ASYMMETRIC TACTICAL EDITORIAL */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-white/5">
        
        {/* Subtle radial ambient glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Operational Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-mono font-black border border-brand/20 shadow-glow-sm">
              <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
              <span>BOUCLIER DE RÉPUTATION QUÉBEC · LOI 96 & DIRECTIVES GOOGLE</span>
            </div>

            {/* Aggressive Direct Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06]">
              Le vendredi soir à 21h30, la cuisine déborde.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-emerald-300 to-white">
                Un seul avis 1★ ne devrait pas détruire 5 ans d&apos;efforts.
              </span>
            </h1>

            {/* Authentic Merchant Storytelling */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Vos habitués ravis sont aiguillés vers votre Google 5★ en 3 secondes. Les insatisfactions ? Elles atterrissent sur votre cellulaire en privé. Et notre IA formule la réponse idéale en 15 secondes pour rattraper le client avant qu&apos;il ne parte chez votre concurrent.
            </p>

            {/* Forfait Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/60 border border-white/10 text-xs font-mono text-slate-300">
              <span>⚡ Forfait unique sans engagement : <strong className="text-white">79 $ CAD / mois</strong></span>
              <span>·</span>
              <span className="text-brand font-bold">Essai sans risque de 7 jours</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/onboarding" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base font-black px-8 py-4 shadow-glow">
                  Démarrer mes 7 jours gratuits (79 $ / mois)
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              
              <a href="#simulateur" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-bold px-6">
                  Tester le simulateur &amp; l&apos;IA ↓
                </Button>
              </a>
            </div>

            <p className="text-xs text-slate-500 font-mono">
              Aucun contrat de 12 mois · 0.00 $ aujourd&apos;hui · Résiliable en 1 clic
            </p>

          </div>

          {/* 3. HARDWARE-STYLE INTERACTIVE TERMINAL T-1 DEMO */}
          <div className="mt-14" id="simulateur">
            <InteractiveDemo />
          </div>

        </div>
      </section>

      {/* 4. FINANCIAL BLEED SIMULATOR (CALCULATEUR DE PERTE FINANCIÈRE) */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-[#070A11] via-[#090D16] to-[#070A11]" id="probleme">
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          <div className="max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-amber-400 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              AUDIT FINANCIER DU LOCAL PACK GOOGLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              Combien vous coûte réellement un avis négatif non intercepté ?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              Dans un quartier compétitif à Montréal, Québec ou Laval, la différence entre 4.7★ et 4.2★ ne se joue qu&apos;à 3 ou 4 avis 1 étoile. Testez l&apos;impact direct sur vos revenus ci-dessous :
            </p>
          </div>

          <FinancialBleedCalculator />

        </div>
      </section>

      {/* 5. DECLASSIFIED DOSSIER : REVEQ VS TRADITIONAL RACKET (PODIUM / BIRDEYE) */}
      <section className="py-20 border-b border-white/5 bg-[#070A11]" id="tarifs">
        <TacticalDossier />
      </section>

      {/* 6. PHYSICAL HARDWARE & DELIVERABLES (AFFICHEURS, AUTOCOLLANTS, BORNE) */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-[#070A11] via-[#090D16] to-[#070A11]" id="comment-ca-marche">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-mono text-xs font-black uppercase mb-3">
              <Printer className="w-3.5 h-3.5 text-brand" />
              <span>SUPPORTS PHYSIQUES COMPRIS DANS L&apos;ABONNEMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Votre kit physique prêt à imprimer pour le comptoir
            </h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Aucune attente de livraison postale. Tout est généré instantanément en PDF vectoriel haute définition dans votre tableau de bord.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto font-mono">
            
            {/* Spec 1: Affiches Demi-Lettre */}
            <div className="p-7 rounded-3xl bg-black/60 border border-white/10 space-y-4 text-left relative overflow-hidden group hover:border-brand/40 transition">
              <div className="text-[10px] text-brand uppercase font-bold tracking-widest">SPEC-01 · COMPTOIR</div>
              <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center font-black">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white font-sans">
                Affiches Demi-Lettre (5.5&quot; x 8.5&quot;)
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Format standard des présentoirs de caisse en plexiglas. Inclut votre logo, vos couleurs d&apos;établissement et le QR code de protection dynamique.
              </p>
              <div className="text-[10px] text-slate-500 pt-2 border-t border-white/5">
                Prêt pour imprimante locale ou de bureau
              </div>
            </div>

            {/* Spec 2: Autocollants Tables */}
            <div className="p-7 rounded-3xl bg-black/60 border border-white/10 space-y-4 text-left relative overflow-hidden group hover:border-brand/40 transition">
              <div className="text-[10px] text-brand uppercase font-bold tracking-widest">SPEC-02 · TABLES & MIROIRS</div>
              <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center font-black">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white font-sans">
                Planches d&apos;Autocollants Tables
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                6 autocollants par planche, parfaits pour les coins de table de restaurant, miroirs de salon de coiffure ou comptoirs de commande à emporter.
              </p>
              <div className="text-[10px] text-slate-500 pt-2 border-t border-white/5">
                Format vectoriel ultra-net 300 DPI
              </div>
            </div>

            {/* Spec 3: Mode Borne Tablette */}
            <div className="p-7 rounded-3xl bg-black/60 border border-white/10 space-y-4 text-left relative overflow-hidden group hover:border-brand/40 transition">
              <div className="text-[10px] text-brand uppercase font-bold tracking-widest">SPEC-03 · MODE BORNE CAISSE</div>
              <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center font-black">
                <Tablet className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-white font-sans">
                Kiosk Plein Écran pour iPad / Tablette
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Ouvrez simplement l&apos;URL kiosk sur votre iPad de comptoir. Écran sans mise en veille qui se réinitialise automatiquement 10 secondes après chaque client.
              </p>
              <div className="text-[10px] text-slate-500 pt-2 border-t border-white/5">
                Zéro matériel supplémentaire à acheter
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 border-b border-white/5 bg-[#070A11]" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-brand px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20">
              TRANSPARENCE TOTALE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-left space-y-2">
              <h3 className="font-bold text-base text-white">
                Comment l&apos;IA de REVEQ m&apos;aide-t-elle à répondre aux clients mécontents ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Quand une insatisfaction arrive sur votre cellulaire, vous ouvrez votre tableau de bord et cliquez sur &ldquo;Répondre avec l&apos;IA&rdquo;. Vous sélectionnez simplement l&apos;intention souhaitée (Geste commercial avec rabais, Contexte du rush, Chaleureux ou Diplomatique) et l&apos;IA formule en 1 seconde un message courtois et humain rédigé en français d&apos;ici prêt à envoyer par courriel ou SMS en un clic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-left space-y-2">
              <h3 className="font-bold text-base text-white">
                Est-ce conforme aux directives officielles de Google (&ldquo;Review Gating&rdquo;) ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Oui, à 100 %. Pour respecter scrupuleusement les conditions de Google, notre page d&apos;interception affiche toujours en bas un lien discret &ldquo;Publier directement sur Google&rdquo;. Le client est libre de cliquer, mais 95 % préfèrent régler le problème directement avec la direction via le formulaire privé. Vous êtes 100 % conforme.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-left space-y-2">
              <h3 className="font-bold text-base text-white">
                Y a-t-il un engagement ou des frais cachés ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Aucun engagement, aucun contrat de 12 mois forcé comme chez Podium. Le forfait est de 79 $ CAD / mois tout inclus. Vous pouvez annuler en 1 clic à tout moment depuis votre tableau de bord.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-left space-y-2">
              <h3 className="font-bold text-base text-white">
                Comment respectez-vous la Loi 96 et la Loi 25 au Québec ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Toutes nos interfaces, kits imprimables et formulaires sont rédigés nativement en français de qualité. Une bascule bilingue est disponible pour les zones touristiques. Les données personnelles respectent la Loi 25 (protection des renseignements personnels, aucune revente de données).
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. FINAL HIGH-CONVERTING CLOSING CALL-TO-ACTION */}
      <section className="py-20 bg-gradient-to-b from-[#070A11] via-[#090D16] to-black text-center relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-mono text-xs font-bold uppercase">
            <span>7 JOURS D&apos;ESSAI GRATUIT · SANS RISQUE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Reprenez le contrôle de votre note Google Maps dès aujourd&apos;hui.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Activez REVEQ pour 79 $ / mois. Vos supports de comptoir prêts en 3 minutes. Vos clients mécontents interceptés dès ce soir.
          </p>

          <div className="pt-2">
            <Link href="/onboarding">
              <Button size="lg" className="text-base font-black px-10 py-5 shadow-glow">
                Créer mon REVEQ Gratuitement →
              </Button>
            </Link>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            Aucun prélèvement aujourd&apos;hui · Résiliable en 1 clic
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 bg-black text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-white text-sm">REV<span className="text-brand">EQ</span></span>
            <span>· Conçu à Montréal, Québec · © 2026 REVEQ</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Conforme Loi 96 &amp; Loi 25 (Québec)</span>
            <span>·</span>
            <Link href="/onboarding" className="text-brand hover:underline">
              Forfait Unique 79 $ / mois
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
