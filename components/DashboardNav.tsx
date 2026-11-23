"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Printer,
  MessageSquareWarning,
  Settings,
  ExternalLink,
  Tablet,
  Store,
} from "lucide-react";

interface DashboardNavProps {
  businessName: string;
  slug: string;
}

export function DashboardNav({ businessName, slug }: DashboardNavProps) {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Vue d'ensemble",
      href: "/dashboard",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: "Kit d'impression PDF",
      href: "/dashboard/kit",
      icon: Printer,
      exact: false,
    },
    {
      name: "Retours privés",
      href: "/dashboard/feedbacks",
      icon: MessageSquareWarning,
      exact: false,
    },
    {
      name: "Paramètres",
      href: "/dashboard/settings",
      icon: Settings,
      exact: false,
    },
  ];

  return (
    <>
      {/* Top Navbar */}
      <header className="h-16 border-b border-border bg-white sticky top-0 z-30 px-4 sm:px-8 flex items-center justify-between">
        {/* Brand / Business selector */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold text-sm shadow-sm">
              K
            </div>
            <span className="font-extrabold text-base tracking-tight text-foreground hidden sm:inline">
              Kit Réputation <span className="text-brand font-semibold">Google</span>
            </span>
          </Link>

          <span className="text-slate-300 hidden sm:inline">/</span>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
            <Store className="w-3.5 h-3.5 text-brand" />
            <span className="truncate max-w-[140px] sm:max-w-[200px]">{businessName}</span>
          </div>
        </div>

        {/* Quick View Links */}
        <div className="flex items-center gap-2">
          <Link
            href={`/kiosk/${slug}`}
            target="_blank"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold text-slate-700 hover:text-foreground hover:bg-slate-50 transition"
          >
            <Tablet className="w-3.5 h-3.5 text-brand" />
            <span>Mode Borne Caisse</span>
          </Link>

          <Link
            href={`/${slug}`}
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand text-white text-xs font-bold hover:bg-brand-hover transition shadow-xs"
          >
            <span>Page Client</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </header>

      {/* Sub-nav for mobile */}
      <div className="md:hidden border-b border-border bg-white px-2 flex overflow-x-auto gap-1 py-1 text-xs">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg whitespace-nowrap font-medium transition ${
                isActive
                  ? "bg-brand text-white font-bold"
                  : "text-slate-600 hover:text-foreground hover:bg-slate-100"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Vue d'ensemble",
      href: "/dashboard",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: "Kit d'impression PDF",
      href: "/dashboard/kit",
      icon: Printer,
      exact: false,
    },
    {
      name: "Retours privés",
      href: "/dashboard/feedbacks",
      icon: MessageSquareWarning,
      exact: false,
    },
    {
      name: "Paramètres",
      href: "/dashboard/settings",
      icon: Settings,
      exact: false,
    },
  ];

  return (
    <aside className="w-64 border-r border-border bg-white p-4 hidden md:flex flex-col justify-between shrink-0 min-h-[calc(100vh-4rem)]">
      <div className="space-y-1">
        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-2">
          Gestion & Supports
        </p>
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                isActive
                  ? "bg-brand text-white shadow-xs"
                  : "text-slate-600 hover:text-foreground hover:bg-slate-50"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Plan status card */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
        <div className="flex items-center justify-between font-bold">
          <span className="text-foreground">Forfait Solo</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px]">
            Actif
          </span>
        </div>
        <p className="text-[11px] text-slate-500">
          Prochaine synchronisation mensuelle le 1er du mois.
        </p>
      </div>
    </aside>
  );
}
