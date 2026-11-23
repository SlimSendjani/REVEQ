-- ==============================================================================
-- REVEQ - Données de Démonstration / Seed Supabase
-- ==============================================================================

-- 1. Note: Un user de test peut être créé dans auth.users si auth local, 
-- sinon insérer avec un UUID de test fixe.
DO $$
DECLARE
    demo_user_id UUID := '00000000-0000-0000-0000-000000000001';
    demo_business_id UUID := '11111111-1111-1111-1111-111111111111';
BEGIN
    -- Insérer un commerce de test actif
    INSERT INTO public.businesses (
        id,
        user_id,
        name,
        slug,
        google_review_url,
        alert_email,
        logo_url,
        primary_color,
        default_lang,
        subscription_status,
        plan_tier
    ) VALUES (
        demo_business_id,
        demo_user_id,
        'Café Le Petit Saint-Denis',
        'cafe-le-petit-saint-denis',
        'https://maps.google.com/?cid=12345678901234567890',
        'gerant@cafepetitsaintdenis.ca',
        null,
        '#0E7470',
        'FR',
        'active',
        'standard'
    ) ON CONFLICT (slug) DO NOTHING;

    -- Insérer des événements de scan (4-5 étoiles redirigés vers Google)
    INSERT INTO public.scan_events (business_id, rating, routed_to) VALUES
    (demo_business_id, 5, 'google'),
    (demo_business_id, 5, 'google'),
    (demo_business_id, 4, 'google'),
    (demo_business_id, 5, 'google'),
    (demo_business_id, 4, 'google'),
    (demo_business_id, 5, 'google'),
    (demo_business_id, 5, 'google'),
    (demo_business_id, 4, 'google'),
    (demo_business_id, 5, 'google'),
    (demo_business_id, 5, 'google'),
    (demo_business_id, 5, 'google'),
    (demo_business_id, 4, 'google');

    -- Insérer des retours 1-3 étoiles interceptés
    INSERT INTO public.scan_events (business_id, rating, routed_to) VALUES
    (demo_business_id, 2, 'private'),
    (demo_business_id, 1, 'private');

    -- Insérer les détails des retours privés correspondants
    INSERT INTO public.private_feedbacks (
        business_id,
        rating,
        customer_name,
        customer_contact,
        message,
        status
    ) VALUES
    (
        demo_business_id,
        2,
        'Jean-François Tremblay',
        'jf.tremblay@email.com',
        'Le temps d''attente pour le latte d''avoine était de plus de 15 minutes ce matin malgré peu de monde.',
        'new'
    ),
    (
        demo_business_id,
        1,
        'Sophie Roy',
        '514-555-0199',
        'La table près de la fenêtre était bancale et le croissant n''était pas frais du jour.',
        'resolved'
    );
END $$;
