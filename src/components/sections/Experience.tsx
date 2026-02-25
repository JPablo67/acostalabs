"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCES } from "@/lib/constants";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Experience"
            subtitle="A track record of delivering impact across companies and industries"
          />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-border md:-translate-x-px" />

          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <AnimatedSection key={exp.company} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-white shadow-lg -translate-x-[7px] md:-translate-x-[8px] mt-6 z-10" />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content */}
                  <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium text-sm">
                            {exp.company}
                          </p>
                          <p className="text-text-muted text-xs mt-0.5">
                            {exp.period}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <Badge key={t} variant="accent">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
