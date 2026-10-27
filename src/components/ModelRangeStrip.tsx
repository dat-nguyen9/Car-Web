'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
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

  const containerRef = useRef<HTMLElement>(null);
  const carsRowRef = useRef<HTMLDivElement>(null);

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
      name: 'Octavia',
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
      name: 'Karoq',
      slug: 'karoq-sportline',
      image: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/7DDXO6HY3SZQEYFG4NS7W6FW3I%3D%3D%3D%3D%3D%3D.png',
      price: '1.009.000.000 VNĐ',
      power: '150 HP',
      seat: '5 chỗ',
      lifestyles: ['Gia đình', 'Ngoài trời', 'Thành phố'],
    },
    {
      id: 'kodiaq',
      name: 'Kodiaq',
      slug: 'kodiaq-sportline',
      image: 'https://iprenders.blob.core.windows.net/baseps7v25200008/P4P4rf_2p0HVwA9WSldkEbTD7nY-7zKYPoSV2JsTdBfwm6F-VPycAHJs_RnTF4CL2q18uw-BDH-19201080dayvext_front1080.png',
      price: '1.480.000.000 VNĐ',
      power: '180 HP',
      seat: '7 chỗ',
      lifestyles: ['Gia đình', 'Ngoài trời', 'Thể thao'],
    },
  ];

  // GSAP scroll entrance animation
  useGSAP(
    () => {
      if (carsRowRef.current) {
        gsap.from(carsRowRef.current.children, {
          scrollTrigger: {
            trigger: carsRowRef.current,
            start: 'top 85%',
            once: true,
          },
          x: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
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
      className="py-14 sm:py-20 bg-white border-b border-[#0e3a2f]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lifestyle Filter Tabs Bar (Exact Škoda Vietnam Design) */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex items-center border-b border-[#0e3a2f]/15 overflow-x-auto no-scrollbar">
            {filters.map((f) => {
              const isActive = activeFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`relative px-5 sm:px-8 py-3 text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#f2faf6] text-[#0e3a2f] font-bold'
                      : 'text-[#0e3a2f]/60 hover:text-[#0e3a2f] font-normal hover:bg-[#f2faf6]/50'
                  }`}
                >
                  <span>{f.label}</span>

                  {/* Active Green Hairline Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0e3a2f]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal 5-Car Lineup with Interactive Driving Hover & Dynamic Filter */}
        <div
          ref={carsRowRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-end justify-center mb-12 sm:mb-16"
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

                {/* Bold Car Name (Without Škoda prefix) */}
                <Link
                  href={`/models/${car.slug}`}
                  className="mt-3 group flex items-center gap-1.5 text-center cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold tracking-tight text-[#0e3a2f] group-hover:text-[#165b4c] transition-colors">
                    {car.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0e3a2f]" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Rounded Pill Action Button (Exact Škoda Vietnam Outline Pill) */}
        <div className="flex justify-center">
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
