import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGENTS.md Generator",
  description: "Create optimized AGENTS.md configuration files for AI agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
