import { getTemplates, getCategories } from '@/lib/templates';
import { TemplateGrid } from '@/components/TemplateGrid';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Browse Templates - AGENTS.md Generator',
  description: 'Browse AGENTS.md templates for different AI agent roles',
};

export default function BrowsePage() {
  const templates = getTemplates();
  const categories = getCategories();

  return (
    <div className="min-h-screen">
      <Header activePage="browse" />

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
