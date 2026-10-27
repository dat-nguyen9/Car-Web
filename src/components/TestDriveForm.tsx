'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck, Compass, Phone } from 'lucide-react';
import { VEHICLES_DATA } from '@/data/models';
import { DEALERS_DATA, CITIES_LIST } from '@/data/dealers';
import { TestDriveFormData } from '@/types/vehicle';

interface TestDriveFormProps {
  defaultModelSlug?: string;
  defaultDealerId?: string;
  isCompact?: boolean;
}

export default function TestDriveForm({
  defaultModelSlug,
  defaultDealerId,
  isCompact = false
}: TestDriveFormProps) {
  const [formData, setFormData] = useState<TestDriveFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Hà Nội',
    interestedModel: defaultModelSlug || VEHICLES_DATA[0].slug,
    preferredDealer: defaultDealerId || DEALERS_DATA[0].id,
    preferredDate: '',
    notes: '',
    agreedToPolicy: false,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successCode, setSuccessCode] = useState<string | null>(null);

  const selectedVehicle = VEHICLES_DATA.find((v) => v.slug === formData.interestedModel) || VEHICLES_DATA[0];
  const selectedDealer = DEALERS_DATA.find((d) => d.id === formData.preferredDealer) || DEALERS_DATA[0];

  const validatePhone = (phone: string) => {
    const re = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    return re.test(phone.replace(/\s+/g, ''));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validations
    if (!formData.fullName.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên của Quý khách.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrorMsg('Số điện thoại không hợp lệ. Vui lòng kiểm tra lại (VD: 0988 888 888).');
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrorMsg('Địa chỉ email không hợp lệ. Vui lòng kiểm tra lại.');
      return;
    }
    if (!formData.agreedToPolicy) {
      setErrorMsg('Vui lòng xác nhận đồng ý với Chính sách bảo mật thông tin khách hàng.');
      return;
    }

    setLoading(true);

    // Mock API call simulation with 800ms delay
    setTimeout(() => {
      setLoading(false);
      const code = 'SKODA-VIP-' + Math.floor(100000 + Math.random() * 900000);
      setSuccessCode(code);
    }, 850);
  };

  return (
    <div className="w-full">
      {successCode ? (
        <div className="p-8 sm:p-12 bg-white border border-emerald-200 rounded-sm shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-800">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-mono font-bold block">
              Đăng Ký Thành Công &bull; Ưu Tiên Tiếp Đón VIP
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-zinc-950">
              Kính chào Quý khách, <span className="font-semibold">{formData.fullName}</span>
            </h3>
            <p className="text-sm text-zinc-600 font-light max-w-lg mx-auto">
              Lịch lái thử mẫu xe <strong className="text-zinc-900">{selectedVehicle.name}</strong> tại{' '}
              <strong className="text-zinc-900">{selectedDealer.name}</strong> đã được xác nhận. 
              Chuyên viên tư vấn cao cấp sẽ liên hệ với Quý khách qua số <span className="font-mono font-semibold">{formData.phone}</span> để xác nhận lộ trình chạy thử.
            </p>
          </div>

          {/* Ticket Badge */}
          <div className="max-w-md mx-auto p-5 bg-zinc-50 border border-zinc-200 rounded-sm text-left space-y-2.5 font-mono text-xs">
            <div className="flex justify-between border-b border-zinc-200 pb-2">
              <span className="text-zinc-500 font-sans">Mã Hẹn Lái Thử VIP:</span>
              <span className="font-bold text-emerald-800 text-sm">{successCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500 font-sans">Mẫu Xe:</span>
              <span className="text-zinc-900 font-bold">{selectedVehicle.shortName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500 font-sans">Đại Lý Tiếp Đón:</span>
              <span className="text-zinc-900 font-semibold truncate max-w-[220px]">{selectedDealer.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500 font-sans">Ngày Dự Kiến:</span>
              <span className="text-zinc-900 font-semibold">{formData.preferredDate || 'Liên hệ hẹn ngày'}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setSuccessCode(null);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  city: 'Hà Nội',
                  interestedModel: VEHICLES_DATA[0].slug,
                  preferredDealer: DEALERS_DATA[0].id,
                  preferredDate: '',
                  notes: '',
                  agreedToPolicy: false,
                });
              }}
              className="btn-primary-dark px-8 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider"
            >
              Đăng Ký Thêm Lịch Hẹn Khác
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-10 border border-zinc-200 rounded-sm shadow-sm">
          {errorMsg && (
            <div className="p-4 rounded-sm bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Row 1: Model & Dealer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-700 block">
                Mẫu Xe Quý Khách Quan Tâm *:
              </label>
              <select
                value={formData.interestedModel}
                onChange={(e) => setFormData({ ...formData, interestedModel: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black rounded-sm cursor-pointer"
              >
                {VEHICLES_DATA.map((v) => (
                  <option key={v.slug} value={v.slug}>
                    {v.name} ({v.priceFormatted})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-700 block">
                Showroom Tiếp Đón *:
              </label>
              <select
                value={formData.preferredDealer}
                onChange={(e) => setFormData({ ...formData, preferredDealer: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black rounded-sm cursor-pointer"
              >
                {DEALERS_DATA.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.city} &bull; {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-700 block">
                Họ Và Tên Quý Khách *:
              </label>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black rounded-sm"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-700 block">
                Số Điện Thoại Di Động *:
              </label>
              <input
                type="tel"
                placeholder="0988 888 888"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black rounded-sm"
                required
              />
            </div>
          </div>

          {/* Row 3: Email & Preferred Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-700 block">
                Địa Chỉ Email *:
              </label>
              <input
                type="email"
                placeholder="email@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black rounded-sm"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-700 block">
                Ngày Lái Thử Dự Kiến:
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black rounded-sm"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-700 block">
              Ghi Chú Hoặc Tuyến Đường Thử Nghiệm Mong Muốn:
            </label>
            <textarea
              rows={2}
              placeholder="Yêu cầu riêng về thời gian, chuyên gia lái xe đồng hành, chạy thử cao tốc..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-black rounded-sm"
            />
          </div>

          {/* Privacy Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreedToPolicy}
                onChange={(e) => setFormData({ ...formData, agreedToPolicy: e.target.checked })}
                className="mt-1 w-4 h-4 rounded text-black focus:ring-black accent-black"
              />
              <span className="text-xs text-zinc-600 font-light leading-relaxed">
                Tôi đồng ý để Quang Anh SKODA lưu trữ thông tin và liên hệ nhằm mục đích sắp xếp lịch lái thử, gửi báo giá và tư vấn chương trình ưu đãi theo{' '}
                <Link href="/privacy" className="underline hover:text-black font-normal">
                  Chính sách bảo mật
                </Link>
                .
              </span>
            </label>
          </div>

          {/* Submit CTA Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary-dark py-4 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer rounded-sm shadow-md"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang Xử Lý Hồ Sơ Lái Thử...</span>
                </>
              ) : (
                <>
                  <span>Xác Nhận Đăng Ký Lái Thử Trực Tuyến</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Bảo hiểm trách nhiệm 100% được chi trả trọn gói bởi Quang Anh SKODA</span>
          </div>
        </form>
      )}
    </div>
  );
}
