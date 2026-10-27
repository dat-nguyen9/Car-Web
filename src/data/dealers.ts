import { Dealer } from '@/types/vehicle';

export const DEALERS_DATA: Dealer[] = [
  {
    id: 'hanoi-flagship',
    name: 'Quang Anh SKODA — Showroom Flagship Hà Nội',
    city: 'Hà Nội',
    address: 'Số 19 Lê Văn Lương, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội',
    phone: '024 3999 8888',
    hotline: '0988 888 888',
    email: 'quanganh.skoda.hn@gmail.com',
    openingHours: 'Thứ Hai - Chủ Nhật: 08:00 - 19:30',
    mapCoordinates: { lat: 21.0062, lng: 105.8035 },
    isFlagship: true
  },
  {
    id: 'hanoi-tayho',
    name: 'Quang Anh SKODA — Showroom Tây Hồ',
    city: 'Hà Nội',
    address: 'Số 256 Võ Chí Công, Phường Xuân La, Quận Tây Hồ, Hà Nội',
    phone: '024 3777 6666',
    hotline: '0977 777 777',
    email: 'tayho.skoda@gmail.com',
    openingHours: 'Thứ Hai - Chủ Nhật: 08:30 - 19:00',
    mapCoordinates: { lat: 21.0667, lng: 105.8112 }
  },
  {
    id: 'hcm-flagship',
    name: 'Quang Anh SKODA — Showroom Flagship Sài Gòn',
    city: 'TP. Hồ Chí Minh',
    address: 'Số 186 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh',
    phone: '028 3888 9999',
    hotline: '0966 666 666',
    email: 'quanganh.skoda.hcm@gmail.com',
    openingHours: 'Thứ Hai - Chủ Nhật: 08:00 - 20:00',
    mapCoordinates: { lat: 10.7952, lng: 106.7196 },
    isFlagship: true
  },
  {
    id: 'hcm-quan7',
    name: 'Quang Anh SKODA — Showroom Phú Mỹ Hưng',
    city: 'TP. Hồ Chí Minh',
    address: 'Số 102 Nguyễn Văn Linh, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh',
    phone: '028 3555 7777',
    hotline: '0955 555 555',
    email: 'pmh.skoda@gmail.com',
    openingHours: 'Thứ Hai - Chủ Nhật: 08:30 - 19:30',
    mapCoordinates: { lat: 10.7294, lng: 106.7218 }
  },
  {
    id: 'danang',
    name: 'Quang Anh SKODA — Showroom Đà Nẵng',
    city: 'Đà Nẵng',
    address: 'Số 356 Điện Biên Phủ, Phường Thanh Khê Đông, Quận Thanh Khê, TP. Đà Nẵng',
    phone: '0236 388 9999',
    hotline: '0944 444 444',
    email: 'danang.skoda@gmail.com',
    openingHours: 'Thứ Hai - Thứ Bảy: 08:00 - 18:30 | Chủ Nhật: 08:30 - 17:30',
    mapCoordinates: { lat: 16.0678, lng: 108.1925 }
  },
  {
    id: 'haiphong',
    name: 'Quang Anh SKODA — Showroom Hải Phòng',
    city: 'Hải Phòng',
    address: 'Số 8 Lê Hồng Phong, Phường Đông Khê, Quận Ngô Quyền, TP. Hải Phòng',
    phone: '0225 366 8888',
    hotline: '0933 333 333',
    email: 'haiphong.skoda@gmail.com',
    openingHours: 'Thứ Hai - Chủ Nhật: 08:00 - 18:30',
    mapCoordinates: { lat: 20.8497, lng: 106.6974 }
  }
];

export const CITIES_LIST = ['Tất cả', 'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng'];
