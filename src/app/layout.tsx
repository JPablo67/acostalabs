import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acostalabs.com"),
  title: {
    default: "Juan Pablo Acosta | Full-Stack Software Engineer — Acosta Labs",
    template: "%s | Acosta Labs",
  },
  description:
    "Full-Stack Engineer with 4+ years building scalable platforms. Drove 300%+ sales growth, 5x user scaling & 99.9% uptime. Expert in React, Java, AI integration. Available for hire.",
  keywords: [
    "full stack developer",
    "software engineer",
    "freelance developer",
    "react developer",
    "java developer",
    "AI integration",
    "e-commerce developer",
    "web development",
    "hire developer",
  ],
  authors: [{ name: "Juan Pablo Acosta" }],
  creator: "Juan Pablo Acosta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acostalabs.com",
    siteName: "Acosta Labs",
    title: "Juan Pablo Acosta | Full-Stack Software Engineer",
    description:
      "Full-Stack Engineer with 4+ years building scalable platforms. Drove 300%+ sales growth, 5x user scaling & 99.9% uptime. Expert in React, Java, AI integration.",
    images: [{ url: "/logo-full.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Pablo Acosta | Full-Stack Software Engineer",
    description:
      "Full-Stack Engineer with 4+ years building scalable platforms. 300%+ sales growth · 5x user scaling · 99.9% uptime · 95+ Lighthouse.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
