'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { gsap, useGSAP } from '@/lib/gsap';

interface ModelItem {
  id: string;
  name: string;
  badge?: string;
  slug: string;
  image: string;
  price: string;
  power: string;
  seat: string;
  lifestyles: string[];
}

export default function ModelRangeStrip() {
  const [activeFilter, setActiveFilter] = useState('Bất kỳ');
  const [hoveredCar, setHoveredCar] = useState<string | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const containerRef = useRef<HTMLElement>(null);
  const carsRowRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const filters = [
    { label: 'Bất kỳ', value: 'Bất kỳ' },
    { label: 'Gia đình', value: 'Gia đình' },
    { label: 'Thành phố', value: 'Thành phố' },
    { label: 'Ngoài trời', value: 'Ngoài trời' },
    { label: 'Thể thao', value: 'Thể thao' },
  ];

  const models: ModelItem[] = [
    {
      id: 'octavia',
      name: 'Octavia RS',
      badge: 'MỚI',
      slug: 'octavia-rs',
      image: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/FS667PCP6YJF3O74CNZCFWIYRI%3D%3D%3D%3D%3D%3D.png',
      price: '1.608.000.000 VNĐ',
      power: '265 PS',
      seat: '5 chỗ',
      lifestyles: ['Thành phố', 'Thể thao'],
    },
    {
      id: 'slavia',
      name: 'Slavia',
      slug: 'slavia',
      image: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/FNHAMJST5F2FQQEHJPJ5WZREIE%3D%3D%3D%3D%3D%3D.png',
      price: '468.000.000 VNĐ',
      power: '115 HP',
      seat: '5 chỗ',
      lifestyles: ['Gia đình', 'Thành phố'],
    },
    {
      id: 'kushaq',
      name: 'Kushaq',
      slug: 'kushaq',
      image: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/VG7KFDQU36SBOQPTYY6STHL7XQ%3D%3D%3D%3D%3D%3D.png',
      price: '599.000.000 VNĐ',
      power: '115 HP',
      seat: '5 chỗ',
      lifestyles: ['Thành phố', 'Ngoài trời'],
    },
    {
      id: 'karoq',
      name: 'Karoq Sportline',
      slug: 'karoq-sportline',
      image: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/7DDXO6HY3SZQEYFG4NS7W6FW3I%3D%3D%3D%3D%3D%3D.png',
      price: '1.009.000.000 VNĐ',
      power: '150 HP',
      seat: '5 chỗ',
      lifestyles: ['Gia đình', 'Ngoài trời', 'Thành phố'],
    },
    {
      id: 'kodiaq',
      name: 'Kodiaq Sportline',
      slug: 'kodiaq-sportline',
      image: 'https://iprenders.blob.core.windows.net/baseps7v25200008/P4P4rf_2p0HVwA9WSldkEbTD7nY-7zKYPoSV2JsTdBfwm6F-VPycAHJs_RnTF4CL2q18uw-BDH-19201080dayvext_front1080.png',
      price: '1.480.000.000 VNĐ',
      power: '180 HP',
      seat: '7 chỗ',
      lifestyles: ['Gia đình', 'Ngoài trời', 'Thể thao'],
    },
  ];

  const filteredModels = models.filter(
    (car) => activeFilter === 'Bất kỳ' || car.lifestyles.includes(activeFilter)
  );

  // Track mobile scroll index for pagination dots
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveMobileIndex(Math.min(Math.max(index, 0), filteredModels.length - 1));
  };

  const scrollMobileTo = (index: number) => {
    if (!mobileScrollRef.current) return;
    const itemWidth = mobileScrollRef.current.clientWidth * 0.85;
    mobileScrollRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    });
    setActiveMobileIndex(index);
  };

  // GSAP scroll entrance animation on desktop
  useGSAP(
    () => {
      if (carsRowRef.current) {
        gsap.from(carsRowRef.current.children, {
          scrollTrigger: {
            trigger: carsRowRef.current,
            start: 'top 85%',
            once: true,
          },
          x: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.75,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="range-strip"
      className="py-12 sm:py-20 bg-white border-b border-[#0e3a2f]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#0e3a2f] font-semibold">
            Dải Sản Phẩm Thế Hệ Mới
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-[#0e3a2f] tracking-tight">
            Khám Phá Các Dòng Xe Phù Hợp Với Bạn
          </h2>
        </div>

        {/* 1. Touch-Friendly Lifestyle Filter Pills */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar px-2 max-w-full py-1">
            {filters.map((f) => {
              const isActive = activeFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => {
                    setActiveFilter(f.value);
                    setActiveMobileIndex(0);
                    if (mobileScrollRef.current) {
                      mobileScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#0e3a2f] text-[#78f59c] shadow-xs'
                      : 'bg-[#f2faf6] text-[#0e3a2f]/70 hover:bg-[#0e3a2f]/10 border border-[#0e3a2f]/10'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Mobile Presentation: Interactive Horizontal Swipeable Card Showcase */}
        {/* Replaces the awkward 2-column broken grid with an elegant, informative luxury card carousel */}
        <div className="block md:hidden mb-8">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-2 pb-4 no-scrollbar scroll-smooth"
          >
            {filteredModels.map((car) => (
              <div
                key={car.id}
                className="w-[84vw] max-w-[320px] shrink-0 snap-center bg-white border border-[#0e3a2f]/15 rounded-sm p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Badge & Seats */}
                  <div className="flex items-center justify-between mb-2">
                    {car.badge ? (
                      <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#081e18] bg-[#78f59c] px-2 py-0.5 rounded shadow-xs">
                        {car.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#0e3a2f]/60 font-semibold">
                        {car.lifestyles[0]}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-[#0e3a2f] bg-[#f2faf6] px-2 py-0.5 rounded border border-[#0e3a2f]/10 font-medium">
                      {car.seat}
                    </span>
                  </div>

                  {/* Model Name & Starting Price */}
                  <h3 className="text-xl font-bold text-[#0e3a2f] tracking-tight">
                    {car.name}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#0e3a2f]/85 mt-0.5">
                    Giá từ: {car.price}
                  </div>

                  {/* Prominent High-Definition Car Image with Soft Shadow */}
                  <Link
                    href={`/models/${car.slug}`}
                    className="relative w-full aspect-[16/10] my-4 flex items-center justify-center block"
                  >
                    <div className="absolute inset-x-4 -bottom-1 h-5 bg-black/15 rounded-full blur-md" />
                    <img
                      src={car.image}
                      alt={car.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </Link>

                  {/* Quick Specs Highlight */}
                  <div className="flex items-center justify-between text-[11px] text-[#0e3a2f]/70 font-mono border-t border-[#0e3a2f]/10 pt-2.5 mb-4">
                    <span>Công suất: <strong className="text-[#0e3a2f]">{car.power}</strong></span>
                    <span>Động cơ Turbo TSI</span>
                  </div>
                </div>

                {/* Direct Action Link Button */}
                <Link
                  href={`/models/${car.slug}`}
                  className="w-full py-2.5 bg-[#0e3a2f] text-white hover:bg-[#081e18] hover:text-[#78f59c] text-xs uppercase font-semibold tracking-wider text-center rounded-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Khám Phá Chi Tiết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots & Touch Arrows */}
          <div className="flex items-center justify-between px-2 pt-2">
            <div className="flex items-center gap-1.5">
              {filteredModels.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollMobileTo(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === activeMobileIndex ? 'w-6 bg-[#0e3a2f]' : 'w-1.5 bg-[#0e3a2f]/20'
                  }`}
                  aria-label={`Chuyển tới xe ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollMobileTo(Math.max(activeMobileIndex - 1, 0))}
                disabled={activeMobileIndex === 0}
                className="w-7 h-7 rounded-full border border-[#0e3a2f]/20 flex items-center justify-center text-[#0e3a2f] disabled:opacity-30 cursor-pointer"
                aria-label="Xe trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollMobileTo(Math.min(activeMobileIndex + 1, filteredModels.length - 1))}
                disabled={activeMobileIndex === filteredModels.length - 1}
                className="w-7 h-7 rounded-full border border-[#0e3a2f]/20 flex items-center justify-center text-[#0e3a2f] disabled:opacity-30 cursor-pointer"
                aria-label="Xe kế tiếp"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Desktop / Tablet Lineup: Iconic Studio Lineup with Hover HUD & Displayed Price */}
        <div
          ref={carsRowRef}
          className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-end justify-center mb-12 sm:mb-16"
        >
          {models.map((car) => {
            const isMatch =
              activeFilter === 'Bất kỳ' || car.lifestyles.includes(activeFilter);
            const isHovered = hoveredCar === car.id;

            return (
              <div
                key={car.id}
                onMouseEnter={() => setHoveredCar(car.id)}
                onMouseLeave={() => setHoveredCar(null)}
                className={`group relative flex flex-col items-center transition-all duration-500 ${
                  isMatch
                    ? 'opacity-100 scale-100'
                    : 'opacity-25 grayscale hover:grayscale-0 hover:opacity-100 scale-95'
                }`}
              >
                {/* Floating Interactive HUD Mini-Card on Hover */}
                <div
                  className={`absolute -top-16 z-30 transition-all duration-300 pointer-events-none hidden sm:block ${
                    isHovered
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-2 scale-95'
                  }`}
                >
                  <div className="bg-[#081e18] text-white text-[11px] font-mono py-1.5 px-3 rounded-sm shadow-xl border border-[#78f59c]/30 whitespace-nowrap flex items-center gap-2">
                    <span className="text-[#78f59c] font-bold">{car.power}</span>
                    <span className="text-emerald-300/40">&bull;</span>
                    <span className="text-zinc-200">{car.seat}</span>
                    <span className="text-emerald-300/40">&bull;</span>
                    <span className="text-white font-bold">{car.price}</span>
                  </div>
                </div>

                {/* Optional "MỚI" Badge */}
                <div className="w-full flex justify-start mb-1 h-5">
                  {car.badge && (
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#081e18] bg-[#78f59c] px-2 py-0.5 rounded shadow-xs">
                      {car.badge}
                    </span>
                  )}
                </div>

                {/* Car Profile Image with 3D Suspension Lift & Motion Glide */}
                <Link
                  href={`/models/${car.slug}`}
                  className="relative w-full aspect-[16/9] flex items-center justify-center cursor-pointer"
                >
                  {/* Subtle Studio Floor Glow */}
                  <div
                    className={`absolute inset-x-2 -bottom-2 h-6 bg-black/15 rounded-full blur-md transition-all duration-500 ${
                      isHovered ? 'scale-110 opacity-60' : 'scale-90 opacity-40'
                    }`}
                  />

                  {/* 3D Car Model Render */}
                  <img
                    src={car.image}
                    alt={car.name}
                    className="relative z-10 w-full h-full object-contain transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2.5 will-change-transform"
                    loading="lazy"
                  />
                </Link>

                {/* Bold Car Name & Starting Price */}
                <Link
                  href={`/models/${car.slug}`}
                  className="mt-3 group flex flex-col items-center text-center cursor-pointer space-y-0.5"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm sm:text-base font-bold tracking-tight text-[#0e3a2f] group-hover:text-[#165b4c] transition-colors">
                      {car.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0e3a2f]" />
                  </div>
                  <span className="text-xs font-mono text-[#0e3a2f]/60 font-medium">
                    Từ {car.price.split('.')[0]} triệu VNĐ
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom Rounded Pill Action Button */}
        <div className="flex justify-center pt-2">
          <Link
            href="/models"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 rounded-full border-2 border-[#0e3a2f] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0e3a2f] hover:bg-[#0e3a2f] hover:text-[#78f59c] transition-all duration-300 shadow-xs cursor-pointer"
          >
            <span>Xem tất cả xe</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
