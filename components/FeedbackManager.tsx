"use client";

import React, { useState } from "react";
import type { PrivateFeedback } from "@/types/domain";
import {
  ShieldAlert,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Filter,
  Check,
  RotateCcw,
} from "lucide-react";
import { Button } from "./ui/button";

interface FeedbackManagerProps {
  initialFeedbacks: PrivateFeedback[];
}

export function FeedbackManager({ initialFeedbacks }: FeedbackManagerProps) {
  const [feedbacks, setFeedbacks] = useState<PrivateFeedback[]>(initialFeedbacks);
  const [filter, setFilter] = useState<"all" | "new" | "resolved">("all");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const filteredFeedbacks = feedbacks.filter((fb) => {
    if (filter === "new") return fb.status === "new";
    if (filter === "resolved") return fb.status === "resolved";
    return true;
  });

  const toggleStatus = async (id: string, currentStatus: "new" | "resolved") => {
    const nextStatus = currentStatus === "new" ? "resolved" : "new";
    setLoadingId(id);

    try {
      await fetch(`/api/feedback/${id}/resolve`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });

      setFeedbacks((prev) =>
        prev.map((fb) => (fb.id === id ? { ...fb, status: nextStatus } : fb))
      );
    } catch (err) {
      console.error("Échec de mise à jour du statut:", err);
    } finally {
      setLoadingId(null);
    }
  };

  const newCount = feedbacks.filter((f) => f.status === "new").length;
  const resolvedCount = feedbacks.filter((f) => f.status === "resolved").length;

  return (
    <div className="space-y-6">
      
      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 bg-white p-3 rounded-2xl border border-border shadow-xs">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filter === "all"
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:text-foreground hover:bg-slate-100"
            }`}
          >
            Tous ({feedbacks.length})
          </button>

          <button
            type="button"
            onClick={() => setFilter("new")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              filter === "new"
                ? "bg-amber-600 text-white"
                : "text-amber-800 bg-amber-50 hover:bg-amber-100"
            }`}
          >
            <span>À traiter</span>
            <span className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center text-[10px]">
              {newCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFilter("resolved")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filter === "resolved"
                ? "bg-emerald-600 text-white"
                : "text-emerald-800 bg-emerald-50 hover:bg-emerald-100"
            }`}
          >
            Résolus ({resolvedCount})
          </button>
        </div>

        <div className="text-xs text-slate-400 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          <span>{filteredFeedbacks.length} retours affichés</span>
        </div>
      </div>

      {/* Feedbacks List */}
      {filteredFeedbacks.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-border shadow-xs space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-sm font-bold text-foreground">Aucun retour dans cette catégorie</p>
          <p className="text-xs text-slate-400">
            Tous les retours clients sont traités ou aucun nouveau mécontentement n&apos;a été enregistré.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFeedbacks.map((fb) => {
            const isEmail = fb.customer_contact?.includes("@");
            const isPhone = fb.customer_contact && !isEmail;

            return (
              <div
                key={fb.id}
                className={`p-6 rounded-3xl bg-white border shadow-xs transition-all ${
                  fb.status === "new"
                    ? "border-amber-200/90 ring-1 ring-amber-100"
                    : "border-border opacity-85"
                }`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-xs font-black px-2.5 py-1 rounded-full flex items-center gap-1 ${
                        fb.rating === 1
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      <ShieldAlert className="w-3.5 h-3.5" />
                      {fb.rating}/5★ Intercepté
                    </span>

                    <h3 className="font-bold text-sm text-foreground">
                      {fb.customer_name || "Client Anonyme"}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(fb.created_at).toLocaleString("fr-CA", {
                        timeZone: "America/Montreal",
                      })}
                    </span>

                    <span
                      className={`font-bold px-2 py-0.5 rounded-full text-[10px] ${
                        fb.status === "new"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {fb.status === "new" ? "À traiter" : "Résolu"}
                    </span>
                  </div>
                </div>

                {/* Message Body */}
                <div className="my-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-800 leading-relaxed font-sans">
                  &ldquo;{fb.message}&rdquo;
                </div>

                {/* Contact and Actions Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <div className="text-xs text-slate-600 flex items-center gap-2">
                    <span className="text-slate-400">Coordonnées :</span>
                    {fb.customer_contact ? (
                      <span className="font-semibold text-foreground flex items-center gap-1.5">
                        {isEmail && <Mail className="w-3.5 h-3.5 text-brand" />}
                        {isPhone && <Phone className="w-3.5 h-3.5 text-brand" />}
                        {fb.customer_contact}
                      </span>
                    ) : (
                      <span className="italic text-slate-400">Non communiquées</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {fb.customer_contact && isEmail && (
                      <a
                        href={`mailto:${fb.customer_contact}?subject=Votre visite chez notre établissement&body=Bonjour ${fb.customer_name || ""}, nous vous remercions pour votre retour...`}
                      >
                        <Button variant="outline" size="sm" className="text-xs">
                          <Mail className="w-3 h-3 mr-1" />
                          Écrire
                        </Button>
                      </a>
                    )}

                    <Button
                      variant={fb.status === "new" ? "primary" : "secondary"}
                      size="sm"
                      disabled={loadingId === fb.id}
                      onClick={() => toggleStatus(fb.id, fb.status)}
                      className="text-xs font-bold"
                    >
                      {fb.status === "new" ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1" />
                          Marquer comme traité
                        </>
                      ) : (
                        <>
                          <RotateCcw className="w-3.5 h-3.5 mr-1" />
                          Rouvrir
                        </>
                      )}
                    </Button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
