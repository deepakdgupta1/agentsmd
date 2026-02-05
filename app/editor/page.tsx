import { redirect } from 'next/navigation';
import { Header } from '@/components/Header';
import { EditorShell } from '@/components/editor/EditorShell';
import { getTemplateById, getTemplateContent } from '@/lib/templates';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';

interface EditorPageProps {
  searchParams: Promise<{ template?: string; saved?: string }>;
}

export default async function EditorPage({ searchParams }: EditorPageProps) {
  const params = await searchParams;
  let initialContent = '# AGENTS.md\n\n';
  let initialName = 'Untitled';
  let initialSavedId: string | undefined;
  let baseTemplateId: string | undefined;

  // Load from curated template
  if (params.template) {
    const template = getTemplateById(params.template);
    if (template) {
      initialContent = getTemplateContent(template.filename);
      initialName = template.title;
      baseTemplateId = template.id;
    }
  }

  // Load from saved template (auth + ownership required)
  if (params.saved) {
    const session = await auth();
    if (!session?.user?.id) {
      redirect('/signin?callbackUrl=/editor?saved=' + encodeURIComponent(params.saved));
    }

    const saved = await prisma.savedTemplate.findUnique({
      where: { id: params.saved },
    });

    if (!saved || saved.userId !== session.user.id) {
      redirect('/editor');
    }

    initialContent = saved.content;
    initialName = saved.name;
    initialSavedId = saved.id;
    baseTemplateId = saved.baseTemplateId ?? undefined;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header activePage="editor" />
      <EditorShell
        initialContent={initialContent}
        initialName={initialName}
        initialSavedId={initialSavedId}
        baseTemplateId={baseTemplateId}
      />
    </div>
  );
}
