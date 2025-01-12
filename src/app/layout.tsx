import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ThemeProvider from '../components/theme-provider';
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Snippify This! - UI Snippets Collection",
  description: "A collection of UI snippets, animations, and cool components for your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-100 text-black dark:bg-zinc-950 dark:text-white antialiased w-full max-w-7xl mx-auto px-6 lg:px-auto`}
      >
        <ThemeProvider>
        <Header />
        <Toaster position='top-center' richColors expand={false} closeButton duration={5000} />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}


