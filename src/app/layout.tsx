// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // Import the provider


// Removing the unused 'inter' variable to fix ESLint warning
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meedo",
  description: "Automate customer support for solo founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}