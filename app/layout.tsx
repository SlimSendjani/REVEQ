import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
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
    <html lang="fr-CA" className={plusJakartaSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.className} min-h-screen bg-[#f4f7fc] text-slate-900 antialiased selection:bg-[#0e636a]/20 selection:text-[#0e636a]`}>
        {children}
      </body>
    </html>
  );
}
