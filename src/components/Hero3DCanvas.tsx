'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  currentIndex: number;
}

export default function Hero3DCanvas({ currentIndex }: Hero3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const targetColorRef = useRef<THREE.Color>(new THREE.Color(0x78f59c)); // Škoda Electric Green
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  // Official Škoda Green & White palette for each vehicle
  const themeColors = [0x78f59c, 0x5ce884, 0x9efcc0];

  useEffect(() => {
    targetColorRef.current.setHex(themeColors[currentIndex] || 0x78f59c);
  }, [currentIndex]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isDisposed = false;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    // Subtle fog to blend distant elements smoothly
    scene.fog = new THREE.FogExp2(0x081e18, 0.025);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0.6, 1.2, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 2. 3D Automotive Showroom Stage (Turntable Ground Disc & Radial Rings)
    // Stage center located under the car presentation area
    const stageCenter = new THREE.Vector3(2.3, -1.35, -0.6);

    const stageGroup = new THREE.Group();
    stageGroup.position.copy(stageCenter);
    scene.add(stageGroup);

    // 2a. Concentric Glowing Stage Rings on the Ground
    const createFloorRing = (radius: number, tube: number, opacity: number, color = 0x78f59c) => {
      const geom = new THREE.TorusGeometry(radius, tube, 16, 120);
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.rotation.x = Math.PI / 2;
      return { mesh, geom, mat };
    };

    const floorRing1 = createFloorRing(2.4, 0.015, 0.7, 0x78f59c);
    const floorRing2 = createFloorRing(3.6, 0.012, 0.45, 0x165b4c);
    const floorRing3 = createFloorRing(4.8, 0.008, 0.3, 0x78f59c);
    stageGroup.add(floorRing1.mesh);
    stageGroup.add(floorRing2.mesh);
    stageGroup.add(floorRing3.mesh);

    // 2b. High-tech 3D Polar Grid / Radar Stage Floor
    const polarGrid = new THREE.PolarGridHelper(5.2, 16, 6, 64, 0x78f59c, 0x0e3a2f);
    polarGrid.position.set(0, 0.01, 0);
    // Adjust material transparency
    if (Array.isArray(polarGrid.material)) {
      polarGrid.material.forEach((m) => {
        m.transparent = true;
        m.opacity = 0.28;
      });
    } else {
      polarGrid.material.transparent = true;
      polarGrid.material.opacity = 0.28;
    }
    stageGroup.add(polarGrid);

    // 3. Floating 3D Architectural Halo Rings behind the Car
    const haloRingGeom1 = new THREE.TorusGeometry(3.1, 0.028, 16, 120);
    const haloRingMat1 = new THREE.MeshBasicMaterial({
      color: 0x78f59c,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const haloRing1 = new THREE.Mesh(haloRingGeom1, haloRingMat1);
    haloRing1.position.set(2.3, 0.65, -1.8);
    haloRing1.rotation.y = -0.32;
    haloRing1.rotation.x = 0.18;
    scene.add(haloRing1);

    const haloRingGeom2 = new THREE.TorusGeometry(4.1, 0.014, 16, 100);
    const haloRingMat2 = new THREE.MeshBasicMaterial({
      color: 0x165b4c,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const haloRing2 = new THREE.Mesh(haloRingGeom2, haloRingMat2);
    haloRing2.position.set(2.3, 0.65, -2.3);
    haloRing2.rotation.y = -0.38;
    haloRing2.rotation.x = 0.22;
    scene.add(haloRing2);

    // 4. Volumetric 3D Floating Bokeh Particles
    const particleTexture = createCircularParticleTexture();
    const particleCount = 140;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16 + 1.0;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 7 + 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 0.5;
      particleScales[i] = Math.random() * 0.15 + 0.08;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      map: particleTexture,
      color: 0x78f59c,
      size: 0.16,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. 3D Studio Showroom Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Main Studio Point Light above the car
    const mainLight = new THREE.PointLight(0x78f59c, 4.0, 16);
    mainLight.position.set(2.4, 2.8, 1.2);
    scene.add(mainLight);

    // Secondary Rim Light
    const rimLight = new THREE.PointLight(0x0e3a2f, 3.0, 12);
    rimLight.position.set(-1.0, 1.0, -1.0);
    scene.add(rimLight);

    // Mouse Tracking Parallax Listener
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 0.9;
      mouseRef.current.targetY = (e.clientY / innerHeight - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. Animation Loop (Zero deprecated APIs, 60fps locked)
    let animationFrameId: number;
    let startTime = performance.now();

    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const elapsedTime = (now - startTime) * 0.001;

      // Smooth mouse camera interpolation (damping)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Camera dynamic 3D orbit
      camera.position.x = 0.6 + mouseRef.current.x * 1.4;
      camera.position.y = 1.2 - mouseRef.current.y * 0.9;
      camera.lookAt(1.4, 0.1, -0.6);

      // Rotate Stage Ground Grid & Concentric Rings
      polarGrid.rotation.y = elapsedTime * 0.06;
      floorRing1.mesh.rotation.z = -elapsedTime * 0.08;
      floorRing2.mesh.rotation.z = elapsedTime * 0.04;

      // Floating & rotating 3D Halo Rings
      haloRing1.rotation.z = elapsedTime * 0.14;
      haloRing2.rotation.z = -elapsedTime * 0.07;
      haloRing1.position.y = 0.65 + Math.sin(elapsedTime * 0.9) * 0.08;
      haloRing2.position.y = 0.65 - Math.sin(elapsedTime * 0.7) * 0.06;

      // Dynamic color lerp to match active vehicle
      haloRingMat1.color.lerp(targetColorRef.current, 0.05);
      floorRing1.mat.color.lerp(targetColorRef.current, 0.05);
      mainLight.color.lerp(targetColorRef.current, 0.05);
      particleMaterial.color.lerp(targetColorRef.current, 0.05);

      // Particle slow drift & rotation
      particles.rotation.y = elapsedTime * 0.02;
      particles.position.y = Math.sin(elapsedTime * 0.4) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Responsive Resize Handling
    const handleResize = () => {
      if (isDisposed || !container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // 8. Clean Cleanup
    return () => {
      isDisposed = true;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      haloRingGeom1.dispose();
      haloRingMat1.dispose();
      haloRingGeom2.dispose();
      haloRingMat2.dispose();
      floorRing1.geom.dispose();
      floorRing1.mat.dispose();
      floorRing2.geom.dispose();
      floorRing2.mat.dispose();
      floorRing3.geom.dispose();
      floorRing3.mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      polarGrid.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-1 overflow-hidden will-change-transform opacity-90"
      aria-hidden="true"
    />
  );
}

// Generate smooth circular alpha texture for soft round particles
function createCircularParticleTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(120, 245, 156, 0.85)');
    gradient.addColorStop(0.7, 'rgba(120, 245, 156, 0.25)');
    gradient.addColorStop(1, 'rgba(120, 245, 156, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
