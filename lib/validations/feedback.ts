import { z } from "zod";

export const feedbackSubmissionSchema = z.object({
  business_id: z.string().uuid("Identifiant de commerce invalide"),
  rating: z.number().int().min(1).max(3, "Seuls les avis de 1 à 3 étoiles sont reçus en privé"),
  customer_name: z.string().trim().max(100, "Le nom ne doit pas dépasser 100 caractères").optional().nullable(),
  customer_contact: z.string().trim().max(150, "Le contact ne doit pas dépasser 150 caractères").optional().nullable(),
  message: z
    .string()
    .trim()
    .min(5, "Le message doit comporter au moins 5 caractères")
    .max(2000, "Le message ne doit pas dépasser 2000 caractères"),
});

export type FeedbackSubmission = z.infer<typeof feedbackSubmissionSchema>;
