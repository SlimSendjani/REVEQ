# Kit Réputation Google (REVEQ) — Harnais & Spécifications

SaaS en libre-service 100 % numérique pour commerces de proximité au Québec (Montréal et régions). Conçu pour transformer systématiquement les clients satisfaits en avis Google 5 étoiles et intercepter les insatisfactions en privé avant qu'elles n'impactent la réputation publique.

---

## 1. Architecture & Stack Technique

- **Framework Fullstack** : Next.js 14+ (App Router, React 18, TypeScript, Tailwind CSS)
- **Base de Données & Auth** : Supabase PostgreSQL avec Row Level Security (RLS) et Supabase Auth
- **Paiements** : Stripe Checkout & Customer Portal (abonnements 29 $ et 49 $ CAD/mois)
- **Notifications & Emails** : Resend API (alertes d'insatisfaction immédiates & rapport mensuel ROI)
- **Conformité Régionale** :
  - **Loi 96** (Charte de la langue française) : Interface native en français québécois (`fr-CA`), bascule anglais (`en`).
  - **Loi 25** (Protection des renseignements personnels au Québec) : Minimalisme des données et mentions d'information.
  - **Directives Google** : Conformité anti-review gating via lien secondaire direct accessible en tout temps.
- **Harnais de Test** : Vitest (validation d'URL Google, sanitization de slugs, schéma Zod, limitation de débit, logique de routage d'avis).

---

## 2. Structure du Projet

```text
├── app/
│   ├── globals.css           # Thème Tailwind & charte graphique (#0E7470, #0F172A, #F59E0B)
│   ├── layout.tsx            # Root layout bilingue (défaut fr-CA)
│   └── page.tsx              # Landing page & démo interactive
├── lib/
│   ├── env.ts                # Validation et centralisation des variables d'environnement
│   ├── rate-limiter.ts       # Limiteur de débit en mémoire (protection contre le spam)
│   ├── review-router.ts      # Logique de filtrage (4-5★ -> Google, 1-3★ -> formulaire privé)
│   ├── stripe.ts             # Client Stripe SDK
│   ├── resend.ts             # Client Resend Email API
│   ├── i18n/                 # Dictionnaire bilingue FR-QC / EN
│   ├── supabase/
│   │   ├── client.ts         # Client Supabase navigateur
│   │   └── server.ts         # Client Supabase serveur & admin (service role)
│   └── validations/
│       ├── google-url.ts     # Validation stricte des URL Google Maps (g.page, maps, etc.)
│       ├── slug.ts           # Générateur et validateur de slugs URL-friendly
│       ├── feedback.ts       # Schéma de validation Zod pour retours privés
│       └── onboarding.ts     # Schéma de validation Zod pour l'onboarding commerçant
├── supabase/
│   ├── migrations/           # Schéma initial SQL avec tables et politiques RLS
│   └── seed.sql              # Données de démonstration pour développement local
├── tests/
│   └── unit/                 # Tests unitaires Vitest automatisés
├── types/
│   ├── database.ts           # Types TypeScript générés pour Supabase
│   └── domain.ts             # Modèles de données métier
├── vitest.config.ts          # Configuration de l'environnement de test
└── tailwind.config.ts        # Design tokens & couleurs officielles
```

---

## 3. Commandes du Harnais

```bash
# Lancer le serveur de développement local
pnpm dev

# Exécuter les tests unitaires
pnpm test

# Exécuter les tests en mode écoute (watch)
pnpm test:watch

# Vérification des types TypeScript
pnpm typecheck

# Compiler pour la production
pnpm build
```

---

## 4. Statut & Conditions de Lancement du Développement

Le harnais de développement est entièrement opérationnel :
- [x] Dépôt Git initialisé sur la branche `chore/project-harness` (règle git respectée, aucun commit sur `main`).
- [x] Schéma de base de données PostgreSQL documenté et scripté (`supabase/migrations/`).
- [x] Jeux d'essais et seed script créés (`supabase/seed.sql`).
- [x] Couche de validation et sécurité active (URL Google, Zod schemas, Rate Limiter anti-spam).
- [x] Système i18n conforme Loi 96 configuré.
- [x] Suite de tests automatisés validée à 100 % (22/22 tests passants).
- [x] Compilation Next.js et typage TypeScript validés à 100 %.
