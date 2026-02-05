'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { EditorPreview } from './EditorPreview';
import { EditorToolbar } from './EditorToolbar';
import { SaveModal } from './SaveModal';

const MarkdownEditor = dynamic(
  () => import('./MarkdownEditor').then((mod) => mod.MarkdownEditor),
  { ssr: false, loading: () => <div className="h-full bg-white dark:bg-gray-950 animate-pulse" /> }
);

interface EditorShellProps {
  initialContent: string;
  initialName: string;
  initialSavedId?: string;
  baseTemplateId?: string;
}

export function EditorShell({
  initialContent,
  initialName,
  initialSavedId,
  baseTemplateId,
}: EditorShellProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const isAuthenticated = !!session?.user;

  const [content, setContent] = useState(initialContent);
  const [savedId, setSavedId] = useState<string | undefined>(initialSavedId);
  const [templateName, setTemplateName] = useState(initialName);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  // Refs for save handler to avoid stale closures
  const contentRef = useRef(content);
  const templateNameRef = useRef(templateName);
  const savedIdRef = useRef(savedId);
  useEffect(() => { contentRef.current = content; }, [content]);
  useEffect(() => { templateNameRef.current = templateName; }, [templateName]);
  useEffect(() => { savedIdRef.current = savedId; }, [savedId]);

  // Warn about unsaved changes before leaving
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [isDirty]);

  const handleContentChange = useCallback((value: string) => {
    setContent(value);
    setIsDirty(true);
  }, []);

  const handleNew = useCallback(() => {
    if (isDirty && !confirm('You have unsaved changes. Start a new template?')) {
      return;
    }
    setContent('# AGENTS.md\n\n');
    setTemplateName('Untitled');
    setSavedId(undefined);
    setIsDirty(false);
    setSaveError(null);
    router.replace('/editor');
  }, [isDirty, router]);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(contentRef.current);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleDownload = useCallback(() => {
    const blob = new Blob([contentRef.current], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AGENTS.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  const performUpdate = useCallback(async (id: string, name: string, body: string) => {
    setIsSaving(true);
    setSaveError(null);
    try {
      const res = await fetch(`/api/templates/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, content: body }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save');
      }
      setIsDirty(false);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setIsSaving(false);
    }
  }, []);

  const handleSave = useCallback(() => {
    if (!isAuthenticated) {
      router.push('/signin?callbackUrl=/editor');
      return;
    }
    const currentSavedId = savedIdRef.current;
    if (currentSavedId) {
      performUpdate(currentSavedId, templateNameRef.current, contentRef.current);
    } else {
      setShowSaveModal(true);
    }
  }, [isAuthenticated, router, performUpdate]);

  const handleModalSave = useCallback(async (name: string, description: string) => {
    setIsSaving(true);
    setSaveError(null);
    try {
      const res = await fetch('/api/templates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          content: contentRef.current,
          description: description || undefined,
          baseTemplateId,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.errors?.[0]?.message || data.error || 'Failed to save');
      }
      const data = await res.json();
      setSavedId(data.id);
      setTemplateName(name);
      setIsDirty(false);
      setShowSaveModal(false);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setIsSaving(false);
    }
  }, [baseTemplateId]);

  return (
    <div className="flex flex-col h-[calc(100vh-65px)]">
      <EditorToolbar
        templateName={templateName}
        isDirty={isDirty}
        isSaving={isSaving}
        isAuthenticated={isAuthenticated}
        copied={copied}
        onNew={handleNew}
        onCopy={handleCopy}
        onDownload={handleDownload}
        onSave={handleSave}
      />

      {saveError && (
        <div className="px-4 py-2 bg-red-50 dark:bg-red-950 border-b border-red-200 dark:border-red-800 text-sm text-red-700 dark:text-red-300" role="alert">
          {saveError}
        </div>
      )}

      {/* Mobile tab switcher */}
      <div className="flex md:hidden border-b border-gray-200 dark:border-gray-800" role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === 'edit'}
          onClick={() => setActiveTab('edit')}
          className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
            activeTab === 'edit'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Edit
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'preview'}
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
            activeTab === 'preview'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Preview
        </button>
      </div>

      {/* Desktop: side-by-side, Mobile: tab-based */}
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2">
        <div
          className={`min-h-0 overflow-hidden border-r border-gray-200 dark:border-gray-800 ${
            activeTab !== 'edit' ? 'hidden md:block' : ''
          }`}
        >
          <MarkdownEditor value={content} onChange={handleContentChange} />
        </div>
        <div
          className={`min-h-0 overflow-hidden ${
            activeTab !== 'preview' ? 'hidden md:block' : ''
          }`}
        >
          <EditorPreview content={content} />
        </div>
      </div>

      {showSaveModal && (
        <SaveModal
          defaultName={
            templateName && templateName !== 'Untitled'
              ? `${templateName} - Custom`
              : ''
          }
          onSave={handleModalSave}
          onClose={() => {
            setShowSaveModal(false);
            setSaveError(null);
          }}
          isSaving={isSaving}
          error={saveError}
        />
      )}
    </div>
  );
}
