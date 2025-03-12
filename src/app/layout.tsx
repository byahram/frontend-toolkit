import { config } from "@/utils/config";
// import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/utils/ThemeProviders";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    absolute: config.blog.metadata.title.absolute,
    default: config.blog.metadata.title.default,
    template: config.blog.metadata.title.template,
  },
  description: config.blog.metadata.description,
  openGraph: {
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    // images: [
    //   signOgImageUrl({
    //     title: config.blog.name,
    //   }),
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen max-w-7xl bg-background text-foreground font-sans text-base leading-relaxed mx-auto p-0 antialiased",
          fontSans.variable
        )}
      >
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
