import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kit Réputation Google | SaaS Commerces Locaux Québec",
  description: "Transformez vos clients satisfaits en avis 5 étoiles sur Google Maps tout en interceptant les insatisfactions en privé.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-CA">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-brand-light selection:text-brand">
        {children}
      </body>
    </html>
  );
}
