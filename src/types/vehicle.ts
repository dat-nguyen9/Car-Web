export type VehicleCategory = 'SUV' | 'Sedan' | 'Xe điện' | 'Xe thể thao' | 'Wagon';
export type FuelType = 'Xăng Tăng Áp' | 'Thuần Điện' | 'Mild-Hybrid' | 'Plug-in Hybrid';

export interface VehicleColor {
  name: string;
  hex: string;
  type: 'exterior' | 'interior';
}

export interface VehicleSpecs {
  engine: string;
  power: string; // e.g., "180 HP" or "299 HP"
  torque: string; // e.g., "320 Nm"
  acceleration: string; // e.g., "7.8 giây (0-100 km/h)"
  topSpeed: string; // e.g., "210 km/h"
  transmission: string; // e.g., "7 cấp ly hợp kép DSG"
  drivetrain: string; // e.g., "Dẫn động 4 bánh toàn thời gian 4x4"
  fuelConsumption?: string; // e.g., "6.8 L / 100km"
  range?: string; // for EV, e.g., "620 km (WLTP)"
  dimensions: string; // e.g., "4.699 x 1.882 x 1.685 mm"
  wheelbase: string; // e.g., "2.791 mm"
  seatingCapacity: number; // e.g., 7 or 5
  trunkCapacity: string; // e.g., "720 - 2.065 L"
}

export interface Vehicle {
  id: string;
  slug: string; // e.g., 'nova-x5', 'nova-s7', 'nova-e9'
  name: string; // e.g., 'NOVA X5 (Skoda Kodiaq Flagship)'
  shortName: string; // e.g., 'NOVA X5'
  originalModelName: string; // e.g., 'Skoda Kodiaq'
  tagline: string;
  category: VehicleCategory;
  fuelType: FuelType;
  priceStartingFrom: number;
  priceFormatted: string;
  heroImage: string;
  gallery: string[];
  specs: VehicleSpecs;
  keyFeatures: {
    title: string;
    description: string;
    icon?: string;
  }[];
  colors: {
    exterior: VehicleColor[];
    interior: VehicleColor[];
  };
  highlightQuote: string;
  isHeroFeatured?: boolean;
  isElectric?: boolean;
  isNewArrival?: boolean;
}

export interface Dealer {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hotline: string;
  email: string;
  openingHours: string;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  isFlagship?: boolean;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Sản phẩm mới' | 'Công nghệ' | 'Sự kiện' | 'Ưu đãi';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  author: string;
}

export interface TestDriveFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  interestedModel: string;
  preferredDealer: string;
  preferredDate?: string;
  notes?: string;
  agreedToPolicy: boolean;
}
