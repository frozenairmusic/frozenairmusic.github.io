'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center items-center gap-8 text-sm uppercase tracking-[0.2rem]">
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

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-between items-center">
          <div className="text-xs uppercase tracking-[0.2rem] text-white">Menu</div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed left-0 right-0 top-[57px] h-[calc(100vh-57px)] bg-black z-40 overflow-y-auto">
          <div className="w-full pt-8 pb-16">
            <ul className="flex flex-col items-center gap-8 text-2xl uppercase tracking-[0.4rem] px-6">
              <li>
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className={`transition-all duration-300 block py-4 ${
                  isActive('/') 
                    ? 'text-white' 
                    : 'text-zinc-300 hover:text-white'
                }`}
                style={isActive('/') ? { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' } : {}}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/discography" 
                onClick={handleLinkClick}
                className={`transition-all duration-300 block py-4 ${
                  isActive('/discography') 
                    ? 'text-white' 
                    : 'text-zinc-300 hover:text-white'
                }`}
                style={isActive('/discography') ? { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' } : {}}
              >
                Discography
              </Link>
            </li>
            <li>
              <Link 
                href="/podcast" 
                onClick={handleLinkClick}
                className={`transition-all duration-300 block py-4 ${
                  isActive('/podcast') 
                    ? 'text-white' 
                    : 'text-zinc-300 hover:text-white'
                }`}
                style={isActive('/podcast') ? { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' } : {}}
              >
                Podcast
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={handleLinkClick}
                className={`transition-all duration-300 block py-4 ${
                  isActive('/contact') 
                    ? 'text-white' 
                    : 'text-zinc-300 hover:text-white'
                }`}
                style={isActive('/contact') ? { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' } : {}}
              >
                Contact
              </Link>
            </li>
          </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
