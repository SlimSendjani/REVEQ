import { fr, type Dictionary } from "./dictionaries/fr";
import { en } from "./dictionaries/en";

export type SupportedLocale = "fr" | "en";

export const defaultLocale: SupportedLocale = "fr";

export function getDictionary(locale?: string): Dictionary {
  if (locale && locale.toLowerCase().startsWith("en")) {
    return en;
  }
  // Loi 96 : Français québécois par défaut
  return fr;
}

export { fr, en };
export type { Dictionary };
