import { describe, it, expect, beforeEach } from "vitest";
import { MemoryRateLimiter } from "@/lib/rate-limiter";

describe("Memory Rate Limiter", () => {
  let limiter: MemoryRateLimiter;

  beforeEach(() => {
    limiter = new MemoryRateLimiter(3, 1000); // 3 requêtes max par seconde
  });

  it("should allow requests under the limit", () => {
    const res1 = limiter.check("ip-127.0.0.1");
    expect(res1.success).toBe(true);
    expect(res1.remaining).toBe(2);

    const res2 = limiter.check("ip-127.0.0.1");
    expect(res2.success).toBe(true);
    expect(res2.remaining).toBe(1);

    const res3 = limiter.check("ip-127.0.0.1");
    expect(res3.success).toBe(true);
    expect(res3.remaining).toBe(0);
  });

  it("should block requests that exceed the limit", () => {
    limiter.check("ip-127.0.0.1");
    limiter.check("ip-127.0.0.1");
    limiter.check("ip-127.0.0.1");

    const blocked = limiter.check("ip-127.0.0.1");
    expect(blocked.success).toBe(false);
    expect(blocked.remaining).toBe(0);
    expect(blocked.resetInMs).toBeGreaterThan(0);
  });

  it("should track distinct identifiers separately", () => {
    limiter.check("ip-1");
    limiter.check("ip-1");
    limiter.check("ip-1");
    expect(limiter.check("ip-1").success).toBe(false);

    // ip-2 doit rester libre
    expect(limiter.check("ip-2").success).toBe(true);
  });

  it("should allow reset for a specific identifier", () => {
    limiter.check("ip-1");
    limiter.check("ip-1");
    limiter.check("ip-1");
    expect(limiter.check("ip-1").success).toBe(false);

    limiter.reset("ip-1");
    expect(limiter.check("ip-1").success).toBe(true);
  });
});
