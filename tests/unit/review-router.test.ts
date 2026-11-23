import { describe, it, expect } from "vitest";
import { evaluateRatingRoute } from "@/lib/review-router";

describe("Review Routing Logic (Review Gating & Compliance)", () => {
  it("should route 4 and 5 stars directly to Google Reviews", () => {
    const route4 = evaluateRatingRoute(4);
    expect(route4.routed_to).toBe("google");
    expect(route4.shouldRedirectGoogle).toBe(true);
    expect(route4.shouldOpenFeedbackModal).toBe(false);

    const route5 = evaluateRatingRoute(5);
    expect(route5.routed_to).toBe("google");
    expect(route5.shouldRedirectGoogle).toBe(true);
    expect(route5.shouldOpenFeedbackModal).toBe(false);
  });

  it("should intercept 1, 2, and 3 stars via private feedback modal", () => {
    [1, 2, 3].forEach((rating) => {
      const decision = evaluateRatingRoute(rating);
      expect(decision.routed_to).toBe("private");
      expect(decision.shouldRedirectGoogle).toBe(false);
      expect(decision.shouldOpenFeedbackModal).toBe(true);
    });
  });

  it("should throw an error on out-of-bounds ratings", () => {
    expect(() => evaluateRatingRoute(0)).toThrow();
    expect(() => evaluateRatingRoute(6)).toThrow();
    expect(() => evaluateRatingRoute(-1)).toThrow();
  });
});
