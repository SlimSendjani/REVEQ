"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  return (
    <header className="border-b border-border bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-brand flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-foreground">
                Kit Réputation <span className="text-brand font-bold">Google</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                QC · Loi 96
              </span>
            </div>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#simulateur" className="hover:text-foreground transition-colors">
            Simulateur
          </a>
          <a href="#fonctionnalites" className="hover:text-foreground transition-colors">
            Comment ça marche
          </a>
          <a href="#tarifs" className="hover:text-foreground transition-colors">
            Tarifs
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ & Loi 96
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="flex items-center gap-1 text-xs font-semibold px-2 py-1.5 rounded-lg border border-border text-slate-600 hover:text-foreground hover:bg-slate-50 transition"
            title="Bascule linguistique Loi 96"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span>{lang}</span>
          </button>

          <Link href="/onboarding">
            <Button size="sm" className="font-semibold shadow-xs">
              Créer mon Kit
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
