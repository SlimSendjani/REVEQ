import { describe, it, expect } from "vitest";
import { getBusinessBySlug, DEMO_BUSINESS } from "@/lib/services/business";

describe("Business Service & Fallbacks", () => {
  it("should return DEMO_BUSINESS for cafe-le-petit-saint-denis", async () => {
    const business = await getBusinessBySlug("cafe-le-petit-saint-denis");
    expect(business).not.toBeNull();
    expect(business?.name).toBe("Café Le Petit Saint-Denis");
    expect(business?.slug).toBe("cafe-le-petit-saint-denis");
    expect(business?.subscription_status).toBe("active");
  });

  it("should return DEMO_BUSINESS for 'demo' shortcut", async () => {
    const business = await getBusinessBySlug("demo");
    expect(business).not.toBeNull();
    expect(business?.id).toBe(DEMO_BUSINESS.id);
  });

  it("should create an active dev mock for arbitrary slugs during development", async () => {
    const business = await getBusinessBySlug("boulangerie-mont-royal");
    expect(business).not.toBeNull();
    expect(business?.slug).toBe("boulangerie-mont-royal");
    expect(business?.name).toBe("Boulangerie Mont Royal");
  });
});
