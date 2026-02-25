import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import components from "@/components/blog/MDXComponents";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `https://acostalabs.com/blog/${slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Juan Pablo Acosta"],
            tags: post.tags,
            url: `https://acostalabs.com/blog/${slug}`,
            images: [{ url: "/logo-full.png", width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: {
            "@type": "Person",
            "@id": "https://acostalabs.com/#person",
            name: "Juan Pablo Acosta",
        },
        publisher: {
            "@type": "Organization",
            name: "Acosta Labs",
            url: "https://acostalabs.com",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://acostalabs.com/blog/${slug}`,
        },
        keywords: post.tags.join(", "),
        wordCount: post.content.split(/\s+/).length,
        url: `https://acostalabs.com/blog/${slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="section-padding bg-white min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back link */}
                    <AnimatedSection>
                        <div className="mb-8">
                            <Button href="/blog" variant="ghost" size="sm">
                                <ArrowLeft className="w-4 h-4" />
                                All Posts
                            </Button>
                        </div>
                    </AnimatedSection>

                    {/* Post header */}
                    <AnimatedSection>
                        <header className="mb-10">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {post.tags.map((tag) => (
                                    <Badge key={tag} variant="primary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight mb-4">
                                {post.title}
                            </h1>

                            {/* Excerpt */}
                            <p className="text-lg text-text-secondary leading-relaxed mb-6">
                                {post.excerpt}
                            </p>

                            {/* Meta */}
                            <div className="flex items-center gap-4 text-sm text-text-muted pb-6 border-b border-border">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime} read
                                </span>
                            </div>
                        </header>
                    </AnimatedSection>

                    {/* MDX Content */}
                    <AnimatedSection delay={0.1}>
                        <div className="prose-custom">
                            <MDXRemote
                                source={post.content}
                                components={components}
                                options={{
                                    mdxOptions: {
                                        rehypePlugins: [rehypeHighlight, rehypeSlug],
                                    },
                                }}
                            />
                        </div>
                    </AnimatedSection>

                    {/* Footer CTA */}
                    <AnimatedSection delay={0.2}>
                        <div className="mt-16 pt-8 border-t border-border text-center">
                            <p className="text-text-secondary mb-4">
                                Want to discuss this further or work together?
                            </p>
                            <div className="flex justify-center gap-3">
                                <Button href="/#contact" variant="primary" size="sm">
                                    Get in Touch
                                </Button>
                                <Button href="/blog" variant="outline" size="sm">
                                    More Posts
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </article>
        </>
    );
}
