import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/'], // Ignora el CMS de Sanity en los resultados
    },
    sitemap: 'https://crecerconcristoredentor.com/sitemap.xml',
  };
}
