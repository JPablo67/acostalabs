import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    readTime: string;
    published: boolean;
    content: string;
}

export type BlogPostMeta = Omit<BlogPost, "content">;

/**
 * Get all published blog posts, sorted by date (newest first).
 */
export function getAllPosts(): BlogPostMeta[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];

    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

    const posts = files
        .map((filename) => {
            const slug = filename.replace(/\.mdx$/, "");
            const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
            const { data } = matter(raw);

            return {
                slug,
                title: data.title ?? "",
                date: data.date ?? "",
                excerpt: data.excerpt ?? "",
                tags: data.tags ?? [],
                readTime: data.readTime ?? "5 min",
                published: data.published !== false,
            } as BlogPostMeta;
        })
        .filter((post) => post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

/**
 * Get a single post by slug (with raw MDX content).
 */
export function getPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        readTime: data.readTime ?? "5 min",
        published: data.published !== false,
        content,
    };
}

/**
 * Get all slugs for generateStaticParams().
 */
export function getAllSlugs(): string[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];

    return fs
        .readdirSync(CONTENT_DIR)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}
