'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  Award,
  TrendingUp,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

export default function CareersPage() {
  const [selectedJobId, setSelectedJobId] = useState<string>('sales-hn');
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [cvLink, setCvLink] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const positions: JobPosition[] = [
    {
      id: 'sales-hn',
      title: 'Chuyên Viên Tư Vấn Bán Hàng Xe Sang (Senior Sales Consultant)',
      department: 'Phòng Kinh Doanh',
      location: 'Hà Nội (Showroom Flagship)',
      type: 'Toàn thời gian',
      salary: '25.000.000 - 80.000.000+ VNĐ (Lương cứng + Thưởng hoa hồng)',
      description:
        'Tư vấn trực tiếp cho khách hàng thượng lưu về các dòng xe Kodiaq, Karoq và Octavia RS, dẫn dắt trải nghiệm lái thử và xây dựng mối quan hệ bền vững.',
      requirements: [
        'Tối thiểu 2 năm kinh nghiệm bán hàng trong lĩnh vực ô tô hạng sang hoặc bất động sản cao cấp.',
        'Kỹ năng giao tiếp xuất sắc, phong thái thanh lịch, tự tin làm việc với khách hàng VIP.',
        'Có bằng lái xe ô tô hạng B2 trở lên, hiểu biết cơ bản về kỹ thuật ô tô châu Âu.',
      ],
    },
    {
      id: 'tech-hn',
      title: 'Kỹ Thuật Viên Cơ Điện Ô Tô Chuẩn VAG (Diagnostic Technician)',
      department: 'Khối Kỹ Thuật & Dịch Vụ',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      salary: '18.000.000 - 35.000.000 VNĐ',
      description:
        'Thực hiện bảo dưỡng định kỳ, chẩn đoán lỗi chuyên sâu bằng máy ODIS, sửa chữa hệ thống gầm máy và điện tử trên các dòng xe Skoda / Volkswagen.',
      requirements: [
        'Tốt nghiệp chuyên ngành Công nghệ kỹ thuật ô tô các trường Đại học/Cao đẳng.',
        'Ít nhất 2 năm kinh nghiệm làm việc tại xưởng dịch vụ các thương hiệu xe châu Âu (Audi, VW, BMW, Mercedes-Benz).',
        'Có chứng chỉ an toàn xe điện / Hybrid là lợi thế lớn.',
      ],
    },
    {
      id: 'cx-hcm',
      title: 'Chuyên Viên Trải Nghiệm Khách Hàng VIP (Customer Experience)',
      department: 'Bộ Phận Vận Hành & Khách Hàng',
      location: 'TP. Hồ Chí Minh (Showroom Sala)',
      type: 'Toàn thời gian',
      salary: '16.000.000 - 25.000.000 VNĐ',
      description:
        'Chăm sóc khách hàng tại khu vực VIP Lounge, điều phối lịch lái thử, tổ chức sự kiện ra mắt và khảo sát mức độ hài lòng khách hàng.',
      requirements: [
        'Kinh nghiệm từ 1 năm trong ngành khách sạn 5 sao, hàng không hoặc showroom xa xỉ.',
        'Ngoại hình sáng, giọng nói chuẩn, tư duy phục vụ hiếu khách (hospitality mindset).',
        'Tiếng Anh giao tiếp tốt.',
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!candidateName.trim() || !candidatePhone.trim() || !candidateEmail.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ họ tên, số điện thoại và email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  const perks = [
    {
      title: 'Thu Nhập Xứng Đáng',
      desc: 'Chính sách hoa hồng lũy tiến hàng đầu thị trường cùng các khoản thưởng nóng khi vượt KPI.',
      icon: TrendingUp,
    },
    {
      title: 'Đào Tạo Chuẩn Châu Âu',
      desc: 'Cơ hội tham gia các khóa đào tạo trực tiếp từ chuyên gia của Skoda và tập đoàn Volkswagen.',
      icon: Award,
    },
    {
      title: 'Môi Trường Thượng Lưu',
      desc: 'Làm việc trong không gian showroom 5 sao hiện đại, mở rộng mạng lưới quan hệ chất lượng cao.',
      icon: Users,
    },
    {
      title: 'Phúc Lợi Toàn Diện',
      desc: 'Bảo hiểm sức khỏe cao cấp Bảo Việt, du lịch nghỉ dưỡng hàng năm tại các resort hàng đầu.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#081E18] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Cơ Hội Nghề Nghiệp' }]} />

        {/* Page Header */}
        <div className="mt-4 mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#78F59C]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Gia Nhập Đội Ngũ Tiên Phong</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
            Cơ Hội Nghề Nghiệp
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
            Chúng tôi luôn tìm kiếm những cộng sự tài năng, đam mê ô tô và khát khao định hình tiêu chuẩn phục vụ xe sang chuẩn mực tại Việt Nam.
          </p>
        </div>

        {/* 4 Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 bg-[#0b251f] border border-[#78F59C]/20 hover:border-[#78F59C]/40 transition-colors space-y-3 rounded-sm"
              >
                <Icon className="w-5 h-5 text-[#78F59C]" />
                <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
                  {p.title}
                </h3>
                <p className="text-zinc-300 text-xs font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Open Job Positions List */}
        <div className="mb-20">
          <div className="mb-10 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#78F59C]">
              Vị Trí Đang Mở Tuyển
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white">
              Cơ Hội Tỏa Sáng Cùng Quang Anh SKODA
            </h2>
          </div>

          <div className="space-y-6">
            {positions.map((job) => (
              <div
                key={job.id}
                className="bg-[#0f1118] border border-white/10 p-6 sm:p-8 hover:border-white/30 transition-all space-y-5"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-medium text-white mt-1">{job.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-zinc-300 font-light leading-relaxed">
                  <p className="mb-3">{job.description}</p>
                  <p className="text-white font-medium mb-1">Mức thu nhập: <span className="text-emerald-400 font-mono">{job.salary}</span></p>
                  
                  <div className="mt-3 space-y-1">
                    <span className="text-zinc-400 font-medium">Yêu cầu then chốt:</span>
                    <ul className="list-disc list-inside space-y-1 text-zinc-400">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <a
                    href="#apply-form"
                    onClick={() => setSelectedJobId(job.id)}
                    className="btn-primary-dark px-6 py-2.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
                  >
                    <span>Ứng Tuyển Vị Trí Này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply-form" className="max-w-3xl mx-auto bg-[#0b251f] border border-[#78F59C]/20 p-8 sm:p-12 shadow-2xl rounded-sm">
          <div className="border-b border-[#78F59C]/20 pb-6 mb-8 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#78F59C]">
              Gửi Hồ Sơ
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-white">
              Nộp Hồ Sơ Ứng Tuyển Trực Tuyến
            </h2>
            <p className="text-zinc-300 text-xs">
              Bộ phận Nhân sự sẽ phản hồi trong vòng 48 giờ làm việc kể từ khi nhận đủ thông tin.
            </p>
          </div>

          {submitSuccess ? (
            <div className="p-8 bg-[#081E18] border border-[#78F59C]/40 text-center space-y-4 rounded-sm">
              <CheckCircle2 className="w-12 h-12 text-[#78F59C] mx-auto" />
              <h3 className="text-xl font-medium text-white">Nộp Hồ Sơ Thành Công!</h3>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Cảm ơn bạn <strong className="text-white">{candidateName}</strong> đã quan tâm tới Quang Anh SKODA. Chúng tôi sẽ xem xét CV và liên hệ hẹn phỏng vấn qua số điện thoại <strong className="text-[#78F59C]">{candidatePhone}</strong>.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="btn-primary-electric px-6 py-2 text-xs uppercase tracking-wider mt-4 text-[#081E18] font-bold rounded-sm"
              >
                Gửi Hồ Sơ Khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                  Vị Trí Ứng Tuyển *
                </label>
                <select
                  value={selectedJobId}
                  onChange={(e) => setSelectedJobId(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/40"
                >
                  {positions.map((p) => (
                    <option key={p.id} value={p.id} className="bg-zinc-900 text-white">
                      {p.title} - {p.location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Họ và Tên Của Bạn *
                  </label>
                  <input
                    type="text"
                    required
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Số Điện Thoại Liên Hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={candidatePhone}
                    onChange={(e) => setCandidatePhone(e.target.value)}
                    placeholder="0988 888 888"
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Địa Chỉ Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                    Link CV / LinkedIn / Portfolio (Drive, TopCV...)
                  </label>
                  <input
                    type="url"
                    value={cvLink}
                    onChange={(e) => setCvLink(e.target.value)}
                    placeholder="https://drive.google.com/..."
                    className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                  Đôi Nét Về Bản Thân &amp; Động Lực Gia Nhập
                </label>
                <textarea
                  rows={3}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Chia sẻ ngắn về kinh nghiệm bán hàng xe hoặc thế mạnh kỹ thuật của bạn..."
                  className="w-full bg-black/40 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">
                  Thông tin ứng viên được bảo mật nội bộ 100%
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-dark px-8 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Đang Gửi...' : 'Nộp Hồ Sơ Ứng Tuyển'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
