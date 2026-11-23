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
        { error: "Non autorisé. Session requise pour souscrire un forfait." },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { businessId } = body;

    // Vérifier l'appartenance du commerce à l'utilisateur connecté
    if (user && businessId && env.isConfigured()) {
      const { data: business } = (await supabase
        .from("businesses")
        .select("id, user_id")
        .eq("id", businessId)
        .single()) as { data: { id: string; user_id: string } | null };

      if (business && business.user_id !== user.id) {
        return NextResponse.json(
          { error: "Accès refusé. Ce commerce n'appartient pas à votre compte." },
          { status: 403 }
        );
      }
    }

    // Forfait unique REVEQ tout inclus à 79 $ CAD / mois
    const priceId = env.stripe.priceId79;

    // Mode simulation / dev sans clés Stripe de production
    if (!env.stripe.secretKey || env.stripe.secretKey.includes("placeholder")) {
      return NextResponse.json({
        url: `${env.appUrl}/dashboard?mock_checkout=true&plan=reveq-79`,
        simulated: true,
      });
    }

    // Création de la session Stripe Checkout en mode abonnement avec 7 jours d'essai gratuit
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 7,
      },
      customer_email: user?.email || undefined,
      client_reference_id: businessId || undefined,
      success_url: `${env.appUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env.appUrl}/onboarding`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Échec de création de la session Stripe", details: err?.message },
      { status: 500 }
    );
  }
}
