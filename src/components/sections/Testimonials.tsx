"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Juan Pablo transformed our entire e-commerce platform and the results speak for themselves — 300% sales growth in under a year. His technical skills are matched only by his ability to understand business needs.",
    name: "Client Name",
    role: "CEO, Retail Company",
    placeholder: true,
  },
  {
    quote:
      "Working with Juan Pablo on our AI integration was a game-changer. He delivered a recommendation engine that significantly boosted user engagement. Highly professional and incredibly skilled.",
    name: "Client Name",
    role: "CTO, Tech Startup",
    placeholder: true,
  },
  {
    quote:
      "His full-stack expertise across Java, React, and cloud infrastructure made him invaluable to our team. He doesn't just write code — he architects solutions that scale.",
    name: "Client Name",
    role: "Engineering Manager",
    placeholder: true,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="What Clients Say"
            subtitle="Feedback from colleagues and clients I've had the pleasure to work with"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border p-6 h-full flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Quote text */}
                <p className="text-text-secondary leading-relaxed flex-1 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {testimonial.name}
                      {testimonial.placeholder && (
                        <span className="text-xs text-text-muted ml-2">
                          (Placeholder)
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
