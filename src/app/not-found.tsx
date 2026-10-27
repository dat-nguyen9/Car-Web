'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Home, Car, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 bg-[#081E18] text-white min-h-[80vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#0b251f] border border-[#78F59C]/30 flex items-center justify-center text-[#78F59C]">
          <Compass className="w-8 h-8 stroke-[1.5]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#78F59C]">
            Lỗi 404 • Trang Không Tồn Tại
          </span>
          <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
            Điểm Đến Chưa Khả Dụng
          </h1>
          <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Cung đường hoặc trang Quý khách đang tìm kiếm có thể đã được điều chỉnh địa chỉ hoặc tạm thời không khả dụng.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="btn-primary-electric px-6 py-2.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 text-[#081E18] rounded-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Về Trang Chủ</span>
          </Link>
          <Link
            href="/models"
            className="px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-white border border-[#78F59C]/40 hover:bg-[#78F59C]/10 rounded-sm inline-flex items-center gap-2 transition-colors"
          >
            <Car className="w-3.5 h-3.5 text-[#78F59C]" />
            <span>Khám Phá Dòng Xe</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
