import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Lighting (Warm pastel illumination)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xb69cff, 1.8);
    dirLight1.position.set(4, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf5b8d2, 1.5);
    dirLight2.position.set(-4, -3, 3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xb8e5e1, 1.6, 20);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    // Group for mouse parallax tilt
    const group = new THREE.Group();
    scene.add(group);

    // Materials with pastel colors
    const matLavender = new THREE.MeshStandardMaterial({
      color: 0xb69cff,
      roughness: 0.25,
      metalness: 0.15,
      wireframe: false,
    });

    const matPink = new THREE.MeshStandardMaterial({
      color: 0xf5b8d2,
      roughness: 0.3,
      metalness: 0.1,
    });

    const matMint = new THREE.MeshStandardMaterial({
      color: 0xb8e5e1,
      roughness: 0.2,
      metalness: 0.2,
    });

    const matCream = new THREE.MeshStandardMaterial({
      color: 0xfff0c9,
      roughness: 0.35,
      metalness: 0.05,
    });

    // 1. Torus (Lavender)
    const torusGeo = new THREE.TorusGeometry(1.25, 0.38, 24, 60);
    const torus = new THREE.Mesh(torusGeo, matLavender);
    torus.position.set(0.2, 0.1, 0);
    group.add(torus);

    // 2. Icosahedron (Pink)
    const icoGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const ico = new THREE.Mesh(icoGeo, matPink);
    ico.position.set(-2.2, 1.4, 0.4);
    group.add(ico);

    // 3. Rounded Octahedron / TorusKnot (Mint Green)
    const knotGeo = new THREE.TorusKnotGeometry(0.5, 0.18, 50, 16, 2, 3);
    const knot = new THREE.Mesh(knotGeo, matMint);
    knot.position.set(2.2, -1.2, 0.6);
    group.add(knot);

    // 4. Floating Sphere (Cream)
    const sphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const sphere = new THREE.Mesh(sphereGeo, matCream);
    sphere.position.set(2.0, 1.5, -0.4);
    group.add(sphere);

    // 5. Small satellite sphere (Lavender accent)
    const smallSphereGeo = new THREE.SphereGeometry(0.3, 24, 24);
    const smallSphere = new THREE.Mesh(smallSphereGeo, matLavender);
    smallSphere.position.set(-1.8, -1.5, 0.2);
    group.add(smallSphere);

    // Mini decorative floating particles
    const particleCount = 14;
    const particleGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const particles: THREE.Mesh[] = [];
    const colors = [0xb69cff, 0xf5b8d2, 0xb8e5e1, 0xfff0c9];

    for (let i = 0; i < particleCount; i++) {
      const pMat = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        roughness: 0.3,
        metalness: 0.2,
      });
      const p = new THREE.Mesh(particleGeo, pMat);
      p.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      );
      group.add(p);
      particles.push(p);
    }

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      mouse.targetX = (clientX / rect.width) * 2 - 1;
      mouse.targetY = -(clientY / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Mouse Parallax with Smooth Lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      group.rotation.y = mouse.x * 0.35;
      group.rotation.x = -mouse.y * 0.25;

      if (!prefersReducedMotion) {
        // Ambient rotations & float
        torus.rotation.x = elapsedTime * 0.28;
        torus.rotation.y = elapsedTime * 0.38;
        torus.position.y = Math.sin(elapsedTime * 1.2) * 0.15;

        ico.rotation.x = elapsedTime * 0.4;
        ico.rotation.z = elapsedTime * 0.25;
        ico.position.y = 1.4 + Math.sin(elapsedTime * 1.5 + 1) * 0.18;

        knot.rotation.x = -elapsedTime * 0.35;
        knot.rotation.y = elapsedTime * 0.45;
        knot.position.y = -1.2 + Math.cos(elapsedTime * 1.4 + 2) * 0.16;

        sphere.position.y = 1.5 + Math.sin(elapsedTime * 1.1 + 3) * 0.14;
        smallSphere.position.y = -1.5 + Math.cos(elapsedTime * 1.6 + 4) * 0.12;

        particles.forEach((p, index) => {
          p.position.y += Math.sin(elapsedTime * 1.5 + index) * 0.003;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries and Materials
      torusGeo.dispose();
      icoGeo.dispose();
      knotGeo.dispose();
      sphereGeo.dispose();
      smallSphereGeo.dispose();
      particleGeo.dispose();

      matLavender.dispose();
      matPink.dispose();
      matMint.dispose();
      matCream.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] md:min-h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing pointer-events-auto"
      aria-label="Interactive 3D pastel shapes"
      role="img"
    />
  );
};
