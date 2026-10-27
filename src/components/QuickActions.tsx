'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Compass, Car, Wrench, MapPin, PhoneCall, ArrowUpRight } from 'lucide-react';
import { gsap, useGSAP } from '@/lib/gsap';

export default function QuickActions() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const actions = [
    {
      title: 'Đăng Ký Lái Thử',
      subtitle: 'Trực tiếp trải nghiệm',
      href: '/test-drive',
      icon: Compass,
    },
    {
      title: 'Tìm Xe Có Sẵn',
      subtitle: 'Giao ngay trong tuần',
      href: '/inventory',
      icon: Car,
    },
    {
      title: 'Đặt Lịch Dịch Vụ',
      subtitle: 'Bảo dưỡng tiêu chuẩn',
      href: '/service',
      icon: Wrench,
    },
    {
      title: 'Tìm Đại Lý',
      subtitle: 'Hệ thống showroom',
      href: '/dealers',
      icon: MapPin,
    },
    {
      title: 'Liên Hệ Tư Vấn',
      subtitle: 'Hotline VIP 24/7',
      href: 'tel:0988333666',
      icon: PhoneCall,
      isExternal: true,
    },
  ];

  useGSAP(
    () => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.children;

      gsap.from(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
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
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="bg-white border-b border-black/5 py-8 sm:py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {actions.map((act, index) => {
            const Icon = act.icon;
            const content = (
              <div className="p-5 sm:p-6 rounded-sm border border-zinc-200/80 bg-zinc-50/50 hover:bg-white hover:border-black/30 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-full min-h-[140px] cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:text-black group-hover:border-black transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-900 uppercase">
                    {act.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-light mt-0.5">
                    {act.subtitle}
                  </p>
                </div>
              </div>
            );

            if (act.isExternal) {
              return (
                <a key={index} href={act.href} className="block">
                  {content}
                </a>
              );
            }

            return (
              <Link key={index} href={act.href} className="block">
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
