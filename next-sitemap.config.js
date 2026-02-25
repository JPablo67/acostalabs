/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://acostalabs.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  sitemapSize: 5000,

  // Per-path priorities for Google crawl budget
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: path === "/" ? 1.0 : 0.8,
    lastmod: new Date().toISOString(),
  }),

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // Block Next.js internal routes
      { userAgent: "*", disallow: ["/api/", "/_next/"] },
    ],
  },
};
