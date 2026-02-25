"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink, TrendingUp } from "lucide-react";

const categories = ["All", "E-Commerce", "AI", "Web"] as const;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Featured Projects"
            subtitle="Real-world solutions that drove measurable business impact"
          />
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-surface text-text-secondary hover:text-text hover:bg-border/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <Card className="h-full group overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="relative h-48 -mx-6 -mt-6 mb-6 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-2">
                        <ExternalLink className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-xs text-text-muted">
                        Screenshot coming soon
                      </p>
                    </div>
                  </div>

                  {/* Metric badge */}
                  {project.metrics && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                      <TrendingUp className="w-3.5 h-3.5 text-accent" />
                      <span className="text-xs font-semibold text-text">
                        {project.metrics}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
