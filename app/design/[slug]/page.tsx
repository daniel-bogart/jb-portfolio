'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { getWebDesignBySlug } from '@/lib/contentful';
import Image from 'next/image';
import { Asset } from 'contentful';
import { WebDesign, WebDesignFields } from '@/types/contentful';
import Lightbox from '@/components/Lightbox';

interface WebDesignProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function WebDesignProjectPage({ params }: WebDesignProjectPageProps) {
  const [project, setProject] = useState<WebDesign | null>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  useEffect(() => {
    params.then(({ slug: resolvedSlug }) => {
      setSlug(resolvedSlug);
      getWebDesignBySlug(resolvedSlug).then((data) => {
        setProject(data);
        setLoading(false);
      });
    });
  }, [params]);
  
  if (loading) {
    return (
      <main className="min-h-screen pt-32 px-6 bg-[#E8E2D5]">
        <div className="max-w-7xl mx-auto">
          <p>Loading...</p>
        </div>
      </main>
    );
  }
  
  if (!project) {
    notFound();
  }
  
  const fields = project.fields as WebDesignFields;

  // Prepare lightbox images
  const lightboxImages = fields.gallery?.map((image, index) => {
    const asset = image as Asset;
    return {
      url: `https:${asset.fields.file?.url}`,
      alt: String(asset.fields.title || `Gallery image ${index + 1}`)
    };
  }) || [];

  return (
    <main className="min-h-screen pt-32 px-6 bg-[#E8E2D5]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[12px] md:h-1 w-full bg-black"></span>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-5xl font-mono font-normal">{fields.title}</h1>
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Description */}
        {fields.description && (
          <p className="text-2xl mb-2 max-w-4xl underline">
            {fields.description}
          </p>
        )}

        {/* Article */}
        {fields.article && (
          <div className="max-w-4xl mb-12">
            <div className="whitespace-pre-wrap font-[family-name:var(--font-kay-pho-du)] md:text-xl text-md font-bold leading-relaxed">
              {fields.article}
            </div>
          </div>
        )}

        {/* Gallery - Masonry/Tetris style with original aspect ratios */}
        {fields.gallery && fields.gallery.length > 0 && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-12">
            {fields.gallery.map((image, index) => {
              const asset = image as Asset;
              const details = asset.fields.file?.details as
                | { image?: { width?: number; height?: number } }
                | undefined;
              const width = details?.image?.width || 800;
              const height = details?.image?.height || 600;
              const imageUrl = `https:${asset.fields.file?.url}`;
              const imageAlt = String(asset.fields.title || `Gallery image ${index + 1}`);

              return (
                <div 
                  key={index} 
                  className="mb-6 break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity duration-300"
                  onClick={() => setLightboxIndex(index)}
                >
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={width}
                    height={height}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-24 text-center py-8 border-t border-black">
          <p className="text-sm font-[family-name:var(--font-kay-pho-du)]">
            Copyright © John B Packer {new Date().getFullYear()}
          </p>
        </footer>
      </div>
      
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </main>
  );
}

