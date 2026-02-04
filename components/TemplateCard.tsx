import Link from 'next/link';
import { Template } from '@/lib/templates';

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link
      href={`/templates/${template.id}`}
      className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold">{template.title}</h3>
        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
          {template.category}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {template.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {template.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded"
          >
            {tag}
          </span>
        ))}
        {template.tags.length > 3 && (
          <span className="text-xs px-2 py-1 text-gray-500">
            +{template.tags.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{template.lines} lines</span>
        <span>v{template.version}</span>
      </div>
    </Link>
  );
}
