import React from "react";
import { DEMO_BUSINESS } from "@/lib/services/business";
import { DashboardNav, DashboardSidebar } from "@/components/DashboardNav";

export const metadata = {
  title: "Tableau de Bord | Kit Réputation Google",
  description: "Suivez vos avis Google Maps, interceptez les insatisfactions et générez vos kits d'impression PDF.",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const business = DEMO_BUSINESS;

  return (
    <div className="min-h-screen bg-background-subtle flex flex-col selection:bg-brand-light selection:text-brand">
      <DashboardNav businessName={business.name} slug={business.slug} />
      
      <div className="flex-1 flex flex-col md:flex-row">
        <DashboardSidebar />
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
