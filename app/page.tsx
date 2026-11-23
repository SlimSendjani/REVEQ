import Link from "next/link";
import { CheckCircle2, ShieldCheck, Star, QrCode, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-brand-light selection:text-brand">
      {/* Navigation header */}
      <header className="border-b border-border bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold">
              K
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              Kit Réputation <span className="text-brand font-semibold">Google</span>
            </span>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
              QC · Loi 96
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/onboarding"
              className="text-sm font-semibold text-white bg-brand hover:bg-brand-hover transition px-4 py-2 rounded-lg inline-flex items-center gap-1.5 shadow-sm"
            >
              Créer mon Kit Gratuitement
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light text-brand text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4" />
          Harnais de développement prêt pour le Québec & conforme Loi 96 / Loi 25
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl leading-[1.15]">
          Transformez vos clients satisfaits en{" "}
          <span className="text-brand">avis Google 5 étoiles</span>.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl">
          La solution 100% numérique en libre-service pour restaurants, cliniques, salons et commerces au Québec. Zéro logistique, déploiement en 3 minutes.
        </p>

        {/* Feature badges */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl text-left">
          <div className="p-5 rounded-xl border border-border bg-background-subtle">
            <div className="flex items-center gap-2 text-star font-bold mb-2">
              <Star className="w-5 h-5 fill-star text-star" />
              <span>4-5 Étoiles</span>
            </div>
            <p className="text-sm text-slate-600">
              Redirection instantanée vers votre fiche Google Maps pour maximiser vos avis publics 5 étoiles.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border bg-background-subtle">
            <div className="flex items-center gap-2 text-brand font-bold mb-2">
              <CheckCircle2 className="w-5 h-5 text-brand" />
              <span>1-3 Étoiles</span>
            </div>
            <p className="text-sm text-slate-600">
              Interception privée via formulaire confidentiel envoyé directement par courriel à la direction.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border bg-background-subtle">
            <div className="flex items-center gap-2 text-foreground font-bold mb-2">
              <QrCode className="w-5 h-5 text-foreground" />
              <span>Kits PDF & Écran</span>
            </div>
            <p className="text-sm text-slate-600">
              Génération instantanée d&apos;affiches de comptoir PDF demi-lettre et mode tablette en caisse.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-xs text-slate-500">
        <p>© 2026 Kit Réputation Google · Conçu pour les commerces locaux du Québec · Conforme Loi 96 & Loi 25</p>
      </footer>
    </div>
  );
}
