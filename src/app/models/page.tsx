'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal, RotateCcw, Sparkles, Filter, ChevronDown } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import VehicleCard from '@/components/VehicleCard';
import { VEHICLES_DATA } from '@/data/models';
import { VehicleCategory } from '@/types/vehicle';

export default function ModelsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFuel, setSelectedFuel] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories: { label: string; value: string }[] = [
    { label: 'Tất Cả Mẫu Xe', value: 'all' },
    { label: 'SUV Hạng Sang', value: 'SUV' },
    { label: 'Sedan Thể Thao', value: 'Sedan' },
    { label: 'Xe Thuần Điện', value: 'Xe điện' },
    { label: 'Xe Thể Thao & Wagon', value: 'Xe thể thao' },
  ];

  const fuelTypes = [
    { label: 'Mọi nhiên liệu', value: 'all' },
    { label: 'Xăng Tăng Áp', value: 'Xăng Tăng Áp' },
    { label: 'Thuần Điện', value: 'Thuần Điện' },
  ];

  const priceRanges = [
    { label: 'Mọi mức giá', value: 'all' },
    { label: 'Dưới 800 Triệu VNĐ', value: 'under-800m' },
    { label: 'Từ 800 Triệu - 1.2 Tỷ VNĐ', value: '800m-1.2b' },
    { label: 'Trên 1.2 Tỷ VNĐ', value: 'above-1.2b' },
  ];

  const filteredVehicles = useMemo(() => {
    return VEHICLES_DATA.filter((v) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'Xe thể thao') {
          if (v.category !== 'Xe thể thao' && v.category !== 'Wagon') return false;
        } else if (v.category !== selectedCategory) {
          return false;
        }
      }

      // Fuel filter
      if (selectedFuel !== 'all' && v.fuelType !== selectedFuel) {
        return false;
      }

      // Price filter
      if (selectedPriceRange === 'under-800m' && v.priceStartingFrom >= 800000000) return false;
      if (selectedPriceRange === '800m-1.2b' && (v.priceStartingFrom < 800000000 || v.priceStartingFrom > 1200000000)) return false;
      if (selectedPriceRange === 'above-1.2b' && v.priceStartingFrom <= 1200000000) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = v.name.toLowerCase().includes(q);
        const matchTag = v.tagline.toLowerCase().includes(q);
        const matchCat = v.category.toLowerCase().includes(q);
        const matchOriginal = v.originalModelName.toLowerCase().includes(q);
        if (!matchName && !matchTag && !matchCat && !matchOriginal) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceStartingFrom - b.priceStartingFrom;
      if (sortBy === 'price-desc') return b.priceStartingFrom - a.priceStartingFrom;
      return 0; // default featured
    });
  }, [selectedCategory, selectedFuel, selectedPriceRange, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedFuel('all');
    setSelectedPriceRange('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedFuel !== 'all' ||
    selectedPriceRange !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <div className="pt-28 pb-24 bg-[#F2FAF6] text-[#0E3A2F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Dòng Xe Quang Anh SKODA' }]} theme="light" />

        {/* Page Header */}
        <div className="mt-4 mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#0E3A2F] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bộ Sưu Tập Xe Châu Âu Hoàn Mỹ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0E3A2F]">
            Danh Mục Các Dòng Xe
          </h1>
          <p className="text-[#0E3A2F]/75 text-sm sm:text-base max-w-3xl font-light leading-relaxed">
            Khám phá trọn vẹn dải sản phẩm ô tô cao cấp với độ hoàn thiện tinh tế, trang bị tiện nghi đỉnh cao và cảm giác lái chuẩn mực châu Âu từ Quang Anh SKODA.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white border border-[#0E3A2F]/15 p-5 mb-10 space-y-5 shadow-sm rounded-sm">
          {/* Top row: Category tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#0E3A2F]/10">
            {categories.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors rounded-sm ${
                    active
                      ? 'bg-[#0E3A2F] text-[#78F59C]'
                      : 'text-[#0E3A2F]/70 hover:text-[#0E3A2F] hover:bg-[#F2FAF6]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Bottom row: Search + Fuel + Price + Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0E3A2F]/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tên xe, phiên bản..."
                className="w-full bg-[#F2FAF6] border border-[#0E3A2F]/20 pl-10 pr-4 py-2.5 text-xs text-[#0E3A2F] placeholder-[#0E3A2F]/40 focus:outline-none focus:border-[#0E3A2F] rounded-sm transition-colors"
              />
            </div>

            {/* Fuel Selector */}
            <div>
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full bg-[#F2FAF6] border border-[#0E3A2F]/20 px-3.5 py-2.5 text-xs text-[#0E3A2F] focus:outline-none focus:border-[#0E3A2F] rounded-sm transition-colors"
              >
                {fuelTypes.map((fuel) => (
                  <option key={fuel.value} value={fuel.value} className="bg-white text-[#0E3A2F]">
                    {fuel.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Selector */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full bg-[#F2FAF6] border border-[#0E3A2F]/20 px-3.5 py-2.5 text-xs text-[#0E3A2F] focus:outline-none focus:border-[#0E3A2F] rounded-sm transition-colors"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-white text-[#0E3A2F]">
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Selector */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-[#F2FAF6] border border-[#0E3A2F]/20 px-3.5 py-2.5 text-xs text-[#0E3A2F] focus:outline-none focus:border-[#0E3A2F] rounded-sm transition-colors"
              >
                <option value="featured" className="bg-white text-[#0E3A2F]">
                  Sắp xếp: Tiêu biểu nhất
                </option>
                <option value="price-asc" className="bg-white text-[#0E3A2F]">
                  Giá: Tăng dần
                </option>
                <option value="price-desc" className="bg-white text-[#0E3A2F]">
                  Giá: Giảm dần
                </option>
              </select>
            </div>
          </div>

          {/* Active filter summary & reset */}
          <div className="flex items-center justify-between text-xs pt-1 border-t border-[#0E3A2F]/10 text-[#0E3A2F]/70">
            <span>
              Tìm thấy <strong className="text-[#0E3A2F] font-semibold">{filteredVehicles.length}</strong> mẫu xe phù hợp
            </span>
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-[#0E3A2F] hover:text-[#0E3A2F]/70 transition-colors uppercase text-[11px] font-semibold tracking-wider"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đặt lại bộ lọc</span>
              </button>
            )}
          </div>
        </div>

        {/* Vehicles Grid / Empty State */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#0E3A2F]/15 p-16 text-center max-w-xl mx-auto space-y-5 rounded-sm shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#F2FAF6] flex items-center justify-center text-[#0E3A2F]">
              <Filter className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-normal text-[#0E3A2F]">Không tìm thấy mẫu xe phù hợp</h3>
              <p className="text-[#0E3A2F]/70 text-xs leading-relaxed">
                Rất tiếc không có dòng xe nào khớp với tiêu chí tìm kiếm hiện tại của Quý khách. Vui lòng thử thay đổi khoảng giá hoặc loại nhiên liệu.
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="btn-primary-dark px-6 py-2.5 text-xs uppercase tracking-wider inline-flex items-center gap-2 rounded-sm bg-[#0E3A2F] text-white hover:bg-[#081E18] hover:text-[#78F59C]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Xem tất cả xe</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
