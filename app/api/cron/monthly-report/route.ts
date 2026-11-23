import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { createAdminClient } from "@/lib/supabase/server";
import { DEMO_BUSINESS } from "@/lib/services/business";
import { getDashboardMetrics } from "@/lib/services/dashboard";
import { generateMonthlyReportHtml } from "@/lib/monthly-report-generator";
import { resend } from "@/lib/resend";
import type { Business } from "@/types/domain";

export async function GET(req: Request) {
  try {
    // 1. Vérification de l'autorisation Vercel Cron via Bearer Token
    const authHeader = req.headers.get("authorization");
    const expectedAuth = `Bearer ${env.cron.secret}`;

    if (!authHeader || authHeader !== expectedAuth) {
      return NextResponse.json(
        { error: "Accès non autorisé au Cron" },
        { status: 401 }
      );
    }

    let activeBusinesses: Business[] = [];

    // 2. Récupération des commerces actifs
    if (env.isConfigured()) {
      try {
        const supabase = createAdminClient();
        const { data, error } = await supabase
          .from("businesses")
          .select("*")
          .in("subscription_status", ["active", "trialing"]);

        if (!error && data && data.length > 0) {
          activeBusinesses = data as Business[];
        } else {
          activeBusinesses = [DEMO_BUSINESS];
        }
      } catch {
        activeBusinesses = [DEMO_BUSINESS];
      }
    } else {
      activeBusinesses = [DEMO_BUSINESS];
    }

    let emailsSent = 0;

    // 3. Traitement et envoi du bilan pour chaque commerce
    for (const business of activeBusinesses) {
      const metrics = await getDashboardMetrics(business.id);
      const emailHtml = generateMonthlyReportHtml(business, metrics);

      if (env.resend.apiKey && !env.resend.apiKey.includes("placeholder")) {
        try {
          await resend.emails.send({
            from: env.resend.emailFrom,
            to: business.alert_email,
            subject: `📊 [Bilan Mensuel] ${metrics.googleRedirects} avis 5★ générés pour ${business.name}`,
            html: emailHtml,
          });
          emailsSent += 1;
        } catch (mailErr) {
          console.warn(`Échec envoi rapport mensuel à ${business.alert_email}:`, mailErr);
        }
      }
    }

    return NextResponse.json(
      {
        success: true,
        processedCount: activeBusinesses.length,
        emailsSent,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Erreur exécution Cron", details: err?.message },
      { status: 500 }
    );
  }
}
