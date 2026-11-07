
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tueste Norte Club",
  description: "Área de socios de Tueste Norte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-50">
        <header className="border-b border-stone-200 bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-xl font-bold text-amber-900">
              Tueste Norte ☕
            </Link>

            <div className="flex gap-6 text-sm font-medium text-stone-700">
              <Link href="/" className="hover:text-amber-800">
                Inicio
              </Link>
              <Link href="/metodos" className="hover:text-amber-800">
                Métodos
              </Link>
            </div>
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-stone-200 bg-white py-6 text-center text-sm text-stone-500">
          © 2026 Tueste Norte Club
        </footer>
      </body>
    </html>
  );
}
