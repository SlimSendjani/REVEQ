import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { env } from "@/lib/env";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { customerId } = body;

    if (!env.stripe.secretKey || env.stripe.secretKey.includes("placeholder")) {
      return NextResponse.json({
        url: `${env.appUrl}/dashboard/settings?mock_portal=true`,
        simulated: true,
      });
    }

    if (!customerId) {
      return NextResponse.json(
        { error: "Identifiant client Stripe requis" },
        { status: 400 }
      );
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
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
