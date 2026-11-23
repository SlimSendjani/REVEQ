const ALLOWED_GOOGLE_DOMAINS = [
  "g.page",
  "search.google.com",
  "maps.google.com",
  "goo.gl",
];

/**
 * Valide qu'une URL fournie correspond bien à une URL d'avis Google Maps légitime.
 * Protège contre les redirections malveillantes et les attaques de phishing.
 */
export function validateGoogleUrl(url: string): boolean {
  if (!url || typeof url !== "string") {
    return false;
  }

  const trimmed = url.trim();

  try {
    const parsed = new URL(trimmed);

    // Obligation protocole HTTPS
    if (parsed.protocol !== "https:") {
      return false;
    }

    // Le hostname doit correspondre exactement ou être un sous-domaine direct autorisé
    const hostname = parsed.hostname.toLowerCase();
    const isDomainAllowed = ALLOWED_GOOGLE_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );

    return isDomainAllowed;
  } catch {
    return false;
  }
}
