import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTemplates, getTemplateById, getTemplateContent } from '@/lib/templates';
import { TemplatePreview } from '@/components/TemplatePreview';
import { Header } from '@/components/Header';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const templates = getTemplates();
  return templates.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const template = getTemplateById(id);
  if (!template) return { title: 'Template Not Found' };

  return {
    title: `${template.title} - AGENTS.md Generator`,
    description: template.description,
  };
}

export default async function TemplatePage({ params }: PageProps) {
  const { id } = await params;
  const template = getTemplateById(id);

  if (!template) {
    notFound();
  }

  const content = getTemplateContent(template.filename);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/browse"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to templates
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{template.title}</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {template.description}
              </p>
            </div>
            <span className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded">
              {template.category}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mb-6">
            <h2 className="font-semibold mb-2">When to use this template</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {template.useCase}
            </p>
          </div>

          <div className="flex gap-4 text-sm text-gray-500 mb-6">
            <span>{template.lines} lines</span>
            <span>Version {template.version}</span>
            <span>Updated {template.updatedAt}</span>
          </div>
        </div>

        <TemplatePreview content={content} filename={template.filename} />

        <div className="mt-8 flex gap-4">
          <Link
            href={`/editor?template=${template.id}`}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Customize in Editor
          </Link>
        </div>
      </main>
    </div>
  );
}
