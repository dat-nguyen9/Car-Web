import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import BackToTop from '@/components/BackToTop';

const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['vietnamese', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Quang Anh SKODA | Showroom Ô Tô Cao Cấp & Trải Nghiệm Chuẩn Châu Âu',
  description:
    'Quang Anh SKODA - Chuyên viên tư vấn & phân phối các dòng xe Škoda chính hãng chuẩn Châu Âu tại Việt Nam: Kodiaq, Karoq, Octavia RS, Kushaq, Slavia. Dịch vụ tận tâm, lái thử tận nơi, ưu đãi độc quyền.',
  keywords: [
    'Quang Anh SKODA',
    'skoda vietnam',
    'Škoda Kodiaq',
    'Škoda Karoq',
    'Škoda Octavia RS',
    'Škoda Kushaq',
    'Škoda Slavia',
    'xe suv chau au',
    'xe sedan chau au',
    'lai thu xe skoda',
    'showroom skoda cao cap',
  ],
  openGraph: {
    title: 'Quang Anh SKODA — Trải Nghiệm Xe Hạng Sang Chuẩn Châu Âu',
    description:
      'Khám phá bộ sưu tập xe Škoda nhập khẩu và lắp ráp tiêu chuẩn Châu Âu. Đẳng cấp, an toàn 5 sao Euro NCAP và triết lý Simply Clever tinh tế.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${jakartaSans.variable} ${geistMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#08090b] text-[#f3f4f6] selection:bg-[#165B4C] selection:text-white antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <BackToTop />
      </body>
    </html>
  );
}
