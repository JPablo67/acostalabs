"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SERVICES } from "@/lib/constants";
import { Code2, Brain, ShoppingCart, Cloud } from "lucide-react";

const iconMap = {
  Code2,
  Brain,
  ShoppingCart,
  Cloud,
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="What I Do"
            subtitle="End-to-end solutions that transform ideas into scalable, revenue-generating products"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Card className="h-full group">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-text mb-3">
                    {service.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((h) => (
                      <Badge key={h} variant="primary">
                        {h}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
