import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { env } from "@/lib/env";
import { processStripeWebhookEvent } from "@/lib/stripe-webhook-handler";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("stripe-signature");

    let event: any;

    // Si secret de webhook de test ou absent, permettre le décodage direct du JSON pour tests
    if (
      !env.stripe.webhookSecret ||
      env.stripe.webhookSecret.includes("placeholder") ||
      !signature
    ) {
      try {
        event = JSON.parse(rawBody);
      } catch {
        return NextResponse.json({ error: "Corps JSON invalide" }, { status: 400 });
      }
    } else {
      try {
        event = stripe.webhooks.constructEvent(
          rawBody,
          signature,
          env.stripe.webhookSecret
        );
      } catch (err: any) {
        return NextResponse.json(
          { error: `Erreur validation signature Webhook: ${err.message}` },
          { status: 400 }
        );
      }
    }

    const result = await processStripeWebhookEvent(event);

    return NextResponse.json({ received: true, result }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Erreur serveur traitement Webhook", details: err?.message },
      { status: 500 }
    );
  }
}
