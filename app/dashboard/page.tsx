import React from "react";
import Link from "next/link";
import { DEMO_BUSINESS } from "@/lib/services/business";
import { getDashboardMetrics, getBusinessFeedbacks } from "@/lib/services/dashboard";
import {
  Star,
  QrCode,
  ShieldCheck,
  TrendingUp,
  Printer,
  Tablet,
  ArrowRight,
  MessageSquareWarning,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const business = DEMO_BUSINESS;
  const metrics = await getDashboardMetrics(business.id);
  const feedbacks = await getBusinessFeedbacks(business.id);
  const newFeedbacksCount = feedbacks.filter((f) => f.status === "new").length;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Page Title & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
            Performances de {business.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Données consolidées des 30 derniers jours · Conforme Loi 96 & Loi 25
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/dashboard/kit">
            <Button size="sm" className="font-semibold shadow-xs">
              <Printer className="w-4 h-4 mr-1.5" />
              Générer Kit PDF
            </Button>
          </Link>
        </div>
      </div>

      {/* 4 KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1 : Total Scans */}
        <div className="p-5 rounded-2xl bg-white border border-border shadow-xs space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold">Total Scans & Clics</span>
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
              <QrCode className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-foreground">{metrics.totalScans}</span>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" />
              +18% ce mois
            </span>
          </div>
          <p className="text-[11px] text-slate-400">Interactions en caisse et via QR Code</p>
        </div>

        {/* KPI 2 : Google Redirects */}
        <div className="p-5 rounded-2xl bg-white border border-border shadow-xs space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold">Avis 4-5★ vers Google</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              ✓
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-emerald-600">{metrics.googleRedirects}</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              {metrics.conversionRate}% de conversion
            </span>
          </div>
          <p className="text-[11px] text-slate-400">Clients satisfaits propulsés sur Maps</p>
        </div>

        {/* KPI 3 : Intercepted Feedbacks */}
        <div className="p-5 rounded-2xl bg-white border border-border shadow-xs space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold">Insatisfactions Interceptées</span>
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-amber-600">{metrics.privateIntercepts}</span>
            {newFeedbacksCount > 0 && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                {newFeedbacksCount} à traiter
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-400">Avis 1-3★ arrêtés avant publication</p>
        </div>

        {/* KPI 4 : Estimated Rating */}
        <div className="p-5 rounded-2xl bg-white border border-border shadow-xs space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold">Note Moyenne Estimée</span>
            <div className="w-8 h-8 rounded-lg bg-star/20 text-star flex items-center justify-center">
              <Star className="w-4 h-4 fill-star text-star" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-foreground">{metrics.averageRating}</span>
            <div className="flex text-star text-xs">★★★★★</div>
          </div>
          <p className="text-[11px] text-slate-400">Basé sur l&apos;ensemble des scans récents</p>
        </div>

      </div>

      {/* Satisfaction Ratio Progress Banner */}
      <div className="p-6 rounded-2xl bg-white border border-border shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-foreground">
            Répartition de la satisfaction client
          </h2>
          <span className="text-xs font-bold text-brand">
            {metrics.conversionRate}% Positifs (Google Reviews)
          </span>
        </div>

        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
          <div
            className="bg-emerald-500 h-full transition-all"
            style={{ width: `${metrics.conversionRate}%` }}
            title={`${metrics.conversionRate}% Redirections 5 étoiles`}
          />
          <div
            className="bg-amber-400 h-full transition-all"
            style={{ width: `${100 - metrics.conversionRate}%` }}
            title={`${100 - metrics.conversionRate}% Retours privés interceptés`}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span>Redirection Google Maps ({metrics.googleRedirects})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span>Interception Privée Sauvegardée ({metrics.privateIntercepts})</span>
          </div>
        </div>
      </div>

      {/* Quick Launch Cards & Recent Feedbacks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column : 2 Quick Launch Modules */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-base font-bold text-foreground">
            Vos Livrables Prêts à l&apos;Emploi
          </h2>

          <div className="p-5 rounded-2xl bg-white border border-border shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Kit d&apos;Impression PDF Haute Définition</h3>
                <p className="text-xs text-slate-500">Affiches comptoir 5.5&quot;x8.5&quot; et autocollants de table</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Générez instantanément des documents PDF vectoriels avec votre logo et vos couleurs prêts à imprimer.
            </p>
            <Link href="/dashboard/kit" className="block pt-1">
              <Button variant="outline" size="sm" className="w-full text-xs font-bold">
                Ouvrir le générateur PDF
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-border shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Tablet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Mode Borne Plein Écran pour Tablette</h3>
                <p className="text-xs text-slate-500">Idéal sur iPad posé en caisse enregistreuse</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Interface sans défilement avec compte à rebours de réinitialisation automatique après chaque client.
            </p>
            <Link href={`/kiosk/${business.slug}`} target="_blank" className="block pt-1">
              <Button variant="outline" size="sm" className="w-full text-xs font-bold">
                Lancer le Mode Borne
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column : Recent Private Feedbacks */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <MessageSquareWarning className="w-4 h-4 text-amber-600" />
              Derniers retours privés interceptés
            </h2>
            <Link href="/dashboard/feedbacks" className="text-xs font-semibold text-brand hover:underline">
              Voir tout ({feedbacks.length})
            </Link>
          </div>

          <div className="space-y-3">
            {feedbacks.slice(0, 3).map((fb) => (
              <div
                key={fb.id}
                className="p-4 rounded-xl bg-white border border-border shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        fb.rating === 1
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {fb.rating}★ Intercepté
                    </span>
                    <span className="text-xs font-bold text-foreground">
                      {fb.customer_name || "Client Anonyme"}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(fb.created_at).toLocaleDateString("fr-CA")}
                  </span>
                </div>

                <p className="text-xs text-slate-700 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  &ldquo;{fb.message}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-slate-500">
                    Contact : <strong>{fb.customer_contact || "Non renseigné"}</strong>
                  </span>
                  <span
                    className={`font-semibold ${
                      fb.status === "new" ? "text-amber-600" : "text-emerald-600"
                    }`}
                  >
                    {fb.status === "new" ? "● Non traité" : "✓ Traité"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
