'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Vehicle } from '@/types/vehicle';

interface Hero3DSlideBarProps {
  vehicles: Vehicle[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Hero3DSlideBar({
  vehicles,
  currentIndex,
  onSelectIndex,
  isPlaying,
  onTogglePlay,
  onPrev,
  onNext,
}: Hero3DSlideBarProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const targetXRef = useRef(0);
  const currentPuckXRef = useRef(0);

  // Electric green automotive dot colors
  const dotColors = [
    new THREE.Color(0x78f59c), // Škoda Electric Green
    new THREE.Color(0x78f59c), // Škoda Electric Green
    new THREE.Color(0x78f59c), // Škoda Electric Green
  ];

  // 3D Laser Track Micro-Scene on Dark Rail
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = 12;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -width / 2,
      width / 2,
      height / 2,
      -height / 2,
      0.1,
      100
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Subtle 3D Rail Line on Dark Glass
    const railGeometry = new THREE.PlaneGeometry(width, 1.5);
    const railMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
    });
    const railMesh = new THREE.Mesh(railGeometry, railMaterial);
    scene.add(railMesh);

    // 3D Laser Glow Indicator (Active Point)
    const dotGeometry = new THREE.CircleGeometry(4, 32);
    const dotMaterial = new THREE.MeshBasicMaterial({
      color: dotColors[currentIndex] || dotColors[0],
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial);
    scene.add(dotMesh);

    // Outer Soft Glow Ring
    const ringGeometry = new THREE.RingGeometry(4, 8.5, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: dotColors[currentIndex] || dotColors[0],
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    dotMesh.add(ringMesh);

    let animationFrameId: number;
    const segmentWidth = width / vehicles.length;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Target position
      const startX = -width / 2 + segmentWidth / 2;
      targetXRef.current = startX + currentIndex * segmentWidth;

      // Smooth 3D LERP
      currentPuckXRef.current += (targetXRef.current - currentPuckXRef.current) * 0.12;
      dotMesh.position.x = currentPuckXRef.current;

      // Color transition
      const targetColor = dotColors[currentIndex] || dotColors[0];
      dotMaterial.color.lerp(targetColor, 0.08);
      ringMaterial.color.lerp(targetColor, 0.08);

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      camera.left = -newWidth / 2;
      camera.right = newWidth / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
      railMesh.scale.x = newWidth / width;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      railGeometry.dispose();
      railMaterial.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [currentIndex, vehicles.length]);

  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
      {/* Dark Floating Luxury Glassmorphic Slide Bar Dock */}
      <div className="bg-[#081e18]/92 backdrop-blur-md border border-[#78f59c]/20 rounded-sm p-3.5 sm:px-6 sm:py-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6)] text-white">
        {/* 3D Laser Rail Track */}
        <div className="relative mb-2.5">
          <div ref={canvasRef} className="w-full h-3 overflow-hidden pointer-events-none" />
        </div>

        {/* Slide Bar Item Selectors & Minimal Controls */}
        <div className="flex items-center justify-between gap-4">
          {/* Simple Vehicle Selectors (Focus on car name, zero clutter) */}
          <div className="flex items-center gap-6 sm:gap-10">
            {vehicles.map((car, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={car.id}
                  onClick={() => onSelectIndex(idx)}
                  className={`group flex items-center gap-2.5 py-1 transition-all cursor-pointer text-left ${
                    isActive
                      ? 'text-[#78f59c] font-semibold'
                      : 'text-zinc-400 hover:text-white font-normal'
                  }`}
                >
                  <span className="font-mono text-[11px] tracking-wider opacity-60">
                    0{idx + 1}
                  </span>

                  {/* Minimalist Model Name without Škoda */}
                  <span className="text-xs sm:text-sm tracking-wide uppercase transition-colors whitespace-nowrap">
                    {car.shortName}
                  </span>

                  {/* Active Neon Accent Line */}
                  {isActive && (
                    <span className="hidden sm:inline-block w-4 h-[2px] transition-all rounded-full bg-[#78f59c] shadow-[0_0_8px_#78f59c]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Minimal Controls: Dark Glass Pill */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 px-2 py-1 rounded">
            <button
              onClick={onTogglePlay}
              className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded hover:bg-white/10"
              title={isPlaying ? 'Tạm dừng trượt' : 'Tự động trượt'}
              aria-label={isPlaying ? 'Tạm dừng' : 'Tiếp tục'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <div className="h-3 w-px bg-white/20" />
            <button
              onClick={onPrev}
              className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded hover:bg-white/10"
              aria-label="Mẫu xe trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded hover:bg-white/10"
              aria-label="Mẫu xe kế tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
