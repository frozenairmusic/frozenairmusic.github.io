import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics.component";
import Navigation from "@/components/Navigation.component";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frozen Air | Electronic Music",
  description: "A synthesis of absolute zero. Frozen Air explores the tension between organic decay and crystalline digital structures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navigation />
        {children}
        <footer className="py-12 text-center text-[10px] tracking-[0.3rem] text-zinc-600 uppercase">
          © 2026 Frozen Air — Built for the Void
        </footer>
      </body>
    </html>
  );
}
