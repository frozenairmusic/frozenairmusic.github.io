'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './ThemeProvider.component';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300" style={{ background: 'var(--nav-bg)', borderColor: 'var(--border-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-8 text-sm uppercase tracking-[0.2rem] relative">
          <ul className="flex gap-8">
            <li>
              <Link 
                href="/" 
                className="transition-all duration-300"
                style={{
                  color: isActive('/') ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  textShadow: isActive('/') ? '0 0 8px currentColor, 0 0 16px currentColor' : 'none'
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/discography" 
                className="transition-all duration-300"
                style={{
                  color: isActive('/discography') ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  textShadow: isActive('/discography') ? '0 0 8px currentColor, 0 0 16px currentColor' : 'none'
                }}
              >
                Discography
              </Link>
            </li>
            <li>
              <Link 
                href="/podcast" 
                className="transition-all duration-300"
                style={{
                  color: isActive('/podcast') ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  textShadow: isActive('/podcast') ? '0 0 8px currentColor, 0 0 16px currentColor' : 'none'
                }}
              >
                Podcast
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="transition-all duration-300"
                style={{
                  color: isActive('/contact') ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  textShadow: isActive('/contact') ? '0 0 8px currentColor, 0 0 16px currentColor' : 'none'
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="absolute right-0 w-9 h-9 flex items-center justify-center transition-colors duration-300 border rounded-md"
            style={{ 
              borderColor: 'var(--border-primary)',
              background: 'var(--glass-bg)'
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-between items-center">
          <div className="text-xs uppercase tracking-[0.2rem]" style={{ color: 'var(--text-primary)' }}>Menu</div>
          <div className="flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center transition-colors duration-300 border rounded-md"
              style={{ 
                borderColor: 'var(--border-primary)',
                background: 'var(--glass-bg)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 transition-all duration-300" style={{ backgroundColor: 'var(--text-primary)', transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}></span>
              <span className="w-6 h-0.5 transition-all duration-300" style={{ backgroundColor: 'var(--text-primary)', opacity: isMenuOpen ? 0 : 1 }}></span>
              <span className="w-6 h-0.5 transition-all duration-300" style={{ backgroundColor: 'var(--text-primary)', transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed left-0 right-0 top-[57px] h-[calc(100vh-57px)] z-40 overflow-y-auto transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
          <div className="w-full pt-8 pb-16">
            <ul className="flex flex-col items-center gap-8 text-2xl uppercase tracking-[0.4rem] px-6">
              <li>
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className="transition-all duration-300 block py-4"
                style={{
                  color: isActive('/') ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textShadow: isActive('/') ? '0 0 8px currentColor, 0 0 16px currentColor' : 'none'
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/discography" 
                onClick={handleLinkClick}
                className="transition-all duration-300 block py-4"
                style={{
                  color: isActive('/discography') ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textShadow: isActive('/discography') ? '0 0 8px currentColor, 0 0 16px currentColor' : 'none'
                }}
              >
                Discography
              </Link>
            </li>
            <li>
              <Link 
                href="/podcast" 
                onClick={handleLinkClick}
                className="transition-all duration-300 block py-4"
                style={{
                  color: isActive('/podcast') ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textShadow: isActive('/podcast') ? '0 0 8px currentColor, 0 0 16px currentColor' : 'none'
                }}
              >
                Podcast
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={handleLinkClick}
                className="transition-all duration-300 block py-4"
                style={{
                  color: isActive('/contact') ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textShadow: isActive('/contact') ? '0 0 8px currentColor, 0 0 16px currentColor' : 'none'
                }}
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
