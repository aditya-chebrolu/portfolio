import routes from "./src/data/experience.json";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  changefreq: "monthly",
  additionalPaths: async () => {
    // Filter the routes from JSON file where display is true
    const additionalRoutes = routes
      .filter(route => route.display) // Only include URLs where `display` is true
      .map(route => ({
        loc: route.url, // The path
        changefreq: "monthly", // Optional: Set specific changefreq for these paths
        priority: 0.8 // Optional: Set priority for these paths
      }));

    // Return the additional paths
    return additionalRoutes.map(route => route.loc);
  }
};
