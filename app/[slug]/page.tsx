import React from "react";
import { notFound } from "next/navigation";
import { getBusinessBySlug } from "@/lib/services/business";
import { PublicReviewClient } from "@/components/PublicReviewClient";
import { AlertCircle } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const business = await getBusinessBySlug(params.slug);
  if (!business) {
    return { title: "Établissement non trouvé" };
  }

  return {
    title: `Donnez votre avis | ${business.name}`,
    description: `Partagez votre expérience chez ${business.name}.`,
  };
}

export default async function SlugPage({ params }: Props) {
  const business = await getBusinessBySlug(params.slug);

  if (!business) {
    notFound();
  }

  // Contrôle dynamique de l'accès : abonnement actif ou en période d'essai requis
  const isAccessible =
    business.subscription_status === "active" ||
    business.subscription_status === "trialing";

  if (!isAccessible) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-sm w-full bg-white rounded-3xl p-8 border border-slate-200 text-center shadow-lg space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h1 className="text-base font-bold text-slate-800">
            Ce service est momentanément indisponible
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            La redirection d&apos;avis pour <strong>{business.name}</strong> est suspendue.
          </p>
        </div>
      </div>
    );
  }

  return <PublicReviewClient business={business} />;
}
