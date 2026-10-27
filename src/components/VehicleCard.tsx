'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Vehicle } from '@/types/vehicle';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const drivetrainText =
    vehicle.specs.drivetrain.includes('4x4') || vehicle.specs.drivetrain.includes('AWD')
      ? '4x4 Toàn Thời Gian'
      : 'Dẫn Động FWD';

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-sm bg-white border border-zinc-200/90 hover:border-zinc-950 hover:shadow-xl transition-all duration-500 ease-out">
      {/* Top Media Showcase with Studio Light Backdrop */}
      <Link
        href={`/models/${vehicle.slug}`}
        className="relative aspect-[16/10] bg-[radial-gradient(ellipse_at_center,_#ffffff_40%,_#f1f3f6_100%)] overflow-hidden flex items-center justify-center p-6 border-b border-zinc-100 cursor-pointer"
      >
        {/* Category & Tag Badges */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-zinc-900 text-[10px] uppercase font-mono tracking-widest font-semibold border border-zinc-200/80 shadow-xs">
            {vehicle.category}
          </span>
          {vehicle.isNewArrival && (
            <span className="px-2.5 py-1 bg-[#165B4C] text-white text-[10px] uppercase font-mono tracking-widest font-semibold">
              Mới Ra Mắt
            </span>
          )}
        </div>

        {/* 3D Car Render with Smooth Automotive Glide on Hover */}
        <div className="w-full h-full flex items-center justify-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:translate-x-1.5 will-change-transform">
          <img
            src={vehicle.heroImage}
            alt={vehicle.name}
            className="w-full h-full object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.12)]"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Info Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-white">
        <div className="space-y-2">
          {/* Micro Subhead */}
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-zinc-400">
            <span>{vehicle.fuelType}</span>
            <span>{drivetrainText}</span>
          </div>

          {/* Clean Model Name - Never Truncated */}
          <Link href={`/models/${vehicle.slug}`} className="block">
            <h3 className="text-xl font-normal text-zinc-950 tracking-tight group-hover:text-[#165B4C] transition-colors leading-snug">
              {vehicle.shortName}
            </h3>
          </Link>

          {/* Brief Tagline */}
          <p className="text-xs text-zinc-500 font-light line-clamp-2 leading-relaxed">
            {vehicle.tagline}
          </p>
        </div>

        {/* Key Specs Micro Strip */}
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-zinc-100 text-center">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
              Công Suất
            </span>
            <span className="text-xs font-semibold font-mono text-zinc-900 mt-0.5 block truncate">
              {vehicle.specs.power.split('@')[0].trim()}
            </span>
          </div>
          <div className="border-l border-r border-zinc-200/70">
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
              0-100 km/h
            </span>
            <span className="text-xs font-semibold font-mono text-[#165B4C] mt-0.5 block truncate">
              {vehicle.specs.acceleration.split(' ')[0]}s
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
              Số Chỗ
            </span>
            <span className="text-xs font-semibold font-mono text-zinc-900 mt-0.5 block truncate">
              {vehicle.specs.seatingCapacity} chỗ
            </span>
          </div>
        </div>

        {/* Price & CTA Action */}
        <div className="pt-1 flex items-baseline justify-between border-t border-zinc-100">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block">
              Giá Niêm Yết Từ
            </span>
            <span className="text-base sm:text-lg font-mono font-bold text-zinc-950">
              {vehicle.priceFormatted}
            </span>
          </div>

          <Link
            href={`/models/${vehicle.slug}`}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-zinc-900 group-hover:text-[#165B4C] transition-colors"
          >
            <span>Khám Phá</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
