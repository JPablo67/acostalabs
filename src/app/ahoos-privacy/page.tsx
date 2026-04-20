import { MDXRemote } from "next-mdx-remote/rsc";
import components from "@/components/blog/MDXComponents";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — Auto Hide Out of Stock | Acosta Labs",
    description: "Privacy policy describing data collection and usage for the Auto Hide Out of Stock Shopify App.",
    alternates: { canonical: "https://acostalabs.com/ahoos-privacy" },
};

export default function PrivacyPage() {
    const filePath = path.join(process.cwd(), "src/app/ahoos-privacy/PRIVACY-POLICY.md");
    let content = "";
    try {
        content = fs.readFileSync(filePath, "utf-8");
    } catch (e) {
        console.error("Could not read PRIVACY-POLICY.md from", filePath);
    }

    return (
        <article className="section-padding bg-white min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="prose-custom">
                        <MDXRemote source={content} components={components} />
                    </div>
                </AnimatedSection>
            </div>
        </article>
    );
}
