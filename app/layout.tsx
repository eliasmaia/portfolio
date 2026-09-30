import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Elias Maia | Engenheiro de Software & Desenvolvedor Web",
    template: "%s | Elias Maia",
  },
  description:
    "Portfólio profissional de Elias Maia, Engenheiro de Software especializado em desenvolvimento web moderno, arquitetura de software e automação de processos.",
  keywords: [
    "Engenheiro de Software",
    "Desenvolvedor Web",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Go",
    "Tailwind CSS",
    "Automação",
  ],
  authors: [{ name: "Elias Maia", url: "https://github.com/eliasmaia" }],
  creator: "Elias Maia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://seu-dominio.vercel.app", // Altere quando fizer o deploy
    title: "Elias Maia | Engenheiro de Software",
    description:
      "Mais de 6 anos transformando código em soluções de alto impacto. Veja meus projetos e entre em contato.",
    siteName: "Elias Maia Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}