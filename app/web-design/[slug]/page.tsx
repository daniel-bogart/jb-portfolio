'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { getWebDesignBySlug } from '@/lib/contentful';
import Image from 'next/image';
import { Asset } from 'contentful';
import { WebDesign } from '@/types/contentful';

interface WebDesignProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function WebDesignProjectPage({ params }: WebDesignProjectPageProps) {
  const [project, setProject] = useState<WebDesign | null>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string>('');
  
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
  
  const { fields } = project;

  return (
    <main className="min-h-screen pt-32 px-6 bg-[#E8E2D5]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-96 bg-black"></div>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-5xl font-mono font-normal">{fields.title}</h1>
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Description */}
        {fields.description && (
          <p className="text-2xl mb-8 max-w-4xl">{fields.description}</p>
        )}

        {/* Gallery */}
        {fields.gallery && fields.gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {fields.gallery.map((image, index) => {
              const asset = image as Asset;
              return (
                <div key={index} className="relative aspect-[3/4] bg-black">
                  <Image
                    src={`https:${asset.fields.file?.url}`}
                    alt={String(
                      asset.fields.title || `Gallery image ${index + 1}`
                    )}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Article */}
        {fields.article && (
          <div className="max-w-4xl mb-12">
            <div className="whitespace-pre-wrap font-[family-name:var(--font-kay-pho-du)] text-2xl font-bold leading-relaxed">
              {fields.article}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-24 text-center py-8 border-t border-black">
          <p className="text-sm font-[family-name:var(--font-kay-pho-du)]">
            Copyright © John B Packer {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
}

