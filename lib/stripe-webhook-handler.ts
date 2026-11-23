import type Stripe from "stripe";
import { createAdminClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";

export interface WebhookProcessResult {
  handled: boolean;
  type: string;
  businessUpdated?: boolean;
}

/**
 * Traite les événements Stripe de facturation pour mettre à jour
 * en temps réel l'accès au service (subscription_status) dans Supabase.
 */
export async function processStripeWebhookEvent(
  event: Stripe.Event
): Promise<WebhookProcessResult> {
  const supabase = createAdminClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;
      const businessId = session.client_reference_id;

      if (env.isConfigured() && businessId) {
        try {
          await supabase
            .from("businesses")
            .update({
              stripe_customer_id: customerId,
              stripe_subscription_id: subscriptionId,
              subscription_status: "active",
            })
            .eq("id", businessId);
        } catch (err) {
          console.warn("Erreur MAJ checkout.session.completed:", err);
        }
      }

      return {
        handled: true,
        type: event.type,
        businessUpdated: true,
      };
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const status = subscription.status; // 'active', 'past_due', 'canceled', etc.

      if (env.isConfigured()) {
        try {
          await supabase
            .from("businesses")
            .update({
              subscription_status: status as any,
            })
            .eq("stripe_subscription_id", subscription.id);
        } catch (err) {
          console.warn("Erreur MAJ customer.subscription.updated:", err);
        }
      }

      return {
        handled: true,
        type: event.type,
        businessUpdated: true,
      };
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;

      if (env.isConfigured()) {
        try {
          await supabase
            .from("businesses")
            .update({
              subscription_status: "canceled",
            })
            .eq("stripe_subscription_id", subscription.id);
        } catch (err) {
          console.warn("Erreur MAJ customer.subscription.deleted:", err);
        }
      }

      return {
        handled: true,
        type: event.type,
        businessUpdated: true,
      };
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const subscriptionId = invoice.subscription as string;

      if (env.isConfigured() && subscriptionId) {
        try {
          await supabase
            .from("businesses")
            .update({
              subscription_status: "past_due",
            })
            .eq("stripe_subscription_id", subscriptionId);
        } catch (err) {
          console.warn("Erreur MAJ invoice.payment_failed:", err);
        }
      }

      return {
        handled: true,
        type: event.type,
        businessUpdated: true,
      };
    }

    default:
      return {
        handled: false,
        type: event.type,
      };
  }
}
