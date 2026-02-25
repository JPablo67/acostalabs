import Link from "next/link";

const components = {
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className="text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24"
            {...props}
        />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className="text-xl font-semibold text-text mt-8 mb-3 scroll-mt-24"
            {...props}
        />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="text-text-secondary leading-relaxed mb-4" {...props} />
    ),
    a: ({
        href,
        children,
        ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const isExternal = href?.startsWith("http");
        if (isExternal) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent underline underline-offset-2 transition-colors"
                    {...props}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link
                href={href ?? "#"}
                className="text-primary hover:text-accent underline underline-offset-2 transition-colors"
                {...props}
            >
                {children}
            </Link>
        );
    },
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc list-inside space-y-1.5 mb-4 text-text-secondary" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal list-inside space-y-1.5 mb-4 text-text-secondary" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="leading-relaxed" {...props} />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className="border-l-4 border-primary/30 pl-4 py-1 my-4 text-text-secondary italic bg-surface/50 rounded-r-lg"
            {...props}
        />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
        // Block code (inside <pre>) has className like "language-xxx" or "hljs"
        if (className) {
            return <code className={className} {...props} />;
        }
        return (
            <code
                className="bg-surface px-1.5 py-0.5 rounded text-sm font-mono text-primary border border-border"
                {...props}
            />
        );
    },
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
            className="bg-[#0d1117] text-[#e6edf3] rounded-xl p-5 overflow-x-auto mb-6 text-sm border border-border/50 font-mono whitespace-pre leading-snug"
            {...props}
        />
    ),
    hr: () => <hr className="my-8 border-border" />,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="rounded-xl my-6 w-full" alt={props.alt ?? ""} {...props} />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-semibold text-text" {...props} />
    ),
};

export default components;
