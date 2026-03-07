"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/lib/constants";

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  "AI & ML": "🤖",
  "AI-Augmented Dev": "🚀",
  "Cloud & DevOps": "☁️",
  Databases: "🗄️",
  Architecture: "🏗️",
};

function CategoryCard({
  category,
  skills,
  catIndex,
}: {
  category: string;
  skills: readonly { readonly name: string }[];
  catIndex: number;
}) {
  return (
    <AnimatedSection delay={catIndex * 0.1} className="bg-white rounded-2xl border border-border p-6">
      <h3 className="text-lg font-bold text-text mb-5 flex items-center gap-2">
        <span className="text-xl">{CATEGORY_ICONS[category] ?? "🔧"}</span>
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 text-sm font-medium rounded-full bg-surface border border-border text-text-muted hover:border-primary hover:text-primary transition-colors cursor-default"
          >
            {skill.name}
          </span>
        ))}
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
