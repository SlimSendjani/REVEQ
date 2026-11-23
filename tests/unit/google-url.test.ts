import { describe, it, expect } from "vitest";
import { validateGoogleUrl } from "@/lib/validations/google-url";

describe("Google URL Validator", () => {
  it("should accept valid Google Review and Maps URLs", () => {
    expect(validateGoogleUrl("https://g.page/r/CU9rQ4Zexample/review")).toBe(true);
    expect(validateGoogleUrl("https://maps.google.com/?cid=1234567890")).toBe(true);
    expect(validateGoogleUrl("https://search.google.com/local/writereview?placeid=ChIJ123456")).toBe(true);
    expect(validateGoogleUrl("https://goo.gl/maps/Abc12345")).toBe(true);
  });

  it("should reject non-HTTPS URLs", () => {
    expect(validateGoogleUrl("http://maps.google.com/?cid=12345")).toBe(false);
    expect(validateGoogleUrl("http://g.page/review")).toBe(false);
  });

  it("should reject spoofed or phishing domains", () => {
    expect(validateGoogleUrl("https://evil-google.com/review")).toBe(false);
    expect(validateGoogleUrl("https://maps.google.com.attacker.com/fake")).toBe(false);
    expect(validateGoogleUrl("https://g.page.phishing.org")).toBe(false);
    expect(validateGoogleUrl("https://facebook.com/reviews")).toBe(false);
  });

  it("should reject invalid or empty inputs", () => {
    expect(validateGoogleUrl("")).toBe(false);
    expect(validateGoogleUrl("not-a-url")).toBe(false);
    expect(validateGoogleUrl("javascript:alert(1)")).toBe(false);
  });
});
