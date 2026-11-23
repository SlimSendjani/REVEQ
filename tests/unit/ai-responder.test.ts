import { describe, it, expect } from "vitest";
import { generateCustomerResponse, RESPONSE_TONES } from "@/lib/ai-responder";
import { POST } from "@/app/api/ai/generate-response/route";

describe("REVEQ AI Customer Response Generator", () => {
  const sampleData = {
    businessName: "Boulangerie Saint-Laurent",
    customerName: "Camille Gagnon",
    rating: 2,
    message: "Le temps d'attente à la commande était beaucoup trop long ce matin.",
  };

  it("should have exactly 4 selectable response tones", () => {
    expect(RESPONSE_TONES.length).toBe(4);
    const ids = RESPONSE_TONES.map((t) => t.id);
    expect(ids).toEqual(["chaleureux", "professionnel", "rabais", "explicatif"]);
  });

  it("should generate a warm and empathetic response for 'chaleureux'", () => {
    const reply = generateCustomerResponse({
      ...sampleData,
      tone: "chaleureux",
    });

    expect(reply).toContain("Bonjour Camille Gagnon,");
    expect(reply).toContain("Boulangerie Saint-Laurent");
    expect(reply).toContain("sincèrement désolés");
    expect(reply).toContain("attente");
  });

  it("should generate a formal and institutional response for 'professionnel'", () => {
    const reply = generateCustomerResponse({
      ...sampleData,
      tone: "professionnel",
    });

    expect(reply).toContain("accusons bonne réception");
    expect(reply).toContain("direction opérationnelle");
  });

  it("should generate a commercial gesture response with compensation for 'rabais'", () => {
    const reply = generateCustomerResponse({
      ...sampleData,
      tone: "rabais",
    });

    expect(reply).toContain("offrir");
    expect(reply).toContain("rabais");
  });

  it("should generate an explanatory response for 'explicatif'", () => {
    const reply = generateCustomerResponse({
      ...sampleData,
      tone: "explicatif",
    });

    expect(reply).toContain("forte affluence");
    expect(reply).toContain("renforcé nos procédures");
  });

  it("should support API endpoint /api/ai/generate-response", async () => {
    const req = new Request("http://localhost:3000/api/ai/generate-response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Mon café était froid.",
        customer_name: "Nicolas",
        business_name: "Café Montréal",
        rating: 1,
        tone: "rabais",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.response).toContain("Nicolas");
    expect(json.response).toContain("Café Montréal");
  });
});
