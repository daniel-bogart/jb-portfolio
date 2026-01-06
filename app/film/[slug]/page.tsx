import { notFound } from 'next/navigation';
import { getFilmProjectBySlug, getAllFilmProjects } from '@/lib/contentful';
import FilmHero from '@/components/FilmHero';
import FilmGallery from '@/components/FilmGallery';
import { Asset } from 'contentful';
import { FilmProjectFields } from '@/types/contentful';

interface FilmProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const projects = await getAllFilmProjects();
    return projects.map((project) => {
      const fields = project.fields as FilmProjectFields;
      return {
        slug: fields.slug,
      };
    });
  } catch (error) {
    return [];
  }
}

export default async function FilmProjectPage({ params }: FilmProjectPageProps) {
  const { slug } = await params;
  const project = await getFilmProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const fields = project.fields as FilmProjectFields;

  return (
    <main className="min-h-screen pt-16 lg:pt-40 bg-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 lg:gap-8 mb-4">
            <div className="h-[12px] lg:h-[8px] w-[65%] bg-black"></div>
            <div className="h-[18px] w-[18px] bg-black rounded-full"></div>
          </div>
          <h1 className="font-[family-name:var(--font-kay-pho-du)] text-3xl md:text-6xl font-semibold leading-tight mb-8 max-w-[70%]">
            {fields.title}
          </h1>
        </div>

        {/* Credits */}
        <div className="flex items-start justify-start lg:items-center lg:justify-end w-full gap-x-12 md:mb-8 mb-2">
          <div className="md:space-y-1">
            {fields.writer && (
              <p className="text-lg font-[family-name:var(--font-kay-pho-du)] leading-tight md:leading-normal">
                <span className="font-semibold underline">
                  Writer/Director:
                </span>{" "}
                {fields.writer}
              </p>
            )}
            {fields.director && !fields.writer && (
              <p className="text-lg font-[family-name:var(--font-kay-pho-du)] leading-tight md:leading-normal">
                <span className="font-semibold underline">Director:</span>{" "}
                {fields.director}
              </p>
            )}
            {fields.directorOfPhotography && (
              <p className="text-lg font-[family-name:var(--font-kay-pho-du)] leading-tight md:leading-normal">
                <span className="font-semibold underline">
                  Director of Photography:
                </span>{" "}
                {fields.directorOfPhotography}
              </p>
            )}
            {fields.productionDesigner && (
              <p className="text-lg font-[family-name:var(--font-kay-pho-du)] leading-tight md:leading-normal">
                <span className="font-semibold underline">
                  Production Designer:
                </span>{" "}
                {fields.productionDesigner}
              </p>
            )}
            {fields.artDirector && (
              <p className="text-lg font-[family-name:var(--font-kay-pho-du)] leading-tight md:leading-normal">
                <span className="font-semibold underline">Art Director:</span>{" "}
                {fields.artDirector}
              </p>
            )}
            {fields.setDresser && (
              <p className="text-lg font-[family-name:var(--font-kay-pho-du)] leading-tight md:leading-normal">
                <span className="font-semibold underline">Set Dresser:</span>{" "}
                {fields.setDresser}
              </p>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <FilmHero image={fields.hero as Asset} title={fields.title} />

        {/* Gallery */}
        {fields.gallery && fields.gallery.length > 0 && (
          <FilmGallery images={fields.gallery as Asset[]} />
        )}

        {/* Footer */}
        <footer className="mt-24 text-center py-8 border-t border-black">
          <p className="font-mono text-sm">
            Copyright © John B Packer {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
}

