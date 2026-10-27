import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import DealerSearch from '@/components/DealerSearch';
import { Shield, PhoneCall, Clock, MapPin, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hệ Thống Showroom & Đại Lý | Quang Anh SKODA',
  description:
    'Tìm đại lý và showroom Quang Anh SKODA gần bạn nhất tại Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Hải Phòng. Trải nghiệm xe sang châu Âu và dịch vụ bảo dưỡng chuẩn 3S.',
};

export default function DealersPage() {
  return (
    <div className="pt-28 pb-24 bg-[#08090b] text-[#f3f4f6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Hệ Thống Đại Lý' }]} />

        {/* Page Header */}
        <div className="mt-4 mb-14 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>Mạng Lưới Showroom Chính Hãng</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
            Hệ Thống Showroom &amp; Đại Lý
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Hiện diện tại các thành phố trọng điểm của Việt Nam với cơ sở vật chất chuẩn mực châu Âu, không gian trưng bày xe sang trọng và xưởng dịch vụ kỹ thuật cao.
          </p>
        </div>

        {/* Dealer Finder Component (Dark Mode Card) */}
        <div className="bg-white rounded-sm text-zinc-900 overflow-hidden shadow-2xl">
          <DealerSearch />
        </div>

        {/* Showroom Service Commitments */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#0f1118] border border-white/10 space-y-3">
            <Award className="w-6 h-6 text-emerald-400" />
            <h3 className="text-base font-medium text-white">Tiêu Chuẩn 3S Châu Âu</h3>
            <p className="text-zinc-400 text-xs font-light leading-relaxed">
              Tất cả các đại lý đều tích hợp khu trưng bày bán hàng (Sales), dịch vụ bảo dưỡng (Service) và phụ tùng chính hãng (Spare parts).
            </p>
          </div>

          <div className="p-8 bg-[#0f1118] border border-white/10 space-y-3">
            <Clock className="w-6 h-6 text-emerald-400" />
            <h3 className="text-base font-medium text-white">Thời Gian Linh Hoạt</h3>
            <p className="text-zinc-400 text-xs font-light leading-relaxed">
              Mở cửa đón khách từ 08:00 đến 20:00 suốt cả tuần, bao gồm cả thứ Bảy và Chủ Nhật, hỗ trợ lái thử ngoài giờ theo lịch hẹn trước.
            </p>
          </div>

          <div className="p-8 bg-[#0f1118] border border-white/10 space-y-3">
            <PhoneCall className="w-6 h-6 text-emerald-400" />
            <h3 className="text-base font-medium text-white">Hỗ Trợ Trực Tuyến 24/7</h3>
            <p className="text-zinc-400 text-xs font-light leading-relaxed">
              Bộ phận chăm sóc khách hàng VIP và cứu hộ giao thông toàn quốc sẵn sàng phục vụ Quý khách trên mọi hành trình.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
