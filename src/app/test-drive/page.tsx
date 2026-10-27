'use client';

import React from 'react';
import { Sparkles, Shield, Clock, MapPin, Award, CheckCircle2, PhoneCall } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import TestDriveForm from '@/components/TestDriveForm';

export default function TestDrivePage() {
  const steps = [
    {
      step: '01',
      title: 'Đăng Ký Thông Tin',
      desc: 'Điền mẫu xe yêu thích, thời gian mong muốn và showroom tiện lợi nhất cho Quý khách.',
    },
    {
      step: '02',
      title: 'Xác Nhận Lịch Hẹn',
      desc: 'Chuyên viên tư vấn Quang Anh SKODA sẽ liên hệ trong 15 phút để chuẩn bị xe chu đáo.',
    },
    {
      step: '03',
      title: 'Trải Nghiệm Trực Tiếp',
      desc: 'Lái thử trên cung đường hỗn hợp hoặc yêu cầu giao xe lái thử tận nhà tại Hà Nội & TP.HCM.',
    },
    {
      step: '04',
      title: 'Đặc Quyền & Quà Tặng',
      desc: 'Nhận gói quà lưu niệm cao cấp và báo giá dự toán lăn bánh tốt nhất thị trường.',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#08090b] text-[#f3f4f6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Đăng Ký Lái Thử' }]} />

        {/* Header */}
        <div className="mt-4 mb-14 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trải Nghiệm Chuẩn Mực Châu Âu</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
            Đăng Ký Lái Thử Xe
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Cảm nhận độ chính xác của vô-lăng, sự đầm chắc của khung gầm và hệ thống hỗ trợ lái thông minh trên các dòng xe NOVA X5, NOVA S7 và NOVA E9.
          </p>
        </div>

        {/* 4 Steps Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((st, i) => (
            <div
              key={i}
              className="p-6 bg-[#0f1118] border border-white/10 hover:border-white/25 transition-colors space-y-3"
            >
              <div className="text-2xl font-mono font-light text-emerald-400">
                {st.step}
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {st.title}
              </h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Form Section */}
        <div className="max-w-4xl mx-auto bg-[#0d0e14] border border-white/10 p-6 sm:p-12 shadow-2xl">
          <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-normal text-white">Thông Tin Khách Hàng</h2>
              <p className="text-zinc-400 text-xs">Vui lòng điền chính xác để chúng tôi phục vụ chu đáo nhất</p>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <Shield className="w-4 h-4" />
              <span>Cam kết bảo mật thông tin 100%</span>
            </div>
          </div>

          <TestDriveForm />
        </div>

        {/* VIP Hotline Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <PhoneCall className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <strong className="text-white block font-medium">Cần hỗ trợ lái thử gấp trong ngày?</strong>
              <span>Liên hệ hotline tư vấn trực tiếp 24/7 của Quang Anh SKODA</span>
            </div>
          </div>
          <a
            href="tel:0988333666"
            className="btn-secondary-light px-5 py-2 uppercase font-mono tracking-wider text-white text-center"
          >
            Hotline: 0988.333.666
          </a>
        </div>
      </div>
    </div>
  );
}
