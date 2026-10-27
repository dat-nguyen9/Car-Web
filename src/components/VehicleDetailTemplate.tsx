'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Gauge,
  Zap,
  CheckCircle2,
  Calendar,
  FileText,
  PhoneCall,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import TestDriveForm from '@/components/TestDriveForm';
import { Vehicle } from '@/types/vehicle';

interface VehicleDetailTemplateProps {
  vehicle: Vehicle;
}

export default function VehicleDetailTemplate({ vehicle }: VehicleDetailTemplateProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedExteriorColor, setSelectedExteriorColor] = useState(
    vehicle.colors.exterior[0]
  );
  const [selectedInteriorColor, setSelectedInteriorColor] = useState(
    vehicle.colors.interior[0]
  );

  const galleryImages = vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.heroImage];

  const specHighlights = [
    { label: 'Công suất cực đại', value: vehicle.specs.power, icon: Zap },
    { label: 'Tăng tốc 0 - 100 km/h', value: vehicle.specs.acceleration, icon: Gauge },
    { label: 'Hộp số & Hệ truyền động', value: vehicle.specs.transmission, icon: Shield },
    { label: 'Số chỗ ngồi', value: `${vehicle.specs.seatingCapacity} chỗ ngồi`, icon: CheckCircle2 },
  ];

  return (
    <div className="bg-[#08090b] text-[#f3f4f6] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Dòng Xe', href: '/models' },
            { label: vehicle.shortName },
          ]}
        />

        {/* Top Hero Info Header */}
        <div className="mt-4 mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{vehicle.category} • {vehicle.fuelType}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
              {vehicle.name}
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
              {vehicle.tagline}
            </p>
          </div>

          <div className="lg:text-right space-y-3 shrink-0">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block">
                Giá Bán Niêm Yết Từ
              </span>
              <span className="text-2xl sm:text-3xl font-mono font-medium text-white tracking-tight">
                {vehicle.priceFormatted}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#test-drive"
                className="btn-primary-dark px-6 py-2.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
              >
                <span>Đăng Ký Lái Thử</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/inventory"
                className="btn-secondary-light px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-zinc-300"
              >
                <span>Xe Sẵn Giao Ngay</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Gallery Showcase */}
        <section className="mb-20">
          {/* Main Display Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-zinc-900 border border-white/10 overflow-hidden group">
            <img
              src={galleryImages[activeImageIndex]}
              alt={`${vehicle.name} preview ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
              <span className="font-mono bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
                Góc nhìn {activeImageIndex + 1} / {galleryImages.length}
              </span>
              <span className="hidden sm:inline font-light text-zinc-300">
                Khung gầm và chi tiết tinh xảo tiêu chuẩn châu Âu
              </span>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-4">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[16/10] overflow-hidden border transition-all ${
                  activeImageIndex === idx
                    ? 'border-white opacity-100 shadow-md ring-1 ring-white/50'
                    : 'border-white/10 opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Key Metrics Quick Strip */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 bg-[#0f1118] border border-white/10">
          {specHighlights.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] uppercase font-mono tracking-widest">{spec.label}</span>
                </div>
                <p className="text-base sm:text-lg font-mono font-medium text-white">
                  {spec.value}
                </p>
              </div>
            );
          })}
        </section>

        {/* Detailed Technical Specifications Table */}
        <section className="mb-20">
          <div className="mb-8 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">
              Thông Số Toàn Diện
            </span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Bảng Thông Số Kỹ Thuật Chi Tiết
            </h2>
          </div>

          <div className="bg-[#0f1118] border border-white/10 overflow-hidden divide-y divide-white/5 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Động cơ / Hệ truyền động</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.engine}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Công suất cực đại</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.power}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Mô-men xoắn cực đại</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.torque}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Thời gian tăng tốc 0-100 km/h</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.acceleration}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Vận tốc tối đa</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.topSpeed}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Hộp số</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.transmission}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Hệ dẫn động</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.drivetrain}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Mức tiêu thụ nhiên liệu</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.fuelConsumption}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Kích thước tổng thể (D x R x C)</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.dimensions}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Chiều dài cơ sở</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.wheelbase}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-5 hover:bg-white/[0.02]">
              <span className="text-zinc-400 uppercase font-mono tracking-wider">Dung tích khoang hành lý</span>
              <span className="text-white font-medium mt-1 md:mt-0">{vehicle.specs.trunkCapacity}</span>
            </div>
          </div>
        </section>

        {/* Key Features & Innovation */}
        <section className="mb-20">
          <div className="mb-8 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">
              Công Nghệ Đỉnh Cao
            </span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Tính Năng Nổi Bật
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicle.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#0f1118] border border-white/10 hover:border-white/30 transition-colors space-y-3"
              >
                <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest">
                  Trang bị 0{idx + 1}
                </div>
                <h3 className="text-lg font-medium text-white">{feat.title}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Color Palette Configurator (Exterior & Interior) */}
        <section className="mb-20 p-8 sm:p-12 bg-[#0d0e14] border border-white/10">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">
              Cá Nhân Hóa Phong Cách
            </span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Bảng Màu Ngoại Thất &amp; Nội Thất
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              Mỗi sắc thái màu sơn được xử lý qua 7 lớp sơn tĩnh điện và phủ bóng đa lớp theo tiêu chuẩn nhà máy châu Âu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Exterior Colors */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">Màu Ngoại Thất</span>
                <span className="text-xs text-white font-medium">{selectedExteriorColor.name}</span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                {vehicle.colors.exterior.map((col, idx) => {
                  const isSelected = selectedExteriorColor.name === col.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedExteriorColor(col)}
                      className={`group flex flex-col items-center gap-2 focus:outline-none`}
                    >
                      <div
                        style={{ backgroundColor: col.hex }}
                        className={`w-10 h-10 rounded-full border-2 transition-transform ${
                          isSelected
                            ? 'border-white scale-110 shadow-lg ring-2 ring-emerald-400'
                            : 'border-white/20 hover:scale-105'
                        }`}
                      />
                      <span className="text-[10px] text-zinc-400 max-w-[80px] text-center line-clamp-1">
                        {col.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interior Colors */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">Chất Liệu &amp; Màu Nội Thất</span>
                <span className="text-xs text-white font-medium">{selectedInteriorColor.name}</span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                {vehicle.colors.interior.map((col, idx) => {
                  const isSelected = selectedInteriorColor.name === col.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedInteriorColor(col)}
                      className={`group flex flex-col items-center gap-2 focus:outline-none`}
                    >
                      <div
                        style={{ backgroundColor: col.hex }}
                        className={`w-10 h-10 rounded-full border-2 transition-transform ${
                          isSelected
                            ? 'border-white scale-110 shadow-lg ring-2 ring-emerald-400'
                            : 'border-white/20 hover:scale-105'
                        }`}
                      />
                      <span className="text-[10px] text-zinc-400 max-w-[90px] text-center line-clamp-1">
                        {col.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Test Drive CTA Anchor Section */}
        <section id="test-drive" className="pt-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">
              Đặt Lịch Trực Tiếp
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white">
              Đăng Ký Lái Thử {vehicle.shortName}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              Trải nghiệm độ đầm chắc của khung gầm và hệ thống hỗ trợ lái thông minh trên cung đường thực tế cùng Quang Anh SKODA.
            </p>
          </div>

          <div className="bg-[#0f1118] border border-white/10 p-6 md:p-10 shadow-2xl max-w-4xl mx-auto">
            <TestDriveForm defaultModelSlug={vehicle.slug} />
          </div>
        </section>
      </div>
    </div>
  );
}
