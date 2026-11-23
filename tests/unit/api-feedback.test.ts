import { describe, it, expect } from "vitest";
import { POST } from "@/app/api/feedback/route";
import { feedbackRateLimiter } from "@/lib/rate-limiter";

describe("Feedback API Endpoint (/api/feedback)", () => {
  const validBusinessId = "11111111-1111-1111-1111-111111111111";

  it("should return 400 when body is invalid", async () => {
    const req = new Request("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "10.0.0.1" },
      body: JSON.stringify({
        business_id: "not-a-uuid",
        rating: 5, // rating > 3 is not accepted for private feedback
        message: "court",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBeDefined();
  });

  it("should return 200 and accept valid 1-3 star feedback", async () => {
    feedbackRateLimiter.reset("10.0.0.2");

    const req = new Request("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "10.0.0.2" },
      body: JSON.stringify({
        business_id: validBusinessId,
        rating: 2,
        customer_name: "Julie Lavoie",
        customer_contact: "julie@lavoie.qc.ca",
        message: "Le temps d'attente à la commande était trop long.",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it("should return 429 when rate limit is exceeded for the same IP", async () => {
    const testIp = "192.168.1.99";
    feedbackRateLimiter.reset(testIp);

    const makeRequest = () =>
      new Request("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-forwarded-for": testIp },
        body: JSON.stringify({
          business_id: validBusinessId,
          rating: 2,
          message: "Message de test répété.",
        }),
      });

    // 3 requêtes autorisées
    const r1 = await POST(makeRequest());
    expect(r1.status).toBe(200);
    const r2 = await POST(makeRequest());
    expect(r2.status).toBe(200);
    const r3 = await POST(makeRequest());
    expect(r3.status).toBe(200);

    // 4ème requête doit être bloquée avec statut 429
    const r4 = await POST(makeRequest());
    expect(r4.status).toBe(429);
    const json = await r4.json();
    expect(json.error).toContain("Trop de soumissions");
  });
});
