'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { VEHICLES_DATA } from '@/data/models';
import { gsap, useGSAP } from '@/lib/gsap';

export default function ElectricZone() {
  const flagshipSport = VEHICLES_DATA.find((v) => v.slug === 'octavia-rs') || VEHICLES_DATA[0];

  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);
  const carImageRef = useRef<HTMLImageElement>(null);

  // Counter number element refs
  const powerNumRef = useRef<HTMLSpanElement>(null);
  const accelNumRef = useRef<HTMLSpanElement>(null);
  const platformNumRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      // Content fade & slide up
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            once: true,
          },
          y: 25,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }

      // Metric Counter Animation with ScrollTrigger
      const counterTarget = { power: 0, accel: 0, platform: 0 };
      gsap.to(counterTarget, {
        scrollTrigger: {
          trigger: powerNumRef.current,
          start: 'top 90%',
          once: true,
        },
        power: 265,
        accel: 6.4,
        platform: 100,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          if (powerNumRef.current) {
            powerNumRef.current.innerText = Math.floor(counterTarget.power).toString();
          }
          if (accelNumRef.current) {
            accelNumRef.current.innerText = counterTarget.accel.toFixed(1);
          }
          if (platformNumRef.current) {
            platformNumRef.current.innerText = Math.floor(counterTarget.platform).toString();
          }
        },
      });

      // Parallax scroll on the right car visual
      if (carImageRef.current) {
        gsap.to(carImageRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
          y: -25,
          scale: 1.04,
          ease: 'none',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-white text-[#0E3A2F] border-b border-[#0E3A2F]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column (6 cols) */}
          <div ref={contentRef} className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2FAF6] border border-[#0E3A2F]/20 text-[#0E3A2F] text-xs font-mono uppercase tracking-widest font-semibold rounded-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#0E3A2F]" />
                <span>Hiệu Suất Đỉnh Cao Châu Âu</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-[#0E3A2F] tracking-tight leading-tight">
                Khai mở cảm xúc lái <br />
                <span className="font-semibold text-[#0E3A2F]">hiệu suất thể thao đỉnh cao</span>
              </h2>
              <p className="text-sm sm:text-base text-[#0E3A2F]/75 font-light leading-relaxed">
                Đại diện cho đỉnh cao tốc độ và cảm giác lái phấn khích, {flagshipSport.name} sở hữu động cơ 2.0 TSI thế hệ thứ 4, sản sinh công suất ấn tượng và phản hồi mặt đường chính xác đến từng milimet.
              </p>
            </div>

            {/* 3 Large Big Metric Numbers with GSAP Counter */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 border-t border-b border-[#0E3A2F]/15">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light font-mono text-[#0E3A2F] tracking-tight">
                  <span ref={powerNumRef}>0</span>
                  <span className="text-sm sm:text-base font-sans text-[#0E3A2F] ml-1">PS</span>
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#0E3A2F]">
                  Công Suất Cực Đại
                </div>
                <p className="text-[11px] text-[#0E3A2F]/60 font-light leading-tight">
                  Động cơ 2.0 TSI EA888 Gen 4
                </p>
              </div>

              <div className="space-y-1 border-l border-[#0E3A2F]/15 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light font-mono text-[#0E3A2F] tracking-tight">
                  <span ref={accelNumRef}>0.0</span>
                  <span className="text-sm sm:text-base font-sans text-[#0E3A2F] ml-1">giây</span>
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#0E3A2F]">
                  0 - 100 km/h
                </div>
                <p className="text-[11px] text-[#0E3A2F]/60 font-light leading-tight">
                  Hộp số 7 cấp ly hợp kép DSG
                </p>
              </div>

              <div className="space-y-1 border-l border-[#0E3A2F]/15 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light font-mono text-[#0E3A2F] tracking-tight">
                  <span ref={platformNumRef}>0</span>
                  <span className="text-sm sm:text-base font-sans text-[#0E3A2F] ml-1">%</span>
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#0E3A2F]">
                  Khung Gầm MQB
                </div>
                <p className="text-[11px] text-[#0E3A2F]/60 font-light leading-tight">
                  An toàn 5 sao Euro NCAP toàn diện
                </p>
              </div>
            </div>

            {/* Commitments list */}
            <div className="space-y-3 text-xs text-[#0E3A2F]/80 font-light">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#0E3A2F] shrink-0" />
                <span>Vi sai hạn chế trượt điện tử VAQ giúp xe ôm cua ngọt ngào và vững chãi ở dải tốc độ cao.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#0E3A2F] shrink-0" />
                <span>Bảo hành chính hãng 5 năm hoặc 150.000 km cùng chính sách hỗ trợ cứu hộ 24/7 toàn quốc.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/models/${flagshipSport.slug}`}
                className="btn-primary-dark px-7 py-3.5 rounded-sm inline-flex items-center gap-2 bg-[#0E3A2F] text-white hover:bg-[#081E18] hover:text-[#78F59C] transition-colors"
              >
                <span>Khám Phá {flagshipSport.shortName}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/test-drive?model=${flagshipSport.slug}`}
                className="btn-secondary-light px-7 py-3.5 rounded-sm text-[#0E3A2F] border-2 border-[#0E3A2F] hover:bg-[#0E3A2F] hover:text-[#78F59C] transition-colors"
              >
                <span>Đăng Ký Lái Thử Thực Tế</span>
              </Link>
            </div>
          </div>

          {/* Right Image Visual Column with GSAP Parallax */}
          <div ref={carWrapperRef} className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl bg-gradient-to-br from-[#F2FAF6] to-white border border-[#0E3A2F]/15 p-6 flex items-center justify-center group">
              <img
                ref={carImageRef}
                src={flagshipSport.heroImage}
                alt={flagshipSport.name}
                className="w-full h-full object-contain drop-shadow-2xl will-change-transform"
              />
              <div className="absolute top-6 right-6 bg-[#081E18]/95 backdrop-blur-md text-white p-4 rounded-sm border border-[#78F59C]/20 space-y-1 max-w-[210px]">
                <span className="text-[10px] uppercase tracking-widest text-[#78F59C] block font-mono">
                  Hiệu Suất vRS
                </span>
                <span className="text-base font-semibold block">{flagshipSport.specs.power}</span>
                <p className="text-[10px] text-zinc-300 leading-tight">
                  Cốp mở Liftback 600L lớn nhất phân khúc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
