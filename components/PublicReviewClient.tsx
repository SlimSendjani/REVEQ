"use client";

import React, { useState } from "react";
import type { Business } from "@/types/domain";
import { getDictionary, type SupportedLocale } from "@/lib/i18n";
import { Star, CheckCircle2, ShieldAlert, ArrowRight, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface PublicReviewClientProps {
  business: Business;
}

export function PublicReviewClient({ business }: PublicReviewClientProps) {
  const [locale, setLocale] = useState<SupportedLocale>(
    business.default_lang === "EN" ? "en" : "fr"
  );
  const dict = getDictionary(locale);

  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "redirecting" | "feedback" | "success">("idle");

  // Feedback form state
  const [message, setMessage] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const activeRating = hoverRating || rating || 0;

  // Log scan event asynchronously
  const logScan = async (selectedRating: number, routedTo: "google" | "private") => {
    try {
      await fetch("/api/scan-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_id: business.id,
          rating: selectedRating,
          routed_to: routedTo,
        }),
      });
    } catch {
      // Ignore background logging failures to preserve user experience
    }
  };

  const handleRatingSelect = async (selected: number) => {
    setRating(selected);

    if (selected >= 4) {
      // 4-5 Stars -> Google Maps
      setStatus("redirecting");
      logScan(selected, "google");

      // 1.5s delay to allow user to see the thank-you feedback before redirecting
      setTimeout(() => {
        window.location.href = business.google_review_url;
      }, 1400);
    } else {
      // 1-3 Stars -> Private Feedback Interception
      setStatus("feedback");
      logScan(selected, "private");
    }
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || message.trim().length < 5) {
      setFormError(
        locale === "en"
          ? "Please write at least 5 characters to help us understand."
          : "Veuillez écrire au moins 5 caractères pour nous aider à comprendre."
      );
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_id: business.id,
          rating: rating || 2,
          customer_name: customerName.trim() || null,
          customer_contact: customerContact.trim() || null,
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur de soumission");
      }

      setStatus("success");
    } catch (err: any) {
      setFormError(err?.message || "Une erreur est survenue lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between p-4 selection:bg-brand-light selection:text-brand">
      
      {/* Top Bar with Language Switcher */}
      <div className="max-w-md w-full mx-auto flex items-center justify-between py-2">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Avis Vérifié · QC
        </span>

        {business.default_lang === "BOTH" && (
          <button
            type="button"
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="text-xs font-bold px-2 py-1 rounded bg-white border border-slate-200 text-slate-600 hover:text-foreground shadow-2xs"
          >
            {locale === "fr" ? "English" : "Français"}
          </button>
        )}
      </div>

      {/* Main Review Card */}
      <div className="max-w-md w-full mx-auto my-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 text-center animate-in fade-in zoom-in-95 duration-200">
        
        {/* Business Logo & Name */}
        <div className="mb-6">
          <div
            className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-md border border-white"
            style={{ backgroundColor: business.primary_color || "#0E7470" }}
          >
            {business.logo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={business.logo_url}
                alt={business.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              business.name.charAt(0).toUpperCase()
            )}
          </div>
          <h1 className="mt-3.5 text-xl font-extrabold text-foreground tracking-tight">
            {business.name}
          </h1>
        </div>

        {/* 1. INITIAL STATE : STAR SELECTION */}
        {status === "idle" && (
          <div className="space-y-6">
            <p className="text-base font-semibold text-slate-800 leading-snug">
              {dict.publicPage.question}
            </p>

            {/* Large Tactile 5 Stars */}
            <div className="flex items-center justify-center gap-2 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(null)}
                  onClick={() => handleRatingSelect(star)}
                  className="p-1.5 transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                  aria-label={`${star} étoiles`}
                >
                  <Star
                    className={`w-9 h-9 transition-colors ${
                      star <= activeRating
                        ? "fill-star text-star drop-shadow-sm"
                        : "text-slate-300 fill-slate-50"
                    }`}
                  />
                </button>
              ))}
            </div>

            <p className="text-xs text-slate-400">
              {locale === "en" ? "Touch the stars to evaluate" : "Touchez les étoiles pour noter"}
            </p>
          </div>
        )}

        {/* 2. POSITIVE REDIRECTION (4-5 Stars) */}
        {status === "redirecting" && (
          <div className="py-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-emerald-950">
                {locale === "en" ? "Thank you so much!" : "Merci beaucoup !"}
              </h2>
              <p className="text-xs text-emerald-800 max-w-xs mx-auto">
                {dict.publicPage.positiveRedirecting}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 font-medium">
              <Loader2 className="w-4 h-4 animate-spin text-brand" />
              <span>Google Maps</span>
            </div>
          </div>
        )}

        {/* 3. CONSTRUCTIVE / INTERCEPTION FEEDBACK FORM (1-3 Stars) */}
        {status === "feedback" && (
          <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-left animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5 text-amber-700 font-bold text-sm">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{dict.publicPage.privateFeedbackTitle}</span>
              </div>
              <div className="flex text-star text-xs">
                {Array.from({ length: rating || 2 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-star text-star" />
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {dict.publicPage.privateFeedbackSubtitle}
            </p>

            <div>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={dict.publicPage.messagePlaceholder}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/30 bg-slate-50 text-slate-800 resize-none"
              />
              {formError && (
                <p className="text-[11px] text-red-600 mt-1 font-medium">{formError}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder={dict.publicPage.namePlaceholder}
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <input
                type="text"
                value={customerContact}
                onChange={(e) => setCustomerContact(e.target.value)}
                placeholder={dict.publicPage.contactPlaceholder}
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            <p className="text-[10px] text-slate-400 leading-tight">
              {dict.publicPage.law25Notice}
            </p>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-xs py-3 font-bold bg-brand hover:bg-brand-hover shadow-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
                  Transmission en cours...
                </>
              ) : (
                <>
                  {dict.publicPage.submitFeedback}
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </>
              )}
            </Button>
          </form>
        )}

        {/* 4. SUCCESS STATE */}
        {status === "success" && (
          <div className="py-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h2 className="text-base font-bold text-foreground">
                {dict.publicPage.feedbackSuccess}
              </h2>
              <p className="text-xs text-slate-500">
                {locale === "en"
                  ? "We take all feedback seriously to provide you with the best experience."
                  : "Nous prenons chaque remarque à cœur pour vous offrir la meilleure expérience."}
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Google Anti-Review-Gating Secondary Link (Compliance Guarantee) */}
      <div className="max-w-md w-full mx-auto py-3 text-center">
        <a
          href={business.google_review_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-slate-400 hover:text-slate-600 underline inline-flex items-center gap-1 transition"
        >
          {dict.publicPage.leaveReviewDirectly}
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

    </div>
  );
}
