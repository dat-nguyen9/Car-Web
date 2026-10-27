import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VehicleDetailTemplate from '@/components/VehicleDetailTemplate';
import { VEHICLES_DATA } from '@/data/models';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VEHICLES_DATA.map((v) => ({
    slug: v.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = VEHICLES_DATA.find((v) => v.slug === slug);

  if (!vehicle) {
    return {
      title: 'Mẫu Xe | Quang Anh SKODA',
      description: 'Khám phá các dòng xe châu Âu chính hãng tại Quang Anh SKODA.',
    };
  }

  return {
    title: `${vehicle.name} | Quang Anh SKODA`,
    description: vehicle.tagline,
  };
}

async function VehicleDetailContent({ paramsPromise }: { paramsPromise: Promise<{ slug: string }> }) {
  const { slug } = await paramsPromise;
  const vehicle = VEHICLES_DATA.find((v) => v.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return <VehicleDetailTemplate vehicle={vehicle} />;
}

export default function VehiclePage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#08090b] pt-32 text-center text-zinc-500">Đang tải thông tin xe...</div>}>
      <VehicleDetailContent paramsPromise={params} />
    </Suspense>
  );
}
