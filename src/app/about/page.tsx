import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Shield, Sparkles, HeartHandshake, Compass, ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi | Quang Anh SKODA',
  description:
    'Tìm hiểu về thương hiệu cá nhân Quang Anh SKODA - Cầu nối mang những giá trị cơ khí đỉnh cao và phong cách sống chuẩn mực châu Âu đến với người dùng Việt Nam.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Minh Bạch Tuyệt Đối',
      desc: 'Mọi thông tin về giá bán, nguồn gốc xe, thời gian bàn giao và chính sách bảo hành đều được công khai rõ ràng, không chi phí ẩn.',
      icon: Shield,
    },
    {
      title: 'Chuyên Sâu & Tận Tâm',
      desc: 'Tư vấn dựa trên nhu cầu thực tế của từng gia đình và doanh nghiệp, không chạy theo doanh số mà chú trọng trải nghiệm lâu dài.',
      icon: UserCheck,
    },
    {
      title: 'Giá Trị Thực Chất',
      desc: 'Tôn vinh triết lý cơ khí châu Âu bền bỉ, an toàn chuẩn 5 sao Euro NCAP và chi phí sở hữu, bảo dưỡng hợp lý nhất phân khúc.',
      icon: Award,
    },
    {
      title: 'Đồng Hành Trọn Vòng Đời',
      desc: 'Từ ngày đầu lái thử, hoàn thiện thủ tục biển số đến các kỳ bảo dưỡng định kỳ và hỗ trợ cứu hộ 24/7 trên mọi cung đường.',
      icon: HeartHandshake,
    },
  ];

  const cleverFeatures = [
    'Ô tích hợp sẵn trong cánh cửa người lái với khe thoát nước thông minh',
    'Phễu cao su chống tràn tích hợp nắp bình nước rửa kính động cơ',
    'Cốp mở đá chân thông minh Virtual Pedal cùng cơ cấu mở Liftback siêu rộng',
    'Hệ thống móc treo hành lý và lưới giữ đồ đa điểm chống xô lệch trong khoang hành lý',
    'Rèm che nắng cuộn cơ tích hợp cửa sau và kính cách nhiệt tối màu cao cấp',
  ];

  return (
    <div className="pt-28 pb-24 bg-[#081E18] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Về Chúng Tôi' }]} />

        {/* Page Header */}
        <div className="mt-4 mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#78F59C]">
            <Compass className="w-3.5 h-3.5" />
            <span>Thương Hiệu Cá Nhân Phân Phối Xe Sang Châu Âu</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
            Về Quang Anh SKODA
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
            Được kiến tạo từ niềm đam mê sâu sắc với kỹ nghệ cơ khí châu Âu, Quang Anh SKODA là người bạn đồng hành tin cậy trên hành trình chinh phục những cung đường của Quý khách.
          </p>
        </div>

        {/* Story / Founder Intro Section (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 bg-[#0b251f] border border-[#78F59C]/20 p-8 sm:p-14 rounded-sm">
          <div className="relative aspect-[4/5] bg-[#081E18] border border-[#78F59C]/20 overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
              alt="Quang Anh - Nhà sáng lập thương hiệu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081E18]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-[#78F59C]">
                Founder &amp; Managing Director
              </span>
              <h3 className="text-xl font-medium">Nguyễn Quang Anh</h3>
              <p className="text-zinc-300 text-xs font-light">
                Chuyên gia tư vấn giải pháp ô tô cao cấp phong cách Châu Âu
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#78F59C]">
              Lời Ngỏ Từ Nhà Sáng Lập
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-snug">
              &quot;Một chiếc xe tốt không chỉ đến từ thông số, mà từ sự an tâm trong từng dặm hành trình.&quot;
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              <p>
                Chào mừng Quý khách đến với không gian trải nghiệm cá nhân của tôi. Trong suốt nhiều năm gắn bó với thị trường ô tô Việt Nam, tôi nhận thấy khách hàng ngày càng tinh tế hơn: họ không tìm kiếm những thứ hào nhoáng rỗng tuếch, mà đánh giá cao chất lượng chế tạo bền bỉ, độ an toàn tuyệt đối và những tiện ích thực sự thông minh.
              </p>
              <p>
                Đó chính là lý do tôi chọn gắn bó cùng dòng xe Skoda châu Âu — thương hiệu có bề dày lịch sử gần 130 năm với nền tảng khung gầm cơ khí chuẩn Đức từ tập đoàn Volkswagen.
              </p>
              <p>
                Tại Quang Anh SKODA, tôi và đội ngũ cam kết mang lại sự tư vấn chân thành, trung thực, giúp Quý khách và gia đình chọn được cỗ máy phù hợp nhất với phong cách sống.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/test-drive"
                className="btn-primary-electric px-6 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 text-[#081E18] rounded-sm"
              >
                <span>Hẹn Lịch Tư Vấn Trực Tiếp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-10 bg-[#0b251f] border border-[#78F59C]/20 space-y-4 rounded-sm">
            <div className="w-10 h-10 border border-[#78F59C]/40 text-[#78F59C] flex items-center justify-center font-mono text-sm rounded-sm">
              01
            </div>
            <h3 className="text-xl font-normal text-white">Tầm Nhìn Thương Hiệu</h3>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
              Trở thành thương hiệu cá nhân tư vấn và phân phối xe sang châu Âu uy tín hàng đầu tại Việt Nam, kiến tạo cộng đồng những chủ xe am hiểu kỹ thuật và yêu thích trải nghiệm xê dịch bền vững.
            </p>
          </div>

          <div className="p-10 bg-[#0b251f] border border-[#78F59C]/20 space-y-4 rounded-sm">
            <div className="w-10 h-10 border border-[#78F59C]/40 text-[#78F59C] flex items-center justify-center font-mono text-sm rounded-sm">
              02
            </div>
            <h3 className="text-xl font-normal text-white">Sứ Mệnh Phục Vụ</h3>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
              Tối ưu hóa hành trình sở hữu xe của khách hàng: từ lúc tìm hiểu, thẩm định tài chính, chọn phiên bản cá nhân hóa đến dịch vụ chăm sóc hậu mãi 5 sao trọn vòng đời sản phẩm.
            </p>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#78F59C]">
              Nguyên Tắc Hành Xử
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white">
              Giá Trị Cốt Lõi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-8 bg-[#0b251f] border border-[#78F59C]/20 hover:border-[#78F59C]/40 transition-colors space-y-4 rounded-sm"
                >
                  <Icon className="w-6 h-6 text-[#78F59C]" />
                  <h3 className="text-base font-medium text-white">{v.title}</h3>
                  <p className="text-zinc-300 text-xs font-light leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Simply Clever Philosophy Showcase */}
        <div className="bg-[#0b251f] border border-[#78F59C]/20 p-8 sm:p-14 rounded-sm">
          <div className="max-w-3xl mb-8 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#78F59C]">
              Triết Lý Châu Âu Độc Bản
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white">
              Simply Clever — Thông Minh Trong Từng Chi Tiết
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
              Skoda không tạo ra công nghệ chỉ để phô diễn. Mọi tính năng Simply Clever được sinh ra để giải quyết những phiền toái nhỏ nhất của người lái xe hàng ngày.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cleverFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-[#081E18]/50 border border-[#78F59C]/15 text-xs text-zinc-300 rounded-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#78F59C] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
