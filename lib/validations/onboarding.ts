import { z } from "zod";
import { validateGoogleUrl } from "./google-url";
import { SLUG_REGEX } from "./slug";

export const onboardingSchema = z.object({
  name: z.string().trim().min(2, "Le nom du commerce doit comporter au moins 2 caractères").max(100),
  slug: z
    .string()
    .trim()
    .min(2, "Le slug doit comporter au moins 2 caractères")
    .max(60, "Le slug ne peut excéder 60 caractères")
    .regex(SLUG_REGEX, "Format de slug invalide (lettres minuscules, chiffres et tirets uniquement)"),
  google_review_url: z
    .string()
    .trim()
    .url("L'URL Google Maps doit être valide")
    .refine(validateGoogleUrl, {
      message: "L'URL doit être une adresse officielle Google (g.page, search.google.com, maps.google.com, goo.gl)",
    }),
  alert_email: z.string().trim().email("Courriel d'alerte invalide"),
  default_lang: z.enum(["FR", "EN", "BOTH"]).default("FR"),
  primary_color: z.string().regex(/^#([0-9A-Fa-f]{3}){1,2}$/, "Couleur hexadécimale invalide").default("#0E7470"),
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;
