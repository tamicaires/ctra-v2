import type { Metadata } from "next";
import { Staatliches, Rajdhani, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth/AuthContext";

// IMPACTO 6: German Power
const staatliches = Staatliches({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Centro de Treinamento de Artes Marciais | Transforme Sua Vida",
  description: "Domine Seu Corpo. Fortaleça Sua Mente. Mude Sua Vida. Treinamento de elite em Muay Thai, Jiu-Jitsu, Boxe e MMA. Do iniciante ao competidor profissional.",
  keywords: ["artes marciais", "muay thai", "jiu-jitsu", "boxe", "mma", "academia", "treino"],
  authors: [{ name: "CTRA" }],
  openGraph: {
    title: "Centro de Treinamento de Artes Marciais",
    description: "Transforme seu corpo, fortaleça sua mente. Agende sua aula grátis!",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${staatliches.variable} ${rajdhani.variable} ${sourceSerif.variable}`}>
      <body className="bg-black text-white font-sans antialiased min-h-screen">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
