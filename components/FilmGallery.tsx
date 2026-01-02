'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Asset } from 'contentful';

gsap.registerPlugin(ScrollTrigger);

interface FilmGalleryProps {
  images: Asset[];
}

export default function FilmGallery({ images }: FilmGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const images = galleryRef.current.querySelectorAll('.gallery-item');

    images.forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom-=100',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={galleryRef} className="grid grid-cols-2 gap-6 mt-12">
      {images.map((image, index) => {
        const url = image.fields.file?.url as string;
        const width = (image.fields.file?.details as any)?.image?.width || 800;
        const height = (image.fields.file?.details as any)?.image?.height || 600;

        return (
          <div key={index} className="gallery-item relative aspect-[675/357] bg-black">
            <Image
              src={`https:${url}`}
              alt={image.fields.description as string || `Gallery image ${index + 1}`}
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

