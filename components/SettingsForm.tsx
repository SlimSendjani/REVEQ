"use client";

import React, { useState } from "react";
import type { Business } from "@/types/domain";
import { validateGoogleUrl } from "@/lib/validations/google-url";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Check, CreditCard, ExternalLink, ShieldCheck } from "lucide-react";

interface SettingsProps {
  business: Business;
}

export function SettingsForm({ business }: SettingsProps) {
  const [googleUrl, setGoogleUrl] = useState(business.google_review_url);
  const [alertEmail, setAlertEmail] = useState(business.alert_email);
  const [primaryColor, setPrimaryColor] = useState(business.primary_color || "#0E7470");
  const [language, setLanguage] = useState(business.default_lang || "FR");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateGoogleUrl(googleUrl.trim())) {
      setError("Veuillez entrer une adresse d'avis Google Maps officielle valide.");
      return;
    }
    setError(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      {/* General Configuration Card */}
      <form onSubmit={handleSave} className="bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-foreground">
            Configuration du Commerce
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Mettez à jour les paramètres de redirection et de notification de votre fiche.
          </p>
        </div>

        <Input
          label="Lien direct Google Reviews"
          value={googleUrl}
          onChange={(e) => setGoogleUrl(e.target.value)}
          error={error || undefined}
          helperText="L'adresse vers laquelle les clients satisfaits (4-5 étoiles) sont redirigés."
          required
        />

        <Input
          label="Courriel de notification des alertes d'insatisfaction"
          type="email"
          value={alertEmail}
          onChange={(e) => setAlertEmail(e.target.value)}
          helperText="Ce courriel reçoit immédiatement chaque retour négatif soumis en privé."
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Couleur de marque
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-10 h-10 rounded-xl border border-border cursor-pointer p-0.5"
              />
              <span className="font-mono text-xs text-slate-600 font-semibold">
                {primaryColor}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Langue de l&apos;interface publique
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "FR" | "EN" | "BOTH")}
              className="w-full px-3.5 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 bg-white"
            >
              <option value="FR">Français québécois (Loi 96)</option>
              <option value="EN">English</option>
              <option value="BOTH">Bilingue avec détection navigateur</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          {saved ? (
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <Check className="w-4 h-4" />
              Paramètres enregistrés avec succès
            </span>
          ) : (
            <div />
          )}

          <Button type="submit" size="md" className="font-bold">
            Enregistrer les modifications
          </Button>
        </div>
      </form>

      {/* Stripe Billing & Invoices Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand" />
              Facturation & Abonnement Stripe
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Gérez votre carte de paiement, consultez vos factures ou modifiez votre formule.
            </p>
          </div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
            Abonnement Actif
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
          <div className="flex items-center justify-between font-semibold text-foreground">
            <span>Formule actuelle : Forfait Solo</span>
            <span>29.00 $ CAD / mois</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Facturation automatisée via Stripe. Paiement sécurisé avec carte de crédit ou débit.
          </p>
        </div>

        <div className="pt-2">
          <Button
            variant="outline"
            size="md"
            onClick={() => alert("Redirection vers le portail de facturation sécurisé Stripe.")}
            className="text-xs font-bold flex items-center gap-1.5"
          >
            <span>Ouvrir le Portail Client Stripe</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Button>
        </div>
      </div>
    </div>
  );
}
