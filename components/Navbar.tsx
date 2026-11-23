"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe } from "lucide-react";

export function Navbar() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  return (
    <header className="border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all font-sans">
      <div className="max-w-6xl mx-auto px-4 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Left: Brand Logo + FR/EN + Fait au Québec */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-extrabold text-2xl tracking-tighter text-black">
              REV<span className="text-[#0e7470]">EQ</span>
            </span>
          </Link>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="text-xs font-bold text-slate-600 hover:text-black transition-colors px-1.5 py-1 rounded"
            title="Changer de langue / Change language"
          >
            {lang === "FR" ? "FR/EN" : "EN/FR"}
          </button>

          {/* Fait au Québec Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-medium text-slate-700 shadow-2xs">
            <span>Fait au Québec</span>
            <span className="text-amber-500 text-xs">✨</span>
          </div>
        </div>

        {/* Right: Navigation Links + Connexion + CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#fonctionnalites" className="flex items-center gap-1 hover:text-black transition-colors">
              <span>Fonctionnalités</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a href="#tarifs" className="hover:text-black transition-colors">
              Tarifs
            </a>
            <Link href="/login" className="hover:text-black transition-colors">
              Connexion
            </Link>
          </nav>

          <Link href="/onboarding">
            <button className="bg-[#0e7470] hover:bg-[#0c625f] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all shadow-sm hover:shadow hover:-translate-y-0.5">
              Essai gratuit
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
}
