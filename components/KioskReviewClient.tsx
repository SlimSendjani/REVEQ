"use client";

import React, { useState, useEffect } from "react";
import type { Business } from "@/types/domain";
import { Star, CheckCircle2, ShieldAlert, RotateCcw, Tablet } from "lucide-react";
import { Button } from "./ui/button";

interface KioskProps {
  business: Business;
}

export function KioskReviewClient({ business }: KioskProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "positive" | "feedback" | "submitted">("idle");
  const [secondsLeft, setSecondsLeft] = useState<number>(10);
  const [feedbackText, setFeedbackText] = useState("");
  const [contact, setContact] = useState("");

  const resetKiosk = () => {
    setRating(null);
    setStatus("idle");
    setSecondsLeft(10);
    setFeedbackText("");
    setContact("");
  };

  // Timer automatique de réinitialisation (10 secondes) une fois l'avis complété
  useEffect(() => {
    if (status === "positive" || status === "submitted") {
      const interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            resetKiosk();
            return 10;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [status]);

  const handleStarTouch = async (selected: number) => {
    setRating(selected);

    if (selected >= 4) {
      setStatus("positive");
      setSecondsLeft(10);

      // Enregistrement asynchrone de l'événement
      fetch("/api/scan-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_id: business.id,
          rating: selected,
          routed_to: "google",
        }),
      }).catch(() => {});
    } else {
      setStatus("feedback");
      fetch("/api/scan-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_id: business.id,
          rating: selected,
          routed_to: "private",
        }),
      }).catch(() => {});
    }
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_id: business.id,
          rating: rating || 2,
          customer_name: "Client Tablette Caisse",
          customer_contact: contact.trim() || null,
          message: feedbackText.trim(),
        }),
      });
    } catch {
      // Ignoré
    }

    setStatus("submitted");
    setSecondsLeft(10);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-950 text-white flex flex-col justify-between p-6 sm:p-12 select-none">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-md"
            style={{ backgroundColor: business.primary_color || "#0E7470" }}
          >
            {business.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight">{business.name}</h1>
            <p className="text-xs text-slate-400">Point de caisse · Évaluation de service</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold">
          <Tablet className="w-4 h-4 text-brand" />
          <span>Mode Borne Tactile</span>
        </div>
      </div>

      {/* Central Interactive Content */}
      <div className="max-w-2xl w-full mx-auto text-center my-auto">
        {status === "idle" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Comment s&apos;est déroulée votre expérience aujourd&apos;hui ?
            </h2>

            {/* Giant Touch Stars for Tablet */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 py-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleStarTouch(s)}
                  className="p-2 sm:p-3 hover:scale-125 transition-transform focus:outline-none cursor-pointer"
                  aria-label={`${s} étoiles`}
                >
                  <Star className="w-12 h-12 sm:w-20 sm:h-20 fill-star text-star drop-shadow-md" />
                </button>
              ))}
            </div>

            <p className="text-sm sm:text-base text-slate-400 font-medium">
              Touchez une note ci-dessus pour nous donner votre avis
            </p>
          </div>
        )}

        {status === "positive" && (
          <div className="space-y-6 bg-slate-900/90 border border-emerald-500/30 p-8 sm:p-12 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Merci infiniment pour vos {rating} étoiles !
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-lg mx-auto">
                Votre satisfaction est notre plus belle récompense. Au plaisir de vous revoir très bientôt !
              </p>
            </div>

            {/* Reset countdown progress */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-center gap-4 text-sm text-slate-400">
              <span>Prochain client dans {secondsLeft}s</span>
              <Button variant="outline" size="sm" onClick={resetKiosk} className="text-xs">
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                Réinitialiser
              </Button>
            </div>
          </div>
        )}

        {status === "feedback" && (
          <form
            onSubmit={handleFeedbackSubmit}
            className="space-y-4 bg-slate-900/90 border border-amber-500/30 p-6 sm:p-10 rounded-3xl shadow-2xl text-left animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg sm:text-xl">
              <ShieldAlert className="w-6 h-6" />
              <span>Aidez-nous à nous améliorer</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Votre avis de {rating}★ sera transmis directement et confidentiellement au propriétaire de l&apos;établissement.
            </p>

            <textarea
              rows={3}
              required
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Expliquez-nous brièvement ce qui n'a pas été..."
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />

            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Votre courriel ou téléphone si vous souhaitez être recontacté (optionnel)"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 text-sm focus:outline-none"
            />

            <div className="flex items-center justify-between pt-2">
              <Button type="button" variant="ghost" size="sm" onClick={resetKiosk} className="text-slate-400 text-xs">
                Annuler
              </Button>
              <Button type="submit" size="md" className="font-bold bg-brand hover:bg-brand-hover">
                Transmettre à la direction
              </Button>
            </div>
          </form>
        )}

        {status === "submitted" && (
          <div className="space-y-6 bg-slate-900/90 border border-emerald-500/30 p-8 sm:p-12 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Message transmis avec succès
              </h2>
              <p className="text-slate-300 text-base max-w-lg mx-auto">
                La direction a été alertée de votre retour. Merci pour votre aide précieuse.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-center gap-4 text-sm text-slate-400">
              <span>Prochain client dans {secondsLeft}s</span>
              <Button variant="outline" size="sm" onClick={resetKiosk} className="text-xs">
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                Réinitialiser
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/80">
        <span>Kit Réputation Google · Mode Comptoir</span>
        <span>Conforme Loi 96 Québec · Réinitialisation continue</span>
      </div>

    </div>
  );
}
