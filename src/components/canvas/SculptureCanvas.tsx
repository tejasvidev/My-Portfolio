import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface SculptureCanvasProps {
  className?: string;
}

export const SculptureCanvas: React.FC<SculptureCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [isLowMotion, setIsLowMotion] = useState(false);

  useEffect(() => {
    // Check user's reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsLowMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsLowMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect WebGL capability safely
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGLError(true);
        return;
      }
    } catch {
      setHasWebGLError(true);
      return;
    }

    let animationFrameId: number;
    let isIntersecting = true;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGLError(true);
      return;
    }

    // 2. Composite Group: The Marriage of Logic (Cage) & Lyric (Ribbon)
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Geometry 1: The Cartesian Lattice (Logic) — Anodized wireframe icosahedron
    const cageGeometry = new THREE.IcosahedronGeometry(1.65, 0);
    const cageWireframe = new THREE.WireframeGeometry(cageGeometry);
    const cageMaterial = new THREE.LineBasicMaterial({
      color: 0x3B49DF,
      transparent: true,
      opacity: 0.38,
      linewidth: 1,
    });
    const cageLines = new THREE.LineSegments(cageWireframe, cageMaterial);
    sculptureGroup.add(cageLines);

    // Geometry 2: The Lyrical Ribbon (Language) — Fluid torus knot representing continuous thought
    const ribbonGeometry = new THREE.TorusKnotGeometry(1.05, 0.22, 128, 32, 2, 3);
    const ribbonMaterial = new THREE.MeshStandardMaterial({
      color: 0x8E9CFF,
      roughness: 0.22,
      metalness: 0.55,
      transparent: true,
      opacity: 0.88,
    });
    const ribbonMesh = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    sculptureGroup.add(ribbonMesh);

    // 3. Calibrated Three-Point Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 2.2);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x8E9CFF, 1.8);
    rimLight.position.set(-5, -4, -3);
    scene.add(rimLight);

    const fillLight = new THREE.AmbientLight(0xF4F2EC, 0.7);
    scene.add(fillLight);

    // Initial calibrated presentation tilt
    sculptureGroup.rotation.x = 0.35;
    sculptureGroup.rotation.y = 0.5;

    // 4. Mouse Pointer Damped Response
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 0.6;
      mouseY = y * 0.4;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // 5. Intersection Observer to halt rendering when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 6. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isIntersecting) return;

      const delta = clock.getDelta();

      if (!isLowMotion) {
        // Continuous, subtle sub-hertz rotation
        sculptureGroup.rotation.y += delta * 0.25;
        sculptureGroup.rotation.z += delta * 0.08;

        // Smooth lerped pointer response
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        sculptureGroup.rotation.x = 0.35 + targetY;
        sculptureGroup.position.x = targetX * 0.4;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Responsive Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 8. Teardown
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      cageGeometry.dispose();
      cageWireframe.dispose();
      cageMaterial.dispose();
      ribbonGeometry.dispose();
      ribbonMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isLowMotion]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[300px] flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      {/* Fallback SVG when WebGL fails or takes time */}
      {hasWebGLError && (
        <div className="flex flex-col items-center justify-center p-6 text-center text-ivory-text-secondary">
          <svg
            className="w-48 h-48 animate-pulse text-ivory-accent opacity-80"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            {/* Geodesic Wireframe silhouette */}
            <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" strokeDasharray="3 3" />
            <polygon points="50,28 72,40 72,60 50,72 28,60 28,40" stroke="#8E9CFF" />
            <line x1="50" y1="15" x2="50" y2="85" />
            <line x1="20" y1="32" x2="80" y2="68" />
            <line x1="20" y1="68" x2="80" y2="32" />
            {/* Flowing Ribbon Path */}
            <path
              d="M25,50 Q40,25 50,50 T75,50"
              stroke="#3B49DF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span className="text-xs font-mono uppercase tracking-widest mt-2 text-ivory-text-muted">
            The Mobius of Logic & Lyric
          </span>
        </div>
      )}
    </div>
  );
};
