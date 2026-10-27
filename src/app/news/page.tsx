'use client';

import React, { useState, useMemo } from 'react';
import { Newspaper, Search, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import NewsCard from '@/components/NewsCard';
import { NEWS_DATA } from '@/data/news';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const categories = [
    { label: 'Tất Cả Tin Tức', value: 'all' },
    { label: 'Sản Phẩm Mới', value: 'Sản phẩm mới' },
    { label: 'Công Nghệ', value: 'Công nghệ' },
    { label: 'Sự Kiện', value: 'Sự kiện' },
    { label: 'Ưu Đãi Đặc Quyền', value: 'Ưu đãi' },
  ];

  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter((article) => {
      if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = article.title.toLowerCase().includes(q);
        const matchExcerpt = article.excerpt.toLowerCase().includes(q);
        if (!matchTitle && !matchExcerpt) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail.trim()) {
      setIsSubscribed(true);
      setSubscribedEmail('');
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#F2FAF6] text-[#0E3A2F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Tin Tức & Sự Kiện' }]} theme="light" />

        {/* Page Header */}
        <div className="mt-4 mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#0E3A2F] font-semibold">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Thông Cáo Báo Chí &amp; Bài Viết Chuyên Sâu</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0E3A2F]">
            Tin Tức &amp; Sự Kiện
          </h1>
          <p className="text-[#0E3A2F]/75 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Cập nhật những hoạt động mới nhất, phân tích công nghệ ô tô và các chương trình ưu đãi đặc quyền từ thương hiệu cá nhân Quang Anh SKODA.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white border border-[#0E3A2F]/15 p-5 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-sm shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setSelectedCategory(c.value)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors rounded-sm ${
                  selectedCategory === c.value
                    ? 'bg-[#0E3A2F] text-[#78F59C]'
                    : 'text-[#0E3A2F]/70 hover:text-[#0E3A2F] hover:bg-[#F2FAF6]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#0E3A2F]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết..."
              className="w-full bg-[#F2FAF6] border border-[#0E3A2F]/20 pl-9 pr-3 py-2 text-xs text-[#0E3A2F] placeholder-[#0E3A2F]/40 focus:outline-none focus:border-[#0E3A2F] rounded-sm"
            />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* Newsletter Subscription Strip */}
        <div className="bg-white border border-[#0E3A2F]/15 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 rounded-sm shadow-sm">
          <Mail className="w-8 h-8 text-[#0E3A2F] mx-auto" />
          <h3 className="text-xl sm:text-2xl font-light text-[#0E3A2F]">
            Đăng Ký Nhận Bản Tin Đặc Quyền
          </h3>
          <p className="text-[#0E3A2F]/75 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
            Nhận thông báo sớm nhất về các đợt xe mới về cảng, lời mời tham gia sự kiện lái thử VIP và chính sách giá ưu đãi nội bộ.
          </p>

          {isSubscribed ? (
            <div className="inline-flex items-center gap-2 text-[#0E3A2F] text-xs font-mono font-medium p-3 bg-[#F2FAF6] border border-[#0E3A2F]/20 rounded-sm">
              <CheckCircle2 className="w-4 h-4 text-[#0E3A2F]" />
              <span>Cảm ơn Quý khách đã đăng ký thành công bản tin Quang Anh SKODA!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
                placeholder="Nhập địa chỉ email của Quý khách..."
                className="flex-1 bg-[#F2FAF6] border border-[#0E3A2F]/20 px-4 py-2.5 text-xs text-[#0E3A2F] placeholder-[#0E3A2F]/40 focus:outline-none focus:border-[#0E3A2F] rounded-sm"
              />
              <button
                type="submit"
                className="btn-primary-dark px-6 py-2.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap bg-[#0E3A2F] text-white hover:bg-[#081E18] hover:text-[#78F59C] rounded-sm"
              >
                Đăng Ký
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
