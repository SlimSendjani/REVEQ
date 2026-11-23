import React from "react";
import { DEMO_BUSINESS } from "@/lib/services/business";
import { KitGenerator } from "@/components/KitGenerator";

export const metadata = {
  title: "Générateur Kit PDF & QR Code | Dashboard",
  description: "Générez vos affiches de comptoir demi-lettre et autocollants avec QR Code dynamique.",
};

export default function KitPage() {
  const business = DEMO_BUSINESS;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          Kit d&apos;Impression & Matériel PLV
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Supports physiques optimisés pour l&apos;impression québécoise (Format demi-lettre 5.5&quot; x 8.5&quot;).
        </p>
      </div>

      <KitGenerator business={business} />
    </div>
  );
}
