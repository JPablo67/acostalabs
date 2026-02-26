import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const EXTERNAL_URL = "https://acostalabs.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = getAllPosts();

    const blogRoutes = posts.map((post) => ({
        url: `${EXTERNAL_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString().split('T')[0],
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const routes = [
        {
            url: `${EXTERNAL_URL}`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            url: `${EXTERNAL_URL}/blog`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
    ];

    return [...routes, ...blogRoutes];
}
