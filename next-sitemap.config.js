// eslint-disable-next-line @typescript-eslint/no-var-requires
const routes = require("./src/data/home/experience.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  changefreq: "monthly",
  additionalPaths: async () => {
    const additionalRoutes = routes
      .filter(route => route.display) // Only include URLs where `display` is true
      .map(route => ({
        loc: route.url, // The path
        changefreq: "monthly", // Optional: Set specific changefreq for these paths
        priority: 0.8 // Optional: Set priority for these paths
      }));
    return additionalRoutes;
  }
};
