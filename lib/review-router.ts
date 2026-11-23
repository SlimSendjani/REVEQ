import type { ScanRouteDecision } from "@/types/domain";

/**
 * Logique métier centrale du filtrage intelligent d'avis.
 * 4-5 étoiles : Expérience positive -> Redirection vers Google Reviews
 * 1-3 étoiles : Insatisfaction -> Interception vers le formulaire privé du commerçant
 */
export function evaluateRatingRoute(rating: number): ScanRouteDecision {
  if (rating < 1 || rating > 5) {
    throw new Error(`Note invalide : ${rating}. La note doit être comprise entre 1 et 5.`);
  }

  const isPositive = rating >= 4;

  return {
    rating,
    routed_to: isPositive ? "google" : "private",
    shouldRedirectGoogle: isPositive,
    shouldOpenFeedbackModal: !isPositive,
  };
}
