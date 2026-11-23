import { describe, it, expect } from "vitest";
import { feedbackSubmissionSchema } from "@/lib/validations/feedback";

describe("Feedback Schema Validation", () => {
  const validBusinessId = "11111111-1111-1111-1111-111111111111";

  it("should accept valid 1-3 star feedbacks", () => {
    const result = feedbackSubmissionSchema.safeParse({
      business_id: validBusinessId,
      rating: 2,
      customer_name: "Marc Bouchard",
      customer_contact: "514-555-0123",
      message: "Le service à la table était beaucoup trop lent.",
    });

    expect(result.success).toBe(true);
  });

  it("should accept anonymous feedback (contact optionnel)", () => {
    const result = feedbackSubmissionSchema.safeParse({
      business_id: validBusinessId,
      rating: 1,
      message: "Mauvaise expérience avec la commande à emporter.",
    });

    expect(result.success).toBe(true);
  });

  it("should reject ratings above 3 stars (4-5 stars are routed to Google)", () => {
    const result4 = feedbackSubmissionSchema.safeParse({
      business_id: validBusinessId,
      rating: 4,
      message: "C'était bien dans l'ensemble.",
    });
    expect(result4.success).toBe(false);

    const result5 = feedbackSubmissionSchema.safeParse({
      business_id: validBusinessId,
      rating: 5,
      message: "Parfait rien à redire !",
    });
    expect(result5.success).toBe(false);
  });

  it("should reject messages that are too short", () => {
    const result = feedbackSubmissionSchema.safeParse({
      business_id: validBusinessId,
      rating: 1,
      message: "Bof",
    });

    expect(result.success).toBe(false);
  });

  it("should reject invalid UUIDs for business_id", () => {
    const result = feedbackSubmissionSchema.safeParse({
      business_id: "not-a-uuid",
      rating: 2,
      message: "Problème avec le service.",
    });

    expect(result.success).toBe(false);
  });
});
