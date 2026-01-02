import { Entry, Asset } from 'contentful';

export interface HomepageImagesFields {
  image1: Asset;
  image2: Asset;
  image3: Asset;
  image4: Asset;
}

export type HomepageImages = Entry<HomepageImagesFields>;

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

export type FilmProject = Entry<FilmProjectFields>;

export interface WebDesignFields {
  title: string;
  slug: string;
  description?: string;
  gallery?: Asset[];
  article?: string;
}

export type WebDesign = Entry<WebDesignFields>;

