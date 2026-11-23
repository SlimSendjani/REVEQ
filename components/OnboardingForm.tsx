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
  const [primaryColor, setPrimaryColor] = useState("#059669");
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
      // Simulation / enregistrement local
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
      <div className="max-w-lg mx-auto bg-white p-8 rounded-3xl border border-border shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-black text-foreground">
            Félicitations ! Votre REVEQ est prêt.
          </h2>
          <p className="text-sm text-slate-600">
            Votre QR Code dynamique et vos outils de réponse par IA sont configurés pour{" "}
            <strong>{businessName}</strong>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2">
          <p className="text-xs text-slate-500 font-semibold uppercase">Lien dynamique de votre QR Code</p>
          <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border font-mono text-xs text-brand font-bold">
            <span>app.reveq.ca/{completedSlug}</span>
            <Link
              href={`/${completedSlug}`}
              target="_blank"
              className="text-[11px] underline text-slate-600 hover:text-foreground"
            >
              Tester
            </Link>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <Link href="/dashboard" className="block">
            <Button size="lg" className="w-full font-bold bg-brand hover:bg-brand-hover text-white">
              Accéder à mon Tableau de Bord
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
            className="text-xs text-slate-400"
          >
            Créer un autre commerce
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
      {/* Left Column: Multi-Step Form */}
      <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-sm">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                  step === s
                    ? "bg-brand text-white shadow-xs"
                    : step > s
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {step > s ? "✓" : s}
              </div>
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Étape {step} sur 3
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* STEP 1 : IDENTITÉ */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-brand" />
                  Identité de votre établissement
                </h2>
                <p className="text-xs text-slate-500">
                  Renseignez le nom de votre établissement tel qu&apos;il apparaît sur votre devanture.
                </p>
              </div>

              <Input
                label="Nom de l'établissement"
                placeholder="ex: Café Le Petit Saint-Denis"
                value={businessName}
                onChange={handleNameChange}
                error={errors.businessName}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Ville ou Quartier"
                  placeholder="ex: Montréal, QC"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <Input
                  label="Identifiant URL (Slug)"
                  placeholder="cafe-petit-saint-denis"
                  value={slug}
                  onChange={handleSlugChange}
                  error={errors.slug}
                  helperText="Utilisé pour générer l'adresse de votre QR Code."
                  required
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-semibold block text-slate-700">Votre lien direct sera :</span>
                <span className="font-mono text-brand font-bold block truncate">
                  https://app.reveq.ca/{slug || "votre-slug"}
                </span>
              </div>
            </div>
          )}

          {/* STEP 2 : GOOGLE REVIEWS & EMAIL */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-brand" />
                  Lien Google Reviews & Alertes
                </h2>
                <p className="text-xs text-slate-500">
                  Où rediriger vos clients satisfaits et où envoyer les retours privés.
                </p>
              </div>

              <Input
                label="Lien direct d'avis Google Maps"
                placeholder="https://g.page/r/CU9rQ4Zexample/review"
                value={googleUrl}
                onChange={(e) => setGoogleUrl(e.target.value)}
                error={errors.googleUrl}
                helperText="Ouvrez votre profil Google Business et cliquez sur 'Demander des avis' pour copier le lien court."
                required
              />

              <Input
                type="email"
                label="Courriel de réception des alertes d'urgence"
                placeholder="direction@votre-commerce.ca"
                value={alertEmail}
                onChange={(e) => setAlertEmail(e.target.value)}
                error={errors.alertEmail}
                helperText="Vous recevrez immédiatement une notification confidentielle en cas de retour 1-3 étoiles."
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Couleur de marque
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-10 h-10 rounded-lg border border-border cursor-pointer p-0.5"
                    />
                    <span className="font-mono text-xs text-slate-600 font-medium">
                      {primaryColor}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Langue par défaut
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "FR" | "EN" | "BOTH")}
                    className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 bg-white"
                  >
                    <option value="FR">Français (Loi 96 Québec)</option>
                    <option value="EN">English</option>
                    <option value="BOTH">Bilingue (Détection auto)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 : FORFAIT UNIQUE 79 $ & CONFIRMATION */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand" />
                  Forfait REVEQ Tout Inclus (79 $ / mois)
                </h2>
                <p className="text-xs text-slate-500">
                  Une formule unique et complète sans frais caché, avec 7 jours d&apos;essai gratuit.
                </p>
              </div>

              {/* Single Comprehensive Plan Card */}
              <div className="p-5 rounded-2xl border-2 border-brand bg-emerald-50/30 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                  <div>
                    <h3 className="font-black text-lg text-foreground">Abonnement REVEQ Intégral</h3>
                    <p className="text-xs text-slate-500">Tout compris avec réponses clients par IA illimitées</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-foreground">79 $</span>
                    <span className="text-xs text-slate-500 block">CAD / mois</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span><strong>Générateur de réponses clients par IA inclus</strong> (4 tonalités)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Filtre d&apos;avis Google 5★ & interception privée 1-3★</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Générateur PDF d&apos;affiches comptoir et autocollants vectoriels HD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Mode Borne caisse tablette (/kiosk/[slug])</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Alertes courriel instantanées & Bilan mensuel ROI</span>
                  </li>
                </ul>
              </div>

              {/* Summary guarantees */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Essai Gratuit de 7 Jours Sans Risque</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-600 pl-6 list-disc">
                  <li>Aucun prélèvement aujourd&apos;hui (0.00 $ CAD).</li>
                  <li>Accès immédiat à votre lien QR Code, affiches et assistant IA.</li>
                  <li>Annulation en 1 clic sans condition depuis votre espace client.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Form Actions (Buttons) */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={prevStep}
                disabled={isSubmitting}
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Précédent
              </Button>
            ) : (
              <Link href="/">
                <Button type="button" variant="ghost" size="md">
                  Annuler
                </Button>
              </Link>
            )}

            {step < 3 ? (
              <Button type="button" size="md" onClick={nextStep} className="font-bold bg-brand hover:bg-brand-hover text-white">
                Étape suivante
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                type="submit"
                size="md"
                disabled={isSubmitting}
                className="font-bold shadow-md bg-brand hover:bg-brand-hover text-white"
              >
                {isSubmitting ? "Activation en cours..." : "Démarrer mes 7 jours gratuits (79 $ / mois)"}
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
