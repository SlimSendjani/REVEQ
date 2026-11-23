import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/cron/monthly-report/route";
import { generateMonthlyReportHtml } from "@/lib/monthly-report-generator";
import { DEMO_BUSINESS } from "@/lib/services/business";
import { env } from "@/lib/env";

describe("Monthly Cron Report Endpoint & Template", () => {
  it("should generate HTML containing the business name and key metrics", () => {
    const html = generateMonthlyReportHtml(DEMO_BUSINESS, {
      totalScans: 200,
      googleRedirects: 180,
      privateIntercepts: 20,
      averageRating: 4.8,
      conversionRate: 90,
    });

    expect(html).toContain(DEMO_BUSINESS.name);
    expect(html).toContain("+180");
    expect(html).toContain("20");
    expect(html).toContain("4.8/5★");
    expect(html).toContain("Loi 96");
  });

  it("should return 401 Unauthorized when Authorization header is missing or incorrect", async () => {
    const req = new Request("http://localhost:3000/api/cron/monthly-report", {
      method: "GET",
    });

    const res = await GET(req);
    expect(res.status).toBe(401);
  });

  it("should return 200 Success when valid Bearer token is provided", async () => {
    const req = new Request("http://localhost:3000/api/cron/monthly-report", {
      method: "GET",
      headers: {
        authorization: `Bearer ${env.cron.secret}`,
      },
    });

    const res = await GET(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.processedCount).toBeGreaterThanOrEqual(1);
  });
});
