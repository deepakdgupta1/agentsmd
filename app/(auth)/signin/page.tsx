import { SignInButton } from "@/components/SignInButton";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full p-8">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white">
            AGENTS.md
          </Link>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Generator
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <h1 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">
            Welcome back
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-sm">
            Sign in to save and manage your custom templates.
          </p>

          <div className="flex justify-center">
            <SignInButton />
          </div>

          <p className="mt-6 text-xs text-center text-gray-500 dark:text-gray-400">
            By signing in, you agree to our{" "}
            <a href="/terms" className="underline hover:text-gray-700 dark:hover:text-gray-300">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-gray-700 dark:hover:text-gray-300">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Sign in with Google to get started.
          </span>
        </p>
      </div>
    </div>
  );
}
