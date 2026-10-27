'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import ModelRangeStrip from '@/components/ModelRangeStrip';
import QuickActions from '@/components/QuickActions';
import VehicleGrid from '@/components/VehicleGrid';
import TechExperience from '@/components/TechExperience';
import ElectricZone from '@/components/ElectricZone';
import NewsCard from '@/components/NewsCard';
import DealerSearch from '@/components/DealerSearch';
import TestDriveForm from '@/components/TestDriveForm';
import { NEWS_DATA } from '@/data/news';
import { gsap, useGSAP } from '@/lib/gsap';

export default function HomePage() {
  const latestNews = NEWS_DATA.slice(0, 3);

  const newsSectionRef = useRef<HTMLElement>(null);
  const newsHeaderRef = useRef<HTMLDivElement>(null);
  const newsGridRef = useRef<HTMLDivElement>(null);

  const testDriveSectionRef = useRef<HTMLElement>(null);
  const testDriveCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // News section reveal
      if (newsHeaderRef.current) {
        gsap.from(newsHeaderRef.current.children, {
          scrollTrigger: {
            trigger: newsHeaderRef.current,
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

      if (newsGridRef.current) {
        gsap.from(newsGridRef.current.children, {
          scrollTrigger: {
            trigger: newsGridRef.current,
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

      // Test drive card reveal
      if (testDriveCardRef.current) {
        gsap.from(testDriveCardRef.current, {
          scrollTrigger: {
            trigger: testDriveCardRef.current,
            start: 'top 85%',
            once: true,
          },
          y: 25,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }
    },
    { scope: newsSectionRef }
  );

  return (
    <div className="bg-white text-zinc-950">
      {/* 1. Fullscreen Hero Section with GSAP Timelines & 3 Flagships */}
      <HeroCarousel />

      {/* 2. Interactive Lifestyle Model Range Selector (Direct from Škoda Vietnam) */}
      <ModelRangeStrip />

      {/* 3. Quick Actions Strip (5 Interactive Cards with ScrollTrigger Lift) */}
      <QuickActions />

      {/* 4. Product Showcase Section (Filterable Grid with Staggered Entrance) */}
      <VehicleGrid />

      {/* 4. Tech Experience (Light Split Layout with Interactive Pillars & Smooth Crossfade) */}
      <TechExperience />

      {/* 5. Flagship Performance Zone (Octavia RS with GSAP Live Metric Counters & Parallax Scrub) */}
      <ElectricZone />

      {/* 6. News & Events Section with ScrollTrigger Stagger */}
      <section
        ref={newsSectionRef}
        id="news-section"
        className="py-24 bg-white text-[#0E3A2F] border-b border-[#0E3A2F]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={newsHeaderRef}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#0E3A2F] mb-2 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cập Nhật Thông Tin</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#0E3A2F]">
                Tin tức &amp; Sự kiện
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-[#0E3A2F] hover:text-[#0E3A2F]/70 transition-colors group"
              >
                <span>Xem Tất Cả Bài Viết</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 3 Featured News Cards */}
          <div ref={newsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dealer Locator Section with Map Preview & Filter */}
      <DealerSearch />

      {/* 8. Test Drive Booking CTA Section with Smooth Entrance */}
      <section
        ref={testDriveSectionRef}
        id="test-drive-section"
        className="py-24 bg-[#F2FAF6] border-b border-[#0E3A2F]/10 relative overflow-hidden"
      >
        {/* Subtle Ambient Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#0E3A2F] font-semibold">
              Trải Nghiệm Trực Tiếp
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#0E3A2F]">
              Cảm nhận Quang Anh SKODA trên mọi cung đường
            </h2>
            <p className="text-[#0E3A2F]/70 text-sm font-light leading-relaxed">
              Đặt lịch hẹn lái thử tận nhà hoặc tại showroom gần nhất. Đội ngũ chuyên gia sẽ đồng hành cùng Quý khách khám phá trọn vẹn cảm giác lái và tiện ích Simply Clever.
            </p>
          </div>

          {/* Test Drive Form Card */}
          <div
            ref={testDriveCardRef}
            className="bg-white border border-[#0E3A2F]/15 p-6 md:p-10 shadow-xl rounded-sm"
          >
            <TestDriveForm />
          </div>
        </div>
      </section>
    </div>
  );
}
