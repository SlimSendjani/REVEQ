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

## 2. Déploiement en Production (Cloudflare)

L'application est déployée sur **Cloudflare** via l'adaptateur OpenNext & Cloudflare Workers :

- **URL de Production en direct** : [https://reveq.slim-sendjani.workers.dev](https://reveq.slim-sendjani.workers.dev)
- **Projet Cloudflare Pages / Workers** : `reveq`

### Commandes de Déploiement Cloudflare
```bash
# Compiler le bundle OpenNext pour Cloudflare Workers
pnpm run build:cf

# Déployer directement sur Cloudflare Workers
pnpm run deploy:cf

# Prévisualiser en local avec le runtime Cloudflare (Wrangler dev server)
pnpm run preview:cf
```

### Variables d'environnement requises (Cloudflare Settings / Secrets)
Configurez les variables suivantes dans le tableau de bord Cloudflare ou via `wrangler secret put <NOM>` :
- `NEXT_PUBLIC_APP_URL` (ex: `https://reveq.slim-sendjani.workers.dev`)
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
