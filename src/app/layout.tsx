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
    "Full-Stack Software Engineer with 4+ years building scalable platforms. Drove 300%+ sales growth, 5x user scaling & 99.9% uptime. Expert in React, Java, AI integration. Available for hire.",

  keywords: [
    // Role-based (recruiter searches)
    "full stack software engineer",
    "full stack developer for hire",
    "freelance software engineer",
    "React developer",
    "Java developer",
    "Next.js developer",
    "TypeScript developer",
    // Specialization
    "AI integration developer",
    "e-commerce developer",
    "Shopify developer",
    "cloud native developer",
    "DevOps engineer",
    // Location
    "software engineer Colombia",
    "remote software engineer",
    "bilingual software engineer",
    // Portfolio
    "software engineer portfolio",
    "full stack portfolio 2025",
    "hire software engineer",
    // Tech stack
    "React Java developer",
    "Spring Boot developer",
    "Node.js developer",
    "Python developer",
    "AWS developer",
    "Docker Kubernetes",
  ],

  authors: [{ name: "Juan Pablo Acosta", url: "https://acostalabs.com" }],
  creator: "Juan Pablo Acosta",
  publisher: "Acosta Labs",

  // Canonical URL
  alternates: {
    canonical: "https://acostalabs.com",
  },

  // Open Graph
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://acostalabs.com",
    siteName: "Acosta Labs",
    title: "Juan Pablo Acosta | Full-Stack Software Engineer",
    description:
      "Full-Stack Engineer with 4+ years building scalable platforms. Drove 300%+ sales growth, 5x user scaling & 99.9% uptime. Expert in React, Java, AI integration.",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Juan Pablo Acosta — Full-Stack Software Engineer | Acosta Labs",
      },
    ],
    // Profile-specific OG tags
    firstName: "Juan Pablo",
    lastName: "Acosta",
    username: "JPablo67",
    gender: "male",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Juan Pablo Acosta | Full-Stack Software Engineer",
    description:
      "Full-Stack Engineer with 4+ years building scalable platforms. 300%+ sales growth · 5x user scaling · 99.9% uptime · 95+ Lighthouse.",
    images: ["/logo-full.png"],
    creator: "@acostalabs",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification — TODO: add GSC code when ready
  verification: {
    google: "bK_lXUncUoPuGxPSGAH-DT2rFq8X-IEQhGD57aB44Hk",
  },

  // App / PWA basics
  applicationName: "Acosta Labs",
  referrer: "origin-when-cross-origin",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to Google Fonts for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Geo meta tags — local SEO */}
        <meta name="geo.region" content="CO-QUI" />
        <meta name="geo.placename" content="Armenia, Quindío, Colombia" />
        <meta name="geo.position" content="4.5339;-75.6811" />
        <meta name="ICBM" content="4.5339, -75.6811" />

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LFZZSJ4N4Y" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LFZZSJ4N4Y');
            `,
          }}
        />
      </head>
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
