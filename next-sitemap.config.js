module.exports = {
  siteUrl: 'http://localhost:3000',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`http://localhost:3000/server-sitemap.xml`],
  },
}
