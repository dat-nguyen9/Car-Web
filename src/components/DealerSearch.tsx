'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { Search, MapPin, Phone, Clock, ExternalLink, Calendar } from 'lucide-react';
import { DEALERS_DATA, CITIES_LIST } from '@/data/dealers';
import { Dealer } from '@/types/vehicle';
import { gsap, useGSAP } from '@/lib/gsap';

export default function DealerSearch() {
  const [selectedCity, setSelectedCity] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDealer, setActiveDealer] = useState<Dealer>(DEALERS_DATA[0]);

  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentGridRef = useRef<HTMLDivElement>(null);

  const filteredDealers = useMemo(() => {
    return DEALERS_DATA.filter((dealer) => {
      const matchCity = selectedCity === 'Tất cả' || dealer.city === selectedCity;
      const matchQuery =
        searchQuery.trim() === '' ||
        dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dealer.address.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCity && matchQuery;
    });
  }, [selectedCity, searchQuery]);

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

      if (contentGridRef.current) {
        gsap.from(contentGridRef.current.children, {
          scrollTrigger: {
            trigger: contentGridRef.current,
            start: 'top 85%',
            once: true,
          },
          y: 25,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="dealers-section"
      className="py-24 sm:py-32 bg-[#F2FAF6] border-b border-[#0E3A2F]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#0E3A2F] font-mono font-semibold">
            Hệ Thống Phân Phối
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#0E3A2F] tracking-tight leading-tight">
            Tìm đại lý <span className="font-semibold text-[#0E3A2F]">gần bạn</span>
          </h2>
          <p className="text-sm text-[#0E3A2F]/75 font-light leading-relaxed">
            Hệ thống showroom và trung tâm dịch vụ 3S/4S chính hãng trên toàn quốc, sẵn sàng tiếp đón và phục vụ theo tiêu chuẩn Châu Âu.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-8">
          {/* City Filter */}
          <div className="sm:col-span-5 md:col-span-4">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-[#0E3A2F]/20 text-xs sm:text-sm text-[#0E3A2F] focus:outline-none focus:border-[#0E3A2F] rounded-sm cursor-pointer shadow-sm"
            >
              {CITIES_LIST.map((c) => (
                <option key={c} value={c}>
                  {c === 'Tất cả' ? 'Mọi Tỉnh / Thành Phố' : `Thành phố: ${c}`}
                </option>
              ))}
            </select>
          </div>

          {/* Search Box */}
          <div className="sm:col-span-7 md:col-span-8 relative">
            <Search className="w-4 h-4 text-[#0E3A2F]/50 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Tìm theo tên đại lý, quận/huyện, tuyến đường..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#0E3A2F]/20 text-xs sm:text-sm text-[#0E3A2F] focus:outline-none focus:border-[#0E3A2F] rounded-sm shadow-sm"
            />
          </div>
        </div>

        {/* 2-Columns: List (left) vs Map Placeholder View (right) */}
        <div ref={contentGridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dealers List (6 cols) */}
          <div className="lg:col-span-6 space-y-4 max-h-[640px] overflow-y-auto pr-2">
            {filteredDealers.length === 0 ? (
              <div className="p-8 text-center bg-white border border-[#0E3A2F]/15 text-[#0E3A2F]/60 text-sm">
                Không tìm thấy showroom phù hợp trong khu vực này.
              </div>
            ) : (
              filteredDealers.map((d) => {
                const isSelected = activeDealer.id === d.id;
                return (
                  <div
                    key={d.id}
                    onClick={() => setActiveDealer(d)}
                    className={`p-6 rounded-sm border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#0E3A2F] shadow-md ring-1 ring-[#0E3A2F]'
                        : 'bg-white border-[#0E3A2F]/15 hover:border-[#0E3A2F]/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {d.isFlagship && (
                          <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#0E3A2F] bg-[#F2FAF6] px-2 py-0.5 rounded-sm border border-[#0E3A2F]/20 mb-1.5 inline-block">
                            Flagship 4S
                          </span>
                        )}
                        <h3 className="text-base font-semibold text-[#0E3A2F]">
                          {d.name}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-[#0E3A2F] bg-[#F2FAF6] px-2 py-1 rounded border border-[#0E3A2F]/10">
                        {d.city}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-xs text-[#0E3A2F]/70 font-light">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#0E3A2F]/50 shrink-0 mt-0.5" />
                        <span>{d.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#0E3A2F]/50 shrink-0" />
                        <span className="font-mono text-[#0E3A2F] font-medium">Hotline: {d.hotline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#0E3A2F]/50 shrink-0" />
                        <span>{d.openingHours}</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#0E3A2F]/10 flex items-center justify-between gap-3">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(d.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#0E3A2F] hover:text-[#0E3A2F]/70 font-medium"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Xem Bản Đồ Google</span>
                      </a>

                      <Link
                        href={`/test-drive?dealer=${d.id}`}
                        className="btn-primary-dark py-2 px-4 text-[11px] rounded-sm bg-[#0E3A2F] text-white hover:bg-[#081E18] hover:text-[#78F59C] transition-colors"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>Đặt Lịch Hẹn</span>
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Interactive Map Placeholder (6 cols) */}
          <div className="lg:col-span-6 bg-[#081E18] text-white rounded-sm overflow-hidden border border-[#78F59C]/20 shadow-xl h-[420px] lg:h-[640px] flex flex-col justify-between p-6 relative">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#78f59c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Top Bar with coordinates */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#78F59C] animate-pulse" />
                <span className="text-xs font-mono tracking-widest uppercase text-white font-semibold">
                  {activeDealer.name}
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                {activeDealer.mapCoordinates.lat.toFixed(4)}°N, {activeDealer.mapCoordinates.lng.toFixed(4)}°E
              </span>
            </div>

            {/* Map Center Pin Representation */}
            <div className="relative z-10 text-center my-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#78F59C]/20 border border-[#78F59C] flex items-center justify-center mx-auto text-[#78F59C] shadow-lg shadow-[#0E3A2F]/50">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="space-y-1 max-w-sm mx-auto">
                <h4 className="text-base font-semibold text-white">{activeDealer.name}</h4>
                <p className="text-xs text-zinc-300 font-light">{activeDealer.address}</p>
                <div className="text-xs font-mono text-[#78F59C] pt-1">
                  Đang mở cửa tiếp đón khách hàng
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-zinc-400">
                Tích hợp chỉ đường GPS cho Apple Maps &amp; Google Maps
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeDealer.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-electric text-xs py-2.5 px-5 rounded-sm font-semibold tracking-wider uppercase transition-colors"
              >
                Chỉ Đường Đến Showroom
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
