'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { VEHICLES_DATA } from '@/data/models';
import { gsap, useGSAP } from '@/lib/gsap';
import Hero3DCanvas from './Hero3DCanvas';

export default function HeroCarousel() {
  const heroVehicles = VEHICLES_DATA.filter((v) => v.isHeroFeatured).slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const carImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Auto carousel slide timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroVehicles.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPlaying, heroVehicles.length]);

  const currentVehicle = heroVehicles[currentIndex] || heroVehicles[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroVehicles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroVehicles.length);
  };

  // GSAP animation on mount & on slide change
  useGSAP(
    () => {
      // Animate text info with clean staggered reveal
      if (textRef.current) {
        const textElements = textRef.current.children;
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.07,
            ease: 'power3.out',
            overwrite: 'auto',
          }
        );
      }

      // Animate active car render with smooth automotive glide
      const activeCar = carImagesRef.current[currentIndex];
      if (activeCar) {
        gsap.fromTo(
          activeCar,
          { opacity: 0, x: 50, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.95,
            ease: 'power3.out',
            overwrite: 'auto',
            force3D: true,
          }
        );
      }
    },
    { dependencies: [currentIndex], scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[95vh] min-h-[660px] max-h-[1050px] bg-[#081e18] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* 1. Three.js 3D Studio Stage (Deep Emerald Ambience, Electric Rings, Bokeh Particles) */}
      <Hero3DCanvas currentIndex={currentIndex} />

      {/* 2. Background Images & 3D Car Renders Showcase */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {heroVehicles.map((car, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={car.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Automotive Studio Radial Spotlight (Deep Emerald & Mint Glow) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,58,47,0.85)_0%,rgba(9,34,28,0.55)_45%,rgba(8,30,24,1)_85%)]" />

              {/* Center-Right Car Presentation - Prominent, Sharp & Centered on the Vehicle */}
              <div
                ref={(el) => {
                  carImagesRef.current[idx] = el;
                }}
                className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-10 xl:pr-24 pt-16 lg:pt-4"
              >
                <div className="relative w-full max-w-[650px] md:max-w-[850px] lg:max-w-[1020px] xl:max-w-[1180px] flex items-center justify-center">
                  {/* Soft Ground Contact Shadow */}
                  <div className="absolute -bottom-6 sm:-bottom-8 w-4/5 h-8 sm:h-12 bg-black/80 rounded-[100%] blur-2xl pointer-events-none" />

                  {/* 3D Car Model Render */}
                  <img
                    src={car.heroImage}
                    alt={car.name}
                    className="relative z-10 w-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)] will-change-transform"
                  />
                </div>
              </div>

              {/* Left Soft Vignette for Editorial Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#081e18] via-[#081e18]/80 to-transparent max-w-2xl pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Top Spacer for Fixed Header */}
      <div className="h-24 sm:h-28" />

      {/* 3. Concise Car-Focused Editorial Information (Škoda Green & White Palette) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div ref={textRef} className="max-w-xl space-y-4 sm:space-y-5">
          {/* Subtle Car Badge - Electric Green & Mint */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#78f59c]/10 border border-[#78f59c]/30 text-[11px] font-mono tracking-[0.2em] uppercase text-[#78f59c] rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#78f59c] animate-pulse shadow-[0_0_8px_#78f59c]" />
            <span>Quang Anh SKODA &bull; {currentVehicle.shortName}</span>
          </div>

          {/* Prominent Vehicle Headline */}
          <div className="space-y-1.5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-none">
              {currentVehicle.shortName}
            </h1>
            <p className="text-base sm:text-xl text-emerald-100/80 font-light tracking-tight">
              {currentVehicle.category === 'SUV'
                ? 'SUV 7 Chỗ Đẳng Cấp Châu Âu'
                : currentVehicle.category === 'Sedan'
                ? 'Sedan Thể Thao vRS Đẳng Cấp Tốc Độ'
                : 'Mẫu Xe Thế Hệ Mới Chuẩn Châu Âu'}
            </p>
          </div>

          {/* Clean Price & Power Micro Row */}
          <div className="flex items-center gap-6 sm:gap-8 pt-1">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-200/60 block mb-0.5">
                GIÁ NIÊM YẾT TỪ
              </span>
              <span className="text-base sm:text-xl font-mono font-bold text-white tracking-tight">
                {currentVehicle.priceFormatted}
              </span>
            </div>
            <div className="h-7 w-px bg-[#78f59c]/20" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-200/60 block mb-0.5">
                CÔNG SUẤT
              </span>
              <span className="text-sm sm:text-base font-mono font-semibold text-zinc-100 tracking-tight">
                {currentVehicle.specs.power.split('@')[0].trim()}
              </span>
            </div>
            <div className="h-7 w-px bg-[#78f59c]/20" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-200/60 block mb-0.5">
                TĂNG TỐC 0-100
              </span>
              <span className="text-sm sm:text-base font-mono font-bold text-[#78f59c] tracking-tight">
                {currentVehicle.specs.acceleration.replace('giây', 's').replace('(0 - 100 km/h)', '').trim()}
              </span>
            </div>
          </div>

          {/* Primary & Secondary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href={`/models/${currentVehicle.slug}`}
              className="px-7 py-3 rounded-sm inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#78f59c] text-[#081e18] hover:bg-white hover:text-[#0e3a2f] shadow-[0_0_25px_rgba(120,245,156,0.35)] transition-all duration-200 cursor-pointer"
            >
              <span>Khám Phá Mẫu Xe</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/test-drive"
              className="px-7 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider text-white hover:text-[#78f59c] border border-white/30 hover:border-[#78f59c] hover:bg-[#78f59c]/10 transition-all duration-200 cursor-pointer"
            >
              <span>Đăng Ký Lái Thử</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Visual Automotive Slide Bar (Škoda Green & White Progress Lines) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 sm:pb-8">
        <div className="border-t border-[#78f59c]/20 pt-3 sm:pt-4 flex items-center justify-between gap-6">
          {/* 3 Interactive Visual Car Thumbnails */}
          <div className="flex items-center gap-4 sm:gap-8 flex-1 max-w-2xl">
            {heroVehicles.map((car, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={car.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative flex-1 text-left cursor-pointer transition-all duration-300 pb-1 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-85'
                  }`}
                  aria-label={`Xem xe ${car.shortName}`}
                >
                  {/* Miniature Transparent Car Render (Focused on the Vehicle) */}
                  <div className="relative h-9 sm:h-11 w-full flex items-center justify-start overflow-hidden">
                    <img
                      src={car.heroImage}
                      alt={car.shortName}
                      className={`h-full w-auto object-contain transition-transform duration-500 will-change-transform ${
                        isActive
                          ? 'scale-105 -translate-y-0.5 drop-shadow-[0_4px_12px_rgba(120,245,156,0.3)]'
                          : 'grayscale group-hover:grayscale-0 group-hover:scale-100'
                      }`}
                    />
                  </div>

                  {/* Clean Vehicle Label & Number */}
                  <div className="flex items-baseline justify-between mt-1">
                    <span
                      className={`text-[11px] sm:text-xs tracking-wider uppercase font-medium transition-colors ${
                        isActive ? 'text-[#78f59c] font-bold' : 'text-zinc-300 group-hover:text-white'
                      }`}
                    >
                      {car.shortName}
                    </span>
                    <span className="hidden sm:inline text-[10px] font-mono text-emerald-200/50">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Automotive Timer Progress Bar - Electric Green */}
                  <div className="relative w-full h-[2px] bg-white/10 rounded-full mt-1.5 overflow-hidden">
                    {isActive ? (
                      <div
                        key={`progress-${currentIndex}-${isPlaying}`}
                        className={`h-full bg-[#78f59c] shadow-[0_0_8px_#78f59c] rounded-full ${
                          isPlaying ? 'animate-carousel-progress' : 'w-full'
                        }`}
                        style={{
                          animationPlayState: isPlaying ? 'running' : 'paused',
                        }}
                      />
                    ) : (
                      <div className="h-full w-0 group-hover:w-full bg-[#78f59c]/50 transition-all duration-300" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-300 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-[#78f59c] transition-colors cursor-pointer"
              title={isPlaying ? 'Tạm dừng trượt' : 'Tự động trượt'}
              aria-label={isPlaying ? 'Tạm dừng' : 'Tiếp tục'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <span className="text-[#78f59c]/30 hidden sm:inline">|</span>
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-[#78f59c] transition-colors cursor-pointer"
              aria-label="Mẫu xe trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-[#78f59c] transition-colors cursor-pointer"
              aria-label="Mẫu xe kế tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
