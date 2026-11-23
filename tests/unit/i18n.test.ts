import { describe, it, expect } from "vitest";
import { getDictionary, defaultLocale } from "@/lib/i18n";

describe("i18n Dictionary (Loi 96 Compliance)", () => {
  it("should default to French (fr) as required by Loi 96 in Quebec", () => {
    expect(defaultLocale).toBe("fr");

    const dict = getDictionary();
    expect(dict.publicPage.question).toBe("Comment s'est déroulée votre expérience aujourd'hui ?");
    expect(dict.publicPage.leaveReviewDirectly).toBe("Publier directement sur Google");
  });

  it("should return English dictionary when requested", () => {
    const dict = getDictionary("en");
    expect(dict.publicPage.question).toBe("How was your experience today?");
    expect(dict.publicPage.leaveReviewDirectly).toBe("Post directly on Google");
  });

  it("should fallback gracefully to French for unknown locales", () => {
    const dict = getDictionary("es");
    expect(dict.publicPage.question).toBe("Comment s'est déroulée votre expérience aujourd'hui ?");
  });
});
