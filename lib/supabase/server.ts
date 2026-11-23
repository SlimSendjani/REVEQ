import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import type { Database } from "@/types/database";
import { env } from "@/lib/env";

/**
 * Client Supabase pour les composants Server et Route Handlers
 */
export function createClient() {
  const cookieStore = cookies();

  return createServerClient<Database>(
    env.supabase.url,
    env.supabase.anonKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch {
            // Ignoré si appelé depuis un Server Component pur (en lecture seule)
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch {
            // Ignoré si appelé depuis un Server Component pur
          }
        },
      },
    }
  );
}

/**
 * Client Supabase avec privilèges Service Role (Bypass RLS).
 * Réservé exclusivement aux Webhooks Stripe, Cron jobs et processus d'administration internes.
 */
export function createAdminClient() {
  return createSupabaseClient<Database>(
    env.supabase.url,
    env.supabase.serviceRoleKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
