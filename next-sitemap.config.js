
  /** @type {import('next-sitemap').IConfig} */
  const config = {
  siteUrl: 'https://hanaasadoqi.dev',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/src/api/*']
};
export default config;
