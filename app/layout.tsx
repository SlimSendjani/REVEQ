import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REVEQ | Kit Réputation Google · SaaS Commerces Locaux Québec",
  description: "La solution simple pour transformer vos clients satisfaits en avis 5★ sur Google Maps et recevoir les critiques en privé.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-CA" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-[#f4f7fc] text-slate-900 antialiased selection:bg-[#0e636a]/20 selection:text-[#0e636a]`}>
        {children}
      </body>
    </html>
  );
}

