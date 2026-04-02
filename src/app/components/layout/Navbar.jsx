// src/app/components/layout/Navbar.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'منتجاتنا', href: '#services' },
  { label: 'المشاريع', href: '#projects' },
  { label: 'من نحن', href: '#about' },
  { label: 'اتصل بنا', href: '#contact' },
];

function ViewLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="View فيو - الرئيسية">
      <span className="relative flex items-center justify-center w-10 h-10 flex-shrink-0">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <polygon
            points="20,2 38,20 20,38 2,20"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="1.5"
            className="transition-all duration-500 group-hover:stroke-[2]"
          />
          <polygon
            points="20,9 31,20 20,31 9,20"
            fill="url(#goldFill)"
            opacity="0.15"
          />
          <polygon
            points="20,9 31,20 20,31 9,20"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="1"
          />
          <circle cx="20" cy="20" r="2.5" fill="url(#goldGrad)" />
          <line x1="20" y1="9" x2="20" y2="31" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.5" />
          <line x1="9" y1="20" x2="31" y2="20" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.5" />
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e8c97a" />
              <stop offset="50%" stopColor="#C9A96E" />
              <stop offset="100%" stopColor="#9a7140" />
            </linearGradient>
            <linearGradient id="goldFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C9A96E" />
              <stop offset="100%" stopColor="#9a7140" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className="text-xl font-bold tracking-[0.15em] uppercase text-transparent bg-clip-text"
          style={{ 
            backgroundImage: 'linear-gradient(135deg, #e8c97a 0%, #C9A96E 50%, #9a7140 100%)', 
            fontFamily: "'Cormorant Garamond', serif" 
          }}
        >
          VIEW
        </span>
        <span
          className="text-sm tracking-widest dark:text-stone-300 text-stone-600"
          style={{ fontFamily: "'Tajawal', sans-serif", letterSpacing: '0.2em' }}
        >
          فيو
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileOpen) return;

    const handler = (e) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(e.target) &&
        hamburgerRef.current && 
        !hamburgerRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        role="banner"
        dir="rtl"
        className="fixed top-0 right-0 left-0 z-50 bg-white dark:bg-[#393636] border-b border-stone-200 dark:border-stone-800 py-5"
      >
        {/* Top gold accent line */}
        <div
          className="absolute top-0 right-0 left-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #C9A96E 30%, #e8c97a 50%, #C9A96E 70%, transparent 100%)'
          }}
        />

        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4"
          aria-label="التنقل الرئيسي"
        >
          <ViewLogo />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 list-none" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    activeLink === link.href
                      ? 'text-[#C9A96E]'
                      : 'dark:text-stone-300 text-stone-700 hover:text-[#C9A96E] dark:hover:text-[#e8c97a]'
                  }`}
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                  aria-current={activeLink === link.href ? 'page' : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 right-4 left-4 h-px transition-all duration-300 ${
                      activeLink === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                    style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-[#0d0d0d] dark:text-[#0d0d0d] rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,169,110,0.4)] active:scale-95"
              style={{
                fontFamily: "'Tajawal', sans-serif",
                background: 'linear-gradient(135deg, #e8c97a 0%, #C9A96E 50%, #b8945e 100%)',
              }}
            >
              <span>احجز استشارة</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-sm transition-all duration-300 dark:text-stone-300 text-stone-700 hover:text-[#C9A96E]"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              <span className={`block w-6 h-px transition-all duration-400 origin-center ${mobileOpen ? 'rotate-45 translate-y-[5px] bg-[#C9A96E]' : 'bg-current'}`} />
              <span className={`block h-px transition-all duration-300 ${mobileOpen ? 'w-0 opacity-0' : 'w-4 opacity-100 bg-current'}`} />
              <span className={`block w-6 h-px transition-all duration-400 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[5px] bg-[#C9A96E]' : 'bg-current'}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <nav
        id="mobile-menu"
        ref={mobileMenuRef}
        dir="rtl"
        className={`fixed top-0 right-0 z-50 h-full w-[min(85vw,340px)] lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'var(--mobile-menu-bg)' }}
      >
        <div className="flex flex-col h-full px-8 py-6">
          <div className="flex items-center justify-between mb-10">
            <ViewLogo />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-[#C9A96E]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="w-full h-px mb-8" style={{ background: 'linear-gradient(90deg, #C9A96E, transparent)' }} />

          <ul className="flex flex-col gap-1 list-none flex-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : '0ms',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)',
                }}
              >
                <a
                  href={link.href}
                  onClick={() => { setActiveLink(link.href); setMobileOpen(false); }}
                  className={`flex items-center gap-3 py-3.5 px-2 text-base font-medium border-b transition-all duration-200 group ${
                    activeLink === link.href
                      ? 'text-[#C9A96E] border-[#C9A96E]/30'
                      : 'dark:text-stone-300 text-stone-700 border-stone-200/30 dark:border-stone-700/30 hover:text-[#C9A96E] hover:border-[#C9A96E]/20'
                  }`}
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`flex-shrink-0 transition-transform ${activeLink === link.href ? 'text-[#C9A96E]' : 'text-stone-400 group-hover:translate-x-[-3px]'}`}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <a
                 href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-[#0d0d0d] rounded-sm transition-all hover:shadow-[0_0_24px_rgba(201,169,110,0.5)] active:scale-95"
              style={{
                fontFamily: "'Tajawal', sans-serif",
                background: 'linear-gradient(135deg, #e8c97a 0%, #C9A96E 50%, #b8945e 100%)',
              }}
            >
              احجز استشارة مجانية
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <p className="text-center text-xs dark:text-stone-500 text-stone-400 mt-4" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              متاحون على مدار الساعة · ٩٢٠٠٠٠٠٠٠
            </p>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        :root { --mobile-menu-bg: rgba(255, 255, 255, 0.98); }
        .dark { --mobile-menu-bg: rgba(10, 10, 10, 0.98); }
      `}</style>
    </>
  );
}