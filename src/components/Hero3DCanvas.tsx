'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  currentIndex: number;
}

export default function Hero3DCanvas({ currentIndex }: Hero3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const targetColorRef = useRef<THREE.Color>(new THREE.Color(0x10b981)); // Kodiaq Emerald
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  // Dark luxury automotive studio accent colors (matching Image 2)
  const themeColors = [0x10b981, 0x38bdf8, 0xef4444];

  useEffect(() => {
    targetColorRef.current.setHex(themeColors[currentIndex] || 0x10b981);
  }, [currentIndex]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080b, 0.035);

    const camera = new THREE.PerspectiveCamera(
      52,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.1, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // 2. Architectural 3D Polished Metallic Ring behind the Car
    const ringGeometry = new THREE.TorusGeometry(3.0, 0.025, 16, 120);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.55,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.position.set(2.4, 0.6, -1.8);
    ringMesh.rotation.y = -0.3;
    ringMesh.rotation.x = 0.15;
    scene.add(ringMesh);

    // Secondary Outer Ring
    const outerRingGeometry = new THREE.TorusGeometry(3.9, 0.012, 16, 100);
    const outerRingMaterial = new THREE.MeshBasicMaterial({
      color: 0x64748b,
      transparent: true,
      opacity: 0.25,
    });
    const outerRingMesh = new THREE.Mesh(outerRingGeometry, outerRingMaterial);
    outerRingMesh.position.set(2.4, 0.6, -2.2);
    outerRingMesh.rotation.y = -0.35;
    outerRingMesh.rotation.x = 0.2;
    scene.add(outerRingMesh);

    // 3. Smooth Circular Bokeh Particles (Soft Light Motes, NO Rectangles)
    const particleTexture = createCircularParticleTexture();
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = Math.random() * 6 - 1.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      map: particleTexture,
      color: 0x94a3b8,
      size: 0.12,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 4. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x10b981, 3.2, 14);
    pointLight.position.set(2.5, 1.5, 0);
    scene.add(pointLight);

    // Mouse Parallax Listener
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 0.7;
      mouseRef.current.targetY = (e.clientY / innerHeight - 0.5) * 0.4;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse camera parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      camera.position.x = mouseRef.current.x;
      camera.position.y = 1.1 - mouseRef.current.y;
      camera.lookAt(0.5, 0.4, 0);

      // Rotate 3D Studio Rings
      ringMesh.rotation.z = elapsedTime * 0.12;
      outerRingMesh.rotation.z = -elapsedTime * 0.06;
      ringMesh.position.y = 0.6 + Math.sin(elapsedTime * 0.8) * 0.06;

      // Color morphing between vehicle slide themes
      ringMaterial.color.lerp(targetColorRef.current, 0.04);
      pointLight.color.lerp(targetColorRef.current, 0.04);

      // Particle subtle drift
      particles.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      outerRingGeometry.dispose();
      outerRingMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden will-change-transform opacity-75"
      aria-hidden="true"
    />
  );
}

// Generate smooth circular alpha texture for soft round particles (prevents square quads)
function createCircularParticleTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.35, 'rgba(255, 255, 255, 0.7)');
    gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.15)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
