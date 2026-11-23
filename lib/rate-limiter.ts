interface RateLimitRecord {
  count: number;
  resetAt: number;
}

/**
 * Limiteur de débit en mémoire (Sliding window / Token bucket)
 * Adapté pour le runtime Node.js et les Server Actions.
 * Peut être branché sur Redis / Upstash en production multi-instances.
 */
export class MemoryRateLimiter {
  private cache = new Map<string, RateLimitRecord>();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests = 3, windowMs = 60_000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  public check(identifier: string): { success: boolean; remaining: number; resetInMs: number } {
    const now = Date.now();
    const existing = this.cache.get(identifier);

    if (!existing || now > existing.resetAt) {
      // Nouvelle fenêtre
      this.cache.set(identifier, {
        count: 1,
        resetAt: now + this.windowMs,
      });
      return {
        success: true,
        remaining: this.maxRequests - 1,
        resetInMs: this.windowMs,
      };
    }

    if (existing.count >= this.maxRequests) {
      return {
        success: false,
        remaining: 0,
        resetInMs: Math.max(0, existing.resetAt - now),
      };
    }

    existing.count += 1;
    return {
      success: true,
      remaining: this.maxRequests - existing.count,
      resetInMs: Math.max(0, existing.resetAt - now),
    };
  }

  public reset(identifier: string): void {
    this.cache.delete(identifier);
  }

  public clear(): void {
    this.cache.clear();
  }
}

// Instance globale par défaut pour la route /api/feedback (3 soumissions / minute / IP)
export const feedbackRateLimiter = new MemoryRateLimiter(3, 60_000);
