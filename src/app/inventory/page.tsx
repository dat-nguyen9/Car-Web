'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Car,
  Search,
  MapPin,
  CheckCircle2,
  Calendar,
  Gift,
  ArrowRight,
  Shield,
  RotateCcw,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { INVENTORY_DATA, InventoryCar } from '@/data/inventory';

export default function InventoryPage() {
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookedCar, setBookedCar] = useState<InventoryCar | null>(null);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState<boolean>(false);

  const filteredInventory = useMemo(() => {
    return INVENTORY_DATA.filter((car) => {
      if (selectedModel !== 'all' && car.modelSlug !== selectedModel) return false;
      if (selectedLocation !== 'all' && !car.location.includes(selectedLocation)) return false;
      if (selectedStatus !== 'all' && car.status !== selectedStatus) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchVin = car.vin.toLowerCase().includes(q);
        const matchName = car.modelName.toLowerCase().includes(q);
        const matchVer = car.versionName.toLowerCase().includes(q);
        const matchColor = car.exteriorColor.toLowerCase().includes(q);
        if (!matchVin && !matchName && !matchVer && !matchColor) return false;
      }
      return true;
    });
  }, [selectedModel, selectedLocation, selectedStatus, searchQuery]);

  const handleOpenDeposit = (car: InventoryCar) => {
    setBookedCar(car);
    setIsDepositModalOpen(true);
  };

  const handleReset = () => {
    setSelectedModel('all');
    setSelectedLocation('all');
    setSelectedStatus('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-28 pb-24 bg-[#081E18] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Kho Xe Có Sẵn' }]} />

        {/* Page Header */}
        <div className="mt-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#78F59C]/20 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#78F59C]">
              <span className="w-2 h-2 rounded-full bg-[#78F59C] animate-pulse" />
              <span>Giao Xe Trong 24 - 48 Giờ</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
              Kho Xe Sẵn Giao Ngay
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
              Danh sách các mẫu xe thực tế đã có mặt tại showroom hoặc kho trung chuyển, đầy đủ hồ sơ giấy tờ xuất hóa đơn và đăng ký biển số nhanh chóng.
            </p>
          </div>

          <div className="space-y-1 text-right shrink-0">
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">
              Số lượng khả dụng
            </span>
            <div className="text-3xl font-mono text-[#78F59C] font-medium">
              {filteredInventory.length} <span className="text-xs text-zinc-300 font-normal">xe có sẵn</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#0b251f] border border-[#78F59C]/20 p-5 mb-10 space-y-4 rounded-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search VIN / Name */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm số VIN, tên phiên bản, màu..."
                className="w-full bg-[#081E18] border border-[#78F59C]/20 pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-[#78F59C] rounded-sm"
              />
            </div>

            {/* Model Filter */}
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-[#081E18] border border-[#78F59C]/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#78F59C] rounded-sm"
            >
              <option value="all" className="bg-[#081E18] text-white">Tất cả mẫu xe</option>
              <option value="kodiaq-sportline" className="bg-[#081E18] text-white">Kodiaq Sportline</option>
              <option value="kodiaq-premium" className="bg-[#081E18] text-white">Kodiaq Premium</option>
              <option value="octavia-rs" className="bg-[#081E18] text-white">Octavia RS</option>
              <option value="karoq-sportline" className="bg-[#081E18] text-white">Karoq Sportline</option>
              <option value="karoq-premium" className="bg-[#081E18] text-white">Karoq Premium</option>
              <option value="kushaq" className="bg-[#081E18] text-white">Kushaq</option>
              <option value="slavia" className="bg-[#081E18] text-white">Slavia</option>
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-[#081E18] border border-[#78F59C]/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#78F59C] rounded-sm"
            >
              <option value="all" className="bg-[#081E18] text-white">Tất cả khu vực showroom</option>
              <option value="Hà Nội" className="bg-[#081E18] text-white">Hà Nội</option>
              <option value="Hồ Chí Minh" className="bg-[#081E18] text-white">TP. Hồ Chí Minh</option>
              <option value="Đà Nẵng" className="bg-[#081E18] text-white">Đà Nẵng</option>
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-[#081E18] border border-[#78F59C]/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#78F59C] rounded-sm"
            >
              <option value="all" className="bg-[#081E18] text-white">Mọi trạng thái</option>
              <option value="Sẵn sàng giao ngay" className="bg-[#081E18] text-white">Sẵn sàng giao ngay</option>
              <option value="Đang về showroom" className="bg-[#081E18] text-white">Đang về showroom</option>
            </select>
          </div>

          <div className="flex items-center justify-between text-xs pt-1 border-t border-[#78F59C]/10 text-zinc-300">
            <span>
              Hiển thị <strong className="text-white">{filteredInventory.length}</strong> xe sẵn sàng
            </span>
            {(selectedModel !== 'all' || selectedLocation !== 'all' || selectedStatus !== 'all' || searchQuery) && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-[#78F59C] hover:underline uppercase text-[11px] tracking-wider"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đặt lại</span>
              </button>
            )}
          </div>
        </div>

        {/* Inventory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInventory.map((car) => {
            const isReady = car.status === 'Sẵn sàng giao ngay';

            return (
              <div
                key={car.id}
                className="bg-[#0b251f] border border-[#78F59C]/20 hover:border-[#78F59C]/40 transition-all flex flex-col justify-between group rounded-sm overflow-hidden"
              >
                {/* Photo & Badges */}
                <div className="relative aspect-[16/10] bg-[#081E18] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.versionName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-semibold rounded-xs ${
                        isReady
                          ? 'bg-[#78F59C] text-[#081E18]'
                          : 'bg-amber-400 text-black'
                      }`}
                    >
                      {car.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white bg-[#081E18]/80 backdrop-blur-md px-3 py-1 border border-[#78F59C]/20">
                    <span>VIN: ...{car.vin.slice(-6)}</span>
                    <span>Đời {car.year}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#78F59C]">
                        {car.category}
                      </span>
                      <span className="text-xs text-zinc-300 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#78F59C]" />
                        {car.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium text-white tracking-tight leading-snug">
                      {car.modelName}
                    </h3>
                    <p className="text-xs text-zinc-300 font-mono">
                      Phiên bản: {car.versionName}
                    </p>

                    {/* Color Swatch */}
                    <div className="flex items-center gap-3 pt-1 text-xs text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <span
                          style={{ backgroundColor: car.exteriorColorHex }}
                          className="w-3.5 h-3.5 rounded-full border border-white/30"
                        />
                        <span>{car.exteriorColor}</span>
                      </div>
                      <span>•</span>
                      <span>Nội thất: {car.interiorColor}</span>
                    </div>

                    {/* Incentives */}
                    {car.incentives.length > 0 && (
                      <div className="pt-2 border-t border-white/5 space-y-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 flex items-center gap-1">
                          <Gift className="w-3 h-3 text-emerald-400" />
                          <span>Ưu đãi áp dụng riêng cho xe này:</span>
                        </span>
                        <ul className="space-y-1">
                          {car.incentives.map((inc, i) => (
                            <li key={i} className="text-[11px] text-zinc-300 flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                        Giá Bán
                      </span>
                      <span className="text-lg font-mono font-semibold text-white">
                        {car.priceFormatted}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleOpenDeposit(car)}
                        className="btn-primary-dark py-2 text-center text-xs uppercase tracking-wider font-semibold"
                      >
                        Giữ Xe / Đặt Cọc
                      </button>
                      <Link
                        href={`/models/${car.modelSlug}`}
                        className="btn-secondary-light py-2 text-center text-xs uppercase tracking-wider font-medium text-zinc-300"
                      >
                        Xem Chi Tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deposit / Reservation Modal */}
      {isDepositModalOpen && bookedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#0f1118] border border-white/20 max-w-lg w-full p-8 shadow-2xl relative space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400">
                  Xác Nhận Giữ Xe Trực Tuyến
                </span>
                <h3 className="text-xl font-normal text-white mt-1">
                  {bookedCar.modelName}
                </h3>
              </div>
              <button
                onClick={() => setIsDepositModalOpen(false)}
                className="text-zinc-500 hover:text-white p-1 text-sm font-mono"
              >
                [ĐÓNG]
              </button>
            </div>

            <div className="space-y-3 text-xs text-zinc-300 bg-white/[0.02] p-4 border border-white/5">
              <p><strong>Phiên bản:</strong> {bookedCar.versionName}</p>
              <p><strong>Màu sắc:</strong> {bookedCar.exteriorColor} / {bookedCar.interiorColor}</p>
              <p><strong>Số VIN:</strong> {bookedCar.vin}</p>
              <p><strong>Hiện có tại:</strong> {bookedCar.location}</p>
              <p><strong>Giá niêm yết:</strong> <span className="text-white font-mono">{bookedCar.priceFormatted}</span></p>
            </div>

            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Để bảo đảm xe không bị bàn giao cho khách hàng khác, Quý khách vui lòng liên hệ ngay với Giám đốc kinh doanh Quang Anh hoặc để lại số điện thoại để hoàn tất thủ tục giữ chỗ ưu tiên trong 24 giờ.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:0988333666"
                className="w-full sm:w-1/2 btn-primary-dark py-2.5 text-center text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Gọi 0988.333.666</span>
              </a>
              <Link
                href="/test-drive"
                className="w-full sm:w-1/2 btn-secondary-light py-2.5 text-center text-xs uppercase tracking-wider font-medium text-zinc-300"
              >
                Đăng Ký Xem Xe Thực Tế
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
