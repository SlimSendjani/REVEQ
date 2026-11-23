import type { Database } from "./database";

export type Business = Database["public"]["Tables"]["businesses"]["Row"];
export type BusinessInsert = Database["public"]["Tables"]["businesses"]["Insert"];
export type BusinessUpdate = Database["public"]["Tables"]["businesses"]["Update"];

export type ScanEvent = Database["public"]["Tables"]["scan_events"]["Row"];
export type ScanEventInsert = Database["public"]["Tables"]["scan_events"]["Insert"];

export type PrivateFeedback = Database["public"]["Tables"]["private_feedbacks"]["Row"];
export type PrivateFeedbackInsert = Database["public"]["Tables"]["private_feedbacks"]["Insert"];

export type Language = "FR" | "EN" | "BOTH";
export type SubscriptionStatus = "active" | "trialing" | "past_due" | "canceled" | "inactive";
export type PlanTier = "standard" | "pro" | "enterprise";

export interface ScanRouteDecision {
  rating: number;
  routed_to: "google" | "private";
  shouldRedirectGoogle: boolean;
  shouldOpenFeedbackModal: boolean;
}

export interface DashboardMetrics {
  totalScans: number;
  googleRedirects: number;
  privateIntercepts: number;
  averageRating: number;
  conversionRate: number; // percentage of positive scans
}
