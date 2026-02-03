export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          AGENTS.md Generator
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Create optimized AGENTS.md configuration files for AI agents in different roles
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/browse"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Browse Templates
          </a>
          <a
            href="/editor"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Create New
          </a>
        </div>
      </div>
    </div>
  );
}
