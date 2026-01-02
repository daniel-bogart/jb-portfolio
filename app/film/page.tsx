'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllFilmProjects } from '@/lib/contentful';
import { FilmProject } from '@/types/contentful';
import { Asset } from 'contentful';

export default function FilmPage() {
  const [projects, setProjects] = useState<FilmProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllFilmProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-mono mb-12">Film Projects</h1>
          <p>Loading projects...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-mono mb-12">Film Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const thumbnail = project.fields.thumbnail || project.fields.hero;
            const thumbnailUrl = (thumbnail as Asset).fields.file?.url as string;

            return (
              <Link
                key={project.sys.id}
                href={`/film/${project.fields.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] bg-black mb-4 overflow-hidden">
                  <Image
                    src={`https:${thumbnailUrl}`}
                    alt={project.fields.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h2 className="font-mono text-xl mb-1 group-hover:underline">
                  {project.fields.title}
                </h2>
                <p className="text-sm text-gray-700">{project.fields.year}</p>
                {project.fields.tagline && (
                  <p className="text-sm mt-2 text-gray-600">{project.fields.tagline}</p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

