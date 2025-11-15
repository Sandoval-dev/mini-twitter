// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mini Twitter",
  description: "Week1 - Mini Twitter"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
     <body className="bg-gray-100 min-h-screen">
        <header className="border-b bg-white">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-black">MiniTwitter</Link>
            <nav>
              <Link href="/login" className="mr-4 text-black">Giriş</Link>
              <Link href="/profile" className="text-black">Profil</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
