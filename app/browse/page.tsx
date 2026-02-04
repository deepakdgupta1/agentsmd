import Link from 'next/link';
import { getTemplates, getCategories } from '@/lib/templates';
import { TemplateGrid } from '@/components/TemplateGrid';

export const metadata = {
  title: 'Browse Templates - AGENTS.md Generator',
  description: 'Browse AGENTS.md templates for different AI agent roles',
};

export default function BrowsePage() {
  const templates = getTemplates();
  const categories = getCategories();

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            AGENTS.md
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/browse"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              Browse
            </Link>
            <Link
              href="/editor"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Editor
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Templates</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Choose a template to get started with your AI agent configuration.
            {' '}
            <span className="text-sm">({templates.length} templates available)</span>
          </p>
        </div>

        <TemplateGrid templates={templates} categories={categories} />
      </main>
    </div>
  );
}
