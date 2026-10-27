'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark';
}

export default function Breadcrumb({ items, theme = 'dark' }: BreadcrumbProps) {
  const isLight = theme === 'light';

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-2 text-xs">
        <li className="flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-1.5 transition-colors ${
              isLight ? 'text-zinc-500 hover:text-black' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Trang Chủ</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight
                className={`w-3 h-3 ${isLight ? 'text-zinc-400' : 'text-zinc-600'}`}
              />
              {isLast || !item.href ? (
                <span
                  className={`font-medium ${
                    isLight ? 'text-black' : 'text-white'
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isLight ? 'text-zinc-500 hover:text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
