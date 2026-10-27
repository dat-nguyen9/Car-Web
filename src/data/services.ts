export interface ServicePackage {
  id: string;
  name: string;
  mileage: string;
  priceEstimate: string;
  recommendedTime: string;
  items: string[];
  isPopular?: boolean;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'basic-7500',
    name: 'Gói Bảo Dưỡng Cơ Bản (Minor Service)',
    mileage: '7.500 km hoặc 6 tháng',
    priceEstimate: 'Từ 1.800.000 VNĐ',
    recommendedTime: '60 phút',
    items: [
      'Thay dầu động cơ tổng hợp chính hãng Châu Âu',
      'Thay long đen xả dầu và vòng đệm kín',
      'Kiểm tra 24 hạng mục an toàn gầm, phanh và lốp',
      'Kiểm tra và châm thêm dung dịch làm mát, nước rửa kính',
      'Rửa xe và hút bụi nội thất miễn phí'
    ]
  },
  {
    id: 'standard-15000',
    name: 'Gói Bảo Dưỡng Tiêu Chuẩn (Standard Service)',
    mileage: '15.000 km hoặc 12 tháng',
    priceEstimate: 'Từ 3.500.000 VNĐ',
    recommendedTime: '90 phút',
    items: [
      'Bao gồm toàn bộ các hạng mục Gói Cơ Bản',
      'Thay lọc dầu động cơ chính hãng',
      'Thay lọc gió điều hòa kháng khuẩn đa lớp',
      'Căn chỉnh góc đặt bánh xe và cân bằng động',
      'Quét lỗi hệ thống điện tử chuyên dụng ODIS độc quyền',
      'Cập nhật phần mềm điều khiển ECU / Infotainment mới nhất'
    ],
    isPopular: true
  },
  {
    id: 'major-30000',
    name: 'Gói Bảo Dưỡng Toàn Diện (Major Service)',
    mileage: '30.000 km hoặc 24 tháng',
    priceEstimate: 'Từ 7.200.000 VNĐ',
    recommendedTime: '150 phút',
    items: [
      'Bao gồm toàn bộ các hạng mục Gói Tiêu Chuẩn',
      'Thay lọc gió động cơ',
      'Thay dầu phanh DOT 4 Plus chịu nhiệt độ cao',
      'Bảo dưỡng và vệ sinh toàn bộ cụm phanh 4 bánh',
      'Kiểm tra độ rão dây curoa phụ kiện và hệ thống treo',
      'Vệ sinh buồng đốt và kim phun xăng điện tử'
    ]
  }
];

export const SERVICE_FAQS: ServiceFAQ[] = [
  {
    question: 'Chính sách bảo hành xe mới tại Quang Anh SKODA như thế nào?',
    answer: 'Tất cả các dòng xe do Quang Anh SKODA phân phối được áp dụng chính sách bảo hành chính hãng 3 năm hoặc 100.000 km (tùy điều kiện nào đến trước). Ngoài ra, bảo hành 3 năm không gỉ sét bề mặt sơn và 12 năm chống ăn mòn thân vỏ từ trong ra ngoài.'
  },
  {
    question: 'Tôi có cần đặt lịch hẹn trước khi mang xe đến bảo dưỡng không?',
    answer: 'Quý khách nên đặt lịch hẹn trước ít nhất 24 giờ qua website hoặc hotline để được đón tiếp chu đáo tại phòng chờ VIP, chuẩn bị sẵn phụ tùng và ưu tiên cầu nâng kỹ thuật viên.'
  },
  {
    question: 'Xe có được cung cấp dịch vụ cứu hộ khẩn cấp không?',
    answer: 'Có. Tất cả khách hàng của Quang Anh SKODA đều được hưởng dịch vụ cứu hộ khẩn cấp 24/7 trên toàn quốc hoàn toàn miễn phí trong suốt thời gian bảo hành.'
  },
  {
    question: 'Phụ tùng thay thế có đảm bảo 100% chính hãng không?',
    answer: 'Cam kết 100% linh kiện, phụ tùng và dầu bôi trơn được nhập khẩu trực tiếp từ nhà máy Skoda châu Âu, có tem truy xuất nguồn gốc và bảo hành phụ tùng thay thế 2 năm.'
  }
];
