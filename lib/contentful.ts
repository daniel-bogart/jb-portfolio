import { createClient } from 'contentful';
import { HomepageImages, FilmProject, WebDesign, HomepageImagesSkeleton, FilmProjectSkeleton, WebDesignSkeleton } from '@/types/contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

export async function getHomepageImages(): Promise<HomepageImages> {
  const response = await client.getEntries<HomepageImagesSkeleton>({
    content_type: 'homepageImages',
    limit: 1,
  });

  return response.items[0];
}

export async function getAllFilmProjects(): Promise<FilmProject[]> {
  const response = await client.getEntries<FilmProjectSkeleton>({
    content_type: 'filmProject',
    order: ['-sys.createdAt'],
  });

  return response.items;
}

export async function getFilmProjectBySlug(slug: string): Promise<FilmProject | null> {
  const response = await client.getEntries<FilmProjectSkeleton>({
    content_type: 'filmProject',
  } as any);
  
  // Filter manually since TypeScript doesn't like the field query syntax
  const filtered = response.items.filter((item) => item.fields.slug === slug);
  return filtered[0] || null;
}

export async function getAllWebDesignProjects(): Promise<WebDesign[]> {
  const response = await client.getEntries<WebDesignSkeleton>({
    content_type: 'webDesign',
    order: ['-sys.createdAt'],
  });

  return response.items;
}

export async function getWebDesignBySlug(slug: string): Promise<WebDesign | null> {
  const response = await client.getEntries<WebDesignSkeleton>({
    content_type: 'webDesign',
  } as any);
  
  // Filter manually since TypeScript doesn't like the field query syntax
  const filtered = response.items.filter((item) => item.fields.slug === slug);
  return filtered[0] || null;
}

export default client;

