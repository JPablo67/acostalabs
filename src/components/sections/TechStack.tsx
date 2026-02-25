"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Single observer per CATEGORY card instead of per skill bar.
 * The parent card ref triggers all child bars at once, cutting
 * ~26 IntersectionObserver instances down to 5.
 */
function SkillBar({
  name,
  level,
  delay,
  isInView,
}: {
  name: string;
  level: number;
  delay: number;
  isInView: boolean;
}) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-xs text-text-muted font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden border border-border">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  skills,
  catIndex,
}: {
  category: string;
  skills: readonly { readonly name: string; readonly level: number }[];
  catIndex: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <AnimatedSection delay={catIndex * 0.1} className="bg-white rounded-2xl border border-border p-6">
      <div ref={cardRef}>
        <h3 className="text-lg font-bold text-text mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
          {category}
        </h3>

        <div className="space-y-4">
          {skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={catIndex * 0.1 + skillIndex * 0.05}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function TechStack() {
  const categories = Object.entries(TECH_STACK);

  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies I use to build scalable, high-performance solutions"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(([category, skills], catIndex) => (
            <CategoryCard
              key={category}
              category={category}
              skills={skills}
              catIndex={catIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
