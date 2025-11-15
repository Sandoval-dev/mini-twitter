// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">MiniTwitter</Link>
        <nav>
          <Link href="/login" className="mr-4">Giriş</Link>
          <Link href="/profile">Profil</Link>
        </nav>
      </div>
    </header>
  );
}
