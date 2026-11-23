import { describe, it, expect } from "vitest";
import { sanitizeSlug, isValidSlug } from "@/lib/validations/slug";

describe("Slug Validator and Sanitizer", () => {
  it("should sanitize accented and complex strings into clean slugs", () => {
    expect(sanitizeSlug("Café & Pâtisserie Érable !")).toBe("cafe-patisserie-erable");
    expect(sanitizeSlug("Clinique Dentaire Du Plateau")).toBe("clinique-dentaire-du-plateau");
    expect(sanitizeSlug("Garage Auto-Expert (Montréal)")).toBe("garage-auto-expert-montreal");
    expect(sanitizeSlug("   Boulangerie   Saint-Denis   ")).toBe("boulangerie-saint-denis");
  });

  it("should validate conforming slugs", () => {
    expect(isValidSlug("cafe-le-petit-saint-denis")).toBe(true);
    expect(isValidSlug("barbier-mtl-123")).toBe(true);
    expect(isValidSlug("clinique-physio")).toBe(true);
  });

  it("should reject non-conforming slugs", () => {
    expect(isValidSlug("")).toBe(false);
    expect(isValidSlug("a")).toBe(false); // trop court
    expect(isValidSlug("Café-Érable")).toBe(false); // majuscules et accents interdits
    expect(isValidSlug("cafe_erable")).toBe(false); // underscore interdit
    expect(isValidSlug("-cafe-erable")).toBe(false); // tiret au début interdit
    expect(isValidSlug("cafe-erable-")).toBe(false); // tiret à la fin interdit
    expect(isValidSlug("cafe--erable")).toBe(false); // doubles tirets interdits
  });
});
