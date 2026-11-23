import { describe, it, expect } from "vitest";
import { onboardingSchema } from "@/lib/validations/onboarding";

describe("Onboarding Input Validation Schema", () => {
  it("should validate a complete and correct onboarding payload", () => {
    const validPayload = {
      name: "Boulangerie Le Pain d'Or",
      slug: "boulangerie-le-pain-dor",
      google_review_url: "https://g.page/r/CU9rQ4Zexample/review",
      alert_email: "direction@paindor.ca",
      default_lang: "FR" as const,
      primary_color: "#0E7470",
    };

    const result = onboardingSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("should reject invalid Google Review URLs in onboarding", () => {
    const invalidPayload = {
      name: "Restaurant Chez Paul",
      slug: "restaurant-chez-paul",
      google_review_url: "https://evil-site.com/review",
      alert_email: "paul@chezpaul.ca",
      default_lang: "FR" as const,
      primary_color: "#0E7470",
    };

    const result = onboardingSchema.safeParse(invalidPayload);
    expect(result.success).toBe(false);
  });

  it("should reject invalid email formats", () => {
    const invalidPayload = {
      name: "Salon Beauté",
      slug: "salon-beaute",
      google_review_url: "https://maps.google.com/?cid=99999",
      alert_email: "not-an-email",
      default_lang: "FR" as const,
      primary_color: "#0E7470",
    };

    const result = onboardingSchema.safeParse(invalidPayload);
    expect(result.success).toBe(false);
  });

  it("should reject malformed slugs in onboarding", () => {
    const invalidPayload = {
      name: "Bar Le Vieux Port",
      slug: "Bar Le Vieux Port!", // non sanitizé
      google_review_url: "https://search.google.com/local/writereview?placeid=123",
      alert_email: "bar@vieuxport.ca",
      default_lang: "FR" as const,
      primary_color: "#0E7470",
    };

    const result = onboardingSchema.safeParse(invalidPayload);
    expect(result.success).toBe(false);
  });
});
