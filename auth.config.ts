import type { NextAuthConfig } from "next-auth";

// Edge-compatible auth configuration
// This file is used by middleware (runs on Edge runtime)
// The Prisma adapter cannot run on Edge, so we keep it separate in auth.ts

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const protectedPaths = ["/dashboard", "/my-templates"];
      const isProtectedRoute = protectedPaths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );

      if (isProtectedRoute && !isLoggedIn) {
        return false; // Redirect to login
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: [], // Providers added in auth.ts (not edge-compatible with adapter)
} satisfies NextAuthConfig;
