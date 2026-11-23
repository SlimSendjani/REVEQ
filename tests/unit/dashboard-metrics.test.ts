import { describe, it, expect } from "vitest";
import { calculateMetricsFromScans } from "@/lib/services/dashboard";
import { PATCH } from "@/app/api/feedback/[id]/resolve/route";

describe("Dashboard Metrics Calculation", () => {
  it("should return baseline metrics when there are no scans", () => {
    const metrics = calculateMetricsFromScans([]);
    expect(metrics.totalScans).toBe(0);
    expect(metrics.googleRedirects).toBe(0);
    expect(metrics.privateIntercepts).toBe(0);
    expect(metrics.averageRating).toBe(5.0);
    expect(metrics.conversionRate).toBe(100);
  });

  it("should accurately compute metrics for a mix of positive and private scans", () => {
    const scans = [
      { rating: 5, routed_to: "google" },
      { rating: 5, routed_to: "google" },
      { rating: 4, routed_to: "google" },
      { rating: 2, routed_to: "private" },
    ];

    const metrics = calculateMetricsFromScans(scans);
    expect(metrics.totalScans).toBe(4);
    expect(metrics.googleRedirects).toBe(3);
    expect(metrics.privateIntercepts).toBe(1);
    // (5+5+4+2) / 4 = 16 / 4 = 4.0
    expect(metrics.averageRating).toBe(4.0);
    // 3/4 = 75%
    expect(metrics.conversionRate).toBe(75);
  });
});

describe("Feedback Status Update Endpoint (/api/feedback/[id]/resolve)", () => {
  it("should return 400 when status is invalid", async () => {
    const req = new Request("http://localhost:3000/api/feedback/fb-001/resolve", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "invalid_status" }),
    });

    const res = await PATCH(req, { params: { id: "fb-001" } });
    expect(res.status).toBe(400);
  });

  it("should return 200 and accept valid status update to 'resolved'", async () => {
    const req = new Request("http://localhost:3000/api/feedback/fb-001/resolve", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "resolved" }),
    });

    const res = await PATCH(req, { params: { id: "fb-001" } });
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.status).toBe("resolved");
  });
});
