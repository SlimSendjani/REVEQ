/**
 * Helper de configuration des variables d'environnement.
 * Permet d'exécuter des tests et des builds même sans clés de production configurées.
 */
export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key",
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-service-role-key",
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY || "sk_test_placeholder",
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "whsec_placeholder",
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder",
    priceIdSolo: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_SOLO || "price_solo",
    priceIdPro: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO || "price_pro",
    priceIdAnnual: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ANNUAL || "price_annual",
  },
  resend: {
    apiKey: process.env.RESEND_API_KEY || "re_test_placeholder",
    emailFrom: process.env.EMAIL_FROM || "Kit Réputation <notifications@reveq.ca>",
  },
  cron: {
    secret: process.env.CRON_SECRET || "cron_secret_placeholder",
  },
  isConfigured: () => {
    return Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      process.env.STRIPE_SECRET_KEY &&
      process.env.RESEND_API_KEY
    );
  },
};
