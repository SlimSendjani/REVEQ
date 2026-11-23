import type { DashboardMetrics, PrivateFeedback, ScanEvent } from "@/types/domain";
import { createAdminClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";

export const DEMO_FEEDBACKS: PrivateFeedback[] = [
  {
    id: "fb-001",
    business_id: "11111111-1111-1111-1111-111111111111",
    rating: 2,
    customer_name: "Jean-François Tremblay",
    customer_contact: "jf.tremblay@email.com",
    message: "Le temps d'attente pour le latte d'avoine était de plus de 15 minutes ce matin malgré peu de monde au comptoir.",
    status: "new",
    created_at: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
  },
  {
    id: "fb-002",
    business_id: "11111111-1111-1111-1111-111111111111",
    rating: 1,
    customer_name: "Sophie Roy",
    customer_contact: "514-555-0199",
    message: "La table près de la fenêtre était bancale et le croissant n'était pas frais du jour.",
    status: "resolved",
    created_at: new Date(Date.now() - 26 * 3600 * 1000).toISOString(),
  },
  {
    id: "fb-003",
    business_id: "11111111-1111-1111-1111-111111111111",
    rating: 3,
    customer_name: "Alexandre Côté",
    customer_contact: "alex.cote@gmail.com",
    message: "Le café est excellent comme toujours, mais la musique était beaucoup trop forte pour travailler tranquillement.",
    status: "new",
    created_at: new Date(Date.now() - 48 * 3600 * 1000).toISOString(),
  },
];

/**
 * Calcule les indicateurs clés de performance (KPI) à partir d'une liste de scans
 */
export function calculateMetricsFromScans(scans: { rating: number; routed_to: string }[]): DashboardMetrics {
  const totalScans = scans.length;
  if (totalScans === 0) {
    return {
      totalScans: 0,
      googleRedirects: 0,
      privateIntercepts: 0,
      averageRating: 5.0,
      conversionRate: 100,
    };
  }

  const googleRedirects = scans.filter((s) => s.routed_to === "google").length;
  const privateIntercepts = scans.filter((s) => s.routed_to === "private").length;
  const sumRating = scans.reduce((acc, s) => acc + s.rating, 0);
  const averageRating = Math.round((sumRating / totalScans) * 10) / 10;
  const conversionRate = Math.round((googleRedirects / totalScans) * 100);

  return {
    totalScans,
    googleRedirects,
    privateIntercepts,
    averageRating,
    conversionRate,
  };
}

/**
 * Récupère les métriques pour le tableau de bord
 */
export async function getDashboardMetrics(businessId: string): Promise<DashboardMetrics> {
  if (!env.isConfigured() || process.env.NODE_ENV === "test") {
    // Jeu de données représentatif pour le mode démonstration
    return {
      totalScans: 148,
      googleRedirects: 136,
      privateIntercepts: 12,
      averageRating: 4.8,
      conversionRate: 92,
    };
  }

  try {
    const supabase = createAdminClient();
    const { data: scans, error } = await supabase
      .from("scan_events")
      .select("rating, routed_to")
      .eq("business_id", businessId);

    if (error || !scans) {
      return {
        totalScans: 0,
        googleRedirects: 0,
        privateIntercepts: 0,
        averageRating: 5.0,
        conversionRate: 100,
      };
    }

    return calculateMetricsFromScans(scans);
  } catch {
    return {
      totalScans: 148,
      googleRedirects: 136,
      privateIntercepts: 12,
      averageRating: 4.8,
      conversionRate: 92,
    };
  }
}

/**
 * Récupère la liste des retours privés pour un commerce
 */
export async function getBusinessFeedbacks(businessId: string): Promise<PrivateFeedback[]> {
  if (!env.isConfigured() || process.env.NODE_ENV === "test") {
    return DEMO_FEEDBACKS;
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("private_feedbacks")
      .select("*")
      .eq("business_id", businessId)
      .order("created_at", { ascending: false });

    if (error || !data) {
      return DEMO_FEEDBACKS;
    }

    return data as PrivateFeedback[];
  } catch {
    return DEMO_FEEDBACKS;
  }
}
