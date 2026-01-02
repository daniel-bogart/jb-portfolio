'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllWebDesignProjects } from '@/lib/contentful';
import { WebDesign, WebDesignFields } from '@/types/contentful';
import { Asset } from 'contentful';

export default function WebDesignPage() {
  const [projects, setProjects] = useState<WebDesign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllWebDesignProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <p>Loading web design projects...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 px-6 bg-[#E8E2D5]">
      <div className="max-w-7xl mx-auto">
        {/* Title with decorative elements */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-96 bg-black"></div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-5xl font-mono font-normal">Web-Design</h1>
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid - Cards that link to individual pages */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const fields = project.fields as WebDesignFields;
              const thumbnail = fields.gallery?.[0] as Asset;
              
              return (
                <Link
                  key={project.sys.id}
                  href={`/design/${fields.slug}`}
                  className="group"
                >
                  {/* Thumbnail */}
                  {thumbnail && (
                    <div className="relative aspect-[3/4] bg-black mb-4 overflow-hidden">
                      <Image
                        src={`https:${thumbnail.fields.file?.url}`}
                        alt={fields.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  
                  {/* Title */}
                  <h2 className="text-xl font-normal group-hover:underline">
                    {fields.title}
                  </h2>
                  
                  {/* Description preview */}
                  {fields.description && (
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                      {fields.description}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-lg">No web design projects yet.</p>
        )}

        {/* Copyright */}
        <footer className="mt-24 text-center py-8">
          <p className="text-sm font-[family-name:var(--font-kay-pho-du)]">
            Copyright © John B Packer {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
}
