export interface InventoryCar {
  id: string;
  vin: string;
  modelSlug: string;
  modelName: string;
  versionName: string;
  year: number;
  category: 'SUV' | 'Sedan' | 'Xe điện' | 'Xe thể thao' | 'Wagon';
  exteriorColor: string;
  exteriorColorHex: string;
  interiorColor: string;
  price: number;
  priceFormatted: string;
  location: string;
  status: 'Sẵn sàng giao ngay' | 'Đang về showroom' | 'Đã có khách cọc';
  image: string;
  incentives: string[];
}

export const INVENTORY_DATA: InventoryCar[] = [
  {
    id: 'inv-01',
    vin: 'TMBJJ7NS8P8031201',
    modelSlug: 'kodiaq-sportline',
    modelName: 'Kodiaq Sportline (SUV 7 Chỗ)',
    versionName: '2.0 TSI 4x4 Sportline Edition',
    year: 2024,
    category: 'SUV',
    exteriorColor: 'Xám Than Graphite Metallic',
    exteriorColorHex: '#374151',
    interiorColor: 'Da Alcantara Đen Viền Bạc',
    price: 1568000000,
    priceFormatted: '1.568.000.000 VNĐ',
    location: 'Showroom Flagship Hà Nội',
    status: 'Sẵn sàng giao ngay',
    image: 'https://iprenders.blob.core.windows.net/baseps7v26200003/M3M3vg8s3GXzAZRnekFdVD9pa-D8PeUuWa_NAzX3g1Hj5qK-kGX_KRU4anyePNWB1.57-NQJGCIT-19201080dayvext_front1080.png',
    incentives: ['Hỗ trợ 50% Lệ phí trước bạ', 'Tặng 2 năm bảo hiểm vật chất chính hãng', 'Gói dán phim cách nhiệt cao cấp']
  },
  {
    id: 'inv-02',
    vin: 'TMBJJ7NS8P8031202',
    modelSlug: 'kodiaq-premium',
    modelName: 'Kodiaq Premium (SUV 7 Chỗ)',
    versionName: '2.0 TSI 4x4 Luxury',
    year: 2024,
    category: 'SUV',
    exteriorColor: 'Trắng Sáng Candy White',
    exteriorColorHex: '#FFFFFF',
    interiorColor: 'Da Bò Nappa Amber Nâu Hổ Phách',
    price: 1480000000,
    priceFormatted: '1.480.000.000 VNĐ',
    location: 'Showroom TP. Hồ Chí Minh',
    status: 'Sẵn sàng giao ngay',
    image: 'https://iprenders.blob.core.windows.net/baseps7v25200008/P4P4rf_2p0HVwA9WSldkEbTD7nY-7zKYPoSV2JsTdBfwm6F-VPycAHJs_RnTF4CL2q18uw-BDH-19201080dayvext_front1080.png',
    incentives: ['Tặng bộ thảm sàn Simply Clever cao cấp', 'Bảo dưỡng miễn phí 3 năm']
  },
  {
    id: 'inv-03',
    vin: 'TMBJJ7NS8P8031203',
    modelSlug: 'octavia-rs',
    modelName: 'Octavia RS (Sedan Thể Thao 265PS)',
    versionName: '2.0 TSI EA888 Gen 4 DSG',
    year: 2025,
    category: 'Xe thể thao',
    exteriorColor: 'Xanh Mamba Green vRS',
    exteriorColorHex: '#16A34A',
    interiorColor: 'Alcantara vRS Đen Chỉ Đỏ',
    price: 1608000000,
    priceFormatted: '1.608.000.000 VNĐ',
    location: 'Showroom Flagship Hà Nội',
    status: 'Sẵn sàng giao ngay',
    image: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/FS667PCP6YJF3O74CNZCFWIYRI%3D%3D%3D%3D%3D%3D.png',
    incentives: ['Tặng gói phủ Ceramic bảo vệ sơn xe', 'Ưu đãi lãi suất 0% năm đầu']
  },
  {
    id: 'inv-04',
    vin: 'TMBJJ7NS8P8031204',
    modelSlug: 'karoq-sportline',
    modelName: 'Karoq Sportline (C-SUV)',
    versionName: '1.4 TSI Turbo Tiptronic Sport',
    year: 2024,
    category: 'SUV',
    exteriorColor: 'Xanh Đua Race Blue',
    exteriorColorHex: '#1D4ED8',
    interiorColor: 'Ghế Thể Thao Thermoflux Thoáng Khí',
    price: 1189000000,
    priceFormatted: '1.189.000.000 VNĐ',
    location: 'Showroom Đà Nẵng',
    status: 'Sẵn sàng giao ngay',
    image: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/7DDXO6HY3SZQEYFG4NS7W6FW3I%3D%3D%3D%3D%3D%3D.png',
    incentives: ['Hỗ trợ 100% lệ phí trước bạ', 'Tặng bảo hiểm thân vỏ 1 năm']
  },
  {
    id: 'inv-05',
    vin: 'TMBJJ7NS8P8031205',
    modelSlug: 'karoq-premium',
    modelName: 'Karoq Premium (C-SUV)',
    versionName: '1.4 TSI Turbo Luxury',
    year: 2024,
    category: 'SUV',
    exteriorColor: 'Xanh Ngọc Lục Bảo Emerald Green',
    exteriorColorHex: '#0E3A2F',
    interiorColor: 'Da Cao Cấp Màu Đen Obsidian',
    price: 1009000000,
    priceFormatted: '1.009.000.000 VNĐ',
    location: 'Showroom TP. Hồ Chí Minh',
    status: 'Đang về showroom',
    image: 'https://iprenders.blob.core.windows.net/basenu7v26200004/M3M32L7zOjmEloe9C.JfwubGR1-KIzhu4TsZ2dPW.nl9rFaDxR-TsLgB0_4nCWw8jEiy6RHbl-nKEObXBSeZl-bZVlEepDSiLIfNQ-19201080dayvext_front1080.png',
    incentives: ['Ưu đãi đặt cọc sớm 20 triệu đồng', 'Tặng thẻ bảo dưỡng VIP']
  },
  {
    id: 'inv-06',
    vin: 'TMBJJ7NS8P8031206',
    modelSlug: 'kushaq',
    modelName: 'Kushaq (SUV Đô Thị Tiện Nghi)',
    versionName: '1.0 TSI Turbo Style',
    year: 2025,
    category: 'SUV',
    exteriorColor: 'Cam Hoàng Hôn Honey Orange',
    exteriorColorHex: '#EA580C',
    interiorColor: 'Ghế Da Thông Gió Làm Mát Hai Tông',
    price: 599000000,
    priceFormatted: '599.000.000 VNĐ',
    location: 'Showroom Flagship Hà Nội',
    status: 'Sẵn sàng giao ngay',
    image: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/VG7KFDQU36SBOQPTYY6STHL7XQ%3D%3D%3D%3D%3D%3D.png',
    incentives: ['Tặng gói phụ kiện chính hãng trị giá 30 triệu', 'Hỗ trợ trả góp 85% giá trị xe']
  },
  {
    id: 'inv-07',
    vin: 'TMBJJ7NS8P8031207',
    modelSlug: 'slavia',
    modelName: 'Slavia (Sedan Thanh Lịch)',
    versionName: '1.0 TSI Turbo Elegance',
    year: 2025,
    category: 'Sedan',
    exteriorColor: 'Đỏ Pha Lê Crystal Red',
    exteriorColorHex: '#B91C1C',
    interiorColor: 'Nội Thất Da Be - Đen Phối Gỗ Piano',
    price: 468000000,
    priceFormatted: '468.000.000 VNĐ',
    location: 'Showroom TP. Hồ Chí Minh',
    status: 'Sẵn sàng giao ngay',
    image: 'https://k2ngtoolsfrontdoorprodfde-gpgketbpfhacepaz.a03.azurefd.net/mdmstorage/images/FNHAMJST5F2FQQEHJPJ5WZREIE%3D%3D%3D%3D%3D%3D.png',
    incentives: ['Hỗ trợ 100% thuế trước bạ', 'Tặng bảo hiểm vật chất 1 năm']
  }
];
