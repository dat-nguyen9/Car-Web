'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Phone, ArrowRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Refined, concise luxury automotive navigation items (prevents multi-line wrapping)
  const navLinks = [
    { label: 'Dòng xe', href: '/models' },
    { label: 'Kho xe sẵn', href: '/inventory' },
    { label: 'Dịch vụ', href: '/service' },
    { label: 'Đại lý', href: '/dealers' },
    { label: 'Tin tức', href: '/news' },
    { label: 'Về chúng tôi', href: '/about' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/models?search=${encodeURIComponent(searchQuery.trim())}`;
      setSearchOpen(false);
    }
  };

  // On home page: transparent over dark hero -> then dark glassmorphism when scrolled
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-gradient-to-b from-[#081e18]/90 via-[#081e18]/40 to-transparent py-5 text-white'
            : 'bg-[#0e3a2f]/95 backdrop-blur-md py-3.5 text-white border-b border-[#78f59c]/20 shadow-lg'
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            {/* Logo: Quang Anh SKODA with Refined Monogram Emblem */}
            <Link href="/" className="flex items-center gap-3.5 group shrink-0">
              <div
                className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-sm border flex items-center justify-center transition-all duration-300 ${
                  isTransparent
                    ? 'border-white/40 text-white group-hover:border-[#78f59c] group-hover:bg-[#78f59c] group-hover:text-[#081e18]'
                    : 'border-[#78f59c]/40 text-white group-hover:border-[#78f59c] group-hover:bg-[#78f59c] group-hover:text-[#081e18]'
                }`}
              >
                <span className="font-bold text-xs sm:text-sm tracking-widest font-mono">QA</span>
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#78f59c] shadow-[0_0_8px_#78f59c]" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs sm:text-sm tracking-[0.22em] uppercase whitespace-nowrap text-white">
                    QUANG ANH
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[#78f59c]">
                    SKODA
                  </span>
                </div>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.26em] text-emerald-100/70 whitespace-nowrap">
                  European Luxury Automotive
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Single Line, Never Wraps) */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[12px] uppercase tracking-[0.14em] font-medium whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1.5 transition-colors group ${
                      isActive
                        ? 'text-[#78f59c] font-semibold'
                        : 'text-zinc-200 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Minimalist hairline active / hover indicator */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] transition-all duration-300 ${
                        isActive
                          ? 'bg-[#78f59c] opacity-100 shadow-[0_0_8px_#78f59c]'
                          : 'bg-[#78f59c] opacity-0 group-hover:opacity-100 group-hover:scale-x-100 scale-x-0 origin-left'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Hub: Search, Hotline, Test Drive CTA */}
            <div className="hidden sm:flex items-center gap-3.5 xl:gap-5 shrink-0">
              {/* Search Trigger */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                title="Tìm kiếm xe"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Direct Hotline Pill (Restrained Luxury Aesthetic) */}
              <a
                href="tel:0988333666"
                className="hidden xl:inline-flex items-center gap-2 text-[11px] font-mono tracking-wider px-3.5 py-1.5 rounded-full border border-[#78f59c]/30 text-zinc-100 hover:text-white hover:border-[#78f59c] bg-[#081e18]/60 transition-all whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#78f59c]" />
                <span className="font-medium">0988.333.666</span>
              </a>

              {/* Primary Test Drive CTA Button - Electric Green & Dark Contrast */}
              <Link
                href="/test-drive"
                className="px-5 sm:px-6 py-2.5 rounded-sm text-[11px] uppercase tracking-[0.14em] font-bold whitespace-nowrap transition-all duration-300 bg-[#78f59c] text-[#081e18] hover:bg-white hover:text-[#0e3a2f] shadow-[0_0_20px_rgba(120,245,156,0.3)] hover:shadow-lg"
              >
                Đăng ký lái thử
              </Link>
            </div>

            {/* Mobile Actions: Search & Hamburger */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full text-white hover:bg-white/10"
                aria-label="Tìm kiếm"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 focus:outline-none text-white hover:bg-white/10 rounded-sm cursor-pointer"
                aria-label="Mở menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="bg-white text-black border-t border-black/10 shadow-xl px-4 py-4 animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="w-4 h-4 text-zinc-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Nhập tên dòng xe (Kodiaq, Karoq, Octavia RS, Kushaq, Slavia...)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-24 py-2.5 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-black rounded-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 px-4 py-1.5 bg-black text-white text-[11px] uppercase tracking-wider font-medium rounded-sm hover:bg-zinc-800"
                >
                  Tìm kiếm
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0d0e12] text-white flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm border border-white text-white flex items-center justify-center font-bold text-xs">
                QA
              </div>
              <span className="font-semibold text-xs tracking-[0.2em] uppercase">
                Quang Anh SKODA
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Đóng menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links with large editorial typography */}
          <nav className="my-auto py-8 flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-wide text-zinc-200 hover:text-white flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-zinc-600 group-hover:text-emerald-400">
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom Drawer Actions */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <Link
              href="/test-drive"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-white text-black hover:bg-zinc-200 py-3.5 text-center text-xs uppercase tracking-widest font-semibold block rounded-sm transition-colors"
            >
              Đăng ký lái thử trực tuyến
            </Link>
            <div className="flex items-center justify-between text-xs text-zinc-400 pt-2">
              <a href="tel:0988333666" className="flex items-center gap-1.5 text-white">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hotline: 0988.333.666</span>
              </a>
              <span>Hà Nội &bull; TP.HCM &bull; Đà Nẵng</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
