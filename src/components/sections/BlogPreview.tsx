"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, Calendar } from "lucide-react";

// Placeholder blog posts — will be replaced with MDX data later
const BLOG_POSTS = [
  {
    title: "How to Integrate AI/LLMs into Your E-Commerce Store",
    excerpt:
      "A practical guide to adding AI-powered recommendations, chatbots, and personalization to your e-commerce platform using OpenAI and Anthropic APIs.",
    date: "2026-03-01",
    readTime: "8 min",
    tags: ["AI", "E-Commerce", "LLM"],
    slug: "ai-ecommerce-integration",
  },
  {
    title: "From 0 to 300% Sales Growth: The Tech Behind the Transformation",
    excerpt:
      "A deep dive into the technical decisions, architecture changes, and UX optimizations that drove a 300% sales increase for a high-traffic retail platform.",
    date: "2026-03-15",
    readTime: "12 min",
    tags: ["Case Study", "Architecture", "Growth"],
    slug: "sales-growth-tech-transformation",
  },
  {
    title: "My AI-Powered Development Workflow (Claude + Copilot + RAG)",
    excerpt:
      "How I use Claude Code, GitHub Copilot, and custom RAG pipelines to accelerate full-stack development across every stage of the SDLC.",
    date: "2026-04-01",
    readTime: "10 min",
    tags: ["AI", "Workflow", "Productivity"],
    slug: "ai-development-workflow",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Latest Insights"
            subtitle="Technical articles on full-stack development, AI integration, and building scalable products"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Card className="h-full flex flex-col group">
                {/* Post Image Placeholder */}
                <div className="relative h-40 -mx-6 -mt-6 mb-5 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs text-text-muted">Coming soon</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-text-muted pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} read
                  </span>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <Button href="/blog" variant="outline">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
