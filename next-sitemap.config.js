import siteMetaData from './data/siteMetaData'

module.exports = {
  siteUrl: siteMetaData.siteUrl,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteMetaData.siteUrl}/server-sitemap.xml`],
  },
}
