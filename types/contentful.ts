import { Entry, Asset, EntrySkeletonType } from 'contentful';

export interface HomepageImagesFields {
  image1: Asset;
  image2: Asset;
  image3: Asset;
  image4: Asset;
}

export interface HomepageImagesSkeleton extends EntrySkeletonType {
  contentTypeId: 'homepageImages';
  fields: HomepageImagesFields;
}

export type HomepageImages = Entry<HomepageImagesSkeleton>;

export interface FilmProjectFields {
  title: string;
  slug: string;
  hero: Asset;
  gallery?: Asset[];
  writer?: string;
  director?: string;
  directorOfPhotography?: string;
  productionDesigner?: string;
  artDirector?: string;
  setDresser?: string;
}

export interface FilmProjectSkeleton extends EntrySkeletonType {
  contentTypeId: 'filmProject';
  fields: FilmProjectFields;
}

export type FilmProject = Entry<FilmProjectSkeleton>;

export interface WebDesignFields {
  title: string;
  slug: string;
  description?: string;
  gallery?: Asset[];
  article?: string;
}

export interface WebDesignSkeleton extends EntrySkeletonType {
  contentTypeId: 'webDesign';
  fields: WebDesignFields;
}

export type WebDesign = Entry<WebDesignSkeleton>;

