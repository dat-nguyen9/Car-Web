'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Pause, Play, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { VEHICLES_DATA } from '@/data/models';
import Hero3DCanvas from './Hero3DCanvas';

export default function HeroCarousel() {
  const heroVehicles = VEHICLES_DATA.filter((v) => v.isHeroFeatured).slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Interactive 3D Mouse Parallax Coordinates (-1 to +1)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentVehicle = heroVehicles[currentIndex] || heroVehicles[0];

  // Auto carousel slide timer (5 seconds cadence)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroVehicles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, heroVehicles.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroVehicles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroVehicles.length);
  };

  // Mouse Move tracking for 3D Perspective Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[640px] sm:min-h-[720px] lg:h-[95vh] lg:min-h-[660px] lg:max-h-[1050px] bg-[#081e18] text-white overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 1. Interactive 3D Three.js Showroom Stage (3D Turntable Ground Radar Grid, Halo Light Rings, Bokeh Particles) */}
      <Hero3DCanvas currentIndex={currentIndex} />

      {/* 2. Soft Ambient Lighting Overlay (Preserves Three.js 3D Visibility) */}
      <div className="absolute inset-0 pointer-events-none z-2 bg-[radial-gradient(circle_at_75%_45%,rgba(120,245,156,0.12)_0%,rgba(14,58,47,0.3)_40%,transparent_75%)]" />
      <div className="absolute inset-0 pointer-events-none z-2 bg-gradient-to-r from-[#081e18] via-[#081e18]/85 to-transparent max-w-3xl hidden lg:block" />

      {/* 3. Desktop 3D Interactive Vehicle Presentation */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        {heroVehicles.map((car, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={car.id}
              className={`absolute inset-0 transition-all duration-700 ease-out flex items-center justify-end pr-8 xl:pr-20 pt-8 ${
                isActive
                  ? 'opacity-100 translate-x-0 scale-100 z-10'
                  : 'opacity-0 translate-x-12 scale-95 z-0 pointer-events-none'
              }`}
            >
              {/* 3D Tilted Car Container with Dynamic Lighting & Perspective */}
              <div
                className="relative w-full max-w-[750px] lg:max-w-[920px] xl:max-w-[1100px] flex items-center justify-center will-change-transform"
                style={{
                  perspective: '1200px',
                }}
              >
                <div
                  className="relative w-full flex items-center justify-center transition-transform duration-200 ease-out animate-car-float"
                  style={{
                    transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 8}deg) translateZ(${Math.abs(mousePos.x) * 20}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Dynamic Ground Contact Shadow (Reacts in reverse to 3D tilt) */}
                  <div
                    className="absolute -bottom-6 sm:-bottom-8 w-4/5 h-8 sm:h-12 bg-black/90 rounded-[100%] blur-2xl pointer-events-none transition-transform duration-200"
                    style={{
                      transform: `translateX(${-mousePos.x * 15}px) scale(${1 - Math.abs(mousePos.y) * 0.08})`,
                    }}
                  />

                  {/* 3D Car Model Render */}
                  <img
                    src={car.heroImage}
                    alt={car.name}
                    className="relative z-10 w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] will-change-transform"
                    draggable={false}
                  />

                  {/* Dynamic Specular Light Reflection Sweep */}
                  <div
                    className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-35 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at ${50 + mousePos.x * 35}% ${45 + mousePos.y * 35}%, rgba(255,255,255,0.8) 0%, rgba(120,245,156,0.3) 30%, transparent 65%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top Spacer for Fixed Header */}
      <div className="h-20 sm:h-24 lg:h-28 shrink-0" />

      {/* 4. Main Content (Zone A: Title, Zone B: Mobile Car, Zone C: Specs & CTAs) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
        <div className="max-w-xl w-full flex flex-col justify-between h-full space-y-3 sm:space-y-4">
          
          {/* Zone A: Badge & Headline */}
          <div className="space-y-2">
            {/* 3D Automotive Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#78f59c]/10 border border-[#78f59c]/30 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#78f59c] rounded-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#78f59c] animate-pulse shadow-[0_0_8px_#78f59c]" />
              <span>Quang Anh SKODA &bull; {currentVehicle.shortName}</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[9px] text-[#78f59c]/80 pl-1 border-l border-[#78f59c]/30">
                <Sparkles className="w-2.5 h-2.5" /> 3D SHOWROOM
              </span>
            </div>

            {/* Vehicle Headline with Smooth Crossfade Key */}
            <div key={`title-${currentIndex}`} className="space-y-1 animate-fadeIn">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-tight">
                {currentVehicle.shortName}
              </h1>
              <p className="text-xs sm:text-lg text-emerald-100/85 font-light tracking-tight">
                {currentVehicle.category === 'SUV'
                  ? 'SUV 7 Chỗ Đẳng Cấp Châu Âu'
                  : currentVehicle.category === 'Sedan'
                  ? 'Sedan Thể Thao vRS Đẳng Cấp Tốc Độ'
                  : 'Mẫu Xe Thế Hệ Mới Chuẩn Châu Âu'}
              </p>
            </div>
          </div>

          {/* Zone B (Mobile ONLY): Dedicated Clean Car Display Area */}
          <div className="relative w-full h-[190px] sm:h-[260px] my-1 flex items-center justify-center lg:hidden">
            {heroVehicles.map((car, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={car.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-600 ease-out ${
                    isActive
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-95 z-0 pointer-events-none'
                  }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center px-2 animate-car-float">
                    {/* Soft Ground Contact Shadow */}
                    <div className="absolute -bottom-2 w-4/5 h-6 bg-black/90 rounded-[100%] blur-xl pointer-events-none" />

                    {/* 3D Car Model Render */}
                    <img
                      src={car.heroImage}
                      alt={car.name}
                      className="relative z-10 max-h-full w-auto max-w-full object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Zone C: Specs Micro Row & CTA Buttons */}
          <div key={`specs-${currentIndex}`} className="space-y-3.5 pt-1 animate-fadeIn">
            {/* Clean Price & Power Micro Row */}
            <div className="flex items-center gap-4 sm:gap-8 pt-1">
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-200/60 block mb-0.5">
                  GIÁ NIÊM YẾT TỪ
                </span>
                <span className="text-sm sm:text-xl font-mono font-bold text-white tracking-tight">
                  {currentVehicle.priceFormatted}
                </span>
              </div>
              <div className="h-6 sm:h-7 w-px bg-[#78f59c]/20" />
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-200/60 block mb-0.5">
                  CÔNG SUẤT
                </span>
                <span className="text-xs sm:text-base font-mono font-semibold text-zinc-100 tracking-tight">
                  {currentVehicle.specs.power.split('@')[0].trim()}
                </span>
              </div>
              <div className="h-6 sm:h-7 w-px bg-[#78f59c]/20" />
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-200/60 block mb-0.5">
                  TĂNG TỐC 0-100
                </span>
                <span className="text-xs sm:text-base font-mono font-bold text-[#78f59c] tracking-tight">
                  {currentVehicle.specs.acceleration.replace('giây', 's').replace('(0 - 100 km/h)', '').trim()}
                </span>
              </div>
            </div>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1">
              <Link
                href={`/models/${currentVehicle.slug}`}
                className="flex-1 sm:flex-initial px-5 sm:px-7 py-2.5 sm:py-3 rounded-sm inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#78f59c] text-[#081e18] hover:bg-white hover:text-[#0e3a2f] shadow-[0_0_20px_rgba(120,245,156,0.3)] transition-all duration-200 cursor-pointer text-center"
              >
                <span>Khám Phá Mẫu Xe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/test-drive"
                className="flex-1 sm:flex-initial px-5 sm:px-7 py-2.5 sm:py-3 rounded-sm text-xs font-semibold uppercase tracking-wider text-white hover:text-[#78f59c] border border-white/30 hover:border-[#78f59c] hover:bg-[#78f59c]/10 transition-all duration-200 cursor-pointer text-center"
              >
                <span>Đăng Ký Lái Thử</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Visual Automotive Slide Bar (Škoda Green & White Progress Lines) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8 shrink-0">
        <div className="border-t border-[#78f59c]/20 pt-3 sm:pt-4 flex items-center justify-between gap-4 sm:gap-6">
          {/* 3 Interactive Visual Car Thumbnails */}
          <div className="flex items-center gap-3 sm:gap-8 flex-1 max-w-2xl">
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
                  {/* Miniature Transparent Car Render */}
                  <div className="relative h-8 sm:h-11 w-full flex items-center justify-start overflow-hidden">
                    <img
                      src={car.heroImage}
                      alt={car.shortName}
                      className={`h-full w-auto object-contain transition-transform duration-500 will-change-transform ${
                        isActive
                          ? 'scale-105 -translate-y-0.5 drop-shadow-[0_4px_12px_rgba(120,245,156,0.35)]'
                          : 'grayscale group-hover:grayscale-0 group-hover:scale-100'
                      }`}
                    />
                  </div>

                  {/* Clean Vehicle Label & Number */}
                  <div className="flex items-baseline justify-between mt-1">
                    <span
                      className={`text-[10px] sm:text-xs tracking-wider uppercase font-medium transition-colors truncate ${
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
                  <div className="relative w-full h-[2.5px] bg-white/10 rounded-full mt-1.5 overflow-hidden">
                    {isActive ? (
                      <div
                        key={`prog-${currentIndex}-${isPlaying}`}
                        className={`h-full bg-[#78f59c] shadow-[0_0_10px_#78f59c] rounded-full ${
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
          <div className="flex items-center gap-1 sm:gap-2 text-zinc-300 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-[#78f59c] transition-colors cursor-pointer"
              title={isPlaying ? 'Tạm dừng trượt' : 'Tự động trượt'}
              aria-label={isPlaying ? 'Tạm dừng' : 'Tiếp tục'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <span className="text-[#78f59c]/30 hidden sm:inline">|</span>
            <button
              onClick={handlePrev}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-[#78f59c] transition-colors cursor-pointer"
              aria-label="Mẫu xe trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-[#78f59c] transition-colors cursor-pointer"
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
