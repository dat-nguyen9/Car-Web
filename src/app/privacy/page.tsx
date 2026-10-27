import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật Dữ Liệu | Quang Anh SKODA',
  description:
    'Chính sách bảo mật thông tin cá nhân khách hàng của Quang Anh SKODA, tuân thủ Nghị định 13/2023/NĐ-CP và tiêu chuẩn an toàn bảo mật châu Âu GDPR.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-[#08090b] text-[#f3f4f6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Chính Sách Bảo Mật' }]} />

        {/* Page Header */}
        <div className="mt-4 mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400">
            <Lock className="w-3.5 h-3.5" />
            <span>Bảo Mật Dữ Liệu &amp; Quyền Riêng Tư</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            Chính Sách Bảo Mật Thông Tin
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Áp dụng từ ngày 01 tháng 01 năm 2025. Cam kết tuân thủ Nghị định 13/2023/NĐ-CP của Chính phủ Việt Nam và các nguyên tắc bảo vệ quyền riêng tư tiêu chuẩn châu Âu (GDPR).
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-[#0f1118] border border-white/10 p-8 sm:p-12 space-y-10 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>1. Cam Kết Quyền Riêng Tư Của Quang Anh SKODA</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Chúng tôi hiểu rằng thông tin cá nhân của Quý khách là tài sản quý giá và riêng tư nhất. Thương hiệu cá nhân Quang Anh SKODA cam kết bảo vệ dữ liệu của Quý khách với sự cẩn trọng tối đa, áp dụng các biện pháp an ninh kỹ thuật số hiện đại và không bao giờ thương mại hóa hoặc bán dữ liệu cho bên thứ ba.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>2. Thu Thập Dữ Liệu Khách Hàng</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Khi Quý khách tương tác với website qua các biểu mẫu Đăng ký lái thử, Đặt lịch bảo dưỡng, hoặc Yêu cầu tư vấn báo giá, chúng tôi thu thập các thông tin sau:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400">
              <li>Họ và tên, giới tính và cách xưng hô mong muốn.</li>
              <li>Số điện thoại liên lạc và địa chỉ thư điện tử (email).</li>
              <li>Tỉnh/thành phố cư trú và showroom mong muốn nhận xe hoặc lái thử.</li>
              <li>Mẫu xe quan tâm (NOVA X5, NOVA S7, NOVA E9...) và các ghi chú riêng biệt.</li>
              <li>Dữ liệu kỹ thuật ẩn danh (địa chỉ IP, loại trình duyệt, thời lượng truy cập trang) phục vụ tối ưu hóa tốc độ tải trang.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>3. Mục Đích Xử Lý Thông Tin</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Dữ liệu thu thập được sử dụng riêng biệt cho các mục đích hợp pháp sau:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block">Sắp Xếp Lái Thử &amp; Báo Giá</strong>
                <span className="text-[11px] text-zinc-400">Điều phối xe lái thử tận nhà hoặc chuẩn bị xe sẵn sàng tại showroom VIP.</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block">Nhắc Lịch Bảo Dưỡng Hậu Mãi</strong>
                <span className="text-[11px] text-zinc-400">Thông báo chu kỳ thay dầu, kiểm tra an toàn gầm phanh định kỳ 6 tháng.</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block">Đặc Quyền Khách Hàng VIP</strong>
                <span className="text-[11px] text-zinc-400">Gửi thiệp mời tham dự sự kiện ra mắt xe mới và hành trình Caravan châu Âu.</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block">Hỗ Trợ Thủ Tục Pháp Lý</strong>
                <span className="text-[11px] text-zinc-400">Hỗ trợ đăng ký biển số, hoàn tất hợp đồng bảo hiểm vật chất chính hãng.</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>4. Quyền Của Khách Hàng Đối Với Dữ Liệu</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Quý khách có toàn quyền yêu cầu:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400">
              <li>Kiểm tra, trích xuất bản sao dữ liệu cá nhân đang được lưu trữ.</li>
              <li>Cập nhật hoặc đính chính thông tin khi có thay đổi số điện thoại/địa chỉ.</li>
              <li>Rút lại sự đồng ý hoặc yêu cầu xóa vĩnh viễn dữ liệu khỏi hệ thống CRM.</li>
              <li>Từ chối nhận các email hoặc tin nhắn giới thiệu sản phẩm bất kỳ lúc nào.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>5. Bộ Phận Phụ Trách Bảo Vệ Dữ Liệu (DPO)</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Mọi thắc mắc hoặc yêu cầu liên quan đến chính sách bảo mật, xin vui lòng gửi thư trực tiếp đến văn phòng Quang Anh SKODA:
            </p>
            <div className="p-4 bg-white/[0.02] border border-white/5 text-xs font-mono space-y-1 text-zinc-300">
              <p>Email tiếp nhận: <span className="text-emerald-400">privacy@quanganh-skoda.vn</span></p>
              <p>Hotline quản trị dữ liệu: <span className="text-white">0988.333.666</span></p>
              <p>Địa chỉ văn phòng: Số 88 Lê Văn Lương, P. Nhân Chính, Q. Thanh Xuân, Hà Nội</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
