
import type { Metadata } from "next";
import Image from "next/image";
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
  title: "TuesteNorte | Club de cafés de origen",
  description: "Área privada de socios de TuesteNorte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50">
        <header className="border-b border-stone-200 bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <Link
              href="/"
              className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-amber-800"
              aria-label="TuesteNorte - Ir al inicio"
            >
              <Image
                src="/images/TuesteNorte.png"
                alt="TuesteNorte - Cafés de origen"
                width={180}
                height={120}
                priority
                className="h-20 w-auto object-contain"
              />
            </Link>

            <div className="flex gap-4 text-sm font-medium text-stone-700 sm:gap-6">
              <Link href="/" className="hover:text-amber-800">
                Inicio
              </Link>

              <Link href="/metodos" className="hover:text-amber-800">
                Métodos
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-stone-200 bg-white py-6 text-center text-sm text-stone-500">
          © 2026 TuesteNorte · Cafés de origen
        </footer>
      </body>
    </html>
  );
}
