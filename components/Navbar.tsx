"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  return (
    <header className="w-full bg-transparent pt-3 pb-2 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Left: REVEQ + FR/EN + Fait au Québec ✦ */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex items-center">
            <span className="font-black text-2xl tracking-tight text-slate-900">
              REVEQ
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="text-xs font-semibold text-slate-600 hover:text-black transition-colors px-1 py-0.5"
            title="Changer de langue / Change language"
          >
            {lang === "FR" ? "FR/EN" : "EN/FR"}
          </button>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/90 text-xs font-medium text-slate-700">
            <span>Fait au Québec</span>
            <span className="text-[#faa71d] font-bold text-xs">✦</span>
          </div>
        </div>

        {/* Right: Navigation Links + Connexion + CTA Button */}
        <div className="flex items-center gap-5 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#fonctionnalites" className="inline-flex items-center gap-1 hover:text-black transition-colors">
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
            <button className="bg-[#0e636a] hover:bg-[#0b5258] text-white text-sm font-semibold px-4.5 py-2 rounded-lg transition-all shadow-xs">
              Essai gratuit
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
}

