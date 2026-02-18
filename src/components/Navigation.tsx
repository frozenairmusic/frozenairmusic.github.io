'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex justify-center items-center gap-8 text-sm uppercase tracking-[0.2rem]">
          <li>
            <Link 
              href="/" 
              className={`transition-all duration-300 ${
                isActive('/') 
                  ? 'text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
              style={isActive('/') ? { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' } : {}}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/discography" 
              className={`transition-all duration-300 ${
                isActive('/discography') 
                  ? 'text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
              style={isActive('/discography') ? { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' } : {}}
            >
              Discography
            </Link>
          </li>
          <li>
            <Link 
              href="/podcast" 
              className={`transition-all duration-300 ${
                isActive('/podcast') 
                  ? 'text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
              style={isActive('/podcast') ? { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' } : {}}
            >
              Podcast
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
              style={isActive('/contact') ? { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' } : {}}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
