import { NextResponse } from "next/server";
import { feedbackSubmissionSchema } from "@/lib/validations/feedback";
import { feedbackRateLimiter } from "@/lib/rate-limiter";
import { createAdminClient } from "@/lib/supabase/server";
import { resend } from "@/lib/resend";
import { env } from "@/lib/env";

export async function POST(req: Request) {
  try {
    // 1. Contrôle de débit anti-spam (Rate Limiting par IP)
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    const rateLimit = feedbackRateLimiter.check(clientIp);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Trop de soumissions rapprochées. Veuillez patienter avant de réessayer.",
          retryAfterMs: rateLimit.resetInMs,
        },
        { status: 429 }
      );
    }

    // 2. Validation Zod du corps de requête
    const json = await req.json();
    const validationResult = feedbackSubmissionSchema.safeParse(json);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Données de formulaire invalides",
          details: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const { business_id, rating, customer_name, customer_contact, message } =
      validationResult.data;

    let alertEmail: string | null = null;
    let businessName: string = "Votre commerce";

    // 3. Persistance dans la base Supabase (si configurée)
    if (env.isConfigured()) {
      try {
        const supabase = createAdminClient();

        // Insertion du retour privé
        await supabase.from("private_feedbacks").insert({
          business_id,
          rating,
          customer_name: customer_name || null,
          customer_contact: customer_contact || null,
          message,
          status: "new",
        });

        // Récupération de l'email d'alerte configuré pour le commerce
        const { data: business } = await supabase
          .from("businesses")
          .select("name, alert_email")
          .eq("id", business_id)
          .single();

        if (business) {
          alertEmail = business.alert_email;
          businessName = business.name;
        }
      } catch (dbErr) {
        console.warn("Avertissement persistance Supabase:", dbErr);
      }
    }

    // 4. Envoi de l'alerte courriel instantanée via Resend
    if (alertEmail && env.resend.apiKey && !env.resend.apiKey.includes("placeholder")) {
      try {
        await resend.emails.send({
          from: env.resend.emailFrom,
          to: alertEmail,
          subject: `⚠️ [Alerte Retours] Avis ${rating}★ reçu pour ${businessName}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
              <h2 style="color: #b45309; margin-top: 0;">Un client vient de laisser un retour constructif (${rating}/5★)</h2>
              <p style="color: #475569; font-size: 14px;">
                Ce retour a été <strong>intercepté en privé</strong> par votre Kit Réputation Google et n'a <strong>pas</strong> été publié sur Google Maps.
              </p>
              
              <div style="background-color: #fffbeb; border: 1px solid #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #92400e;">Message du client :</p>
                <p style="margin: 0; color: #1e293b; font-style: italic;">"${message}"</p>
              </div>

              <table style="width: 100%; font-size: 13px; color: #64748b; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 4px 0;"><strong>Nom du client :</strong></td>
                  <td style="padding: 4px 0; color: #0f172a;">${customer_name || "Non communiqué (Anonyme)"}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0;"><strong>Coordonnées :</strong></td>
                  <td style="padding: 4px 0; color: #0f172a;">${customer_contact || "Non communiquées"}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0;"><strong>Date de réception :</strong></td>
                  <td style="padding: 4px 0; color: #0f172a;">${new Date().toLocaleString("fr-CA", { timeZone: "America/Montreal" })}</td>
                </tr>
              </table>

              <p style="font-size: 13px; color: #64748b;">
                Vous pouvez contacter ce client directement pour transformer cette insatisfaction en fidélisation.
              </p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.warn("Échec d'envoi d'alerte Resend:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Votre message a été transmis directement et confidentiellement à la direction.",
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Erreur serveur interne", details: err?.message },
      { status: 500 }
    );
  }
}
