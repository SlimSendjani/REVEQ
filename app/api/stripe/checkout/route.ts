import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { env } from "@/lib/env";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { plan = "solo", businessId } = body;

    // Détermination du Price ID Stripe selon le forfait
    let priceId = env.stripe.priceIdSolo;
    if (plan === "pro") {
      priceId = env.stripe.priceIdPro;
    } else if (plan === "annual") {
      priceId = env.stripe.priceIdAnnual;
    }

    // Mode simulation / dev sans clés Stripe de production
    if (!env.stripe.secretKey || env.stripe.secretKey.includes("placeholder")) {
      return NextResponse.json({
        url: `${env.appUrl}/dashboard?mock_checkout=true&plan=${plan}`,
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
