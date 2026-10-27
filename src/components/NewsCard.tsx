'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { NewsArticle } from '@/types/vehicle';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="bg-white border border-[#0E3A2F]/15 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#0E3A2F]/40 hover:shadow-lg transition-all duration-300">
      {/* Cover Image */}
      <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden img-zoom-container">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#0E3A2F] text-[10px] uppercase font-mono tracking-widest font-semibold text-[#78F59C] border border-[#78F59C]/20">
            {article.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-[11px] text-[#0E3A2F]/60 font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-lg font-normal text-[#0E3A2F] tracking-tight group-hover:text-[#0E3A2F] group-hover:font-medium transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="text-xs text-[#0E3A2F]/70 font-light line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-2 border-t border-[#0E3A2F]/10">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0E3A2F] group-hover:text-[#0E3A2F]/80 transition-colors"
          >
            <span>Đọc Thêm</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
