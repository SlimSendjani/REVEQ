# REVEQ — Plateforme de Protection & Réponses IA de Réputation Google

SaaS en libre-service 100 % numérique pour commerces de proximité au Québec (Montréal et régions). Conçu pour transformer systématiquement les clients satisfaits en avis Google 5 étoiles et intercepter les insatisfactions en privé avant qu'elles n'impactent la réputation publique.

---

## 1. Architecture & Stack Technique

- **Framework Fullstack** : Next.js 14+ (App Router, React 18, TypeScript, Tailwind CSS)
- **Base de Données & Auth** : Supabase PostgreSQL avec Row Level Security (RLS) et Supabase Auth
- **Paiements** : Stripe Checkout & Customer Portal (Forfait Unique à **79 $ CAD / mois** sans engagement)
- **Générateur IA de Riposte Client** : Assistant IA intégré avec 4 tonalités sélectionnables (*Geste Commercial*, *Contexte Rush*, *Chaleureux*, *Institutionnel*) adapté au français québécois
- **Notifications & Emails** : Resend API (alertes d'insatisfaction immédiates & rapport mensuel ROI)
- **Conformité Régionale & Légale** :
  - **Loi 96** (Charte de la langue française) : Interface native en français québécois (`fr-CA`), bascule anglais (`en`).
  - **Loi 25** (Protection des renseignements personnels au Québec) : Minimalisme des données et mentions d'information.
  - **Directives Google** : Conformité anti-review gating via lien secondaire direct accessible en tout temps.
- **Harnais de Test** : Vitest (50 tests unitaires automatisés validant tous les flux critiques).

---

## 2. Déploiement en Production (Vercel)

Ce dépôt est prêt pour un déploiement instantané sur [Vercel](https://vercel.com) :

1. Connectez votre compte GitHub à Vercel et importez le dépôt **`SlimSendjani/REVEQ`**.
2. Configurez les variables d'environnement listées dans `.env.example` :
   - `NEXT_PUBLIC_APP_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_STRIPE_PRICE_ID_79`
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `CRON_SECRET`
3. Déployez ! Le fichier `vercel.json` configure automatiquement le cron mensuel du rapport ROI.

---

## 3. Commandes Locales

```bash
# Lancer le serveur de développement local
pnpm dev

# Exécuter les tests unitaires (50 tests)
pnpm test

# Vérification des types TypeScript
pnpm typecheck

# Compiler pour la production
pnpm build
```

---

## 4. Licence & Droits
© 2026 REVEQ. Conçu à Montréal, Québec. Tous droits réservés.
