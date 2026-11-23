import type { Business } from "@/types/domain";
import { createAdminClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";

// Données de démonstration locales
export const DEMO_BUSINESS: Business = {
  id: "11111111-1111-1111-1111-111111111111",
  user_id: "00000000-0000-0000-0000-000000000001",
  name: "Café Le Petit Saint-Denis",
  slug: "cafe-le-petit-saint-denis",
  google_review_url: "https://maps.google.com/?cid=12345678901234567890",
  alert_email: "direction@cafepetitsaintdenis.ca",
  logo_url: null,
  primary_color: "#0E7470",
  default_lang: "FR",
  stripe_customer_id: "cus_mock_123",
  stripe_subscription_id: "sub_mock_123",
  subscription_status: "active",
  plan_tier: "standard",
  created_at: new Date().toISOString(),
};

/**
 * Récupère les informations d'un commerce par son slug unique.
 * Gère une reprise gracieuse (fallback) si la base n'est pas encore initialisée.
 */
export async function getBusinessBySlug(slug: string): Promise<Business | null> {
  const normalizedSlug = slug.toLowerCase().trim();

  // Support immédiat pour le commerce de démonstration
  if (
    normalizedSlug === "cafe-le-petit-saint-denis" ||
    normalizedSlug === "demo" ||
    normalizedSlug === "cafepetitsaintdenis"
  ) {
    return DEMO_BUSINESS;
  }

  // En environnement de test ou si Supabase n'est pas configuré, retourner un mock dev instantané
  if (!env.isConfigured() || process.env.NODE_ENV === "test") {
    return {
      ...DEMO_BUSINESS,
      id: "22222222-2222-2222-2222-222222222222",
      name: normalizedSlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      slug: normalizedSlug,
    };
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("businesses")
      .select("*")
      .eq("slug", normalizedSlug)
      .single();

    if (error || !data) {
      if (process.env.NODE_ENV !== "production") {
        return {
          ...DEMO_BUSINESS,
          slug: normalizedSlug,
        };
      }
      return null;
    }

    return data as Business;
  } catch {
    if (process.env.NODE_ENV !== "production") {
      return {
        ...DEMO_BUSINESS,
        slug: normalizedSlug,
      };
    }
    return null;
  }
}
