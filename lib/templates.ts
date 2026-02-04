import fs from 'fs';
import path from 'path';

export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  useCase: string;
  filename: string;
  version: string;
  lines: number;
  createdAt: string;
  updatedAt: string;
}

const templatesDir = path.join(process.cwd(), 'templates');

export function getTemplates(): Template[] {
  const jsonPath = path.join(templatesDir, 'templates.json');
  const data = fs.readFileSync(jsonPath, 'utf-8');
  return JSON.parse(data);
}

export function getTemplateById(id: string): Template | undefined {
  const templates = getTemplates();
  return templates.find((t) => t.id === id);
}

export function getTemplateContent(filename: string): string {
  const filePath = path.join(templatesDir, filename);
  return fs.readFileSync(filePath, 'utf-8');
}

export function getCategories(): string[] {
  const templates = getTemplates();
  const categories = new Set(templates.map((t) => t.category));
  return Array.from(categories).sort();
}
