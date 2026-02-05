import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // Match all routes except:
  // - Static files (_next/static, _next/image)
  // - Favicon
  // - Auth API routes (handled by Auth.js)
  // - Public assets
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/auth|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
