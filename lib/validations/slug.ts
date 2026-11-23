export const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Nettoie une chaîne de caractères pour générer un slug URL-friendly
 * Exemple: "Café & Boulangerie Érable !" -> "cafe-boulangerie-erable"
 */
export function sanitizeSlug(input: string): string {
  if (!input) return "";

  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Supprime la ponctuation spéciale
    .replace(/[\s_]+/g, "-") // Remplace espaces et underscores par des tirets
    .replace(/-+/g, "-") // Évite les doubles tirets
    .replace(/^-+|-+$/g, ""); // Supprime tirets de début et fin
}

/**
 * Valide le format strict d'un slug
 */
export function isValidSlug(slug: string): boolean {
  if (!slug || slug.length < 2 || slug.length > 60) return false;
  return SLUG_REGEX.test(slug);
}
