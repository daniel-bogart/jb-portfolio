import { notFound } from 'next/navigation';
import { getFilmProjectBySlug, getAllFilmProjects } from '@/lib/contentful';
import FilmHero from '@/components/FilmHero';
import FilmGallery from '@/components/FilmGallery';
import { Asset } from 'contentful';

interface FilmProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getAllFilmProjects();
  
  return projects.map((project) => ({
    slug: project.fields.slug,
  }));
}

export async function generateMetadata({ params }: FilmProjectPageProps) {
  const { slug } = await params;
  const project = await getFilmProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.fields.title} - John 'JB' Packer`,
    description: project.fields.metaDescription || project.fields.synopsis || `${project.fields.title} production design`,
  };
}

export default async function FilmProjectPage({ params }: FilmProjectPageProps) {
  const { slug } = await params;
  const project = await getFilmProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { fields } = project;

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-2 w-96 bg-black"></div>
            <div className="h-4 w-4 bg-black rounded-full"></div>
          </div>
          <h1 className="font-mono text-5xl md:text-6xl font-normal leading-tight mb-8">
            {fields.title}
          </h1>
        </div>

        {/* Credits */}
        <div className="grid md:grid-cols-2 gap-x-12 mb-8">
          <div className="space-y-1">
            {fields.writer && (
              <p className="text-sm">
                <span className="font-semibold underline">Writer/Director:</span> {fields.writer}
              </p>
            )}
            {fields.director && !fields.writer && (
              <p className="text-sm">
                <span className="font-semibold underline">Director:</span> {fields.director}
              </p>
            )}
            {fields.directorOfPhotography && (
              <p className="text-sm">
                <span className="font-semibold underline">Director of Photography:</span> {fields.directorOfPhotography}
              </p>
            )}
            {fields.productionDesigner && (
              <p className="text-sm">
                <span className="font-semibold underline">Production Designer:</span> {fields.productionDesigner}
              </p>
            )}
          </div>
          <div className="space-y-1">
            {fields.artDirector && (
              <p className="text-sm">
                <span className="font-semibold underline">Art Director:</span> {fields.artDirector}
              </p>
            )}
            {fields.setDresser && (
              <p className="text-sm">
                <span className="font-semibold underline">Set Dresser:</span> {fields.setDresser}
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
          <p className="font-mono text-sm">Copyright © John B Packer {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  );
}

