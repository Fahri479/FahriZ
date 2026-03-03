'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 backdrop-blur-md bg-white/5 border-b border-white/10 px-6 py-4 flex justify-between">
      <div className="font-bold bg-gradient-to-r from-electric to-gold bg-clip-text text-transparent">
        Muhammad Fahri
      </div>
      <div className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/market">Market</Link>
        <Link href="/ebook">Ebook</Link>
      </div>
    </nav>
  );
}
