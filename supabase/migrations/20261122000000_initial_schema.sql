-- ==============================================================================
-- REVEQ - Schema Initial PostgreSQL (Supabase)
-- Module: Kit Réputation Google SaaS
-- ==============================================================================

-- 1. Table des Commerces / Établissements
CREATE TABLE IF NOT EXISTS public.businesses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    google_review_url TEXT NOT NULL,
    alert_email TEXT NOT NULL,
    logo_url TEXT,
    primary_color TEXT DEFAULT '#0E7470',
    default_lang TEXT DEFAULT 'FR' CHECK (default_lang IN ('FR', 'EN', 'BOTH')),
    stripe_customer_id TEXT,
    stripe_subscription_id TEXT,
    subscription_status TEXT DEFAULT 'inactive' CHECK (subscription_status IN ('active', 'trialing', 'past_due', 'canceled', 'inactive')),
    plan_tier TEXT DEFAULT 'standard' CHECK (plan_tier IN ('standard', 'pro', 'enterprise')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index pour requêtes ultra-rapides au scan /[slug] et dashboard
CREATE INDEX IF NOT EXISTS idx_businesses_slug ON public.businesses(slug);
CREATE INDEX IF NOT EXISTS idx_businesses_user_id ON public.businesses(user_id);
CREATE INDEX IF NOT EXISTS idx_businesses_stripe_cust ON public.businesses(stripe_customer_id);

-- 2. Table des Événements de Scan (Analytics & Taux de conversion)
CREATE TABLE IF NOT EXISTS public.scan_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    routed_to TEXT NOT NULL CHECK (routed_to IN ('google', 'private')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_scan_events_business_id ON public.scan_events(business_id);
CREATE INDEX IF NOT EXISTS idx_scan_events_created_at ON public.scan_events(created_at);

-- 3. Table des Retours Privés Interceptés (1-3 étoiles)
CREATE TABLE IF NOT EXISTS public.private_feedbacks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 3),
    customer_name TEXT,
    customer_contact TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_private_feedbacks_business ON public.private_feedbacks(business_id);
CREATE INDEX IF NOT EXISTS idx_private_feedbacks_status ON public.private_feedbacks(status);

-- 4. Activer Row Level Security (RLS)
ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scan_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.private_feedbacks ENABLE ROW LEVEL SECURITY;

-- 5. Politiques RLS (Row Level Security)

-- Business: Lecture publique (nécessaire pour afficher la page client /[slug])
DROP POLICY IF EXISTS "Lecture publique des commerces par slug" ON public.businesses;
CREATE POLICY "Lecture publique des commerces par slug" 
ON public.businesses FOR SELECT 
USING (true);

-- Business: Gestion complète réservée au propriétaire authentifié
DROP POLICY IF EXISTS "Propriétaire gère son commerce" ON public.businesses;
CREATE POLICY "Propriétaire gère son commerce" 
ON public.businesses FOR ALL 
TO authenticated 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Scan Events: Insertion publique (anonyme lors du scan mobile d'un client)
DROP POLICY IF EXISTS "Insertion publique des événements de scan" ON public.scan_events;
CREATE POLICY "Insertion publique des événements de scan" 
ON public.scan_events FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Scan Events: Lecture réservée au commerçant pour son dashboard
DROP POLICY IF EXISTS "Propriétaire lit ses statistiques de scan" ON public.scan_events;
CREATE POLICY "Propriétaire lit ses statistiques de scan" 
ON public.scan_events FOR SELECT 
TO authenticated 
USING (
    business_id IN (
        SELECT id FROM public.businesses WHERE user_id = auth.uid()
    )
);

-- Private Feedbacks: Insertion publique autorisée (client qui soumet son mécontentement)
DROP POLICY IF EXISTS "Insertion publique des retours privés" ON public.private_feedbacks;
CREATE POLICY "Insertion publique des retours privés" 
ON public.private_feedbacks FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Private Feedbacks: Lecture et mise à jour réservées au propriétaire
DROP POLICY IF EXISTS "Propriétaire gère ses retours privés" ON public.private_feedbacks;
CREATE POLICY "Propriétaire gère ses retours privés" 
ON public.private_feedbacks FOR ALL 
TO authenticated 
USING (
    business_id IN (
        SELECT id FROM public.businesses WHERE user_id = auth.uid()
    )
);

-- 6. Storage Bucket pour les logos de commerces
INSERT INTO storage.buckets (id, name, public) 
VALUES ('business-logos', 'business-logos', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policy: Lecture publique des logos
DROP POLICY IF EXISTS "Logos publics" ON storage.objects;
CREATE POLICY "Logos publics" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'business-logos');

-- Storage Policy: Upload réservé aux utilisateurs authentifiés
DROP POLICY IF EXISTS "Upload logo authentifié" ON storage.objects;
CREATE POLICY "Upload logo authentifié" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'business-logos');
