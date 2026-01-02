import { Asset, Entry, EntryFieldTypes } from 'contentful';

export interface FilmProjectSkeleton {
  contentTypeId: 'filmProject';
  fields: {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    tagline?: EntryFieldTypes.Symbol;
    year: EntryFieldTypes.Integer;
    synopsis?: EntryFieldTypes.Text;
    director?: EntryFieldTypes.Symbol;
    productionDesigner?: EntryFieldTypes.Symbol;
    directorOfPhotography?: EntryFieldTypes.Symbol;
    writer?: EntryFieldTypes.Symbol;
    artDirector?: EntryFieldTypes.Symbol;
    setDresser?: EntryFieldTypes.Symbol;
    producer?: EntryFieldTypes.Symbol;
    costumeDesigner?: EntryFieldTypes.Symbol;
    hero: EntryFieldTypes.AssetLink;
    gallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    thumbnail?: EntryFieldTypes.AssetLink;
    url?: EntryFieldTypes.Symbol;
    metaDescription?: EntryFieldTypes.Symbol;
    featuredOrder?: EntryFieldTypes.Integer;
  };
}

export interface HomepageImagesSkeleton {
  contentTypeId: 'homepageImages';
  fields: {
    image1: EntryFieldTypes.AssetLink;
    image2: EntryFieldTypes.AssetLink;
    image3: EntryFieldTypes.AssetLink;
    image4: EntryFieldTypes.AssetLink;
  };
}

export type FilmProject = Entry<FilmProjectSkeleton, undefined, string>;
export type HomepageImages = Entry<HomepageImagesSkeleton, undefined, string>;

export interface FilmProjectFields {
  title: string;
  slug: string;
  tagline?: string;
  year: number;
  synopsis?: string;
  director?: string;
  productionDesigner?: string;
  directorOfPhotography?: string;
  writer?: string;
  artDirector?: string;
  setDresser?: string;
  producer?: string;
  costumeDesigner?: string;
  hero: Asset;
  gallery?: Asset[];
  thumbnail?: Asset;
  url?: string;
  metaDescription?: string;
  featuredOrder?: number;
}

export interface HomepageImagesFields {
  image1: Asset;
  image2: Asset;
  image3: Asset;
  image4: Asset;
}

