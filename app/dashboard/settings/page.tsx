import React from "react";
import { DEMO_BUSINESS } from "@/lib/services/business";
import { SettingsForm } from "@/components/SettingsForm";

export const metadata = {
  title: "Paramètres du Commerce | Dashboard",
  description: "Modifiez vos URL de redirection Google Maps et configurez votre abonnement Stripe.",
};

export default function SettingsPage() {
  const business = DEMO_BUSINESS;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          Paramètres & Facturation
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Gérez vos liens de redirection, adresses d&apos;alerte et votre abonnement.
        </p>
      </div>

      <SettingsForm business={business} />
    </div>
  );
}
