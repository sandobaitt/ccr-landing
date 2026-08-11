import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ccr-landing.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Si tuvieras otras rutas estáticas, las agregarías aquí:
    // {
    //   url: 'https://crecerconcristoredentor.com/comunidades',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
