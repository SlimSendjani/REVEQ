import React from "react";
import { notFound } from "next/navigation";
import { getBusinessBySlug } from "@/lib/services/business";
import { KioskReviewClient } from "@/components/KioskReviewClient";
import { AlertCircle } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const business = await getBusinessBySlug(params.slug);
  if (!business) return { title: "Établissement non trouvé" };

  return {
    title: `Mode Borne de Caisse | ${business.name}`,
    description: `Évaluation client sur tablette pour ${business.name}.`,
  };
}

export default async function KioskPage({ params }: Props) {
  const business = await getBusinessBySlug(params.slug);

  if (!business) {
    notFound();
  }

  const isAccessible =
    business.subscription_status === "active" ||
    business.subscription_status === "trialing";

  if (!isAccessible) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 rounded-3xl p-8 border border-slate-800 text-center space-y-4">
          <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
          <h1 className="text-xl font-bold">Mode Borne Suspendu</h1>
          <p className="text-xs text-slate-400">
            L&apos;abonnement pour <strong>{business.name}</strong> n&apos;est pas actif.
          </p>
        </div>
      </div>
    );
  }

  return <KioskReviewClient business={business} />;
}
