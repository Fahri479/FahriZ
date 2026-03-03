'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-electric to-gold bg-clip-text text-transparent">
        Muhammad Fahri
      </h1>
      <p className="mt-6 text-xl text-gray-400">
        Trader Saham | Crypto Strategist | Risk Manager
      </p>
      <p className="mt-4 text-gray-500">
        Membangun generasi investor yang cerdas dan disiplin.
      </p>
      <div className="flex gap-4 mt-8">
        <Link href="/market" className="btn-primary">Explore Market</Link>
        <Link href="/ebook" className="btn-secondary">Beli Ebook</Link>
      </div>
    </section>
  );
}
