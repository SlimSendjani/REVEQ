import { describe, it, expect } from "vitest";
import { processStripeWebhookEvent } from "@/lib/stripe-webhook-handler";

describe("Stripe Webhook Event Processor", () => {
  it("should handle checkout.session.completed", async () => {
    const mockEvent: any = {
      id: "evt_123",
      type: "checkout.session.completed",
      data: {
        object: {
          customer: "cus_test_123",
          subscription: "sub_test_123",
          client_reference_id: "11111111-1111-1111-1111-111111111111",
        },
      },
    };

    const result = await processStripeWebhookEvent(mockEvent);
    expect(result.handled).toBe(true);
    expect(result.type).toBe("checkout.session.completed");
    expect(result.businessUpdated).toBe(true);
  });

  it("should handle customer.subscription.updated", async () => {
    const mockEvent: any = {
      id: "evt_456",
      type: "customer.subscription.updated",
      data: {
        object: {
          id: "sub_test_123",
          status: "past_due",
        },
      },
    };

    const result = await processStripeWebhookEvent(mockEvent);
    expect(result.handled).toBe(true);
    expect(result.type).toBe("customer.subscription.updated");
  });

  it("should handle customer.subscription.deleted", async () => {
    const mockEvent: any = {
      id: "evt_789",
      type: "customer.subscription.deleted",
      data: {
        object: {
          id: "sub_test_123",
        },
      },
    };

    const result = await processStripeWebhookEvent(mockEvent);
    expect(result.handled).toBe(true);
    expect(result.type).toBe("customer.subscription.deleted");
  });

  it("should handle invoice.payment_failed", async () => {
    const mockEvent: any = {
      id: "evt_invoice_fail",
      type: "invoice.payment_failed",
      data: {
        object: {
          subscription: "sub_test_123",
        },
      },
    };

    const result = await processStripeWebhookEvent(mockEvent);
    expect(result.handled).toBe(true);
    expect(result.type).toBe("invoice.payment_failed");
  });

  it("should ignore unhandled Stripe event types gracefully", async () => {
    const mockEvent: any = {
      id: "evt_other",
      type: "payment_intent.created",
      data: { object: {} },
    };

    const result = await processStripeWebhookEvent(mockEvent);
    expect(result.handled).toBe(false);
  });
});
