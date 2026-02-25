# AcostaLabs.com — Remaining Tasks

> Last updated: February 24, 2026

---

## Phase 2 — Content & Personalization

- [ ] **Add professional headshot** — Replace the "JP" avatar placeholder in the About section with a real photo (`public/images/profile.webp`)
- [ ] **Replace placeholder testimonials** — Get real quotes from past clients/colleagues and update `src/components/sections/Testimonials.tsx`
- [ ] **Add project screenshots** — Create/capture screenshots for each project and place them in `public/images/projects/`. Update image paths in `src/lib/constants.ts` → `PROJECTS`
- [ ] **Design a logo** — Create an "ACOSTA LABS" wordmark/logo to replace the gradient "A" square in the Header and Footer

## Phase 3 — Integrations

- [ ] **Set up Resend API for contact form** — Create a Resend account, get an API key, build an API route at `src/app/api/contact/route.ts` to handle form submissions
- [ ] **Connect Calendly** — Replace the placeholder Calendly link in the Contact section with your real booking URL
- [ ] **Set up analytics** — Self-host Umami or Plausible on the Ubuntu server, add the tracking script to `src/app/layout.tsx`

## Phase 4 — Blog System

- [ ] **Set up MDX pipeline** — Install `next-mdx-remote` + `shiki`, create `src/lib/blog.ts` for reading/parsing MDX files
- [ ] **Build blog listing page** — `src/app/blog/page.tsx` with search/filter by tags
- [ ] **Build blog post page** — `src/app/blog/[slug]/page.tsx` with table of contents, syntax highlighting, share buttons
- [ ] **Write initial blog posts** (2-3 for launch):
  - "How to Integrate AI/LLMs into Your E-Commerce Store"
  - "From 0 to 300% Sales Growth: The Tech Behind the Transformation"
  - "My AI-Powered Development Workflow (Claude + Copilot + RAG)"
- [ ] **Add RSS feed** — Generate `feed.xml` for blog subscribers

## Phase 5 — Deployment (Ubuntu Server)

- [ ] **Create Dockerfile** — Multi-stage Next.js production build
- [ ] **Set up docker-compose.yml** — Next.js container + Nginx reverse proxy
- [ ] **Configure Nginx** — SSL with Let's Encrypt (certbot), gzip, caching headers, reverse proxy to Next.js :3000
- [ ] **Set up GitHub Actions CI/CD** — Auto-build + deploy on push to `main`
- [ ] **DNS configuration** — Point `acostalabs.com` A record to server IP
- [ ] **Test end-to-end** — Verify SSL, performance, mobile, all sections working

## Phase 6 — Post-Launch SEO & Growth

- [ ] **Submit sitemap** to Google Search Console + Bing Webmaster Tools
- [ ] **Set up Google Business Profile** for local Colombian SEO
- [ ] **Publish blog posts** on a bi-weekly cadence
- [ ] **Share content** on LinkedIn + Twitter/X
- [ ] **Monitor Core Web Vitals** and fix any issues
- [ ] **Add Spanish language version** (future phase)
