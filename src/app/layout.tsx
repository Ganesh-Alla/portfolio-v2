import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import MainLayout from "@/components/Main";
import { AnimatePresence } from "framer-motion";
import CursorTrailCanvas from "@/components/utility/cursor-trail-canvas";
import React from "react";
import { Toaster } from '@/components/utility/sonner'


export const metadata: Metadata = {
  title: "Ganesh Alla",
  description: "A NextJS Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const router = useRouter();
  return (
    <html lang="en">
      <body className="bg-background text-zinc-950 antialiased selection:bg-accent selection:text-background">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <MainLayout>
          <AnimatePresence mode="wait" initial={false}>
            <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full hidden lg:block" />
          </AnimatePresence>
            {children}
            <Toaster />
        </MainLayout>
      </ThemeProvider>
      </body>
    </html>
  );
}
