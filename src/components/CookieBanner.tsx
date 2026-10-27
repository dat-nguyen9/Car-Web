'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, X } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('quanganh_cookie_consent');
    if (!consent) {
      // Delay display slightly for smooth UX
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('quanganh_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('quanganh_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside aria-label="Thông báo Cookie" className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#0f1117]/95 backdrop-blur-md border border-white/10 p-5 shadow-2xl text-xs text-zinc-300">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-semibold text-white tracking-wide uppercase text-[11px]">
              Quyền Riêng Tư &amp; Trải Nghiệm Cá Nhân Hóa
            </h4>
            <p className="text-zinc-400 leading-relaxed text-[11px]">
              Website Quang Anh SKODA sử dụng cookie thiết yếu để bảo đảm hiệu suất duyệt xe, ghi nhớ lựa chọn showroom và cá nhân hóa trải nghiệm đăng ký lái thử.{' '}
              <Link href="/privacy" className="text-white underline hover:text-emerald-400 transition-colors">
                Tìm hiểu thêm
              </Link>
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleAccept}
                className="bg-white text-black hover:bg-zinc-200 px-4 py-1.5 text-[11px] font-semibold tracking-wider uppercase transition-colors"
              >
                Chấp Nhận Tất Cả
              </button>
              <button
                onClick={handleDecline}
                className="border border-white/20 text-zinc-300 hover:text-white hover:border-white/40 px-3 py-1.5 text-[11px] font-medium tracking-wider uppercase transition-colors"
              >
                Chỉ Cần Thiết
              </button>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-zinc-500 hover:text-white transition-colors ml-auto -mr-1 -mt-1 p-1"
            aria-label="Đóng thông báo"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
