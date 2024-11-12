// eslint-disable-next-line @typescript-eslint/no-var-requires
// const routes = require("./src/data/experience.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  changefreq: "monthly"
};
