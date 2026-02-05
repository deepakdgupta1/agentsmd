import Link from "next/link";
import { AuthStatus } from "./AuthStatus";

interface HeaderProps {
  activePage?: "browse" | "editor";
}

export function Header({ activePage }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          AGENTS.md
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/browse"
            className={
              activePage === "browse"
                ? "text-blue-600 dark:text-blue-400 font-medium"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            }
          >
            Browse
          </Link>
          <Link
            href="/editor"
            className={
              activePage === "editor"
                ? "text-blue-600 dark:text-blue-400 font-medium"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            }
          >
            Editor
          </Link>
          <AuthStatus />
        </nav>
      </div>
    </header>
  );
}
