'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Asset } from 'contentful';
import Lightbox from './Lightbox';

interface FilmHeroProps {
  image: Asset;
  title: string;
}

export default function FilmHero({ image, title }: FilmHeroProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!image?.fields?.file?.url) {
    return null;
  }

  const imageUrl = `https:${image.fields.file.url}`;

  return (
    <>
      <div className="md:mb-12 mb-3 cursor-pointer hover:opacity-90 transition-opacity duration-300" onClick={() => setLightboxOpen(true)}>
        <Image
          src={imageUrl}
          alt={title}
          width={1200}
          height={675}
          className="w-full h-auto"
          priority
        />
      </div>
      
      {lightboxOpen && (
        <Lightbox
          images={[{ url: imageUrl, alt: title }]}
          initialIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}



