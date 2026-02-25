import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                name: "Juan Pablo Acosta",
                jobTitle: "Full-Stack Software Engineer",
                url: "https://acostalabs.com",
                email: "acostapablose@gmail.com",
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
                description:
                  "Full-Stack Software Engineer with 4+ years of experience building scalable platforms. Expert in React, Java, AI integration, and cloud-native architecture.",
              },
              {
                "@type": "WebSite",
                name: "Acosta Labs",
                url: "https://acostalabs.com",
                description:
                  "Portfolio and services of Juan Pablo Acosta, Full-Stack Software Engineer.",
              },
            ],
          }),
        }}
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
