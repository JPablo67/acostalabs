"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { arcsData } from "./connections";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => null,
});

interface GlobeSceneProps {
  className?: string;
}

export function GlobeScene({ className = "" }: GlobeSceneProps) {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const lastSizeRef = useRef<{ width: number; height: number } | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(
    lastSizeRef.current
  );

  const [visible, setVisible] = useState(false);
  const initializedRef = useRef(false);

  // Measure container
  useEffect(() => {
    let rafId: number;
    const measure = () => {
      const el = containerRef.current;
      if (el && el.offsetWidth > 0 && el.offsetHeight > 0) {
        const next = { width: el.offsetWidth, height: el.offsetHeight };
        setDimensions(next);
        lastSizeRef.current = next;
      } else {
        rafId = requestAnimationFrame(measure);
      }
    };
    rafId = requestAnimationFrame(measure);

    const onResize = () => {
      const el = containerRef.current;
      if (el && el.offsetWidth > 0 && el.offsetHeight > 0) {
        const next = { width: el.offsetWidth, height: el.offsetHeight };
        setDimensions(next);
        lastSizeRef.current = next;
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Configure globe ASAP (no visual delay)
  useEffect(() => {
    if (!dimensions) return;


    const interval = setInterval(() => {
      const globe = globeRef.current;
      if (!globe || initializedRef.current) return;

      const controls = globe.controls();
      if (!controls) return;

      initializedRef.current = true;
      clearInterval(interval);

      // Camera instantly (no animation = no spin window)
      globe.pointOfView({ lat: 15, lng: -50, altitude: 2.0 }, 0);

      // HARD freeze before OrbitControls ticks
      controls.autoRotate = false;
      controls.rotateSpeed = 0;
      controls.enableDamping = false;

      // Restore behavior next frame, then reveal
      requestAnimationFrame(() => {
        controls.rotateSpeed = 0.8;
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;
        controls.autoRotateSpeed = 0.4;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.minPolarAngle = Math.PI / 4;
        controls.maxPolarAngle = Math.PI - Math.PI / 4;
        controls.autoRotate = true;
        // Globe is fully painted — fade it in
        setVisible(true);
      });
    }, 16); // 1 frame polling (faster than 50ms)

    return () => clearInterval(interval);
  }, [dimensions]);

  // Pause auto-rotate when offscreen
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !dimensions) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const controls = globeRef.current?.controls();
        if (controls) controls.autoRotate = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [dimensions]);

  // Kick off the react-globe.gl bundle download immediately — don't wait for dimensions
  useEffect(() => { import("react-globe.gl"); }, []);

  return (
    <div ref={containerRef} className={`relative cursor-grab active:cursor-grabbing ${className}`}>
      {dimensions && (
        <div
          className="transition-opacity duration-700 ease-out will-change-opacity"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <Globe
            ref={globeRef}
            width={dimensions.width}
            height={dimensions.height}
            animateIn={false}
            globeImageUrl="/earth-night.jpg"
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere
            atmosphereColor="#2563EB"
            atmosphereAltitude={0.18}
            arcsData={arcsData}
            arcColor="color"
            arcDashLength={() => 1.0}
            arcDashGap={() => 2}
            arcDashAnimateTime={() => 2500 + Math.random() * 2000}
            arcStroke={0.4}
            arcAltitudeAutoScale={0.4}
          />
        </div>
      )}
    </div>
  );
}