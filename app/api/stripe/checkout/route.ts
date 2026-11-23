import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { env } from "@/lib/env";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { businessId } = body;

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
