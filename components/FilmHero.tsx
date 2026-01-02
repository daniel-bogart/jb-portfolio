'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Asset } from 'contentful';

interface FilmHeroProps {
  image: Asset;
  title: string;
}

export default function FilmHero({ image, title }: FilmHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const url = image.fields.file?.url as string;

  return (
    <div ref={heroRef} className="relative w-full aspect-[16/9] bg-black overflow-hidden">
      <div ref={imageRef} className="w-full h-full">
        <Image
          src={`https:${url}`}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}

