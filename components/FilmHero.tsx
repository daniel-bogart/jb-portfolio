'use client';

import Image from 'next/image';
import { Asset } from 'contentful';

interface FilmHeroProps {
  image: Asset;
  title: string;
}

export default function FilmHero({ image, title }: FilmHeroProps) {
  if (!image?.fields?.file?.url) {
    return null;
  }

  return (
    <div className="mb-12">
      <Image
        src={`https:${image.fields.file.url}`}
        alt={title}
        width={1200}
        height={675}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}

