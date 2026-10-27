'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { VEHICLES_DATA } from '@/data/models';
import VehicleCard from './VehicleCard';
import { gsap, useGSAP } from '@/lib/gsap';

export default function VehicleGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const categories: { label: string; value: string }[] = [
    { label: 'Tất Cả Mẫu Xe', value: 'All' },
    { label: 'SUV Hạng Sang', value: 'SUV' },
    { label: 'Sedan Thể Thao', value: 'Sedan' },
    { label: 'Xe Thuần Điện', value: 'Xe điện' },
    { label: 'Xe Thể Thao vRS', value: 'Xe thể thao' },
  ];

  const filteredVehicles = useMemo(() => {
    if (activeCategory === 'All') return VEHICLES_DATA;
    return VEHICLES_DATA.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  // Entrance animation when user scrolls into view (plays once only)
  useGSAP(
    () => {
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

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            once: true,
          },
          y: 25,
          opacity: 0,
          stagger: 0.06,
          duration: 0.7,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }
    },
    { scope: containerRef }
  );

  // Smooth fade-in ONLY when user clicks a category tab (skips initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.45,
          ease: 'power2.out',
          clearProps: 'all',
        }
      );
    }
  }, [activeCategory]);

  return (
    <section
      ref={containerRef}
      id="models-section"
      className="py-20 sm:py-28 bg-[#fafbfc] border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-mono font-medium">
              Bộ Sưu Tập Xe Mới Nhất
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
              Khám phá những mẫu xe <br />
              <span className="font-normal text-zinc-900">mới nhất của chúng tôi</span>
            </h2>
            <p className="text-sm text-zinc-600 font-light leading-relaxed">
              Trải nghiệm độ hoàn thiện tinh xảo, không gian tiện nghi vượt trội và cảm giác lái đầm chắc đậm chất cơ khí Châu Âu.
            </p>
          </div>

          <Link
            href="/models"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-zinc-900 hover:text-[#165B4C] transition-colors pb-1 border-b border-black"
          >
            <span>Xem Toàn Bộ Bảng Giá &amp; Mẫu Xe</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-zinc-200">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2.5 text-xs uppercase tracking-wider font-medium rounded-sm whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-zinc-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
