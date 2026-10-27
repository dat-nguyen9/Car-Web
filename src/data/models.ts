import { Vehicle } from '@/types/vehicle';

export const VEHICLES_DATA: Vehicle[] = [
  {
    id: 'kodiaq-sportline',
    slug: 'kodiaq-sportline',
    name: 'Kodiaq Sportline (SUV 7 Chỗ Đỉnh Cao)',
    shortName: 'Kodiaq Sportline',
    originalModelName: 'Kodiaq Sportline 2.0 TSI 4x4',
    tagline: 'SUV 7 chỗ thể thao đỉnh cao châu Âu — Mang đến sự tinh tế nâng cao và tiện nghi sang trọng cho cả gia đình',
    category: 'SUV',
    fuelType: 'Xăng Tăng Áp',
    priceStartingFrom: 1568000000,
    priceFormatted: '1.568.000.000 VNĐ',
    heroImage: 'https://iprenders.blob.core.windows.net/baseps7v26200003/M3M3vg8s3GXzAZRnekFdVD9pa-D8PeUuWa_NAzX3g1Hj5qK-kGX_KRU4anyePNWB1.57-NQJGCIT-19201080dayvext_front1080.png',
    gallery: [
      'https://iprenders.blob.core.windows.net/baseps7v26200003/M3M3vg8s3GXzAZRnekFdVD9pa-D8PeUuWa_NAzX3g1Hj5qK-kGX_KRU4anyePNWB1.57-NQJGCIT-19201080dayvext_front1080.png',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      engine: '2.0L TSI Turbo tăng áp kép, 4 xi-lanh thẳng hàng',
      power: '180 HP @ 3.900 - 6.000 rpm',
      torque: '320 Nm @ 1.400 - 3.940 rpm',
      acceleration: '7.8 giây (0 - 100 km/h)',
      topSpeed: '210 km/h',
      transmission: 'Hộp số tự động 7 cấp ly hợp kép ướt DSG',
      drivetrain: 'Hệ dẫn động 4 bánh toàn thời gian thông minh 4x4',
      fuelConsumption: '7.2 L / 100km (hỗn hợp)',
      dimensions: '4.699 x 1.882 x 1.685 mm',
      wheelbase: '2.791 mm',
      seatingCapacity: 7,
      trunkCapacity: '720 L (tối đa 2.065 L khi gập phẳng)'
    },
    keyFeatures: [
      {
        title: 'Hệ Thống Đèn Full LED Matrix Pha Lê Crystal Lighting',
        description: 'Tự động điều chỉnh luồng sáng chống chói phương tiện đối diện, mang lại tầm nhìn hoàn hảo trong đêm tối.'
      },
      {
        title: 'Buồng Lái Kỹ Thuật Số Virtual Cockpit 10.25 Inch',
        description: 'Tùy biến 5 giao diện đồ họa hiển thị định vị 3D, hỗ trợ kiểm soát toàn diện thông tin lái.'
      },
      {
        title: 'Gói Thể Thao Sportline Ngoại Thất Đen Bóng',
        description: 'Lưới tản nhiệt, ốp gương, thanh giá nóc và bộ mâm hợp kim 20 inch Vega Anthracite đẳng cấp.'
      },
      {
        title: 'Hệ Thống Kiểm Soát Khung Gầm Thích Ứng DCC',
        description: 'Điều chỉnh hệ thống treo theo 5 chế độ vận hành: Eco, Comfort, Normal, Sport và Snow/Offroad.'
      }
    ],
    colors: {
      exterior: [
        { name: 'Xám Than Graphite Metallic', hex: '#374151', type: 'exterior' },
        { name: 'Trắng Ngọc Trai Moon White', hex: '#F9FAFB', type: 'exterior' },
        { name: 'Xanh Đua Race Blue Metallic', hex: '#1D4ED8', type: 'exterior' },
        { name: 'Đen Huyền Bí Magic Black Pearl', hex: '#111827', type: 'exterior' },
        { name: 'Đỏ Nhung Velvet Red', hex: '#991B1B', type: 'exterior' }
      ],
      interior: [
        { name: 'Ghế Thể Thao Bọc Da Alcantara Đen Viền Bạc', hex: '#1E293B', type: 'interior' },
        { name: 'Da Bò Nappa Thượng Hạng Cognac', hex: '#9A3412', type: 'interior' }
      ]
    },
    highlightQuote: 'Đỉnh cao cơ khí châu Âu cho đại gia đình: Khung gầm MQB vững chãi, 7 chỗ ngồi thực thụ và độ cách âm vượt trội phân khúc.',
    isHeroFeatured: true,
    isNewArrival: false
  },
  {
    id: 'kodiaq-premium',
    slug: 'kodiaq-premium',
    name: 'Kodiaq Premium (SUV 7 Chỗ Sang Trọng)',
    shortName: 'Kodiaq Premium',
    originalModelName: 'Kodiaq Premium 2.0 TSI 4x4',
    tagline: 'Sự hòa quyện hoàn hảo giữa sức mạnh, tiện nghi và phong cách tinh tế dành cho những người luôn đòi hỏi nhiều hơn ở mỗi hành trình',
    category: 'SUV',
    fuelType: 'Xăng Tăng Áp',
    priceStartingFrom: 1480000000,
    priceFormatted: '1.480.000.000 VNĐ',
    heroImage: 'https://iprenders.blob.core.windows.net/baseps7v25200008/P4P4rf_2p0HVwA9WSldkEbTD7nY-7zKYPoSV2JsTdBfwm6F-VPycAHJs_RnTF4CL2q18uw-BDH-19201080dayvext_front1080.png',
    gallery: [
      'https://iprenders.blob.core.windows.net/baseps7v25200008/P4P4rf_2p0HVwA9WSldkEbTD7nY-7zKYPoSV2JsTdBfwm6F-VPycAHJs_RnTF4CL2q18uw-BDH-19201080dayvext_front1080.png',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      engine: '2.0L TSI Turbo tăng áp thế hệ mới',
      power: '180 HP @ 3.900 - 6.000 rpm',
      torque: '320 Nm @ 1.400 - 3.940 rpm',
      acceleration: '8.2 giây (0 - 100 km/h)',
      topSpeed: '205 km/h',
      transmission: 'Hộp số 7 cấp tự động ly hợp kép DSG',
      drivetrain: 'Hệ dẫn động 4 bánh toàn thời gian 4x4 thông minh',
      fuelConsumption: '7.4 L / 100km',
      dimensions: '4.699 x 1.882 x 1.685 mm',
      wheelbase: '2.791 mm',
      seatingCapacity: 7,
      trunkCapacity: '720 L - 2.065 L'
    },
    keyFeatures: [
      {
        title: 'Nội Thất Da Đục Lỗ Cao Cấp Kèm Sưởi & Làm Mát',
        description: 'Tạo cảm giác êm ái thư thái tối đa trong mọi điều kiện thời tiết nhiệt đới gió mùa tại Việt Nam.'
      },
      {
        title: 'Cửa Sổ Trời Toàn Cảnh Panorama Chống Tia UV',
        description: 'Mở rộng tầm nhìn thiên nhiên, tạo cảm giác khoáng đạt cho hành khách trên cả 3 hàng ghế.'
      },
      {
        title: 'Hệ Thống Âm Thanh Canton 12 Loa Hi-End',
        description: 'Công suất 625W tái tạo âm trường trung thực như một nhà hát thính phòng thu nhỏ.'
      },
      {
        title: 'Cốp Sau Đóng Mở Điện Virtual Pedal',
        description: 'Thao tác rảnh tay đá chân mở cốp nhẹ nhàng khi đang mang vác nhiều hành lý.'
      }
    ],
    colors: {
      exterior: [
        { name: 'Xám Xi Măng Steel Grey', hex: '#64748B', type: 'exterior' },
        { name: 'Trắng Sáng Candy White', hex: '#FFFFFF', type: 'exterior' },
        { name: 'Đen Magic Pearl', hex: '#0F172A', type: 'exterior' },
        { name: 'Nâu Đồng Magnetic Brown', hex: '#78350F', type: 'exterior' }
      ],
      interior: [
        { name: 'Da Bò Nappa Amber Nâu Hổ Phách', hex: '#78350F', type: 'interior' },
        { name: 'Da Nappa Đen Tiêu Chuẩn', hex: '#111827', type: 'interior' }
      ]
    },
    highlightQuote: 'Sự cân bằng tinh tế giữa phong cách lịch lãm, công nghệ an toàn 5 sao Euro NCAP và tiện nghi thương gia.',
    isHeroFeatured: false,
    isNewArrival: false
  },
  {
    id: 'karoq-sportline',
    slug: 'karoq-sportline',
    name: 'Karoq Sportline (C-SUV Thể Thao Đô Thị)',
    shortName: 'Karoq Sportline',
    originalModelName: 'Karoq Sportline 1.4 TSI Turbo',
    tagline: 'Từng đường nét được trau chuốt, từng chi tiết nội thất được chăm chút nhằm mang đến trải nghiệm lái tinh tế, thoải mái trên mọi cung đường',
    category: 'SUV',
    fuelType: 'Xăng Tăng Áp',
    priceStartingFrom: 1189000000,
    priceFormatted: '1.189.000.000 VNĐ',
    heroImage: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/7DDXO6HY3SZQEYFG4NS7W6FW3I%3D%3D%3D%3D%3D%3D.png',
    gallery: [
      'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/7DDXO6HY3SZQEYFG4NS7W6FW3I%3D%3D%3D%3D%3D%3D.png',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      engine: '1.4L TSI Turbo phun nhiên liệu trực tiếp',
      power: '150 HP @ 5.000 - 6.000 rpm',
      torque: '250 Nm @ 1.500 - 3.500 rpm',
      acceleration: '8.8 giây (0 - 100 km/h)',
      topSpeed: '201 km/h',
      transmission: 'Hộp số tự động 8 cấp Tiptronic mượt mà',
      drivetrain: 'Hệ dẫn động cầu trước FWD linh hoạt',
      fuelConsumption: '6.3 L / 100km',
      dimensions: '4.390 x 1.841 x 1.603 mm',
      wheelbase: '2.638 mm',
      seatingCapacity: 5,
      trunkCapacity: '521 L (tối đa 1.630 L với ghế VarioFlex)'
    },
    keyFeatures: [
      {
        title: 'Hệ Thống Ghế Thông Minh VarioFlex Độc Bản',
        description: 'Cho phép tháo rời hoàn toàn 3 ghế sau độc lập, biến khoang hành lý thành không gian chứa đồ khổng lồ.'
      },
      {
        title: 'Thiết Kế Khí Động Học Cùng Cánh Lướt Gió Thể Thao',
        description: 'Hệ số cản gió tối ưu, giảm tiêu hao nhiên liệu và tăng độ bám đường ở dải tốc độ cao.'
      },
      {
        title: 'Vô Lăng Thể Thao D-Cut Bọc Da Đục Lỗ Tích Hợp Lẫy Chuyển Số',
        description: 'Tạo cảm giác cầm nắm chắc tay, phản hồi mặt đường chân thực đậm chất lái châu Âu.'
      },
      {
        title: 'Cụm Đèn Pha Full LED Matrix Tinh Thể Bohemians',
        description: 'Ánh sáng trắng sắc nét với họa tiết pha lê thủ công truyền thống trứ danh của Cộng hòa Séc.'
      }
    ],
    colors: {
      exterior: [
        { name: 'Xanh Đua Thể Thao Race Blue', hex: '#1D4ED8', type: 'exterior' },
        { name: 'Đỏ Nhung Velvet Red', hex: '#DC2626', type: 'exterior' },
        { name: 'Xám Bạc Kim Cương Brilliant Silver', hex: '#E2E8F0', type: 'exterior' },
        { name: 'Đen Magic Pearl', hex: '#0F172A', type: 'exterior' }
      ],
      interior: [
        { name: 'Ghế Thể Thao Thermoflux Thoáng Khí Chống Nóng', hex: '#1E293B', type: 'interior' }
      ]
    },
    highlightQuote: 'Mẫu C-SUV linh hoạt hoàn hảo cho đô thị hiện đại: Kích thước gọn gàng, khung gầm đầm chắc và không gian nội thất tùy biến vô tận.',
    isHeroFeatured: true,
    isNewArrival: false
  },
  {
    id: 'karoq-premium',
    slug: 'karoq-premium',
    name: 'Karoq Premium (C-SUV Sang Trọng Đa Năng)',
    shortName: 'Karoq Premium',
    originalModelName: 'Karoq Premium 1.4 TSI Turbo',
    tagline: 'Sự kết hợp hoàn hảo giữa thiết kế hiện đại, mạnh mẽ và công nghệ thông minh, tạo nên một chiếc SUV đầy bản lĩnh cho người tiên phong',
    category: 'SUV',
    fuelType: 'Xăng Tăng Áp',
    priceStartingFrom: 1009000000,
    priceFormatted: '1.009.000.000 VNĐ',
    heroImage: 'https://iprenders.blob.core.windows.net/basenu7v26200004/M3M32L7zOjmEloe9C.JfwubGR1-KIzhu4TsZ2dPW.nl9rFaDxR-TsLgB0_4nCWw8jEiy6RHbl-nKEObXBSeZl-bZVlEepDSiLIfNQ-19201080dayvext_front1080.png',
    gallery: [
      'https://iprenders.blob.core.windows.net/basenu7v26200004/M3M32L7zOjmEloe9C.JfwubGR1-KIzhu4TsZ2dPW.nl9rFaDxR-TsLgB0_4nCWw8jEiy6RHbl-nKEObXBSeZl-bZVlEepDSiLIfNQ-19201080dayvext_front1080.png',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      engine: '1.4L TSI Turbo phun nhiên liệu trực tiếp',
      power: '150 HP @ 5.000 - 6.000 rpm',
      torque: '250 Nm @ 1.500 - 3.500 rpm',
      acceleration: '8.8 giây (0 - 100 km/h)',
      topSpeed: '201 km/h',
      transmission: 'Hộp số 8 cấp tự động êm ái',
      drivetrain: 'Cầu trước FWD',
      fuelConsumption: '6.3 L / 100km',
      dimensions: '4.390 x 1.841 x 1.603 mm',
      wheelbase: '2.638 mm',
      seatingCapacity: 5,
      trunkCapacity: '521 L'
    },
    keyFeatures: [
      {
        title: 'Màn Hình Cảm Ứng Giải Trí Bolero 8 Inch',
        description: 'Hỗ trợ kết nối không dây Apple CarPlay / Android Auto mượt mà, định vị dẫn đường chính xác.'
      },
      {
        title: 'Hệ Thống 7 Túi Khí An Toàn Toàn Diện',
        description: 'Bảo vệ tối đa cho tất cả hành khách, đạt chứng nhận an toàn 5 sao Euro NCAP danh giá.'
      },
      {
        title: 'Điều Hòa Tự Động 2 Vùng Độc Lập Climatronic',
        description: 'Tích hợp cảm biến chất lượng không khí Air Care lọc bụi mịn PM2.5 bảo vệ sức khỏe gia đình.'
      },
      {
        title: 'Hệ Thống Cảm Biến Cảnh Báo Va Chạm Trước/Sau',
        description: 'Hỗ trợ phanh chủ động khẩn cấp khi lùi đỗ hoặc tiến sát chướng ngại vật.'
      }
    ],
    colors: {
      exterior: [
        { name: 'Xanh Ngọc Lục Bảo Emerald Green', hex: '#0E3A2F', type: 'exterior' },
        { name: 'Trắng Ngọc Trai Moon White', hex: '#F9FAFB', type: 'exterior' },
        { name: 'Xám Than Graphite', hex: '#374151', type: 'exterior' }
      ],
      interior: [
        { name: 'Da Cao Cấp Màu Đen Obsidian', hex: '#111827', type: 'interior' }
      ]
    },
    highlightQuote: 'Giá trị thực chất chuẩn Đức: Khung gầm đầm chắc, chi phí sở hữu hợp lý và độ bền bỉ vượt thời gian.',
    isHeroFeatured: false,
    isNewArrival: false
  },
  {
    id: 'octavia-rs',
    slug: 'octavia-rs',
    name: 'Octavia RS (Sedan Thể Thao Hiệu Năng Cao)',
    shortName: 'Octavia RS',
    originalModelName: 'Octavia RS 2.0 TSI 265PS',
    tagline: 'Giải phóng hơn 260 PS dưới nắp ca-pô và tận hưởng cảm giác lái thể thao châu Âu phấn khích tột đỉnh',
    category: 'Xe thể thao',
    fuelType: 'Xăng Tăng Áp',
    priceStartingFrom: 1608000000,
    priceFormatted: '1.608.000.000 VNĐ',
    heroImage: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/FS667PCP6YJF3O74CNZCFWIYRI%3D%3D%3D%3D%3D%3D.png',
    gallery: [
      'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/FS667PCP6YJF3O74CNZCFWIYRI%3D%3D%3D%3D%3D%3D.png',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      engine: '2.0L TSI EA888 Gen 4 Turbo thể thao công suất cao',
      power: '265 PS (261 HP) @ 5.000 - 6.500 rpm',
      torque: '370 Nm @ 1.600 - 4.300 rpm',
      acceleration: '6.4 giây (0 - 100 km/h)',
      topSpeed: '250 km/h (giới hạn điện tử)',
      transmission: 'Hộp số 7 cấp ly hợp kép thể thao DSG',
      drivetrain: 'Dẫn động cầu trước với vi sai chống trượt điện tử VAQ',
      fuelConsumption: '6.8 L / 100km',
      dimensions: '4.689 x 1.829 x 1.455 mm',
      wheelbase: '2.686 mm',
      seatingCapacity: 5,
      trunkCapacity: '600 L (mở cốp dạng Liftback cực rộng 1.555 L)'
    },
    keyFeatures: [
      {
        title: 'Động Cơ 265 Mã Lực Đậm Chất Thể Thao Châu Âu',
        description: 'Tăng tốc bứt phá chỉ trong 6.4 giây, kết hợp âm thanh ống xả thể thao đầy phấn khích.'
      },
      {
        title: 'Khóa Vi Sai Điện Tử Thể Thao VAQ Độc Quyền',
        description: 'Chủ động phân bổ lực kéo giữa hai bánh trước, triệt tiêu hiện tượng thiếu lái khi vào cua gắt ở tốc độ cao.'
      },
      {
        title: 'Khoang Lái Thể Thao vRS Bọc Da Suede & Sợi Carbon',
        description: 'Ghế đua ôm sát lưng người lái, vô lăng vát đáy đục lỗ và đường chỉ thêu đỏ tương phản nổi bật.'
      },
      {
        title: 'Cốp Mở Kiểu Liftback Độc Bản Cực Kỳ Rộng Rãi',
        description: 'Không gian cốp lên đến 600 lít, kết hợp hoàn hảo giữa bản năng tốc độ và sự tiện dụng hàng ngày.'
      }
    ],
    colors: {
      exterior: [
        { name: 'Xanh Mamba Green vRS', hex: '#16A34A', type: 'exterior' },
        { name: 'Đỏ Thể Thao Race Red', hex: '#DC2626', type: 'exterior' },
        { name: 'Xám Bê Tông Meteor Grey', hex: '#64748B', type: 'exterior' },
        { name: 'Đen Ánh Kim Magic Black', hex: '#0F172A', type: 'exterior' }
      ],
      interior: [
        { name: 'Alcantara vRS Đen Chỉ Đỏ', hex: '#111827', type: 'interior' }
      ]
    },
    highlightQuote: 'Cỗ máy tốc độ thuần chất châu Âu: 265 mã lực, lẫy chuyển số vô-lăng, vi sai VAQ và cảm giác dính lưng phấn khích.',
    isHeroFeatured: true,
    isNewArrival: true
  },
  {
    id: 'kushaq',
    slug: 'kushaq',
    name: 'Kushaq (SUV Đô Thị Trẻ Trung & Tiện Nghi)',
    shortName: 'Kushaq',
    originalModelName: 'Kushaq 1.0 TSI Turbo',
    tagline: 'SUV cỡ nhỏ được trang bị ghế da thông gió sang trọng, thiết kế cá tính và công nghệ an toàn chuẩn châu Âu',
    category: 'SUV',
    fuelType: 'Xăng Tăng Áp',
    priceStartingFrom: 599000000,
    priceFormatted: '599.000.000 VNĐ',
    heroImage: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/VG7KFDQU36SBOQPTYY6STHL7XQ%3D%3D%3D%3D%3D%3D.png',
    gallery: [
      'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/VG7KFDQU36SBOQPTYY6STHL7XQ%3D%3D%3D%3D%3D%3D.png',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      engine: '1.0L TSI Turbo 3 xi-lanh thế hệ mới siêu tiết kiệm',
      power: '115 HP @ 5.000 - 5.500 rpm',
      torque: '178 Nm @ 1.750 - 4.500 rpm',
      acceleration: '10.8 giây (0 - 100 km/h)',
      topSpeed: '185 km/h',
      transmission: 'Hộp số tự động 6 cấp với chế độ thể thao',
      drivetrain: 'Dẫn động cầu trước FWD',
      fuelConsumption: '5.8 L / 100km',
      dimensions: '4.225 x 1.760 x 1.612 mm',
      wheelbase: '2.651 mm (Rộng bậc nhất phân khúc B)',
      seatingCapacity: 5,
      trunkCapacity: '385 L (Mở rộng đến 1.405 L)'
    },
    keyFeatures: [
      {
        title: 'Hàng Ghế Trước Tích Hợp Thông Gió Làm Mát Độc Quyền',
        description: 'Trang bị cao cấp hiếm có trong tầm giá, mang lại sự dễ chịu tuyệt đối dưới nắng hè nhiệt đới.'
      },
      {
        title: 'Khung Gầm MQB A0-IN Đạt An Toàn 5 Sao Global NCAP',
        description: 'Thép cường lực dập nóng bảo vệ cabin vững chãi, tạo độ đầm chắc khi vận hành ở tốc độ cao.'
      },
      {
        title: 'Màn Hình Cảm Ứng Trung Tâm 10 Inch Kết Nối Không Dây',
        description: 'Hỗ trợ Apple CarPlay & Android Auto, sạc không dây chuẩn Qi và cổng sạc nhanh Type-C.'
      },
      {
        title: 'Khoảng Sáng Gầm Xe 188 mm Vượt Địa Hình Thoải Mái',
        description: 'Dễ dàng leo vỉa hè đô thị hay vượt qua những cung đường gồ ghề ngập nước mùa mưa.'
      }
    ],
    colors: {
      exterior: [
        { name: 'Cam Hoàng Hôn Honey Orange', hex: '#EA580C', type: 'exterior' },
        { name: 'Đỏ Tornado Red', hex: '#DC2626', type: 'exterior' },
        { name: 'Trắng Kẹo Candy White', hex: '#FFFFFF', type: 'exterior' },
        { name: 'Xám Carbon Steel', hex: '#4B5563', type: 'exterior' }
      ],
      interior: [
        { name: 'Ghế Da Phối Hai Tông Màu Đen - Xám Bạc', hex: '#1F2937', type: 'interior' }
      ]
    },
    highlightQuote: 'Lựa chọn SUV châu Âu thông minh cho gia đình trẻ: Thiết kế hiện đại, ghế làm mát độc quyền và mức giá khởi điểm cực kỳ hấp dẫn.',
    isHeroFeatured: true,
    isNewArrival: true
  },
  {
    id: 'slavia',
    slug: 'slavia',
    name: 'Slavia (Sedan Châu Âu Thanh Lịch)',
    shortName: 'Slavia',
    originalModelName: 'Slavia 1.0 TSI Turbo',
    tagline: 'Tỉ lệ thanh lịch, không gian nội thất rộng rãi và thiết kế hiện đại, đầy tự tin cho hành trình hàng ngày',
    category: 'Sedan',
    fuelType: 'Xăng Tăng Áp',
    priceStartingFrom: 468000000,
    priceFormatted: '468.000.000 VNĐ',
    heroImage: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/FNHAMJST5F2FQQEHJPJ5WZREIE%3D%3D%3D%3D%3D%3D.png',
    gallery: [
      'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/FNHAMJST5F2FQQEHJPJ5WZREIE%3D%3D%3D%3D%3D%3D.png',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: {
      engine: '1.0L TSI Turbo tăng áp 3 xi-lanh chuẩn châu Âu',
      power: '115 HP @ 5.000 - 5.500 rpm',
      torque: '175 Nm @ 1.750 - 4.500 rpm',
      acceleration: '10.7 giây (0 - 100 km/h)',
      topSpeed: '190 km/h',
      transmission: 'Hộp số tự động 6 cấp êm ái',
      drivetrain: 'Dẫn động cầu trước FWD',
      fuelConsumption: '5.3 L / 100km',
      dimensions: '4.541 x 1.752 x 1.487 mm',
      wheelbase: '2.651 mm',
      seatingCapacity: 5,
      trunkCapacity: '521 L (Lớn nhất phân khúc sedan)'
    },
    keyFeatures: [
      {
        title: 'Khoang Hành Lý 521 Lít Rộng Vượt Trội',
        description: 'Chứa vừa vặn 4 vali cỡ lớn hoặc bộ gậy golf, lý tưởng cho những chuyến công tác hay du lịch cuối tuần.'
      },
      {
        title: 'Cửa Sổ Trời Chỉnh Điện & Điều Hòa Kháng Khuẩn Climatronic',
        description: 'Tạo không gian thoáng mát, thanh lọc không khí trong lành cho gia đình.'
      },
      {
        title: 'Buồng Lái Số Virtual Cockpit 8 Inch & Màn Hình 10 Inch',
        description: 'Giao diện đồ họa châu Âu hiện đại, sắc nét và trực quan.'
      },
      {
        title: 'Khung Thép Chịu Lực & 6 Túi Khí An Toàn 5 Sao',
        description: 'Vượt qua các bài thử nghiệm va chạm nghiêm ngặt nhất với số điểm an toàn tuyệt đối.'
      }
    ],
    colors: {
      exterior: [
        { name: 'Đỏ Pha Lê Crystal Red', hex: '#B91C1C', type: 'exterior' },
        { name: 'Xanh Lam Crystal Blue', hex: '#2563EB', type: 'exterior' },
        { name: 'Trắng Ngọc Candy White', hex: '#FFFFFF', type: 'exterior' },
        { name: 'Bạc Ánh Kim Reflex Silver', hex: '#CBD5E1', type: 'exterior' }
      ],
      interior: [
        { name: 'Nội Thất Da Be - Đen Phối Gỗ Piano', hex: '#374151', type: 'interior' }
      ]
    },
    highlightQuote: 'Định nghĩa lại chuẩn mực sedan: Kiểu dáng sang trọng, cảm giác lái đầm chắc kiểu Đức và mức giá tiếp cận dễ dàng.',
    isHeroFeatured: false,
    isNewArrival: true
  }
];

export const TECH_PILLARS = [
  {
    title: 'Hệ Thống Hỗ Trợ Lái Tiên Tiến (Travel Assist ADAS)',
    description: 'Kết hợp camera quét radar đa tần và cảm biến siêu âm, hệ thống chủ động điều chỉnh tốc độ, giữ tâm làn đường và tự động dừng/khởi hành trong đô thị đông đúc.',
    metric: 'Cấp độ 2+',
    subtext: 'Bảo vệ chủ động 360 độ'
  },
  {
    title: 'Màn Hình Kỹ Thuật Số Thế Hệ Mới (Next-Gen Digital Cockpit)',
    description: 'Cụm đồng hồ Virtual Cockpit 10.25 inch kết hợp màn hình cảm ứng trung tâm độ phân giải siêu nét, hỗ trợ kết nối không dây Apple CarPlay và Android Auto.',
    metric: '10.25 Inch HD',
    subtext: 'Giao diện mượt mà, phản hồi tức thì'
  },
  {
    title: 'Khung Gầm Toàn Cầu MQB Danh Tiếng Volkswagen Group',
    description: 'Nền tảng khung gầm sử dụng thép cường lực dập nóng chịu xoắn cực cao, mang lại độ đầm chắc, triệt tiêu rung động và cách âm chuẩn mực xe sang châu Âu.',
    metric: 'MQB Platform',
    subtext: 'Cơ khí đỉnh cao tập đoàn VAG'
  },
  {
    title: 'Triết Lý Tiện Ích Thông Minh Simply Clever',
    description: 'Ghế thông gió làm mát, ô tích hợp sẵn trong cửa người lái, phễu châm nước rửa kính chống tràn và cơ cấu ghế tùy biến linh hoạt VarioFlex.',
    metric: 'Simply Clever',
    subtext: 'Tiện nghi hướng tới con người'
  }
];
