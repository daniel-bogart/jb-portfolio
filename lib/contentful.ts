import { createClient } from 'contentful';
import { HomepageImages, FilmProject, WebDesign } from '@/types/contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

export async function getHomepageImages(): Promise<HomepageImages> {
  const response = await client.getEntries({
    content_type: 'homepageImages',
    limit: 1,
  });

  return response.items[0] as HomepageImages;
}

export async function getAllFilmProjects(): Promise<FilmProject[]> {
  const response = await client.getEntries({
    content_type: 'filmProject',
    order: ['-sys.createdAt'],
  });

  return response.items as FilmProject[];
}

export async function getFilmProjectBySlug(slug: string): Promise<FilmProject | null> {
  const response = await client.getEntries({
    content_type: 'filmProject',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0] as FilmProject || null;
}

export async function getAllWebDesignProjects(): Promise<WebDesign[]> {
  const response = await client.getEntries({
    content_type: 'webDesign',
    order: ['-sys.createdAt'],
  });

  return response.items as WebDesign[];
}

export async function getWebDesignBySlug(slug: string): Promise<WebDesign | null> {
  const response = await client.getEntries({
    content_type: 'webDesign',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0] as WebDesign || null;
}

export default client;

