'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="noise"></div>
      
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-normal mb-4 logo">
              4<span className="logo__secondary-color">0</span>
              <span className="logo__primary-color">4</span>
            </h1>
            <p className="text-xs uppercase tracking-[0.5rem] text-zinc-500 mb-8">
              Signal Lost
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 mb-8">
              The frequency you're searching for has dissolved into the void. 
              This signal does not exist in our crystalline structure.
            </p>
          </div>

          <Link 
            href="/"
            className="inline-block px-8 py-3 text-sm uppercase tracking-[0.3rem] text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
          >
            Return to Origin
          </Link>
        </div>
      </section>
    </>
  );
}
