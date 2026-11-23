export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      businesses: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          slug: string;
          google_review_url: string;
          alert_email: string;
          logo_url: string | null;
          primary_color: string;
          default_lang: "FR" | "EN" | "BOTH";
          stripe_customer_id: string | null;
          stripe_subscription_id: string | null;
          subscription_status: "active" | "trialing" | "past_due" | "canceled" | "inactive";
          plan_tier: "standard" | "pro" | "enterprise";
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          slug: string;
          google_review_url: string;
          alert_email: string;
          logo_url?: string | null;
          primary_color?: string;
          default_lang?: "FR" | "EN" | "BOTH";
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          subscription_status?: "active" | "trialing" | "past_due" | "canceled" | "inactive";
          plan_tier?: "standard" | "pro" | "enterprise";
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          slug?: string;
          google_review_url?: string;
          alert_email?: string;
          logo_url?: string | null;
          primary_color?: string;
          default_lang?: "FR" | "EN" | "BOTH";
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          subscription_status?: "active" | "trialing" | "past_due" | "canceled" | "inactive";
          plan_tier?: "standard" | "pro" | "enterprise";
          created_at?: string;
        };
      };
      scan_events: {
        Row: {
          id: string;
          business_id: string;
          rating: number;
          routed_to: "google" | "private";
          created_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          rating: number;
          routed_to: "google" | "private";
          created_at?: string;
        };
        Update: {
          id?: string;
          business_id?: string;
          rating?: number;
          routed_to?: "google" | "private";
          created_at?: string;
        };
      };
      private_feedbacks: {
        Row: {
          id: string;
          business_id: string;
          rating: number;
          customer_name: string | null;
          customer_contact: string | null;
          message: string;
          status: "new" | "resolved";
          created_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          rating: number;
          customer_name?: string | null;
          customer_contact?: string | null;
          message: string;
          status?: "new" | "resolved";
          created_at?: string;
        };
        Update: {
          id?: string;
          business_id?: string;
          rating?: number;
          customer_name?: string | null;
          customer_contact?: string | null;
          message?: string;
          status?: "new" | "resolved";
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
