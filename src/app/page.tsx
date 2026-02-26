import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Person ───────────────────────────────────────────────────────────────
    {
      "@type": "Person",
      "@id": "https://acostalabs.com/#person",
      name: "Juan Pablo Acosta",
      givenName: "Juan Pablo",
      familyName: "Acosta",
      jobTitle: "Full-Stack Software Engineer",
      url: "https://acostalabs.com",
      image: {
        "@type": "ImageObject",
        url: "https://acostalabs.com/jp.jpg",
        width: 256,
        height: 256,
      },
      email: "jp@acostalabs.com",
      telephone: "+573117700750",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Armenia",
        addressRegion: "Quindío",
        addressCountry: "CO",
      },
      sameAs: [
        "https://www.linkedin.com/in/juan-pablo-acosta-91a521195/",
        "https://github.com/JPablo67",
      ],
      knowsLanguage: ["en", "es"],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Node.js",
        "Python",
        "AI Integration",
        "E-Commerce Development",
        "Cloud Architecture",
        "DevOps",
        "Full-Stack Development",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full-Stack Software Engineer",
        occupationLocation: { "@type": "Country", name: "Colombia" },
        description:
          "Designs and builds scalable full-stack platforms, integrating AI features, cloud infrastructure, and e-commerce systems for international clients.",
        skills:
          "React, Next.js, TypeScript, Java, Spring Boot, Node.js, Python, Docker, Kubernetes, AWS, PostgreSQL, OpenAI API",
        estimatedSalary: {
          "@type": "MonetaryAmountDistribution",
          name: "Freelance / Contract Rate",
          currency: "USD",
          duration: "P1H",
          percentile10: 50,
          percentile25: 75,
          median: 100,
          percentile75: 150,
          percentile90: 200,
        },
      },
      alumniOf: [
        { "@type": "Organization", name: "REDSI", url: "https://redsi.co" },
        { "@type": "Organization", name: "Tecnisoft" },
        { "@type": "Organization", name: "Salvatech" },
      ],
      worksFor: {
        "@type": "Organization",
        name: "Salvatech",
      },
      description:
        "Full-Stack Software Engineer with 4+ years of experience building scalable platforms. Drove 300%+ sales growth, 5x user scaling & 99.9% uptime. Expert in React, Java, AI integration, and cloud-native architecture. Available for hire.",
    },

    // ── Professional Service (Acosta Labs) ───────────────────────────────────
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://acostalabs.com/#business",
      name: "Acosta Labs",
      url: "https://acostalabs.com",
      logo: "https://acostalabs.com/logo-icon.png",
      image: "https://acostalabs.com/logo-full.png",
      description:
        "Full-stack software engineering services specializing in scalable web platforms, AI integration, e-commerce solutions, and cloud-native architecture.",
      founder: { "@id": "https://acostalabs.com/#person" },
      areaServed: "Worldwide",
      availableLanguage: ["English", "Spanish"],
      contactPoint: {
        "@type": "ContactPoint",
        email: "jp@acostalabs.com",
        contactType: "customer support",
        availableLanguage: ["English", "Spanish"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Web Development",
              description:
                "End-to-end web application development using React, Next.js, Java, and Node.js",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Integration & LLM Development",
              description:
                "Integration of OpenAI, Anthropic Claude, and custom LLM pipelines into business applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Platform Development",
              description:
                "Shopify custom development, WooCommerce, and custom e-commerce platforms with payment gateway integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud & DevOps",
              description:
                "AWS, Docker, Kubernetes, CI/CD pipeline setup, and server management for zero-downtime production deployments",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah Mitchell" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Juan Pablo transformed our entire e-commerce platform and the results speak for themselves — 300% sales growth in under a year. His technical skills are matched only by his ability to understand business needs.",
        },
      ],
    },

    // ── WebSite ──────────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://acostalabs.com/#website",
      name: "Acosta Labs",
      url: "https://acostalabs.com",
      description:
        "Portfolio and software engineering services of Juan Pablo Acosta — Full-Stack Engineer specializing in React, Java, AI, and e-commerce.",
      publisher: { "@id": "https://acostalabs.com/#person" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://acostalabs.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },

    // ── WebPage ──────────────────────────────────────────────────────────────
    {
      "@type": "WebPage",
      "@id": "https://acostalabs.com/#webpage",
      url: "https://acostalabs.com",
      name: "Juan Pablo Acosta | Full-Stack Software Engineer — Acosta Labs",
      isPartOf: { "@id": "https://acostalabs.com/#website" },
      about: { "@id": "https://acostalabs.com/#person" },
      description:
        "Full-Stack Software Engineer portfolio: 300%+ sales growth, 5x user scaling, 99.9% uptime. Hire Juan Pablo Acosta for React, Java, AI, and e-commerce projects.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://acostalabs.com",
          },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Experience />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </>
  );
}
