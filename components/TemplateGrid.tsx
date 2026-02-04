'use client';

import { useState } from 'react';
import { Template } from '@/lib/templates';
import { TemplateCard } from './TemplateCard';
import { CategoryFilter } from './CategoryFilter';

interface TemplateGridProps {
  templates: Template[];
  categories: string[];
}

export function TemplateGrid({ templates, categories }: TemplateGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTemplates = selectedCategory
    ? templates.filter((t) => t.category === selectedCategory)
    : templates;

  return (
    <div>
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      {filteredTemplates.length === 0 ? (
        <p className="text-center text-gray-500 py-12">
          No templates found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      )}
    </div>
  );
}
