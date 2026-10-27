'use client';

import React, { useState } from 'react';
import {
  Wrench,
  ShieldCheck,
  Clock,
  Award,
  ChevronDown,
  CheckCircle2,
  Calendar,
  PhoneCall,
  Sparkles,
  AlertCircle,
  FileCheck
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { SERVICE_PACKAGES, SERVICE_FAQS } from '@/data/services';
import { DEALERS_DATA } from '@/data/dealers';

export default function ServicePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Form State
  const [formState, setFormState] = useState({
    ownerName: '',
    phone: '',
    licensePlate: '',
    model: 'Kodiaq Sportline',
    serviceCenter: DEALERS_DATA[0].id,
    packageType: SERVICE_PACKAGES[1].name,
    bookingDate: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formState.ownerName.trim()) {
      setFormError('Vui lòng nhập họ và tên chủ xe.');
      return;
    }
    if (!formState.phone.trim() || formState.phone.length < 10) {
      setFormError('Vui lòng nhập số điện thoại hợp lệ.');
      return;
    }
    if (!formState.bookingDate) {
      setFormError('Vui lòng chọn ngày mong muốn đem xe tới bảo dưỡng.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
    }, 900);
  };

  const commitments = [
    {
      title: 'Phụ Tùng Châu Âu 100%',
      desc: 'Cam kết linh kiện, dầu nhớt và phụ tùng nhập khẩu chính hãng với tem truy xuất nguồn gốc.',
      icon: ShieldCheck,
    },
    {
      title: 'Kỹ Thuật Viên Đạt Chuẩn',
      desc: 'Đội ngũ kỹ sư cơ khí được đào tạo và cấp chứng chỉ định kỳ theo tiêu chuẩn nhà máy châu Âu.',
      icon: Award,
    },
    {
      title: 'Thiết Bị Chẩn Đoán ODIS',
      desc: 'Hệ thống quét mã lỗi chuyên biệt cho dòng xe VAG, đồng bộ phần mềm ECU mới nhất.',
      icon: Wrench,
    },
    {
      title: 'Phòng Chờ VIP 5 Sao',
      desc: 'Khu vực làm việc tiện nghi, quầy cà phê hảo hạng và camera theo dõi trực tiếp khoang sửa chữa.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#081E18] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Dịch Vụ & Bảo Dưỡng' }]} />

        {/* Page Header */}
        <div className="mt-4 mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#78F59C]">
            <Wrench className="w-3.5 h-3.5" />
            <span>Tiêu Chuẩn Chăm Sóc Hàng Đầu Châu Âu</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
            Dịch Vụ &amp; Bảo Dưỡng Chính Hãng
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
            Giữ trọn độ bền bỉ, an toàn và cảm giác lái nguyên bản cho chiếc xe của Quý khách với quy trình bảo dưỡng chuẩn xác từ Quang Anh SKODA.
          </p>
        </div>

        {/* 4 Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {commitments.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="p-6 bg-[#0b251f] border border-[#78F59C]/20 hover:border-[#78F59C]/40 transition-colors space-y-3 rounded-sm"
              >
                <Icon className="w-5 h-5 text-[#78F59C]" />
                <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
                  {c.title}
                </h3>
                <p className="text-zinc-300 text-xs font-light leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Maintenance Packages Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#78F59C]">
              Minh Bạch &amp; Tiết Kiệm
            </span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Các Gói Bảo Dưỡng Định Kỳ
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm font-light">
              Mỗi gói dịch vụ được thiết kế tối ưu theo từng chu kỳ vận hành của xe, đảm bảo hiệu suất tốt nhất và chi phí hợp lý.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-[#0b251f] border p-8 flex flex-col justify-between relative transition-all rounded-sm ${
                  pkg.isPopular
                    ? 'border-[#78F59C] shadow-xl ring-1 ring-[#78F59C]/40'
                    : 'border-[#78F59C]/20 hover:border-[#78F59C]/40'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-8 px-3 py-0.5 bg-[#78F59C] text-[#081E18] text-[10px] uppercase font-mono font-bold tracking-widest rounded-xs">
                    Khuyên Dùng Cho Xe Mới
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white">{pkg.name}</h3>
                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                      <span>Chu kỳ: {pkg.mileage}</span>
                      <span>•</span>
                      <span>Thời gian: ~{pkg.recommendedTime}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
                      Chi phí dự toán
                    </span>
                    <span className="text-2xl font-mono font-semibold text-[#78F59C]">
                      {pkg.priceEstimate}
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs uppercase font-mono tracking-wider text-zinc-300 block">
                      Hạng mục kiểm tra &amp; thay thế:
                    </span>
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {pkg.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#78F59C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="#booking-section"
                    onClick={() => setFormState((prev) => ({ ...prev, packageType: pkg.name }))}
                    className={`w-full py-2.5 text-center text-xs uppercase tracking-wider font-semibold block transition-colors rounded-sm ${
                      pkg.isPopular
                        ? 'btn-primary-electric text-[#081E18]'
                        : 'border border-[#78F59C]/40 text-white hover:bg-[#78F59C]/10'
                    }`}
                  >
                    Chọn Gói Này &amp; Đặt Lịch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Booking Section */}
        <div id="booking-section" className="mb-20 bg-[#0b251f] border border-[#78F59C]/20 p-6 sm:p-12 shadow-2xl rounded-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">
              Đặt Hẹn Nhanh
            </span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Đặt Lịch Dịch Vụ &amp; Bảo Dưỡng
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              Đặt hẹn trước giúp Quý khách được đón tiếp ưu tiên tại phòng VIP và tiết kiệm thời gian chờ đợi.
            </p>
          </div>

          {bookingSuccess ? (
            <div className="p-8 bg-emerald-950/30 border border-emerald-500/40 text-center max-w-xl mx-auto space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-medium text-white">Đặt Lịch Hẹn Thành Công!</h3>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Cảm ơn Quý khách <strong className="text-white">{formState.ownerName}</strong>. Showroom đã ghi nhận lịch hẹn bảo dưỡng vào ngày <strong className="text-emerald-400">{formState.bookingDate}</strong>. Cố vấn dịch vụ sẽ liên hệ xác nhận chi tiết qua số <strong className="text-white">{formState.phone}</strong> trong ít phút.
              </p>
              <button
                onClick={() => setBookingSuccess(false)}
                className="btn-primary-dark px-6 py-2 text-xs uppercase tracking-wider mt-4"
              >
                Đặt Lịch Khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              {formError && (
                <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Họ và Tên Chủ Xe *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.ownerName}
                    onChange={(e) => setFormState({ ...formState, ownerName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Số Điện Thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="0988 888 888"
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Biển Số Xe (Nếu có)
                  </label>
                  <input
                    type="text"
                    value={formState.licensePlate}
                    onChange={(e) => setFormState({ ...formState, licensePlate: e.target.value })}
                    placeholder="VD: 30K - 123.45"
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Dòng Xe
                  </label>
                  <select
                    value={formState.model}
                    onChange={(e) => setFormState({ ...formState, model: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="Kodiaq" className="bg-zinc-900 text-white">Kodiaq (Sportline / Premium)</option>
                    <option value="Karoq" className="bg-zinc-900 text-white">Karoq (Sportline / Premium)</option>
                    <option value="Octavia RS" className="bg-zinc-900 text-white">Octavia RS (265PS)</option>
                    <option value="Kushaq" className="bg-zinc-900 text-white">Kushaq</option>
                    <option value="Slavia" className="bg-zinc-900 text-white">Slavia</option>
                    <option value="Dòng xe khác" className="bg-zinc-900 text-white">Dòng xe khác</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Trung Tâm Dịch Vụ
                  </label>
                  <select
                    value={formState.serviceCenter}
                    onChange={(e) => setFormState({ ...formState, serviceCenter: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/40"
                  >
                    {DEALERS_DATA.map((d) => (
                      <option key={d.id} value={d.id} className="bg-zinc-900 text-white">
                        {d.name} ({d.city})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Ngày Hẹn Dự Kiến *
                  </label>
                  <input
                    type="date"
                    required
                    value={formState.bookingDate}
                    onChange={(e) => setFormState({ ...formState, bookingDate: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                  Ghi chú hoặc yêu cầu sửa chữa thêm
                </label>
                <textarea
                  rows={3}
                  value={formState.notes}
                  onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                  placeholder="Mô tả hiện tượng xe hoặc các phụ kiện Quý khách muốn lắp đặt thêm..."
                  className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">
                  * Thông tin của Quý khách được bảo mật theo tiêu chuẩn GDPR
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-dark px-8 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
                >
                  {isSubmitting ? 'Đang Xử Lý...' : 'Gửi Yêu Cầu Đặt Lịch'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">
              Giải Đáp Thắc Mắc
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-white">
              Câu Hỏi Thường Gặp Về Dịch Vụ
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {SERVICE_FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-4 text-xs text-zinc-400 font-light leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
