"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  return (
    <header className="border-b border-white/10 bg-dark-950/90 backdrop-blur-xl sticky top-0 z-50 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between">
        
        {/* Brand REVEQ */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand via-brand-dark to-dark-900 p-0.5 shadow-glow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
              <span className="font-black text-brand text-base tracking-tighter">R</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-black text-xl tracking-tight text-white">
              REV<span className="text-brand">EQ</span>
            </span>
            <span className="text-[10px] uppercase font-mono font-extrabold tracking-widest px-2 py-0.5 rounded-full bg-brand/10 text-brand border border-brand/20">
              79 $ / MOIS
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-bold text-slate-400">
          <a href="#simulateur" className="hover:text-white transition-colors">
            Simulateur & IA
          </a>
          <a href="#probleme" className="hover:text-white transition-colors">
            Le vrai coût d&apos;un avis
          </a>
          <a href="#comment-ca-marche" className="hover:text-white transition-colors">
            Fonctionnement
          </a>
          <a href="#tarifs" className="hover:text-white transition-colors">
            Forfait 79 $
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-dark-800 transition"
            title="Loi 96 Québec"
          >
            <Globe className="w-3.5 h-3.5 text-brand" />
            <span>{lang}</span>
          </button>

          <Link href="/onboarding">
            <Button size="sm" className="font-black text-xs">
              <span>Essai gratuit 7 jours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}
