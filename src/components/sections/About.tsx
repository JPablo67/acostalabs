"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { METRICS, SITE } from "@/lib/constants";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="Building innovative solutions that connect businesses to the future"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Photo + Socials */}
          <AnimatedSection className="lg:col-span-2 flex flex-col items-center">
            <div className="relative">
              {/* Photo placeholder — gradient avatar */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl border-2 border-border overflow-hidden">
                <Image
                  src="/jp.jpg"
                  alt="Juan Pablo Acosta"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              {/* Decorative dot */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-primary" />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-2 mt-4 text-sm text-text-secondary">
              <MapPin className="w-4 h-4" />
              <span>{SITE.location}</span>
            </div>
          </AnimatedSection>

          {/* Right: Bio + Metrics */}
          <AnimatedSection className="lg:col-span-3" delay={0.2}>
            <p className="text-lg sm:text-xl leading-relaxed text-text-secondary">
              I&apos;m a{" "}
              <span className="text-text font-semibold">
                Full-Stack Software Engineer
              </span>{" "}
              with over 4 years of experience building scalable, high-impact
              platforms for international clients. I specialize in turning
              complex business challenges into elegant technical solutions.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              From driving{" "}
              <span className="text-primary font-semibold">
                300%+ sales growth &amp; 5x user scaling
              </span>{" "}
              through strategic UX optimization and system re-architecture, to
              maintaining{" "}
              <span className="text-primary font-semibold">99.9% uptime</span>{" "}
              with Grafana &amp; Prometheus and achieving{" "}
              <span className="text-primary font-semibold">
                95+ Google Lighthouse scores
              </span>{" "}
              across Core Web Vitals — I bring a results-first approach to every
              project. I&apos;ve also saved teams 40+ hrs/month by automating
              reporting pipelines and inventory sync workflows.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Based in Colombia, working with clients worldwide.{" "}
              <span className="text-text font-medium">
                Bilingual: English (C2) & Spanish (Native).
              </span>
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {METRICS.map((metric, i) => (
                <div
                  key={metric.label}
                  className="text-center p-4 rounded-2xl bg-surface border border-border"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Resume */}
            <div className="mt-8">
              <Button href="/resume.pdf" variant="outline" size="sm">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
