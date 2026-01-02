import { createClient } from 'contentful';
import { FilmProject, FilmProjectSkeleton, HomepageImages, HomepageImagesSkeleton } from '@/types/contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllFilmProjects(): Promise<FilmProject[]> {
  const response = await client.getEntries<FilmProjectSkeleton>({
    content_type: 'filmProject',
    order: ['-fields.featuredOrder', '-fields.year'],
  });

  return response.items;
}

export async function getFilmProjectBySlug(slug: string): Promise<FilmProject | null> {
  const response = await client.getEntries<FilmProjectSkeleton>({
    content_type: 'filmProject',
    'fields.slug': slug,
    limit: 1,
  });

  if (response.items.length === 0) {
    return null;
  }

  return response.items[0];
}

export async function getFeaturedFilmProjects(limit: number = 6): Promise<FilmProject[]> {
  const response = await client.getEntries<FilmProjectSkeleton>({
    content_type: 'filmProject',
    order: ['-fields.featuredOrder'],
    limit,
  });

  return response.items;
}

export async function getHomepageImages(): Promise<HomepageImages | null> {
  const response = await client.getEntries<HomepageImagesSkeleton>({
    content_type: 'homepageImages',
    limit: 1,
  });

  if (response.items.length === 0) {
    return null;
  }

  return response.items[0];
}

