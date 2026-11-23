"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sanitizeSlug, isValidSlug } from "@/lib/validations/slug";
import { validateGoogleUrl } from "@/lib/validations/google-url";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PreviewMobile } from "./PreviewMobile";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building2,
  Link as LinkIcon,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";

export function OnboardingForm() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("Montréal");
  const [slug, setSlug] = useState("");
  const [isSlugEditedManually, setIsSlugEditedManually] = useState(false);
  const [googleUrl, setGoogleUrl] = useState("");
  const [alertEmail, setAlertEmail] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#00F59B");
  const [language, setLanguage] = useState<"FR" | "EN" | "BOTH">("FR");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedSlug, setCompletedSlug] = useState<string | null>(null);

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setBusinessName(val);
    if (!isSlugEditedManually) {
      setSlug(sanitizeSlug(val));
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSlugEditedManually(true);
    setSlug(sanitizeSlug(e.target.value));
  };

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!businessName.trim() || businessName.trim().length < 2) {
      newErrors.businessName = "Veuillez entrer le nom de votre établissement (au moins 2 caractères).";
    }
    if (!isValidSlug(slug)) {
      newErrors.slug = "Format d'identifiant URL invalide (lettres minuscules, chiffres et tirets uniquement).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!googleUrl.trim() || !validateGoogleUrl(googleUrl.trim())) {
      newErrors.googleUrl =
        "Veuillez entrer une URL d'avis Google Maps valide (g.page, maps.google.com ou search.google.com).";
    }
    if (!alertEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(alertEmail.trim())) {
      newErrors.alertEmail = "Veuillez renseigner un courriel valide pour recevoir les alertes.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((step - 1) as 1 | 2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1() || !validateStep2()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setCompletedSlug(slug);
    } catch {
      setErrors({ form: "Une erreur est survenue lors de la configuration." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (completedSlug) {
    return (
      <div className="max-w-lg mx-auto bg-dark-850 p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 mx-auto rounded-full bg-brand/10 text-brand border border-brand/20 flex items-center justify-center shadow-glow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Félicitations ! Votre REVEQ est actif.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Votre QR Code dynamique et votre assistant IA de réponse sont configurés pour{" "}
            <strong className="text-white">{businessName}</strong>.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-dark-900 border border-white/10 text-left space-y-2">
          <p className="text-[11px] text-slate-400 font-mono uppercase font-bold">Lien dynamique de votre QR Code</p>
          <div className="flex items-center justify-between bg-dark-950 px-3 py-2 rounded-xl border border-white/5 font-mono text-xs text-brand font-bold">
            <span>app.reveq.ca/{completedSlug}</span>
            <Link
              href={`/${completedSlug}`}
              target="_blank"
              className="text-[11px] underline text-slate-400 hover:text-white"
            >
              Tester
            </Link>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <Link href="/dashboard" className="block">
            <Button size="lg" className="w-full font-black shadow-glow">
              Accéder à mon Tableau de Bord REVEQ
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setCompletedSlug(null);
              setStep(1);
            }}
            className="text-xs text-slate-500 hover:text-slate-300 font-mono"
          >
            Configurer un autre établissement
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
      {/* Left Column: Multi-Step Form */}
      <div className="lg:col-span-7 bg-dark-850 p-6 sm:p-9 rounded-3xl border border-white/10 shadow-2xl">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs font-mono transition-colors ${
                  step === s
                    ? "bg-brand text-black shadow-glow-sm"
                    : step > s
                    ? "bg-brand/20 text-brand border border-brand/30"
                    : "bg-dark-900 text-slate-600 border border-white/5"
                }`}
              >
                {step > s ? "✓" : s}
              </div>
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-slate-400">
            Étape {step} sur 3
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* STEP 1 : IDENTITÉ */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-brand" />
                  Identité de votre établissement
                </h2>
                <p className="text-xs text-slate-400">
                  Renseignez le nom de votre commerce tel qu&apos;il apparaît sur votre devanture.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nom de l&apos;établissement
                </label>
                <input
                  type="text"
                  placeholder="ex: Bistro Le Saint-Denis"
                  value={businessName}
                  onChange={handleNameChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark-900 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand"
                  required
                />
                {errors.businessName && (
                  <p className="text-xs text-red-400 font-medium mt-1">{errors.businessName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Ville ou Quartier
                  </label>
                  <input
                    type="text"
                    placeholder="ex: Montréal, QC"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark-900 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Identifiant URL (Slug)
                  </label>
                  <input
                    type="text"
                    placeholder="bistro-saint-denis"
                    value={slug}
                    onChange={handleSlugChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark-900 text-white placeholder:text-slate-600 text-sm font-mono focus:outline-none focus:border-brand"
                    required
                  />
                  {errors.slug && (
                    <p className="text-xs text-red-400 font-medium mt-1">{errors.slug}</p>
                  )}
                </div>
              </div>

              <div className="p-3.5 bg-dark-900 rounded-2xl border border-white/5 text-xs text-slate-400 space-y-1">
                <span className="font-bold text-slate-300 block font-mono text-[11px]">VOTRE LIEN COURT DIRECT SERA :</span>
                <span className="font-mono text-brand font-black block truncate text-sm">
                  https://app.reveq.ca/{slug || "votre-slug"}
                </span>
              </div>
            </div>
          )}

          {/* STEP 2 : GOOGLE REVIEWS & ALERTE */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-brand" />
                  Lien Google Reviews & Alertes
                </h2>
                <p className="text-xs text-slate-400">
                  Où rediriger les 5 étoiles et où recevoir les retours confidentiels.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Lien direct d&apos;avis Google Maps
                </label>
                <input
                  type="url"
                  placeholder="https://g.page/r/CU9rQ4Zexample/review"
                  value={googleUrl}
                  onChange={(e) => setGoogleUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark-900 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand"
                  required
                />
                {errors.googleUrl && (
                  <p className="text-xs text-red-400 font-medium mt-1">{errors.googleUrl}</p>
                )}
                <p className="text-[11px] text-slate-500 mt-1">
                  Ouvrez votre profil d&apos;établissement Google et cliquez sur &ldquo;Demander des avis&rdquo; pour copier le lien court.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Courriel d&apos;alerte instantanée
                </label>
                <input
                  type="email"
                  placeholder="gerant@votre-commerce.ca"
                  value={alertEmail}
                  onChange={(e) => setAlertEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark-900 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand"
                  required
                />
                {errors.alertEmail && (
                  <p className="text-xs text-red-400 font-medium mt-1">{errors.alertEmail}</p>
                )}
                <p className="text-[11px] text-slate-500 mt-1">
                  Vous recevrez immédiatement chaque mécontentement pour y répondre avec l&apos;IA.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Couleur de marque
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-10 h-10 rounded-xl border border-white/10 cursor-pointer p-0.5 bg-dark-900"
                    />
                    <span className="font-mono text-xs text-brand font-black">
                      {primaryColor}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Langue par défaut
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "FR" | "EN" | "BOTH")}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 text-xs font-bold focus:outline-none focus:border-brand bg-dark-900 text-white"
                  >
                    <option value="FR">Français (Loi 96 Québec)</option>
                    <option value="EN">English</option>
                    <option value="BOTH">Bilingue (Détection auto)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 : FORFAIT UNIQUE 79 $ */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand" />
                  Forfait REVEQ Tout Inclus (79 $ / mois)
                </h2>
                <p className="text-xs text-slate-400">
                  Formule complète sans frais d&apos;installation, avec 7 jours d&apos;essai gratuit.
                </p>
              </div>

              {/* Comprehensive Dark Card */}
              <div className="p-6 rounded-3xl border-2 border-brand bg-gradient-to-b from-dark-900 to-dark-950 space-y-4 shadow-glow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-black text-lg text-white">REVEQ Intégral</h3>
                    <p className="text-xs text-slate-400">Tout inclus avec réponses clients par IA illimitées</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-white">79 $</span>
                    <span className="text-xs font-mono text-brand block uppercase font-bold">CAD / mois</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span><strong>Générateur de réponses IA illimité</strong> (4 tonalités prêtes à envoyer)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Filtre d&apos;avis 5★ vers Google Maps & interception privée 1-3★</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Affiches de comptoir PDF demi-lettre et planches d&apos;autocollants HD</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Mode Borne caisse tablette en continu (/kiosk/[slug])</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Alertes courriel instantanées & Bilan mensuel ROI</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-dark-900 border border-white/5 text-xs text-slate-400 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
                  <span>Essai Gratuit 7 Jours Sans Risque</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-400 pl-6 list-disc">
                  <li>0.00 $ prélevé aujourd&apos;hui.</li>
                  <li>Accès immédiat à vos affiches, QR Codes et assistant IA.</li>
                  <li>Annulation en 1 clic sans condition à tout moment.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={prevStep}
                disabled={isSubmitting}
                className="text-xs font-mono"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Précédent
              </Button>
            ) : (
              <Link href="/">
                <Button type="button" variant="ghost" size="md" className="text-xs font-mono">
                  Annuler
                </Button>
              </Link>
            )}

            {step < 3 ? (
              <Button type="button" size="md" onClick={nextStep} className="font-black text-xs">
                Étape suivante
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                type="submit"
                size="md"
                disabled={isSubmitting}
                className="font-black shadow-glow text-xs"
              >
                {isSubmitting ? "Activation..." : "Démarrer mes 7 jours gratuits (79 $ / mois)"}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>

        </form>
      </div>

      {/* Right Column: Live Mobile Preview */}
      <div className="lg:col-span-5 sticky top-24 hidden sm:flex flex-col items-center justify-center">
        <PreviewMobile
          businessName={businessName}
          slug={slug}
          primaryColor={primaryColor}
          language={language}
        />
      </div>
    </div>
  );
}
