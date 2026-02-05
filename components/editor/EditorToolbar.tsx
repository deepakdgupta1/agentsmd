'use client';

interface EditorToolbarProps {
  templateName: string;
  isDirty: boolean;
  isSaving: boolean;
  isAuthenticated: boolean;
  copied: boolean;
  onNew: () => void;
  onCopy: () => void;
  onDownload: () => void;
  onSave: () => void;
}

export function EditorToolbar({
  templateName,
  isDirty,
  isSaving,
  isAuthenticated,
  copied,
  onNew,
  onCopy,
  onDownload,
  onSave,
}: EditorToolbarProps) {
  const saveTooltipId = 'save-tooltip';

  return (
    <div
      role="toolbar"
      aria-label="Editor actions"
      className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
          {templateName || 'Untitled'}
        </span>
        {isDirty && (
          <span className="text-xs text-amber-600 dark:text-amber-400 shrink-0">
            (unsaved)
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onNew}
          aria-label="New template"
          className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          New
        </button>
        <button
          onClick={onCopy}
          aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
          className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button
          onClick={onDownload}
          aria-label="Download as AGENTS.md"
          className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Download
        </button>
        <div className="relative group">
          <button
            onClick={onSave}
            disabled={isSaving}
            aria-label={isAuthenticated ? 'Save template' : 'Sign in to save templates'}
            aria-describedby={!isAuthenticated ? saveTooltipId : undefined}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
          {!isAuthenticated && (
            <div
              id={saveTooltipId}
              role="tooltip"
              className="absolute right-0 top-full mt-1 px-2 py-1 text-xs bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10"
            >
              Sign in to save templates
            </div>
          )}
        </div>
      </div>

      {/* Live region for copy feedback */}
      <div aria-live="polite" className="sr-only">
        {copied ? 'Content copied to clipboard' : ''}
      </div>
    </div>
  );
}
