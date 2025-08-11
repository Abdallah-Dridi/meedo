// src/app/layout.tsx
import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Initialize the 'inter' variable after the import
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Meedo",
  description: "Automate customer support for solo founders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
