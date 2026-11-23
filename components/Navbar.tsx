"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  return (
    <header className="border-b border-border/80 bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand REVEQ */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-brand-dark to-brand flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="flex items-center gap-2">
            <span className="font-black text-xl tracking-tighter text-foreground">
              REV<span className="text-brand">EQ</span>
            </span>
            <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              QC · 79 $
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#simulateur" className="hover:text-foreground transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            <span>Simulateur & IA</span>
          </a>
          <a href="#fonctionnalites" className="hover:text-foreground transition-colors">
            Comment ça marche
          </a>
          <a href="#tarifs" className="hover:text-foreground transition-colors">
            Forfait Unique (79 $)
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            Conformité & FAQ
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="flex items-center gap-1 text-xs font-bold px-2 py-1.5 rounded-lg border border-border text-slate-600 hover:text-foreground hover:bg-slate-50 transition"
            title="Bascule linguistique Loi 96"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span>{lang}</span>
          </button>

          <Link href="/onboarding">
            <Button size="sm" className="font-bold shadow-sm bg-brand hover:bg-brand-hover text-white">
              Créer mon REVEQ
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
