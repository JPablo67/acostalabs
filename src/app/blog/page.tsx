import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — Technical Insights on Full-Stack Development & AI",
    description:
        "Articles on full-stack engineering, AI integration, e-commerce optimization, and cloud architecture by Juan Pablo Acosta.",
    alternates: { canonical: "https://acostalabs.com/blog" },
    openGraph: {
        title: "Blog | Acosta Labs",
        description:
            "Technical articles on full-stack development, AI integration, and building scalable products.",
        url: "https://acostalabs.com/blog",
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://acostalabs.com/blog",
        name: "Blog — Acosta Labs",
        description:
            "Technical articles on full-stack development, AI integration, and building scalable products.",
        url: "https://acostalabs.com/blog",
        isPartOf: { "@id": "https://acostalabs.com/#website" },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: posts.map((post, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `https://acostalabs.com/blog/${post.slug}`,
                name: post.title,
            })),
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className="section-padding bg-white min-h-screen">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back to home */}
                    <AnimatedSection>
                        <div className="mb-8">
                            <Button href="/#blog" variant="ghost" size="sm">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Home
                            </Button>
                        </div>

                        <SectionHeading
                            title="Blog"
                            subtitle="Technical articles on full-stack development, AI integration, and building scalable products"
                        />
                    </AnimatedSection>

                    {/* Posts grid */}
                    {posts.length === 0 ? (
                        <AnimatedSection>
                            <p className="text-center text-text-secondary text-lg mt-12">
                                Posts coming soon — stay tuned!
                            </p>
                        </AnimatedSection>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {posts.map((post, i) => (
                                <AnimatedSection key={post.slug} delay={i * 0.1}>
                                    <Link href={`/blog/${post.slug}`} className="block h-full">
                                        <Card className="h-full flex flex-col group hover:border-primary/30 transition-colors">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {post.tags.map((tag) => (
                                                    <Badge key={tag} variant="primary">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-lg font-bold text-text group-hover:text-primary transition-colors leading-snug mb-3">
                                                {post.title}
                                            </h2>

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
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
