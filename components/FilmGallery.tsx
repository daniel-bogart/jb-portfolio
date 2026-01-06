'use client';

import Image from 'next/image';
import { Asset } from 'contentful';

interface FilmGalleryProps {
  images: Asset[];
}

export default function FilmGallery({ images }: FilmGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mt-2 md:mt-12">
      {images.map((image, index) => {
        if (!image?.fields?.file?.url) return null;
        
        return (
          <div key={index} className="relative aspect-video">
            <Image
              src={`https:${image.fields.file.url}`}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        );
      })}
    </div>
  );
}



