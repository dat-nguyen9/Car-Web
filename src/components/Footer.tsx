'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Shield, ArrowUpRight, Award, Compass, Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] border-t border-white/10 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 border border-white text-white flex items-center justify-center font-bold text-sm tracking-tighter">
                QA
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base tracking-[0.18em] uppercase text-white leading-none">
                  Quang Anh <span className="font-light tracking-[0.22em]">SKODA</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 mt-1">
                  European Luxury Automotive
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 font-light leading-relaxed pr-2">
              Thương hiệu cá nhân uy tín hàng đầu trong lĩnh vực tư vấn và phân phối dòng xe châu Âu cao cấp. Cam kết trải nghiệm minh bạch, bàn giao xe chuẩn mực và dịch vụ hậu mãi tận tâm.
            </p>

            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-zinc-300">
                <Award className="w-4 h-4 text-[#165B4C]" />
                <span>Bảo hành chính hãng 5 năm hoặc 150.000 km</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Shield className="w-4 h-4 text-[#165B4C]" />
                <span>Tiêu chuẩn an toàn 5 sao Euro NCAP toàn diện</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Hỗ trợ lái thử tận nhà tại Hà Nội &amp; TP.HCM</span>
              </div>
            </div>
          </div>

          {/* Col 2: Dòng xe nổi bật */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white flex items-center gap-2">
              <Car className="w-4 h-4 text-[#165B4C]" />
              <span>Dòng Xe Cao Cấp</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/models/kodiaq-sportline"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Kodiaq Sportline (SUV 7 Chỗ)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/models/octavia-rs"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Octavia RS (Sedan 265PS)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/models/karoq-sportline"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Karoq Sportline (C-SUV)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/models/kushaq"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Kushaq (SUV Đô Thị)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/models/slavia"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Slavia (Sedan Châu Âu)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory"
                  className="hover:text-white transition-colors flex items-center justify-between text-emerald-400 font-medium group"
                >
                  <span>Kho Xe Sẵn Giao Ngay</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Dịch vụ & Hỗ trợ */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#165B4C]" />
              <span>Dịch Vụ &amp; Trải Nghiệm</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/test-drive" className="hover:text-white transition-colors">
                  Đăng Ký Lái Thử Trải Nghiệm
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Đặt Lịch Bảo Dưỡng Định Kỳ
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Gói Bảo Dưỡng Chuẩn Châu Âu
                </Link>
              </li>
              <li>
                <Link href="/dealers" className="hover:text-white transition-colors">
                  Tìm Đại Lý &amp; Showroom Gần Bạn
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  Tin Tức, Sự Kiện &amp; Đánh Giá Xe
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Cơ Hội Nghề Nghiệp &amp; Tuyển Dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Showroom & Liên Hệ Trực Tiếp */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#165B4C]" />
              <span>Showroom &amp; Liên Hệ</span>
            </h4>

            <div className="space-y-3">
              <div>
                <p className="text-white font-medium">Showroom Flagship Hà Nội</p>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Số 88 Lê Văn Lương, P. Nhân Chính, Q. Thanh Xuân, Hà Nội
                </p>
                <p className="text-zinc-300 font-mono text-[11px]">Hotline: 0988.333.666</p>
              </div>

              <div>
                <p className="text-white font-medium">Showroom Flagship TP. Hồ Chí Minh</p>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Số 128 Nguyễn Cơ Thạch, Khu Đô Thị Sala, TP. Thủ Đức, TP.HCM
                </p>
                <p className="text-zinc-300 font-mono text-[11px]">Hotline: 0966.222.888</p>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-1 text-[11px]">
                <p className="flex items-center gap-1.5 text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Giờ mở cửa: 08:00 - 20:00 (Hàng ngày)</span>
                </p>
                <p className="flex items-center gap-1.5 text-zinc-400">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Email: contact@quanganh-skoda.vn</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <p>
            © 2025 Quang Anh SKODA. Tất cả quyền được bảo lưu. Showroom tư vấn thương hiệu cá nhân phong cách châu Âu.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Chính Sách Bảo Mật
            </Link>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Điều Khoản Sử Dụng
            </Link>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Cài Đặt Cookie
            </Link>
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              Tư Vấn Zalo VIP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
