export type ResponseTone = "chaleureux" | "professionnel" | "rabais" | "explicatif";

export interface GenerateResponseOptions {
  customerName?: string | null;
  businessName: string;
  rating: number;
  message: string;
  tone: ResponseTone;
}

export interface ToneDefinition {
  id: ResponseTone;
  label: string;
  emoji: string;
  description: string;
}

export const RESPONSE_TONES: ToneDefinition[] = [
  {
    id: "chaleureux",
    label: "Chaleureux & Humain",
    emoji: "🤝",
    description: "Ton bienveillant, humble et axé sur l'écoute active.",
  },
  {
    id: "professionnel",
    label: "Professionnel & Formel",
    emoji: "👔",
    description: "Ton courtois, sobre et institutionnel.",
  },
  {
    id: "rabais",
    label: "Geste Commercial",
    emoji: "🎁",
    description: "Invitation personnalisée avec boisson ou rabais offert.",
  },
  {
    id: "explicatif",
    label: "Explicatif & Rassurance",
    emoji: "💡",
    description: "Contextualise la situation sans chercher d'excuses.",
  },
];

/**
 * Moteur d'IA REVEQ de génération de réponses personnalisées aux clients.
 * Génère instantanément une réponse humaine, diplomatique et adaptée au ton choisi.
 */
export function generateCustomerResponse(options: GenerateResponseOptions): string {
  const { customerName, businessName, rating, message, tone } = options;
  const greeting = customerName?.trim() ? `Bonjour ${customerName.trim()},` : "Bonjour,";
  const signature = `Bien cordialement,\nL'équipe de ${businessName}`;

  // Analyse succincte du contenu pour adapter la réponse
  const lowerMsg = message.toLowerCase();
  const isTimeIssue = lowerMsg.includes("attente") || lowerMsg.includes("temps") || lowerMsg.includes("lent") || lowerMsg.includes("retard");
  const isProductIssue = lowerMsg.includes("froid") || lowerMsg.includes("tiède") || lowerMsg.includes("croissant") || lowerMsg.includes("plat") || lowerMsg.includes("café") || lowerMsg.includes("nourriture");
  const isServiceIssue = lowerMsg.includes("service") || lowerMsg.includes("accueil") || lowerMsg.includes("impoli") || lowerMsg.includes("personnel");

  let specificApology = "votre expérience n'a pas été à la hauteur de vos attentes habituelles";
  if (isTimeIssue) {
    specificApology = "le temps d'attente lors de votre visite a été plus long que nos standards habituels";
  } else if (isProductIssue) {
    specificApology = "la qualité de ce qui vous a été servi n'était pas irréprochable";
  } else if (isServiceIssue) {
    specificApology = "l'accueil que vous avez reçu n'a pas reflété la chaleur et l'attention qui nous tiennent à cœur";
  }

  switch (tone) {
    case "chaleureux":
      return `${greeting}

Je tiens personnellement à vous remercier d'avoir pris le temps de nous partager votre retour en toute franchise.

Nous sommes sincèrement désolés d'apprendre que ${specificApology}. Vos remarques ont déjà été partagées directement avec toute notre équipe pour que nous puissions ajuster le tir immédiatement.

Votre fidélité et votre satisfaction sont ce qui compte le plus pour nous chez ${businessName}. Si vous avez quelques minutes pour échanger ou si vous repassez nous voir, venez nous faire signe : nous serions ravis de vous saluer en personne et de vous offrir une bien meilleure expérience !

Merci encore pour votre confiance,
${signature}`;

    case "professionnel":
      return `${greeting}

Nous accusons bonne réception de votre message suite à votre récente visite au sein de notre établissement.

La qualité de nos prestations et la satisfaction de notre clientèle constituent notre priorité absolue. Nous regrettons vivement que ${specificApology}. Soyez assuré(e) que votre signalement a été transmis à la direction opérationnelle afin d'assurer un suivi rigoureux.

Nous restons à votre entière disposition pour tout échange complémentaire et espérons avoir l'opportunité de vous accueillir à nouveau dans des conditions optimales.

${signature}`;

    case "rabais":
      return `${greeting}

Merci beaucoup d'avoir pris la peine de nous faire part de votre avis.

Nous sommes vraiment navrés que ${specificApology}. Chez ${businessName}, nous mettons un point d'honneur à ce que chaque client quitte les lieux avec le sourire.

Pour nous faire pardonner et vous prouver notre engagement, nous serions honorés de vous offrir votre consommation (ou un rabais de 20 %) lors de votre prochain passage. Il vous suffira de présenter ce message au gérant ou à la caisse.

Au grand plaisir de vous recevoir à nouveau très bientôt,
${signature}`;

    case "explicatif":
      return `${greeting}

Merci pour votre retour constructif que nous lisons avec une attention particulière.

Nous comprenons parfaitement votre déception concernant le fait que ${specificApology}. Lors des heures de forte affluence, nos équipes ont dû faire face à un volume inhabituel, mais cela ne justifie en rien que votre confort en ait pâti.

Nous avons immédiatement renforcé nos procédures de service pour éviter que cette situation ne se reproduise. Nous serions ravis de vous accueillir à nouveau pour vous faire vivre l'expérience authentique que nos clients apprécient chez ${businessName}.

Très bonne journée à vous,
${signature}`;
  }
}
