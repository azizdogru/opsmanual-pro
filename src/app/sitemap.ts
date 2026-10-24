import { MetadataRoute } from 'next';
import { INDUSTRIES } from '@/data/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://opsmanual-pro.vercel.app';

  const industryUrls = INDUSTRIES.map((kit) => ({
    url: `${baseUrl}/${kit.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

    const vsRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/vs/legalzoom`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vs/rocket-lawyer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  return [
    ...vsRoutes,
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...industryUrls,
  ];
}
