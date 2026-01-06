'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Asset } from 'contentful';
import Lightbox from './Lightbox';

interface FilmGalleryProps {
  images: Asset[];
}

export default function FilmGallery({ images }: FilmGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  // Prepare lightbox images
  const lightboxImages = images
    .filter(img => img?.fields?.file?.url)
    .map((image, index) => ({
      url: `https:${image.fields.file.url}`,
      alt: `Gallery image ${index + 1}`
    }));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mt-2 md:mt-12">
        {images.map((image, index) => {
          if (!image?.fields?.file?.url) return null;
          
          const imageUrl = `https:${image.fields.file.url}`;
          const imageAlt = `Gallery image ${index + 1}`;
          
          return (
            <div 
              key={index} 
              className="relative aspect-video cursor-pointer hover:opacity-90 transition-opacity duration-300"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          );
        })}
      </div>
      
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}



