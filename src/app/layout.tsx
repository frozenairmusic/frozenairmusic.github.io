import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics.component";
import Navigation from "@/components/Navigation.component";
import { ThemeProvider } from "@/components/ThemeProvider.component";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme) {
                    document.documentElement.classList.add(savedTheme);
                  } else {
                    const hour = new Date().getHours();
                    const isDaytime = hour >= 6 && hour < 18;
                    document.documentElement.classList.add(isDaytime ? 'light' : 'dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <GoogleAnalytics />
          <Navigation />
          {children}
          <footer className="py-12 text-center text-[10px] tracking-[0.3rem] uppercase transition-colors duration-300" style={{ color: 'var(--text-tertiary)' }}>
            © 2026 Frozen Air — Built for the Void
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
