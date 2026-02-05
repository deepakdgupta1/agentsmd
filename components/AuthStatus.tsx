"use client";

import { useSession } from "next-auth/react";
import { SignInButton } from "./SignInButton";
import { UserMenu } from "./UserMenu";

export function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  if (session?.user) {
    return <UserMenu />;
  }

  return <SignInButton />;
}
