import type { Metadata } from "next";
import "./globals.css";
import GlobalAudio from "@/components/GlobalAudio";

export const metadata: Metadata = {
  title: "Pour Toi | Saint-Valentin",
  description: "Un cadeau spécial pour la personne que j'aime",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <GlobalAudio />
        {children}
      </body>
    </html>
  );
}