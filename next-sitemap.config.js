module.exports = {
  siteUrl: 'https://example.com/',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://example.com/server-sitemap.xml'],
  },
}
