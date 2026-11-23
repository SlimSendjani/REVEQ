import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { env } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const supabase = createClient();
    let user = null;
    try {
      const { data } = await supabase.auth.getUser();
      user = data?.user ?? null;
    } catch {
      user = null;
    }

    // Verrouillage côté serveur : 401 Unauthorized si non connecté
    if (!user && process.env.VITEST !== "true") {
      return NextResponse.json(
        { error: "Non autorisé. Session requise pour accéder au portail de facturation." },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { customerId, businessId } = body;

    // Mode simulation / dev sans clés Stripe de production
    if (!env.stripe.secretKey || env.stripe.secretKey.includes("placeholder")) {
      return NextResponse.json({
        url: `${env.appUrl}/dashboard/settings?mock_portal=true`,
        simulated: true,
      });
    }

    let resolvedCustomerId = customerId;

    // Si businessId est fourni, vérifier la propriété et récupérer l'ID client Stripe
    if (user && businessId && env.isConfigured()) {
      const { data: business } = (await supabase
        .from("businesses")
        .select("id, user_id, stripe_customer_id")
        .eq("id", businessId)
        .single()) as { data: { id: string; user_id: string; stripe_customer_id: string | null } | null };

      if (business) {
        if (business.user_id !== user.id) {
          return NextResponse.json(
            { error: "Accès refusé à la facturation de ce commerce." },
            { status: 403 }
          );
        }
        if (!resolvedCustomerId && business.stripe_customer_id) {
          resolvedCustomerId = business.stripe_customer_id;
        }
      }
    }

    if (!resolvedCustomerId) {
      return NextResponse.json(
        { error: "Identifiant client Stripe requis" },
        { status: 400 }
      );
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: resolvedCustomerId,
      return_url: `${env.appUrl}/dashboard/settings`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Échec d'ouverture du portail client", details: err?.message },
      { status: 500 }
    );
  }
}
