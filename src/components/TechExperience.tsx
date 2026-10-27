'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ShieldCheck, Cpu, Smartphone, HeartHandshake } from 'lucide-react';
import { TECH_PILLARS } from '@/data/models';
import { gsap, useGSAP } from '@/lib/gsap';

export default function TechExperience() {
  const [activeTab, setActiveTab] = useState(0);

  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const activeImageRef = useRef<HTMLImageElement>(null);

  const images = [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85',
  ];

  const icons = [ShieldCheck, Cpu, Smartphone, HeartHandshake];

  useGSAP(
    () => {
      // Header entrance
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true,
          },
          y: 20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }

      // Media frame slide & scale reveal
      if (mediaRef.current) {
        gsap.from(mediaRef.current, {
          scrollTrigger: {
            trigger: mediaRef.current,
            start: 'top 80%',
            once: true,
          },
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }

      // Pillars list stagger entrance
      if (listRef.current) {
        gsap.from(listRef.current.children, {
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
            once: true,
          },
          x: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }
    },
    { scope: containerRef }
  );

  // Tab change smooth transition with GSAP
  useGSAP(
    () => {
      if (activeImageRef.current) {
        gsap.fromTo(
          activeImageRef.current,
          { opacity: 0.2, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
        );
      }
    },
    { dependencies: [activeTab], scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="technology"
      className="py-24 sm:py-32 bg-[#f8f9fb] text-zinc-950 border-b border-black/[0.06] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#165B4C] font-mono font-semibold">
            Kỹ Nghệ &amp; Đổi Mới
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
            Công nghệ tạo nên <span className="font-normal text-zinc-800">sự khác biệt</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            Mỗi chi tiết trên xe đều được tạo nên từ triết lý Simply Clever trứ danh kết hợp cùng những thành tựu công nghệ hỗ trợ lái và an toàn chủ động hàng đầu thế giới.
          </p>
        </div>

        {/* Split Layout: Left Media vs Right Interactive List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase (7 cols on lg) */}
          <div ref={mediaRef} className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-zinc-200/90 shadow-xl bg-zinc-100">
              <img
                ref={activeImageRef}
                src={images[activeTab]}
                alt={TECH_PILLARS[activeTab].title}
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Highlight badge on image */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] text-zinc-300 font-mono uppercase tracking-widest block">
                    Thông Số Tiêu Chuẩn
                  </span>
                  <span className="text-xl sm:text-2xl font-light text-white font-mono">
                    {TECH_PILLARS[activeTab].metric}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-400 font-mono">
                    {TECH_PILLARS[activeTab].subtext}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Pillars List (5 cols on lg) */}
          <div ref={listRef} className="lg:col-span-5 space-y-3">
            {TECH_PILLARS.map((tech, idx) => {
              const Icon = icons[idx];
              const isActive = activeTab === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-5 rounded-sm border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white border-black/40 shadow-md ring-1 ring-black/5'
                      : 'bg-white/60 border-zinc-200/70 hover:bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-9 h-9 rounded-sm flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold tracking-wide text-zinc-950">
                          {tech.title}
                        </h3>
                        <span className="text-[10px] font-mono text-zinc-400">0{idx + 1}</span>
                      </div>
                      <p className="text-xs text-zinc-500 font-light leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <Link
                href="/about"
                className="btn-primary-dark w-full text-center py-3.5 text-xs font-semibold uppercase tracking-wider block bg-zinc-950 text-white hover:bg-zinc-800 rounded-sm shadow-xs transition-colors"
              >
                Tìm Hiểu Thêm Về Triết Lý Thương Hiệu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
