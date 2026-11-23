"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, Mail, Lock, Sparkles, ArrowRight, CheckCircle2, AlertCircle, Globe } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { getDictionary, type SupportedLocale } from "@/lib/i18n";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirect") || "/dashboard";

  const [locale, setLocale] = useState<SupportedLocale>("fr");
  const dict = getDictionary(locale);

  const [mode, setMode] = useState<"password" | "magicLink">("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  const supabase = createClient();

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message || dict.auth.authError);
        setLoading(false);
        return;
      }

      if (data?.user) {
        router.push(redirectTo);
        router.refresh();
      }
    } catch (err: any) {
      setErrorMsg(err?.message || dict.auth.authError);
      setLoading(false);
    }
  };

  const handleMagicLinkLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirectTo)}`,
        },
      });

      if (error) {
        setErrorMsg(error.message || dict.auth.authError);
        setLoading(false);
        return;
      }

      setMagicLinkSent(true);
      setLoading(false);
    } catch (err: any) {
      setErrorMsg(err?.message || dict.auth.authError);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between text-neutral-900 font-sans">
      {/* Top Navbar */}
      <header className="w-full bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-black text-sm tracking-tighter">
            R
          </div>
          <span className="font-extrabold text-xl tracking-tight text-black">
            REV<span className="text-[#0e7470]">EQ</span>
          </span>
          <span className="text-xs bg-[#0e7470]/10 text-[#0e7470] font-semibold px-2 py-0.5 rounded-full ml-1">
            QC
          </span>
        </Link>

        {/* Language selector */}
        <button
          onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-neutral-200 hover:bg-neutral-100 transition-colors text-neutral-700"
          title="Changer de langue / Change language"
        >
          <Globe className="w-3.5 h-3.5 text-[#0e7470]" />
          <span>{locale === "fr" ? "EN" : "FR"}</span>
        </button>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-8">
        <div className="w-full max-w-md bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0e7470]/10 text-[#0e7470] mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-black">
              {dict.auth.loginTitle}
            </h1>
            <p className="text-sm text-neutral-500 mt-2">
              {dict.auth.loginSubtitle}
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-neutral-100 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => {
                setMode("password");
                setErrorMsg(null);
                setMagicLinkSent(false);
              }}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === "password"
                  ? "bg-white text-black shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {dict.auth.passwordTab}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("magicLink");
                setErrorMsg(null);
              }}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === "magicLink"
                  ? "bg-white text-black shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {dict.auth.magicLinkTab}
            </button>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Magic Link Confirmation State */}
          {magicLinkSent ? (
            <div className="p-6 rounded-xl bg-[#0e7470]/5 border border-[#0e7470]/20 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#0e7470]/10 text-[#0e7470] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900">
                {dict.auth.magicLinkSent}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {dict.auth.magicLinkSentDesc}
              </p>
              <button
                type="button"
                onClick={() => setMagicLinkSent(false)}
                className="text-xs text-[#0e7470] hover:underline font-semibold pt-2 block mx-auto"
              >
                ← Utiliser une autre méthode
              </button>
            </div>
          ) : mode === "password" ? (
            /* Password Form */
            <form onSubmit={handlePasswordLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  {dict.auth.emailLabel}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dict.auth.emailPlaceholder}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#0e7470] focus:ring-2 focus:ring-[#0e7470]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium text-neutral-700">
                    {dict.auth.passwordLabel}
                  </label>
                  <button
                    type="button"
                    onClick={() => setMode("magicLink")}
                    className="text-xs text-[#0e7470] hover:underline"
                  >
                    {dict.auth.forgotPassword}
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={dict.auth.passwordPlaceholder}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#0e7470] focus:ring-2 focus:ring-[#0e7470]/20 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 px-4 bg-black hover:bg-neutral-800 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{dict.auth.loginWithPassword}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Magic Link Form */
            <form onSubmit={handleMagicLinkLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  {dict.auth.emailLabel}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dict.auth.emailPlaceholder}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#0e7470] focus:ring-2 focus:ring-[#0e7470]/20 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 px-4 bg-[#0e7470] hover:bg-[#0c625f] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>{dict.auth.loginWithMagicLink}</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Footer Link */}
          <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
            <p className="text-xs text-neutral-500">
              {dict.auth.noAccount}{" "}
              <Link
                href={`/signup${redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`}
                className="font-semibold text-[#0e7470] hover:underline"
              >
                {dict.auth.signupLink}
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-4 text-xs text-neutral-400 border-t border-neutral-200">
        <div className="flex items-center justify-center gap-4">
          <Link href="/terms" className="hover:text-neutral-600 transition-colors">
            {dict.legal.terms}
          </Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-neutral-600 transition-colors">
            {dict.legal.privacy}
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-50 flex items-center justify-center text-xs text-neutral-400">Chargement...</div>}>
      <LoginForm />
    </Suspense>
  );
}
