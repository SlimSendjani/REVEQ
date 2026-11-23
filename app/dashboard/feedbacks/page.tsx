import React from "react";
import { DEMO_BUSINESS } from "@/lib/services/business";
import { getBusinessFeedbacks } from "@/lib/services/dashboard";
import { FeedbackManager } from "@/components/FeedbackManager";

export const metadata = {
  title: "Retours Privés Interceptés | Dashboard",
  description: "Gérez les avis confidentiels 1-3 étoiles reçus avant publication sur Google Maps.",
};

export default async function FeedbacksPage() {
  const business = DEMO_BUSINESS;
  const feedbacks = await getBusinessFeedbacks(business.id);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          Retours Privés Interceptés (1-3★)
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Ces avis ont été arrêtés par votre filtre et n&apos;ont jamais été publiés sur Google Maps.
        </p>
      </div>

      <FeedbackManager initialFeedbacks={feedbacks} />
    </div>
  );
}
