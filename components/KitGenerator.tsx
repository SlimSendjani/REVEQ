"use client";

import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import type { Business } from "@/types/domain";
import { Printer, Copy, Check, Download, QrCode, Star, ArrowRight, Tablet } from "lucide-react";
import { Button } from "./ui/button";

interface KitGeneratorProps {
  business: Business;
}

export function KitGenerator({ business }: KitGeneratorProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [activeTemplate, setActiveTemplate] = useState<"counter" | "stickers">("counter");
  const [copied, setCopied] = useState(false);

  const publicUrl = `https://app.reveq.ca/${business.slug}`;

  // Génération 100% côté client du QR Code haute résolution (0$ processeur serveur)
  useEffect(() => {
    QRCode.toDataURL(publicUrl, {
      width: 600,
      margin: 1,
      color: {
        dark: "#0F172A",
        light: "#FFFFFF",
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error("Erreur génération QR Code:", err));
  }, [publicUrl]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = `qrcode-${business.slug}.png`;
    a.click();
  };

  return (
    <div className="space-y-8">
      
      {/* Top Banner & Quick Controls */}
      <div className="bg-white p-6 rounded-3xl border border-border shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 print:hidden">
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-foreground">
            Lien Dynamique & QR Code de {business.name}
          </h2>
          <p className="text-xs text-slate-500">
            Chaque scan est automatiquement filtré par votre compte selon la note client.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-brand font-bold border border-slate-200 truncate max-w-xs">
              {publicUrl}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="text-xs font-semibold"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                  Copié !
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1" />
                  Copier
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadQr}
            className="text-xs font-bold"
          >
            <Download className="w-3.5 h-3.5 mr-1" />
            Télécharger QR HD
          </Button>

          <Button
            size="md"
            onClick={handlePrint}
            className="font-bold shadow-md bg-brand hover:bg-brand-hover text-white"
          >
            <Printer className="w-4 h-4 mr-1.5" />
            Imprimer / Exporter en PDF
          </Button>
        </div>
      </div>

      {/* Template Selector Tabs */}
      <div className="flex items-center justify-center gap-3 print:hidden">
        <button
          type="button"
          onClick={() => setActiveTemplate("counter")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTemplate === "counter"
              ? "bg-brand text-white shadow-xs"
              : "bg-white text-slate-600 border border-border hover:bg-slate-50"
          }`}
        >
          📄 Affiche de Comptoir Demi-Lettre (5.5&quot; x 8.5&quot;)
        </button>

        <button
          type="button"
          onClick={() => setActiveTemplate("stickers")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTemplate === "stickers"
              ? "bg-brand text-white shadow-xs"
              : "bg-white text-slate-600 border border-border hover:bg-slate-50"
          }`}
        >
          🏷️ Planche de 6 Autocollants / Cartes de Table
        </button>
      </div>

      {/* PRINTABLE CONTAINER (OPTIMIZED FOR PHYSICAL DISPLAY AND PRINT) */}
      <div className="flex justify-center">
        
        {/* TEMPLATE 1 : AFFICHE DE COMPTOIR DEMI-LETTRE (HALF-LETTER 5.5" x 8.5") */}
        {activeTemplate === "counter" && (
          <div
            id="printable-counter-sign"
            className="w-[420px] min-h-[600px] bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-2xl flex flex-col justify-between text-center select-none print:w-full print:h-full print:border-none print:shadow-none print:p-6"
          >
            {/* Business Brand Header */}
            <div>
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-md border-2 border-white"
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
              <h1 className="mt-3 text-2xl font-black text-foreground tracking-tight">
                {business.name}
              </h1>
              <div className="flex items-center justify-center gap-1 text-star mt-1 text-sm">
                ★★★★★
              </div>
            </div>

            {/* Core Message */}
            <div className="my-4 space-y-1">
              <h2 className="text-xl font-extrabold text-foreground leading-snug">
                Votre avis compte pour nous !
              </h2>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Partagez votre expérience en 5 secondes avec l&apos;appareil photo de votre téléphone
              </p>
            </div>

            {/* High Definition QR Code */}
            <div className="w-56 h-56 mx-auto bg-white p-3 rounded-2xl border-2 border-slate-900 shadow-inner flex items-center justify-center">
              {qrDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={qrDataUrl}
                  alt={`QR Code ${business.name}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-xs text-slate-400">Génération du QR Code...</div>
              )}
            </div>

            {/* Instructions */}
            <div className="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-xs space-y-1">
              <p className="font-semibold text-slate-800">
                1. Ouvrez l&apos;appareil photo · 2. Scannez le code QR · 3. Laissez votre note
              </p>
              <p className="text-[10px] text-slate-400">
                {publicUrl}
              </p>
            </div>

            {/* Quebec Law 96 Compliance Footer */}
            <div className="pt-2 text-[9px] text-slate-400">
              Conçu pour les commerces locaux du Québec · Conforme Loi 96
            </div>
          </div>
        )}

        {/* TEMPLATE 2 : PLANCHE DE 6 AUTOCOLLANTS / CARTES DE TABLE */}
        {activeTemplate === "stickers" && (
          <div
            id="printable-stickers"
            className="w-full max-w-3xl bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-2xl grid grid-cols-2 md:grid-cols-3 gap-4 text-center print:w-full print:grid-cols-2 print:border-none print:shadow-none"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="p-4 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col justify-between items-center bg-slate-50/50"
              >
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-6 h-6 rounded-lg text-white font-bold text-xs flex items-center justify-center"
                    style={{ backgroundColor: business.primary_color || "#0E7470" }}
                  >
                    {business.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-bold text-foreground truncate max-w-[120px]">
                    {business.name}
                  </span>
                </div>

                <div className="my-2 w-28 h-28 bg-white p-1.5 rounded-xl border border-slate-800 flex items-center justify-center">
                  {qrDataUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={qrDataUrl}
                      alt="QR Code"
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                <div className="text-[10px] font-semibold text-slate-700 leading-tight">
                  <p>Votre avis compte !</p>
                  <p className="text-star text-[9px]">★★★★★</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
