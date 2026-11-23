import type { Business, DashboardMetrics } from "@/types/domain";
import { env } from "@/lib/env";

export function generateMonthlyReportHtml(business: Business, metrics: DashboardMetrics): string {
  const monthName = new Intl.DateTimeFormat("fr-CA", { month: "long", year: "numeric" }).format(new Date());

  return `
<!DOCTYPE html>
<html lang="fr-CA">
<head>
  <meta charset="utf-8">
  <title>Bilan Mensuel Kit Réputation Google</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    
    <!-- En-tête -->
    <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 20px; margin-bottom: 24px;">
      <span style="font-size: 11px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em; color: #0e7470; background-color: #e6f4f3; padding: 4px 10px; rounded-full: 9999px;">
        Bilan Mensuel de Réputation · ${monthName}
      </span>
      <h1 style="font-size: 22px; font-weight: 800; color: #0f172a; margin: 12px 0 4px 0;">
        ${business.name}
      </h1>
      <p style="font-size: 13px; color: #64748b; margin: 0;">
        Voici les retombées générées par votre Kit Réputation au cours des 30 derniers jours.
      </p>
    </div>

    <!-- 2 KPIs Principaux -->
    <div style="display: flex; gap: 12px; margin-bottom: 24px;">
      <div style="flex: 1; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 14px; padding: 16px; text-align: center;">
        <span style="font-size: 32px; font-weight: 900; color: #15803d; display: block; line-height: 1;">
          +${metrics.googleRedirects}
        </span>
        <span style="font-size: 12px; font-weight: bold; color: #166534; margin-top: 6px; display: block;">
          Avis 5★ Redirigés
        </span>
        <span style="font-size: 10px; color: #4ade80;">Vers votre fiche Google Maps</span>
      </div>

      <div style="flex: 1; background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 14px; padding: 16px; text-align: center;">
        <span style="font-size: 32px; font-weight: 900; color: #b45309; display: block; line-height: 1;">
          ${metrics.privateIntercepts}
        </span>
        <span style="font-size: 12px; font-weight: bold; color: #92400e; margin-top: 6px; display: block;">
          Insatisfactions Interceptées
        </span>
        <span style="font-size: 10px; color: #f59e0b;">Avant publication publique</span>
      </div>
    </div>

    <!-- Démonstration de valeur ROI -->
    <div style="background-color: #f8fafc; border-radius: 14px; padding: 18px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
      <h3 style="font-size: 14px; font-weight: bold; margin: 0 0 8px 0; color: #0f172a;">
        🛡️ Impact sur votre réputation locale
      </h3>
      <p style="font-size: 13px; line-height: 1.5; color: #475569; margin: 0;">
        Grâce au filtrage intelligent de votre QR Code, vous avez maintenu une note moyenne de <strong>${metrics.averageRating}/5★</strong> sur vos ${metrics.totalScans} interactions ce mois-ci. Les retours mitigés ont été résolus en direct sans dégrader votre classement dans le pack local de Google Maps.
      </p>
    </div>

    <!-- Bouton CTA -->
    <div style="text-align: center; margin-bottom: 28px;">
      <a href="${env.appUrl}/dashboard" style="display: inline-block; background-color: #0e7470; color: #ffffff; font-weight: bold; font-size: 14px; padding: 12px 28px; text-decoration: none; border-radius: 10px; box-shadow: 0 2px 4px rgba(14, 116, 112, 0.2);">
        Consulter mes statistiques détaillées →
      </a>
    </div>

    <!-- Pied de page -->
    <div style="border-top: 1px solid #f1f5f9; padding-top: 16px; font-size: 11px; color: #94a3b8; text-align: center;">
      <p style="margin: 0 0 4px 0;">
        Rapport mensuel automatique généré pour ${business.name} (${business.alert_email}).
      </p>
      <p style="margin: 0;">
        Kit Réputation Google · Conçu pour les commerces locaux du Québec · Conforme Loi 96
      </p>
    </div>

  </div>
</body>
</html>
  `;
}
